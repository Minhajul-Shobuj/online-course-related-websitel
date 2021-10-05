import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON').then(res => res.json()).then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1 className="text-warning fw-bold rounded mx-5 mt-3 bg-info font-monospace text-capitalize">Select your course for optimizes yourself</h1>
            <Row xs={1} md={4} lg={4} className="g-4 container ms-5">
                {
                    courses.map(course => <Course key={course.name} course={course}></Course>)
                }
            </Row>
        </div>
    );
};

export default Courses;