const mongoose = require("mongoose");

const AlarmSchema = new mongoose.Schema({
  user_id: { type: Number, required: true },
  role: { type: Number, required: true },
});

module.exports = mongoose.model("UserRoles", AlarmSchema);
