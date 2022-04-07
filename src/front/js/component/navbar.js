import React, { useState, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems, eventsSubItems } from "./NavItems";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

export const NavbarComponent = () => {
  const [dropdown, setDropdown] = useState(false);
  const history = useHistory();
  const handleOnClick = useCallback(
    () => history.push("/admin_login"),
    [history]
  );

  return (
    <Navbar bg="dark" expand="lg" className="my-navbar">
      <Container className="my-navbar-container">
        <Navbar.Brand href="/">Safety.Net</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navItems.map((item) => {
              return (
                <div>
                  <Nav.Link key={item.id} href={item.path}>
                    {item.title}
                  </Nav.Link>
                </div>
              );
            })}
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className=" admin-button justify-content-end">
          <Button variant="outline-info boton">
            <Nav.Link href="/admin_login">Admin</Nav.Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
