const Course = require('../models/course');

const insertCourse = async (req, res) => {
    try {
        const input = req.body;
        const course = new Course(input);
        await course.save();
        res.status(201).send("Course added successfully!");
    } catch (error) {
        console.error("Error inserting course:", error);
        res.status(500).send("An error occurred while adding the course.");
    }
};

const viewCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        if (courses.length === 0) {
            res.status(200).send("Data not found");
        } else {
            res.json(courses);
        }
    } catch (error) {
        console.error("Error viewing courses:", error);
        res.status(500).send(error.message);
    }
};

const enrollCourse = async (req, res) => {
    try {
        const courseId = req.params.id;
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).send("Course not found");
        }
        course.enrolled = true;
        await course.save();
        res.status(200).send("Enrolled successfully!");
    } catch (error) {
        console.error("Error enrolling in course:", error);
        res.status(500).send("An error occurred while enrolling in the course.");
    }
};

module.exports = { insertCourse, viewCourses, enrollCourse };
