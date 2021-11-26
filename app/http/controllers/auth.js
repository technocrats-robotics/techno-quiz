const User = require("../../models/user");
const Jwt = require("jsonwebtoken");
const transporter = require("../../config/smtpConfig");
const Token = require("../../models/tokenSchema");
const crypto = require("crypto");

const sendConfirmationEmail = (user, token) => {
    const link = `http://localhost:8080/api/auth/verify/${token}`;
    const mailOptions = {
        to: user.email,
        subject: "Verify your email for Techno Quiz Platform!",
        html:
            "<h1>Hello!<br/>Follow this link for verifying your email:<a href=" +
            link +
            "></a></h1>",
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
};

const register = (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });

    user.save(async (err, user) => {
        if (err) {
            return res.json({
                message: "User not found",
                err,
            });
        }
        const token = Jwt.sign(
            {
                id: user._id,
                role: user.role,
            },
            process.env.TOKEN_SECRET,
            {
                expiresIn: "3h",
            }
        );
        // Send Mail to user for confimation
        try {
            const token = new Token({
                userId: user._id,
                token: crypto.randomBytes(16).toString("hex"),
            });
            await token.save();
            sendConfirmationEmail(user, token.token);
        } catch (err) {
            return res.status(500).send("Server error!");
        }

        return res.status(200).json({
            message: "User created",
            token,
        });
    });
};

const login = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
        .then((user) => {
            if (!user) {
                res.json({
                    message: "User not found",
                });
            } else {
                if (user.authenticate(password)) {
                    const token = Jwt.sign(
                        {
                            id: user._id,
                            role: user.role,
                        },
                        process.env.TOKEN_SECRET,
                        {
                            expiresIn: "3h",
                        }
                    );
                    return res.json({
                        message: "User found",
                        token,
                    });
                } else {
                    res.json({
                        message: "Password is incorrect",
                    });
                }
            }
        })
        .catch((err) => {
            res.json({
                message: "User not found",
                err,
            });
        });
};
module.exports = {
    register,
    login,
};
