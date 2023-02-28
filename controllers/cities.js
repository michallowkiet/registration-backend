const citiesModel = require("./../models/cities");

const getAllCities = async (req, res) => {
  const cities = await citiesModel.find();
  res.status(200).json(cities);
};

module.exports = { getAllCities };
