/**
 * 1. Create a connection function for MongoDB
 * 2. Start a local mongoDB server
 */
const mongoose = require('mongoose');
require('dotenv').config();

// const connectionUrl = 'mongodb://localhost:27017/formDb'

const connectDB = () => {
  mongoose.connect(process.env.CONNECTIONURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    }, (err) => {
      if (err) return err
      console.log("Database Connected!!!")
    });
  
}

module.exports = connectDB;
