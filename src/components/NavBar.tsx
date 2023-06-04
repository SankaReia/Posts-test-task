import { FC } from "react";
import { Container, Nav, Navbar, Image, Offcanvas } from "react-bootstrap";
import logo from "../logo.jpg";
import { useNavigate } from "react-router-dom";

const NavBar: FC = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="mb-3">
      <Container>
        <Navbar.Brand>
          <Image src={logo} roundedCircle width="35" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
              Мубараков Нияз mr.sherman007@gmail.com
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/")}>Posts</Nav.Link>
              <Nav.Link onClick={() => navigate("/aboutMe")}>About Me</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
