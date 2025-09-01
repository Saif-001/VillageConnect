// server/index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/', (req, res) => {
  res.send('Welcome to the VillageConnect API!');
});

app.use('/api/services', require('./routes/services'));
app.use('/api/posts', require('./routes/posts'));

// Function to start the server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Successfully connected to MongoDB');
    
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Connection error', err);
    process.exit(1); // Exit the process with an error
  }
};

// Call the function to start the server
startServer();