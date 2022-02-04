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
    questions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "questions",
        },
    ],
    start: {
        type: Date,
        required: true,
    },
    end: {
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
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
    isFinished: {
        type: Boolean,
        default: false,
    },
});

const Quiz = mongoose.model("Quiz", quiz);
module.exports = Quiz;

// name, description, questions, date, registered users, department, adminId, duration
