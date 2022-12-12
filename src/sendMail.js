const sgMail = require('@sendgrid/mail');
const expressAsyncHandler = require("express-async-handler");

const API_KEY = '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';

sgMail.setApiKey(API_KEY)

const message = {
    to: 'kuradeharesh4002@gmail.com',
    from: 'haresh.personal4@gmail.com',
    subject:'Hello From Modernvate',
    text: 'Hello HAresh',
    html: '<h1> HEllo Haresh From Modernvate<h1>',

};

sgMail.send(message)
.then((response)=>console.log('Email sent...'))
.catch((error)=> console.log(error.message));
