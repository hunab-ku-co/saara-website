// Saara's own wording. The goal line is the sentence she wrote after
// "Tavoitteeni:"; it stays visible, and the paragraphs open on click.

export const SLOGAN = 'Päätöksiä, jotka näkyvät arjessa'

export const LEAD =
  'Sujuvampia palveluja, kannustavampaa työelämää ja osaamista tulevaisuuteen.'

export type Theme = {
  id: string
  title: string
  goal: string
  paragraphs: string[]
}

export const THEMES: Theme[] = [
  {
    id: 'omalakari',
    title: 'Omalääkäri jokaiselle\u00A0– oikeaan aikaan oikeaan hoitoon',
    goal: 'omalääkäri jokaiselle, sujuvampi hoitoon pääsy ja teknologia aidosti ihmisten terveyden ja hyvinvoinnin tueksi.',
    paragraphs: [
      'Jokaisella suomalaisella tulee olla mahdollisuus päästä lääkäriin ajoissa. Hoidon jatkuvuus, tuttu lääkäri ja sujuvat hoitopolut parantavat hoidon laatua ja hoitomyöntyvyyttä. Varhainen puuttuminen auttaa ehkäisemään vakavampia terveysongelmia. Tavoitteena on, että ihminen saa tarvitsemansa avun ilman tarpeetonta jonottamista tai pompottelua palvelusta toiseen.',
      'Julkisen terveydenhuollon voimavaroja on hyödynnettävä nykyistä tehokkaammin. Julkisen sekä yksityisen sektorin yhteistyötä vahvistettava. Palvelujen järjestämisessä on uskallettava uudistaa toimintatapoja ja ottaa käyttöön ratkaisuja, jotka parantavat hoitoon pääsyä ja hillitsevät kustannuksia.',
      'Olen digitalisaation ja tekoälyn vahva kannattaja. Niiden avulla voidaan vähentää terveydenhuollon hallinnollista työtä, nopeuttaa tiedonkulkua ja tukea ammattilaisten päätöksentekoa. Tekoäly voi auttaa esimerkiksi kirjaamisessa, tiedon kokoamisessa ja hoidon tarpeen arvioinnissa. Näin ammattilaisille jää enemmän aikaa potilaiden kohtaamiseen. Teknologia ei korvaa lääkäriä tai hoitajan ammattitaitoa, vaan antaa heille paremmat työkalut.',
      'Uudistusten on hyödytettävä kaikenikäisiä. Digipalvelujen tulee olla helppokäyttöisiä ja turvallisia. Rinnalla on säilytettävä vaihtoehtoisia asiointitapoja niitä tarvitseville.',
    ],
  },
  {
    id: 'tyo',
    title:
      'Työn pitää kannattaa\u00A0– kasvua, ostovoimaa ja kestävää taloutta',
    goal: 'enemmän työtä ja kasvua, paremmat kannustimet sekä kestävä julkinen talous, joka turvaa palvelut myös tulevaisuudessa.',
    paragraphs: [
      'Suomen hyvinvointi rakentuu työstä, yrittämisestä, osaamisesta ja kasvusta. Ilman menestyviä yrityksiä ja korkeaa työllisyyttä emme pysty rahoittamaan laadukkaita julkisia palveluja tai turvaamaan hyvinvointivaltion tulevaisuutta. Tarvitsemme politiikkaa, joka kannustaa työhön, investointeihin ja uusien työpaikkojen syntymiseen.',
      'Työn verotusta on kevennettävä talouden liikkumavaran mukaan, jotta työn tekeminen näkyy paremmin palkkapäivänä. Työelämän joustavuutta tulee vahvistaa, jotta yritykset pystyvät kasvamaan, uudistumaan ja työllistämään erilaisissa suhdanteissa. Yrittämisen pitää olla houkutteleva vaihtoehto, ja onnistumisesta on voitava palkita.',
      'Digitalisaatio ja tekoäly ovat keskeisiä tuottavuuden ja talouskasvun mahdollistajia. Niiden avulla voidaan automatisoida rutiineja, tehostaa julkisia palveluja ja vapauttaa työntekijöiden aikaa tehtäviin, joissa ihmisen osaaminen ja vuorovaikutus ovat ratkaisevia. Suomen on oltava maa, jossa uusia teknologioita uskalletaan kokeilla, ottaa käyttöön ja hyödyntää vastuullisesti.',
      'Kasvun rinnalla tarvitaan vastuullista taloudenpitoa. Julkisia varoja on käytettävä vaikuttavasti, ja velkaantuminen on saatava hallintaan. Kestävä talous turvaa palvelut ja antaa mahdollisuuden huolehtia myös niistä, joiden toimeentulo on tiukkaa. Tämä koskee niin työikäisiä, lapsiperheitä kuin eläkeläisiäkin.',
    ],
  },
  {
    id: 'koulutus',
    title: 'Koulutus kantaa\u00A0– osaamista koko elämän ajaksi',
    goal: 'laadukas koulutus nuorille, joustavat opiskelumahdollisuudet aikuisille ja Suomi, joka osaa hyödyntää digitalisaation ja tekoälyn mahdollisuudet.',
    paragraphs: [
      'Suomen kilpailukyky ja ihmisten mahdollisuudet rakentuvat osaamiselle. Jokaiselle nuorelle on turvattava vahva perusta peruskoulussa ja mahdollisuus jatkaa toiselle asteelle. Ammatillisen koulutuksen ja korkeakoulujen on annettava valmiudet työelämään, jatko-opintoihin ja jatkuvaan uudistumiseen. Koulutuksen laadusta on pidettävä kiinni, sillä osaaminen on Suomen tärkeimpiä voimavaroja.',
      'Työelämä muuttuu nopeasti, ja digitalisaatio sekä tekoäly muuttavat monia ammatteja. Siksi koulutuksen on tarjottava valmiuksia uuden teknologian ymmärtämiseen ja hyödyntämiseen. Tavoitteena ei ole vain kouluttaa ihmisiä tämän päivän työpaikkoihin, vaan antaa heille kyky oppia uutta myös tulevaisuudessa.',
      'Aikuisten mahdollisuuksia täydentää osaamistaan ja vaihtaa alaa on vahvistettava. Tarvitsemme joustavia opintopolkuja, työn ohessa suoritettavia koulutuksia ja ratkaisuja, jotka helpottavat opiskelun ja muun elämän yhteensovittamista. Myös opintosetelin kaltaisia malleja kannattaa selvittää, jotta uuden osaamisen hankkiminen olisi helpompaa eri elämäntilanteissa.',
      'Tekoäly voi tukea oppimista yksilöllisesti, auttaa opettajia ja tarjota uusia tapoja harjoitella taitoja. Samalla on huolehdittava perustaitojen, kriittisen ajattelun ja medialukutaidon vahvistamisesta. Teknologian hyödyntämisen on parannettava oppimistuloksia, ei korvattava laadukasta opetusta tai opettajien asiantuntemusta.',
      'Osaamisen kehittäminen kuuluu kaikille, myös työuran loppuvaiheessa ja eläkkeellä. Uusien taitojen oppiminen auttaa pysymään mukana yhteiskunnan muutoksessa ja tarjoaa mahdollisuuksia osallistua aktiivisesti omaan yhteisöön.',
    ],
  },
]
