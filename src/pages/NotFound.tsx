import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found')

  return (
    <section className="section">
      <div className="container stack">
        <p className="eyebrow">404</p>
        <h1>We could not find that page.</h1>
        <p className="lede">
          The link may be out of date, or the page may have moved.
        </p>
        <div className="btn-row">
          <Link className="btn" to="/">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
