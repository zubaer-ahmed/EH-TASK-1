const mongoose = require("mongoose");

// common models
const User = require("./User");

// models for Admin Panel
const Job = require("./Job");
const Service = require("./Service");
const Comment = require("./Comment");
const Order = require("./Order");

const services = import("../../frontend/src/Data/services.js");
// only for development phase
let connectionString =
  "mongodb+srv://root:root@cluster0.l2biux6.mongodb.net/?retryWrites=true&w=majority";

async function main() {
  await mongoose.connect(connectionString);
  // mongoose.connection.collections["orders"].drop(function (err) {
  //   console.log("collection dropped");
  // });

  await User.deleteMany({}); // for development phase
  await Job.deleteMany({});
  await Service.deleteMany({});
  await Comment.deleteMany({});
  await Order.deleteMany({});
  await addTemplates();
  console.log("Connected to MongoDB");
}
main().catch((err) => console.log(err));

module.exports = { mongoose, User, Job, Service, Comment, Order };

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
      description: "Plumbing Service",
      cost: 400,
      availabilityStartTime: new Date("2023-09-11T15:30:00.000Z"),
      availabilityEndTime: new Date("2023-09-11T15:30:00.000Z"),
      maxResponseTime: 30 * 60 * 1000, // milliseconds
      status: 1, // 0,1
      locations: ["Mohakhali, Dhaka", "Cantonment", "Mirpur"],
    },
    {
      title: "Electrician",
      description: "Electrics Service",
      cost: 400,
      availabilityStartTime: new Date("2023-09-11T15:30:00.000Z"),
      availabilityEndTime: new Date("2023-09-11T15:30:00.000Z"),
      maxResponseTime: 30 * 60 * 1000, // milliseconds
      status: 1, // 0,1
      locations: ["Mohakhali, Dhaka", "Cantonment", "Mirpur"],
    },
    {
      title: "Wifi Provider",
      description: "Wifi Service",
      cost: 400,
      availabilityStartTime: new Date("2023-09-11T15:30:00.000Z"),
      availabilityEndTime: new Date("2023-09-11T15:30:00.000Z"),
      maxResponseTime: 30 * 60 * 1000, // milliseconds
      status: 1, // 0,1
      locations: ["Mohakhali, Dhaka", "Cantonment", "Mirpur"],
    },
    {
      title: "Cleaner",
      description: "Cleaning Service",
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
      title: "AdminTitle",
      email: "admin@gmail.com",
      password: "pass3_hash",
      firstName: "John",
      lastName: "Doe",
      jwt: "jwt3",
      roles: ["admin", "customer", "worker"],
    },
    {
      title: "WorkerTitle",
      email: "email1@gmail.com",
      password: "pass1_hash",
      firstName: "firstName1",
      lastName: "lastName1",
      jwt: "jwt1",
      roles: ["customer"],
    },
    {
      title: "CompanyTitle",
      email: "email2@yahoo.com",
      password: "pass2_hash",
      firstName: "firstName2",
      lastName: "lastName2",
      jwt: "jwt2",
      roles: ["worker"],
    },
    {
      title: "IndividualTitle",
      email: "email1@gmail.com",
      password: "pass1_hash",
      firstName: "firstName1",
      lastName: "lastName1",
      jwt: "jwt1",
      roles: ["customer"],
    },
    {
      title: "IndividualTitle",
      email: "email2@yahoo.com",
      password: "pass2_hash",
      firstName: "firstName2",
      lastName: "lastName2",
      jwt: "jwt2",
      roles: ["worker"],
    },
    {
      title: "IndividualTitle",
      email: "email1@gmail.com",
      password: "pass1_hash",
      firstName: "firstName1",
      lastName: "lastName1",
      jwt: "jwt1",
      roles: ["customer"],
    },
    {
      title: "IndividualTitle",
      email: "email2@yahoo.com",
      password: "pass2_hash",
      firstName: "firstName2",
      lastName: "lastName2",
      jwt: "jwt2",
      roles: ["worker"],
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

    // let initializerOrders = await Service.find({}).limit(1);
    // initializerOrders.forEach(async (item) => {
    //   const newOrder = new Order({
    //     user: await User.findOne({ email: "admin@gmail.com" }),
    //     service: item,
    //     amount: 1,
    //   });
    //   await newOrder.save();

    //   await User.updateOne(
    //     { email: "admin@gmail.com" },
    //     { $push: { orders: newOrder._id } }
    //   );
    // });
  });
  // initializerJobs.slice(0, 2).forEach(async (item) => {
  //   const newJob = new Job({
  //     ...item,
  //     employer: await User.findOne({ email: "admin@gmail.com" }),
  //   });
  //   await newJob.save();
  // });
  let initServices = await services;
  initServices.default.forEach(async (item) => {
    const newService = new Service({
      ...item,
      worker: await User.findOne({ email: "admin@gmail.com" }),
    });
    await newService.save();
  });
  // for (const item of initializerComments.slice(0, 2)) {
  //   const newComment = new Comment({
  //     sourceJobId: await Job.findOne({}),
  //     senderId: await User.findOne({ email: "admin@gmail.com" }),
  //     commentType: item,
  //     text: "template " + item,
  //   });
  //   await newComment.save();
  // }
}
