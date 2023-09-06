var express = require("express");

var app = express();

// parse application/json
app.use(express.json());

// POST /login gets urlencoded bodies
app.post("/login", function (req, res) {
  res.send("welcome, " + req.body.username);
});

// POST /api/users gets JSON bodies
app.post("/api/users", function (req, res) {
  // create user in req.body
});
app.listen(8000, (error) => {
  if (!error) console.log("Listening on http://localhost:" + 8000);
  else console.log("Error occurred, server can't start", error);
});
