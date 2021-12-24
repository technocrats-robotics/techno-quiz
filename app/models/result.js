const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
        required: true,
    },
    score:{
        type:Number,
        default:0
    }
});

const resultModel = mongoose.model("Result", resultSchema);

module.exports=resultModel