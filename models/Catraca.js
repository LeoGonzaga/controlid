const mongoose = require("mongoose");

const CatracaSchema = new mongoose.Schema({
  id: Number,
  left_turns: Number,
  right_turns: Number,
  entrance_turns: Number,
  exit_turns: Number,
});

module.exports = mongoose.model("Catraca", CatracaSchema);
