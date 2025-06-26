const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

const tips = [
  {
    id: 1,
    title: 'Start with Confidence',
    content: 'Confidence is attractive. Stand tall, make eye contact, and smile.'
  },
  {
    id: 2,
    title: 'Listen Actively',
    content: 'Show genuine interest in what the other person is saying.'
  },
  {
    id: 3,
    title: 'Respect Boundaries',
    content: "Always be mindful of the other person's comfort and consent."
  }
];

app.get('/api/tips', (req, res) => {
  res.json(tips);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 