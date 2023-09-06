// 3rd Party Modules
const { Router } = require("express");
const express = require("express");

// Local Modules
const jobController = require("../controllers/jobController");

// Initialization
const router = Router();
router.use(express.json());

// Requests
router.get("/getJobs", jobController.getJobs);

module.exports = router;
