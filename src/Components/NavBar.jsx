import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark"  expand="lg" >
      <Container>
        <Navbar.Brand as={NavLink} to='/'>CR GRAFF SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/' >INICIO</Nav.Link>
            <Nav.Link as={NavLink} to='/ofertas'>OFERTAS!</Nav.Link>
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/categoria/aerosoles'>AEROSOLES</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categoria/markers'>
                MARKERS
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categoria/caps'>CAPS</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;