const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  addressOne: String,
  addressTwo: String,
  country: String,
  items: [{ type: Schema.Types.ObjectId, ref: 'Course'}],
  date: { type: Date, default: Date.now()},
  creator: { type: Schema.Types.ObjectId, ref: "User"}

});

module.exports = mongoose.model('Order', orderSchema);
