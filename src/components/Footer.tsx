export default function Footer():JSX.Element {
  let year = new Date(Date.now()).getFullYear();
  return (
    <footer className="sticky-bottom footer-container bg-secondary">
      <div className="h-100 d-flex align-items-center justify-content-center">
        <div className="bg-secondary text-info">
          © {year} Copyright: Luca Romagnoli
        </div>
      </div>
    </footer>
  );
}
