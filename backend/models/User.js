const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      email: String,
      password: String,
      firstName: String,
      lastName: String,
      fullName: {
        type: String,
        get: function () {
          return `${this.firstName} ${this.lastName}`;
        },
      },
      title: String,
      jwt: String,
      roles: {
        type: Array,
        default: ["default"],
      },
      comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment",
        },
      ],
      orders: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Order",
        },
      ],
    },
    {
      timestamps: true, // This option adds 'createdAt' and 'updatedAt' fields
    }
  )
);

module.exports = User;
