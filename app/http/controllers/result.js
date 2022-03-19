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

const getLeaderboard = async (req, res) => {
    let quizId = req.params.quizId;
    try {
        quizId = Mongoose.Types.ObjectId(quizId);

        const leaderBoardResult = await resultModel
            .find({
                quizId,
            })
            .sort({ score: -1 })
            .populate({
                path: "userId",
                select: "username name",
            });
        console.log(leaderBoardResult);

        res.status(200).json(leaderBoardResult);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Some error" });
    }
};
module.exports = { getResult, getLeaderboard };
