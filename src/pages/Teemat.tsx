import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { LEAD, THEMES } from '../content/teemat'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Teemat() {
  const { hash } = useLocation()

  usePageMeta('Teemat', LEAD)

  // A home-page card links to /teemat#id. Opening the matching disclosure here
  // is the only script: the text itself is already in the static HTML.
  useEffect(() => {
    const id = decodeURIComponent(hash.replace(/^#/, ''))
    if (!id) return
    const el = document.getElementById(id)
    if (el instanceof HTMLDetailsElement) el.open = true
  }, [hash])

  return (
    <section className="section">
      <div className="container stack">
        <p className="eyebrow">Teemat</p>
        <h1>Vaaliteemat</h1>
        <p className="lede">{LEAD}</p>

        <div className="point-list">
          {THEMES.map((theme) => (
            // Native disclosure, shared name: one theme open at a time, no
            // client state, and the long text ships in the page HTML.
            <details
              key={theme.id}
              id={theme.id}
              className="point card"
              name="teema"
            >
              <summary aria-labelledby={`${theme.id}-title`}>
                <h2 id={`${theme.id}-title`} className="card__title">
                  {theme.title}
                </h2>
                <span className="point__mark" aria-hidden="true" />
              </summary>
              <div className="point__body stack">
                {theme.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="point__goal">
                  <strong>Tavoitteeni:</strong> {theme.goal}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
