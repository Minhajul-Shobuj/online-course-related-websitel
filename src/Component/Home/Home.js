import React, { useEffect, useState } from 'react';
import { Row, Card, Col, Button } from 'react-bootstrap';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON').then(res => res.json()).then(data => setCourses(data))
    }, []);
    const course = courses.slice(7);
    return (
        <div>
            <div className="d-flex container">
                <h1 className="text-success">Laern-Quran is one of the popular site for learning Quran in Bangladesh as well all over the world..</h1>
            </div>
            <Row xs={1} md={4} lg={3} className="g-4">
                {
                    course.map(element => <Col className="card">
                        <Card>
                            <Card.Img variant="top" src={element.img} />
                            <Card.Body className="card-body">
                                <Card.Title className="title">{element.name}</Card.Title>
                                <Card.Text>
                                    <h4>By <small className="title">{element.author}</small></h4>
                                    <h4>Duration:<small className="title"> {element.duration}</small></h4>
                                    <h4 >Lectures:<small className="title"> {element.videos}</small></h4>
                                    <h4>Rating:<small className="title"> {element.rating}</small></h4>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary">Details</Button>
                            </Card.Footer>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default Home;