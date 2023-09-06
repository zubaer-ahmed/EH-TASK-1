const mongoose = require("mongoose");

const Service = mongoose.model(
  "Service",
  new mongoose.Schema({
    name: String,
    cost: String,
    workers: String,
  })
);

module.exports = Service;
