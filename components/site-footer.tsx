'use client'

import { Phone, MapPin, MessageCircle } from 'lucide-react'
import { COMPANY, NAV_LINKS, PRODUCTS } from '@/lib/site-data'

const SOCIALS = [
  {
    label: 'Facebook',
    path: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z',
  },
  {
    label: 'Instagram',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z',
  },
  {
    label: 'YouTube',
    path: 'M23.5 6.2a3 3 0 0 0-2.12-2.12C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.53A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.12c1.88.53 9.38.53 9.38.53s7.5 0 9.38-.53a3 3 0 0 0 2.12-2.12A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z',
  },
]

import { useLanguage } from '@/components/language-context'

export function SiteFooter() {
  const { t, lang } = useLanguage()

  const getTranslatedProductName = (p: Product) => {
    if (lang === 'kn') {
      if (p.slug === 'tractor-dozers') return t('p.dozerName')
      if (p.slug === 'agricultural-trailers') return t('p.trailer4wName')
      if (p.slug === 'sugarcane-trailer') return t('p.sugarcaneName')
      if (p.slug === 'high-tipping-trailer') return t('p.highTippingName')
      if (p.slug === 'agro-implements') return t('p.agroName')
    }
    return p.name
  }

  const navLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.certification'), href: '#certification' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.gallery'), href: '#gallery' },
    { label: t('nav.faq'), href: '#faq' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  return (
    <footer className="bg-[#081b34] text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/yaims-logo.png?v=3"
                alt="YAIMS Steel Industries Logo"
                className="h-10 w-10 shrink-0 object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="font-heading text-lg font-bold tracking-wide text-white">
                  {COMPANY.shortName}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                  Steel Industries
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {t('footer.tagline')}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {t('hero.subtitle')}
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white/80 transition-colors hover:bg-gold hover:text-navy"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">{t('footer.quickLinks')}</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">{t('footer.productsHeader')}</h3>
            <ul className="mt-4 space-y-2.5">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <a href="#products" className="text-sm text-white/60 transition-colors hover:text-gold">
                    {getTranslatedProductName(p)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">{t('footer.contactHeader')}</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm text-white/60">
                  {COMPANY.phones.map((p) => (
                    <a key={p} href={`tel:+91${p}`} className="block transition-colors hover:text-gold">
                      +91 {p}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm leading-relaxed text-white/60">
                  {COMPANY.address.line1}, {COMPANY.address.line2}, {COMPANY.address.line3},{' '}
                  {COMPANY.address.line4}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  {t('hero.btnWhatsApp')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
          <p className="text-xs text-white/50">{t('footer.isoNote')}</p>
        </div>
      </div>
    </footer>
  )
}
