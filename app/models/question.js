// schema for question collection
const mongoose = require("mongoose");

const question = new mongoose.Schema({
    statement: {
        type: String,
        required: true,
    },
    options: {
        type: Object,
        default: [],
    },
    answer: {
        type: String,
        required: true,
    },
    department: {
        type: Number,
        required: true,
    },
    isUsed: {
        type: Boolean,
        default: false,
    },
    createdOn: {
        type: Date,
        default: () => Date.now(),
    },
});

const Question = mongoose.model("questions", question);
module.exports = Question;
