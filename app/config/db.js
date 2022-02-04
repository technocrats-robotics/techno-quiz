const dotenv = require("dotenv");

// database configuration
const mongoose = require("mongoose");
dotenv.config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the Database!!");
    } catch (err) {
        console.log("Error: ", err);
        console.log("Database Connection failed!!");
    }
};

module.exports = connection;
