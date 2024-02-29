const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const passportStratigies = require("./configs/passport");

require("dotenv").config();

const connectToMongo = require("./db/connection");

const app = express();
const port =
  process.env.NODE_ENV === "test"
    ? process.env.NODE_LOCAL_TEST_PORT
    : process.env.NODE_LOCAL_PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// initialize passport stratigies
passportStratigies(passport);
app.use(passport.initialize());

// api versioning
app.use("/v1", require("./Routes/v1"));

if (process.env.NODE_ENV === "development") {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    connectToMongo();
  });
}

// for testing purposes, i used passport authentication middleware on /test endpoint
const passportAuthMiddleware = require("./Middlewares/passportAuthMiddleware");
app.get("/test", passportAuthMiddleware, (req, res) => {
  res.json(
    "Server connection to client works!!  Good Luck with your capstones :D",
  );
});

module.exports = app;
