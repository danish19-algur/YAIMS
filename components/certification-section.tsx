'use client'

import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CERTIFICATION } from '@/lib/site-data'

const HIGHLIGHTS = [
  { label: 'Standard', value: CERTIFICATION.standard },
  { label: 'Certificate No.', value: CERTIFICATION.certNo },
  { label: 'Issued', value: CERTIFICATION.issued },
  { label: 'Certifying Body', value: 'IQCS UK Ltd' },
]

import { useLanguage } from '@/components/language-context'

export function CertificationSection() {
  const { t } = useLanguage()

  const highlights = [
    { label: t('cert.standardLabel'), value: CERTIFICATION.standard },
    { label: t('cert.certNoLabel'), value: CERTIFICATION.certNo },
    { label: t('cert.issuedLabel'), value: CERTIFICATION.issued },
    { label: t('cert.bodyLabel'), value: 'IQCS UK Ltd' },
  ]

  return (
    <section id="certification" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal y={32}>
            <div className="relative mx-auto max-w-md">
              <div className="overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-xl">
                <img
                  src={`${CERTIFICATION.image}?v=2`}
                  alt={`${CERTIFICATION.standard} Certificate of Registration for Y.A.I.M.S. Steel Industries`}
                  className="w-full rounded-lg object-contain"
                />
              </div>
              <div className="absolute -right-3 -top-3 flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy shadow-lg lg:-right-5 lg:-top-5 lg:h-20 lg:w-20">
                <div className="text-center leading-none">
                  <Award className="mx-auto h-5 w-5 lg:h-6 lg:w-6" />
                  <span className="mt-1 block text-[9px] font-bold uppercase tracking-wide lg:text-[10px]">
                    ISO 9001
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={32}>
            <div>
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-red">
                <ShieldCheck className="h-4 w-4" />
                {t('cert.tag')}
              </p>
              <h2 className="text-balance text-3xl font-bold uppercase text-navy sm:text-4xl">
                {t('cert.title')}
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-steel">
                {t('cert.sub')}
              </p>

              <div className="mt-6 rounded-xl border border-border bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-steel">{t('cert.scopeLabel')}</p>
                <p className="mt-2 flex items-start gap-2 text-sm font-medium leading-relaxed text-navy">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {CERTIFICATION.scope}
                </p>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
                {highlights.map((item) => (
                  <div key={item.label} className="bg-white px-5 py-4">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-steel">{item.label}</dt>
                    <dd className="mt-1 font-heading text-lg font-bold text-navy">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
