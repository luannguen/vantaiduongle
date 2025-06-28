'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage()

    return (
        <div className="relative">
            <button
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
            >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                    {language === 'vi' ? 'VI' : 'EN'}
                </span>
            </button>
        </div>
    )
}
