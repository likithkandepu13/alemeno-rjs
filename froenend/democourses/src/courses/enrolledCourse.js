import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EnrolledCourse = () => {
    const [courses, setCourses] = useState([]);

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

    const handleUpdateCourse = async (id) => {
        try {
            await axios.put(`http://localhost:2029/updatecourse/${id}`, { completed: true });
            
            fetchCourses();
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <h2>Enrolled Courses</h2>
            {courses.map(course => {
                if (course.enrolled) {
                    return (
                        <div key={course._id}>
                            <h3>Course : {course.courseName}</h3>
                            <p>Instructor: {course.instructorName}</p>
                            <p>Description: {course.description}</p>
                            <p>Enrollment Status: {course.enrollmentStatus}</p>
                            {course.completed ? (
                                <p>Status: Completed</p>
                            ) : (
                                <button onClick={() => handleUpdateCourse(course._id)}>Mark as Completed</button>
                            )}
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default EnrolledCourse;
