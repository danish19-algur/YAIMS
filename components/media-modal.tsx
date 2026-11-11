'use client'

import { useEffect, useRef, useState } from 'react'
import { X, ExternalLink, Download, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export type MediaItem = {
  src: string
  title?: string
  category?: string
  alt?: string
}

type MediaModalProps = {
  src?: string | null
  title?: string
  category?: string
  alt?: string
  items?: MediaItem[]
  currentIndex?: number
  onNavigate?: (index: number) => void
  onClose: () => void
}

export function MediaModal({
  src,
  title,
  category,
  alt,
  items,
  currentIndex = -1,
  onNavigate,
  onClose,
}: MediaModalProps) {
  const hasPlaylist = items && items.length > 0 && currentIndex >= 0
  const currentItem = hasPlaylist ? items[currentIndex] : null

  const displaySrc = currentItem?.src || src
  const displayTitle = currentItem?.title || title || 'Media Preview'
  const displayCategory = currentItem?.category || category
  const displayAlt = currentItem?.alt || alt || displayTitle

  const touchStartX = useRef<number | null>(null)
  const thumbnailContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!displaySrc) return
      if (e.key === 'Escape') {
        onClose()
      } else if (hasPlaylist && onNavigate && items) {
        if (e.key === 'ArrowLeft') {
          onNavigate(currentIndex > 0 ? currentIndex - 1 : items.length - 1)
        } else if (e.key === 'ArrowRight') {
          onNavigate(currentIndex < items.length - 1 ? currentIndex + 1 : 0)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [displaySrc, hasPlaylist, currentIndex, items, onNavigate, onClose])

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailContainerRef.current && currentIndex >= 0) {
      const container = thumbnailContainerRef.current
      const activeElement = container.children[currentIndex] as HTMLElement
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      }
    }
  }, [currentIndex])

  if (!displaySrc) return null

  function handlePrev() {
    if (hasPlaylist && onNavigate && items) {
      onNavigate(currentIndex > 0 ? currentIndex - 1 : items.length - 1)
    }
  }

  function handleNext() {
    if (hasPlaylist && onNavigate && items) {
      onNavigate(currentIndex < items.length - 1 ? currentIndex + 1 : 0)
    }
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
    touchStartX.current = null
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 transform-gpu bg-black/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 transform-gpu flex h-full max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-slate-950 text-white shadow-2xl border border-white/10"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6 bg-slate-900/90 shrink-0">
            <div>
              <div className="flex items-center gap-2">
                {displayCategory && (
                  <span className="text-xs font-bold uppercase tracking-wider text-gold">
                    {displayCategory}
                  </span>
                )}
                {hasPlaylist && items && (
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-bold text-white/80">
                    Photo {currentIndex + 1} of {items.length}
                  </span>
                )}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight mt-0.5">
                {displayTitle}
              </h3>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={displaySrc}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
                title="Download photo"
              >
                <Download className="h-4 w-4" />
              </a>
              <a
                href={displaySrc}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
                title="Open full resolution"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-red/80"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Main Media Body with Navigation Arrows */}
          <div className="relative flex flex-1 items-center justify-center overflow-hidden p-2 sm:p-4 bg-slate-950">
            {/* Previous Arrow Button */}
            {hasPlaylist && (
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/80 text-white shadow-2xl backdrop-blur transition-all hover:bg-gold hover:text-navy hover:scale-110 border border-white/20"
                aria-label="Previous photo"
                title="Previous photo (Left Arrow)"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
            )}

            {/* Photo Showcase */}
            <AnimatePresence mode="wait">
              <motion.img
                key={displaySrc}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                src={displaySrc}
                alt={displayAlt}
                className="max-h-[68vh] w-auto max-w-full rounded-lg object-contain shadow-2xl select-none"
              />
            </AnimatePresence>

            {/* Next Arrow Button */}
            {hasPlaylist && (
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/80 text-white shadow-2xl backdrop-blur transition-all hover:bg-gold hover:text-navy hover:scale-110 border border-white/20"
                aria-label="Next photo"
                title="Next photo (Right Arrow)"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            )}
          </div>

          {/* Bottom Thumbnail Strip Bar */}
          {hasPlaylist && items && items.length > 1 && (
            <div className="shrink-0 border-t border-white/10 bg-slate-900/90 px-4 py-2.5">
              <div
                ref={thumbnailContainerRef}
                className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar scroll-smooth"
              >
                {items.map((item, idx) => {
                  const isActive = idx === currentIndex
                  return (
                    <button
                      key={item.src + idx}
                      type="button"
                      onClick={() => onNavigate?.(idx)}
                      className={`relative aspect-[4/3] h-12 shrink-0 overflow-hidden rounded-md border transition-all ${
                        isActive
                          ? 'border-gold ring-2 ring-gold/50 scale-105 opacity-100'
                          : 'border-white/20 opacity-50 hover:opacity-100 hover:border-white/50'
                      }`}
                    >
                      <img src={item.src} alt={item.title || ''} className="h-full w-full object-cover" />
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
