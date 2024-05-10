import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FullCourse from './fullcourse';

const Course = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get(`http://localhost:2029/viewcourses`);
            setCourses(response.data);
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleViewDetails = (course) => {
        setSelectedCourse(course);
    };

    const handleEnroll = async (course) => {
        try {
            if (course.enrolled) {
                alert("You are already enrolled in this course!");
                return; // Exit function if already enrolled
            }
            await axios.put(`http://localhost:2029/enroll/${course._id}`);
            fetchCourses();
            alert("Enrolled successfully!"); // Alert after successful enrollment
        } catch (error) {
            console.error("Error enrolling in course:", error);
        }
    };

    return (
        <div>
            {courses.map(course => (
                <div key={course._id}>
                    <h2> Course : {course.courseName}</h2>
                    <p>Instructor: {course.instructorName}</p>
                    <p>Description: {course.description}</p>
                    <p>Enrollment Status: {course.enrollmentStatus}</p>
                    <button onClick={() => handleViewDetails(course)}> View Details </button>
                    {!course.enrolled && <button onClick={() => handleEnroll(course)}>Enroll</button>}
                </div>
            ))}
            {selectedCourse && <FullCourse course={selectedCourse} />}
        </div>
    );
};

export default Course;
