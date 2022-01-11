const Question = require("../../models/question");

const addQuestion = (req, res, next)=>{
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
}

const getQuestion = async (req, res, next)=>{
    try{
       const ques=await Question.find()
        return res.json({
            status: "Success ! Questions are Fetched",
            data: ques,
        });
    }
    catch(err){
        return res.json({
            message: "Err: Questions not Fetched !",
            err,
        });
    }
}

module.exports = {
    addQuestion,
    getQuestion
}