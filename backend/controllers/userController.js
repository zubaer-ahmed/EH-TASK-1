const models = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const developmentSecretKey = "jwtSecret";

// Methods to be executed on routes
const getSelf = async (req, res) => {
  console.log(models.mongoose.connection.readyState);
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
  console.log("User registered: ", user);
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
  console.log("User logged in: ", user);
  res.send(user);
};

const auth = async (req, res, next) => {
  let token = req.headers["authorization"];
  let jwtCookie = req.cookies["jwt"];
  if (jwtCookie) token = jwtCookie;
  if (!token) return res.status(401).json({ error: "No token provided" });
  let decoded =await verifyTokenSync(token, developmentSecretKey);
  if (!decoded) return res.status(401).json({ error: "Invalid token" });
  console.log(decoded);
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
  getSelf,
  auth,
  register,
  login,
};
