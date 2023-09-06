const mongoose = require("mongoose");

const Review = mongoose.model(
  "Review",
  new mongoose.Schema({
    jobId: String,
    senderId: String,
    text: String,
  })
);

module.exports = Review;
