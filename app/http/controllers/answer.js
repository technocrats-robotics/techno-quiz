const answerModel = require("../../models/answer");
const uploadAnswer = async (req,res)=>{
    // User answer should follow the schema of answerSchema
    const {userAnswer} = req.body;
    // TODO: JValidation required before saving
    try{

    const answer = await answerModel.create(userAnswer);
    res.status(200).json({
        message: "Answer saved successfully",
    });
    }
    catch(err){
        res.status(500).json({
            message: "Error saving answer",
        });
    }

}

export default uploadAnswer;