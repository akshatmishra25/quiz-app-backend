const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const quizRoutes = require('./routes/quiz');
const { MONGO_URL } = require('./config');
const { PORT } = require('./config');

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', quizRoutes);

// Connect to MongoDB
mongoose.connect(MONGO_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT} and database connected`)))
  .catch(err => console.log('Database connection error:', err));
