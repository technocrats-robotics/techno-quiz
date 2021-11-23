// controllers
const Question = require('../app/http/controllers/question')

// middlewares
const user = require('../app/http/middlewares/user')
const admin = require('../app/http/middlewares/admin')

const api = (app)=>{
    
    app.get('/api/question', user, Question.getQuestion)
    app.post('/api/question', admin, Question.addQuestion)

}

module.exports = api