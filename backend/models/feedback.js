const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  // comments: [{ body: String, date: Date }],
  // date: { type: Date, default: Date.now },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});

module.exports = mongoose.model('Feedback', feedbackSchema);
