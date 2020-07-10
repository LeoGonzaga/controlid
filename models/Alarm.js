const mongoose = require("mongoose");

const AlarmSchema = new mongoose.Schema({
  zone: { type: Number, required: true },
  enabled: { type: Number, required: true },
  active_level: { type: Number, required: true },
  alarm_delay: { type: Number, required: true },
});

module.exports = mongoose.model("Alarm", AlarmSchema);
