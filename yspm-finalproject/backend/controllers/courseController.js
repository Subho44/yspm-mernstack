const Course = require("../models/Course");

// Add Course
exports.addcourse = async (req, res) => {
  try {
    const newcourse = await Course.create({
      title:req.body.title,
      price:req.body.price,
      image:req.file ? req.file.filename : "",
    });
    res.status(201).json(newcourse);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Courses
exports.getcourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Single Course
exports.getSingleCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
  } catch (err) {
    res.status(400).json({ message: "Invalid Course ID" });
  }
};

// Delete Course
exports.deletecourses = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};