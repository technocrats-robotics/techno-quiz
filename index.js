const express = require('express')
const app = express()

// global middlewares
app.use(express.json())

require('dotenv').config()
require('./app/config/db')()
require('./routes/api')(app)

// error handler
app.use((err, req, res, next)=>{
    res.send({
        error: {
            status: err.status || 500, // handle status code here (manually/ use any library)
            message: err.message
        }
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Express Server Listening at PORT ${PORT}`)
})