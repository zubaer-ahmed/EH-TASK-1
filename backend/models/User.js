const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      phone: String,
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
      bio: String,
      jwt: String,
      roles: {
        type: Array,
        default: ["default"],
      },
      skills: {
        type: Array,
        default: [],
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
      verificationStatus: { type: Number, default: 0 },
      documents: {
        documentType: String,
        name: String,
        dateOfBirth: String,
        pictures: [String],
        selfie: String,
        default: {},
      },
    },
    {
      minimize: false,
      timestamps: true, // This option adds 'createdAt' and 'updatedAt' fields
    }
  )
);

module.exports = User;
