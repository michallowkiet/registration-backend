const mongoose = require("mongoose");

const eventsModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
  },
  city: {
    type: String,
    required: [true, "must provide city"],
  },
  course: {
    type: String,
    required: [true, "must provide course"],
  },
});

module.exports = new mongoose.model("Events", eventsModel);
