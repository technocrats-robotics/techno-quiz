// controllers
const Question = require('../app/http/controllers/question')
const Auth = require('../app/http/controllers/auth')
// middlewares
const user = require('../app/http/middlewares/user')
const admin = require('../app/http/middlewares/admin')

const api = (app)=>{
    
    app.get('/api/question', user, Question.getQuestion)
    app.post('/api/question', admin, Question.addQuestion)
    app.post('/api/auth/register', Auth.register)
    app.post('/api/auth/login',Auth.login)

}

module.exports = api