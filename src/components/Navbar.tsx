import {Nav, Navbar} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {FilePdf} from "react-bootstrap-icons";
import React from "react";


export default function CustomNavbar() {
  return (
      <div>
        <Navbar collapseOnSelect sticky="top" expand="sm" bg="secondary" variant="dark" className="nav-fill w-100">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav activeKey={location.pathname} className="p-2">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                  <Nav.Link href="/history">History</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
              <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="http://127.0.0.1:8000/pdf" target="_blank" className="p-2">
                  <Navbar.Text className="pdf-text">Download as PDF</Navbar.Text>
                  <FilePdf size="1.5em" color="#ffffff8c"/>
                </Nav.Link>
              </Navbar.Collapse>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  );
}