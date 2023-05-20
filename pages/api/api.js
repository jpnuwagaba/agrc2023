import { NextApiRequest, NextApiResponse } from "next";
import cors from 'cors';
import mongoose from "mongoose";

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
};

app.use(cors(corsOptions));
app.use(express.json());

// connect to MongoDB
mongoose.connect('mongodb://localhost/conference_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

app.post('/api/registrations/register', async (req, res) => {
  const {title, fullName, email, organization, country} = req.body;

  // save registration to database
  try {
    const registration = await Registration.create({title, fullName, email, organization, country});
    res.status(201).json(registration);
  } catch (error) {
    console.error('Error saving registration: ', error);
    res.status(500).json({error: 'An error occurred while saving the registration'});
  }
});

app.post('/api/abstracts/submit', async (req, res) => {
  const {title, name, email, affiliation, country, areasOfResearch, files} = req.body;

  // save abstract to database
  try {
    const abstract = await Abstract.create({title, name, email, affiliation, country, areasOfResearch, files});
    res.status(201).json(abstract);
  } catch (error) {
    console.error('Error saving abstract', error);
    res.status(500).json({error: 'An error occurred while saving the abstract'});
  }
});

export default app;