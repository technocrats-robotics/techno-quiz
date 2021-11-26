// controllers
const Question = require("../app/http/controllers/question");
const Auth = require("../app/http/controllers/auth");
// middlewares
const user = require("../app/http/middlewares/user");
const admin = require("../app/http/middlewares/admin");
const test = require("../testing/verify");

const api = (app) => {
    app.get("/api/question", user, Question.getQuestion);
    app.post("/api/question", admin, Question.addQuestion);
    app.post("/api/auth/register", Auth.register);
    app.post("/api/auth/login", Auth.login);
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
};

module.exports = api;
