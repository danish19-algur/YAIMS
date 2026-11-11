'use client'

import { PenTool, Hammer, Flame, Paintbrush, ClipboardCheck, PackageCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const STEPS = [
  { icon: PenTool, title: 'Design', desc: 'Precision CAD engineering tailored to each requirement.' },
  { icon: Hammer, title: 'Fabrication', desc: 'Cutting and forming high-tensile steel to spec.' },
  { icon: Flame, title: 'Welding', desc: 'Certified welds for maximum structural strength.' },
  { icon: Paintbrush, title: 'Finishing', desc: 'Anti-corrosive coating and premium paint finish.' },
  { icon: ClipboardCheck, title: 'Quality Testing', desc: 'Rigorous inspection against strict standards.' },
  { icon: PackageCheck, title: 'Delivery', desc: 'Careful dispatch and on-time delivery to site.' },
]

import { useLanguage } from '@/components/language-context'

export function ManufacturingProcess() {
  const { t } = useLanguage()

  const steps = [
    { icon: PenTool, title: t('process.s1'), desc: t('process.s1Desc') },
    { icon: Hammer, title: t('process.s2'), desc: t('process.s2Desc') },
    { icon: Flame, title: t('process.s3'), desc: t('process.s3Desc') },
    { icon: Paintbrush, title: t('process.s4'), desc: t('process.s4Desc') },
    { icon: ClipboardCheck, title: t('cert.tag'), desc: t('cert.sub') },
    { icon: PackageCheck, title: t('about.stat2Label'), desc: t('about.desc2') },
  ]

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red">{t('process.tag')}</p>
          <h2 className="text-balance text-3xl font-bold uppercase text-navy sm:text-4xl lg:text-5xl">
            {t('process.title')}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-steel">
            {t('process.sub')}
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-navy/20 to-transparent lg:block" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-secondary bg-navy text-white shadow-lg">
                    <step.icon className="h-7 w-7" />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
