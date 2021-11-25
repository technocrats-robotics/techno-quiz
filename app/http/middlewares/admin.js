const jwt = require("jsonwebtoken");
// admin verification
const admin = (req, res, next) => {
    const user = req.user;
    console.log(user);
    if (user.role !== "admin") {
        return res.status(401).json({
            message: "You are not authorized to perform this action",
        });
    } else {
        next();
    }
};

module.exports = admin;
