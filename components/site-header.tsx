'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Phone, CreditCard, MessageCircle } from 'lucide-react'
import { COMPANY } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/language-context'
import { LanguageSelector } from '@/components/language-selector'

type SiteHeaderProps = {
  onOpenMediaModal?: (src: string, title: string, category: string) => void
}

export function SiteHeader({ onOpenMediaModal }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transform-gpu transition-all duration-300',
        scrolled
          ? 'bg-navy/95 shadow-xl shadow-navy/20 backdrop-blur-md border-b border-white/10'
          : 'bg-navy/85 backdrop-blur-sm border-b border-white/5',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group" aria-label={`${COMPANY.name} home`}>
          <img
            src="/images/yaims-logo.png?v=3"
            alt="YAIMS Steel Industries Logo"
            className="h-10 w-10 shrink-0 bg-transparent object-contain transition-transform duration-300 group-hover:scale-105 lg:h-11 lg:w-11"
          />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-bold tracking-wide text-white lg:text-xl">
              {COMPANY.shortName}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold/90 lg:text-[11px]">
              Steel Industries
            </span>
          </span>
        </a>

        {/* Primary Desktop Navigation - Increased Spacing & Whitespace */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-xs font-bold uppercase tracking-wider text-white/80 transition-colors hover:text-gold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Utility Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Government Portal Style Language Selector Dropdown (Subtle Pill Style) */}
          <LanguageSelector />

          {/* Compact Visiting Card Icon Button (Saves Header Width) */}
          <button
            type="button"
            onClick={() => onOpenMediaModal?.(COMPANY.visitingCardImage, 'Official Visiting Card (9035614650)', 'Contact Card')}
            className="hidden items-center justify-center rounded-lg border border-white/15 bg-white/5 p-2 text-white/80 transition-all hover:border-gold/50 hover:bg-white/10 hover:text-gold sm:flex"
            title={t('header.visitingCard')}
            aria-label={t('header.visitingCard')}
          >
            <CreditCard className="h-4 w-4 text-gold" />
          </button>

          {/* Secondary Call Action */}
          <a
            href={`tel:+91${COMPANY.phones[1]}`}
            className="hidden items-center gap-1.5 text-xs font-semibold text-white/80 transition-colors hover:text-gold lg:flex border-l border-white/10 pl-3"
            title="Call Factory Direct"
          >
            <Phone className="h-3.5 w-3.5 text-gold/90" />
            <span className="tracking-wide">9035614650</span>
          </a>

          {/* Primary Call-to-Action: Get Quote */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-gold px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-navy shadow-md transition-all hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20 hover:scale-105 active:scale-95 ring-2 ring-gold/20"
          >
            {t('header.getQuote')}
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-white/10 bg-navy/98 backdrop-blur-md lg:hidden',
          open ? 'max-h-96' : 'max-h-0',
          'transition-[max-height] duration-300 ease-in-out',
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-white/90 transition-colors hover:bg-white/10 hover:text-gold"
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={() => {
              setOpen(false)
              onOpenMediaModal?.(COMPANY.visitingCardImage, 'Official Visiting Card (9035614650)', 'Contact Card')
            }}
            className="flex items-center gap-2 rounded-md px-3 py-2.5 text-xs font-semibold text-gold hover:bg-white/10"
          >
            <CreditCard className="h-4 w-4" />
            {t('header.visitingCard')} (9035614650)
          </button>

          <a
            href={`tel:+91${COMPANY.phones[0]}`}
            className="flex items-center gap-2 rounded-md px-3 py-2.5 text-xs font-semibold text-white/90 hover:bg-white/10"
          >
            <Phone className="h-4 w-4 text-gold" />
            +91 {COMPANY.phones[0]} / {COMPANY.phones[1]}
          </a>

          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent('Hello YAIMS Steel Industries, I am interested in tractor dozers / trailers.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-3 py-2.5 text-xs font-bold text-white shadow-sm mt-1"
          >
            <MessageCircle className="h-4 w-4" />
            {t('hero.btnWhatsApp')}
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-md bg-gold px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-navy shadow-md"
          >
            {t('header.getQuote')}
          </a>
        </nav>
      </div>
    </header>
  )
}
