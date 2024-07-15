const mongoose = require('mongoose');
const dotenv=require('dotenv');

dotenv.config()
const url=process.env.URL;

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
