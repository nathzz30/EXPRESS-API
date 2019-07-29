const mongoose = require("mongoose");

let CarSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  brand: String,
  model: String,
  year: Number
});

module.exports = mongoose.model("Car", CarSchema);
