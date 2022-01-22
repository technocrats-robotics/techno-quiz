const getAnswerObject = (answerArray) => {
    return {
        questionId: answerArray[0],
        userAnswer: answerArray[1],
    };
};

const sanitizeUserAttempt = (userAnswer, userId) => {
    const answers = userAnswer.answers;
    const quizId = userAnswer.quizId;
    let actualArray = [];
    answers.forEach((answer) => {
        actualArray.push(getAnswerObject(answer));
    });

    const responseObject = {
        _id: {
            userId,
            quizId,
        },
        userId,
        quizId,
        answers: actualArray,
    };
    console.log(responseObject);
    return responseObject;
};
module.exports = sanitizeUserAttempt;
