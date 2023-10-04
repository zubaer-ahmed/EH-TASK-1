var exceptionHandler = require("express-exception-handler");
exceptionHandler.handle();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const express = require("express");
var bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// Local Modules
const userRoute = require("./routes/userRoute.js");
const jobRoute = require("./routes/jobRoute.js");
const servicesRoute = require("./routes/serviceRoute.js");
const commentRoute = require("./routes/commentRoute.js");
const workerRoute = require("./routes/workerRoute.js");
const ordersRoute = require("./routes/orderRoute.js");
const models = require("./models");
// Server Initialization
const app = express();
const PORT = 8001;

app.use(
  cors({
    origin: [
      "http://localhost:8000",
      "https://eh-projects--zubaerahmed1.repl.co",
    ], // 8000 is the vite dev server port
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
app.use("/api/orders", ordersRoute);
app.get("/api/getObjectId", (req, res) =>
  res.send(new models.mongoose.Types.ObjectId().toString())
);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err?.message); // Log the error for debugging purposes
  // Set an appropriate status code based on the error type
  const statusCode = err.statusCode || 500;
  // Send an error response to the client
  res.status(statusCode).json({ error: err.message });
});

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
