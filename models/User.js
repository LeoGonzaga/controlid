const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  registration: { type: String, required: true },
  password: String,
  salt: String,
});

module.exports = mongoose.model("User", UserSchema);
