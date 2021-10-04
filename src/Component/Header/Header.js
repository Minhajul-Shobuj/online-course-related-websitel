import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const design = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Learn-Quran</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>
                            <NavLink className="text-white me-auto" to="/home" activeStyle={design}>
                                Home
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className="text-white gap={3}" to="/course" activeStyle={design}>
                                Courses
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className="text-white gap={3}" to="/about" activeStyle={design}>
                                About
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className="text-white gap={3}" to="/blog" activeStyle={design}>
                                Blog
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;