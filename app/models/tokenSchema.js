const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: () => Date.now(),
        expires: 43200,
    },
});
module.exports=mongoose.model("Token",tokenSchema);
