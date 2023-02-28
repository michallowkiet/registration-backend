const mongoose = require("mongoose");

const coursesModel = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "must provide name"],
    trim: true,
  },
});

module.exports = new mongoose.model("Courses", coursesModel);
