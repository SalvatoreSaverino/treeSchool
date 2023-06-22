import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import style from "./myNabar.module.css";
import { Link, Outlet, useLocation } from "react-router-dom";

function MyNavbar() {
  const { pathname } = useLocation();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavItem
                eventkey={1}
                className={pathname === "/" ? style.active : null}
              >
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </NavItem>
              <NavItem
                eventkey={2}
                className={pathname === "/blogs" ? style.active : null}
              >
                <Nav.Link as={Link} to="/blogs">
                  Blogs
                </Nav.Link>
              </NavItem>
              <NavItem
                eventkey={3}
                className={pathname === "/contact" ? style.active : null}
              >
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default MyNavbar;
