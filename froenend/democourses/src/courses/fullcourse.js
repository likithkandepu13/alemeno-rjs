import React from 'react';

const FullCourse = ({ course }) => {
    return (
        <div>
            <h2>Full Course Details</h2>
            <p>Course Name: {course.courseName}</p>
            <p>Instructor: {course.instructorName}</p>
            <p>Description: {course.description}</p>
            <p>Enrollment Status: {course.enrollmentStatus}</p>
            <p>Duration: {course.courseDuration}</p>
            <p>Schedule: {course.schedule.days.join(', ')} from {course.schedule.startTime} to {course.schedule.endTime}</p>
            <p>Location: {course.location}</p>
            <p>Prerequisites: {course.prerequisites.join(', ')}</p>
            <p>Syllabus: {course.syllabus.join(', ')}</p>
        </div>
    );
};

export default FullCourse;
