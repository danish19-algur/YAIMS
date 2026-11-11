'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MessageCircle, ArrowUp } from 'lucide-react'
import { COMPANY } from '@/lib/site-data'

import { useLanguage } from '@/components/language-context'

export function FloatingActions() {
  const [showCta, setShowCta] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setShowCta(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Sticky bottom CTA bar */}
      <AnimatePresence>
        {showCta && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/95 backdrop-blur md:hidden"
          >
            <div className="flex items-center gap-2 px-3 py-3">
              <a
                href="#contact"
                className="flex-1 rounded-md bg-gold px-4 py-3 text-center text-sm font-bold text-navy"
              >
                {t('floating.getPrice')}
              </a>
              <a
                href={`tel:+91${COMPANY.phones[0]}`}
                className="flex-1 rounded-md bg-red px-4 py-3 text-center text-sm font-bold text-white"
              >
                {t('floating.callNow')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sticky Get Latest Price */}
      <AnimatePresence>
        {showCta && (
          <motion.a
            href="#contact"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 rotate-180 rounded-l-md bg-gold px-2.5 py-4 text-sm font-bold uppercase tracking-wide text-navy shadow-lg [writing-mode:vertical-rl] hover:bg-gold/90 2xl:block"
          >
            {t('floating.getPrice')}
          </motion.a>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp */}
      <motion.a
        href={`https://wa.me/${COMPANY.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 18 }}
        className="fixed bottom-20 right-5 z-40 transform-gpu flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-110 md:bottom-6"
      >
        <span className="absolute inline-flex h-full w-full transform-gpu animate-ping rounded-full bg-[#25D366] opacity-40" />
        <MessageCircle className="relative h-7 w-7" />
      </motion.a>

      {/* Back to top */}
      <AnimatePresence>
        {showCta && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-36 right-5 z-40 transform-gpu hidden h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-navy shadow-lg transition-colors hover:bg-secondary md:bottom-24 md:flex"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
