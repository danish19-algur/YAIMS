'use client'

import { useState, type FormEvent } from 'react'
import { CalendarCheck, MapPin, Clock } from 'lucide-react'
import { COMPANY, PRODUCTS, Product } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/components/language-context'

export function FactoryVisit() {
  const [submitted, setSubmitted] = useState(false)
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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const phone = String(data.get('phone') || '').trim()
    const product = String(data.get('product') || '').trim()
    const date = String(data.get('date') || '').trim()
    const message = String(data.get('message') || '').trim()

    const text = encodeURIComponent(
      `Hello ${COMPANY.shortName}, I would like to schedule a personal factory & machinery demonstration.\n\n` +
      `Name: ${name}\n` +
      `Mobile Phone: ${phone}\n` +
      `Interested Equipment: ${product}\n` +
      `Preferred Visit Date: ${date}\n` +
      `Message: ${message}`
    )
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section id="factory-visit" className="relative isolate overflow-hidden bg-navy py-20 text-white lg:py-28">
      <div className="absolute inset-0 -z-10 opacity-10">
        <img src="/images/factory.png" alt="" aria-hidden className="h-full w-full object-cover" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal y={32}>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">{t('visit.tag')}</p>
              <h2 className="text-balance text-3xl font-bold uppercase sm:text-4xl lg:text-5xl">
                {t('visit.title')}
              </h2>
              <p className="mt-4 max-w-lg text-pretty leading-relaxed text-white/75">
                {t('visit.sub')}
              </p>

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{t('contact.addressTitle')}</p>
                    <p className="text-sm text-white/70">
                      {COMPANY.address.line1}, {COMPANY.address.line2}, {COMPANY.address.line3},{' '}
                      {COMPANY.address.line4}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{t('contact.phoneTitle')}</p>
                    <p className="text-sm text-white/70">9448436605 / 9035614650 (Mon - Sat 9 AM - 6 PM)</p>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={32}>
            <div className="rounded-2xl bg-white p-6 text-navy shadow-2xl sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-emerald-600">
                    <CalendarCheck className="h-8 w-8" />
                  </span>
                  <h3 className="text-xl font-bold">{t('visit.successTitle')}</h3>
                  <p className="text-sm text-steel">
                    {t('visit.successDesc')}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm font-semibold text-navy hover:underline"
                  >
                    {t('visit.btnAnother')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="v-name" className="mb-1.5 block text-sm font-semibold">
                      {t('contact.fieldName')}
                    </label>
                    <input
                      id="v-name"
                      name="name"
                      type="text"
                      placeholder={t('contact.placeholderName')}
                      required
                      className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="v-phone" className="mb-1.5 block text-sm font-semibold">
                      {t('contact.fieldPhone')}
                    </label>
                    <input
                      id="v-phone"
                      name="phone"
                      type="tel"
                      required
                      pattern="[6-9][0-9]{9}"
                      maxLength={10}
                      title="Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9"
                      placeholder={t('contact.placeholderPhone')}
                      className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="v-product" className="mb-1.5 block text-sm font-semibold">
                      {t('contact.fieldProduct')}
                    </label>
                    <select
                      id="v-product"
                      name="product"
                      required
                      defaultValue=""
                      className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                    >
                      <option value="" disabled>
                        {t('contact.selectProductDefault')}
                      </option>
                      {PRODUCTS.map((p) => (
                        <option key={p.slug} value={p.name}>
                          {getTranslatedProductName(p)}
                        </option>
                      ))}
                      <option value="Custom Fabrication / Other Equipment">
                        {t('contact.productOptionOther')}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="v-date" className="mb-1.5 block text-sm font-semibold">
                      {t('visit.fieldDate')}
                    </label>
                    <input
                      id="v-date"
                      name="date"
                      type="date"
                      required
                      className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="v-message" className="mb-1.5 block text-sm font-semibold">
                      {t('contact.fieldMessage')}
                    </label>
                    <textarea
                      id="v-message"
                      name="message"
                      rows={3}
                      placeholder={t('visit.placeholderMessage')}
                      className="w-full resize-none rounded-md border border-border bg-secondary px-4 py-2.5 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-navy/90"
                  >
                    <CalendarCheck className="h-5 w-5 text-gold" />
                    {t('hero.btnVisit')}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
