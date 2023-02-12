import Header from "./Header";
import CustomNavbar from "./Navbar";
import Container from "react-bootstrap/Container";
import {Outlet, redirect} from "react-router-dom";
import Footer from "./Footer";


export default function Root() {
    return (
            <>
                <Header/>
                <CustomNavbar/>
                <Container className="main-container text-muted p-2">
                    <Outlet />
                </Container>
              <Footer />
           </>
    );
}
