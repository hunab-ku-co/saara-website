import { usePageMeta } from '../hooks/usePageMeta'

export default function About() {
  usePageMeta(
    'About',
    'How Saara works: small scope, plain tools, reversible changes.',
  )

  return (
    <section className="section">
      <div className="container stack">
        <p className="eyebrow">About</p>
        <h1>How we work</h1>
        <p className="lede">
          Small scopes, plain tools, and changes you can undo.
        </p>
        <p>
          Most infrastructure problems are not technical puzzles — they are the
          accumulated cost of decisions nobody wrote down. We start by making
          the current state legible, then change it in increments small enough
          to review honestly.
        </p>
        <p>
          Everything lands as code in a repository, with a pipeline that proves
          it builds before anyone merges it. That is not ceremony; it is the
          cheapest way we know to keep a system understandable a year later.
        </p>
      </div>
    </section>
  )
}
