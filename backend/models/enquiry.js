const mongoose = require('mongoose');

const enquirySchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  content: { type: String, required: true}
});

module.exports = mongoose.model('Enquiry', enquirySchema);
