'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { FAQ_ITEMS } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

import { useLanguage } from '@/components/language-context'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { t } = useLanguage()

  const items = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
  ]

  return (
    <section id="faq" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal y={24}>
          <div className="text-center">
            <p className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              <HelpCircle className="h-4 w-4" />
              {t('faq.tag')}
            </p>
            <h2 className="text-balance font-heading text-3xl font-bold uppercase text-navy sm:text-4xl">
              {t('faq.title')}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-steel">
              {t('faq.sub')}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <Reveal key={item.question} delay={idx * 0.05} y={16}>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-all shadow-sm hover:shadow-md">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-lg font-bold text-navy transition-colors hover:text-gold"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-steel transition-transform duration-200',
                        isOpen && 'rotate-180 text-gold'
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-steel bg-slate-50/50">
                      {item.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
