import { ActionLink } from '@/components/global/ActionLink'
import { BrandIcon } from '@/components/global/BrandIcons'
import { Link } from '@/i18n/navigation'
import { getCountryMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import Image from 'next/image'
import { getLocale, getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'

type CountryStory = {
  body: string
  bodyTitle: string
  cta: string
  excerpt: string
  galleryImages?: GalleryImage[]
  galleryTitle: string
  galleryVideo?: GalleryVideo
  highlights: string[]
  highlightsTitle: string
  image?: string
  imageAlt?: string
  imageLabel: string
  label: string
  meta: string
  relatedEyebrow?: string
  relatedItems?: RelatedStory[]
  relatedTitle?: string
  slug: string
  title: string
}

type RelatedStory = {
  excerpt: string
  href: string
  image: string
  imageAlt: string
  imageLabel: string
  label: string
  meta: string
  slug: string
  title: string
}

type GalleryImage = {
  alt: string
  fit?: 'cover' | 'square'
  src: string
  variant?: 'feature' | 'wide' | 'tall'
}

type GalleryVideo = {
  label: string
  poster: string
  src: string
  title: string
}

type CountryItemMessage = Partial<CountryStory>

type CountryPageMessages = {
  Pages?: {
    about?: {
      cta?: string
      countryItems?: CountryItemMessage[]
      storyBack?: string
      storyEyebrow?: string
    }
  }
}

const storySlugs = [
  'estados-unidos',
  'united-states',
  'colombia',
  'bogota',
  'medellin',
  'chile',
  'espana',
  'spain',
  'italia',
  'italy',
  'houston',
  'madisonville',
  'miami',
  'silicon-valley',
] as const

const slugAliases: Record<string, Record<string, string>> = {
  en: {
    espana: 'spain',
    'estados-unidos': 'united-states',
    italia: 'italy',
  },
  es: {
    spain: 'espana',
    'united-states': 'estados-unidos',
    italy: 'italia',
  },
}

const chileGalleryImagesEn: GalleryImage[] = [
  {
    alt: 'Scrap metal operation with mountain view in Santiago, Chile',
    src: '/countries/chile/santiago/chile-metales-santiago-01.webp',
    variant: 'wide',
  },
  {
    alt: 'Material handling equipment in a Chile metals yard',
    src: '/countries/chile/santiago/chile-operacion-santiago-02.jpg',
    variant: 'tall',
  },
  {
    alt: 'Metal containers prepared for industrial sorting',
    src: '/countries/chile/santiago/chile-metal-containers-03.webp',
  },
  {
    alt: 'Recovered carbide inserts inside a metal container',
    src: '/countries/chile/santiago/chile-carbide-inserts-04.webp',
  },
  {
    alt: 'Forklift movement in a Santiago recycling yard',
    src: '/countries/chile/santiago/chile-yard-forklift-05.webp',
    variant: 'wide',
  },
  {
    alt: 'Compressed aluminum and metal materials in Chile',
    src: '/countries/chile/santiago/chile-recycling-yard-06.webp',
  },
  {
    alt: 'Industrial metal equipment and recovered materials',
    src: '/countries/chile/santiago/chile-metal-equipment-yard-07.webp',
  },
  {
    alt: 'Recovered drilling parts in metal barrels',
    src: '/countries/chile/santiago/chile-drilling-parts-08.webp',
  },
  {
    alt: 'Drill bits stored for material recovery',
    src: '/countries/chile/santiago/chile-drill-bits-storage-09.webp',
  },
  {
    alt: 'Close detail of industrial drill bits',
    src: '/countries/chile/santiago/chile-drill-bits-close-10.webp',
  },
  {
    alt: 'Green Way team visit at a Chile operating yard',
    src: '/countries/chile/santiago/chile-team-yard-11.webp',
    variant: 'feature',
  },
  {
    alt: 'Iron storage area in Santiago, Chile',
    src: '/countries/chile/santiago/chile-iron-yard-12.webp',
    variant: 'wide',
  },
]

const chileGalleryImagesEs: GalleryImage[] = [
  {
    alt: 'Operación de metales con vista a montaña en Santiago, Chile',
    src: '/countries/chile/santiago/chile-metales-santiago-01.webp',
    variant: 'wide',
  },
  {
    alt: 'Equipo de manejo de material en patio de metales en Chile',
    src: '/countries/chile/santiago/chile-operacion-santiago-02.jpg',
    variant: 'tall',
  },
  {
    alt: 'Contenedores metálicos preparados para clasificación industrial',
    src: '/countries/chile/santiago/chile-metal-containers-03.webp',
  },
  {
    alt: 'Insertos recuperados dentro de un contenedor metálico',
    src: '/countries/chile/santiago/chile-carbide-inserts-04.webp',
  },
  {
    alt: 'Movimiento con montacargas en patio de reciclaje en Santiago',
    src: '/countries/chile/santiago/chile-yard-forklift-05.webp',
    variant: 'wide',
  },
  {
    alt: 'Aluminio comprimido y materiales metálicos en Chile',
    src: '/countries/chile/santiago/chile-recycling-yard-06.webp',
  },
  {
    alt: 'Equipo industrial metálico y materiales recuperados',
    src: '/countries/chile/santiago/chile-metal-equipment-yard-07.webp',
  },
  {
    alt: 'Piezas de perforación recuperadas en tambores metálicos',
    src: '/countries/chile/santiago/chile-drilling-parts-08.webp',
  },
  {
    alt: 'Brocas almacenadas para recuperación de material',
    src: '/countries/chile/santiago/chile-drill-bits-storage-09.webp',
  },
  {
    alt: 'Detalle cercano de brocas industriales',
    src: '/countries/chile/santiago/chile-drill-bits-close-10.webp',
  },
  {
    alt: 'Visita del equipo Green Way a patio operativo en Chile',
    src: '/countries/chile/santiago/chile-team-yard-11.webp',
    variant: 'feature',
  },
  {
    alt: 'Zona de almacenamiento de hierro en Santiago, Chile',
    src: '/countries/chile/santiago/chile-iron-yard-12.webp',
    variant: 'wide',
  },
]

const spainGalleryImagesEn: GalleryImage[] = [
  {
    alt: 'Industrial metals warehouse in Barcelona, Spain',
    src: '/countries/espana/barcelona/spain-barcelona-warehouse-01.webp',
    variant: 'wide',
  },
  {
    alt: 'Compressed metal material wall in Spain',
    src: '/countries/espana/barcelona/spain-barcelona-metal-wall-02.webp',
    variant: 'tall',
  },
  {
    alt: 'Large scrap metal pile in Barcelona',
    src: '/countries/espana/barcelona/spain-barcelona-scrap-yard-03.webp',
    variant: 'wide',
  },
  {
    alt: 'Outdoor metal recovery yard in Spain',
    src: '/countries/espana/barcelona/spain-barcelona-yard-04.webp',
  },
  {
    alt: 'Cut metal pieces ready for sorting',
    src: '/countries/espana/barcelona/spain-barcelona-cut-metal-05.webp',
  },
  {
    alt: 'Sorted industrial metal pieces in a recovery area',
    src: '/countries/espana/barcelona/spain-barcelona-sorted-metal-06.webp',
  },
  {
    alt: 'Stacked metal bales in Spain',
    src: '/countries/espana/barcelona/spain-barcelona-bales-07.webp',
    variant: 'tall',
  },
  {
    alt: 'Close detail of recovered scrap metal',
    src: '/countries/espana/barcelona/spain-barcelona-scrap-detail-08.webp',
  },
  {
    alt: 'Recovered industrial parts inside a container',
    src: '/countries/espana/barcelona/spain-barcelona-parts-09.webp',
    variant: 'wide',
  },
]

const spainGalleryImagesEs: GalleryImage[] = [
  {
    alt: 'Bodega industrial de metales en Barcelona, España',
    src: '/countries/espana/barcelona/spain-barcelona-warehouse-01.webp',
    variant: 'wide',
  },
  {
    alt: 'Muro de material metálico comprimido en España',
    src: '/countries/espana/barcelona/spain-barcelona-metal-wall-02.webp',
    variant: 'tall',
  },
  {
    alt: 'Gran pila de chatarra metálica en Barcelona',
    src: '/countries/espana/barcelona/spain-barcelona-scrap-yard-03.webp',
    variant: 'wide',
  },
  {
    alt: 'Patio exterior de recuperación de metales en España',
    src: '/countries/espana/barcelona/spain-barcelona-yard-04.webp',
  },
  {
    alt: 'Piezas metálicas cortadas listas para clasificación',
    src: '/countries/espana/barcelona/spain-barcelona-cut-metal-05.webp',
  },
  {
    alt: 'Piezas metálicas industriales clasificadas en zona de recuperación',
    src: '/countries/espana/barcelona/spain-barcelona-sorted-metal-06.webp',
  },
  {
    alt: 'Bloques de metal apilados en España',
    src: '/countries/espana/barcelona/spain-barcelona-bales-07.webp',
    variant: 'tall',
  },
  {
    alt: 'Detalle cercano de metal recuperado',
    src: '/countries/espana/barcelona/spain-barcelona-scrap-detail-08.webp',
  },
  {
    alt: 'Partes industriales recuperadas dentro de un contenedor',
    src: '/countries/espana/barcelona/spain-barcelona-parts-09.webp',
    variant: 'wide',
  },
]

const spainGalleryVideoEn: GalleryVideo = {
  label: 'Barcelona, Spain',
  poster: '/countries/espana/barcelona/spain-barcelona-warehouse-01.webp',
  src: '/countries/espana/barcelona/spain-barcelona-operation-video.mov',
  title: 'Operation Video',
}

const spainGalleryVideoEs: GalleryVideo = {
  label: 'Barcelona, España',
  poster: '/countries/espana/barcelona/spain-barcelona-warehouse-01.webp',
  src: '/countries/espana/barcelona/spain-barcelona-operation-video.mov',
  title: 'Video De Operación',
}

const italyGalleryImagesEn: GalleryImage[] = [
  {
    alt: 'Industrial equipment and machined components in Italy',
    src: '/countries/italia/operacion/italy-industrial-equipment-05.webp',
    variant: 'feature',
  },
  {
    alt: 'Machined rotor detail in an Italian industrial facility',
    src: '/countries/italia/operacion/italy-industrial-rotor-01.webp',
    variant: 'wide',
  },
  {
    alt: 'Close detail of industrial rotor components in Italy',
    src: '/countries/italia/operacion/italy-rotor-detail-03.webp',
    variant: 'wide',
  },
  {
    alt: 'Material recovery floor in Italy',
    src: '/countries/italia/operacion/italy-recycling-yard-02.webp',
  },
  {
    alt: 'Baled recovered materials inside an Italian operation',
    src: '/countries/italia/operacion/italy-baled-materials-04.webp',
    variant: 'wide',
  },
  {
    alt: 'Sorting line inside an Italian recovery facility',
    src: '/countries/italia/operacion/italy-sorting-line-06.webp',
    variant: 'wide',
  },
  {
    alt: 'Recycling operation and material handling in Italy',
    src: '/countries/italia/operacion/italy-recycling-operation-07.webp',
  },
  {
    alt: 'Overhead cranes in an Italian industrial facility',
    src: '/countries/italia/operacion/italy-overhead-cranes-08.webp',
    variant: 'wide',
  },
  {
    alt: 'Industrial team visit at a biogas facility in Italy',
    src: '/countries/italia/operacion/italy-biogas-team-09.webp',
    variant: 'wide',
  },
  {
    alt: 'International team visit in Milan, Italy',
    src: '/countries/italia/operacion/italy-milan-team-10.webp',
    variant: 'wide',
  },
  {
    alt: 'Team visit at an Italian industrial partner facility',
    src: '/countries/italia/operacion/italy-montello-team-11.webp',
    variant: 'wide',
  },
  {
    alt: 'Close detail of baled recovered material in Italy',
    src: '/countries/italia/operacion/italy-baled-plastic-detail-12.webp',
    variant: 'tall',
  },
]

const italyGalleryImagesEs: GalleryImage[] = [
  {
    alt: 'Equipo industrial y componentes mecanizados en Italia',
    src: '/countries/italia/operacion/italy-industrial-equipment-05.webp',
    variant: 'feature',
  },
  {
    alt: 'Detalle de rotor mecanizado en instalación industrial italiana',
    src: '/countries/italia/operacion/italy-industrial-rotor-01.webp',
    variant: 'wide',
  },
  {
    alt: 'Detalle cercano de componentes industriales en Italia',
    src: '/countries/italia/operacion/italy-rotor-detail-03.webp',
    variant: 'wide',
  },
  {
    alt: 'Piso operativo de recuperación de materiales en Italia',
    src: '/countries/italia/operacion/italy-recycling-yard-02.webp',
  },
  {
    alt: 'Materiales recuperados compactados dentro de operación italiana',
    src: '/countries/italia/operacion/italy-baled-materials-04.webp',
    variant: 'wide',
  },
  {
    alt: 'Línea de clasificación dentro de planta de recuperación en Italia',
    src: '/countries/italia/operacion/italy-sorting-line-06.webp',
    variant: 'wide',
  },
  {
    alt: 'Operación de reciclaje y manejo de material en Italia',
    src: '/countries/italia/operacion/italy-recycling-operation-07.webp',
  },
  {
    alt: 'Puentes grúa en instalación industrial italiana',
    src: '/countries/italia/operacion/italy-overhead-cranes-08.webp',
    variant: 'wide',
  },
  {
    alt: 'Visita de equipo industrial a instalación de biogás en Italia',
    src: '/countries/italia/operacion/italy-biogas-team-09.webp',
    variant: 'wide',
  },
  {
    alt: 'Visita de equipo internacional en Milán, Italia',
    src: '/countries/italia/operacion/italy-milan-team-10.webp',
    variant: 'wide',
  },
  {
    alt: 'Visita de equipo a instalación industrial aliada en Italia',
    src: '/countries/italia/operacion/italy-montello-team-11.webp',
    variant: 'wide',
  },
  {
    alt: 'Detalle cercano de material recuperado compactado en Italia',
    src: '/countries/italia/operacion/italy-baled-plastic-detail-12.webp',
    variant: 'tall',
  },
]

const siliconValleyGalleryImagesEn: GalleryImage[] = [
  {
    alt: 'Startup ecosystem presentation in Silicon Valley',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-unicorns-01.webp',
    variant: 'feature',
  },
  {
    alt: 'Corporate partner wall in Silicon Valley',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-partner-wall-02.webp',
    variant: 'tall',
  },
  {
    alt: 'Silicon Valley mural inside an innovation facility',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-mural-03.webp',
    variant: 'wide',
  },
  {
    alt: 'Microsoft visit in Silicon Valley',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-microsoft-portrait-04.webp',
    variant: 'tall',
  },
  {
    alt: 'Nokia building in Silicon Valley',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-nokia-building-05.webp',
  },
  {
    alt: 'Google office stairs in Silicon Valley',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-google-stairs-06.webp',
    variant: 'tall',
  },
  {
    alt: 'International corporate partners display',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-corporate-partners-07.webp',
    variant: 'wide',
  },
  {
    alt: 'Founder wall detail in Silicon Valley',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-founder-wall-08.webp',
  },
  {
    alt: 'Plug and Play building in Silicon Valley',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-plug-and-play-09.webp',
    variant: 'tall',
  },
  {
    alt: 'Microsoft campus visit in Silicon Valley',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-microsoft-campus-10.webp',
    variant: 'wide',
  },
]

const siliconValleyGalleryImagesEs: GalleryImage[] = [
  {
    alt: 'Presentacion del ecosistema de startups en Silicon Valley',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-unicorns-01.webp',
    variant: 'feature',
  },
  {
    alt: 'Muro de aliados corporativos en Silicon Valley',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-partner-wall-02.webp',
    variant: 'tall',
  },
  {
    alt: 'Mural de Silicon Valley dentro de un espacio de innovacion',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-mural-03.webp',
    variant: 'wide',
  },
  {
    alt: 'Visita a Microsoft en Silicon Valley',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-microsoft-portrait-04.webp',
    variant: 'tall',
  },
  {
    alt: 'Edificio de Nokia en Silicon Valley',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-nokia-building-05.webp',
  },
  {
    alt: 'Escaleras de oficina de Google en Silicon Valley',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-google-stairs-06.webp',
    variant: 'tall',
  },
  {
    alt: 'Muro de aliados corporativos internacionales',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-corporate-partners-07.webp',
    variant: 'wide',
  },
  {
    alt: 'Detalle de muro de fundadores en Silicon Valley',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-founder-wall-08.webp',
  },
  {
    alt: 'Edificio de Plug and Play en Silicon Valley',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-plug-and-play-09.webp',
    variant: 'tall',
  },
  {
    alt: 'Visita al campus de Microsoft en Silicon Valley',
    src: '/countries/estados-unidos/silicon-valley/silicon-valley-microsoft-campus-10.webp',
    variant: 'wide',
  },
]

const medellinGalleryImagesEn: GalleryImage[] = [
  {
    alt: 'GreenTech booth participation in Medellin, Colombia',
    src: '/countries/colombia/medellin/medellin-greentech-booth-07.webp',
    variant: 'feature',
  },
  {
    alt: 'Medellin city view from an institutional venue',
    src: '/countries/colombia/medellin/medellin-city-view-01.webp',
    variant: 'wide',
  },
  {
    alt: 'Business district view in Medellin, Colombia',
    src: '/countries/colombia/medellin/medellin-business-district-02.webp',
    variant: 'tall',
  },
  {
    alt: 'GreenTech sponsor wall with participating companies',
    src: '/countries/colombia/medellin/medellin-greentech-sponsors-03.webp',
  },
  {
    alt: 'GreenTech event badge in Medellin',
    src: '/countries/colombia/medellin/medellin-greentech-badge-04.webp',
    variant: 'tall',
  },
  {
    alt: 'Caribbean investment presentation at a GreenTech event',
    src: '/countries/colombia/medellin/medellin-caribbean-map-05.webp',
    variant: 'wide',
  },
  {
    alt: 'Conference room presentation in Medellin',
    src: '/countries/colombia/medellin/medellin-conference-room-06.webp',
    variant: 'wide',
  },
  {
    alt: 'Expo aisle and booth activation in Medellin',
    src: '/countries/colombia/medellin/medellin-expo-booth-08.webp',
    variant: 'wide',
  },
]

const medellinGalleryImagesEs: GalleryImage[] = [
  {
    alt: 'Participación en stand GreenTech en Medellín, Colombia',
    src: '/countries/colombia/medellin/medellin-greentech-booth-07.webp',
    variant: 'feature',
  },
  {
    alt: 'Vista de Medellín desde un espacio institucional',
    src: '/countries/colombia/medellin/medellin-city-view-01.webp',
    variant: 'wide',
  },
  {
    alt: 'Distrito empresarial en Medellín, Colombia',
    src: '/countries/colombia/medellin/medellin-business-district-02.webp',
    variant: 'tall',
  },
  {
    alt: 'Muro de expositores y aliados en GreenTech',
    src: '/countries/colombia/medellin/medellin-greentech-sponsors-03.webp',
  },
  {
    alt: 'Credencial de participación en GreenTech Medellín',
    src: '/countries/colombia/medellin/medellin-greentech-badge-04.webp',
    variant: 'tall',
  },
  {
    alt: 'Presentación sobre inversión sostenible del Caribe colombiano',
    src: '/countries/colombia/medellin/medellin-caribbean-map-05.webp',
    variant: 'wide',
  },
  {
    alt: 'Presentación institucional en Medellín',
    src: '/countries/colombia/medellin/medellin-conference-room-06.webp',
    variant: 'wide',
  },
  {
    alt: 'Stand y pasillo de exposición en Medellín',
    src: '/countries/colombia/medellin/medellin-expo-booth-08.webp',
    variant: 'wide',
  },
]

const bogotaMatrixGalleryImagesEn: GalleryImage[] = [
  {
    alt: 'Matrix drill bits and tungsten inserts received in Bogota',
    fit: 'square',
    src: '/countries/colombia/bogota/bogota-matrix-bits-inserts-01.webp',
    variant: 'feature',
  },
  {
    alt: 'Used matrix drill bits over recovered tungsten inserts in Bogota',
    fit: 'square',
    src: '/countries/colombia/bogota/bogota-matrix-bits-inserts-02.webp',
    variant: 'wide',
  },
  {
    alt: 'Close detail of matrix drill bits and tungsten insert lots in Bogota',
    fit: 'square',
    src: '/countries/colombia/bogota/bogota-matrix-bits-inserts-03.webp',
    variant: 'tall',
  },
  {
    alt: 'Industrial matrix drill bits and tungsten inserts sorted in Bogota',
    fit: 'square',
    src: '/countries/colombia/bogota/bogota-matrix-bits-inserts-04.webp',
  },
  {
    alt: 'Recovered drilling heads and tungsten inserts in a Bogota lot',
    fit: 'square',
    src: '/countries/colombia/bogota/bogota-matrix-bits-inserts-05.webp',
    variant: 'wide',
  },
]

const bogotaMatrixGalleryImagesEs: GalleryImage[] = [
  {
    alt: 'Brocas matriz e insertos de tungsteno recibidos en Bogotá',
    fit: 'square',
    src: '/countries/colombia/bogota/bogota-matrix-bits-inserts-01.webp',
    variant: 'feature',
  },
  {
    alt: 'Brocas matriz usadas sobre insertos de tungsteno recuperados en Bogotá',
    fit: 'square',
    src: '/countries/colombia/bogota/bogota-matrix-bits-inserts-02.webp',
    variant: 'wide',
  },
  {
    alt: 'Detalle cercano de brocas matriz e insertos de tungsteno en Bogotá',
    fit: 'square',
    src: '/countries/colombia/bogota/bogota-matrix-bits-inserts-03.webp',
    variant: 'tall',
  },
  {
    alt: 'Brocas matriz industriales e insertos de tungsteno clasificados en Bogotá',
    fit: 'square',
    src: '/countries/colombia/bogota/bogota-matrix-bits-inserts-04.webp',
  },
  {
    alt: 'Cabezales de perforación recuperados e insertos de tungsteno en lote de Bogotá',
    fit: 'square',
    src: '/countries/colombia/bogota/bogota-matrix-bits-inserts-05.webp',
    variant: 'wide',
  },
]

const houstonGalleryImagesEn: GalleryImage[] = [
  {
    alt: 'Industrial warehouse with recovered metal materials in Houston, Texas',
    src: '/countries/estados-unidos/houston/houston-warehouse-storage-03.webp',
    variant: 'feature',
  },
  {
    alt: 'Metal turnings container with material tag in Houston',
    src: '/countries/estados-unidos/houston/houston-metal-turnings-tag-01.webp',
    variant: 'tall',
  },
  {
    alt: 'Blast equipment inside a Houston industrial facility',
    src: '/countries/estados-unidos/houston/houston-blast-equipment-02.webp',
    variant: 'tall',
  },
  {
    alt: 'Recovered castings stored in a drum',
    src: '/countries/estados-unidos/houston/houston-recovered-castings-drum-04.webp',
  },
  {
    alt: 'Warehouse floor with sorted industrial materials',
    src: '/countries/estados-unidos/houston/houston-industrial-warehouse-05.webp',
    variant: 'wide',
  },
  {
    alt: 'Recovered metal billets inside a processing bin',
    src: '/countries/estados-unidos/houston/houston-metal-billets-bin-06.webp',
    variant: 'tall',
  },
  {
    alt: 'Turnings area with forklift and operating floor in Houston',
    src: '/countries/estados-unidos/houston/houston-turnings-floor-07.webp',
    variant: 'wide',
  },
  {
    alt: 'Blue barrels and processing equipment in Houston',
    src: '/countries/estados-unidos/houston/houston-barrels-equipment-08.webp',
    variant: 'wide',
  },
  {
    alt: 'Scrap processing area with recovered metal pieces',
    src: '/countries/estados-unidos/houston/houston-scrap-processing-area-09.webp',
    variant: 'wide',
  },
  {
    alt: 'Blue drums stacked outside a Houston warehouse',
    src: '/countries/estados-unidos/houston/houston-blue-drums-yard-10.webp',
    variant: 'wide',
  },
  {
    alt: 'Sorted castings stored in industrial drums',
    src: '/countries/estados-unidos/houston/houston-sorted-castings-drums-11.webp',
    variant: 'tall',
  },
  {
    alt: 'Recovered metal discs stored for material processing',
    src: '/countries/estados-unidos/houston/houston-metal-discs-12.webp',
    variant: 'tall',
  },
]

const houstonGalleryImagesEs: GalleryImage[] = [
  {
    alt: 'Bodega industrial con materiales metalicos recuperados en Houston, Texas',
    src: '/countries/estados-unidos/houston/houston-warehouse-storage-03.webp',
    variant: 'feature',
  },
  {
    alt: 'Contenedor de virutas metalicas con etiqueta de material en Houston',
    src: '/countries/estados-unidos/houston/houston-metal-turnings-tag-01.webp',
    variant: 'tall',
  },
  {
    alt: 'Equipo de granallado dentro de una instalacion industrial en Houston',
    src: '/countries/estados-unidos/houston/houston-blast-equipment-02.webp',
    variant: 'tall',
  },
  {
    alt: 'Piezas recuperadas almacenadas en un tambor',
    src: '/countries/estados-unidos/houston/houston-recovered-castings-drum-04.webp',
  },
  {
    alt: 'Piso de bodega con materiales industriales clasificados',
    src: '/countries/estados-unidos/houston/houston-industrial-warehouse-05.webp',
    variant: 'wide',
  },
  {
    alt: 'Billets metalicos recuperados dentro de un contenedor de proceso',
    src: '/countries/estados-unidos/houston/houston-metal-billets-bin-06.webp',
    variant: 'tall',
  },
  {
    alt: 'Area de turnings con montacargas y piso operativo en Houston',
    src: '/countries/estados-unidos/houston/houston-turnings-floor-07.webp',
    variant: 'wide',
  },
  {
    alt: 'Tambores azules y equipo de procesamiento en Houston',
    src: '/countries/estados-unidos/houston/houston-barrels-equipment-08.webp',
    variant: 'wide',
  },
  {
    alt: 'Area de procesamiento de scrap con piezas metalicas recuperadas',
    src: '/countries/estados-unidos/houston/houston-scrap-processing-area-09.webp',
    variant: 'wide',
  },
  {
    alt: 'Tambores azules apilados afuera de una bodega en Houston',
    src: '/countries/estados-unidos/houston/houston-blue-drums-yard-10.webp',
    variant: 'wide',
  },
  {
    alt: 'Piezas clasificadas almacenadas en tambores industriales',
    src: '/countries/estados-unidos/houston/houston-sorted-castings-drums-11.webp',
    variant: 'tall',
  },
  {
    alt: 'Discos metalicos recuperados para procesamiento de material',
    src: '/countries/estados-unidos/houston/houston-metal-discs-12.webp',
    variant: 'tall',
  },
]

const madisonvilleGalleryImagesEn: GalleryImage[] = [
  {
    alt: 'Tungco yard with drums of recovered metal in Madisonville, Kentucky',
    src: '/countries/estados-unidos/madisonville/madisonville-tungco-yard-drums-01.webp',
    variant: 'feature',
  },
  {
    alt: 'Welcome to Madisonville Kentucky rail sign',
    src: '/countries/estados-unidos/madisonville/madisonville-rail-sign-02.webp',
    variant: 'tall',
  },
  {
    alt: 'Scrap and sludge drums staged on pallets',
    src: '/countries/estados-unidos/madisonville/madisonville-scrap-sludge-drums-03.webp',
    variant: 'tall',
  },
  {
    alt: 'Recovered sludge and metal material detail',
    src: '/countries/estados-unidos/madisonville/madisonville-recovered-sludge-detail-04.webp',
  },
  {
    alt: 'Recovered metal components stored in drums',
    src: '/countries/estados-unidos/madisonville/madisonville-recovered-metal-drums-05.webp',
    variant: 'wide',
  },
  {
    alt: 'Warehouse grinding area with industrial drums',
    src: '/countries/estados-unidos/madisonville/madisonville-warehouse-grinding-area-06.webp',
    variant: 'wide',
  },
]

const madisonvilleGalleryImagesEs: GalleryImage[] = [
  {
    alt: 'Patio de Tungco con tambores de metal recuperado en Madisonville, Kentucky',
    src: '/countries/estados-unidos/madisonville/madisonville-tungco-yard-drums-01.webp',
    variant: 'feature',
  },
  {
    alt: 'Aviso de bienvenida a Madisonville Kentucky sobre via ferrea',
    src: '/countries/estados-unidos/madisonville/madisonville-rail-sign-02.webp',
    variant: 'tall',
  },
  {
    alt: 'Tambores de scrap y sludge preparados sobre pallets',
    src: '/countries/estados-unidos/madisonville/madisonville-scrap-sludge-drums-03.webp',
    variant: 'tall',
  },
  {
    alt: 'Detalle de sludge y material metalico recuperado',
    src: '/countries/estados-unidos/madisonville/madisonville-recovered-sludge-detail-04.webp',
  },
  {
    alt: 'Componentes metalicos recuperados almacenados en tambores',
    src: '/countries/estados-unidos/madisonville/madisonville-recovered-metal-drums-05.webp',
    variant: 'wide',
  },
  {
    alt: 'Area de grinding en bodega con tambores industriales',
    src: '/countries/estados-unidos/madisonville/madisonville-warehouse-grinding-area-06.webp',
    variant: 'wide',
  },
]

const miamiGalleryImagesEn: GalleryImage[] = [
  {
    alt: 'Truck loading at the Miami warehouse dock',
    src: '/countries/estados-unidos/miami/miami-warehouse-logistics-01.webp',
    variant: 'feature',
  },
  {
    alt: 'Forklift and shipping crate outside the Miami warehouse',
    src: '/countries/estados-unidos/miami/miami-warehouse-logistics-02.webp',
    variant: 'wide',
  },
  {
    alt: 'Wood shipping crate positioned at a Miami warehouse entrance',
    src: '/countries/estados-unidos/miami/miami-warehouse-logistics-03.webp',
    variant: 'tall',
  },
  {
    alt: 'Palletized warehouse storage and forklift operation in Miami',
    src: '/countries/estados-unidos/miami/miami-warehouse-logistics-04.webp',
    variant: 'wide',
  },
  {
    alt: 'Forklift and palletized inventory inside the Miami warehouse',
    src: '/countries/estados-unidos/miami/miami-warehouse-logistics-05.webp',
  },
]

const miamiGalleryImagesEs: GalleryImage[] = [
  {
    alt: 'Cargue de camión en muelle de bodega en Miami',
    src: '/countries/estados-unidos/miami/miami-warehouse-logistics-01.webp',
    variant: 'feature',
  },
  {
    alt: 'Montacargas y caja de despacho frente a bodega en Miami',
    src: '/countries/estados-unidos/miami/miami-warehouse-logistics-02.webp',
    variant: 'wide',
  },
  {
    alt: 'Caja de madera para despacho ubicada en entrada de bodega en Miami',
    src: '/countries/estados-unidos/miami/miami-warehouse-logistics-03.webp',
    variant: 'tall',
  },
  {
    alt: 'Almacenamiento en pallets y operación con montacargas en Miami',
    src: '/countries/estados-unidos/miami/miami-warehouse-logistics-04.webp',
    variant: 'wide',
  },
  {
    alt: 'Montacargas e inventario en pallets dentro de bodega en Miami',
    src: '/countries/estados-unidos/miami/miami-warehouse-logistics-05.webp',
  },
]

const unitedStatesRelatedEn: RelatedStory[] = [
  {
    excerpt:
      'Warehouse logistics, truck loading, and international movement coordination in Miami.',
    href: '/about/miami',
    image: '/countries/estados-unidos/miami/miami-warehouse-logistics-01.webp',
    imageAlt: 'Miami warehouse logistics and truck loading',
    imageLabel: 'Miami, United States',
    label: 'Miami',
    meta: 'City story',
    slug: 'miami',
    title: 'Miami',
  },
  {
    excerpt:
      'Operational participation with recovered metals and warehouse activity in Texas.',
    href: '/about/houston',
    image:
      '/countries/estados-unidos/houston/houston-warehouse-storage-03.webp',
    imageAlt:
      'Industrial warehouse and recovered metal materials in Houston, Texas',
    imageLabel: 'Houston, Texas',
    label: 'Houston, Texas',
    meta: 'City story',
    slug: 'houston',
    title: 'Houston, Texas',
  },
  {
    excerpt:
      'Material recovery and industrial sorting documentation in Madisonville, Kentucky.',
    href: '/about/madisonville',
    image:
      '/countries/estados-unidos/madisonville/madisonville-tungco-yard-drums-01.webp',
    imageAlt:
      'Tungco yard with recovered metal drums in Madisonville, Kentucky',
    imageLabel: 'Madisonville, Kentucky',
    label: 'Madisonville',
    meta: 'City story',
    slug: 'madisonville',
    title: 'Madisonville',
  },
  {
    excerpt:
      'Innovation ecosystem participation and business development visits in Silicon Valley.',
    href: '/about/silicon-valley',
    image:
      '/countries/estados-unidos/silicon-valley/silicon-valley-unicorns-01.webp',
    imageAlt: 'Startup ecosystem visit in Silicon Valley',
    imageLabel: 'Silicon Valley, United States',
    label: 'Silicon Valley',
    meta: 'Event story',
    slug: 'silicon-valley',
    title: 'Silicon Valley',
  },
]

const unitedStatesRelatedEs: RelatedStory[] = [
  {
    excerpt:
      'Bodega logística, cargue de camiones y coordinación de salida internacional en Miami.',
    href: '/about/miami',
    image: '/countries/estados-unidos/miami/miami-warehouse-logistics-01.webp',
    imageAlt: 'Bodega logística de Miami y cargue de camión',
    imageLabel: 'Miami, Estados Unidos',
    label: 'Miami',
    meta: 'Historia por ciudad',
    slug: 'miami',
    title: 'Miami',
  },
  {
    excerpt:
      'Participacion operativa con metales recuperados y actividad de bodega en Texas.',
    href: '/about/houston',
    image:
      '/countries/estados-unidos/houston/houston-warehouse-storage-03.webp',
    imageAlt:
      'Bodega industrial y materiales metalicos recuperados en Houston, Texas',
    imageLabel: 'Houston, Texas',
    label: 'Houston, Texas',
    meta: 'Historia por ciudad',
    slug: 'houston',
    title: 'Houston, Texas',
  },
  {
    excerpt:
      'Documentacion de recuperacion de material y clasificacion industrial en Madisonville, Kentucky.',
    href: '/about/madisonville',
    image:
      '/countries/estados-unidos/madisonville/madisonville-tungco-yard-drums-01.webp',
    imageAlt:
      'Patio de Tungco con tambores de metal recuperado en Madisonville, Kentucky',
    imageLabel: 'Madisonville, Kentucky',
    label: 'Madisonville',
    meta: 'Historia por ciudad',
    slug: 'madisonville',
    title: 'Madisonville',
  },
  {
    excerpt:
      'Participacion en ecosistema de innovacion y visitas de desarrollo comercial en Silicon Valley.',
    href: '/about/silicon-valley',
    image:
      '/countries/estados-unidos/silicon-valley/silicon-valley-unicorns-01.webp',
    imageAlt: 'Visita al ecosistema empresarial de Silicon Valley',
    imageLabel: 'Silicon Valley, Estados Unidos',
    label: 'Silicon Valley',
    meta: 'Historia por evento',
    slug: 'silicon-valley',
    title: 'Silicon Valley',
  },
]

const colombiaRelatedEn: RelatedStory[] = [
  {
    excerpt: 'Matrix drill bits and tungsten inserts documented in Bogota.',
    href: '/about/bogota',
    image: '/countries/colombia/bogota/bogota-matrix-bits-inserts-05.webp',
    imageAlt: 'Matrix drill bits and tungsten inserts in Bogota, Colombia',
    imageLabel: 'Bogota, Colombia',
    label: 'Bogota',
    meta: 'City story',
    slug: 'bogota',
    title: 'Bogota',
  },
  {
    excerpt:
      'GreenTech participation and business development presence in Medellin.',
    href: '/about/medellin',
    image: '/countries/colombia/medellin/medellin-greentech-booth-07.webp',
    imageAlt: 'GreenTech booth participation in Medellin, Colombia',
    imageLabel: 'Medellin, Colombia',
    label: 'Medellin',
    meta: 'City story',
    slug: 'medellin',
    title: 'Medellin',
  },
]

const colombiaRelatedEs: RelatedStory[] = [
  {
    excerpt: 'Brocas matriz e insertos de tungsteno documentados en Bogotá.',
    href: '/about/bogota',
    image: '/countries/colombia/bogota/bogota-matrix-bits-inserts-05.webp',
    imageAlt: 'Brocas matriz e insertos de tungsteno en Bogotá, Colombia',
    imageLabel: 'Bogotá, Colombia',
    label: 'Bogotá',
    meta: 'Historia por ciudad',
    slug: 'bogota',
    title: 'Bogotá',
  },
  {
    excerpt:
      'Participacion en GreenTech y presencia de desarrollo comercial en Medellin.',
    href: '/about/medellin',
    image: '/countries/colombia/medellin/medellin-greentech-booth-07.webp',
    imageAlt: 'Participacion en stand GreenTech en Medellin, Colombia',
    imageLabel: 'Medellin, Colombia',
    label: 'Medellin',
    meta: 'Historia por ciudad',
    slug: 'medellin',
    title: 'Medellin',
  },
]

const fallbackStories: Record<'en' | 'es', CountryStory[]> = {
  en: [
    {
      body: 'Green Way evaluates recoverable industrial metals, documents the lot, and defines the final purchase and logistics route.',
      bodyTitle: 'Overview',
      cta: 'Contact Us',
      excerpt:
        'Industrial metal recovery experience with material evaluation, traceability, and commercial coordination.',
      galleryTitle: 'Image Spaces',
      highlights: [
        'Recoverable industrial metals',
        'Material evaluation and sorting',
        'Commercial and logistics coordination',
      ],
      highlightsTitle: 'Highlights',
      image:
        '/countries/estados-unidos/houston/houston-warehouse-storage-03.webp',
      imageAlt:
        'Industrial warehouse and recovered metal materials in Houston, Texas',
      imageLabel: 'United States',
      label: 'United States',
      meta: 'Country story',
      relatedEyebrow: 'Inside This Country',
      relatedItems: unitedStatesRelatedEn,
      relatedTitle: 'Cities and Events In The United States',
      slug: 'united-states',
      title: 'United States',
    },
    {
      body: "Miami is Green Way's operating point for warehouse logistics, truck loading, pallet handling, and international movement coordination. The facility supports receiving, staging, documentation, and movement for industrial materials that need a clear logistics route.",
      bodyTitle: 'Operating Overview',
      cta: 'Contact Us',
      excerpt:
        'Warehouse logistics, truck loading, and international movement coordination from Miami.',
      galleryImages: miamiGalleryImagesEn,
      galleryTitle: 'Miami Warehouse Logistics',
      highlights: [
        'Warehouse receiving and staging',
        'Truck loading and forklift operation',
        'International movement coordination',
      ],
      highlightsTitle: 'Highlights',
      image:
        '/countries/estados-unidos/miami/miami-warehouse-logistics-01.webp',
      imageAlt: 'Miami warehouse logistics and truck loading',
      imageLabel: 'Miami, United States',
      label: 'Miami',
      meta: 'United States city story',
      slug: 'miami',
      title: 'Miami',
    },
    {
      body: 'Green Way evaluates recoverable industrial metals, documents the lot, and defines the final purchase and logistics route.',
      bodyTitle: 'Overview',
      cta: 'Contact Us',
      excerpt:
        'Industrial metal recovery experience with material evaluation, traceability, and commercial coordination.',
      galleryTitle: 'Image Spaces',
      highlights: [
        'Recoverable industrial metals',
        'Material evaluation and sorting',
        'Commercial and logistics coordination',
      ],
      highlightsTitle: 'Highlights',
      image: '/countries/colombia/medellin/medellin-greentech-booth-07.webp',
      imageAlt: 'GreenTech booth participation in Medellin, Colombia',
      imageLabel: 'Colombia',
      label: 'Colombia',
      meta: 'Country story',
      relatedEyebrow: 'Inside This Country',
      relatedItems: colombiaRelatedEn,
      relatedTitle: 'Cities and Events In Colombia',
      slug: 'colombia',
      title: 'Colombia',
    },
    {
      body: 'Bogota documents a real material lot for technical review: matrix drill bits, drilling heads, and tungsten inserts with recoverable value. The lot is evaluated by piece type, condition, quantity, and separation before Green Way defines the purchase or recovery path.',
      bodyTitle: 'Operating Overview',
      cta: 'Contact Us',
      excerpt:
        'Matrix drill bits and tungsten inserts received in Bogota for technical evaluation and metal recovery.',
      galleryImages: bogotaMatrixGalleryImagesEn,
      galleryTitle: 'Bogota Matrix Drill Bits and Tungsten Inserts',
      highlights: [
        'Matrix drill bits and drilling heads',
        'Tungsten inserts and wear materials',
        'Technical evaluation for purchase or recovery',
      ],
      highlightsTitle: 'Highlights',
      image: '/countries/colombia/bogota/bogota-matrix-bits-inserts-05.webp',
      imageAlt: 'Matrix drill bits and tungsten inserts in Bogota, Colombia',
      imageLabel: 'Bogota, Colombia',
      label: 'Bogota',
      meta: 'Colombia city story',
      slug: 'bogota',
      title: 'Bogota',
    },
    {
      body: 'Green Way evaluates recoverable industrial metals, documents the lot, and defines the final purchase and logistics route.',
      bodyTitle: 'Overview',
      cta: 'Contact Us',
      excerpt:
        'Industrial metal recovery experience with material evaluation, traceability, and commercial coordination.',
      galleryImages: medellinGalleryImagesEn,
      galleryTitle: 'Operating Gallery In Medellin',
      highlights: [
        'Recoverable industrial metals',
        'Material evaluation and sorting',
        'Commercial and logistics coordination',
      ],
      highlightsTitle: 'Highlights',
      image: '/countries/colombia/medellin/medellin-greentech-booth-07.webp',
      imageAlt: 'GreenTech booth participation in Medellin, Colombia',
      imageLabel: 'Medellin, Colombia',
      label: 'Medellin',
      meta: 'Colombia city story',
      slug: 'medellin',
      title: 'Medellin',
    },
    {
      body: 'Green Way evaluates recoverable industrial metals, documents the lot, and defines the final purchase and logistics route.',
      bodyTitle: 'Overview',
      cta: 'Contact Us',
      excerpt:
        'Industrial metal recovery experience with material evaluation, traceability, and commercial coordination.',
      galleryImages: chileGalleryImagesEn,
      galleryTitle: 'Operating Gallery In Chile',
      highlights: [
        'Recoverable industrial metals',
        'Material evaluation and sorting',
        'Commercial and logistics coordination',
      ],
      highlightsTitle: 'Highlights',
      image: '/countries/chile/santiago/chile-operacion-santiago-02.jpg',
      imageAlt: 'Metals operation in Santiago, Chile',
      imageLabel: 'Santiago, Chile',
      label: 'Chile',
      meta: 'Country story',
      slug: 'chile',
      title: 'Chile',
    },
    {
      body: 'Green Way evaluates recoverable industrial metals, documents the lot, and defines the final purchase and logistics route.',
      bodyTitle: 'Overview',
      cta: 'Contact Us',
      excerpt:
        'Industrial metal recovery experience with material evaluation, traceability, and commercial coordination.',
      galleryImages: spainGalleryImagesEn,
      galleryTitle: 'Operating Gallery In Spain',
      galleryVideo: spainGalleryVideoEn,
      highlights: [
        'Recoverable industrial metals',
        'Material evaluation and sorting',
        'Commercial and logistics coordination',
      ],
      highlightsTitle: 'Highlights',
      image: '/countries/espana/barcelona/spain-barcelona-warehouse-01.webp',
      imageAlt: 'Industrial metals warehouse in Barcelona, Spain',
      imageLabel: 'Barcelona, Spain',
      label: 'Spain',
      meta: 'Country story',
      slug: 'spain',
      title: 'Spain',
    },
    {
      body: 'Green Way evaluates recoverable industrial metals, documents the lot, and defines the final purchase and logistics route.',
      bodyTitle: 'Overview',
      cta: 'Contact Us',
      excerpt:
        'Industrial metal recovery experience with material evaluation, traceability, and commercial coordination.',
      galleryImages: italyGalleryImagesEn,
      galleryTitle: 'Operating Gallery In Italy',
      highlights: [
        'Recoverable industrial metals',
        'Material evaluation and sorting',
        'Commercial and logistics coordination',
      ],
      highlightsTitle: 'Highlights',
      image: '/countries/italia/operacion/italy-industrial-equipment-05.webp',
      imageAlt: 'Industrial equipment and machined components in Italy',
      imageLabel: 'Italy',
      label: 'Italy',
      meta: 'Country story',
      slug: 'italy',
      title: 'Italy',
    },
    {
      body: 'Green Way evaluates recoverable industrial metals, documents the lot, and defines the final purchase and logistics route.',
      bodyTitle: 'Overview',
      cta: 'Contact Us',
      excerpt:
        'Industrial metal recovery experience with material evaluation, traceability, and commercial coordination.',
      galleryImages: houstonGalleryImagesEn,
      galleryTitle: 'Operating Gallery In Houston',
      highlights: [
        'Recoverable industrial metals',
        'Material evaluation and sorting',
        'Commercial and logistics coordination',
      ],
      highlightsTitle: 'Highlights',
      image:
        '/countries/estados-unidos/houston/houston-warehouse-storage-03.webp',
      imageAlt:
        'Industrial warehouse and recovered metal materials in Houston, Texas',
      imageLabel: 'Houston, Texas',
      label: 'Houston, Texas',
      meta: 'United States city story',
      slug: 'houston',
      title: 'Houston, Texas',
    },
    {
      body: 'Green Way evaluates recoverable industrial metals, documents the lot, and defines the final purchase and logistics route.',
      bodyTitle: 'Overview',
      cta: 'Contact Us',
      excerpt:
        'Industrial metal recovery experience with material evaluation, traceability, and commercial coordination.',
      galleryImages: madisonvilleGalleryImagesEn,
      galleryTitle: 'Operating Gallery In Madisonville',
      highlights: [
        'Recoverable industrial metals',
        'Material evaluation and sorting',
        'Commercial and logistics coordination',
      ],
      highlightsTitle: 'Highlights',
      image:
        '/countries/estados-unidos/madisonville/madisonville-tungco-yard-drums-01.webp',
      imageAlt:
        'Tungco yard with recovered metal drums in Madisonville, Kentucky',
      imageLabel: 'Madisonville, Kentucky',
      label: 'Madisonville',
      meta: 'United States city story',
      slug: 'madisonville',
      title: 'Madisonville',
    },
    {
      body: 'Green Way evaluates recoverable industrial metals, documents the lot, and defines the final purchase and logistics route.',
      bodyTitle: 'Overview',
      cta: 'Contact Us',
      excerpt:
        'Industrial metal recovery experience with material evaluation, traceability, and commercial coordination.',
      galleryImages: siliconValleyGalleryImagesEn,
      galleryTitle: 'Operating Gallery In Silicon Valley',
      highlights: [
        'Recoverable industrial metals',
        'Material evaluation and sorting',
        'Commercial and logistics coordination',
      ],
      highlightsTitle: 'Highlights',
      image:
        '/countries/estados-unidos/silicon-valley/silicon-valley-unicorns-01.webp',
      imageAlt: 'Startup ecosystem visit in Silicon Valley',
      imageLabel: 'Silicon Valley, United States',
      label: 'Silicon Valley',
      meta: 'United States city story',
      slug: 'silicon-valley',
      title: 'Silicon Valley',
    },
  ],
  es: [
    {
      body: 'Green Way evalúa materiales metálicos recuperables, documenta el lote y define la compra final con la ruta logística adecuada.',
      bodyTitle: 'Resumen',
      cta: 'Contactanos',
      excerpt:
        'Experiencia en recuperación de metales industriales con evaluación de material, trazabilidad y coordinación comercial.',
      galleryTitle: 'Espacios Para Imagenes',
      highlights: [
        'Metales industriales recuperables',
        'Evaluación y clasificación de material',
        'Coordinación comercial y logística',
      ],
      highlightsTitle: 'Puntos Clave',
      image:
        '/countries/estados-unidos/houston/houston-warehouse-storage-03.webp',
      imageAlt:
        'Bodega industrial y materiales metalicos recuperados en Houston, Texas',
      imageLabel: 'Estados Unidos',
      label: 'Estados Unidos',
      meta: 'Historia por pais',
      relatedEyebrow: 'Dentro De Este Pais',
      relatedItems: unitedStatesRelatedEs,
      relatedTitle: 'Ciudades y Eventos En Estados Unidos',
      slug: 'estados-unidos',
      title: 'Estados Unidos',
    },
    {
      body: 'Miami es el punto operativo de Green Way para bodega logística, cargue de camiones, manejo en pallets y coordinación de movimiento internacional. La instalación soporta recepción, alistamiento, documentación y salida para materiales industriales que necesitan una ruta logística clara.',
      bodyTitle: 'Resumen Operativo',
      cta: 'Contáctanos',
      excerpt:
        'Bodega logística, cargue de camiones y coordinación de salida internacional desde Miami.',
      galleryImages: miamiGalleryImagesEs,
      galleryTitle: 'Bodega Logística En Miami',
      highlights: [
        'Recepción y alistamiento en bodega',
        'Cargue de camiones y operación con montacargas',
        'Coordinación de movimiento internacional',
      ],
      highlightsTitle: 'Puntos Clave',
      image:
        '/countries/estados-unidos/miami/miami-warehouse-logistics-01.webp',
      imageAlt: 'Bodega logística de Miami y cargue de camión',
      imageLabel: 'Miami, Estados Unidos',
      label: 'Miami',
      meta: 'Historia por ciudad',
      slug: 'miami',
      title: 'Miami',
    },
    {
      body: 'Green Way evalúa materiales metálicos recuperables, documenta el lote y define la compra final con la ruta logística adecuada.',
      bodyTitle: 'Resumen',
      cta: 'Contactanos',
      excerpt:
        'Experiencia en recuperación de metales industriales con evaluación de material, trazabilidad y coordinación comercial.',
      galleryTitle: 'Espacios Para Imagenes',
      highlights: [
        'Metales industriales recuperables',
        'Evaluación y clasificación de material',
        'Coordinación comercial y logística',
      ],
      highlightsTitle: 'Puntos Clave',
      image: '/countries/colombia/medellin/medellin-greentech-booth-07.webp',
      imageAlt: 'Participacion en stand GreenTech en Medellin, Colombia',
      imageLabel: 'Colombia',
      label: 'Colombia',
      meta: 'Historia por pais',
      relatedEyebrow: 'Dentro De Este Pais',
      relatedItems: colombiaRelatedEs,
      relatedTitle: 'Ciudades y Eventos En Colombia',
      slug: 'colombia',
      title: 'Colombia',
    },
    {
      body: 'Bogotá documenta un lote de brocas matriz, cabezales de perforación e insertos de tungsteno con valor recuperable. El lote se evalúa por tipo de pieza, condición, cantidad y separación antes de definir compra o ruta de recuperación.',
      bodyTitle: 'Resumen Operativo',
      cta: 'Contáctanos',
      excerpt:
        'Brocas matriz e insertos de tungsteno recibidos en Bogotá para evaluación técnica y recuperación de metal.',
      galleryImages: bogotaMatrixGalleryImagesEs,
      galleryTitle: 'Brocas Matriz e Insertos De Tungsteno En Bogotá',
      highlights: [
        'Brocas matriz y cabezales de perforación',
        'Insertos de tungsteno y materiales de desgaste',
        'Evaluación técnica para compra o recuperación',
      ],
      highlightsTitle: 'Puntos Clave',
      image: '/countries/colombia/bogota/bogota-matrix-bits-inserts-05.webp',
      imageAlt: 'Brocas matriz e insertos de tungsteno en Bogotá, Colombia',
      imageLabel: 'Bogotá, Colombia',
      label: 'Bogotá',
      meta: 'Historia por ciudad',
      slug: 'bogota',
      title: 'Bogotá',
    },
    {
      body: 'Green Way evalúa materiales metálicos recuperables, documenta el lote y define la compra final con la ruta logística adecuada.',
      bodyTitle: 'Resumen',
      cta: 'Contáctanos',
      excerpt:
        'Experiencia en recuperación de metales industriales con evaluación de material, trazabilidad y coordinación comercial.',
      galleryImages: medellinGalleryImagesEs,
      galleryTitle: 'Galería Operativa En Medellín',
      highlights: [
        'Metales industriales recuperables',
        'Evaluación y clasificación de material',
        'Coordinación comercial y logística',
      ],
      highlightsTitle: 'Puntos Clave',
      image: '/countries/colombia/medellin/medellin-greentech-booth-07.webp',
      imageAlt: 'Participación en stand GreenTech en Medellín, Colombia',
      imageLabel: 'Medellín, Colombia',
      label: 'Medellín',
      meta: 'Historia por ciudad',
      slug: 'medellin',
      title: 'Medellín',
    },
    {
      body: 'Green Way evalúa materiales metálicos recuperables, documenta el lote y define la compra final con la ruta logística adecuada.',
      bodyTitle: 'Resumen',
      cta: 'Contactanos',
      excerpt:
        'Experiencia en recuperación de metales industriales con evaluación de material, trazabilidad y coordinación comercial.',
      galleryImages: chileGalleryImagesEs,
      galleryTitle: 'Galería Operativa En Chile',
      highlights: [
        'Metales industriales recuperables',
        'Evaluación y clasificación de material',
        'Coordinación comercial y logística',
      ],
      highlightsTitle: 'Puntos Clave',
      image: '/countries/chile/santiago/chile-operacion-santiago-02.jpg',
      imageAlt: 'Operación de metales en Santiago, Chile',
      imageLabel: 'Santiago, Chile',
      label: 'Chile',
      meta: 'Historia por pais',
      slug: 'chile',
      title: 'Chile',
    },
    {
      body: 'Green Way evalúa materiales metálicos recuperables, documenta el lote y define la compra final con la ruta logística adecuada.',
      bodyTitle: 'Resumen',
      cta: 'Contactanos',
      excerpt:
        'Experiencia en recuperación de metales industriales con evaluación de material, trazabilidad y coordinación comercial.',
      galleryImages: spainGalleryImagesEs,
      galleryTitle: 'Galería Operativa En España',
      galleryVideo: spainGalleryVideoEs,
      highlights: [
        'Metales industriales recuperables',
        'Evaluación y clasificación de material',
        'Coordinación comercial y logística',
      ],
      highlightsTitle: 'Puntos Clave',
      image: '/countries/espana/barcelona/spain-barcelona-warehouse-01.webp',
      imageAlt: 'Bodega industrial de metales en Barcelona, España',
      imageLabel: 'Barcelona, España',
      label: 'Espana',
      meta: 'Historia por pais',
      slug: 'espana',
      title: 'Espana',
    },
    {
      body: 'Green Way evalúa materiales metálicos recuperables, documenta el lote y define la compra final con la ruta logística adecuada.',
      bodyTitle: 'Resumen',
      cta: 'Contactanos',
      excerpt:
        'Experiencia en recuperación de metales industriales con evaluación de material, trazabilidad y coordinación comercial.',
      galleryImages: italyGalleryImagesEs,
      galleryTitle: 'Galería Operativa En Italia',
      highlights: [
        'Metales industriales recuperables',
        'Evaluación y clasificación de material',
        'Coordinación comercial y logística',
      ],
      highlightsTitle: 'Puntos Clave',
      image: '/countries/italia/operacion/italy-industrial-equipment-05.webp',
      imageAlt: 'Equipo industrial y componentes mecanizados en Italia',
      imageLabel: 'Italia',
      label: 'Italia',
      meta: 'Historia por pais',
      slug: 'italia',
      title: 'Italia',
    },
    {
      body: 'Green Way evalúa materiales metálicos recuperables, documenta el lote y define la compra final con la ruta logística adecuada.',
      bodyTitle: 'Resumen',
      cta: 'Contactanos',
      excerpt:
        'Experiencia en recuperación de metales industriales con evaluación de material, trazabilidad y coordinación comercial.',
      galleryImages: houstonGalleryImagesEs,
      galleryTitle: 'Galeria Operativa En Houston',
      highlights: [
        'Metales industriales recuperables',
        'Evaluación y clasificación de material',
        'Coordinación comercial y logística',
      ],
      highlightsTitle: 'Puntos Clave',
      image:
        '/countries/estados-unidos/houston/houston-warehouse-storage-03.webp',
      imageAlt:
        'Bodega industrial y materiales metalicos recuperados en Houston, Texas',
      imageLabel: 'Houston, Texas',
      label: 'Houston, Texas',
      meta: 'Historia por ciudad',
      slug: 'houston',
      title: 'Houston, Texas',
    },
    {
      body: 'Green Way evalúa materiales metálicos recuperables, documenta el lote y define la compra final con la ruta logística adecuada.',
      bodyTitle: 'Resumen',
      cta: 'Contactanos',
      excerpt:
        'Experiencia en recuperación de metales industriales con evaluación de material, trazabilidad y coordinación comercial.',
      galleryImages: madisonvilleGalleryImagesEs,
      galleryTitle: 'Galeria Operativa En Madisonville',
      highlights: [
        'Metales industriales recuperables',
        'Evaluación y clasificación de material',
        'Coordinación comercial y logística',
      ],
      highlightsTitle: 'Puntos Clave',
      image:
        '/countries/estados-unidos/madisonville/madisonville-tungco-yard-drums-01.webp',
      imageAlt:
        'Patio de Tungco con tambores de metal recuperado en Madisonville, Kentucky',
      imageLabel: 'Madisonville, Kentucky',
      label: 'Madisonville',
      meta: 'Historia por ciudad',
      slug: 'madisonville',
      title: 'Madisonville',
    },
    {
      body: 'Green Way evalúa materiales metálicos recuperables, documenta el lote y define la compra final con la ruta logística adecuada.',
      bodyTitle: 'Resumen',
      cta: 'Contactanos',
      excerpt:
        'Experiencia en recuperación de metales industriales con evaluación de material, trazabilidad y coordinación comercial.',
      galleryImages: siliconValleyGalleryImagesEs,
      galleryTitle: 'Galeria Operativa En Silicon Valley',
      highlights: [
        'Metales industriales recuperables',
        'Evaluación y clasificación de material',
        'Coordinación comercial y logística',
      ],
      highlightsTitle: 'Puntos Clave',
      image:
        '/countries/estados-unidos/silicon-valley/silicon-valley-unicorns-01.webp',
      imageAlt: 'Visita al ecosistema empresarial de Silicon Valley',
      imageLabel: 'Silicon Valley, Estados Unidos',
      label: 'Silicon Valley',
      meta: 'Historia por ciudad',
      slug: 'silicon-valley',
      title: 'Silicon Valley',
    },
  ],
}

function getCountryMessageBySlug(
  countryItems: CountryItemMessage[] | undefined,
  slug: string,
  index: number
) {
  const direct = countryItems?.find(item => item.slug === slug)

  if (direct) {
    return direct
  }

  const indexed = countryItems?.[index]
  return !indexed?.slug || indexed.slug === slug ? indexed : undefined
}

function mergeStories(locale: string, messages: CountryPageMessages) {
  const localeKey = locale === 'en' ? 'en' : 'es'
  const fallback = fallbackStories[localeKey]
  const countryItems = messages.Pages?.about?.countryItems

  return fallback.map((story, index) => {
    const itemMessage = getCountryMessageBySlug(countryItems, story.slug, index)

    return {
      ...story,
      ...itemMessage,
      cta: itemMessage?.cta ?? messages.Pages?.about?.cta ?? story.cta,
    }
  })
}

function getGalleryItemClass(image: GalleryImage) {
  const base =
    'group relative overflow-hidden rounded-[4px] border border-[#d7dde3] bg-[#edf4f2]'
  const { fit, variant } = image

  if (fit === 'square') {
    if (variant === 'feature') {
      return `${base} aspect-square md:col-span-2 lg:col-span-2`
    }

    return `${base} aspect-square`
  }

  if (variant === 'feature') {
    return `${base} min-h-[360px] md:col-span-2 lg:col-span-4 lg:min-h-[520px]`
  }

  if (variant === 'wide') {
    return `${base} min-h-[300px] md:col-span-2 lg:col-span-2`
  }

  if (variant === 'tall') {
    return `${base} min-h-[460px]`
  }

  return `${base} min-h-[340px]`
}

function VideoGalleryItem({ video }: { video: GalleryVideo }) {
  return (
    <figure
      className={getGalleryItemClass({ alt: video.label, src: video.poster })}
      data-aos='fade-up'
      data-aos-delay='120'
    >
      <Image
        alt={video.label}
        className='object-cover'
        fill
        sizes='(min-width: 1024px) 320px, 50vw'
        src={video.poster}
      />
      <video
        aria-label={video.title}
        autoPlay
        className='absolute inset-0 z-10 h-full w-full object-cover'
        controls
        controlsList='nodownload noremoteplayback'
        disablePictureInPicture
        loop
        muted
        playsInline
        poster={video.poster}
        preload='metadata'
      >
        <source src={video.src} />
      </video>
      <div className='pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(to_top,rgba(15,23,42,0.58),rgba(15,23,42,0.08)_58%,rgba(15,23,42,0))]' />
      <figcaption className='pointer-events-none absolute left-5 right-5 top-5 z-30 flex flex-col gap-2 text-white drop-shadow'>
        <span className='text-xs font-bold uppercase tracking-[0.2em]'>
          {video.title}
        </span>
        <span className='text-xs font-bold uppercase tracking-[0.2em] text-white/82'>
          {video.label}
        </span>
      </figcaption>
    </figure>
  )
}

function GalleryImageItem({
  className,
  image,
  index,
  sizes,
}: {
  className: string
  image: GalleryImage
  index: number
  sizes: string
}) {
  return (
    <figure
      className={className}
      data-aos='fade-up'
      data-aos-delay={String(60 + (index % 4) * 70)}
    >
      <Image
        alt={image.alt}
        className='object-cover transition-transform duration-500 group-hover:scale-[1.025]'
        fill
        sizes={sizes}
        src={image.src}
      />
      <div className='absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.48),rgba(15,23,42,0.04)_58%,rgba(15,23,42,0))] opacity-80 transition-opacity duration-300 group-hover:opacity-60' />
      <figcaption className='absolute bottom-5 left-5 right-5 text-xs font-bold uppercase tracking-[0.18em] text-white drop-shadow'>
        {String(index + 1).padStart(2, '0')}
      </figcaption>
    </figure>
  )
}

export function generateStaticParams() {
  return storySlugs.map(country => ({ country }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; locale: string }>
}): Promise<Metadata> {
  const { country, locale } = await params

  return getCountryMetadata(locale, country)
}

export default async function CountryStoryPage({
  params,
}: {
  params: Promise<{ country: string }>
}) {
  const { country } = await params
  const locale = await getLocale()
  const messages = (await getMessages()) as CountryPageMessages
  const stories = mergeStories(locale, messages)
  const normalizedCountry = slugAliases[locale]?.[country] ?? country
  const story = stories.find(item => item.slug === normalizedCountry)
  const backLabel =
    messages.Pages?.about?.storyBack ??
    (locale === 'en' ? 'Back to About' : 'Volver a Quienes Somos')
  const eyebrow =
    messages.Pages?.about?.storyEyebrow ??
    (locale === 'en' ? 'International Work' : 'Trabajo internacional')

  if (!story) {
    notFound()
  }

  const heroImageLabel =
    story.slug === 'chile'
      ? 'Santiago, Chile'
      : story.slug === 'espana' || story.slug === 'spain'
        ? locale === 'en'
          ? 'Barcelona, Spain'
          : 'Barcelona, España'
        : story.slug === 'italia' || story.slug === 'italy'
          ? locale === 'en'
            ? 'Italy'
            : 'Italia'
          : story.slug === 'medellin'
            ? locale === 'en'
              ? 'Medellin, Colombia'
              : 'Medellín, Colombia'
            : story.slug === 'silicon-valley'
              ? locale === 'en'
                ? 'Silicon Valley, United States'
                : 'Silicon Valley, Estados Unidos'
              : story.slug === 'houston'
                ? 'Houston, Texas'
                : story.slug === 'madisonville'
                  ? locale === 'en'
                    ? 'Madisonville, Kentucky'
                    : 'Madisonville, Kentucky'
                  : story.imageLabel
  const hasGalleryMedia = Boolean(
    story.galleryImages?.length || story.galleryVideo
  )
  const shouldUseSquareHeroImage = story.slug === 'bogota'
  const hasSquareGallery = Boolean(
    story.galleryImages?.length &&
    story.galleryImages.every(image => image.fit === 'square')
  )
  const squareGalleryFeature = hasSquareGallery
    ? story.galleryImages?.[0]
    : undefined
  const squareGalleryRest = hasSquareGallery
    ? (story.galleryImages?.slice(1) ?? [])
    : []

  return (
    <main data-aos='fade-in' data-aos-offset='0'>
      <section className='border-b border-[#d7dde3] bg-white px-6 py-12 sm:py-14'>
        <div className='mx-auto max-w-7xl'>
          <Link
            className='inline-flex text-sm font-bold text-[var(--gw-blue)] transition-colors duration-200 hover:text-[var(--gw-green)]'
            href='/about'
          >
            {backLabel}
          </Link>
          <div className='mt-8 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start'>
            <div
              className='border-l-4 border-[var(--gw-green)] pl-6 sm:pl-8'
              data-aos='fade-up'
            >
              <p className='text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]'>
                {eyebrow}
              </p>
              <h1 className='mt-5 text-5xl font-bold leading-[0.98] text-[var(--gw-ink)] sm:text-6xl'>
                {story.title}
              </h1>
              <p className='mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]'>
                {story.excerpt}
              </p>
            </div>
            <div
              aria-label={heroImageLabel}
              className={`relative overflow-hidden rounded-[4px] border border-[#d7dde3] bg-[#edf4f2] ${
                shouldUseSquareHeroImage ? 'aspect-square' : 'min-h-[420px]'
              }`}
              data-aos='fade-left'
              role='img'
            >
              {story.image ? (
                <Image
                  alt={story.imageAlt ?? heroImageLabel}
                  className='object-cover'
                  fill
                  priority
                  sizes='(min-width: 1024px) 650px, 100vw'
                  src={story.image}
                />
              ) : (
                <>
                  <div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(34,181,115,0.2),rgba(28,110,164,0.38))]' />
                  <div className='absolute inset-x-8 bottom-8 top-8 border border-white/60 bg-white/20' />
                </>
              )}
              <div className='absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.68),rgba(15,23,42,0.08)_62%,rgba(15,23,42,0))]' />
              <p className='absolute bottom-8 left-8 right-8 text-xs font-bold uppercase tracking-[0.2em] text-white drop-shadow'>
                {heroImageLabel}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[var(--gw-sand)] px-6 py-18 sm:py-20'>
        <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.72fr]'>
          <article
            className='border-l-4 border-[var(--gw-blue)] bg-white p-8 shadow-[0_16px_36px_rgba(15,23,42,0.07)]'
            data-aos='fade-up'
          >
            <p className='text-xs font-bold uppercase tracking-[0.22em] text-[var(--gw-blue)]'>
              {story.meta}
            </p>
            <h2 className='mt-5 text-4xl font-bold text-[var(--gw-ink)]'>
              {story.bodyTitle}
            </h2>
            <p className='mt-6 text-lg leading-8 text-[var(--color-muted)]'>
              {story.body}
            </p>
          </article>

          <aside
            className='border border-[#d7dde3] bg-white p-8'
            data-aos='fade-up'
            data-aos-delay='120'
          >
            <h2 className='text-2xl font-bold text-[var(--gw-ink)]'>
              {story.highlightsTitle}
            </h2>
            <ul className='mt-6 space-y-4'>
              {story.highlights.map((highlight, index) => (
                <li
                  className='flex gap-3 text-base text-[var(--color-muted)]'
                  key={`${highlight}-${index}`}
                >
                  <span className='mt-2 h-2 w-2 shrink-0 bg-[var(--gw-green)]' />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {story.relatedItems?.length ? (
        <section className='border-y border-[#d7dde3] bg-white px-6 py-18 sm:py-20'>
          <div className='mx-auto max-w-7xl'>
            <div
              className='border-l-4 border-[var(--gw-green)] pl-6 sm:pl-8'
              data-aos='fade-up'
            >
              <p className='text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-blue)]'>
                {story.relatedEyebrow}
              </p>
              <h2 className='mt-5 text-4xl font-bold text-[var(--gw-ink)]'>
                {story.relatedTitle}
              </h2>
            </div>

            <div className='mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
              {story.relatedItems.map((item, index) => (
                <Link
                  aria-label={item.title}
                  className='group grid min-h-[460px] overflow-hidden rounded-[4px] border border-[#d7dde3] bg-white outline-none transition-colors duration-200 hover:border-[var(--gw-blue)] focus-visible:ring-2 focus-visible:ring-[var(--gw-blue)] focus-visible:ring-offset-4'
                  data-aos='fade-up'
                  data-aos-delay={String(80 + index * 70)}
                  href={item.href}
                  key={item.slug}
                >
                  <div
                    className={`relative overflow-hidden bg-[#edf4f2] ${
                      item.slug === 'bogota' ? 'aspect-square' : 'min-h-[280px]'
                    }`}
                  >
                    <Image
                      alt={item.imageAlt}
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                      fill
                      sizes='(min-width: 1024px) 410px, 100vw'
                      src={item.image}
                    />
                    <div className='absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.62),rgba(15,23,42,0.05)_62%,rgba(15,23,42,0))]' />
                    <p className='absolute bottom-6 left-6 right-6 text-xs font-bold uppercase tracking-[0.18em] text-white drop-shadow'>
                      {item.imageLabel}
                    </p>
                  </div>
                  <div className='flex flex-col justify-between gap-8 p-7'>
                    <div>
                      <p className='text-xs font-bold uppercase tracking-[0.22em] text-[var(--gw-blue)]'>
                        {item.meta}
                      </p>
                      <h3 className='mt-4 text-3xl font-bold leading-tight text-[var(--gw-ink)]'>
                        {item.title}
                      </h3>
                      <p className='mt-5 text-base leading-7 text-[var(--color-muted)]'>
                        {item.excerpt}
                      </p>
                    </div>
                    <div className='flex items-center justify-between border-t border-[#d7dde3] pt-5'>
                      <span className='text-sm font-bold text-[var(--gw-ink)]'>
                        {item.label}
                      </span>
                      <span className='grid h-10 w-10 place-items-center border border-[#cbd5e1] bg-white text-[var(--gw-blue)] transition-colors duration-200 group-hover:border-[var(--gw-green)] group-hover:bg-[var(--gw-sand)]'>
                        <BrandIcon className='h-4 w-4' name='arrowRight' />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className='bg-white px-6 py-18 sm:py-20'>
        <div className='mx-auto max-w-7xl'>
          {hasGalleryMedia ? (
            <>
              <div className='grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end'>
                <div
                  className='border-l-4 border-[var(--gw-green)] pl-6 sm:pl-8'
                  data-aos='fade-up'
                >
                  <p className='text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-blue)]'>
                    {story.meta}
                  </p>
                  <h2 className='mt-5 text-4xl font-bold text-[var(--gw-ink)]'>
                    {story.galleryTitle}
                  </h2>
                </div>
              </div>

              {squareGalleryFeature ? (
                <div className='mt-10 grid gap-5 lg:grid-cols-2 lg:items-stretch'>
                  <GalleryImageItem
                    className='group relative aspect-square overflow-hidden rounded-[4px] border border-[#d7dde3] bg-[#edf4f2]'
                    image={squareGalleryFeature}
                    index={0}
                    sizes='(min-width: 1024px) 640px, 100vw'
                  />
                  <div className='grid gap-5 sm:grid-cols-2'>
                    {squareGalleryRest.map((image, index) => (
                      <GalleryImageItem
                        className='group relative aspect-square overflow-hidden rounded-[4px] border border-[#d7dde3] bg-[#edf4f2]'
                        image={image}
                        index={index + 1}
                        key={`${image.src}-${index + 1}`}
                        sizes='(min-width: 1024px) 310px, (min-width: 640px) 50vw, 100vw'
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className='mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
                  {story.galleryImages?.map((image, index) => (
                    <GalleryImageItem
                      className={getGalleryItemClass(image)}
                      image={image}
                      index={index}
                      key={`${image.src}-${index}`}
                      sizes={
                        image.variant === 'feature'
                          ? '(min-width: 1024px) 1280px, 100vw'
                          : image.variant === 'wide'
                            ? '(min-width: 1024px) 640px, 100vw'
                            : '(min-width: 1024px) 320px, 50vw'
                      }
                    />
                  ))}
                  {story.galleryVideo ? (
                    <VideoGalleryItem video={story.galleryVideo} />
                  ) : null}
                </div>
              )}
            </>
          ) : null}

          <div className={hasGalleryMedia ? 'mt-12' : ''} data-aos='fade-up'>
            <ActionLink href='/contacto' variant='solid'>
              {story.cta}
            </ActionLink>
          </div>
        </div>
      </section>
    </main>
  )
}
