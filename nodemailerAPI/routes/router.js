// const express = require("express");
// const router = new express.Router();
// const nodemailer = require("nodemailer");

// router.post("/register", (req, res) => {
//   const { email } = req.body;
//   console.log("HI");
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "haresh.personal4@gmail.com",
//         pass: "thkeijnrnzogjlpd",
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });

//     transporter
//       .sendMail({
//         from: '"Haresh Kurade" <haresh.personal4@gmail.com>', // sender address
//         to: email, // list of receivers
//         subject: "Medium @edigleyssonsilva ✔", // Subject line
//         text: "There is a new article. It's about sending emails, check it out!", // plain text body
//         html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
//       })
//       .then((info) => {
//         console.log( info.response );
//         res.status(201).json({status:201,info})
//       })
//       .catch(console.error);
//   } catch (error) {
//     res.status(201).json({status:401,error})
//   }
// });

// module.exports = router;




const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");




// send mail
router.post("/register",  (req, res) => {

    const { email } = req.body;
    console.log(email);
  

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "haresh.personal4@gmail.com",
                pass: "thkeijnrnzogjlpd"
            }
        });

        const mailOptions = {
            from: "haresh.personal4@gmail.com",
            to: email,
            subject: "Welcome To Modernvate ✔",
            text: "", // plain text body
            html: '<h1>Your Modernvate account created successfully...Lets get started with Modernvate...!</h1>'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
});


module.exports = router;