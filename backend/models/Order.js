const mongoose = require("mongoose");

const Order = mongoose.model(
  "Order",
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
      },
      amount: Number,
      status: Number,
      statusText: String,
    },
    {
      timestamps: true, // This option adds 'createdAt' and 'updatedAt' fields
    }
  )
);

module.exports = Order;
