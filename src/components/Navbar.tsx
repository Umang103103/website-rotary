import { Navbar as BSNavbar, Container, Nav } from "react-bootstrap";

function Navbar() {
  return (
    <BSNavbar expand="lg" sticky="top" className="navbar">
      <Container>
        <BSNavbar.Brand href="#home" className="logo">
          Rotary Club of Dhulikhel
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#services">Service Projects</Nav.Link>
            <Nav.Link href="#involve">Get Involved</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
