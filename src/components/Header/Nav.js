import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button"
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


 const NavigationBar = () => { 
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Tisk pro radost</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/EditorPage">Editor</Nav.Link>
            <Nav.Link href="#pricing">Nacenit zakázku</Nav.Link>
            <NavDropdown title="Služby" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Můj účet</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Další odkaz
            </Nav.Link>
          </Nav>

          <Nav><Nav.Link href="/Signup"><Button>Prihlaseni</Button></Nav.Link></Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </>
  );
}
  export default NavigationBar