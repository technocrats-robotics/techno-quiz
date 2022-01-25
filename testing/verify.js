const jwt = require('jsonwebtoken');


const secretToken = process.env.TOKEN_SECRET;

module.exports = function (req,res,next) {
    const token = req.headers['auth-token'];
    if(!token) 
        return(res.status(401).send("Access Denied !!"));
        console.log("in")
       jwt.verify(token,secretToken,function(err,user){
           if(err){
           return  res.status(400).send("Invalid Token");
           }
           next()
       });
       
    }


