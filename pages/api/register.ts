import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const transporter = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "api",
      pass: process.env.MAILTRAP_PASS,
    },
  });

  try {
    // send first email to person who recieves registrations

    const registrationMailOptions = {
      from: "AGRC2023 <dev@peerdesk.app>",
      to: `${req.body.email}`,
      subject: "Registration Confirmation",
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Registration Email Template</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
          }
      
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
      
          h1 {
            color: #333333;
            font-size: 24px;
            margin-bottom: 20px;
          }
      
          p {
            margin-bottom: 10px;
          }
      
          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: #FFFFFF;
            text-decoration: none;
            border-radius: 4px;
          }

          .name {
            text-transform: capitalize;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Thank you for registering!</h1>
          <p class="name">Dear ${req.body.firstName} ${req.body.lastName},</p>
          <p>Thank you for registering for the agrc2023 conference. We're excited to have you on board.</p>
          <p>Stay tuned for our latest updates.</p>
          <p>If you have any questions, feel free to reach out to us on <b>Phone number</b>.</p>
          <p>
            <a href="https://www.example.com" class="button">Visit Our Website</a>
          </p>
          <p>Best regards,</p>
          <p>The agrc2023 Team</p>
        </div>
      </body>
      </html>      
      `,
    };

    // send second email to person who registers
    await transporter.sendMail(registrationMailOptions);
    res.status(200).json({ message: "email sent successfully" });
  } catch (error) {
    console.error("error sending email:", error);
  }

  // res.status(200).json({ message: "Email sent" });
}
