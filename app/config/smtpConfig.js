const nodemailer=require('nodemailer');

const transporter = nodemailer.createTransport("SMTP",{
    service: 'gmail',
    auth: {
        user: process.env.smtp_username,
        pass: process.env.smtp_password,
    }

});
module.exports=transporter;