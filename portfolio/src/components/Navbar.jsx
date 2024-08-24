import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../assets/img/profie.jpeg';
import meharImage from '../assets/img/logo.png';
import '../styles/resume.css';

const NavigationBar = () => {

  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };
  
  return (
    <Navbar bg="primary" expand="lg" fixed="top" variant="dark" id="sideNav">
      <Navbar.Brand href="#page-top">
      <span className="d-block d-lg-none">
          <img
            className="img-fluid img-profile  mx-auto mb-2"
            src={meharImage}
            
            alt="Profile"
            style={{ width: '150px', height: '50px' }} 
          />
        </span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={profileImage}
            alt="Profile"
          />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about" onClick={handleNavClick}>About</Nav.Link>
          <Nav.Link href="#experience" onClick={handleNavClick} >Experience</Nav.Link>
          <Nav.Link href="#education" onClick={handleNavClick}>Education</Nav.Link>
          <Nav.Link href="#skills" onClick={handleNavClick}>Skills</Nav.Link>
          <Nav.Link href="#interests" onClick={handleNavClick}>Interests</Nav.Link>
          <Nav.Link href="#awards" onClick={handleNavClick}>Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
