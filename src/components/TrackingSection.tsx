'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, Clock, MapPin, Package, Search, Truck } from 'lucide-react'
import { useState } from 'react'

interface TrackingStep {
    status: string
    location: string
    time: string
    completed: boolean
}

interface TrackingResult {
    orderNumber: string
    status: string
    currentLocation: string
    estimatedDelivery: string
    timeline: TrackingStep[]
}

export default function TrackingSection() {
    const [trackingNumber, setTrackingNumber] = useState('')
    const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleTrack = async (e: React.FormEvent) => {
        e.preventDefault()
        if (trackingNumber.trim()) {
            setIsLoading(true)

            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1500))

            // Mock tracking data
            setTrackingResult({
                orderNumber: trackingNumber,
                status: 'Đang vận chuyển',
                currentLocation: 'Thái Bình',
                estimatedDelivery: '25/12/2024 14:00',
                timeline: [
                    {
                        status: 'Đã nhận hàng',
                        location: 'Hà Nội',
                        time: '23/12/2024 08:00',
                        completed: true
                    },
                    {
                        status: 'Đang vận chuyển',
                        location: 'Thái Bình',
                        time: '24/12/2024 10:30',
                        completed: true
                    },
                    {
                        status: 'Sắp đến nơi',
                        location: 'TP.HCM',
                        time: '25/12/2024 12:00',
                        completed: false
                    },
                    {
                        status: 'Đã giao hàng',
                        location: 'TP.HCM',
                        time: '25/12/2024 14:00',
                        completed: false
                    }
                ]
            })
            setIsLoading(false)
        }
    }

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section id="tracking" className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Theo dõi đơn hàng
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Nhập mã đơn hàng để theo dõi tình trạng vận chuyển real-time
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <form onSubmit={handleTrack} className="flex gap-4">
                        <motion.div
                            className="flex-1"
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <input
                                type="text"
                                value={trackingNumber}
                                onChange={(e) => setTrackingNumber(e.target.value)}
                                placeholder="Nhập mã đơn hàng (VD: DL2024001234)"
                                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg transition-all duration-300 hover:border-gray-400"
                                disabled={isLoading}
                            />
                        </motion.div>
                        <motion.button
                            type="submit"
                            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center hover-glow"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                                />
                            ) : (
                                <Search className="w-5 h-5 mr-2" />
                            )}
                            {isLoading ? 'Đang tìm...' : 'Tra cứu'}
                        </motion.button>
                    </form>
                </motion.div>

                <AnimatePresence mode="wait">
                    {trackingResult && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -50, scale: 0.95 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto"
                        >
                            <motion.div
                                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 hover-lift"
                                whileHover={{ y: -2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="grid md:grid-cols-2 gap-8">
                                    <motion.div
                                        variants={staggerContainer}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            Thông tin đơn hàng
                                        </h3>
                                        <div className="space-y-3">
                                            <motion.div
                                                className="flex items-center group"
                                                variants={fadeInUp}
                                                whileHover={{ x: 5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <Package className="w-5 h-5 text-blue-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                                                <span className="text-gray-700">Mã đơn: <strong>{trackingResult.orderNumber}</strong></span>
                                            </motion.div>
                                            <motion.div
                                                className="flex items-center group"
                                                variants={fadeInUp}
                                                whileHover={{ x: 5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <Truck className="w-5 h-5 text-blue-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                                                <span className="text-gray-700">Trạng thái: <strong className="text-blue-600">{trackingResult.status}</strong></span>
                                            </motion.div>
                                            <motion.div
                                                className="flex items-center group"
                                                variants={fadeInUp}
                                                whileHover={{ x: 5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <MapPin className="w-5 h-5 text-blue-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                                                <span className="text-gray-700">Vị trí hiện tại: <strong>{trackingResult.currentLocation}</strong></span>
                                            </motion.div>
                                            <motion.div
                                                className="flex items-center group"
                                                variants={fadeInUp}
                                                whileHover={{ x: 5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <Clock className="w-5 h-5 text-blue-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                                                <span className="text-gray-700">Dự kiến giao: <strong>{trackingResult.estimatedDelivery}</strong></span>
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="bg-white rounded-lg p-6 shadow-md hover-lift"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Hành trình vận chuyển</h4>
                                        <div className="space-y-4">
                                            {trackingResult.timeline.map((step, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="flex items-start group"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.4 + index * 0.1 }}
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <motion.div
                                                        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 ${step.completed
                                                            ? 'bg-green-500 border-green-500'
                                                            : 'bg-gray-200 border-gray-300'
                                                            } flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-200`}
                                                        animate={step.completed ? { scale: [1, 1.2, 1] } : {}}
                                                        transition={{ delay: 0.5 + index * 0.1 }}
                                                    >
                                                        {step.completed && (
                                                            <motion.div
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                transition={{ delay: 0.6 + index * 0.1 }}
                                                            >
                                                                <CheckCircle className="w-4 h-4 text-white" />
                                                            </motion.div>
                                                        )}
                                                    </motion.div>
                                                    <div className="flex-1">
                                                        <h5 className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'
                                                            } group-hover:text-blue-600 transition-colors duration-200`}>
                                                            {step.status}
                                                        </h5>
                                                        <p className="text-sm text-gray-600">{step.location}</p>
                                                        <p className="text-xs text-gray-500">{step.time}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Quick tracking examples */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-500 mb-4">Mã đơn hàng mẫu để test:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {['DL2024001234', 'DL2024005678', 'DL2024009999'].map((code, index) => (
                            <motion.button
                                key={code}
                                onClick={() => setTrackingNumber(code)}
                                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm hover-lift"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {code}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
