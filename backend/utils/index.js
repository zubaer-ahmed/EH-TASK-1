const models = require("../models");
const jwt = require("jsonwebtoken");
const developmentSecretKey = "jwtSecret";

const auth = async (req, res, next) => {
  if (req.body?.email == "admin") {
    req.user = await models.User.findOne({});
  }

  let jwtToken = req.headers["authorization"];
  let jwtCookie = req.cookies["jwt"]; // if jwt is found as cookie, use it
  if (jwtCookie) {
    jwtToken = jwtCookie;
  }
  if (!jwtToken) return res.status(401).json({ error: "No token provided" });
  console.log("jwt:", jwtToken.slice(0, 10) + "...");
  let decoded = await verifyTokenSync(jwtToken, developmentSecretKey);
  if (!decoded) return res.status(401).json({ error: "Invalid token" });
  req.user = await models.User.findOne({ email: decoded.email }).populate({
    path: "orders",
    options: { limit: 10 },
    populate: [
      {
        path: "user",
        select: "firstName lastName roles",
      },
      { path: "service" },
    ],
  });
  if (!req.user) {
    return res.status(401).json({ error: "User does not exist" });
  }
  next();
};
const verifyTokenSync = async (token, secretKey) => {
  const decoded = jwt.verify(token, secretKey);
  const user = await models.User.findOne({ email: decoded.email });
  return user || null; // Return null if user is not found
};

module.exports = { auth, verifyTokenSync };
