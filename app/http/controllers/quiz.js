const Quiz = require("../../models/quiz");

const addQuiz = (req, res) => {
    const { name, description, questions, start, end, department, adminId } =
        req.body;
    const quiz = new Quiz({
        name,
        description,
        questions,
        start,
        end,
        department,
        adminId,
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

const getQuiz = async (req, res) => {
    const dept = Number(req.params.dept);
    try {
        const quiz = await Quiz.find({
            department: dept,
            isPublished: true,
            isFinished: false,
        });

        console.log(quiz);

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
    publishQuiz
};
