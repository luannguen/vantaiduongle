'use client'

import { COMPANY_INFO } from '@/lib/company-metadata'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Gift, Handshake, Phone, Sparkles, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function StickyPartnershipCTA() {
    const [isVisible, setIsVisible] = useState(false)
    const [isDismissed, setIsDismissed] = useState(false)
    const [showDuration, setShowDuration] = useState(0)
    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [300, 400], [0, 1])

    const handleDismiss = () => {
        setIsDismissed(true)
        // Save dismissal state to localStorage to prevent showing again for this session
        localStorage.setItem('stickyCtaDismissed', 'true')
    }

    useEffect(() => {
        // Check if user already dismissed this session
        const dismissed = localStorage.getItem('stickyCtaDismissed')
        if (dismissed === 'true') {
            setIsDismissed(true)
            return
        }

        const handleScroll = () => {
            if (window.scrollY > 800 && !isDismissed) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
                setShowDuration(0)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isDismissed])

    // Auto-dismiss after showing for 15 seconds
    useEffect(() => {
        let timer: NodeJS.Timeout
        if (isVisible && !isDismissed) {
            timer = setTimeout(() => {
                setShowDuration(prev => prev + 1000)
            }, 1000)

            // Auto dismiss after 15 seconds of being visible
            if (showDuration >= 15000) {
                handleDismiss()
            }
        }
        return () => clearTimeout(timer)
    }, [isVisible, isDismissed, showDuration])

    // Handle click outside to dismiss
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            const stickyElement = document.getElementById('sticky-partnership-cta')

            if (stickyElement && !stickyElement.contains(target) && isVisible) {
                handleDismiss()
            }
        }

        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isVisible])

    if (isDismissed) return null

    return (
        <motion.div
            className={`fixed bottom-4 left-4 right-4 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
            style={{ opacity }}
        >
            <motion.div
                id="sticky-partnership-cta"
                initial={{ scale: 0.8, y: 100 }}
                animate={isVisible ? { scale: 1, y: 0 } : { scale: 0.8, y: 100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white rounded-2xl shadow-2xl p-4 mx-auto max-w-md relative overflow-hidden"
                onClick={(e) => e.stopPropagation()} // Prevent event bubbling
            >
                {/* Background animation */}
                <motion.div
                    animate={{
                        x: [-100, 100, -100],
                        opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />

                {/* Close button */}
                <button
                    onClick={handleDismiss}
                    className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors z-20"
                    title="Đóng thông báo"
                    aria-label="Đóng thông báo ưu đãi"
                >
                    <X className="w-4 h-4" />
                </button>

                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center mb-3">
                        <motion.div
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="bg-white/20 p-2 rounded-full mr-3"
                        >
                            <Handshake className="w-5 h-5" />
                        </motion.div>
                        <div>
                            <h3 className="font-bold text-lg">Cơ hội cuối năm!</h3>
                            <p className="text-xs text-white/90">Chỉ còn 12 suất đối tác VIP</p>
                        </div>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="ml-auto"
                        >
                            <Sparkles className="w-6 h-6 text-yellow-300" />
                        </motion.div>
                    </div>

                    {/* Offer */}
                    <div className="bg-white/15 rounded-xl p-3 mb-3 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-bold text-sm">Giảm 30% phí vận chuyển</div>
                                <div className="text-xs text-white/80">+ Bonus 10 triệu VNĐ</div>
                            </div>
                            <div className="bg-yellow-400 text-orange-900 px-3 py-1 rounded-full text-xs font-bold">
                                <Gift className="w-3 h-3 inline mr-1" />
                                MIỄN PHÍ
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-2">
                        <motion.button
                            className="flex-1 bg-white text-orange-600 py-3 rounded-xl font-bold text-sm flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                document.getElementById('partnership-booster')?.scrollIntoView({ behavior: 'smooth' })
                                handleDismiss()
                            }}
                        >
                            Đăng ký ngay
                            <ArrowRight className="w-4 h-4 ml-1" />
                        </motion.button>
                        <motion.button
                            className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            title="Gọi điện tư vấn"
                            aria-label="Gọi điện tư vấn"
                            onClick={() => {
                                window.location.href = `tel:${COMPANY_INFO.contact.phone.primary.replace(/\./g, '')}`
                            }}
                        >
                            <Phone className="w-5 h-5" />
                        </motion.button>
                    </div>

                    {/* Countdown */}
                    <div className="text-center mt-2">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="text-xs text-yellow-300 font-semibold"
                        >
                            ⏰ Ưu đãi kết thúc sau 2 ngày 14 giờ
                        </motion.div>

                        {/* Auto-dismiss indicator */}
                        {isVisible && (
                            <div className="mt-2 text-xs text-white/60">
                                Nhấn bên ngoài để đóng • Tự động đóng sau {Math.max(0, 15 - Math.floor(showDuration / 1000))}s
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
