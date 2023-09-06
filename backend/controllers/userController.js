const models = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const developmentSecretKey = "jwtSecret";

const getUsers = async (req, res) => {
  return res.json(await models.User.find({}));
};
const updateUser = async (req, res) => {
  return res.json(await models.User.updateOne({ _id: req.body._id }, req.body));
};

// Methods to be executed on routes
const getSelf = async (req, res) => {
  if (models.mongoose.connection.readyState != 1)
    return res.status(500).json({ error: "Database not ready yet" });
  let user = req.user; // set by auth middleware
  if (!user) res.status(404).json({ error: "User not found" });
  else res.send(user);
};
const register = async (req, res) => {
  if (models.mongoose.connection.readyState != 1)
    return res.status(500).json({ error: "Database not ready yet" });
  let existingUser = await models.User.findOne({ email: req.body.email });
  if (existingUser) {
    return res.status(401).json({ error: "Email is already used" });
  }
  let user = new models.User({
    email: req.body.email,
    password: req.body.password ? bcrypt.hashSync(req.body.password, 10) : null,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  let newJwt = jwt.sign({ email: user.email }, developmentSecretKey);
  user.jwt = newJwt;
  await user.save();
  res.cookie("jwt", newJwt, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  console.log("User registered: ", user.email);
  res.send(user);
};

const login = async (req, res) => {
  if (models.mongoose.connection.readyState != 1)
    return res.status(500).json({ error: "Database not ready yet" });
  let user = await models.User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({ error: "Email is not registered" });
  }
  let validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(401).json({ error: "Invalid password" });
  }
  let newJwt = jwt.sign({ email: user.email }, developmentSecretKey);
  user.jwt = newJwt;
  await user.save();
  res.cookie("jwt", newJwt, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  console.log("User logged in: ", user.email);
  res.send(user);
};

const auth = async (req, res, next) => {
  let jwtToken = req.headers["authorization"];
  let jwtCookie = req.cookies["jwt"]; // if jwt is found as cookie, use it
  if (jwtCookie) {
    jwtToken = jwtCookie;
    console.log("cookie:", jwtToken);
  }
  if (!jwtToken) return res.status(401).json({ error: "No token provided" });
  let decoded = await verifyTokenSync(jwtToken, developmentSecretKey);
  if (!decoded) return res.status(401).json({ error: "Invalid token" });
  req.user = await models.User.findOne({ email: decoded.email });
  next();
};
const verifyTokenSync = async (token, secretKey) => {
  const decoded = jwt.verify(token, secretKey);
  const user = await models.User.findOne({ email: decoded.email });
  return user || null; // Return null if user is not found
};
// Export of all methods as object
module.exports = {
  getUsers,
  updateUser,
  getSelf,
  auth,
  register,
  login,
};
