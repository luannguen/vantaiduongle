'use client'

import { COMPANY_INFO } from '@/lib/company-metadata'
import { motion } from 'framer-motion'
import { Home, Menu, Phone, Truck, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function TruckCompanion() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [menuPos, setMenuPos] = useState({ x: 0, y: 0 })
    const [showTruck, setShowTruck] = useState(false)
    const [isHoveringTruck, setIsHoveringTruck] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return

        // Show truck companion after scrolling past header
        const handleScroll = () => {
            setIsVisible(window.scrollY > 200)
        }

        let mouseTimeout: NodeJS.Timeout

        // Mouse movement tracking
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY })

            // Only hide truck and menu if menu is not open and not hovering truck
            if (!isMenuOpen && !isHoveringTruck) {
                setShowTruck(false)

                // Clear existing timeout
                clearTimeout(mouseTimeout)

                // Show truck after mouse stops for 1 second
                mouseTimeout = setTimeout(() => {
                    if (isVisible) {
                        setShowTruck(true)
                    }
                }, 1000)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('mousemove', handleMouseMove, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('mousemove', handleMouseMove)
            clearTimeout(mouseTimeout)
        }
    }, [isVisible, isMenuOpen, isHoveringTruck])

    if (!isVisible || (!showTruck && !isMenuOpen)) return null

    return (
        <>
            {/* Truck - only show when menu is closed */}
            {!isMenuOpen && (
                <motion.div
                    className="fixed z-50 pointer-events-auto"
                    style={{
                        left: mousePos.x - 32,
                        top: mousePos.y - 32,
                    }}
                    initial={{ opacity: 0, scale: 0.5, y: -20 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0
                    }}
                    exit={{ opacity: 0, scale: 0.5, y: -20 }}
                    transition={{
                        duration: 0.8,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                    }}
                >
                    <motion.div
                        className="relative group cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onMouseEnter={() => setIsHoveringTruck(true)}
                        onMouseLeave={() => setIsHoveringTruck(false)}
                        onClick={() => {
                            if (!isMenuOpen) {
                                // Calculate menu position when opening
                                const menuWidth = 220
                                const menuHeight = 200

                                let x = mousePos.x - menuWidth / 2
                                let y = mousePos.y + 80

                                // Check if menu goes beyond right edge
                                if (x + menuWidth > window.innerWidth - 20) {
                                    x = window.innerWidth - menuWidth - 20
                                }

                                // Check if menu goes beyond left edge
                                if (x < 20) {
                                    x = 20
                                }

                                // Check if menu goes beyond bottom edge
                                if (y + menuHeight > window.innerHeight - 20) {
                                    y = mousePos.y - menuHeight - 20
                                }

                                // Check if menu goes beyond top edge
                                if (y < 20) {
                                    y = 20
                                }

                                setMenuPos({ x, y })
                            }
                            setIsMenuOpen(!isMenuOpen)
                        }}
                        // Parking animation
                        animate={{
                            y: [0, -3, 0],
                            rotate: [0, -2, 2, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {/* Truck Body */}
                        <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                            {/* Truck Icon */}
                            <Truck className="w-8 h-8 text-white z-10" />

                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

                            {/* Parking indicator */}
                            <motion.div
                                className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.7, 1, 0.7]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* Simple Menu */}
            {isMenuOpen && (
                <motion.div
                    className="fixed z-40"
                    style={{
                        left: menuPos.x,
                        top: menuPos.y
                    }}
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ duration: 0.3, type: "spring" }}
                >
                    <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-orange-200/50 p-4 min-w-[200px]">
                        {/* Close button */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-2 right-2 p-1 rounded-full hover:bg-orange-100 transition-colors"
                            title="Đóng menu"
                            aria-label="Đóng menu"
                        >
                            <X className="w-4 h-4 text-gray-500" />
                        </button>

                        {/* Quick Actions */}
                        <div className="space-y-2 mt-4">
                            <Link
                                href="/#home"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-orange-50 transition-colors"
                            >
                                <Home className="w-4 h-4 text-orange-600" />
                                <span className="text-sm font-medium text-gray-700">Trang chủ</span>
                            </Link>

                            <Link
                                href={`tel:${COMPANY_INFO.contact.phone.primary.replace(/\./g, '')}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-green-50 transition-colors"
                            >
                                <Phone className="w-4 h-4 text-green-600" />
                                <div>
                                    <div className="text-sm font-medium text-gray-700">Gọi ngay</div>
                                    <div className="text-xs text-gray-500">{COMPANY_INFO.contact.phone.primary}</div>
                                </div>
                            </Link>

                            <Link
                                href="/#services"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                            >
                                <Menu className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-medium text-gray-700">Dịch vụ</span>
                            </Link>
                        </div>

                        {/* Company info */}
                        <div className="mt-3 pt-3 border-t border-gray-200 text-center">
                            <div className="text-sm font-semibold text-gray-800">Vận Tải 62 Dương Lê</div>
                            <div className="text-xs text-gray-500">Uy tín - Nhanh chóng - An toàn</div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Background overlay when menu is open */}
            {isMenuOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </>
    )
}
