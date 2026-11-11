'use client'

import { useLanguage } from '@/components/language-context'
import { Language } from '@/lib/translations'
import { Globe, ChevronDown } from 'lucide-react'

export function LanguageSelector({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLanguage()

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <label htmlFor="language-select" className="sr-only">
        Select Language
      </label>
      <div className="relative flex items-center rounded-lg border border-white/15 bg-white/5 px-2 py-1 text-xs font-medium text-white/80 transition-all hover:border-gold/40 hover:bg-white/10 hover:text-white">
        <Globe className="mr-1 h-3.5 w-3.5 shrink-0 text-gold/80" aria-hidden="true" />
        <select
          id="language-select"
          value={lang}
          onChange={(e) => setLang(e.target.value as Language)}
          className="appearance-none bg-transparent pr-4 font-sans text-xs font-semibold text-white/90 focus:outline-none cursor-pointer"
          aria-label="Language selector"
        >
          <option value="en" className="bg-[#081b34] text-white">
            English
          </option>
          <option value="kn" className="bg-[#081b34] text-white font-sans">
            ಕನ್ನಡ
          </option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-1 h-3 w-3 text-gold/70" />
      </div>
    </div>
  )
}
