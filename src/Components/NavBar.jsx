import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark"  expand="lg" >
      <Container>
        <Navbar.Brand href="#home">CR GRAFF SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">INICIO</Nav.Link>
            <Nav.Link href="#link">OFERTAS!</Nav.Link>
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">AEROSOLES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                MARKERS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">CAPS</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;