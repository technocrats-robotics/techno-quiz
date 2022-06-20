const Quiz = require("../../models/quiz");
const updateQuestions = require("../services/updateQuestion");

const addQuiz = (req, res) => {
    const { name, description, questions, start, end, department } = req.body;
    const quiz = new Quiz({
        name,
        description,
        questions,
        start,
        end,
        department,
    });
    quiz.save((err, quiz) => {
        if (err) {
            return res.json({
                message: "Err: Quiz Not Added",
                err,
            });
        }
        return res.json({
            status: "Success: Quiz was Added !",
            data: quiz,
        });
    });
};
const addQuizQuestions = async (req, res) => {
    const { question } = req.body;
    const { quizId } = req.body;
    try {
        const quiz = await Quiz.findById(quizId);
        await updateQuestions(question);
        quiz.questions = question;
        quiz.save();
        res.status(200).json({
            message: "Questions added to:",
            quizId: quizId,
        });
    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Server failure",
            error: err,
        });
    }
};

// users, not for admins
const getQuiz = async (req, res) => {
    const date = Date.now();
    console.log("Inside getQuiz");
    try {
        const quiz = await Quiz.find({
            isPublished: true,
            isFinished: false,
            end: {
                $gte: date,
            },
        });

        return res.json({
            status: "Success ! Quiz are Fetched",
            data: quiz,
        });
    } catch (err) {
        return res.json({
            message: "Err: Quiz not Fetched !",
            err,
        });
    }
};

// for admins only
const getAllQuiz = async (req, res) => {
    const { department } = req.params;
    try {
        const quiz = await Quiz.find({
            department: department,
        });
        return res.json({
            status: "Success ! Quiz are Fetched",
            data: quiz,
        });
    } catch (err) {
        return res.json({
            message: "Err: Quiz not Fetched !",
            err,
        });
    }
};

const publishQuiz = async (req, res) => {
    const quizId = req.body.quizId;
    try {
        const quiz = await Quiz.findOne({ quizId });
        quiz.isPublished = true;
        quiz.save();
        res.status(200).send("PUBLISHED");
    } catch (error) {
        res.status(500).send("ERROR");
    }
};
module.exports = {
    addQuiz,
    getQuiz,
    addQuizQuestions,
    publishQuiz,
    getAllQuiz,
};
