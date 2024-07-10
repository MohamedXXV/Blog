import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/imgs/logo.png'
export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary border-bottom py-0">
      <Container>
              <Navbar.Brand to={"/"} className="navbar-brand w-25 w-sm-50" >
            <img src={logo} alt="logo.png" className="w-100" />
              </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to={"/"} className='className="nav-link active text-uppercase fw-medium fs-5'>Blog</Nav.Link>
            <Nav.Link to={"/"}  className='className="nav-link text-uppercase fw-medium fs-5'>About</Nav.Link>
            <Nav.Link to={"/"}  className='className="nav-link text-uppercase fw-medium fs-5'>Links</Nav.Link>
            <Nav.Link to={"/"}  className='className="nav-link text-uppercase fw-medium fs-5'>Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}