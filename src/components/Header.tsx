'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getCompanyPhone, getCompanyEmail } from '@/lib/company-metadata'
import { translations } from '@/lib/translations'
import { Mail, Menu, Phone, Truck, X, Clock, ArrowRight, Package } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const { t } = useLanguage()

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setIsScrolled(currentScrollY > 50)
            setIsHidden(currentScrollY > 300 && currentScrollY > lastScrollY)
            lastScrollY = currentScrollY
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems: { href: string; label: keyof typeof translations.vi; isSpecial?: boolean }[] = [
        { href: '/#home', label: 'home' },
        { href: '/#services', label: 'services' },
        { href: '/#trucks', label: 'trucks' },
        { href: '/#partners', label: 'partners' },
        { href: '/#contact', label: 'contact' },
    ]

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isHidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
            }`}>
            {/* Top Bar - Enterprise Navy */}
            <div className={`bg-slate-900 text-white transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center text-[10px] sm:text-xs">
                    <div className="flex items-center space-x-6">
                        <a href={`tel:${getCompanyPhone().replace(/\./g, '')}`} className="flex items-center hover:text-amber-400 transition-colors">
                            <Phone className="w-3 h-3 mr-2 text-amber-500" />
                            {getCompanyPhone()}
                        </a>
                        <a href={`mailto:${getCompanyEmail()}`} className="hidden md:flex items-center hover:text-amber-400 transition-colors">
                            <Mail className="w-3 h-3 mr-2 text-amber-500" />
                            {getCompanyEmail()}
                        </a>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="hidden lg:flex items-center text-slate-400">
                            <Clock className="w-3 h-3 mr-2" />
                            <span>{t('workingHours')}</span>
                        </div>
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>

            {/* Main Header - Glassmorphism */}
            <header
                className={`transition-all duration-500 ${isScrolled
                    ? 'py-3 glass-panel border-b border-primary-100/20 mx-4 mt-2 rounded-2xl shadow-2xl'
                    : 'py-5 bg-white/50 backdrop-blur-sm'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href="/" className="group flex items-center space-x-3">
                            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary-700 to-primary-900 rounded-xl shadow-lg group-hover:scale-105 transition-transform">
                                <Truck className="text-white w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-black tracking-tighter text-slate-900 leading-none">
                                    62 DƯƠNG LÊ
                                </span>
                                <span className="text-[9px] font-bold text-primary-600 tracking-[0.2em] uppercase mt-1">
                                    LOGISTICS ENTERPRISE
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-600 rounded-lg hover:bg-primary-50/50 transition-all"
                                >
                                    {t(item.label)}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center space-x-3">
                            <Link
                                href="/#tracking"
                                className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all flex items-center"
                            >
                                <Package className="mr-2 w-4 h-4" />
                                {t('tracking')}
                            </Link>
                            <Link
                                href="/#contact"
                                className="relative group px-6 py-2.5 bg-primary-700 text-white rounded-xl font-bold text-sm shadow-lg hover:bg-primary-800 transition-all flex items-center overflow-hidden"
                            >
                                <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-20deg] group-hover:translate-x-[200%] transition-transform duration-700 -translate-x-full"></div>
                                <span>{t('partnershipCTA')}</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-primary-50 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 px-4 pb-6 animate-in slide-in-from-top duration-300">
                        <div className="glass-panel rounded-2xl p-4 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-primary-50 rounded-xl transition-all"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t(item.label)}
                                </Link>
                            ))}
                            <Link
                                href="/#contact"
                                className="block w-full text-center py-4 bg-primary-700 text-white rounded-xl font-bold shadow-lg mt-4"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('partnershipCTA')}
                            </Link>
                        </div>
                    </div>
                )}
            </header>
        </div>
    )
}
