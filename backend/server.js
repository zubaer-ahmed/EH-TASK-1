const path = require("path");
const { v4: uuidv4 } = require("uuid");
const express = require("express");
var bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// Local Modules
const userRoute = require("./routes/userRoute.js"); // login, register, etc
const jobRoute = require("./routes/jobRoute.js"); // login, register, etc
const servicesRoute = require("./routes/serviceRoute.js"); // login, register, etc
const commentRoute = require("./routes/commentRoute.js"); // login, register, etc
const workerRoute = require("./routes/workerRoute.js"); // login, register, etc

// Server Initialization
const app = express();
const PORT = 8001;

const httpProxy = require("http-proxy");
const proxy = httpProxy.createProxyServer({}); // for frontend redirects

app.use(
  cors({
    origin: ["http://localhost:8000"], // 8000 is the vite dev server default
    credentials: true,
  })
);

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes will be written here
app.use("/api/users", userRoute);
app.use("/api/jobs", jobRoute);
app.use("/api/services", servicesRoute);
app.use("/api/comments", commentRoute);
app.use("/api/workers", workerRoute);

// app.use("/", async (req, res) => {
//   return res.redirect(`http://localhost:8000${req.url}`);

//   await proxyRequest(req, res, "http://localhost:8000");
//   console.log("Proxied: ", req.url);
// });

app.use(express.static(path.join(__dirname, "dist")));

// Serve 'index.html' for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Server Listen Along with Database
app.listen(PORT, "127.0.0.1", (error) => {
  if (!error) console.log("Listening on http://localhost:" + PORT);
  else console.log("Error occurred, server can't start", error);
});
const resolvers = {};

function proxyRequest(req, res, target) {
  return new Promise((resolve, reject) => {
    const requestId = uuidv4(); // Generate a unique identifier for the request
    req.requestId = requestId;
    resolvers[requestId] = resolve;
    proxy.web(req, res, { target, requestId }, (error) => {
      delete resolvers[requestId];
      reject(error);
    });
  });
}

proxy.on("proxyRes", function (proxyRes, req, res) {
  // console.log(Object.keys(resolvers).length);
  if (resolvers[req.requestId]) {
    resolvers[req.requestId]();
    delete resolvers[req.requestId];
  }
});
proxy.on("proxyReq", function (proxyReq, req, res) {
  // Set a timeout for the proxy request
  const timeout = setTimeout(function () {
    // Abort the proxy request if it takes too long
    // proxyReq.abort();
    if (resolvers[req.requestId]) {
      resolvers[req.requestId]();
      delete resolvers[req.requestId];
    }
  }, 5000); // Adjust the timeout value as needed
});
