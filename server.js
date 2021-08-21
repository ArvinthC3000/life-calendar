const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use(cors());

app.use('/', (req, res) => {
  res.status(200).json({ data: 'Welcome to Life Calendar' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is listening at ${PORT}`));
