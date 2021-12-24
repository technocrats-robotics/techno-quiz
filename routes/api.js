const limiter = require("express-rate-limit");
const { check, validationResult } = require("express-validator");
// controllers
const Question = require("../app/http/controllers/question");
const Auth = require("../app/http/controllers/auth");
const Quiz=require("../app/http/controllers/quiz");
// middlewares
const user = require("../app/http/middlewares/user");
const admin = require("../app/http/middlewares/admin");
const test = require("../testing/verify");
const uploadAnswer = require("../app/http/controllers/answer");


const registerLimiter = limiter({
    windowMs: 5 * 60 * 1000,
    max: 5,
});
const loginLimiter = limiter({
    windowMs: 1 * 60 * 1000,
    max: 5,
});
const api = (app) => {
    app.get("/api/question", user, Question.getQuestion);
    app.post("/api/question",user,admin, Question.addQuestion);
    app.get("/api/quiz",user,Quiz.getQuiz);
    app.post("/api/quiz",user,admin,Quiz.addQuiz);
    app.post(
        "/api/auth/register",
        registerLimiter,
        [
            check("name", "Name should be at least 3 char").isLength({
                min: 3,
            }),
            check("email", "Email is required").isEmail(),
            check("password", "Password should be at least 6 char").isLength({
                min: 6,
            }),
        ],
        Auth.register
    );
    app.post(
        "/api/auth/login",
        loginLimiter,
        [
            check("email", "Email is required").isEmail(),
            check("password", "Password is required").isLength({ min: 1 }),
        ],
        Auth.login
    );
    app.get("/api/auth/verify/:token", Auth.verify);

    // Test Routes
    app.get("/api/token_test", test, (request, response) => {
        response.status(200).send("Verified");
    });
    app.get("/api/test/user", user, (req, res) => {
        res.send("User verified");
    });
    app.get("/api/test/admin", user, admin, (req, res) => {
        res.send("Admin verified");
    });

    app.post("/api/test/answer",user,uploadAnswer)
};

module.exports = api;
