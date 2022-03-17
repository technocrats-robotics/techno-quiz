const Question = require("../../models/question");
const updateQuestions = async (questionArray) => {
    try {
        await Question.updateMany(
            {
                _id: {
                    $in: questionArray,
                },
            },
            {
                $set: {
                    isUsed: true,
                },
            },
            {
                multi: true,
            }
        );
        console.log("Success!");
    } catch (err) {
        console.log(err);
    }
};
module.exports = updateQuestions;
