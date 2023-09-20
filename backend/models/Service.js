const mongoose = require("mongoose");

const Service = mongoose.model(
  "Service",
  new mongoose.Schema(
    {
      uploader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      id: String,
      name: String,
      price: Number,
      imageSrc: String,
      options: Object,
    },
    {
      minimize: false,
      timestamps: true,
    }
  )
);

module.exports = Service;
