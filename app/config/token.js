const dotenv = require('dotenv');
const result = dotenv.config();

const Token = {
    token: process.env.TOKEN_SECRET,
}

module.exports.Token = Token;