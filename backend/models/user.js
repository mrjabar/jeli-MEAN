const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({
  email: {type: String, required: true, unique: true },
  fullName: {type: String, required: true },
  password: { type: String, required: true },
  contact: { type: String, required: true  },
  username: { type: String, required: true,  unique: true },
  isAdmin: { type: Boolean, default: false }
  // imagePath: { type: String, default: false  },
  // createdAt: { type: Date, default: Date.now() }
})


userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
