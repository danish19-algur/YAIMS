'use client'

import { useState, type FormEvent } from 'react'
import { Phone, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react'
import { COMPANY, PRODUCTS, Product } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/components/language-context'

export function ContactSection() {
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
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '').trim()
    const phone = String(data.get('phone') || '').trim()
    const product = String(data.get('product') || '').trim()
    const message = String(data.get('message') || '').trim()

    const text = encodeURIComponent(
      `Hello ${COMPANY.shortName}, I would like to request an instant factory price quote.\n\n` +
      `Name: ${name}\n` +
      `Mobile Phone: ${phone}\n` +
      `Product Required: ${product}\n` +
      `Message: ${message}`
    )
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red">{t('contact.tag')}</p>
          <h2 className="text-balance text-3xl font-bold uppercase text-navy sm:text-4xl lg:text-5xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-steel">
            {t('contact.sub')}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Info + map */}
          <Reveal y={32} className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold">
                  <Phone className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-steel">{t('contact.phoneTitle')}</p>
                {COMPANY.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:+91${p}`}
                    className="block font-semibold text-navy transition-colors hover:text-red"
                  >
                    +91 {p}
                  </a>
                ))}
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold">
                  <MapPin className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-steel">{t('contact.addressTitle')}</p>
                <address className="mt-1 not-italic text-sm leading-relaxed text-navy">
                  {COMPANY.address.line1}
                  <br />
                  {COMPANY.address.line2}
                  <br />
                  {COMPANY.address.line3}
                  <br />
                  {COMPANY.address.line4}
                </address>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <iframe
                title="YAIMS Steel Industries location map"
                src="https://www.google.com/maps?q=KSSIDC+Plot+No.10,+Rambag+Industrial+Estate,+Jambagi+Road,+Jamkhandi,+Karnataka+587301&output=embed"
                className="h-72 w-full lg:h-[320px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between gap-3 border-t border-border bg-white px-4 py-3">
                <div className="flex items-center gap-2 overflow-hidden">
                  <MapPin className="h-4 w-4 shrink-0 text-red" />
                  <span className="truncate text-xs font-semibold text-navy">
                    {t('contact.locationShort')}
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=KSSIDC+Plot+No.10,+Rambag+Industrial+Estate,+Jambagi+Road,+Jamkhandi,+Karnataka+587301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-lg bg-navy px-3 py-1.5 text-xs font-bold text-gold shadow-sm transition-all hover:bg-navy/90"
                >
                  {t('contact.getDirections')}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Enquiry form */}
          <Reveal delay={0.1} y={32}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between gap-2 border-b border-border pb-3">
                <h3 className="text-xl font-bold text-navy">{t('contact.formTitle')}</h3>
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                  GST Invoicing
                </span>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h4 className="text-lg font-bold text-navy">{t('contact.successTitle')}</h4>
                  <p className="text-sm text-steel">
                    {t('contact.successDesc')}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-semibold text-navy hover:underline"
                  >
                    {t('contact.btnAnother')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="c-name" className="mb-1.5 block text-sm font-semibold text-navy">
                      {t('contact.fieldName')}
                    </label>
                    <input
                      id="c-name"
                      name="name"
                      required
                      placeholder={t('contact.placeholderName')}
                      className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="c-phone" className="mb-1.5 block text-sm font-semibold text-navy">
                      {t('contact.fieldPhone')}
                    </label>
                    <input
                      id="c-phone"
                      name="phone"
                      type="tel"
                      required
                      pattern="[6-9][0-9]{9}"
                      maxLength={10}
                      title="Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9"
                      placeholder={t('contact.placeholderPhone')}
                      className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="c-product" className="mb-1.5 block text-sm font-semibold text-navy">
                      {t('contact.fieldProduct')}
                    </label>
                    <select
                      id="c-product"
                      name="product"
                      required
                      defaultValue=""
                      className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
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
                    <label htmlFor="c-message" className="mb-1.5 block text-sm font-semibold text-navy">
                      {t('contact.fieldMessage')}
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      rows={3}
                      required
                      placeholder={t('contact.placeholderMessage')}
                      className="w-full resize-none rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                    />
                  </div>

                  <p className="text-xs text-steel">
                    💡 <span className="font-medium">{t('contact.subsidyNote')}</span>
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row pt-2">
                    <button
                      type="submit"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-navy/90 shadow-md"
                    >
                      <Send className="h-5 w-5" />
                      {t('contact.btnSubmit')}
                    </button>
                    <a
                      href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
                        'Hello YAIMS Steel Industries, I would like to enquire about your agricultural and industrial equipment.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-bold text-white transition-all hover:bg-[#20bd5a] shadow-lg shadow-green-600/25"
                    >
                      <MessageCircle className="h-5 w-5" />
                      {t('contact.btnWhatsApp')}
                    </a>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
