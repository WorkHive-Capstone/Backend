require('dotenv').config()
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

transport.verify((error, success) => {
    if(error){
        console.log('Email transporter failed ', error.message);
    }else {
        console.log('✉️   Email transporter is ready to send emails');
    }
})

module.exports = transport;