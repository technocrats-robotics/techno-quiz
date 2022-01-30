module.exports = sanitizeSchema = (quizObject) => {
    const questions = quizObject.questions;
    let finalArray = [];
    questions.forEach((question)=>{
        const modifiedQuestionObject = {
            id: question._id,
            statement: question.statement,
            options: question.options,
        }
        finalArray.push(modifiedQuestionObject);
    })
    return finalArray;
}