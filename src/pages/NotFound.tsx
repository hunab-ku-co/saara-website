import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Sivua ei löytynyt')

  return (
    <section className="section">
      <div className="container stack">
        <p className="eyebrow">404</p>
        <h1>Sivua ei löytynyt.</h1>
        <p className="lede">
          Linkki voi olla vanhentunut tai sivu on siirtynyt.
        </p>
        <div className="btn-row">
          <Link className="btn" to="/">
            Takaisin etusivulle
          </Link>
        </div>
      </div>
    </section>
  )
}
