const mongooseDB = require("mongoose");

mongooseDB.set("strictQuery", false);

const connectDB = (url) => mongooseDB.connect(url);

module.exports = connectDB;
