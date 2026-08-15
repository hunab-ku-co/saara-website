import { usePageMeta } from '../hooks/usePageMeta'

export default function Contact() {
  usePageMeta('Contact', 'Get in touch with Saara.')

  return (
    <section className="section">
      <div className="container stack">
        <p className="eyebrow">Contact</p>
        <h1>Get in touch</h1>
        <p className="lede">
          Tell us what you are building and where it hurts.
        </p>
        <div className="btn-row">
          <a className="btn" href="mailto:hello@example.com">
            hello@example.com
          </a>
        </div>
        <p className="muted">
          GitHub Pages serves static files only, so there is no backend here to
          receive a form post. Swap the address above for your own, or point a
          form at a hosted handler if you would rather collect submissions.
        </p>
      </div>
    </section>
  )
}
