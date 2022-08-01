import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import img from './img/logo.jpg'

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link className="me-5" href="/">HOME</Nav.Link>
          <Nav.Link className="me-3" href="/formulario">Crear jugadores</Nav.Link>
          <Nav.Link className="me-3" href="/monopoly">Monopoly</Nav.Link>
        </Nav>
        <img src={img} alt="logo" style={{maxHeight: "60px"}} />
      </Container>
    </Navbar>
  );
};

export default NavBar;
