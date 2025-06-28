'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Mail, Menu, Phone, Truck, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { t } = useLanguage()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-gradient-to-r from-orange-50/95 via-amber-50/95 to-yellow-50/95 backdrop-blur-lg shadow-2xl border-b border-orange-200/30'
            : 'bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 shadow-xl border-b border-orange-100/50'
            }`}>
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-2xl -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-amber-200/20 to-yellow-200/20 rounded-full blur-2xl translate-y-8 -translate-x-8" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Top bar - Enhanced with more credibility */}
                <div className={`border-b border-orange-200/30 py-3 transition-all duration-300 ${isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
                    }`}>
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-orange-100">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                <Phone className="w-4 h-4 mr-2 text-orange-600" />
                                <span className="font-semibold text-slate-700">Hotline: 0912 345 678</span>
                            </div>
                            <div className="flex items-center bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-orange-100">
                                <Mail className="w-4 h-4 mr-2 text-orange-600" />
                                <span className="font-medium text-slate-700">info@vantaiduongle.com</span>
                            </div>
                            <div className="hidden lg:flex items-center bg-gradient-to-r from-orange-100 to-amber-100 px-3 py-1.5 rounded-full shadow-sm border border-orange-200">
                                <div className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></div>
                                <span className="font-semibold text-orange-800 text-xs">15+ NĂM KINH NGHIỆM</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-orange-100">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                                <span className="font-semibold text-slate-700 text-xs">PHỤC VỤ 24/7</span>
                            </div>
                            <div className="hidden md:flex items-center bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1.5 rounded-full shadow-sm border border-green-200">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                <span className="font-semibold text-green-800 text-xs">MIỄN PHÍ TƯ VẤN</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main header */}
                <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'
                    }`}>
                    <div className="flex items-center group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                            <Truck className={`relative text-white bg-gradient-to-br from-orange-500 to-amber-600 p-2 rounded-xl shadow-lg transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'
                                } group-hover:scale-110 group-hover:rotate-3`} />
                        </div>
                        <div className="ml-4">
                            <h1 className={`brand-title text-2xl bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'
                                } group-hover:from-orange-700 group-hover:via-amber-700 group-hover:to-yellow-700`}>
                                Vận Tải Dương Lê
                            </h1>
                            <div className="flex items-center space-x-2">
                                <p className={`text-slate-600 transition-all duration-300 ${isScrolled ? 'text-xs opacity-75' : 'text-sm opacity-100'
                                    }`}>
                                    Dịch vụ vận chuyển uy tín
                                </p>
                                <div className={`flex items-center bg-gradient-to-r from-orange-100 to-amber-100 px-2 py-1 rounded-full transition-all duration-300 ${isScrolled ? 'text-xs px-1.5 py-0.5' : 'text-xs'
                                    }`}>
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-1.5 animate-pulse"></div>
                                    <span className="font-semibold text-orange-800">CHÍNH HÃNG</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="#home" className="nav-link text-slate-700 hover:text-orange-600 transition-all duration-300 relative group py-2">
                            {t('home')}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                        </Link>
                        <Link href="#services" className="nav-link text-slate-700 hover:text-orange-600 transition-all duration-300 relative group py-2">
                            {t('services')}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                        </Link>
                        <Link href="#trucks" className="nav-link text-slate-700 hover:text-orange-600 transition-all duration-300 relative group py-2">
                            {t('trucks')}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                        </Link>
                        <Link href="#about" className="nav-link text-slate-700 hover:text-orange-600 transition-all duration-300 relative group py-2">
                            {t('about')}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                        </Link>
                        <Link href="#contact" className="nav-link text-slate-700 hover:text-orange-600 transition-all duration-300 relative group py-2">
                            {t('contact')}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <LanguageSwitcher />
                        <button className="font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-xl hover:from-orange-600 hover:to-amber-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group">
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            <span className="relative z-10">{t('bookNow')}</span>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden bg-white/70 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-orange-200 hover:bg-white/90 transition-all duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-orange-600" />
                        ) : (
                            <Menu className="w-6 h-6 text-orange-600" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-gradient-to-r from-orange-50/95 via-amber-50/95 to-yellow-50/95 backdrop-blur-lg border-t border-orange-200/50 animate-slideDown shadow-xl">
                    <nav className="px-4 py-6 space-y-2">
                        <Link
                            href="#home"
                            className="nav-link block text-slate-700 hover:text-orange-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/70 hover:shadow-sm hover:translate-x-2 border border-transparent hover:border-orange-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('home')}
                        </Link>
                        <Link
                            href="#services"
                            className="nav-link block text-slate-700 hover:text-orange-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/70 hover:shadow-sm hover:translate-x-2 border border-transparent hover:border-orange-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('services')}
                        </Link>
                        <Link
                            href="#trucks"
                            className="nav-link block text-slate-700 hover:text-orange-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/70 hover:shadow-sm hover:translate-x-2 border border-transparent hover:border-orange-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('trucks')}
                        </Link>
                        <Link
                            href="#about"
                            className="nav-link block text-slate-700 hover:text-orange-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/70 hover:shadow-sm hover:translate-x-2 border border-transparent hover:border-orange-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('about')}
                        </Link>
                        <Link
                            href="#contact"
                            className="nav-link block text-slate-700 hover:text-orange-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/70 hover:shadow-sm hover:translate-x-2 border border-transparent hover:border-orange-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('contact')}
                        </Link>
                        <div className="pt-4 border-t border-orange-200/50">
                            <LanguageSwitcher />
                        </div>
                        <button className="font-bold w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-amber-600 hover:scale-105 transition-all duration-300 shadow-lg mt-4 relative overflow-hidden group">
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            <span className="relative z-10">{t('bookNow')}</span>
                        </button>
                    </nav>
                </div>
            )}
        </header>
    )
}
