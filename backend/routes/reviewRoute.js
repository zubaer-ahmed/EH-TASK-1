// 3rd Party Modules
const { Router } = require("express");
const express = require("express");

// Local Modules
const reviewController = require("../controllers/reviewController");

// Initialization
const router = Router();
router.use(express.json());

// Requests
router.get("/getReviews", reviewController.getReviews);
router.post("/createReview", reviewController.createReview);
router.post("/updateReview", reviewController.updateReview);
router.post("/deleteReview", reviewController.deleteReview);

module.exports = router;
