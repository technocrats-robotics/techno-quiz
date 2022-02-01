const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
    _id: {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        quizId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Quiz",
            required: true,
        },
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
        required: true,
    },
    answers: [
        {
            questionId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "questions",
                required: true,
            },
            userAnswer: String,
        },
    ],
});

const answerModel = mongoose.model("Answer", answerSchema);

module.exports = answerModel;
