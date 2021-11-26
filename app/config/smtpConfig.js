const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.smtp_username,
        pass: process.env.smtp_password,
    },
});

module.exports = transporter;
