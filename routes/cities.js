const express = require("express");
const { getAllCities } = require("../controllers/cities");

const router = express.Router();

router.get("/", getAllCities);

module.exports = router;
