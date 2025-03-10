import { render } from '@react-email/components';
import nodemailer from 'nodemailer';
import { Email } from './email';

const transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

const emailHtml = await render(<Email url="https://example.com" />);

// / Set email options
const mailOptions = {
  from: 'reno@xata.com', // Sender
  to: 'rent@popovych.com', // Recipient
  subject: 'Email Subject', // Email subject
  html: emailHtml, // Email HTML content
}; 

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email sending failed:', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 