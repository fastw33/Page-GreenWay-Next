export type LandingLocale = "es" | "en";
export type LandingMaterial = "tungsten" | "tungsten-carbide";

export type SeoLandingPageCopy = {
  accepted: string[];
  acceptedIntro: string;
  acceptedTitle: string;
  ctaBody: string;
  ctaTitle: string;
  detailBody: string;
  detailEyebrow: string;
  detailPoints: Array<{ body: string; title: string }>;
  detailTitle: string;
  evidence: string[];
  evidenceTitle: string;
  faqs: Array<{ answer: string; question: string }>;
  heroBody: string;
  heroEyebrow: string;
  heroImage: string;
  heroImageAlt: string;
  heroImageLabel: string;
  heroTitle: string;
  proofBody: string;
  proofEyebrow: string;
  proofTitle: string;
};

export type SeoLandingPage = {
  areaServed: string[];
  copy: Record<LandingLocale, SeoLandingPageCopy>;
  enDescription: string;
  enSlug: string;
  esDescription: string;
  esSlug: string;
  key: string;
  keywords: Record<LandingLocale, string[]>;
  material: LandingMaterial;
  priority: number;
  title: Record<LandingLocale, string>;
};

type Market = {
  areaServed: string[];
  enContext: string;
  enIndustries: string;
  enName: string;
  enSlug: string;
  esContext: string;
  esIndustries: string;
  esName: string;
  esSlug: string;
  image: string;
  imageAlt: Record<LandingLocale, string>;
  priority: number;
};

const markets: Market[] = [
  {
    areaServed: ["Peru"],
    enContext: "remote technical review for mining, maintenance, machining, and industrial yards",
    enIndustries: "mining, maintenance, machining, drilling, and heavy industry",
    enName: "Peru",
    enSlug: "peru",
    esContext: "revision tecnica remota para mineria, mantenimiento, mecanizado y patios industriales",
    esIndustries: "mineria, mantenimiento, mecanizado, perforacion e industria pesada",
    esName: "Peru",
    esSlug: "peru",
    image: "/countries/chile/santiago/chile-drill-bits-storage-09.webp",
    imageAlt: {
      en: "Industrial drill bits and wear materials prepared for tungsten review",
      es: "Brocas industriales y materiales de desgaste preparados para revision de tungsteno",
    },
    priority: 0.9,
  },
  {
    areaServed: ["Chile"],
    enContext: "technical evaluation for mining wear parts, drilling tools, workshops, and industrial suppliers",
    enIndustries: "mining, drilling, industrial maintenance, machine shops, and metal yards",
    enName: "Chile",
    enSlug: "chile",
    esContext: "evaluacion tecnica para piezas de desgaste minero, herramientas de perforacion, talleres y proveedores industriales",
    esIndustries: "mineria, perforacion, mantenimiento industrial, talleres mecanicos y patios de metales",
    esName: "Chile",
    esSlug: "chile",
    image: "/countries/chile/santiago/chile-metales-santiago-01.webp",
    imageAlt: {
      en: "Metals operation in Santiago, Chile",
      es: "Operacion de metales en Santiago, Chile",
    },
    priority: 0.92,
  },
  {
    areaServed: ["Ecuador"],
    enContext: "quote coordination for workshops, mining suppliers, oilfield service lots, and industrial generators",
    enIndustries: "mining services, oilfield suppliers, workshops, and industrial maintenance",
    enName: "Ecuador",
    enSlug: "ecuador",
    esContext: "coordinacion de cotizacion para talleres, proveedores mineros, servicios petroleros y generadores industriales",
    esIndustries: "servicios mineros, proveedores petroleros, talleres y mantenimiento industrial",
    esName: "Ecuador",
    esSlug: "ecuador",
    image: "/countries/estados-unidos/houston/houston-metal-turnings-tag-01.webp",
    imageAlt: {
      en: "Tagged industrial metal turnings ready for evaluation",
      es: "Virutas metalicas industriales etiquetadas para evaluacion",
    },
    priority: 0.88,
  },
  {
    areaServed: ["Bolivia"],
    enContext: "remote buying review for mining, drilling, maintenance, and high-wear industrial lots",
    enIndustries: "mining, drilling, maintenance, and industrial supply",
    enName: "Bolivia",
    enSlug: "bolivia",
    esContext: "revision remota de compra para mineria, perforacion, mantenimiento y lotes industriales de alto desgaste",
    esIndustries: "mineria, perforacion, mantenimiento y suministro industrial",
    esName: "Bolivia",
    esSlug: "bolivia",
    image: "/countries/chile/santiago/chile-recycling-yard-06.webp",
    imageAlt: {
      en: "Industrial recovery yard with recoverable metal materials",
      es: "Patio de recuperacion industrial con materiales metalicos recuperables",
    },
    priority: 0.86,
  },
  {
    areaServed: ["Argentina"],
    enContext: "industrial lot review for machining, tooling, maintenance, energy, and specialty metal generators",
    enIndustries: "machining, tooling, energy, maintenance, and industrial manufacturing",
    enName: "Argentina",
    enSlug: "argentina",
    esContext: "revision de lotes industriales para mecanizado, herramientas, mantenimiento, energia y generadores de metales especiales",
    esIndustries: "mecanizado, herramientas, energia, mantenimiento y manufactura industrial",
    esName: "Argentina",
    esSlug: "argentina",
    image: "/countries/espana/barcelona/spain-barcelona-parts-09.webp",
    imageAlt: {
      en: "Industrial parts and recoverable metal materials",
      es: "Piezas industriales y materiales metalicos recuperables",
    },
    priority: 0.88,
  },
  {
    areaServed: ["Panama"],
    enContext: "logistics-oriented review for industrial lots moving through Panama, ports, workshops, and regional trade",
    enIndustries: "logistics, ports, maintenance, workshops, and regional industrial trade",
    enName: "Panama",
    enSlug: "panama",
    esContext: "revision con enfoque logistico para lotes industriales que pasan por Panama, puertos, talleres y comercio regional",
    esIndustries: "logistica, puertos, mantenimiento, talleres y comercio industrial regional",
    esName: "Panama",
    esSlug: "panama",
    image: "/countries/estados-unidos/miami/miami-warehouse-logistics-01.webp",
    imageAlt: {
      en: "Warehouse logistics and truck loading for industrial materials",
      es: "Logistica de bodega y cargue de camion para materiales industriales",
    },
    priority: 0.9,
  },
  {
    areaServed: ["Uruguay"],
    enContext: "quote review for workshops, industrial plants, tooling, and metal-bearing maintenance materials",
    enIndustries: "workshops, industrial plants, maintenance, tooling, and metal yards",
    enName: "Uruguay",
    enSlug: "uruguay",
    esContext: "revision de cotizacion para talleres, plantas industriales, herramientas y materiales de mantenimiento con metal recuperable",
    esIndustries: "talleres, plantas industriales, mantenimiento, herramientas y patios de metales",
    esName: "Uruguay",
    esSlug: "uruguay",
    image: "/countries/italia/operacion/italy-industrial-equipment-05.webp",
    imageAlt: {
      en: "Industrial equipment and machined components for metal recovery",
      es: "Equipo industrial y componentes mecanizados para recuperacion de metales",
    },
    priority: 0.84,
  },
  {
    areaServed: ["Paraguay"],
    enContext: "remote evaluation for maintenance lots, industrial suppliers, workshops, and mixed metal materials",
    enIndustries: "maintenance, industrial suppliers, workshops, tooling, and mixed metal lots",
    enName: "Paraguay",
    enSlug: "paraguay",
    esContext: "evaluacion remota para lotes de mantenimiento, proveedores industriales, talleres y materiales metalicos mezclados",
    esIndustries: "mantenimiento, proveedores industriales, talleres, herramientas y lotes metalicos mezclados",
    esName: "Paraguay",
    esSlug: "paraguay",
    image: "/countries/estados-unidos/houston/houston-metal-billets-bin-06.webp",
    imageAlt: {
      en: "Industrial metal lot prepared for technical evaluation",
      es: "Lote metalico industrial preparado para evaluacion tecnica",
    },
    priority: 0.84,
  },
  {
    areaServed: ["Venezuela"],
    enContext: "buying review for oilfield, mining, maintenance, machining, and high-wear industrial materials",
    enIndustries: "oilfield services, mining, maintenance, machining, and industrial recovery",
    enName: "Venezuela",
    enSlug: "venezuela",
    esContext: "revision de compra para materiales petroleros, mineros, de mantenimiento, mecanizado y alto desgaste industrial",
    esIndustries: "servicios petroleros, mineria, mantenimiento, mecanizado y recuperacion industrial",
    esName: "Venezuela",
    esSlug: "venezuela",
    image: "/countries/estados-unidos/houston/houston-scrap-processing-area-09.webp",
    imageAlt: {
      en: "Industrial scrap processing area for recoverable metal lots",
      es: "Area de procesamiento industrial para lotes metalicos recuperables",
    },
    priority: 0.86,
  },
  {
    areaServed: ["United States"],
    enContext: "direct final-buyer review for industrial generators, machine shops, yards, and carbide recovery lots",
    enIndustries: "aerospace, machining, oil and gas, mining supply, maintenance, and recycling yards",
    enName: "United States",
    enSlug: "united-states",
    esContext: "revision de compra final para generadores industriales, talleres, patios y lotes de recuperacion de carburo",
    esIndustries: "aeroespacial, mecanizado, petroleo y gas, suministro minero, mantenimiento y patios de reciclaje",
    esName: "Estados Unidos",
    esSlug: "estados-unidos",
    image: "/countries/estados-unidos/houston/houston-warehouse-storage-03.webp",
    imageAlt: {
      en: "Industrial warehouse and recovered metal materials in the United States",
      es: "Bodega industrial y materiales metalicos recuperados en Estados Unidos",
    },
    priority: 0.98,
  },
  {
    areaServed: ["Miami", "Florida", "United States"],
    enContext: "Miami warehouse coordination for receiving, staging, quoting, and international movement",
    enIndustries: "warehouses, logistics, machine shops, exporters, maintenance, and industrial yards",
    enName: "Miami",
    enSlug: "miami",
    esContext: "coordinacion desde bodega en Miami para recepcion, alistamiento, cotizacion y movimiento internacional",
    esIndustries: "bodegas, logistica, talleres, exportadores, mantenimiento y patios industriales",
    esName: "Miami",
    esSlug: "miami",
    image: "/countries/estados-unidos/miami/miami-warehouse-logistics-01.webp",
    imageAlt: {
      en: "Miami warehouse logistics and truck loading",
      es: "Bodega logistica de Miami y cargue de camion",
    },
    priority: 0.99,
  },
  {
    areaServed: ["Florida", "United States"],
    enContext: "Florida and South Florida review for shops, warehouses, exporters, and industrial lots near Miami",
    enIndustries: "logistics, ports, aerospace suppliers, machine shops, maintenance, and recycling yards",
    enName: "Florida",
    enSlug: "florida",
    esContext: "revision para Florida y Sur de Florida: talleres, bodegas, exportadores y lotes industriales cerca de Miami",
    esIndustries: "logistica, puertos, proveedores aeroespaciales, talleres, mantenimiento y patios de reciclaje",
    esName: "Florida",
    esSlug: "florida",
    image: "/countries/estados-unidos/miami/miami-warehouse-logistics-02.webp",
    imageAlt: {
      en: "Florida logistics yard with industrial cargo movement",
      es: "Patio logistico en Florida con movimiento de carga industrial",
    },
    priority: 0.98,
  },
  {
    areaServed: ["California", "United States"],
    enContext: "California review for aerospace suppliers, machining, technology manufacturing, maintenance, and specialty metal lots",
    enIndustries: "aerospace supply, machining, technology manufacturing, maintenance, tooling, and recycling yards",
    enName: "California",
    enSlug: "california",
    esContext: "revision en California para proveedores aeroespaciales, mecanizado, manufactura tecnologica, mantenimiento y lotes de metales especiales",
    esIndustries: "suministro aeroespacial, mecanizado, manufactura tecnologica, mantenimiento, herramientas y patios de reciclaje",
    esName: "California",
    esSlug: "california",
    image: "/countries/estados-unidos/silicon-valley/silicon-valley-microsoft-campus-10.webp",
    imageAlt: {
      en: "California technology and industrial network visit connected to specialty metal recovery",
      es: "Visita a red tecnologica e industrial en California conectada con recuperacion de metales especiales",
    },
    priority: 0.96,
  },
  {
    areaServed: ["Georgia", "United States"],
    enContext: "Southeast US review for machine shops, manufacturing, maintenance, and metal recovery lots",
    enIndustries: "manufacturing, machining, maintenance, logistics, and metal recycling yards",
    enName: "Georgia",
    enSlug: "georgia",
    esContext: "revision en el sureste de Estados Unidos para talleres, manufactura, mantenimiento y lotes de recuperacion metalica",
    esIndustries: "manufactura, mecanizado, mantenimiento, logistica y patios de reciclaje metalico",
    esName: "Georgia",
    esSlug: "georgia",
    image: "/countries/estados-unidos/houston/houston-metal-discs-12.webp",
    imageAlt: {
      en: "Industrial metal discs and recoverable alloy material",
      es: "Discos metalicos industriales y material de aleacion recuperable",
    },
    priority: 0.93,
  },
  {
    areaServed: ["Alabama", "United States"],
    enContext: "Southeast industrial review for aerospace supply, machining, steel-adjacent lots, and carbide materials",
    enIndustries: "aerospace supply, machining, manufacturing, maintenance, and industrial recovery",
    enName: "Alabama",
    enSlug: "alabama",
    esContext: "revision industrial en el sureste para suministro aeroespacial, mecanizado, lotes cercanos a acero y materiales de carburo",
    esIndustries: "suministro aeroespacial, mecanizado, manufactura, mantenimiento y recuperacion industrial",
    esName: "Alabama",
    esSlug: "alabama",
    image: "/countries/estados-unidos/madisonville/madisonville-recovered-metal-drums-05.webp",
    imageAlt: {
      en: "Recovered industrial metal drums prepared for review",
      es: "Tambores de metal industrial recuperado preparados para revision",
    },
    priority: 0.92,
  },
  {
    areaServed: ["South Carolina", "United States"],
    enContext: "Carolina industrial review for manufacturing, machining, maintenance, and specialty metal lots",
    enIndustries: "manufacturing, machining, automotive supply, maintenance, and industrial yards",
    enName: "South Carolina",
    enSlug: "south-carolina",
    esContext: "revision industrial en Carolina del Sur para manufactura, mecanizado, mantenimiento y lotes de metales especiales",
    esIndustries: "manufactura, mecanizado, suministro automotriz, mantenimiento y patios industriales",
    esName: "Carolina Del Sur",
    esSlug: "carolina-del-sur",
    image: "/countries/estados-unidos/houston/houston-metal-turnings-tag-01.webp",
    imageAlt: {
      en: "Tagged turnings and industrial metal lot for recovery",
      es: "Virutas etiquetadas y lote metalico industrial para recuperacion",
    },
    priority: 0.91,
  },
  {
    areaServed: ["North Carolina", "United States"],
    enContext: "North Carolina review for machining, manufacturing, maintenance, and carbide tooling materials",
    enIndustries: "manufacturing, machining, tooling, maintenance, and specialty metal recovery",
    enName: "North Carolina",
    enSlug: "north-carolina",
    esContext: "revision en Carolina del Norte para mecanizado, manufactura, mantenimiento y herramientas de carburo",
    esIndustries: "manufactura, mecanizado, herramientas, mantenimiento y recuperacion de metales especiales",
    esName: "Carolina Del Norte",
    esSlug: "carolina-del-norte",
    image: "/countries/estados-unidos/houston/houston-warehouse-storage-03.webp",
    imageAlt: {
      en: "Warehouse storage for industrial metal materials",
      es: "Almacenamiento en bodega para materiales metalicos industriales",
    },
    priority: 0.91,
  },
  {
    areaServed: ["Tennessee", "United States"],
    enContext: "Tennessee review for machining, maintenance, manufacturing, and high-wear industrial materials",
    enIndustries: "machining, manufacturing, maintenance, tooling, and metal recovery",
    enName: "Tennessee",
    enSlug: "tennessee",
    esContext: "revision en Tennessee para mecanizado, mantenimiento, manufactura y materiales industriales de alto desgaste",
    esIndustries: "mecanizado, manufactura, mantenimiento, herramientas y recuperacion metalica",
    esName: "Tennessee",
    esSlug: "tennessee",
    image: "/countries/estados-unidos/madisonville/madisonville-tungco-yard-drums-01.webp",
    imageAlt: {
      en: "Industrial yard with drums of recoverable wear materials",
      es: "Patio industrial con tambores de materiales de desgaste recuperables",
    },
    priority: 0.9,
  },
  {
    areaServed: ["Texas", "United States"],
    enContext: "Texas buying review for oil and gas, machining, manufacturing, and high-temperature alloy lots",
    enIndustries: "oil and gas, machining, aerospace, maintenance, manufacturing, and metal yards",
    enName: "Texas",
    enSlug: "texas",
    esContext: "revision de compra en Texas para petroleo y gas, mecanizado, manufactura y lotes de aleaciones de alta temperatura",
    esIndustries: "petroleo y gas, mecanizado, aeroespacial, mantenimiento, manufactura y patios de metales",
    esName: "Texas",
    esSlug: "texas",
    image: "/countries/estados-unidos/houston/houston-scrap-processing-area-09.webp",
    imageAlt: {
      en: "Houston industrial scrap processing area",
      es: "Area industrial de procesamiento de scrap en Houston",
    },
    priority: 0.96,
  },
  {
    areaServed: ["Houston", "Texas", "United States"],
    enContext: "Houston industrial review for oilfield, machining, turnings, carbide, and specialty alloy lots",
    enIndustries: "oilfield services, machining, drilling supply, maintenance, and industrial yards",
    enName: "Houston",
    enSlug: "houston",
    esContext: "revision industrial en Houston para materiales petroleros, mecanizado, virutas, carburo y aleaciones especiales",
    esIndustries: "servicios petroleros, mecanizado, suministro de perforacion, mantenimiento y patios industriales",
    esName: "Houston",
    esSlug: "houston",
    image: "/countries/estados-unidos/houston/houston-metal-turnings-tag-01.webp",
    imageAlt: {
      en: "Tagged Houston industrial metal turnings for evaluation",
      es: "Virutas metalicas industriales de Houston etiquetadas para evaluacion",
    },
    priority: 0.97,
  },
  {
    areaServed: ["Louisiana", "United States"],
    enContext: "Gulf Coast review for oilfield service materials, industrial maintenance, machining, and metal recovery",
    enIndustries: "oilfield services, Gulf Coast maintenance, machining, ports, and industrial recovery",
    enName: "Louisiana",
    enSlug: "louisiana",
    esContext: "revision en la Costa del Golfo para materiales petroleros, mantenimiento industrial, mecanizado y recuperacion metalica",
    esIndustries: "servicios petroleros, mantenimiento en Costa del Golfo, mecanizado, puertos y recuperacion industrial",
    esName: "Louisiana",
    esSlug: "louisiana",
    image: "/countries/estados-unidos/houston/houston-metal-billets-bin-06.webp",
    imageAlt: {
      en: "Industrial metal billets and recoverable material in a bin",
      es: "Billets metalicos industriales y material recuperable en contenedor",
    },
    priority: 0.91,
  },
  {
    areaServed: ["Mississippi", "United States"],
    enContext: "Southeast and Gulf-adjacent review for maintenance, machining, industrial supply, and carbide lots",
    enIndustries: "maintenance, machining, industrial supply, Gulf logistics, and recovery yards",
    enName: "Mississippi",
    enSlug: "mississippi",
    esContext: "revision en el sureste y zona cercana al Golfo para mantenimiento, mecanizado, suministro industrial y lotes de carburo",
    esIndustries: "mantenimiento, mecanizado, suministro industrial, logistica del Golfo y patios de recuperacion",
    esName: "Mississippi",
    esSlug: "mississippi",
    image: "/countries/estados-unidos/madisonville/madisonville-recovered-metal-drums-05.webp",
    imageAlt: {
      en: "Recovered metal drums prepared for industrial lot review",
      es: "Tambores de metal recuperado preparados para revision de lote industrial",
    },
    priority: 0.89,
  },
];

const materialCopy = {
  tungsten: {
    enAccepted: [
      "Tungsten, wolfram, rods, plates, solids, and dense wear parts",
      "Tungsten-bearing turnings, industrial leftovers, and production scrap",
      "Mining, drilling, machining, or maintenance lots where tungsten may be present",
      "Mixed lots that need photos, weight, and technical review before a purchase decision",
    ],
    enBaseKeyword: "tungsten",
    enHeroKeyword: "tungsten and wolfram",
    enOffer: "tungsten, wolfram, and tungsten-bearing industrial material",
    enProcess: "tungsten lot",
    enSlugPrefix: "we-buy-tungsten",
    enTitlePrefix: "We Buy Tungsten In",
    esAccepted: [
      "Tungsteno, wolframio, barras, placas, solidos y piezas densas de desgaste",
      "Virutas, sobrantes industriales y scrap de produccion con contenido de tungsteno",
      "Lotes de mineria, perforacion, mecanizado o mantenimiento donde pueda existir tungsteno",
      "Lotes mezclados que requieren fotos, peso y revision tecnica antes de decidir compra",
    ],
    esBaseKeyword: "tungsteno",
    esHeroKeyword: "tungsteno y wolframio",
    esOffer: "tungsteno, wolframio y material industrial con contenido de tungsteno",
    esProcess: "lote de tungsteno",
    esSlugPrefix: "compramos-tungsteno",
    esTitlePrefix: "Compramos Tungsteno En",
  },
  "tungsten-carbide": {
    enAccepted: [
      "Tungsten carbide inserts, tips, dies, drill bits, and wear parts",
      "Carbide sludge, grinding residue, full grind clippings, and process material",
      "Mixed barrels, drums, bins, and shop lots with carbide-bearing components",
      "Industrial lots that need separation, condition review, and recoverable-value reading",
    ],
    enBaseKeyword: "tungsten carbide",
    enHeroKeyword: "tungsten carbide and wolfram carbide",
    enOffer: "tungsten carbide scrap, carbide inserts, drill bits, sludge, and wear materials",
    enProcess: "tungsten carbide lot",
    enSlugPrefix: "tungsten-carbide-recycling",
    enTitlePrefix: "Tungsten Carbide Recycling In",
    esAccepted: [
      "Insertos, puntas, matrices, brocas y piezas de desgaste de carburo de tungsteno",
      "Lodos de carburo, residuos de rectificado, full grind clippings y material de proceso",
      "Tambores, canecas, bins y lotes de taller con componentes que contienen carburo",
      "Lotes industriales que requieren separacion, revision de condicion y lectura de valor recuperable",
    ],
    esBaseKeyword: "carburo de tungsteno",
    esHeroKeyword: "carburo de tungsteno y carburo de wolframio",
    esOffer: "chatarra de carburo de tungsteno, insertos, brocas, lodos y materiales de desgaste",
    esProcess: "lote de carburo de tungsteno",
    esSlugPrefix: "compramos-carburo-de-tungsteno",
    esTitlePrefix: "Compramos Carburo De Tungsteno En",
  },
} satisfies Record<LandingMaterial, Record<string, string | string[]>>;

function buildCopy(material: LandingMaterial, market: Market): Record<LandingLocale, SeoLandingPageCopy> {
  const m = materialCopy[material];

  return {
    en: {
      accepted: m.enAccepted as string[],
      acceptedIntro: `Green Way reviews ${m.enOffer} from ${market.enName} with a final-buyer lens. The quote depends on form, weight, cleanliness, mixing, and recoverable value.`,
      acceptedTitle: `${m.enTitlePrefix} ${market.enName}: Materials We Review`,
      ctaBody: `Send photos, approximate weight, city, container type, and material origin. Green Way can review the ${m.enProcess} from ${market.enName} and indicate the best purchasing route.`,
      ctaTitle: `Quote ${m.enHeroKeyword} from ${market.enName}`,
      detailBody: `${market.enName} has search demand around ${m.enBaseKeyword} because ${market.enIndustries} can generate high-value recoverable metal. We structure the first review around evidence, not generic scrap language.`,
      detailEyebrow: "Country / Market Focus",
      detailPoints: [
        {
          body: `We evaluate photos, weight, origin, and presentation to decide if the lot fits direct purchase or needs more separation.`,
          title: "Technical Review",
        },
        {
          body: `For ${market.enName}, the context is ${market.enContext}. That changes how pickup, consolidation, or export coordination should be planned.`,
          title: "Operating Context",
        },
        {
          body: "When the lot is viable, Green Way aligns commercial terms, payment, receiving, and the recovery path.",
          title: "Final-Buyer Route",
        },
      ],
      detailTitle: `${m.enHeroKeyword} in ${market.enName} should be quoted by recoverable value.`,
      evidence: [
        "Clear photos of the complete lot and close-up material detail",
        "Estimated net weight, container type, and current location",
        `Industrial origin connected to ${market.enIndustries}`,
        "Oil, moisture, mixed material, or separation notes",
      ],
      evidenceTitle: `Information that speeds up a ${m.enBaseKeyword} quote in ${market.enName}`,
      faqs: [
        {
          answer: `Yes. Green Way reviews ${m.enOffer} from ${market.enName} when the material fits a direct buying or recovery route.`,
          question: `Does Green Way buy ${m.enBaseKeyword} in ${market.enName}?`,
        },
        {
          answer: "Photos, estimated weight, city, container type, condition, and material origin help Green Way make a faster technical decision.",
          question: "What should I send for a quote?",
        },
        {
          answer: "Yes. Mixed lots can be reviewed, but separation, condition, oil, moisture, and clear photos affect the purchase decision.",
          question: "Can mixed or dirty lots be evaluated?",
        },
      ],
      heroBody: `Green Way reviews and buys ${m.enOffer} from ${market.enName} through a technical, final-buyer process for industrial generators and recovery partners.`,
      heroEyebrow: `Final buyer for ${m.enHeroKeyword}`,
      heroImage: market.image,
      heroImageAlt: market.imageAlt.en,
      heroImageLabel: `${m.enBaseKeyword} / ${market.enName}`,
      heroTitle: `${m.enTitlePrefix} ${market.enName}.`,
      proofBody: `The goal is to make the lot easy to evaluate: photos, weight, origin, condition, and location create a faster route from first review to purchase decision.`,
      proofEyebrow: "Authority Signals",
      proofTitle: `${market.enName} needs a buyer that understands industrial recovery.`,
    },
    es: {
      accepted: m.esAccepted as string[],
      acceptedIntro: `Green Way revisa ${m.esOffer} desde ${market.esName} con enfoque de comprador final. La cotizacion depende de forma, peso, limpieza, mezcla y valor recuperable.`,
      acceptedTitle: `${m.esTitlePrefix} ${market.esName}: Materiales Que Revisamos`,
      ctaBody: `Envia fotos, peso aproximado, ciudad, tipo de contenedor y origen del material. Green Way puede revisar el ${m.esProcess} desde ${market.esName} e indicar la mejor ruta de compra.`,
      ctaTitle: `Cotiza ${m.esHeroKeyword} desde ${market.esName}`,
      detailBody: `${market.esName} tiene demanda de busqueda alrededor de ${m.esBaseKeyword} porque ${market.esIndustries} pueden generar metal recuperable de alto valor. La revision inicial se estructura con evidencia, no con precio generico de chatarra.`,
      detailEyebrow: "Enfoque Por Pais / Mercado",
      detailPoints: [
        {
          body: "Evaluamos fotos, peso, origen y presentacion para decidir si el lote encaja con compra directa o necesita mas separacion.",
          title: "Revision Tecnica",
        },
        {
          body: `Para ${market.esName}, el contexto es ${market.esContext}. Eso cambia como se planea recoleccion, consolidacion o coordinacion de salida.`,
          title: "Contexto Operativo",
        },
        {
          body: "Cuando el lote es viable, Green Way alinea condiciones comerciales, pago, recepcion y ruta de recuperacion.",
          title: "Ruta De Compra Final",
        },
      ],
      detailTitle: `${m.esHeroKeyword} en ${market.esName} debe cotizarse por valor recuperable.`,
      evidence: [
        "Fotos claras del lote completo y detalle cercano del material",
        "Peso neto estimado, tipo de contenedor y ubicacion actual",
        `Origen industrial conectado con ${market.esIndustries}`,
        "Notas de aceite, humedad, mezcla o separacion",
      ],
      evidenceTitle: `Informacion que acelera una cotizacion de ${m.esBaseKeyword} en ${market.esName}`,
      faqs: [
        {
          answer: `Si. Green Way revisa ${m.esOffer} desde ${market.esName} cuando el material encaja con una ruta de compra directa o recuperacion.`,
          question: `¿Green Way compra ${m.esBaseKeyword} en ${market.esName}?`,
        },
        {
          answer: "Fotos, peso estimado, ciudad, tipo de contenedor, condicion y origen del material ayudan a tomar una decision tecnica mas rapida.",
          question: "¿Que debo enviar para cotizar?",
        },
        {
          answer: "Si. Los lotes mezclados pueden revisarse, pero separacion, condicion, aceite, humedad y fotos claras afectan la decision de compra.",
          question: "¿Pueden evaluar lotes mezclados o sucios?",
        },
      ],
      heroBody: `Green Way revisa y compra ${m.esOffer} desde ${market.esName} mediante un proceso tecnico de comprador final para generadores industriales y aliados de recuperacion.`,
      heroEyebrow: `Comprador final de ${m.esHeroKeyword}`,
      heroImage: market.image,
      heroImageAlt: market.imageAlt.es,
      heroImageLabel: `${m.esBaseKeyword} / ${market.esName}`,
      heroTitle: `${m.esTitlePrefix} ${market.esName}.`,
      proofBody: "El objetivo es hacer el lote facil de evaluar: fotos, peso, origen, condicion y ubicacion crean una ruta mas rapida desde la revision inicial hasta la decision de compra.",
      proofEyebrow: "Senales De Autoridad",
      proofTitle: `${market.esName} necesita un comprador que entienda recuperacion industrial.`,
    },
  };
}

function buildLanding(material: LandingMaterial, market: Market): SeoLandingPage {
  const m = materialCopy[material];
  const copy = buildCopy(material, market);

  return {
    areaServed: market.areaServed,
    copy,
    enDescription: `Green Way reviews and buys ${m.enOffer} in ${market.enName}: photos, weight, condition, logistics, and final-buyer recovery route.`,
    enSlug: `${m.enSlugPrefix}-${market.enSlug}`,
    esDescription: `Green Way revisa y compra ${m.esOffer} en ${market.esName}: fotos, peso, condicion, logistica y ruta de recuperacion como comprador final.`,
    esSlug: `${m.esSlugPrefix}-${market.esSlug}`,
    key: `${material}-${market.enSlug}`,
    keywords: {
      en: [
        `${m.enBaseKeyword} ${market.enName}`,
        `buy ${m.enBaseKeyword} ${market.enName}`,
        `${m.enBaseKeyword} buyers ${market.enName}`,
        `${m.enBaseKeyword} recycling ${market.enName}`,
      ],
      es: [
        `${m.esBaseKeyword} ${market.esName}`,
        `compramos ${m.esBaseKeyword} ${market.esName}`,
        `compra de ${m.esBaseKeyword} ${market.esName}`,
        `recuperacion de ${m.esBaseKeyword} ${market.esName}`,
      ],
    },
    material,
    priority: market.priority,
    title: {
      en: copy.en.heroTitle.replace(/\.$/, ""),
      es: copy.es.heroTitle.replace(/\.$/, ""),
    },
  };
}

export const seoLandingPages = markets.flatMap((market) => [
  buildLanding("tungsten", market),
  buildLanding("tungsten-carbide", market),
]);

export function getSeoLandingPageBySlug(slug: string) {
  return seoLandingPages.find(
    (page) => page.esSlug === slug || page.enSlug === slug,
  );
}
