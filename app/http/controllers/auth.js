const User = require("../../models/user");

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
        return res.json({
            message: "User created",
            user,
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
                    return res.json({
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
