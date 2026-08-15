import { usePageMeta } from '../hooks/usePageMeta'

// Four slots is a common campaign shape. Add or remove entries here as the
// real themes are decided.
const SLOTS = [1, 2, 3, 4]

export default function Teemat() {
  usePageMeta('Teemat', 'Saara Kiventoyryn vaaliteemat.')

  return (
    <section className="section">
      <div className="container stack">
        <p className="eyebrow">Teemat</p>
        <h1>Vaaliteemat</h1>
        <p className="placeholder">Lyhyt johdanto teemoihin, 1–2 lausetta.</p>

        <div className="grid">
          {SLOTS.map((n) => (
            <article key={n} className="card stack">
              <h2 className="card__title">Teema {n}</h2>
              <p className="placeholder">
                Otsikko ja 3–5 lauseen kuvaus. Kerro mitä konkreettisesti
                tapahtuu, jos tämä toteutuu.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
