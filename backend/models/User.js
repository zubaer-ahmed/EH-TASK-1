const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    jwt: String,
    roles: {
      type: Array,
      default: ["default"],
    },
  })
);

module.exports = User;
