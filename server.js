const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/', (req, res) => {
  res.status(200).json({ data: 'Welcome to Life Calendar' });
});

// Routes

// app.use(app.router);
// routes.initialize(app);
app.get('/api', require('./routes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is listening at ${PORT}`));
