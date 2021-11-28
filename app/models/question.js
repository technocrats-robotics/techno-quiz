// schema for question collection
const mongoose = require("mongoose");

const question = new mongoose.Schema({
   
  statement: {
    type: String,
    required: true,
  },
  options: {
    type: Object,
    default: [],
  },
  answer: {
    type: Number,
    required: true,
  },
  createdOn: {
    type: Date,
    default: () => Date.now(),
  },
});

const Question = mongoose.model("questions", question);
module.exports = Question;
