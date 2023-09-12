const mongoose = require("mongoose");

// common models
const User = require("./User");

// models for Admin Panel
const Job = require("./Job");
const Service = require("./Service");
const Comment = require("./Comment");
const Worker = require("./Worker");

// only for development phase
let connectionString =
  "mongodb+srv://root:root@cluster0.l2biux6.mongodb.net/?retryWrites=true&w=majority";

async function main() {
  await mongoose.connect(connectionString);
  await User.deleteMany({}); // for development phase
  await Job.deleteMany({});
  await Service.deleteMany({});
  await Comment.deleteMany({});
  await addTemplates();
  console.log("Connected to MongoDB");
}
main().catch((err) => console.log(err));

module.exports = { mongoose, User, Job, Service, Comment, Worker };

// info: to check if DB is connected: (mongoose.connection.readyState == 1)

async function addTemplates() {
  let initializerJobs = [
    {
      title: "Engineer",
      description: "Job for Mechanical Engineer",
      employer: "Employer1",
      location: "Mirpur, Dhaka",
      budget: 40000,
      appointmentDate: new Date(),
    },
    {
      title: "Plumber",
      description: "Plumber Required",
      employer: "Employer2",
      location: "Mohakhali, Dhaka",
      budget: 50000,
      appointmentDate: new Date(),
    },
  ];
  let initializerServices = [
    {
      title: "Plumber",
      description: "Plumber Required",
      cost: 400,
      availabilityStartTime: new Date("2023-09-11T15:30:00.000Z"),
      availabilityEndTime: new Date("2023-09-11T15:30:00.000Z"),
      maxResponseTime: 30 * 60 * 1000, // milliseconds
      status: 1, // 0,1
      locations: ["Mohakhali, Dhaka", "Cantonment", "Mirpur"],
    },
    {
      title: "Electrician",
      description: "Electrician Required",
      cost: 400,
      availabilityStartTime: new Date("2023-09-11T15:30:00.000Z"),
      availabilityEndTime: new Date("2023-09-11T15:30:00.000Z"),
      maxResponseTime: 30 * 60 * 1000, // milliseconds
      status: 1, // 0,1
      locations: ["Mohakhali, Dhaka", "Cantonment", "Mirpur"],
    },
    {
      title: "Wifi Provider",
      description: "Wifi Provider Required",
      cost: 400,
      availabilityStartTime: new Date("2023-09-11T15:30:00.000Z"),
      availabilityEndTime: new Date("2023-09-11T15:30:00.000Z"),
      maxResponseTime: 30 * 60 * 1000, // milliseconds
      status: 1, // 0,1
      locations: ["Mohakhali, Dhaka", "Cantonment", "Mirpur"],
    },
  ];

  let initializerUsers = [
    {
      email: "email1",
      password: "pass1",
      firstName: "firstName1",
      lastName: "lastName1",
      jwt: "jwt1",
      role: "user",
    },
    {
      email: "email2",
      password: "pass2",
      firstName: "firstName2",
      lastName: "lastName2",
      jwt: "jwt2",
      role: "worker",
    },
    {
      email: "email3",
      password: "pass3",
      firstName: "firstName3",
      lastName: "lastName3",
      jwt: "jwt3",
      role: "admin",
    },
    {
      email: "email1",
      password: "pass1",
      firstName: "firstName1",
      lastName: "lastName1",
      jwt: "jwt1",
      role: "user",
    },
    {
      email: "email2",
      password: "pass2",
      firstName: "firstName2",
      lastName: "lastName2",
      jwt: "jwt2",
      role: "worker",
    },
    {
      email: "email1",
      password: "pass1",
      firstName: "firstName1",
      lastName: "lastName1",
      jwt: "jwt1",
      role: "user",
    },
    {
      email: "email2",
      password: "pass2",
      firstName: "firstName2",
      lastName: "lastName2",
      jwt: "jwt2",
      role: "worker",
    },
  ];

  initializerUsers.forEach(async (item) => {
    const newUser = new User(item);
    await newUser.save();
    const comments = [
      "review",
      "suggestion",
      "question",
      "review",
      "suggestion",
      "question",
    ];
    for (const item of comments) {
      const newComment = new Comment({
        sourceJobId: await Job.findOne({}),
        senderId: await User.findOne({}),
        commentType: item,
        text: "template " + item,
      });
      await newComment.save();
    }

    initializerJobs.forEach(async (item) => {
      const newJob = new Job({
        ...item,
        employer: await User.findOne({}),
      });
      await newJob.save();
    });
    initializerServices.forEach(async (item) => {
      const newService = new Service({
        ...item,
        worker: await User.findOne({}),
      });
      await newService.save();
    });
  });
}
