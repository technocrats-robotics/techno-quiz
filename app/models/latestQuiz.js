const mongoose = require("mongoose");

const latestQuizSchema = new mongoose.Schema({
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    evaluatedOn: {
        type: Date,
        default: () => Date.now(),
    },
});

const latestQuizModel = mongoose.model("latest", latestQuizSchema);

module.exports = {
    latestQuizModel,
};
