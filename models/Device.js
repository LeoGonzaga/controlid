const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ip: { type: String, required: true },
  public_key: { type: String, required: true },
});

module.exports = mongoose.model("Device", DeviceSchema);
