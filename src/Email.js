const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "haresh.personal4@gmail.com",
    pass: "thkeijnrnzogjlpd",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter
  .sendMail({
    from: '"Haresh Kurade" <haresh.personal4@gmail.com>', // sender address
    to: "kuradeharesh4002@gmail.com", // list of receivers
    subject: "Medium @edigleyssonsilva ✔", // Subject line
    text: "There is a new article. It's about sending emails, check it out!", // plain text body
    html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
  })
  .then((info) => {
    console.log({ info });
  })
  .catch(console.error);
