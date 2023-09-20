const mongoose = require("mongoose");

const Order = mongoose.model(
  "Order",
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      serviceId: String,
      description: String,
      time: String,
      location: String,
      data: {
        type: Object,
        default: {},
      },
      step: Number,
      status: Number,
      statusText: String,
    },
    {
      minimize: false,
      timestamps: true, // This option adds 'createdAt' and 'updatedAt' fields
    }
  )
);

module.exports = Order;
