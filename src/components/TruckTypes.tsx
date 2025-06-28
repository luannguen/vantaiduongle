'use client'

import { motion } from 'framer-motion'
import { Package, Truck } from 'lucide-react'

const truckTypes = [
    {
        name: "Xe tải 1 tấn",
        capacity: "1 tấn",
        dimensions: "3.2m x 1.6m x 1.7m",
        description: "Phù hợp cho hàng hóa nhỏ, giao hàng nội thành và liên tỉnh gần.",
        features: [
            "Giao hàng nhanh trong thành phố",
            "Tiết kiệm chi phí cho hàng nhỏ",
            "Linh hoạt trong giao thông đô thị"
        ],
        price: "Từ 800.000đ",
        image: "🚚"
    },
    {
        name: "Xe tải 2 tấn",
        capacity: "2 tấn",
        dimensions: "4.2m x 1.8m x 1.8m",
        description: "Lựa chọn phổ biến cho vận chuyển hàng hóa vừa phải giữa các tỉnh.",
        features: [
            "Tải trọng vừa phải",
            "Chi phí hợp lý",
            "Phù hợp đa dạng loại hàng"
        ],
        price: "Từ 1.200.000đ",
        image: "🚛"
    },
    {
        name: "Xe tải 5 tấn",
        capacity: "5 tấn",
        dimensions: "6.2m x 2.2m x 2.2m",
        description: "Tối ưu cho vận chuyển hàng hóa lớn, phù hợp cho doanh nghiệp.",
        features: [
            "Tải trọng lớn",
            "Tiết kiệm chi phí vận chuyển",
            "Phù hợp hàng công nghiệp"
        ],
        price: "Từ 2.000.000đ",
        image: "🚚"
    },
    {
        name: "Xe tải 10 tấn",
        capacity: "10 tấn",
        dimensions: "8.5m x 2.4m x 2.4m",
        description: "Giải pháp cho các đơn hàng lớn, vận chuyển hàng hóa công nghiệp.",
        features: [
            "Tải trọng cực lớn",
            "Vận chuyển xa",
            "Phù hợp hàng xuất khẩu"
        ],
        price: "Từ 3.500.000đ",
        image: "🚛"
    }
]

const specialTrucks = [
    {
        name: "Xe tải thùng lạnh",
        description: "Chuyên vận chuyển hàng tươi sống, thực phẩm, dược phẩm",
        temperature: "-18°C đến +25°C",
        features: [
            "Kiểm soát nhiệt độ chính xác",
            "Bảo quản chất lượng hàng hóa",
            "Phù hợp hàng xuất khẩu"
        ]
    },
    {
        name: "Xe tải thùng kín",
        description: "Bảo vệ hàng hóa khỏi thời tiết, bụi bẩn và va đập",
        temperature: "Thường",
        features: [
            "Bảo vệ hoàn toàn",
            "Phù hợp hàng điện tử",
            "An toàn tuyệt đối"
        ]
    },
    {
        name: "Xe tải thùng mui bạt",
        description: "Linh hoạt cho nhiều loại hàng hóa, dễ bốc xếp",
        temperature: "Thường",
        features: [
            "Bốc xếp dễ dàng",
            "Chi phí tiết kiệm",
            "Phù hợp hàng xây dựng"
        ]
    }
]

export default function TruckTypes() {
    return (
        <section id="trucks" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Đa dạng loại xe phục vụ
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Đội xe đa dạng từ 1 tấn đến 10 tấn, đáp ứng mọi nhu cầu vận chuyển
                        từ hàng hóa nhỏ lẻ đến các đơn hàng công nghiệp lớn.
                    </p>
                </motion.div>

                {/* Standard Trucks */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {truckTypes.map((truck, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -15,
                                rotateY: 5,
                                transition: { duration: 0.3 }
                            }}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover-lift"
                            style={{
                                transformStyle: "preserve-3d",
                                perspective: "1000px"
                            }}
                        >
                            <div className="p-6">
                                <motion.div
                                    className="text-6xl text-center mb-4"
                                    whileHover={{
                                        scale: 1.2,
                                        rotateY: 360
                                    }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {truck.image}
                                </motion.div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-orange-600 transition-colors duration-300">
                                    {truck.name}
                                </h3>

                                <div className="text-center mb-4">
                                    <motion.span
                                        className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-orange-200 transition-colors duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {truck.capacity}
                                    </motion.span>
                                </div>

                                <p className="text-gray-600 text-sm mb-4 text-center">
                                    {truck.description}
                                </p>

                                <div className="mb-4">
                                    <p className="text-sm text-gray-700 mb-2">
                                        <strong>Kích thước:</strong> {truck.dimensions}
                                    </p>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {truck.features.map((feature, featureIndex) => (
                                            <motion.li
                                                key={featureIndex}
                                                className="flex items-center"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                <motion.div
                                                    className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"
                                                    whileHover={{ scale: 1.5 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                ></motion.div>
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="border-t pt-4">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-lg font-bold text-orange-600">{truck.price}</span>
                                        <div className="text-xs text-gray-500">
                                            💡 Giá có thể thay đổi theo cự ly
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <motion.button
                                            className="flex-1 bg-orange-600 text-white px-3 py-2 rounded-lg hover:bg-orange-700 transition-all duration-300 text-sm font-medium flex items-center justify-center hover-lift hover-glow"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            💬 Báo giá
                                        </motion.button>
                                        <motion.button
                                            className="flex-1 border border-orange-600 text-orange-600 px-3 py-2 rounded-lg hover:bg-orange-50 transition-all duration-300 text-sm font-medium flex items-center justify-center"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            📞 Gọi ngay
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Special Trucks */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Xe chuyên dụng
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {specialTrucks.map((truck, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <Truck className="w-8 h-8 text-orange-600 mr-3" />
                                    <h4 className="text-lg font-bold text-gray-900">{truck.name}</h4>
                                </div>
                                <p className="text-gray-600 mb-4">{truck.description}</p>
                                <div className="mb-4">
                                    <span className="text-sm text-gray-700">
                                        <strong>Nhiệt độ:</strong> {truck.temperature}
                                    </span>
                                </div>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    {truck.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <Package className="w-4 h-4 text-orange-600 mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="relative bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-2xl shadow-orange-500/25">
                        {/* Animated Background Pattern */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
                            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-yellow-300 rounded-full opacity-10 animate-bounce"></div>
                            <div className="absolute top-1/2 right-0 w-40 h-40 bg-white rounded-full opacity-5 animate-pulse [animation-delay:1s]"></div>
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

                        <div className="relative z-10">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="mb-6"
                            >
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                                    <svg className="w-10 h-10 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </motion.div>

                            <motion.h3
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                            >
                                Không biết chọn loại xe nào phù hợp?
                            </motion.h3>

                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-lg md:text-xl mb-8 text-orange-100 max-w-2xl mx-auto leading-relaxed"
                            >
                                Đội ngũ chuyên gia của chúng tôi sẽ tư vấn loại xe tối ưu nhất cho hàng hóa của bạn
                            </motion.p>

                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            >
                                <motion.button
                                    className="group relative bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        📞 Tư vấn miễn phí
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                </motion.button>

                                <motion.div
                                    className="flex items-center gap-2 text-orange-100"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-sm">Tư vấn 24/7</span>
                                    </div>
                                    <span className="text-white/40">•</span>
                                    <span className="text-sm">Hoàn toàn miễn phí</span>
                                </motion.div>
                            </motion.div>

                            {/* Benefits */}
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                viewport={{ once: true }}
                                className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
                            >
                                {[
                                    { icon: "⚡", text: "Phản hồi nhanh chóng" },
                                    { icon: "🎯", text: "Tư vấn chính xác" },
                                    { icon: "💰", text: "Báo giá tốt nhất" }
                                ].map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-2 text-orange-100 justify-center sm:justify-start"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <span className="text-lg">{benefit.icon}</span>
                                        <span className="text-sm font-medium">{benefit.text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
