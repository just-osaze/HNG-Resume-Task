/**
 * 1. Create a connection function for MongoDB
 * 2. Start a local mongoDB server
 */
const mongoose = require('mongoose');
connectionUri = 'mongodb://localhost:27017/resume-db';

//Async mongose connection
const connectDB = async () => {
  try {
    await mongoose.connect(connectionUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Database connected!!!');

  } catch (err) {
    console.error(err.message);

  }
}


module.exports = connectDB;
