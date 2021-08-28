const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, lowercase: true },
    age: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);