module.exports = sanitizeSchema = (quizObject) => {
    const questions = quizObject.questions;
    let finalArray = [];

    questions.forEach((question) => {
        let optionArray = question.options;
        let shuffledArray = shuffle(optionArray);
        const modifiedQuestionObject = {
            id: question._id,
            statement: question.statement,
            options: shuffledArray,
        };
        finalArray.push(modifiedQuestionObject);
    });
    return finalArray;
};

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}
