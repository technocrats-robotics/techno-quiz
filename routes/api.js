// controllers
const Question = require('../app/http/controllers/question')
const Auth = require('../app/http/controllers/auth')
// middlewares
const user = require('../app/http/middlewares/user')
const admin = require('../app/http/middlewares/admin')
const test=require('../testing/verify')

const api = (app)=>{
    
    app.get('/api/question', user, Question.getQuestion)
    app.post('/api/question', admin, Question.addQuestion)
    app.post('/api/auth/register', Auth.register)
    app.post('/api/auth/login',Auth.login)
    app.get('/api/token_test',test,(request,response)=>{
             response.status(200).send("Verified")
    })

}

module.exports=api