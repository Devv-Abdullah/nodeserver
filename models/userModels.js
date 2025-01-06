const mongoose = require("mongoose");

// class for User
// attribute: username, phone
// create object follow rouls
// schema > attribute > validation
const userSchema = new mongoose.Schema({
  // structure الخاص في الداتا اللي عندي
  username: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
});

module.exports = mongoose.model("users", userSchema);
// module.exports = exports; صححححححححححححححححححححححححح؟