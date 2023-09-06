const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    jwt: String,
    role: {
      type: String,
      enum: ["admin", "user", "worker"],
      default: "user",
    },
  })
);

module.exports = User;
