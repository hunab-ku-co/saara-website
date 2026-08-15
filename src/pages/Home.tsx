import { Link } from 'react-router-dom'
import Photo from '../components/Photo'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta(
    'Saara Kiventöyry',
    'Saara Kiventöyry — Kokoomuksen ehdokas. Tutustu teemoihin ja ota yhteyttä.',
  )

  return (
    <>
      {/* section--blue carries the on-blue inversions for eyebrow, buttons and
          placeholders; .hero adds the gradient and layout on top. */}
      <section className="hero section--blue">
        <div className="container hero__inner">
          <div className="stack">
            <p className="eyebrow">Kokoomus</p>
            {/* Two blocks rather than a <br>: a <br> puts no whitespace into
                textContent, so the accessible name came out "SaaraKiventöyry".
                The explicit {' '} survives JSX whitespace trimming. */}
            <h1 className="hero__name">
              <span>Saara</span> <span>Kiventöyry</span>
            </h1>
            <p className="placeholder">
              Kampanjan slogan, 1–2 lausetta. Esimerkiksi mitä lähdet ajamaan ja
              kenelle. Tämä on sivun näkyvin teksti.
            </p>
            <p className="placeholder">
              Vaalit, vaalipiiri ja ehdokasnumero, kun numero on arvottu.
            </p>
            <div className="btn-row">
              <Link className="btn" to="/teemat">
                Tutustu teemoihin
              </Link>
              <Link className="btn btn--ghost" to="/yhteystiedot">
                Ota yhteyttä
              </Link>
            </div>
          </div>

          <Photo
            className="hero__photo"
            name="saara-portrait"
            alt="Saara Kiventöyry"
            priority
            sizes="(min-width: 52em) 34vw, 92vw"
          />
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <p className="eyebrow">Teemat</p>
          <h2>Mitä lähden ajamaan</h2>
          <div className="grid">
            {[1, 2, 3].map((n) => (
              <article key={n} className="card stack">
                <h3 className="card__title">Teema {n}</h3>
                <p className="placeholder">
                  Teeman otsikko ja 2–3 lauseen kuvaus. Konkreettinen lupaus
                  toimii paremmin kuin yleinen periaate.
                </p>
              </article>
            ))}
          </div>
          <div className="btn-row">
            <Link className="btn btn--ghost" to="/teemat">
              Kaikki teemat
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
