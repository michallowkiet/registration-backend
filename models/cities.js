const mongoose = require("mongoose");

const citiesModel = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "must provide name"],
    trim: true,
  },
});

module.exports = new mongoose.model("Cities", citiesModel);
