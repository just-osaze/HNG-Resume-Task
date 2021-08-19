const mongoose = require('mongoose');

//Schema
const formSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"]
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"]
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

const formModel = mongoose.model('data', formSchema);

module.exports = formModel;
module.exports = mongoose.model("form", formSchema);