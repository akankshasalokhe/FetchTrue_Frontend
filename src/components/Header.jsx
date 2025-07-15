import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="p-0"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        zIndex: 1050
      }}
    >
      <Container fluid className="px-4">
        <Navbar.Brand href="#" className="fs-3 fw-bold text-white">
          FetchTrue
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="border-0" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 fs-5"
            style={{
              maxHeight: '90vh',
              paddingBottom: '1rem'
            }}
            navbarScroll
          >
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <Nav.Link href="/about-us" className="text-white">About Us</Nav.Link>

            <NavDropdown title={<span className="text-white">Services</span>} id="services-dropdown">
              <NavDropdown.Item href="/services/web-design">Web Design</NavDropdown.Item>
              <NavDropdown.Item href="/services/marketing">Marketing</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span className="text-white">Join Us</span>} id="joinus-dropdown">
              <NavDropdown.Item href="/join-us/services-provider">Services Provider</NavDropdown.Item>
              <NavDropdown.Item href="/join-us/become-our-partner">Become Our Growth Partner</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/gallery" className="text-white">Gallery</Nav.Link>

            <Button variant="light" className="fw-semibold mt-2 fs-5">
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
