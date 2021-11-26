const jwt = require("jsonwebtoken");
// user verification
// verify user here

const user = (req, res, next) => {
    const token = req.headers["auth-token"];
    if (!token) {
        return res.status(401).json({ message: "No token provided!" });
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.json({
                message: "Invalid Token",
            });
        }
        req.user = decoded;

        next();
    });
    // verify user here
};

module.exports = user;
