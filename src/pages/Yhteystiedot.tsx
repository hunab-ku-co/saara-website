import { usePageMeta } from '../hooks/usePageMeta'

const EMAIL = 'skiventoyry@gmail.com'

export default function Yhteystiedot() {
  usePageMeta('Yhteystiedot', `Ota yhteyttä: ${EMAIL}`)

  return (
    <section className="section">
      <div className="container stack">
        <p className="eyebrow">Yhteystiedot</p>
        <h1>Ota yhteyttä</h1>
        <p className="lede">Kysy, kommentoi tai tule mukaan kampanjaan.</p>
        <p>
          <a className="btn" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
      </div>
    </section>
  )
}
