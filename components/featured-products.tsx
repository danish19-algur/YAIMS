'use client'

import { useState } from 'react'
import { Check, MessageSquare, Wrench, ArrowUpRight } from 'lucide-react'
import { PRODUCTS, Product } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

import { useLanguage } from '@/components/language-context'

type FeaturedProductsProps = {
  onSelectProduct?: (product: Product) => void
}

export function FeaturedProducts({ onSelectProduct }: FeaturedProductsProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const { t, lang } = useLanguage()

  const categories = [
    { key: 'all', label: t('products.catAll') },
    { key: 'dozers-loaders', label: t('products.catDozers') },
    { key: 'trailers', label: t('products.catTrailers') },
    { key: 'agro', label: t('products.catAgro') },
  ]

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory)

  // Helper to translate product text dynamically
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

  const getTranslatedProductDesc = (p: Product) => {
    if (lang === 'kn') {
      if (p.slug === 'tractor-dozers') return t('p.dozerDesc')
      if (p.slug === 'agricultural-trailers') return t('p.trailer4wDesc')
      if (p.slug === 'sugarcane-trailer') return t('p.sugarcaneDesc')
      if (p.slug === 'high-tipping-trailer') return t('p.highTippingDesc')
      if (p.slug === 'agro-implements') return t('p.agroDesc')
    }
    return p.description
  }

  return (
    <section id="featured" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">{t('products.tag')}</p>
          <h2 className="text-balance font-heading text-3xl font-bold uppercase text-navy sm:text-4xl lg:text-5xl">
            {t('products.title')}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-steel">
            {t('products.sub')}
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  'rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all',
                  activeCategory === cat.key
                    ? 'bg-navy text-gold shadow-md scale-105'
                    : 'bg-slate-100 text-steel hover:bg-slate-200 hover:text-navy'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16 lg:gap-24">
          {filteredProducts.map((product, i) => {
            const flip = i % 2 === 1
            const productName = getTranslatedProductName(product)
            const productDesc = getTranslatedProductDesc(product)

            return (
              <div
                key={product.slug}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                {/* Image Showcase */}
                <Reveal className={cn(flip && 'lg:order-2')} y={32}>
                  <div
                    onClick={() => onSelectProduct?.(product)}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl transition-all hover:border-gold/50 hover:shadow-2xl"
                  >
                    <img
                      src={product.image || '/placeholder.svg'}
                      alt={productName}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-80 transition-opacity group-hover:opacity-60" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="font-heading text-lg font-bold uppercase text-white">
                        {productName}
                      </span>
                      <span className="flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase text-navy shadow">
                        {t('products.specsQuote')} <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Reveal>

                {/* Details */}
                <Reveal className={cn(flip && 'lg:order-1')} delay={0.1} y={32}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gold">
                      {t('products.directMfg')}
                    </span>
                    <h3 className="mt-1 font-heading text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
                      {productName}
                    </h3>
                    <p className="mt-3 whitespace-pre-line leading-relaxed text-steel">{productDesc}</p>

                    {product.highlights && product.highlights.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {product.highlights.map((h) => (
                          <span
                            key={h}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-gold/40 bg-gold/10 px-3 py-1.5 text-xs font-bold text-navy shadow-sm"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                            {h}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      <div>
                        <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy">
                          <Wrench className="h-4 w-4 text-gold" /> {t('products.keyFeatures')}
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {product.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-xs text-steel">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-navy">{t('products.applications')}</h4>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {product.applications.map((a) => (
                            <li
                              key={a}
                              className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-navy"
                            >
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tractor Compatibility & Subsidy Trust Strip */}
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs">
                      <span className="font-bold text-navy flex items-center gap-1.5">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                        {product.category === 'dozers-loaders'
                          ? (lang === 'kn' ? 'ಹೊಂದಾಣಿಕೆ: ಮಹೀಂದ್ರಾ, ಸ್ವರಾಜ್, ಜಾನ್ ಡೀರೆ, ನ್ಯೂ ಹಾಲೆಂಡ್ (35-90 HP)' : 'Compatible: Mahindra, Swaraj, John Deere, New Holland, Sonalika (35-90 HP)')
                          : (lang === 'kn' ? 'ಎಲ್ಲಾ 30-90+ HP ಟ್ರಾಕ್ಟರ್‌ಗಳಿಗೆ ಯುನಿವರ್ಸಲ್ ಫಿಟ್‌ಮೆಂಟ್' : 'Universal Fitment: Compatible with all 30-90+ HP Tractors')}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                        {lang === 'kn' ? 'ಸಬ್ಸಿಡಿ & ಜಿಎಸ್‌ಟಿ ಬಿಲ್ ಲಭ್ಯ' : 'GST / Subsidy Invoice Ready'}
                      </span>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => onSelectProduct?.(product)}
                        className="inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-navy/90 hover:shadow-lg"
                      >
                        <Wrench className="h-4 w-4 text-gold" />
                        {t('products.btnFullSpecs')}
                      </button>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-bold text-navy shadow-md transition-all hover:bg-gold/90 hover:shadow-lg"
                      >
                        <MessageSquare className="h-4 w-4" />
                        {t('products.btnGetPrice')}
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
