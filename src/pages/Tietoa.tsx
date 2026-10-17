import Photo from '../components/Photo'
import { usePageMeta } from '../hooks/usePageMeta'

const CURRENT = [
  ['Aluevaltuutettu Kymenlaakson hyvinvointialueella', '2023–'],
  ['Terveyden- ja sairaanhoidon palvelulautakunnan jäsen', '2025–'],
  ['Kotkan kaupunginvaltuuston jäsen', '2025–'],
  ['Hallituspaikka Kymenlaakson HVA:n edustajana HPK Palvelut Oy:ssä', '2025–'],
  ['Kaakkois-Suomen Työterveyslääkäri yhdistys, puheenjohtaja', null],
  ['Kotkan Sotilaskoti yhdistys, sihteeri', null],
] as const

const EARLIER = [
  ['Hyvinvoinnin- ja terveyden edistämisen lautakunnan jäsen', '2023–2025'],
  ['Kymijoen Ravintopalvelut Oy hallitus, varapuheenjohtaja', null],
] as const

export default function Tietoa() {
  usePageMeta('Tietoa minusta', 'Kotkalainen työterveyshuollon erikoislääkäri.')

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
            <p>
              Olen kotkalainen työterveyshuollon erikoislääkäri. Haluan työssäni
              ja politiikassa edistää terveyttä ja hyvinvointia taloudellisesti
              kestävällä tavalla. Työssäni pääsen lähelle työelämää, yrityksiä
              ja ihmisiä.
            </p>
            <p>
              Valtakunnan tason politiikkaan lähden päättämään yhteisistä
              asioista ja muistuttamaan Kaakkois-Suomen tärkeydestä itärajan
              läheisyydessä.
            </p>
            <p>
              Vapaa-ajalla nautin liikunnasta ja luonnosta. Harrastan
              kilpauintia altaassa ja avovedessä ja kylmävesiuinti takaa minulle
              hyvät unet. Manda-koiran kanssa lenkkeilen.
            </p>
            <p>
              Olen myös aktiivinen monessa yhdistyksessä ja järjestössä: Kotkan
              Sotilaskoti yhdistys, Kaakkois-Suomen Työterveyslääkäri yhdistys
              ja Tangent Club Suomi Finland.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--blue">
        <div className="container">
          <div className="stack">
            <p className="eyebrow">Taustaa</p>
            <h2>Kokemus ja luottamustehtävät</h2>
          </div>
          <div className="roles">
            <div>
              <h3>Nykyiset</h3>
              <ul>
                {CURRENT.map(([role, when]) => (
                  <li key={role}>
                    {role}
                    {when ? <span className="role__when">{when}</span> : null}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Aikaisemmat</h3>
              <ul>
                {EARLIER.map(([role, when]) => (
                  <li key={role}>
                    {role}
                    {when ? <span className="role__when">{when}</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
