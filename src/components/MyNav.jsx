import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'

const MyNav = function () {
return(
    <Navbar id="top"collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#home">MyBookStore</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#browse">browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
}

export default MyNav