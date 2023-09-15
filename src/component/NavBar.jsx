import { Container, Navbar } from "react-bootstrap";
import logo from "../asset/logo-meteo.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-0">
      <Container fluid style={{ backgroundColor: "#ffc354" }}>
        <Navbar.Brand>
          <Link to={"/"}>
            <img style={{ width: "100px" }} src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default NavBar;
