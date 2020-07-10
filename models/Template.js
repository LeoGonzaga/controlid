const mongoose = require("mongoose");

const TemplateSchema = new mongoose.Schema({
  finger_position: Number,
  finger_type: { type: Number, required: true },
  template: String,
  user_id: { type: String, required: true },
});

module.exports = mongoose.model("Templates", TemplateSchema);
