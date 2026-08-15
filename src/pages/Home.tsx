import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

const FEATURES = [
  {
    title: 'Cloud foundations',
    body: 'Landing zones, guardrails and network topology that hold up as the estate grows.',
  },
  {
    title: 'Infrastructure as code',
    body: 'Terraform modules with a review trail, so changes are reversible and boring.',
  },
  {
    title: 'Delivery pipelines',
    body: 'CI that catches problems on the pull request rather than in production.',
  },
]

export default function Home() {
  usePageMeta(
    'Saara',
    'Saara — cloud foundations, infrastructure as code, and delivery pipelines.',
  )

  return (
    <>
      <section className="section">
        <div className="container stack">
          <p className="eyebrow">Saara</p>
          <h1>Calm, considered cloud engineering.</h1>
          <p className="lede">
            We build the unglamorous layer underneath — the accounts, networks
            and pipelines that let everything above them move quickly.
          </p>
          <div className="btn-row">
            <Link className="btn" to="/contact">
              Start a conversation
            </Link>
            <Link className="btn btn--ghost" to="/about">
              How we work
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--subtle">
        <div className="container stack">
          <h2>What we do</h2>
          <div className="grid">
            {FEATURES.map(({ title, body }) => (
              <article key={title} className="card stack">
                <h3>{title}</h3>
                <p className="muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
