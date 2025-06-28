'use client'

import { motion } from 'framer-motion'
import { Calculator, MapPin, Package, Truck, Weight } from 'lucide-react'
import { useState } from 'react'

export default function PriceCalculator() {
    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')
    const [weight, setWeight] = useState('')
    const [truckType, setTruckType] = useState('')
    const [estimatedCost, setEstimatedCost] = useState<number | null>(null)

    const calculatePrice = () => {
        // Simple price calculation logic
        const basePrice = {
            '1-ton': 800000,
            '2-ton': 1200000,
            '5-ton': 2000000,
            '10-ton': 3500000
        }[truckType] || 800000

        const distanceMultiplier = 1.2 // Simplified
        const weightMultiplier = parseFloat(weight) || 1

        const total = basePrice * distanceMultiplier * (weightMultiplier / 1000)
        setEstimatedCost(total)
    }

    return (
        <section id="pricing" className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 bg-indigo-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center mb-4">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-xl mr-3">
                            <Calculator className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Tính giá vận chuyển
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Tính toán chi phí vận chuyển dự kiến cho hành trình của bạn
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50"
                >
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Input Form */}
                        <div className="space-y-6">
                            <div>
                                <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                                    <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                                    Điểm đi
                                </label>
                                <input
                                    type="text"
                                    value={origin}
                                    onChange={(e) => setOrigin(e.target.value)}
                                    placeholder="Ví dụ: Hà Nội"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                />
                            </div>

                            <div>
                                <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                                    <MapPin className="w-4 h-4 mr-2 text-green-600" />
                                    Điểm đến
                                </label>
                                <input
                                    type="text"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    placeholder="Ví dụ: TP.HCM"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                />
                            </div>

                            <div>
                                <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                                    <Weight className="w-4 h-4 mr-2 text-purple-600" />
                                    Trọng lượng (kg)
                                </label>
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    placeholder="Ví dụ: 500"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                />
                            </div>

                            <div>
                                <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                                    <Truck className="w-4 h-4 mr-2 text-orange-600" />
                                    Loại xe
                                </label>
                                <select
                                    value={truckType}
                                    onChange={(e) => setTruckType(e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                    title="Chọn loại xe tải"
                                >
                                    <option value="">Chọn loại xe</option>
                                    <option value="1-ton">Xe 1 tấn</option>
                                    <option value="2-ton">Xe 2 tấn</option>
                                    <option value="5-ton">Xe 5 tấn</option>
                                    <option value="10-ton">Xe 10 tấn</option>
                                </select>
                            </div>

                            <motion.button
                                onClick={calculatePrice}
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={!origin || !destination || !weight || !truckType}
                            >
                                🧮 Tính giá vận chuyển
                            </motion.button>
                        </div>

                        {/* Result Display */}
                        <div className="flex items-center justify-center">
                            {estimatedCost ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200"
                                >
                                    <Package className="w-16 h-16 text-green-600 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Chi phí dự kiến</h3>
                                    <div className="text-4xl font-bold text-green-600 mb-4">
                                        {estimatedCost.toLocaleString('vi-VN')}đ
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">
                                        * Giá chỉ mang tính chất tham khảo
                                    </p>
                                    <motion.button
                                        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        📞 Gọi xác nhận giá
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <div className="text-center p-8 text-gray-400">
                                    <Calculator className="w-16 h-16 mx-auto mb-4" />
                                    <p className="text-lg">Nhập thông tin để tính giá</p>
                                    <p className="text-sm">Kết quả sẽ hiển thị tại đây</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Quick Info */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div className="flex items-center justify-center text-sm text-gray-600">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                Giá đã bao gồm nhiên liệu
                            </div>
                            <div className="flex items-center justify-center text-sm text-gray-600">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                Miễn phí bốc xếp cơ bản
                            </div>
                            <div className="flex items-center justify-center text-sm text-gray-600">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                                Bảo hiểm hàng hóa
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
