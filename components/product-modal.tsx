'use client'

import { Product, COMPANY } from '@/lib/site-data'
import { X, CheckCircle2, ShieldCheck, MessageSquare, ArrowRight, Wrench } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

type ProductModalProps = {
  product: Product | null
  onClose: () => void
}

import { useLanguage } from '@/components/language-context'

export function ProductModal({ product, onClose }: ProductModalProps) {
  const { t, lang } = useLanguage()

  if (!product) return null

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

  const productName = getTranslatedProductName(product)
  const productDesc = getTranslatedProductDesc(product)

  const whatsappMessage = encodeURIComponent(
    `Hello YAIMS Steel Industries, I am interested in getting a price quote and technical details for: ${productName}.`
  )
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${whatsappMessage}`

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 transform-gpu bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 transform-gpu max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Container */}
            <div className="relative flex items-center justify-center bg-slate-900 p-6 lg:p-8">
              <img
                src={product.image}
                alt={productName}
                className="max-h-[380px] w-full rounded-lg object-contain"
              />
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-widest text-gold">
                {t('products.directMfg')}
              </span>
              <h2 className="mt-1 font-heading text-2xl font-bold uppercase text-navy sm:text-3xl">
                {productName}
              </h2>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-steel">
                {productDesc}
              </p>

              {product.highlights && product.highlights.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1.5 rounded-md border border-gold/40 bg-gold/10 px-2.5 py-1 text-xs font-bold text-navy"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {h}
                    </span>
                  ))}
                </div>
              )}

              {/* Warranty badge */}
              {product.warranty && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold border border-gold/20">
                  <ShieldCheck className="h-4 w-4 text-gold" />
                  {product.warranty}
                </div>
              )}

              {/* Specifications Table */}
              <div className="mt-6">
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
                  <Wrench className="h-4 w-4 text-gold" />
                  {t('products.btnFullSpecs')}
                </h3>
                <div className="mt-2 divide-y divide-slate-100 rounded-lg border border-slate-200 bg-slate-50/50 text-xs">
                  {product.specifications?.map((spec) => (
                    <div key={spec.label} className="flex justify-between px-3.5 py-2.5">
                      <span className="font-medium text-steel">{spec.label}</span>
                      <span className="font-semibold text-navy text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy">{t('products.keyFeatures')}</h3>
                <ul className="mt-2 space-y-1.5 text-xs text-steel">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition-all hover:bg-[#20bd5a]"
                >
                  <MessageSquare className="h-4 w-4" />
                  {t('products.modalWhatsapp')}
                </a>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy bg-navy px-5 py-3 text-sm font-bold text-white transition-all hover:bg-navy/90"
                >
                  {t('products.btnGetPrice')}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
