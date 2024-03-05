const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, TEST_DB_HOST } =
  process.env;

const DB_URI =
  process.env.NODE_ENV === "test"
    ? `mongodb://${DB_USER}:${DB_PASSWORD}@${TEST_DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
    : process.env.MONGODB_ATLAS_URL;

const url = DB_URI;

const connectToMongo = async () => {
  mongoose.set("strictQuery", true);
  await mongoose
    .connect(url)
    .then(() => console.log("Database connected: ", url))
    .catch((err) => console.error("Database connection error: ", err));
  // const db = mongoose.connection;

  // db.once("open", () => {
  //   console.log("Database connected: ", url);
  // });

  // db.on("error", (err) => {
  //   console.error("Database connection error: ", err);
  // });
};

module.exports = connectToMongo;
