import nodemailer from "nodemailer";

export const sendVerificationMail = async (name, email, user_id) => {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: 'aktiwari0309@gmail.com',
          pass: 'syhl bmig kxyv cnzi'
        },
      });
  
      const mailOptions = {
        from: process.env.USER,
        to: email,
        subject: "Aeonaxy Dribble: Verification Email",
        html:
          "<p>Welcome" +
          name +
          'Click on given link to verify your email address <br> <a href="http://localhost:8000/api/auth/verify?id=' +
          user_id +
          '">Verify Email</a></p>',
      };
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log(
            "Erron in sending verification mail transporter",
            err.message
          );
        } else {
          console.log("Email has been sent to new user", info.response);
        }
      });
    } catch (error) {
      console.log("Error in sending verification mail", error.message);
    }
  };
  
  