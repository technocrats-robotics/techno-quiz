const Question = require("../../models/question");
const Quiz = require("../../models/quiz");

const sanitizeQuizQuestion = require("../services/sanitizeQuizQuestion");

const addQuestion = (req, res, next) => {
<<<<<<< HEAD
    const { statement, options, answer, department } = req.body;
    const ques = new Question({ statement, options, answer,department });
=======
    const { statement, options, answer } = req.body; // TODO: do data validation here 

    if(!statement || !options || options.length != 4 || !answer){
        return res.json({
            message: "All parameters are required!",
            status: "failed"
        })
    }
    
    let optionCheck = new Map() // to detect duplicate options

    let allOptions = [] // options mapped to a id
    let answerId = -1 // answer id (as per option)

    options.map((option, index)=>{

        // check for duplicate options
        if(optionCheck.has(option)){
            return res.json({
                message: "Duplicate options found!",
                status: "failed"
            })
        }

        optionCheck.set(option, true)

        // assign id to uniquely identify options 
        allOptions.push({
            [index]: option
        })
        
        // save answer id
        if(option === answer){
            answerId = index
        }

    })

    // if answer does not match any option
    if(answerId == -1){
        return res.json({
            message: "Invalid answer!",
            status: "failed"
        })
    }

    const ques = new Question({ statement, options: allOptions, answer: answerId });

>>>>>>> 4e53decc497fa074205b74e57004898de84bdaea
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

const deleteQuestion= async (req,res)=>{
    const {questionId}=req.body;

    try{
        await Question.deleteOne({questionId})
        return res.send("Question deleted");

    }
    catch(err){
        return res.json({
            message:"Error, Question not deleted!",
            err,
        })
    }
}

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
        }
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
    deleteQuestion
};
