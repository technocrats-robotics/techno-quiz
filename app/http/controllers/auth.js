const User = require("../../models/user");
const Jwt = require("jsonwebtoken");
const transporter = require("../../config/smtpConfig");
const Token = require("../../models/tokenSchema");
const crypto = require("crypto");
const { check, validationResult } = require("express-validator");

const sendConfirmationEmail = (user, token) => {
    const link = `http://localhost:${process.env.PORT}/api/auth/verify/${token}`;
    const mailOptions = {
        to: user.email,
        subject: "Verify your email for Techno Quiz Platform!",
        html:
            "<h1>Hello!<br/>Follow this link for verifying your email:<a href=" +
            link +
            ">Click Here</a></h1>",
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const { name, email, password, username, department, registrationNumber } =
        req.body;
    const user = new User({
        name,
        username,
        email,
        password,
        department,
        registrationNumber,
    });
    console.log(user);

    user.save(async (err, user) => {
        if (err) {
            return res.status(400).json({
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    console.log("HIT!!!");
    User.findOne({ email })
        .then((user) => {
            if (!user) {
                res.status(404).json({
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
                    const responseUser = {
                        email: user.email,
                        isAdmin: user.isAdmin,
                        name: user.name,
                        role: user.role,
                        createdOn: user.createdOn,
                    };
                    return res.json({
                        responseUser,
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
const verify = (req, res) => {
    const { token } = req.params;
    Token.findOne({ token })
        .then((token) => {
            if (!token) {
                return res.json({
                    message: "Token not found",
                });
            }
            User.findOne({ _id: token.userId })
                .then((user) => {
                    if (!user) {
                        return res.json({
                            message: "User not found",
                        });
                    }
                    user.isVerified = true;
                    user.save();
                    return res.json({
                        message: "User verified",
                    });
                })
                .catch((err) => {
                    res.json({
                        message: "User not found",
                        err,
                    });
                });
        })
        .catch((err) => {
            res.json({
                message: "Token not found",
                err,
            });
        });
};
module.exports = {
    register,
    login,
    verify,
};
