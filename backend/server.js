const express = require("express");
var bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// Local Modules
const userRoute = require("./routes/userRoute.js"); // login, register, etc
const jobRoute = require("./routes/jobRoute.js"); // login, register, etc
const servicesRoute = require("./routes/serviceRoute.js"); // login, register, etc
const reviewRoute = require("./routes/reviewRoute.js"); // login, register, etc
const commentRoute = require("./routes/commentRoute.js"); // login, register, etc

// Server Initialization
const app = express();
const PORT = 8000;

app.use(
  cors({
    origin: ["http://localhost:5173", "*"], // 5173 is the vite dev server default
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
app.use("/api/reviews", reviewRoute);
app.use("/api/comments", commentRoute);

// Server Listen Along with Database
app.listen(PORT, (error) => {
  if (!error) console.log("Listening on http://localhost:" + PORT);
  else console.log("Error occurred, server can't start", error);
});
