'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { PRODUCTS } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'

import { useLanguage } from '@/components/language-context'

export function ProductCategories() {
  const { t, lang } = useLanguage()

  const getTranslatedProductName = (slug: string, fallback: string) => {
    if (lang === 'kn') {
      if (slug === 'tractor-dozers') return t('p.dozerName')
      if (slug === 'agricultural-trailers') return t('p.trailer4wName')
      if (slug === 'sugarcane-trailer') return t('p.sugarcaneName')
      if (slug === 'high-tipping-trailer') return t('p.highTippingName')
      if (slug === 'agro-implements') return t('p.agroName')
    }
    return fallback
  }

  const getTranslatedProductDesc = (slug: string, fallback: string) => {
    if (lang === 'kn') {
      if (slug === 'tractor-dozers') return t('p.dozerDesc')
      if (slug === 'agricultural-trailers') return t('p.trailer4wDesc')
      if (slug === 'sugarcane-trailer') return t('p.sugarcaneDesc')
      if (slug === 'high-tipping-trailer') return t('p.highTippingDesc')
      if (slug === 'agro-implements') return t('p.agroDesc')
    }
    return fallback
  }

  return (
    <section id="products" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red">{t('categories.tag')}</p>
          <h2 className="text-balance text-3xl font-bold uppercase text-navy sm:text-4xl lg:text-5xl">
            {t('categories.title')}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-steel">
            {t('categories.sub')}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => {
            const pName = getTranslatedProductName(product.slug, product.name)
            const pDesc = getTranslatedProductDesc(product.slug, product.description)

            return (
              <Reveal key={product.slug} delay={i * 0.06}>
                <motion.a
                  href="#featured"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={product.image || '/placeholder.svg'}
                      alt={pName}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold text-navy">{pName}</h3>
                    <p className="mt-2 flex-1 whitespace-pre-line text-sm leading-relaxed text-steel">{pDesc}</p>
                    {product.highlights && product.highlights.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {product.highlights.map((h) => (
                          <span
                            key={h}
                            className="inline-flex items-center gap-1 rounded bg-gold/10 px-2 py-0.5 text-[11px] font-bold text-navy border border-gold/30"
                          >
                            <span className="h-1 w-1 rounded-full bg-gold" />
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red transition-colors group-hover:text-navy">
                      {t('categories.learnMore')}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </motion.a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
