const mongoose = require("mongoose");

const Service = mongoose.model(
  "Service",
  new mongoose.Schema(
    {
      worker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // must be User of role "worker"
      },
      title: String,
      description: String,
      category: String,
      cost: Number,
      availabilityStartTime: String, // Date ISO String
      availabilityEndTime: String, // Date ISO String
      maxResponseTime: Number, // milliseconds
      rating: Number, // float
      comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment",
        },
      ],
      status: Number, // 0,1
      locations: [
        {
          type: String,
        },
      ],
    },
    {
      timestamps: true, // This option adds 'createdAt' and 'updatedAt' fields
    }
  )
);

module.exports = Service;
