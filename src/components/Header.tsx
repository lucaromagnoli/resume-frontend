import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Github, Linkedin, StackOverflow } from "react-bootstrap-icons";

export default function Header() {
  return (
    <div className="bg-dark">
      <Container>
        <Row className="align-items-end text-light">
          <Col md={8}>
            <div className="p-4">
              <h1 className="display-3 font-weight-bold">Luca Romagnoli</h1>
              <h4>Software Engineer</h4>
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-row-reverse mb-0 p-1">
              <div className="p-1">
                <a href="https://github.com/lucaromagnoli" target="_blank">
                  <Github color="white" size="1.5em" />
                </a>
              </div>
              <div className="p-1">
                <a
                  href="https://stackoverflow.com/users/4893016/nomadmonad"
                  target="_blank"
                >
                  <StackOverflow color="white" size="1.5em" />
                </a>
              </div>
              <div className="p-1">
                <a
                  href="https://www.linkedin.com/in/lucaromagnoli79/"
                  target="_blank"
                >
                  <Linkedin color="white" size="1.5em" />
                </a>
              </div>
              <div className="version-container">
                <div className="version-text">v.1.0.1</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
