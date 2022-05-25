const nodemailer = require("nodemailer");

const config = require("../config/config");

// create transporter object with smtp server details
const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    auth: {
        user: config.smtp.username,
        pass: config.smtp.password
    }
});

const sendMail = async (to, subject, html) => {

    // send email
   return await transporter.sendMail({
        from: config.smtp.from,
        to: to,
        subject: subject,
        html: html
    });

}

module.exports = sendMail;



