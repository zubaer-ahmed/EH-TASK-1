// 3rd Party Modules
const { Router } = require("express");
const express = require("express");

// Local Modules
const serviceController = require("../controllers/serviceController");

// Initialization
const router = Router();
router.use(express.json());

// Requests
router.get("/getServices", serviceController.getServices);
router.post("/updateService", serviceController.updateService);

module.exports = router;
