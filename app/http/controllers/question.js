const Question = require("../../models/question");
const Quiz = require("../../models/quiz");

const sanitizeQuizQuestion = require("../services/sanitizeQuizQuestion");

const addQuestion = async (req, res, next) => {
    const { statement, options, answer, department } = req.body;

    const ques = new Question({ statement, options, answer, department });
    // const [addQuestion]

    const existing = await Question.findOne({ statement });

    if (existing) {
        return res.status(400).json({
            message: "Question already exists",
        });
    }

    console.log(req.body);
    ques.save((err, ques) => {
        if (err) {
            return res.status(501).json({
                message: "Err: Question Not Added",
                err,
            });
        }
        return res.status(201).json({
            status: "Success: Question was Added !",
            data: ques,
        });
    });
};

const deleteQuestion = async (req, res) => {
    const { questionId } = req.body;

    try {
        await Question.deleteOne({ questionId });
        return res.send("Question deleted");
    } catch (err) {
        return res.json({
            message: "Error, Question not deleted!",
            err,
        });
    }
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
        let responseObject = {
            start: quiz.start,
            end: quiz.end,
            department: quiz.department,
            questions: sanitizedQuestionsArray,
        };
        res.json(responseObject);
    } catch (error) {
        console.log(error);
        res.send("FAILED");
    }
};

module.exports = {
    addQuestion,
    getQuestion,
    getQuizQuestions,
    deleteQuestion,
};
