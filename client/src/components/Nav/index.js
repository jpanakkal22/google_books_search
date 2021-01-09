import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./style.css";

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/" id="brand">Google Books Search</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" id="links">
          <Nav.Link href ="/search">SEARCH</Nav.Link>
          <Nav.Link href ="/saved">SAVED</Nav.Link>     
        </Nav>        
      </Navbar.Collapse>
    </Navbar>    
  );
}

export default Navigation;
