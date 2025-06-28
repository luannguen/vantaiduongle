'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const sections = [
    { id: 'hero', title: 'Trang chủ', icon: '🏠' },
    { id: 'services', title: 'Dịch vụ', icon: '🚛' },
    { id: 'truck-types', title: 'Loại xe', icon: '🚚' },
    { id: 'price-calculator', title: 'Tính giá', icon: '🧮' },
    { id: 'roi-calculator', title: 'Tính ROI', icon: '💰' },
    { id: 'tracking', title: 'Theo dõi', icon: '📍' },
    { id: 'about', title: 'Về chúng tôi', icon: '👥' },
    { id: 'stats', title: 'Thống kê', icon: '📊' },
    { id: 'trust-builder', title: 'Tại sao chọn chúng tôi', icon: '🛡️' },
    { id: 'detailed-case-studies', title: 'Case Studies', icon: '📖' },
    { id: 'partnership-journey', title: 'Hành trình đối tác', icon: '🤝' },
    { id: 'video-testimonials', title: 'Video đánh giá', icon: '🎥' },
    { id: 'certifications', title: 'Chứng nhận', icon: '🏆' },
    { id: 'partners', title: 'Đối tác hiện tại', icon: '🏢' },
    { id: 'partnership-onboarding', title: 'Trở thành đối tác', icon: '📝' },
    { id: 'testimonials', title: 'Đánh giá', icon: '⭐' },
    { id: 'faq', title: 'FAQ', icon: '❓' },
    { id: 'news', title: 'Tin tức', icon: '📰' },
    { id: 'contact', title: 'Liên hệ', icon: '📞' }
]

export default function TableOfContents() {
    const [activeSection, setActiveSection] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [isCollapsed, setIsCollapsed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show TOC only after scrolling down 300px
            const shouldShow = window.scrollY > 300
            setIsVisible(shouldShow)

            // Calculate scroll progress
            const scrollTop = window.scrollY
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = (scrollTop / documentHeight) * 100
            setScrollProgress(progress)

            // Find active section
            const sectionElements = sections.map(section => ({
                id: section.id,
                element: document.getElementById(section.id)
            })).filter(item => item.element)

            let currentSection = ''

            for (const section of sectionElements) {
                const rect = section.element!.getBoundingClientRect()
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentSection = section.id
                    break
                }
            }

            // If no section is in viewport, find the closest one
            if (!currentSection) {
                let closestSection = ''
                let closestDistance = Infinity

                for (const section of sectionElements) {
                    const rect = section.element!.getBoundingClientRect()
                    const distance = Math.abs(rect.top)
                    if (distance < closestDistance) {
                        closestDistance = distance
                        closestSection = section.id
                    }
                }
                currentSection = closestSection
            }

            setActiveSection(currentSection)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const offset = 80 // Account for fixed header
            const elementPosition = element.offsetTop - offset

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            })
        }
        setIsOpen(false)
    }

    return (
        <>
            {/* Mobile Toggle Button - Only show when scrolled and visible */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        className="fixed left-4 bottom-44 z-40 lg:hidden w-10 h-10 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/20 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-300"
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, x: -50, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -50, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Desktop TOC - Only show when scrolled */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:block"
                        initial={{ opacity: 0, x: -100, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -100, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                        <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
                            {/* Collapse/Expand Toggle */}
                            <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm border-b border-white/20">
                                <motion.h3
                                    className="text-sm font-bold text-gray-800"
                                    animate={{ opacity: isCollapsed ? 0 : 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {!isCollapsed && "Mục lục"}
                                </motion.h3>
                                <motion.button
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                    className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:bg-white/30 transition-all duration-200"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={isCollapsed ? "Mở rộng mục lục" : "Thu gọn mục lục"}
                                >
                                    <motion.div
                                        animate={{ rotate: isCollapsed ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronRight className="w-3 h-3" />
                                    </motion.div>
                                </motion.button>
                            </div>

                            <AnimatePresence>
                                {!isCollapsed && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-4 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/30">
                                            {/* Progress Bar */}
                                            <div className="mb-4">
                                                <div className="w-full bg-white/20 rounded-full h-1.5 mb-2">
                                                    <motion.div
                                                        className="bg-gradient-to-r from-blue-400 to-purple-400 h-1.5 rounded-full"
                                                        style={{ width: `${scrollProgress}%` }}
                                                        transition={{ type: "spring", stiffness: 100 }}
                                                    />
                                                </div>
                                                <p className="text-xs text-gray-600">{Math.round(scrollProgress)}% hoàn thành</p>
                                            </div>

                                            {/* Navigation Items */}
                                            <nav className="space-y-1">
                                                {sections.map((section, index) => (
                                                    <motion.button
                                                        key={section.id}
                                                        onClick={() => scrollToSection(section.id)}
                                                        className={`w-full text-left p-2.5 rounded-lg transition-all duration-200 flex items-center gap-2.5 group ${activeSection === section.id
                                                            ? 'bg-white/30 text-blue-700 shadow-sm backdrop-blur-sm'
                                                            : 'text-gray-700 hover:bg-white/20 hover:text-gray-900'
                                                            }`}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.03 }}
                                                        whileHover={{ scale: 1.02, x: 2 }}
                                                        whileTap={{ scale: 0.98 }}
                                                    >
                                                        <span className="text-sm">{section.icon}</span>
                                                        <span className="font-medium text-xs flex-1">{section.title}</span>
                                                        {activeSection === section.id && (
                                                            <motion.div
                                                                className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                transition={{ type: "spring", stiffness: 300 }}
                                                            />
                                                        )}
                                                    </motion.button>
                                                ))}
                                            </nav>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Minimized View */}
                            {isCollapsed && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="p-2"
                                >
                                    <div className="flex flex-col items-center space-y-1">
                                        {sections.slice(0, 5).map((section) => (
                                            <motion.button
                                                key={section.id}
                                                onClick={() => scrollToSection(section.id)}
                                                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all duration-200 ${activeSection === section.id
                                                    ? 'bg-white/30 shadow-sm backdrop-blur-sm'
                                                    : 'hover:bg-white/20'
                                                    }`}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                title={section.title}
                                            >
                                                {section.icon}
                                            </motion.button>
                                        ))}
                                        {sections.length > 5 && (
                                            <motion.div
                                                className="text-gray-600 text-xs"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                +{sections.length - 5}
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile TOC Overlay */}
            <AnimatePresence>
                {isOpen && isVisible && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-20 lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Mobile TOC Panel */}
                        <motion.div
                            className="fixed left-0 top-0 bottom-0 w-80 bg-white/90 backdrop-blur-xl z-30 lg:hidden shadow-2xl border-r border-white/20"
                            initial={{ x: -320, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -320, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        >
                            <div className="p-6 h-full overflow-y-auto">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/20">
                                    <h3 className="text-xl font-bold text-gray-900">Mục lục</h3>
                                    <motion.button
                                        onClick={() => setIsOpen(false)}
                                        className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:bg-white/30 transition-all duration-200"
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label="Đóng menu"
                                    >
                                        <X className="w-4 h-4" />
                                    </motion.button>
                                </div>

                                {/* Progress */}
                                <div className="mb-6">
                                    <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                                        <motion.div
                                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                                            style={{ width: `${scrollProgress}%` }}
                                            transition={{ type: "spring", stiffness: 100 }}
                                        />
                                    </div>
                                    <p className="text-sm text-gray-600">{Math.round(scrollProgress)}% hoàn thành</p>
                                </div>

                                {/* Navigation Items */}
                                <nav className="space-y-2">
                                    {sections.map((section, index) => (
                                        <motion.button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 backdrop-blur-sm ${activeSection === section.id
                                                ? 'bg-white/30 text-blue-700 shadow-lg border border-white/20'
                                                : 'text-gray-700 hover:bg-white/20 hover:text-gray-900'
                                                }`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ scale: 1.02, x: 4 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span className="text-xl">{section.icon}</span>
                                            <span className="font-medium flex-1">{section.title}</span>
                                            {activeSection === section.id && (
                                                <motion.div
                                                    className="w-2 h-2 bg-blue-600 rounded-full"
                                                    initial={{ scale: 0, rotate: 0 }}
                                                    animate={{ scale: 1, rotate: 360 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                />
                                            )}
                                        </motion.button>
                                    ))}
                                </nav>

                                {/* Footer */}
                                <motion.div
                                    className="mt-8 pt-6 border-t border-white/20"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                                            <span className="text-blue-600 font-bold text-lg">DL</span>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">Vận Tải Dương Lê</p>
                                        <p className="text-xs text-gray-600">Kết nối mọi miền đất nước</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
