/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Navbar, Nav, Container } from 'react-bootstrap';
function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="/">humans.io</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Notes</Nav.Link>
            <Nav.Link href="/">Timeline</Nav.Link>
            <Nav.Link href="/">Circles</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/">Settings</Nav.Link>
            <Nav.Link href="/">Help</Nav.Link>
            <Nav.Link href="/">Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Header.propTypes = {};

export default Header;
