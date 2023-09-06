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
router.get("/getUsers", userController.getUsers);
router.post("/updateUser", userController.updateUser);
router.get("/getSelf", userController.auth, userController.getSelf);
router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
