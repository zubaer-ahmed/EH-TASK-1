const mongoose = require("mongoose");

// common models
const User = require("./User");

// models for Admin Panel
const Job = require("./Job");
//to be implemented
let Service, Review, Reply;

// only for development phase
let connectionString =
  "mongodb+srv://root:root@cluster0.l2biux6.mongodb.net/?retryWrites=true&w=majority";

async function main() {
  await mongoose.connect(connectionString);
  await User.deleteMany({}); // for development phase
  await Job.deleteMany({});
  await addTemplateJobs();
  console.log("Connected to MongoDB");
}
main().catch((err) => console.log(err));

module.exports = { mongoose, User, Job, Service, Review, Reply };

// info: to check if DB is connected: (mongoose.connection.readyState == 1)

async function addTemplateJobs() {
  let initializerJobs = [
    {
      title: "Engineer",
      description: "Job for Mechanical Engineer",
      employer: "Employer1",
      location: "Mirpur, Dhaka",
      budget: 40000,
    },
    {
      title: "Web Developer",
      description: "Web Developer Required",
      employer: "Employer2",
      location: "Mohakhali, Dhaka",
      budget: 50000,
    },
  ];
  initializerJobs.forEach(async (item) => {
    const newJob = new Job(item);
    await newJob.save();
  });
}
