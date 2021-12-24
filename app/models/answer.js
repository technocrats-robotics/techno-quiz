const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
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
                ref: "Question",
                required: true,
               
            },
            userAnswer: Number,
        },
    ],
});

const answerModel = mongoose.model("Answer", answerSchema);

module.exports= answerModel;