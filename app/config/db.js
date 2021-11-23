const dotenv = require('dotenv');
const result = dotenv.config();

// database configuration
const mongoose = require("mongoose")

const techno_quiz = {
  username: process.env.MONGODB_USERNAME,
  password: process.env.MONGODB_PASSWORD,
  database: process.env.MONGODB_DATABASE,
}

const DB_URI = `mongodb+srv://${techno_quiz.username}:${techno_quiz.password}@cluster0.qg93m.mongodb.net/${techno_quiz.database}?retryWrites=true&w=majority`;
const connection = async () => {
    try {
        await mongoose.connect(DB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        console.log('Connected to the Database!!')

    } catch (err) {
        console.log('Error: ', err)
        console.log('Database Connection failed!!')
    }

};

module.exports = connection