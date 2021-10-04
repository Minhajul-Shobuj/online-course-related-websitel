import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './course.css'

const Course = (props) => {
    const { name, duration, author, videos, rating, img } = props.course;
    return (
        <div >
            <Col className="card">
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="card-body">
                        <Card.Title className="title">{name}</Card.Title>
                        <Card.Text>
                            <h4>By- <small className="title">{author}</small></h4>
                            <h4>Duration:<small className="title"> {duration}</small></h4>
                            <h4 >Lectures:<small className="title"> {videos}</small></h4>
                            <h4>Rating:<small className="title"> {rating}</small></h4>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary">Enroll</Button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Course;

