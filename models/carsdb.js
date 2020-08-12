const mongoose = require("mongoose");
const credentials = require("../lib/credentials.js");

mongoose.connect(credentials.connectionString, {
  dbName: "sccprojects",
  useNewUrlParser: true,
});

mongoose.connection.on("open", () => {
  console.log("Mongoose connected.");
});

// define car model in JSON key/value pairs
// values indicate the data type of each key
const carSchema = mongoose.Schema({
  ID: { type: Number, required: true },
  make: String,
  model: String,
  year: Number,
  color: String,
});

module.exports = mongoose.model("Car", carSchema);
