import Photo from '../components/Photo'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Tietoa() {
  usePageMeta('Tietoa minusta', 'Kuka on Saara Kiventöyry.')

  return (
    <>
      <section className="section">
        <div className="container band">
          <Photo
            className="band__photo"
            name="saara-blue"
            alt="Saara Kiventöyry"
            sizes="(min-width: 52em) 46vw, 92vw"
          />
          <div className="stack">
            <p className="eyebrow">Tietoa minusta</p>
            <h1>Kuka minä olen</h1>
            <p className="placeholder">
              Esittelyteksti: kuka olet, mistä tulet, mitä teet työksesi. 2–3
              kappaletta riittää.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--blue">
        <div className="container stack">
          <p className="eyebrow">Taustaa</p>
          <h2>Kokemus ja luottamustehtävät</h2>
          <p className="placeholder">
            Luettelo aiemmista luottamustehtävistä, työkokemuksesta ja
            koulutuksesta.
          </p>
        </div>
      </section>
    </>
  )
}
