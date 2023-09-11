const mongoose = require("mongoose");

const Service = mongoose.model(
  "Service",
  new mongoose.Schema({
    worker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // must be User of role "worker"
    },
    title: String,
    description: String,
    cost: Number,
    availabilityStartTime: String, // Date ISO String
    availabilityEndTime: String, // Date ISO String
    maxResponseTime: Number, // milliseconds
    status: Number, // 0,1
    locations: [
      {
        type: String,
      },
    ],
  })
);

module.exports = Service;
