const Quiz = require("../../models/quiz");

const addQuiz=(req,res)=>{
    const { name,description,questions,start,end,department,adminId}=req.body
    const quiz = new Quiz({ name,description,questions,start,end,department,adminId});
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

}

const getQuiz = async (req, res)=>{
    try{
       const quiz=await Quiz.find()
        return res.json({
            status: "Success ! Quiz are Fetched",
            data: quiz,
        });
    }
    catch(err){
        return res.json({
            message: "Err: Quiz not Fetched !",
            err,
        });
    }
}

module.exports = {
    addQuiz,
    getQuiz
}