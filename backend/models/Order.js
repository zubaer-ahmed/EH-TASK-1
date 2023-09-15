const mongoose = require("mongoose");

const Order = mongoose.model(
  "Order",
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      orderType: String,
      service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
      },
      job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
      status: Number,
      statusText: String,
    },
    {
      timestamps: true, // This option adds 'createdAt' and 'updatedAt' fields
    }
  )
);

module.exports = Order;
