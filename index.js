const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const donationRoutes = require('./routes/donationRoutes');
const bloodNeedRoutes = require('./routes/bloodNeedRoutes');
const PORT = process.env.PORT || 5000;


// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());



// Routes
app.use('/api/donation', donationRoutes);
app.use('/api/blood/need', bloodNeedRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
