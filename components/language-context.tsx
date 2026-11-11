'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { TRANSLATIONS, Language } from '@/lib/translations'

type LanguageContextType = {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem('yaims_lang') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'kn')) {
      setLangState(savedLang)
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem('yaims_lang', newLang)
    // Add lang attribute to html tag
    document.documentElement.setAttribute('lang', newLang)
  }

  const t = (key: string): string => {
    if (!TRANSLATIONS[lang]) return TRANSLATIONS.en[key] || key
    return TRANSLATIONS[lang][key] || TRANSLATIONS.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
