const jwt = require('jsonwebtoken');
const { Token } = require('../../config/token');

const secretToken = Token.token;

module.export = function (req,res,next) {
    const token = req.header('auth-token');
    if(!token) 
        return(res.status(401).send("Access Denied !!"));
    try{
        const authorise = jwt.verify(token,secretToken.token);
        req.user = verified;
        next();
    } catch(err){
        res.status(400).send("Invalid Token");
    }
}