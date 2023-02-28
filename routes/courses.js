const express = require("express");
const { getAllCourses } = require("../controllers/courses");

const router = express.Router();

router.get("/", getAllCourses);

module.exports = router;
