// schema for user collection
const mongoose = require("mongoose");
const userType = require("../utils/user");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        default: () => Date.now(),
    },
    role: {
        type: String,
        default: userType[201],
    },
    department: {
        type: String,
        required: true,
    },
    registrationNumber: {
        type: String,
        required: true,
    },
    attemptedQuiz: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Quiz",
        },
    ],
});

user.pre("save", async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        console.log(err);
        next(err);
    }
});
user.methods = {
    authenticate: async function (plainpassword) {
        console.log("Plain Password", plainpassword);
        console.log("Encrypted Password", this.password);

        return bcrypt.compare(plainpassword, this.password);
    },
};

const User = mongoose.model("User", user);
module.exports = User;
