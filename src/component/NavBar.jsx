import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../asset/logo-meteo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="p-0 ">
      <Container className="bg-dark  p-2" fluid>
        <Navbar.Brand>
          <Link to={"/"}>
            <img style={{ width: "70px" }} src={logo} alt="logo" />
          </Link>{" "}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="text-white">
            <Link to={"/"}>Home </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
