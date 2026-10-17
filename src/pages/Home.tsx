import { Link } from 'react-router-dom'
import Photo from '../components/Photo'
import { LEAD, SLOGAN, THEMES } from '../content/teemat'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta('Saara Kiventöyry', `${SLOGAN}. ${LEAD}`)

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
            <p className="script hero__slogan">{SLOGAN}</p>
            <p className="lede">{LEAD}</p>
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
          <div className="theme-grid">
            {THEMES.map((theme) => (
              <Link
                key={theme.id}
                className="card theme-card"
                to={`/teemat#${theme.id}`}
              >
                <h3 className="card__title">{theme.title}</h3>
                <p className="theme-card__goal">
                  <strong>Tavoitteeni:</strong> {theme.goal}
                </p>
                <span className="more">Lue lisää</span>
              </Link>
            ))}
          </div>
          <div className="btn-row">
            <Link className="btn btn--ghost" to="/teemat">
              Kaikki teemat
            </Link>
          </div>
        </div>
      </section>

      <section className="section fb" aria-labelledby="fb-title">
        <div className="container">
          <a
            className="fb-card"
            href="https://www.facebook.com/share/16L5KMf2nY9/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Photo
              className="fb-card__photo"
              name="saara-facebook"
              alt=""
              sizes="(min-width: 52em) 36vw, 92vw"
            />
            <div className="fb-card__body stack">
              <p className="eyebrow fb-card__brand">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M15.1 8.5V6.7c0-.9.2-1.4 1.5-1.4H18V3h-2.2C13 3 11.7 4.4 11.7 6.6v1.9H9.5v2.7h2.2V21h3.2v-9.8h2.4l.4-2.7h-2.6z"
                  />
                </svg>
                Facebook
              </p>
              <h2 id="fb-title">Tule katsomaan Facebookissa</h2>
              <p className="lede">
                Siellä jaan kuvia ja kuulumisia kampanjasta.
              </p>
              <span className="btn">
                Avaa Facebookissa
                <span className="sr-only"> (avautuu uuteen välilehteen)</span>
              </span>
            </div>
          </a>
        </div>
      </section>
    </>
  )
}
