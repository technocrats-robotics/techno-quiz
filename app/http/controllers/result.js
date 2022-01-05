const Mongoose = require("mongoose");
const resultModel = require("../../models/result");

const getResult = async (req, res) => {
  const userId = req.user.id;
  let quizId = req.params.quizId;
  try {
    quizId = Mongoose.Types.ObjectId(quizId);

    console.log(userId);
    console.log(quizId);

    const userResult = await resultModel.findOne({
      userId,
      quizId,
    });
    console.log(userResult);
    res.json(userResult);
  } catch (err) {
    console.log(err);
    res.send("Error!");
  }
};

module.exports = getResult;
