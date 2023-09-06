const mongoose = require("mongoose");

const Job = mongoose.model(
  "Job",
  new mongoose.Schema({
    title: String,
    description: String,
    budget: String,
    location: String,
    employer: String,
  })
);

module.exports = Job;
