const router = require('express').Router();
const mongoose = require('mongoose')

const registrationSchema = new mongoose.Schema({
  title: String,
  fullName: String,
  email: String,
  organization: String,
  country: String
});

const Registration = mongoose.model('Registraion', registrationSchema);

router.post('/register', async (req, res) => {
  let registration = new Registration({
    title: req.body.title,
    fullName: req.body.fullName,
    email: req.body.email,
    organization: req.body.organization,
    country: req.body.country
  });
  registration = await registration.save();
  res.send(registration);
});

module.exports = router;