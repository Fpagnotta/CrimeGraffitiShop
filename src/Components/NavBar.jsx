import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark"  expand="lg" >
      <Container className="d-flex justify-content-between w-100 align-items-center">
        <Navbar.Brand as={NavLink} to='/' className="logo-brand ">CR GRAFF SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to='/' >INICIO</Nav.Link>
            <Nav.Link as={NavLink} to='/ofertas'>OFERTAS!</Nav.Link>
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/categoria/AEROSOLES'>AEROSOLES</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categoria/MARKERS'>
                MARKERS
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categoria/CAPS'>CAPS</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;