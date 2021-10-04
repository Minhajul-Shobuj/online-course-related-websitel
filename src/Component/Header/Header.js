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
            {/* <Navbar variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <NavLink to="/home" activeStyle={design}>
                            Home
                        </NavLink>
                        <NavLink to="/course" activeStyle={design}>
                            Courses
                        </NavLink>
                        <NavLink to="/about" activeStyle={design}>
                            About
                        </NavLink>
                        <NavLink to="/blog" activeStyle={design}>
                            Blog
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar> */}
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="text-white me-auto" to="/home" activeStyle={design}>
                            Home
                        </NavLink>
                        <NavLink className="text-white gap={3}" to="/course" activeStyle={design}>
                            Courses
                        </NavLink>
                        <NavLink className="text-white gap={3}" to="/about" activeStyle={design}>
                            About
                        </NavLink>
                        <NavLink className="text-white gap={3}" to="/blog" activeStyle={design}>
                            Blog
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;