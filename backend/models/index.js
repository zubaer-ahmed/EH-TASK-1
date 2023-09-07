const mongoose = require("mongoose");

// common models
const User = require("./User");

// models for Admin Panel
const Job = require("./Job");
const Service = require("./Service");
const Review = require("./Review");
const Comment = require("./Comment");

// only for development phase
let connectionString =
  "mongodb+srv://root:root@cluster0.l2biux6.mongodb.net/?retryWrites=true&w=majority";

async function main() {
  await mongoose.connect(connectionString);
  await User.deleteMany({}); // for development phase
  await Job.deleteMany({});
  await Service.deleteMany({});
  await Review.deleteMany({});
  await Comment.deleteMany({});
  await addTemplates();
  console.log("Connected to MongoDB");
}
main().catch((err) => console.log(err));

module.exports = { mongoose, User, Job, Service, Review, Comment };

// info: to check if DB is connected: (mongoose.connection.readyState == 1)

async function addTemplates() {
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
  let initializerServices = [
    {
      name: "Electrician",
      cost: 300,
      workers: 5,
    },
    {
      name: "Plumber",
      cost: 400,
      workers: 15,
    },
    {
      name: "Mechanic",
      cost: 100,
      workers: 50,
    },
    {
      name: "Welder",
      cost: 200,
      workers: 5,
    },
    {
      name: "Custodian",
      cost: 500,
      workers: 15,
    },
  ];
  let initializerReviews = [
    {
      jobId: "id1",
      senderId: "id1",
      text: "Template review 1",
    },
    {
      jobId: "id2",
      senderId: "id2",
      text: "Template review 2",
    },
  ];
  let initializerUsers = [
    {
      email: "email1",
      password: "",
      firstName: "first1",
      lastName: "last1",
      jwt: "jwt1",
      role: "user",
    },
    {
      email: "email2",
      password: "pass2",
      firstName: "first2",
      lastName: "last2",
      jwt: "jwt2",
      role: "worker",
    },
    {
      email: "email3",
      password: "pass3",
      firstName: "first3",
      lastName: "last3",
      jwt: "jwt3",
      role: "admin",
    },
  ];

  initializerJobs.forEach(async (item) => {
    const newJob = new Job(item);
    await newJob.save();
  });
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
        senderId: newUser,
        commentType: item,
        text: "template " + item,
      });
      await newComment.save();
    }
  });
  initializerServices.forEach(async (item) => {
    const newService = new Service(item);
    await newService.save();
  });
  initializerReviews.forEach(async (item) => {
    const newReview = new Review(item);
    await newReview.save();
  });
}
