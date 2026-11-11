'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { GALLERY } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { Maximize2, Images } from 'lucide-react'

type GallerySectionProps = {
  onSelectMedia?: (
    media: { src: string; title?: string; category?: string; alt?: string },
    list?: Array<{ src: string; title?: string; category?: string; alt?: string }>,
    index?: number
  ) => void
}

const CATEGORIES = ['All', 'Authentic Trailers', 'Tractor Dozers', 'Sugarcane Trailers', 'Works Floor']

import { useLanguage } from '@/components/language-context'

export function GallerySection({ onSelectMedia }: GallerySectionProps) {
  const [active, setActive] = useState('All')
  const [visibleLimit, setVisibleLimit] = useState(8)
  const { t } = useLanguage()

  const categories = [
    { key: 'All', label: t('gallery.catAll') },
    { key: 'Authentic Trailers', label: t('gallery.catTrailers') },
    { key: 'Tractor Dozers', label: t('gallery.catDozers') },
    { key: 'Sugarcane Trailers', label: t('gallery.catSugarcane') },
    { key: 'Works Floor', label: t('gallery.catWorks') },
  ]

  const items = active === 'All' ? GALLERY : GALLERY.filter((g) => g.category === active)
  const displayedItems = items.slice(0, visibleLimit)
  const hasMore = items.length > visibleLimit

  return (
    <section id="gallery" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">{t('gallery.tag')}</p>
          <h2 className="text-balance font-heading text-3xl font-bold uppercase text-navy sm:text-4xl lg:text-5xl">
            {t('gallery.title')}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-steel">
            {t('gallery.sub')}
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => {
                setActive(cat.key)
                setVisibleLimit(8)
              }}
              className={cn(
                'rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all',
                active === cat.key
                  ? 'bg-navy text-gold shadow-md'
                  : 'bg-slate-100 text-steel hover:bg-slate-200 hover:text-navy'
              )}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, index) => (
              <motion.figure
                key={item.src + item.category}
                layout="position"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => onSelectMedia?.(item, items, index)}
                className={cn(
                  'group relative cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-slate-950 shadow-md transform-gpu transition-all hover:border-gold/50 hover:shadow-xl',
                  item.span
                )}
              >
                <img
                  src={item.src || '/placeholder.svg'}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transform-gpu transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                      {item.category}
                    </span>
                    <p className="text-xs font-bold text-white leading-snug">
                      {item.title || item.alt}
                    </p>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy shadow">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>

        {/* View Full Photo Gallery Button */}
        <div className="mt-12 text-center">
          {hasMore ? (
            <button
              type="button"
              onClick={() => setVisibleLimit(items.length)}
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-navy shadow-lg transition-all hover:bg-gold/90 hover:shadow-xl"
            >
              <Images className="h-5 w-5" />
              {t('gallery.btnViewAll').replace('{count}', String(items.length))}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onSelectMedia?.(items[0], items, 0)}
              className="inline-flex items-center gap-2 rounded-xl border border-navy/20 bg-slate-100 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-navy transition-all hover:bg-navy hover:text-white"
            >
              <Images className="h-5 w-5 text-gold" />
              {t('gallery.btnExploreAll').replace('{count}', String(items.length))}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
