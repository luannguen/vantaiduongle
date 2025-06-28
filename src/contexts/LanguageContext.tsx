'use client'

import { translations } from '@/lib/translations'
import { createContext, ReactNode, useContext, useState } from 'react'

type Language = 'vi' | 'en'
type TranslationKey = keyof typeof translations.vi

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('vi')

    const t = (key: TranslationKey): string => {
        return translations[language][key] || translations.vi[key] || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
