// 3rd Party Modules
const { Router } = require("express");
const express = require("express");
const { auth } = require("../utils");

// Local Modules
const serviceController = require("../controllers/serviceController");

// Initialization
const router = Router();
router.use(express.json());

// Requests
router.get("/getServices", serviceController.getServices);
router.get("/getService/:id", serviceController.getService);
router.post("/updateService", serviceController.updateService);
router.post("/createService", auth, serviceController.createService);
router.post("/deleteService", serviceController.deleteService);

module.exports = router;
