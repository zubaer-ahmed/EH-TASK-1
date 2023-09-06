const createUserModel = require("./User");
const mongoose = require("mongoose");
let connectionString =
  "mongodb+srv://root:root@cluster0.l2biux6.mongodb.net/?retryWrites=true&w=majority";

let Job, Service, Review, Reply;
let User = createUserModel(mongoose);

async function main() {
  await mongoose.connect(connectionString);
  await User.deleteMany({});

  console.log("Connected to MongoDB");
}
main().catch((err) => console.log(err));

module.exports = { mongoose, User, Job, Service, Review, Reply };
