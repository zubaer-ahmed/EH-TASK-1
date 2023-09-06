const mongoose = require("mongoose");

// common models
const User = require("./User");

// models for Admin Panel; to be implemented
let Job, Service, Review, Reply;

// only for development phase
let connectionString =
  "mongodb+srv://root:root@cluster0.l2biux6.mongodb.net/?retryWrites=true&w=majority";

async function main() {
  await mongoose.connect(connectionString);
  await User.deleteMany({}); // for development phase
  console.log("Connected to MongoDB");
}
main().catch((err) => console.log(err));

module.exports = { mongoose, User, Job, Service, Review, Reply };

// info: to check if DB is connected: (mongoose.connection.readyState == 1)
