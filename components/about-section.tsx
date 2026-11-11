'use client'

import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const STATS = [
  { value: '15+', label: 'Years of Expertise' },
  { value: '2000+', label: 'Machines Delivered' },
  { value: '6', label: 'Product Lines' },
  { value: '100%', label: 'In-House Manufacturing' },
]

const POINTS = [
  'ISO 9001:2015 certified quality management',
  'Skilled engineers and certified welders',
  'Strict quality control at every stage',
  'Trusted by farmers and industries across Karnataka',
]

import { useLanguage } from '@/components/language-context'

export function AboutSection() {
  const { t } = useLanguage()

  const stats = [
    { value: t('about.stat1Num'), label: t('about.stat1Label') },
    { value: t('about.stat2Num'), label: t('about.stat2Label') },
    { value: '6', label: t('products.tag') },
    { value: t('about.stat3Num'), label: t('about.stat3Label') },
  ]

  const points = [
    t('cert.title'),
    t('process.s2'),
    t('process.sub'),
    t('about.title'),
  ]

  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal y={32}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
                <img
                  src="/images/yaims-real/trailer-tipping-jambagi-works.jpg"
                  alt="YAIMS Steel Industries Jamkhandi manufacturing works floor"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 hidden rounded-xl bg-gold px-6 py-5 shadow-lg sm:block lg:-right-6">
                <p className="font-heading text-3xl font-bold text-navy">15+</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy/80">{t('about.stat1Label')}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={32}>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red">{t('about.tag')}</p>
              <h2 className="text-balance text-3xl font-bold uppercase text-navy sm:text-4xl">
                {t('about.title')}
              </h2>
              <div className="mt-5 space-y-4 leading-relaxed text-steel">
                <p>{t('about.desc1')}</p>
                <p>{t('about.desc2')}</p>
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm font-medium text-navy">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Statistics */}
        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-navy px-6 py-8 text-center">
                <p className="font-heading text-3xl font-bold text-gold sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/70 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
