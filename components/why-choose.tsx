'use client'

import { Shield, Factory, Settings, Headphones, Truck, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const FEATURES = [
  {
    icon: Shield,
    title: 'Heavy-Duty Steel Construction',
    desc: 'High-tensile steel and certified welding for equipment that withstands years of hard use.',
  },
  {
    icon: Factory,
    title: 'Factory Direct Manufacturing',
    desc: 'Buy straight from the makers — no middlemen, full quality control, complete transparency.',
  },
  {
    icon: Settings,
    title: 'Custom Engineering',
    desc: 'Tailored solutions and attachments designed around your exact operational requirements.',
  },
  {
    icon: Headphones,
    title: 'Reliable Support',
    desc: 'Responsive after-sales service and spare parts support that keeps your machines running.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Efficient production and dispatch so your equipment reaches you on time, every time.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    desc: 'Skilled fabricators and engineers with deep expertise in agricultural machinery.',
  },
]

import { useLanguage } from '@/components/language-context'

export function WhyChoose() {
  const { t } = useLanguage()

  const features = [
    { icon: Factory, title: t('why.f1Title'), desc: t('why.f1Desc') },
    { icon: Shield, title: t('why.f2Title'), desc: t('why.f2Desc') },
    { icon: Settings, title: t('why.f3Title'), desc: t('why.f3Desc') },
    { icon: Headphones, title: t('why.f4Title'), desc: t('why.f4Desc') },
    { icon: Truck, title: t('process.s4'), desc: t('process.s4Desc') },
    { icon: Users, title: t('about.stat1Label'), desc: t('about.desc1') },
  ]

  return (
    <section className="bg-navy py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">{t('why.tag')}</p>
          <h2 className="text-balance text-3xl font-bold uppercase sm:text-4xl lg:text-5xl">
            {t('why.title')}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-white/70">
            {t('why.sub')}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.06}>
              <div className="group flex h-full flex-col gap-4 bg-navy p-8 transition-colors hover:bg-white/[0.04]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  <feature.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{feature.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
