import Image from 'next/image'
import { getLocale, getMessages } from 'next-intl/server'
import { PhoneConversionLink } from '@/components/global/PhoneConversionLink'
import { Link } from '@/i18n/navigation'

type FooterLink = {
  href: string
  label: string
}

type FooterWarehouse = {
  address: string[]
  company?: string
  phone: string
  phoneHref: string
  title: string
}

type FooterSocial = {
  href: string
  label: string
  shortLabel: string
}

type FooterCopy = {
  brandAlt: string
  companyTitle: string
  copyright: string
  designedBy: string
  infoTitle: string
  legalLinks: FooterLink[]
  navLinks: FooterLink[]
  ownedBy: string
  socialLinks: FooterSocial[]
  summary: string
  warehouseTitle: string
}

type FooterMessages = {
  Footer?: Partial<FooterCopy> & {
    legalLinks?: Array<Partial<FooterLink>>
    navLinks?: Array<Partial<FooterLink>>
    socialLinks?: Array<Partial<FooterSocial>>
  }
}

const warehouses: Record<'en' | 'es', FooterWarehouse[]> = {
  en: [
    {
      address: ['10049 NW 89th Ave unit 4', 'Medley, FL 33178'],
      phone: '+1 (786) 661-0046',
      phoneHref: 'tel:+17866610046',
      title: 'Miami - Warehouse',
    },
    {
      address: ['Cra. 129 #17f-74', 'Bogota, Colombia'],
      phone: '+57 314 3002760',
      phoneHref: 'tel:+573143002760',
      title: 'Bogota - Warehouse',
    },
  ],
  es: [
    {
      address: ['10049 NW 89th Ave unit 4', 'Medley, FL 33178'],
      phone: '+1 (786) 661-0046',
      phoneHref: 'tel:+17866610046',
      title: 'Miami - Warehouse',
    },
    {
      address: ['Cra. 129 #17f-74', 'Bogotá, Colombia'],
      phone: '+57 314 3002760',
      phoneHref: 'tel:+573143002760',
      title: 'Bogotá - Warehouse',
    },
  ],
}

const instagramUrl = 'https://www.instagram.com/greenwayllc/'

const fallbackCopy: Record<'en' | 'es', FooterCopy> = {
  en: {
    brandAlt: 'Green Way International LLC',
    companyTitle: 'Company',
    copyright: 'All rights reserved.',
    designedBy: 'Designed by Fastwasas.',
    infoTitle: 'Information',
    legalLinks: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms-and-conditions', label: 'Terms and Conditions' },
      { href: '/pqrs', label: 'PQRS' },
    ],
    navLinks: [
      { href: '/', label: 'Home' },
      { href: '/productosservicios', label: 'Materials and Services' },
      { href: '/about', label: 'About Us' },
      { href: '/comotrabajamos', label: 'How We Work' },
      { href: '/contacto', label: 'Contact' },
    ],
    ownedBy: 'Property of Green Way.',
    socialLinks: [
      { href: '#', label: 'Instagram', shortLabel: 'Ig' },
      { href: '#', label: 'Facebook', shortLabel: 'Fb' },
      { href: '#', label: 'LinkedIn', shortLabel: 'In' },
      { href: '#', label: 'WhatsApp', shortLabel: 'Wa' },
    ],
    summary:
      'Green Way International recovers, purchases, and coordinates industrial metal materials with focus on tungsten, carbide, specialty alloys, stainless steels, and non-ferrous metals.',
    warehouseTitle: 'Warehouses',
  },
  es: {
    brandAlt: 'Green Way International LLC',
    companyTitle: 'Empresa',
    copyright: 'Todos los derechos reservados.',
    designedBy: 'Diseñado por Fastwasas.',
    infoTitle: 'Información',
    legalLinks: [
      { href: '/politica-de-privacidad', label: 'Política de privacidad' },
      { href: '/terminos-y-condiciones', label: 'Términos y condiciones' },
      { href: '/pqrs', label: 'PQRS' },
    ],
    navLinks: [
      { href: '/', label: 'Inicio' },
      { href: '/productosservicios', label: 'Materiales y Servicios' },
      { href: '/about', label: 'Quienes Somos' },
      { href: '/comotrabajamos', label: 'Como Trabajamos' },
      { href: '/contacto', label: 'Contacto' },
    ],
    ownedBy: 'Propiedad de Green Way.',
    socialLinks: [
      { href: '#', label: 'Instagram', shortLabel: 'Ig' },
      { href: '#', label: 'Facebook', shortLabel: 'Fb' },
      { href: '#', label: 'LinkedIn', shortLabel: 'In' },
      { href: '#', label: 'WhatsApp', shortLabel: 'Wa' },
    ],
    summary:
      'Green Way International recupera, compra y coordina materiales metálicos industriales con enfoque en tungsteno, carburo, aleaciones especiales, inoxidables y no ferrosos.',
    warehouseTitle: 'Bodegas',
  },
}

function getLinks(
  messages: Array<Partial<FooterLink>> | undefined,
  fallback: FooterLink[]
) {
  return fallback.map((link, index) => {
    const message = messages?.[index]

    return {
      href: message?.href ?? link.href,
      label: message?.label ?? link.label,
    }
  })
}

export async function SiteFooter() {
  const locale = await getLocale()
  const messages = (await getMessages()) as FooterMessages
  const localeKey = locale === 'en' ? 'en' : 'es'
  const fallback = fallbackCopy[localeKey]
  const footer = messages.Footer
  const year = new Date().getFullYear()
  const navLinks = getLinks(footer?.navLinks, fallback.navLinks)
  const legalLinks = getLinks(footer?.legalLinks, fallback.legalLinks)
  const socialLinks = [
    {
      href: instagramUrl,
      label: 'Instagram',
      shortLabel: 'Ig',
    },
  ]
  const materialLinks =
    localeKey === 'en'
      ? [
          { href: '/tungsten', label: 'Tungsten and wolfram buying' },
          { href: '/tungsten-carbide', label: 'Tungsten carbide buying' },
        ]
      : [
          { href: '/tungsteno', label: 'Compra de tungsteno y wolframio' },
          {
            href: '/carburo-de-tungsteno',
            label: 'Compra de carburo de tungsteno',
          },
        ]

  return (
    <footer className='border-t border-[#d7dde3] bg-white' data-aos='fade-up'>
      <div className='mx-auto max-w-7xl px-6 py-14'>
        <div className='grid gap-10 lg:grid-cols-[1.15fr_0.8fr_1.25fr_0.85fr]'>
          <div>
            <Link
              aria-label={footer?.brandAlt ?? fallback.brandAlt}
              className='inline-flex rounded-[4px] outline-none focus-visible:ring-2 focus-visible:ring-[var(--gw-green)] focus-visible:ring-offset-4'
              href='/'
            >
              <span className='relative block h-[112px] w-[172px]'>
                <Image
                  alt={footer?.brandAlt ?? fallback.brandAlt}
                  className='object-contain object-left'
                  fill
                  sizes='172px'
                  src='/brand/greenway-logo-full.webp'
                />
              </span>
            </Link>
            <p className='mt-6 max-w-sm text-base leading-7 text-[var(--color-muted)]'>
              {footer?.summary ?? fallback.summary}
            </p>
            <div className='mt-7 flex flex-wrap gap-3'>
              {socialLinks.map(link => (
                <a
                  aria-label={link.label}
                  className='grid h-12 w-12 place-items-center rounded-[4px] border border-[#d7dde3] bg-[var(--gw-sand)] text-sm font-bold text-[var(--gw-blue)] transition-colors duration-200 hover:border-[var(--gw-green)] hover:bg-white hover:text-[var(--gw-green)]'
                  href={link.href}
                  key={link.label}
                  rel={link.href === '#' ? undefined : 'noreferrer'}
                  target={link.href === '#' ? undefined : '_blank'}
                >
                  {link.shortLabel}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label={footer?.infoTitle ?? fallback.infoTitle}>
            <h2 className='text-xl font-bold text-[var(--gw-ink)]'>
              {footer?.companyTitle ?? fallback.companyTitle}
            </h2>
            <ul className='mt-5 space-y-4 text-base text-[var(--color-muted)]'>
              {navLinks.map(link => (
                <li key={link.label}>
                  <Link
                    className='transition-colors duration-200 hover:text-[var(--gw-green)]'
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className='text-xl font-bold text-[var(--gw-ink)]'>
              {footer?.warehouseTitle ?? fallback.warehouseTitle}
            </h2>
            <div className='mt-6 space-y-7'>
              {warehouses[localeKey].map(warehouse => (
                <section key={warehouse.title}>
                  <h3 className='text-lg font-bold text-[var(--gw-ink)]'>
                    {warehouse.title}
                  </h3>
                  {warehouse.company ? (
                    <p className='mt-3 text-base leading-7 text-[var(--color-muted)]'>
                      {warehouse.company}
                    </p>
                  ) : null}
                  <address className='mt-2 not-italic text-base leading-7 text-[var(--color-muted)]'>
                    {warehouse.address.map(line => (
                      <span className='block' key={line}>
                        {line}
                      </span>
                    ))}
                  </address>
                  <PhoneConversionLink
                    className='mt-2 inline-flex text-base font-semibold text-[var(--gw-ink)] transition-colors duration-200 hover:text-[var(--gw-green)]'
                    href={warehouse.phoneHref}
                  >
                    {warehouse.phone}
                  </PhoneConversionLink>
                </section>
              ))}
            </div>
          </div>

          <nav aria-label={footer?.infoTitle ?? fallback.infoTitle}>
            <h2 className='text-xl font-bold text-[var(--gw-ink)]'>
              {footer?.infoTitle ?? fallback.infoTitle}
            </h2>
            <ul className='mt-5 space-y-4 text-base text-[var(--color-muted)]'>
              {legalLinks.map(link => (
                <li key={link.label}>
                  <Link
                    className='transition-colors duration-200 hover:text-[var(--gw-green)]'
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='mt-8 border-t border-[#d7dde3] pt-6'>
              <h3 className='text-base font-bold text-[var(--gw-ink)]'>
                {localeKey === 'en' ? 'Priority materials' : 'Materiales clave'}
              </h3>
              <ul className='mt-4 space-y-4 text-base text-[var(--color-muted)]'>
                {materialLinks.map(link => (
                  <li key={link.label}>
                    <Link
                      className='transition-colors duration-200 hover:text-[var(--gw-green)]'
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className='mt-12 flex flex-col gap-3 border-t border-[#d7dde3] pt-6 text-sm font-medium text-[var(--color-muted)] md:flex-row md:items-center md:justify-between'>
          <p>
            © {year} Green Way International LLC.{' '}
            {footer?.copyright ?? fallback.copyright}
          </p>
          <p>
            {footer?.ownedBy ?? fallback.ownedBy}{' '}
            {footer?.designedBy ?? fallback.designedBy}
          </p>
        </div>
      </div>
    </footer>
  )
}
