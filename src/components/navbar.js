import React from "react";
import { Navbar, Container, Nav, NavbarBrand, NavDropdown, Button, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function NavigationBar() {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/')
    }

    const infoAlert = () => {
        alert("Masih dalam tahap Pengembangan😊😊\nAkan tersedia di update selanjutnya😉😉")
        alert("Silahkan klik Get Started untuk mencoba")
        alert("Good Luck🤗😉")
    }

    return (
        <div className="navigasi">
            <Navbar collapseOnSelect expand="lg" className="navigasi">
                <Container>
                    <NavbarBrand className='brand' onClick={handleNavigateHome}>INFOSAYA</NavbarBrand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown className="navbar-menu" title="Solution" id="collasible-nav-dropdown">
                                <Dropdown.Header>BY TEAM SIZE</Dropdown.Header>
                                <Dropdown.Item eventKey="1">Entersprise
                                    <div className="item-title" disabled>Advanced features for your org</div>
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2">Small Business
                                    <div className="item-title" disabled>Manage your team on one tool</div>
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="3">Personal
                                    <div className="item-title" disabled>Free for individuals </div>
                                </Dropdown.Item>
                                <Dropdown.Header>BY TEAM FUNCTION</Dropdown.Header>
                                <Dropdown.Item eventKey="1">Manager</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Enginering</Dropdown.Item>
                                <Dropdown.Item eventKey="5">Design</Dropdown.Item>
                                <Dropdown.Header>INFOSAYA FOR</Dropdown.Header>
                                <Dropdown.Item eventKey="1">Start-Up</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Education</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Organization</Dropdown.Item>
                                <Dropdown.Item eventKey="4">Remote Work</Dropdown.Item>
                            </NavDropdown>
                            <NavDropdown className="navbar-menu" title="Download" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">iOS & Android</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Mac & Windows</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Web Clipper</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="navbar-menu" onClick={infoAlert}>Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className="navbar-menu" onClick={infoAlert}>Login</Nav.Link>
                            <Nav.Link className="navbar-menu" onClick={infoAlert}>Try For Free</Nav.Link>
                            {/* <button type="button" className="btn contact"> <a href="#contact"></a>Contact</button> */}
                            <Button href="#contact" className="contact">Contact</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
};

export default NavigationBar;