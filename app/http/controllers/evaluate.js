const answerModel = require("../../models/answer");
const resultModel = require("../../models/result");

const evaluateScore = async (answerArray) => {
    // it will loop through the whole array
    answerArray.forEach((answerObject) => {               
        // each element will be a object of user attempt
        // hence we have score evaluation is done inside here
        let score = 0;
        answerObject.answers.forEach((answer) => {
            console.log(answer);
            if (answer.userAnswer === answer.questionId.answer) {
                score++;
            }
        });
        // For each user we have to create a result object 
        const result = saveResult(
            score,
            answerObject.quizId,
            answerObject.userId
        );
    });
};
const saveResult = (score, quizId, userId) => {
    try {
        resultModel.findOne({ quizId, userId }).then((result) => {
            if (result) {
                result.score = score;
                result.save();
            } else {
                const result = new resultModel({
                    userId,
                    quizId,
                    score,
                });
                result.save();
            }
        });
    } catch (err) {
        console.log(err);
    }
};
const evaluateAnswer = async (req, res) => {
    const quizId = req.params.quizId;
    try {
        const answerArray = await answerModel.find({ quizId }).populate({
            path: "answers.questionId",
        });
        console.log(answerArray);
        await evaluateScore(answerArray);
        res.status(200).json({
            message: "Evaluation completed",
        });
    } catch (err) {
        console.log(err);
        res.status(200).send(err);
    }
};
module.exports = evaluateAnswer;
