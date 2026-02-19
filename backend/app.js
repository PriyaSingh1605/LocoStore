import express from "express";
import nodemailer from "nodemailer";

const app = express();

// app.get("/", async (req, res) => {

//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: "singhshruti4131@gmail.com",
//         pass: "jpvaxepiuvjqhvab",
//       },
//     });

//     // Test connection
//     await transporter.verify();
//     console.log("SMTP ready");

//     // Send email
//     await transporter.sendMail({
//       from: "singhshruti4131@gmail.com",
//       to: "singhpriya4131@gmail.com",
//       subject: "OTP Verification",
//       html: `
//     <h2>Hello 👋</h2>
//     <p>Hi lady</p>
//     <img src="https://commons.wikimedia.org/wiki/Category:HTTPS" width="300"/>
//   `,
//     });

//     res.json("Email sent ✅");
//   } catch (err) {
//     console.log(err);
//     res.json("Error sending email ❌");
//   }
// });

app.get("/", (req,res) => {
  try {
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "singhshruti4131@gmail.com",
        pass: "jpvaxepiuvjqhvab",
      },
    });

    let mailDetails = {
      from: "singhshruti4131@gmail.com",
      to: "singhpriya4131@gmail.com",
      subject: "testmail",
      text: "hii",
    };

    mailTransporter.sendMail(mailDetails, (err, data) => {
      if (err) {
        res.send("err occured");
      } else {
        res.send("send successfully");
      }
    });
  } catch (err) {
    console.log(err);
  }
});
app.listen(3000, () => {
  console.log("App Started");
});
