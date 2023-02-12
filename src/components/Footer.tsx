import Container from "react-bootstrap/Container";

export default function Footer() {
  let year = new Date(Date.now()).getFullYear();
  return (
    <footer className="sticky-bottom footer-container bg-primary">
      <div className="h-100 d-flex align-items-center justify-content-center">
        <div className="bg-primary text-info">
          © {year} Copyright: Luca Romagnoli
        </div>
      </div>
    </footer>
  );
}
