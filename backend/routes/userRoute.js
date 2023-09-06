// 3rd Party Modules
const { Router } = require("express");
const express = require("express");

// Local Modules
const myController = require("../controllers/userController");

// Initialization
const router = Router();
router.use(express.json());

// Requests
router.get("/", (req, res) => {
  res.send("Hello");
});
router.post("/register", myController.register);
router.post("/login", myController.login);
router.get("/getSelf", myController.auth, myController.getSelf);

module.exports = router;
