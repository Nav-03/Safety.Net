import React, { useState, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import * as Icons from "react-icons/fa";
// import "./Navbar.css";
import { navItems } from "./NavItems";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export const NavbarComponent = () => {
  const [dropdown, setDropdown] = useState(false);
  const history = useHistory();
  const handleOnClick = useCallback(
    () => history.push("/admin_login"),
    [history]
  );

  console.log(navItems);

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Safety.Net</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navItems.map((item) => {
              if (!!item.items && item.items.length > 0) {
                item.items.map((subItem) => {
                  return (
                    <NavDropdown title={item.title} id="basic-nav-dropdown">
                      <NavDropdown.Item key={subItem.id} href={subItem.href}>
                        {subItem.title}
                      </NavDropdown.Item>
                    </NavDropdown>
                  );
                });
              }
              return (
                <Nav.Link key={item.id} href={item.path}>
                  {item.title}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    //   <div class="container-fluid">
    //     <Link className="navbar-brand" to="/landing_page">
    //       Safety.Net
    //     </Link>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //         {navItems.map((navItem) => {
    //           if (!!navItem.items && navItem.items.length > 0) {
    //             return (
    //               <li className={navItem.cName} key={navItem.id}>
    //                 <a
    //                   class="nav-link dropdown-toggle"
    //                   href="#"
    //                   id="navbarDropdown"
    //                   role="button"
    //                   data-bs-toggle="dropdown"
    //                   aria-expanded="false"
    //                 >
    //                   {navItem.title}
    //                   <ul
    //                     className="dropdown-menu"
    //                     aria-labelledby="navbarDropdown"
    //                   >
    //                     {navItem.items.map((subNavItem) => {
    //                       return (
    //                         <li key={subNavItem.id}>
    //                           <Link
    //                             to={subNavItem.path}
    //                             className={subNavItem.cName}
    //                           >
    //                             {subNavItem.title}
    //                           </Link>
    //                         </li>
    //                       );
    //                     })}
    //                   </ul>
    //                 </a>
    //               </li>
    //             );
    //           }
    //           return (
    //             <li className={navItem.cName} key={navItem.id}>
    //               <Link to={navItem.path} class="nav-link">
    //                 {navItem.title}
    //               </Link>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    // <nav className="navbar">
    //   <Link to="/landing_page" className="navbar-logo">
    //     <h2>Safety.Net</h2>
    //   </Link>
    //   <ul className="nav-items">
    //     {navItems.map((item) => {
    //       if (item.title === "Events") {
    //         return (
    //           <li
    //             key={item.id}
    //             className={item.cName}
    //             onMouseEnter={() => setDropdown(true)}
    //             onMouseLeave={() => setDropdown(false)}
    //           >
    //             <Link to={item.path}>{item.title}</Link>
    //             {dropdown && <Dropdown />}
    //           </li>
    //         );
    //       }
    //       return (
    //         <li key={item.id} className={item.cName}>
    //           <Link onChange={handleOnClick} to={item.path}>
    //             {item.title}
    //           </Link>
    //         </li>
    //       );
    //     })}
    //   </ul>
    //   <Button />
    // </nav>
  );
};
