import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 587,
  auth: {
    user: 'api',
    pass: 'b3a5975de5fe2d450c83c792d8e59282'
  },
});

export const sendEmailConfirmation = async (formData) => {
  try {
    const mailOptions = {
      from: 'dev@peerdesk.app',
      to: formData.email,
      subject: 'Conference Registration Confirmation',
      text: 'Thank you for registering',
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent:', mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}