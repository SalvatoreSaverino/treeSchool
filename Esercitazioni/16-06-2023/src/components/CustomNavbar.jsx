import {Container, Nav, Navbar,}  from "react-bootstrap";


const CustomNavbar = () => (
  <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Restaurant </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#menu">Menù</Nav.Link>
          <Nav.Link href="#prenotazioni">Prenotazioni</Nav.Link>
          <Nav.Link href="#contatti">Contatti</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CustomNavbar;
