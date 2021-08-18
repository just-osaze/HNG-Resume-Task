/**
 * 1. Create a connection function for MongoDB
 * 2. Start a local mongoDB server
 */
const mongoose = require('mongoose');
connectionString = 'mongodb://localhost:27017/portfolio-form';

//Async mongose connection
const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreativeIndex: true,
      useFindAndModify: false
    });

    console.log('Database connected!!!');

  } catch (err) {
    console.error(err.message);
  }
}


module.exports = connectDB;
