const Question = require("../../models/question");
const Quiz = require("../../models/quiz");

const sanitizeQuizQuestion = require("../services/sanitizeQuizQuestion");

const addQuestion = (req, res, next) => {
    const { statement, options, answer } = req.body;
    const ques = new Question({ statement, options, answer });
    ques.save((err, ques) => {
        if (err) {
            return res.json({
                message: "Err: Question Not Added",
                err,
            });
        }
        return res.json({
            status: "Success: Question was Added !",
            data: ques,
        });
    });
};
// for admin to fetch all questions 
const getQuestion = async (req, res, next) => {
    try {
        const ques = await Question.find();
        return res.json({
            status: "Success ! Questions are Fetched",
            data: ques,
        });
    } catch (err) {
        return res.json({
            message: "Err: Questions not Fetched !",
            err,
        });
    }
};

// For user to fetch
const getQuizQuestions = async (req, res) => {
    const quizId = req.params.quizId;
    try {
        const quiz = await Quiz.findById(quizId).populate({
            path: "questions",
        });
        const sanitizedQuestionsArray = sanitizeQuizQuestion(quiz);
        console.log(sanitizedQuestionsArray);
        res.json(sanitizedQuestionsArray);
    } catch (error) {
        console.log(error);
        res.send("FAILED");
    }
};

module.exports = {
    addQuestion,
    getQuestion,
    getQuizQuestions,
};
