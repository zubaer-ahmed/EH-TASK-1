// 3rd Party Modules
const { Router } = require("express");
const express = require("express");

// Local Modules
const userController = require("../controllers/userController");

// Initialization
const router = Router();
router.use(express.json());

// Requests
router.get("/", (req, res) => {
  res.send("Hello");
});
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/getSelf", userController.auth, userController.getSelf);

module.exports = router;
