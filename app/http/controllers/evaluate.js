const { default: answerModel } = require("../../models/answer")

const evaluateAnswer=async(req,res)=>{
    
    const quizId=req.body.quizId
    try{

        const answerArray=await answerModel.find({quizId})
        console.log(answerArray)

    }
   

    catch(err){
           
        console.log(err)
    }
   

   
 
}