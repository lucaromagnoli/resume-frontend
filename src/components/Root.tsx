import Header from "./Header";
import CustomNavbar from "./Navbar";
import Container from "react-bootstrap/Container";
import Outlet from "./Outlet";
import Footer from "./Footer";
import { useNavigation } from "react-router-dom";

export default function Root() {
  const navigation = useNavigation();
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
