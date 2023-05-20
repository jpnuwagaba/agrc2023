const router = require('express').Router();
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const abstractSchema = new mongoose.Schema({
  title: String,
  name: String,
  email: String,
  affiliation: String,
  country: String,
  areasOfResearch: [String],
  files: [String]
});

const Abstract = mongoose.model('Abstract', abstractSchema);

router.post('/submit', async (req, res) => {
  let abstract = new Abstract({
    title: req.body.title,
    name: req.body.name,
    email: req.body.email,
    affiliation: req.body.affiliation,
    country: req.body.country,
    areasOfResearch: req.body.areasOfResearch,
    files: req.body.files
  });
  abstract = await abstract.save();
  res.send(abstract);
});

async function sendEmail(abstract) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jpnuwagaba1@gmail.com', 
      pass: 'Nuwa@2001' 
    }
  });

  let mailOptions = {
    from: 'jpnuwagaba1@gmail.com', 
    to: email,
    subject: 'New Abstract Submitted',
    text: `New abstract has been submitted by ${abstract.name}. Title: ${abstract.title}`,
    attachments: abstract.files.map(file => ({ path: file })) 
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

router.post('/submit', async (req, res) => {
  let abstract = new Abstract({
    title: req.body.title,
    name: req.body.name,
    email: req.body.email,
    affiliation: req.body.affiliation,
    country: req.body.country,
    areasOfResearch: req.body.areasOfResearch,
    files: req.body.files
  });

  abstract = await abstract.save();

  await sendEmail(abstract);

  res.send(abstract);
});


module.exports = router;