'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin, Package, Phone, Shield, Truck } from 'lucide-react'

const services = [
    {
        icon: Truck,
        title: "Vận chuyển hàng hóa",
        description: "Dịch vụ vận chuyển hàng hóa an toàn, nhanh chóng từ Bắc vào Nam với đội xe đa dạng từ 1-10 tấn.",
        features: ["Đa dạng loại xe", "Tài xế kinh nghiệm", "Theo dõi hành trình"]
    },
    {
        icon: Clock,
        title: "Giao hàng nhanh",
        description: "Cam kết thời gian giao hàng nhanh nhất, đúng hẹn với hệ thống logistics hiện đại.",
        features: ["Giao hàng trong ngày", "Theo dõi real-time", "Báo cáo tiến độ"]
    },
    {
        icon: Shield,
        title: "Bảo hiểm hàng hóa",
        description: "Toàn bộ hàng hóa được bảo hiểm 100% giá trị, đảm bảo an toàn tuyệt đối.",
        features: ["Bảo hiểm toàn diện", "Bồi thường nhanh chóng", "Quy trình minh bạch"]
    },
    {
        icon: MapPin,
        title: "Phủ sóng toàn quốc",
        description: "Mạng lưới vận chuyển bao phủ toàn quốc, từ các thành phố lớn đến vùng sâu vùng xa.",
        features: ["63 tỉnh thành", "Mạng lưới rộng khắp", "Kho bãi chiến lược"]
    },
    {
        icon: Phone,
        title: "Hỗ trợ 24/7",
        description: "Đội ngũ chăm sóc khách hàng chuyên nghiệp, sẵn sàng hỗ trợ 24/7.",
        features: ["Hotline 24/7", "Tư vấn miễn phí", "Xử lý khiếu nại nhanh"]
    },
    {
        icon: Package,
        title: "Đóng gói chuyên nghiệp",
        description: "Dịch vụ đóng gói hàng hóa chuyên nghiệp, đảm bảo an toàn trong quá trình vận chuyển.",
        features: ["Vật liệu chất lượng", "Kỹ thuật chuyên nghiệp", "Tùy chỉnh theo yêu cầu"]
    }
]

export default function Services() {
    return (
        <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
                <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Truck className="w-4 h-4 mr-2" />
                        Dịch vụ chuyên nghiệp
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Dịch vụ vận tải{' '}
                        <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                            chuyên nghiệp
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Chúng tôi cung cấp giải pháp vận tải toàn diện với dịch vụ đa dạng,
                        đáp ứng mọi nhu cầu vận chuyển hàng hóa của bạn
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg shadow-orange-500/10 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 border border-white/50 hover:border-orange-200 group relative overflow-hidden"
                        >
                            {/* Hover Background Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <motion.div
                                    className="flex items-center mb-6"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-4 rounded-xl mr-4 group-hover:from-orange-200 group-hover:to-amber-200 transition-all duration-300 shadow-md">
                                        <service.icon className="w-8 h-8 text-orange-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                </motion.div>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <ul className="space-y-3">
                                    {service.features.map((feature, featureIndex) => (
                                        <motion.li
                                            key={featureIndex}
                                            className="flex items-center text-sm text-gray-700"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                                            viewport={{ once: true }}
                                        >
                                            <motion.div
                                                className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mr-3"
                                                whileHover={{ scale: 1.5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            />
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

                        <div className="relative z-10">
                            <motion.h3
                                className="text-3xl md:text-4xl font-bold mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                Không biết chọn loại xe nào phù hợp?
                            </motion.h3>

                            <motion.p
                                className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                Đội ngũ chuyên gia của chúng tôi sẽ tư vấn loại xe tối ưu nhất cho hàng hóa của bạn
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <motion.button
                                    className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Tư vấn miễn phí
                                </motion.button>

                                <motion.button
                                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Gọi ngay: 0912 345 678
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
