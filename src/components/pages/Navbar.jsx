import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AmazonNavbar = () => {
  const linkStyle = { color: 'white' };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={linkStyle}>Amazon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={linkStyle}>Home</Nav.Link>
            <Nav.Link as={Link} to="/best-sellers" style={linkStyle}>Best Sellers</Nav.Link>
            <Nav.Link as={Link} to="/category" style={linkStyle}>Category</Nav.Link>
            <Nav.Link as={Link} to="/new-releases" style={linkStyle}>New Releases</Nav.Link>
            <Nav.Link as={Link} to="/todays-deals" style={linkStyle}>Today's Deals</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/sign-in" style={linkStyle}>Sign In</Nav.Link>
            <Nav.Link as={Link} to="/orders" style={linkStyle}>Orders</Nav.Link>
            <Nav.Link as={Link} to="/cart" style={linkStyle}>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AmazonNavbar;
