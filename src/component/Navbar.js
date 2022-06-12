import React from 'react'
import { Navbar, Nav } from 'rsuite';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <Navbar>
    <Navbar.Brand as={Link} to={"/"}>React-Test</Navbar.Brand>
    <Nav>
      <Nav.Item as={Link} to={"/"}>Home</Nav.Item>
      <Nav.Item as={Link} to={"/cal"}>Calculator</Nav.Item>
      <Nav.Item as={Link} to={"/forms"}>Forms</Nav.Item>
    </Nav>
  </Navbar>
  )
}

export default navbar