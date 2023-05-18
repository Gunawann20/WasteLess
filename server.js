const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database/connection');
const authRoutes = require('./routes/authRoutes');
const foodRoutes = require('./routes/foodRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use(authRoutes);
app.use(foodRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
