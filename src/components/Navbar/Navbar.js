import React from "react";
import {  Nav, Navbar, } from "react-bootstrap";
import "./Navbar.css";
import logo from '../../images/Illustration/Group 86.png'

const NavBar = () => {
  return (
    <div className="container">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} alt="" height="100"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-3 font-weight-bold text-dark" href="#home">Home</Nav.Link>
            <Nav.Link className="mr-3 text-dark" href="#link">About</Nav.Link>
            <Nav.Link className="mr-3 text-dark" href="#link">Services</Nav.Link>
            <Nav.Link className="mr-3 text-dark" href="#link">About</Nav.Link>
            <Nav.Link className="mr-3 text-dark" href="#link">Our team</Nav.Link>
            <button className="btn-brand">Contact us</button>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
