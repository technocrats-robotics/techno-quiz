// schema for user collection
const mongoose = require('mongoose')
const userType = require('../utils/user')

const user = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    role: {
        type: Number,
        default: userType[201]
    }
});

const User = mongoose.model('User', user)
module.exports = User
