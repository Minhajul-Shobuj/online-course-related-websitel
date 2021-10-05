import React, { useEffect, useState } from 'react';
import { Row, Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON').then(res => res.json()).then(data => setCourses(data))
    }, []);
    const course = courses.slice(4);
    let history = useHistory();
    function handleClick() {
        history.push("/course");
    }
    return (
        <div>
            <div className="d-flex container rounded mt-3
            mb-2 bg-secondary">
                <h1 className="text-info font-monospace text-capitalize fw-bold">Laern-Quran is one of the popular site for learning Quran in Bangladesh as well all over the world..</h1>
            </div>
            <div>
                <h3 className="text-danger fw-bold">Some of our Services-</h3>
                <Row xs={1} md={4} lg={3} className="g-4 container ms-5 mt-3">
                    {
                        course.map(element => <Col>
                            <Card>
                                <Card.Img variant="top" src={element.img} />
                                <Card.Body className="card-body">
                                    <Card.Title className="title">{element.name}</Card.Title>
                                    <Card.Text>
                                        <h4>By- <small className="title">{element.author}</small></h4>
                                        <h4>Duration:<small className="title"> {element.duration}</small></h4>
                                        <h4 >Lectures:<small className="title"> {element.videos}</small></h4>
                                        <h4>Rating:<small className="title"> {element.rating}</small></h4>
                                        <h4>Price:<small className="title"> {element.price}</small></h4>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button onClick={handleClick} variant="primary" className="btn" >Details</Button>
                                </Card.Footer>
                            </Card>
                        </Col>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;