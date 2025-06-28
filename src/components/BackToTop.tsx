'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const toggleVisibility = () => {
            const scrolled = window.pageYOffset
            const maxHeight = document.body.scrollHeight - window.innerHeight
            const progress = (scrolled / maxHeight) * 100

            setScrollProgress(progress)
            setIsVisible(scrolled > 300)
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.3, y: 50 }}
                    animate={{ opacity: 0.8, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.3, y: 50 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 25 }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    <div className="relative group">
                        {/* Progress Ring */}
                        <svg className="absolute inset-0 w-10 h-10 transform -rotate-90">
                            <circle
                                cx="20"
                                cy="20"
                                r="18"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                fill="transparent"
                                className="text-orange-200/40"
                            />
                            <circle
                                cx="20"
                                cy="20"
                                r="18"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                fill="transparent"
                                strokeDasharray={`${2 * Math.PI * 18}`}
                                strokeDashoffset={`${2 * Math.PI * 18 * (1 - scrollProgress / 100)}`}
                                className="text-orange-500 transition-all duration-300"
                            />
                        </svg>

                        {/* Button */}
                        <motion.button
                            onClick={scrollToTop}
                            className="relative w-10 h-10 bg-gradient-to-br from-orange-400/70 to-amber-500/70 backdrop-blur-sm text-white rounded-xl shadow-lg hover:from-orange-500/80 hover:to-amber-600/80 transition-all duration-300 flex items-center justify-center border border-orange-300/30"
                            whileHover={{
                                scale: 1.15,
                                rotate: 5,
                                boxShadow: "0 8px 25px rgba(251, 146, 60, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Về đầu trang"
                        >
                            <motion.div
                                animate={{ y: [0, -1, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="flex items-center justify-center"
                            >
                                <ChevronUp className="w-4 h-4 drop-shadow-sm" strokeWidth={2.5} />
                            </motion.div>

                            {/* Tooltip */}
                            <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="bg-slate-800/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg border border-slate-700/50">
                                    Về đầu trang
                                </div>
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800/90"></div>
                            </div>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
