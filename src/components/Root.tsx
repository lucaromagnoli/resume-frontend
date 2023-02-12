import Header from "./Header";
import CustomNavbar from "./Navbar";
import Container from "react-bootstrap/Container";
import Outlet from "./Outlet";
import Footer from "./Footer";

export default function Root() {
  return (
    <>
      <Header />
      <CustomNavbar />
      <Container className="main-container text-muted">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
