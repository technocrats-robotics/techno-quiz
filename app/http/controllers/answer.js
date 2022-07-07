const answerModel = require("../../models/answer");
const User = require("../../models/user");
const sanitizeUserAttempt = require("../services/userAttemptSanitize");
const uploadAnswer = async (req, res) => {
    // User answer should follow the schema of answerSchema
    const userAnswer = req.body;
    const userId = req.user.id;
    const userAttempt = sanitizeUserAttempt(userAnswer, userId);
    // TODO: JValidation required before saving
    try {
        const answer = await answerModel.create(userAttempt);
        const attempt = await User.updateOne(
            { _id: userId },
            { $push: { attemptedQuiz: answer.quizId } }
        );
        res.status(200).json({
            message: "Answer saved successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error saving answer",
        });
    }
};

module.exports = uploadAnswer;
