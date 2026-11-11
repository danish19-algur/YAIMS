'use client'

import { motion } from 'motion/react'
import { ArrowRight, CalendarCheck, CheckCircle2, ShieldCheck, FileText, Phone, MessageCircle } from 'lucide-react'
import { COMPANY } from '@/lib/site-data'
import { useLanguage } from '@/components/language-context'

type HeroProps = {
  onOpenMediaModal?: (src: string, title: string, category: string) => void
}

const TRACTOR_BRANDS = [
  'Mahindra',
  'Swaraj',
  'John Deere',
  'New Holland',
  'Sonalika',
  'Massey Ferguson',
  'Kubota',
  'Farmtrac',
]

export function Hero({ onOpenMediaModal }: HeroProps) {
  const { t } = useLanguage()

  const badges = [t('hero.b1'), t('hero.b2'), t('hero.b3'), t('hero.b4')]

  const whatsappHeroUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    'Hello YAIMS Steel Industries, I am interested in tractor dozers / trailers. Please share price details.'
  )}`

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden transform-gpu">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/yaims-real/trailer-tipping-4wheel.jpg"
          alt="YAIMS heavy duty 4-wheel tipping trailer"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center brightness-90 transform-gpu"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-transparent to-navy/50" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-wrap items-center gap-4"
          >
            <img
              src="/images/yaims-logo.png?v=3"
              alt="YAIMS Steel Industries Official Logo"
              className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 bg-transparent object-contain"
            />
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {t('hero.badgeTagline')}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur w-fit">
                <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                {t('hero.badgeIso')}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/90 sm:text-lg"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Government Subsidy & GST Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-950/70 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>{t('hero.subsidyBadge')}</span>
            </div>
          </motion.div>

          {/* High Conversion Primary CTAs: Direct WhatsApp & Call */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-green-600/30 transition-all hover:bg-[#20bd5a] hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              {t('hero.btnWhatsApp')}
            </a>

            <a
              href={`tel:+91${COMPANY.phones[0]}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-7 py-3.5 text-base font-bold text-navy shadow-lg shadow-gold/25 transition-all hover:bg-gold/90 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="h-5 w-5" />
              {t('hero.btnCallSales')}
            </a>
          </motion.div>

          {/* Secondary Actions: Products, Visiting Card, Factory Visit */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 flex flex-wrap gap-2.5"
          >
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-all hover:border-gold/60 hover:bg-white/20"
            >
              {t('hero.btnProducts')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-gold" />
            </a>

            <button
              type="button"
              onClick={() => onOpenMediaModal?.(COMPANY.visitingCardImage, 'Official Visiting Card (9448436605)', 'Contact Card')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition-all hover:border-white/40 hover:bg-white/15"
            >
              <FileText className="h-4 w-4 text-gold" />
              {t('hero.btnCard')}
            </button>

            <a
              href="#factory-visit"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-white/80 transition-all hover:bg-white/10 hover:text-white"
            >
              <CalendarCheck className="h-4 w-4 text-gold" />
              {t('hero.btnVisit')}
            </a>
          </motion.div>

          {/* Tractor Brand Compatibility Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 rounded-2xl border border-white/15 bg-navy/60 p-4 backdrop-blur-md sm:p-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/10 pb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-gold">
                {t('hero.tractorBrandsTitle')}
              </span>
              <span className="text-[11px] font-medium text-white/70">
                {t('hero.tractorCompatibilityPrompt')}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {TRACTOR_BRANDS.map((brand) => (
                <span
                  key={brand}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white/90 transition-colors hover:border-gold/50 hover:bg-gold/10 hover:text-gold"
                >
                  <CheckCircle2 className="h-3 w-3 text-gold" />
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
          >
            {badges.map((badge) => (
              <li key={badge} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/90">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                {badge}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
