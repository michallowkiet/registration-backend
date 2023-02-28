const coursesModel = require("./../models/courses");

const getAllCourses = async (req, res) => {
  const courses = await coursesModel.find();
  res.status(200).json(courses);
};

module.exports = { getAllCourses };
