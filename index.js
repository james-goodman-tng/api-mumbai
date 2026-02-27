const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

app.get('/time', (req, res) => {
  const now = new Date();
  const mumbaiTime = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(now);
  
  const mumbaiDate = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(now);

  res.json({
    timezone: 'Asia/Kolkata',
    city: 'Mumbai',
    time: mumbaiTime,
    date: mumbaiDate,
    timestamp: now.toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'api-mumbai' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Mumbai API running on port ${PORT}`);
});