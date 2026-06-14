import type { CampsiteConfig } from "../types";

const IMG = "/campsites/campingbadschwanberg";

const campingbadschwanberg: CampsiteConfig = {
  name: "Camping Bad Schwanberg",
  shortName: "Schwanberg",
  slug: "campingbadschwanberg",
  ort: "Bad Schwanberg",
  region: "Steiermark",
  brandKind: "Camping",
  regionLong: "Schilcherland · Weststeiermark · Österreich",

  heroVariant: "center",

  claim: "Dein Campingplatz mitten im Schilcherland",
  claimEmphasis: "im Schilcherland",
  emailDetail: "euer Stellplatz gleich neben dem Freibad",
  intro:
    "Ein kleiner, moderner Platz am Ortsrand von Bad Schwanberg: 24 Stellplätze mit Strom und WLAN, das Freibad gleich nebenan und die Schilcherweinstraße vor der Tür. Anreisen kannst du rund um die Uhr.",

  statement: {
    text: "Buchen, Code aufs Handy, Schranke öffnet sich — bei dir startet der Urlaub ohne Rezeptionswarteschlange.",
    emphasis: "ohne Rezeptionswarteschlange",
  },

  pillars: [
    {
      title: "24 Stellplätze im Grünen",
      text: "Ebene Plätze mit Strom, Wasser und WLAN am ruhigen Ortsrand — du suchst dir deinen Platz selbst aus.",
      image: { src: `${IMG}/award-8dbde6ca78.png`, alt: "Luftaufnahme des Campingplatzes Bad Schwanberg mit Stellplätzen" },
    },
    {
      title: "Modernes Sanitärgebäude",
      text: "Ein neues, zentrales Sanitärgebäude mit kurzen Wegen — Duschen, WC und Waschbecken sind rund um die Uhr zugänglich.",
      image: { src: `${IMG}/award-2a142fc23b.png`, alt: "Modernes Sanitärgebäude am Campingplatz Bad Schwanberg" },
    },
    {
      title: "Freibad gleich nebenan",
      text: "Das Freibad mit Badesee, Rutsche und Liegewiese liegt direkt neben dem Platz — im Sommer ein paar Schritte.",
      image: { src: `${IMG}/amenity-65b03f9e44.webp`, alt: "Freibad Bad Schwanberg mit Badesee und Wasserrutsche direkt neben dem Campingplatz" },
    },
  ],

  usps: [
    "24 Stellplätze mit Strom",
    "WLAN am Platz",
    "Freibad direkt nebenan",
    "Check-in rund um die Uhr",
    "Kneipp-Park am Platz",
  ],

  trust: {
    heading: "Klein, modern, mittendrin",
    headingEmphasis: "mittendrin",
    intro:
      "Camping Bad Schwanberg ist ein überschaubarer, neu gebauter Platz in der Weststeiermark — 24 Stellplätze, digitaler Check-in rund um die Uhr und das Freibad direkt nebenan. Drumherum: Schilcher, Buschenschanken und Wanderwege.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-9816d5a448.webp`, alt: "Genussradeln bei Sonnenuntergang im Schilcherland bei Bad Schwanberg" },
  },

  camping: {
    heading: "So campst du in Bad Schwanberg",
    intro: "Ankommen, wann du willst, und alles Wichtige nah beieinander — vom Stromanschluss bis zum Sanitärgebäude.",
    features: [
      {
        title: "Entsorgung & Service inklusive",
        text: "Moderne Entsorgungsstation für Grauwasser und Kassetten direkt am Platz — alles für einen vollständigen Campingaufenthalt.",
        image: { src: `${IMG}/award-9321fc4872.png`, alt: "Entsorgungsstation und Servicebereich am Campingplatz Bad Schwanberg" },
      },
      {
        title: "Sanitär rund um die Uhr",
        text: "Duschen, WC und Waschbecken im modernen Sanitärgebäude sind 24/7 zugänglich — mit kurzen Wegen von jedem Stellplatz.",
        image: { src: `${IMG}/amenity-653788df3f.webp`, alt: "Modernes Waschraum mit Waschbecken im Sanitärgebäude am Campingplatz Bad Schwanberg" },
      },
      {
        title: "Freie Platzwahl",
        text: "24 nummerierte Stellplätze mit Strom, Wasser und WLAN — beim Online-Buchen suchst du dir deinen Platz selbst aus.",
        image: { src: `${IMG}/award-f0a913ccb5.png`, alt: "Lageplan des Campingplatzes Bad Schwanberg mit 24 Stellplätzen" },
      },
    ],
  },

  galerie: {
    heading: "Eindrücke aus Bad Schwanberg",
    headingEmphasis: "Bad Schwanberg",
    intro: "Ein paar Eindrücke vom Platz und seiner Umgebung im Schilcherland.",
    tag: "Weststeiermark",
    images: [
      { src: `${IMG}/gallery-401fdbd176.webp`, alt: "Luftaufnahme des Sanitärgebäudes am Campingplatz Bad Schwanberg" },
      { src: `${IMG}/amenity-5903241f46.webp`, alt: "Luftaufnahme von Freibad und Sportplatz neben dem Campingplatz Bad Schwanberg" },
      { src: `${IMG}/amenity-a403fdd392.webp`, alt: "Kirche und Ortskern von Bad Schwanberg im Schilcherland" },
      { src: `${IMG}/amenity-895f09dc9d.webp`, alt: "Hauptplatz im Ortskern von Bad Schwanberg" },
      { src: `${IMG}/amenity-002a643eee.webp`, alt: "Barrierefreies WC und Dusche im Sanitärgebäude am Campingplatz Bad Schwanberg" },
      { src: `${IMG}/amenity-af6876d13f.webp`, alt: "Moderne Dusche im Sanitärgebäude am Campingplatz Bad Schwanberg" },
    ],
  },

  anreise: {
    heading: "Der Weg in die Weststeiermark",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A2 Süd Autobahn bist du in rund 20 Minuten am Platz — die letzten Kilometer sind beschildert. Adresse fürs Navi: Forst 20, 8541 Bad Schwanberg.",
      },
      {
        title: "Mit der Bahn",
        text: "Der Bahnhof Deutschlandsberg liegt rund 10 km entfernt; von dort weiter mit Bus oder Taxi nach Bad Schwanberg.",
      },
      {
        title: "Anreise rund um die Uhr",
        text: "Dank digitalem Check-in kommst du an, wann du willst — dein Zugangscode öffnet die Schranke 24 Stunden am Tag.",
      },
    ],
  },

  booking: {
    heading: "Jetzt deinen Platz sichern",
    headingEmphasis: "deinen Platz",
    intro: "Sag uns Zeitraum und Personenzahl — wir bestätigen dir deinen Stellplatz in Bad Schwanberg persönlich.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Preise angegeben (bitte bestätigen). Stellplatz für 2 Personen inkl. Strom, zzgl. evtl. Ortstaxe.",
    highlight: {
      title: "Check-in rund um die Uhr",
      text: "Online buchen, Zugangscode per E-Mail, Schranke öffnet automatisch — komm an, wann du willst.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 32, perExtraGuest: 7 },
      { id: "zelt", label: "Zeltplatz", perNight: 26, perExtraGuest: 7 },
    ],
  },

  kontakt: {
    coords: { lat: 46.762541, lng: 15.204776 },
    tel: "+43 664 8392811",
    telHref: "tel:+436648392811",
    mail: "office@campingbadschwanberg.at",
    adresse: "Forst 20 · 8541 Bad Schwanberg · Weststeiermark",
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitär", href: "#camping" },
      ],
    },
    { label: "Lage & Anreise", href: "#anreise" },
    {
      label: "Preise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default campingbadschwanberg;
