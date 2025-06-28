'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, MapPin, Shield } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
    const { t } = useLanguage()

    return (
        <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-orange-900/85 to-amber-900/80"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <motion.h1
                            className="section-title text-5xl lg:text-6xl text-white mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                {t('heroTitle')}
                            </motion.span>
                            <motion.span
                                className="text-amber-400 block"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                Từ Bắc vào Nam
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-orange-100 mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            ✅ Xe tải từ 1-10 tấn | 🚛 Vận chuyển Bắc - Nam | 🔒 Bảo hiểm 100% | ⚡ Giao hàng nhanh 24-48h
                        </motion.p>

                        {/* Features */}
                        <motion.div
                            className="grid sm:grid-cols-3 gap-4 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            <motion.div
                                className="flex items-center hover-lift"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <MapPin className="w-5 h-5 text-amber-400 mr-2 animate-pulse-slow" />
                                <span className="text-white">Toàn quốc</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center hover-lift"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Clock className="w-5 h-5 text-emerald-400 mr-2 animate-pulse-slow" />
                                <span className="text-white">24/7</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center hover-lift"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Shield className="w-5 h-5 text-cyan-400 mr-2 animate-pulse-slow" />
                                <span className="text-white">Bảo hiểm</span>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <motion.button
                                className="bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 px-8 py-4 rounded-lg hover:from-amber-300 hover:to-orange-300 transition-all duration-300 font-bold text-lg flex items-center justify-center hover-lift shadow-lg shadow-amber-500/25"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('getQuote')}
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </motion.button>
                            <motion.button
                                className="border-2 border-white/80 text-white px-8 py-4 rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300 font-semibold text-lg hover-lift backdrop-blur-sm"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('callNow')}
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right content - Quote Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <motion.div
                            className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 overflow-hidden relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {/* Background gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-white/90 to-amber-50/80 -z-10"></div>

                            <motion.div
                                className="text-center mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <div className="flex items-center justify-center mb-3">
                                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-lg mr-3">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                                        Báo giá miễn phí
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    ⚡ Nhận báo giá chính xác trong vòng 5 phút
                                </p>
                            </motion.div>

                            <motion.form
                                className="space-y-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="relative">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            📍 Điểm đi
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Ví dụ: Hà Nội, Quận Ba Đình"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            🎯 Điểm đến
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Ví dụ: TP.HCM, Quận 1"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label htmlFor="weight" className="block text-sm font-semibold text-gray-700 mb-2">
                                            ⚖️ Trọng lượng
                                        </label>
                                        <select
                                            id="weight"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-800"
                                        >
                                            <option>Dưới 1 tấn</option>
                                            <option>1-2 tấn</option>
                                            <option>2-5 tấn</option>
                                            <option>5-10 tấn</option>
                                            <option>Trên 10 tấn</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="cargoType" className="block text-sm font-semibold text-gray-700 mb-2">
                                            📦 Loại hàng
                                        </label>
                                        <select
                                            id="cargoType"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-800"
                                        >
                                            <option>Hàng thường</option>
                                            <option>Hàng dễ vỡ</option>
                                            <option>Hàng lạnh</option>
                                            <option>Hàng nguy hiểm</option>
                                            <option>Thiết bị y tế</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        📱 Số điện thoại (tùy chọn)
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="Để nhận kết quả nhanh hơn"
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-amber-700 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative flex items-center justify-center">
                                        <span>🚚 Nhận báo giá ngay</span>
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </motion.button>
                            </motion.form>

                            {/* Trust indicators */}
                            <motion.div
                                className="mt-4 pt-4 border-t border-gray-200"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                            >
                                <div className="flex items-center justify-center text-xs text-gray-500 space-x-4">
                                    <div className="flex items-center">
                                        <Shield className="w-3 h-3 text-green-500 mr-1" />
                                        <span>Bảo mật 100%</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-3 h-3 text-orange-500 mr-1" />
                                        <span>Phản hồi 5 phút</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="w-3 h-3 text-purple-500 mr-1" />
                                        <span>Toàn quốc</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -top-4 -right-4 bg-yellow-400 p-4 rounded-full shadow-lg animate-glow"
                        >
                            <Shield className="w-8 h-8 text-orange-900" />
                        </motion.div>

                        {/* Additional floating elements */}
                        <motion.div
                            animate={{
                                x: [0, 10, 0],
                                y: [0, -5, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                            className="absolute -bottom-6 -left-6 bg-white p-3 rounded-full shadow-lg"
                        >
                            <Clock className="w-6 h-6 text-orange-600" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
