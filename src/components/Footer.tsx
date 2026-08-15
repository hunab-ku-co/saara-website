import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="muted">
          © {new Date().getFullYear()} Saara. All rights reserved.
        </p>
        <nav className="footer__links" aria-label="Footer">
          <a href="mailto:hello@example.com">Email</a>
          <a
            href="https://github.com/hunab-ku-co"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  )
}
