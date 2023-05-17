import type { NextApiRequest, NextApiResponse } from "next";
import { MailtrapClient } from 'mailtrap'

const TOKEN = 'b3a5975de5fe2d450c83c792d8e59282'
const ENDPOINT = 'https://send.api.mailtrap.io/'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  // console.log(" ============> ", req.body);

  const {name} = req.body
  console.log("name =============> ", name)
  

  const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

  const sender = {
    email: "mailtrap@peerdesk.app",
    name: "Mailtrap Test",
  };
  const recipients = [
    {
      email: req.body.email,
    }
  ];

  client
    .send({
      from: sender,
      to: recipients,
      subject: "You are awesome!",
      text: "Congrats for sending test email with Mailtrap!",
      category: "Integration Test",
    })
    .then(console.log, console.error);

}

// import type { NextApiRequest, NextApiResponse } from "next";
// import { createTransport } from "nodemailer";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const transporter = createTransport({
//       host: "live.smtp.mailtrap.io",
//       port: 587,
//       secure: false,
//       auth: {
//         user: 'api',
//         pass: 'b3a5975de5fe2d450c83c792d8e59282',
//       },
//     });

//     await transporter.sendMail({
//       from: "agrc2023 <dev@peerdesk.app>",
//       to: req.body.email,
//       subject: "New contact form submission",
//       text: `Name: ${req.body.body}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
//     });

//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ error: "Failed to send email" });
//   }
// }