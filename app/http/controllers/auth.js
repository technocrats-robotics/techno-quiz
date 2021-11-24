const User = require("../../models/user");

const register = (req, res) => {
    console.log("register")
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    user.save()
        .then((user) => {
            res.json({
                message: "User created successfully",
                user,
            });
        })
        .catch((err) => {
            res.json({
                message: "User not created",
                err,
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
                if (user.password === password) {
                    res.json({
                        message: "User found",
                        user,
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
