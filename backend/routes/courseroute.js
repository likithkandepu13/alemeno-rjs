
const express = require('express');
const courseController = require('../controllers/coursecontroller');

const courseRouter = express.Router();

courseRouter.post("/insertcourse", courseController.insertCourse);
courseRouter.get("/viewcourses", courseController.viewCourses);
courseRouter.put("/enroll/:id", courseController.enrollCourse); // New route for enrollment

module.exports = courseRouter;
