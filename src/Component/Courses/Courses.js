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
            <h1>This is Courses:{courses.length}</h1>
            <Row xs={1} md={4} lg={4} className="g-4 grid">
                {
                    courses.map(course => <Course course={course}></Course>)
                }
            </Row>
        </div>
    );
};

export default Courses;