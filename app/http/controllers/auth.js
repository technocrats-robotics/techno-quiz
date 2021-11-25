const User = require("../../models/user");
const Jwt=require("jsonwebtoken")

const register = (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });

    user.save((err, user) => {
        if (err) {
            return res.json({
                message: "User not found",
                err,
            });
        }
        const token=Jwt.sign({
            id:user._id,
            role:user.role
        },process.env.TOKEN_SECRET,{
            expiresIn:"3h"
        })
        return res.json({
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
                    const token=Jwt.sign({
                        id:user._id,
                        role:user.role
                    },process.env.TOKEN_SECRET,{
                        expiresIn:"3h"
                    })
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
