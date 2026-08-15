import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Saara Kiventoyry</p>
        <p className="footer__note placeholder">
          Vaalimainonnan tunniste ja maksajatiedot, jos vaalilaki niitä
          edellyttää.
        </p>
      </div>
    </footer>
  )
}
