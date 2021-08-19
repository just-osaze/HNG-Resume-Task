/**
 * 1. Create a connection function for MongoDB
 * 2. Start a local mongoDB server
 */
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const connectionUrl = 'mongodb://localhost:27017/formDb'
// const { connectionUrl } = process.env; 

const connectDB = () => {
  mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    }, (err) => {
      if (err) return err
      console.log("Database Connected!!!")
    });
  
}

module.exports = connectDB;
