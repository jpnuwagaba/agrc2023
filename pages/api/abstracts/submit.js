import axios from 'axios';

export default async function handler(req, res) {
  try {
    const { data } = await axios.post('http://localhost:5000/api/abstracts/submit', req.body);
    res.status(201).json(data);
  } catch (error) {
    console.error('Error submitting abstract:', error);
    res.status(500).json({ error: 'An error occurred while submitting the abstract.' });
  }
}
