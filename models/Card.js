const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  value: Number,
  user_id: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Card", CardSchema);
