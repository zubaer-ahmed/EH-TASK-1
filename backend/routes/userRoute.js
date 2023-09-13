// 3rd Party Modules
const { Router } = require("express");
const express = require("express");
const { auth } = require("../utils");

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
router.post("/updateUser", auth, userController.updateUser);
router.post("/deleteUser", userController.deleteUser);
router.get("/getSelf", userController.auth, userController.getSelf);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);

module.exports = router;
