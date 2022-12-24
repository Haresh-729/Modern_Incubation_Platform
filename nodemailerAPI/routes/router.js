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
// const hbs = require("nodemailer-express-handlebars");

// send mail
router.post("/register", (req, res) => {
  const email = req.body;
  console.log(email.email1);

  //   const obj = JSON.parse(email);
  //   console.log(obj[0].email);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.WORD,
      },
    });

    // transporter.use(
    //   "compile",
    //   hbs({
    //     viewEngine: {
    //       extname: ".handlebars",
    //       partialsDir: "../views",
    //       defaultLayout: false,
    //     },
    //     viewPath: "../views/",
    //   })
    // );

    const mailOptions = {
      from: process.env.EMAIL,
      to: email.email1,
      subject: "Welcome To Modernvate ✔",
      text: "", // plain text body
      html: "<div><h1>Your Modernvate account created successfully...Lets get started with Modernvate...!</h1></div>",
      // template: "index",
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error" + error);
      } else {
        console.log("Email sent:" + info.response);
        res.status(201).json({ status: 201, info });
      }
    });
  } catch (error) {
    console.log("Error" + error);
    res.status(401).json({ status: 401, error });
  }
});

module.exports = router;

{
  /* <div class=""><div class="aHl"></div><div id=":ne" tabindex="-1"></div><div id=":n3" class="ii gt" jslog="20277; u014N:xr6bB; 4:W251bGwsbnVsbCxbXV0."><div id=":n4" class="a3s aiL "><div class="adM">
    
    
    </div><div><div class="adM">
        </div><div style="background:#f8f8f8;font-family:'helvetica';font-size:13px"><div class="adM">
            </div><div style="padding:30px;margin:auto;text-align:center"><div class="adM">
                </div><img src="https://ci3.googleusercontent.com/proxy/-Ri-d5zBk1AVp8iDKBKeQvsoikOWCguu-6xJR5-0OUcfq8tWBFhEGuTrRUjYSWbLxI3oJsUSL1rKCHDzkKk8fpChItLHLNHBh2M=s0-d-e1-ft#https://internshala.com//static/images/mail/is_logo.png" class="CToWUd" data-bit="iit">
            </div>
            <div style="max-width:640px;margin:auto">
                <div style="background:#ffffff;padding:30px;border-radius:2px;color:#444444">
                    Hi Haresh,
<div style="margin-top:13px;line-height:20px"><span class="im">
    <p>
        You have received new message(s) from FactWise Tech for your React Development internship application.
    </p>
    </span><div style="display:block"><span class="im">
        <div style="width:46px;height:46px;background:#eee;display:inline-block;border-radius:50%">
            <img src="https://ci3.googleusercontent.com/proxy/1Iq7iOxKksaDRZPF5CD2qmzisqloX-5sqCiZyEHUaxJ5sQZc1bckhIimeOjY-LuzzhFUu7E50UBsUSEJFcr8txcF27Rrk1O9qvM=s0-d-e1-ft#https://internshala.com//static/images/chat/message.png" style="height:25px;width:26px;margin-left:10px;margin-top:10px" class="CToWUd" data-bit="iit">
        </div>
        <div style="margin-left:12px;color:#666;vertical-align:top;display:inline-block;margin-top:7px">
            <h4 style="margin:0px">FactWise Tech</h4>
            <div style="font-size:.9em;float:left;margin-top:5px">React Development</div>
        </div>

        </span><div style="text-align:left;background-color:#eeeeee;margin-top:40px;padding:10px 10px 10px 10px;border-radius:4px;color:#5c5c5c;font-size:13px">When would you like to work on it? It has a deadline of 24 hours</div>
    </div>

    <div style="text-align:center;margin:16px auto 16px;display:block;height:30px">
        <a href="https://internshala.com/chat/c-39381339?utm_source=chat_mail_student_internship" style="text-decoration:none;border-radius:2px!important;font-style:normal;border:0;background-color:#1295c9;color:#ffffff!important;padding:6px 12px;margin-bottom:0;font-size:13px;text-align:center;width:120px;display:block;margin:auto" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://internshala.com/chat/c-39381339?utm_source%3Dchat_mail_student_internship&amp;source=gmail&amp;ust=1671967403677000&amp;usg=AOvVaw279XCn7sHVLpoJJqoqqIjE"><b>Reply</b></a>
    </div>
</div><span class="im">

<div style="font-size:13px">
    Please do not respond to this email. Click on the "Reply" button to respond via Internshala Chat.
</div>
                </span></div><span class="im">
                <div>
                    <div style="border-bottom:1px solid #e0e0e0;display:block;padding:40px 0px 30px">
                    </div>
                    <div>
                        <div style="padding-top:28px;padding-bottom:10px;text-align:center">
                            <a href="https://instagram.com/internshala" style="text-decoration:none;padding:20px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://instagram.com/internshala&amp;source=gmail&amp;ust=1671967403677000&amp;usg=AOvVaw0PINJ8Miq3mqLhBmhZwchM">
                                <img src="https://ci6.googleusercontent.com/proxy/84BZ2N780k8jfyziZKATvV7NFzckoBR5WI1rlM05li-dBmTmcubzk-ZqZC4dqmg4Aeir2tfsCG0rseuxo8I03gOQFEo7Kcqa=s0-d-e1-ft#https://internshala.com//static/images/mail/insta.png" class="CToWUd" data-bit="iit">    
                            </a>
                            <a href="https://www.facebook.com/Internshala/" style="text-decoration:none;padding:20px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.facebook.com/Internshala/&amp;source=gmail&amp;ust=1671967403677000&amp;usg=AOvVaw0WudWfbfTQ15cZP1GMztVw">
                                <img src="https://ci6.googleusercontent.com/proxy/MYj09GbMEG589UJwYukc_W2U3AxziGpmaJ5TyKHQK63dpSYOBq6BDU21Tb-ntBRnqtJGArmXlvmU1JGPXKv5q2kKGptZ=s0-d-e1-ft#https://internshala.com//static/images/mail/fb.png" class="CToWUd" data-bit="iit">    
                            </a>
                            <a href="https://twitter.com/Internshala" style="text-decoration:none;padding:20px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://twitter.com/Internshala&amp;source=gmail&amp;ust=1671967403677000&amp;usg=AOvVaw0I0XFBRorlPA5b13D3ZvnM">
                                <img src="https://ci6.googleusercontent.com/proxy/5gOx2mfqMhlGSZwd1xNM3jdumGy3hykr4u3LrNLisD-6TtWn8fEpNTZxQNbTKUkfmvE7A6xZq931WwTL9NzY8nPjZ6xWcA-ALC4=s0-d-e1-ft#https://internshala.com//static/images/mail/twitter.png" class="CToWUd" data-bit="iit">    
                            </a>
                            <a href="https://www.linkedin.com/company/internshala/" style="text-decoration:none;padding:20px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/company/internshala/&amp;source=gmail&amp;ust=1671967403677000&amp;usg=AOvVaw3Ar4IsMiI1qQ_3zu2NrZfS">
                                <img src="https://ci5.googleusercontent.com/proxy/pWhewlmcv6yll-jeRTN67SiXK3-VbJ2_A-ni0DC24aTS2dVCda2SgFVkzV6sdD5uYlpv92sNK80YkQQJc8C9z_ApwGmO=s0-d-e1-ft#https://internshala.com//static/images/mail/li.png" class="CToWUd" data-bit="iit">    
                            </a>
                        </div>
                        <div style="text-align:center;height:75px;font-size:11px;color:#b1b1b1;padding:0px 20px 10px">
                            <p style="line-height:2">
                                Internshala (Scholiverse Educare Pvt. Ltd.)<br> 
                                B-610, Unitech Business Zone Golf Course Extension Road, Sector 50, Gurugram
                            </p>
                        </div>
                    </div>
                </div>
            </span></div>
        </div>
    </div>

<img border="0" src="https://ci6.googleusercontent.com/proxy/HY0BNGlbcxEOdqxGRxstdsf0sSINmESWTOr6OcilX1Tv628gk0RGDxu3OiGTgzQPY6_sAHd3baFuH-sWuo70EzNSCutYH_ABmejvFBT9gZlD5XdQnylu7DRI1R_Sv80qtBp1lIfcCmsq1jZa63vtEP4X-S74lEQxShgT1mzsW5M_d-kK=s0-d-e1-ft#https://internshala.com/ets/o/20867545/C1EB239D-CAA4-9AC4-97DA-CD5F799CD648/new_chat_notification_student_updates" width="1" height="1" alt="" class="CToWUd" data-bit="iit"><div class="yj6qo"></div><div class="adL">
</div></div></div><div id=":na" class="ii gt" style="display:none"><div id=":n9" class="a3s aiL "></div></div><div class="hi"></div></div> */
}
