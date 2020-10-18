import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

// Stateless Functional Component
// Note that we cannot use life cycle hooks here because its a sfc
// because this is a single function that returns the output of this component.
// Can only use class components if you need to use lifecycle hooks (mounted, rendered, etc)
const ANavBar = (props) => {
  console.log("NavBar - Rendered");
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">FIsh Tank</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ANavBar;
