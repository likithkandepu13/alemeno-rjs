import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import BrowserRouter as Router
import Course from './courses/course';
import EnrolledCourse from './courses/enrolledCourse';
import './style.css'

const Navbar = () => {
    return (
        <Router className="navbar">
            <div>
                <ul>
                    <li><Link to='/'> Home</Link></li>
                    <li><Link to='/student'> Enrolled Courses</Link></li>
                </ul>
                <Routes>
                    <Route path='/' element={<Course/>}/>
                    <Route path='/student' element={<EnrolledCourse/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default Navbar;
