const mongoose = require("mongoose");

const quiz = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    questions: {
        type: Object,
        default: [],
    },
    start: {
        type: Date,
        required: true,
    },
    duration: {
        type: Date,
        required: true,
    },
    createdOn: {
        type: Date,
        default: () => Date.now(),
    },
    department: {
        type: Number,
        required: true,
    },
    adminId: {
        type: String,
        required: true,
    }
});

const Quiz = mongoose.model("Quiz", quiz);
module.exports = Quiz;

// name, description, questions, date, registered users, department, adminId, duration