const nodemailer = require("nodemailer");
const { MdOutlineSurroundSound, MdOutlineExpandLess } = require("react-icons/md");

  
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
      to: "tiptop4002@gmail.com", // list of receivers
      subject: "Medium @edigleyssonsilva ✔", // Subject line
      text: "There is a new article. It's about sending emails, check it out!", // plain text body
      html: "<button className=`bg-black`>Hello</button><b>There is a new article. It's about sending emails, check it out!</b>", // html body
    })
    .then((info) => {
      console.log({ info });
    })
    .catch(console.error);
  