const answerModel = require("../../models/answer");
const sanitizeUserAttempt = require("../services/userAttemptSanitize");
const uploadAnswer = async (req, res) => {
    // User answer should follow the schema of answerSchema
    const userAnswer = req.body;
    const userId = req.user.id;
    console.log(userAnswer);
    console.log(userId);
    const userAttempt = sanitizeUserAttempt(userAnswer, userId);
    // TODO: JValidation required before saving
    try {
        const answer = await answerModel.create(userAttempt);
        res.status(200).json({
            message: "Answer saved successfully",
        });
    } catch (err) {
        // console.log(err);
        res.status(500).json({
            message: "Error saving answer",
        });
    }
};

module.exports = uploadAnswer;
