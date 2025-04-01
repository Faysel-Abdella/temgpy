import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.PASSWORD;

export const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com", // ✅ Hostinger's SMTP server
  port: 465, // Secure SSL port
  secure: true, // Use SSL
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
