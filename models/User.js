const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  email: String
});

module.exports = mongoose.model("User", UserSchema);
