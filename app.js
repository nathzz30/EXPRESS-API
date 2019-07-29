// Require packages and set the port
const routes = require("./routes/routes");
const express = require("express");
const port = 3002;
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

//Database
mongoose.connect(
  "mongodb://heroku_q7k1s3q7:m56543s6pt6qeem4anlopru8bq@ds247637.mlab.com:47637/heroku_q7k1s3q7",
  err => {
    if (err) throw err;
    console.log("succesfully connected");
  }
);

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

routes(app);

// Start the server
const server = app.listen(port, error => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});
