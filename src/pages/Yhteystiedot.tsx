import { usePageMeta } from '../hooks/usePageMeta'

export default function Yhteystiedot() {
  usePageMeta('Yhteystiedot', 'Ota yhteyttä Saara Kiventöyryyn.')

  return (
    <section className="section">
      <div className="container stack">
        <p className="eyebrow">Yhteystiedot</p>
        <h1>Ota yhteyttä</h1>
        <p className="lede">Kysy, kommentoi tai tule mukaan kampanjaan.</p>

        <p className="placeholder">
          Sähköpostiosoite, puhelinnumero jos haluat sen julki, ja linkit
          somekanaviin (Facebook, Instagram, LinkedIn, X).
        </p>

        <p className="muted">
          Sivusto on staattinen, joten lomaketta ei voi ottaa vastaan ilman
          ulkoista palvelua. Sähköpostilinkki riittää useimmiten; jos haluat
          lomakkeen, se onnistuu erillisellä palvelulla.
        </p>
      </div>
    </section>
  )
}
