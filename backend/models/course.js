const mongoose = require('mongoose');

const Course = new mongoose.Schema({
  name: String,
  imagePath: String,
  price: Number,
  category: String,
  description: String,
  ratings: Number,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});

module.exports = mongoose.model('Course', Course);
