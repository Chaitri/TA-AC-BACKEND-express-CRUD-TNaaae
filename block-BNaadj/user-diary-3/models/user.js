const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, lowercase: true, required: true },
    age: Number,
    address: String,
    bio: String,
    hobby: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
