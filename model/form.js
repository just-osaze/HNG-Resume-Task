const mongoose = require('mongoose');

//Schema
const formSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  tel: {
    type: Number,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("form", formSchema)