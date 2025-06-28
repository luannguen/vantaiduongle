'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin, Package, Phone, Shield, Truck } from 'lucide-react'

// Component cho icon xe tải với hiệu ứng chạy
const AnimatedTruck = () => (
    <div className="relative">
        <motion.div
            animate={{
                x: [0, 2, 0, -1, 0],
                y: [0, -0.5, 0, 0.5, 0]
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <Truck className="w-8 h-8 text-orange-600" />
        </motion.div>
        {/* Khói từ ống xả */}
        <motion.div
            className="absolute -top-1 -right-1"
            animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [0.8, 1.2, 0.8],
                x: [0, 2, 4]
            }}
            transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeOut"
            }}
        >
            <div className="text-xs text-gray-400">💨</div>
        </motion.div>
    </div>
)

// Component cho icon đồng hồ với kim quay
const AnimatedClock = () => (
    <div className="relative inline-block w-8 h-8">
        <Clock className="w-8 h-8 text-orange-600" />
        {/* Kim giờ */}
        <motion.div
            className="absolute w-0.5 bg-orange-800 rounded-full origin-bottom"
            style={{
                height: '8px',
                bottom: '50%',
                left: '50%',
                marginLeft: '-1px',
                transformOrigin: "bottom center"
            }}
            animate={{ rotate: 360 }}
            transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
            }}
        />
        {/* Kim phút */}
        <motion.div
            className="absolute w-0.5 bg-orange-600 rounded-full origin-bottom"
            style={{
                height: '12px',
                bottom: '50%',
                left: '50%',
                marginLeft: '-1px',
                transformOrigin: "bottom center"
            }}
            animate={{ rotate: 360 }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
            }}
        />
        {/* Kim giây */}
        <motion.div
            className="absolute w-px bg-red-500 rounded-full origin-bottom"
            style={{
                height: '14px',
                bottom: '50%',
                left: '50%',
                marginLeft: '-0.5px',
                transformOrigin: "bottom center"
            }}
            animate={{ rotate: 360 }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
            }}
        />
        {/* Tâm đồng hồ */}
        <div className="absolute w-1.5 h-1.5 bg-orange-800 rounded-full z-10"
            style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }} />
    </div>
)

// Component cho icon shield với hiệu ứng bảo vệ
const AnimatedShield = () => (
    <div className="relative">
        <motion.div
            animate={{
                scale: [1, 1.05, 1],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <Shield className="w-8 h-8 text-orange-600" />
        </motion.div>
        {/* Hiệu ứng sóng bảo vệ */}
        <motion.div
            className="absolute inset-0 border-2 border-orange-300 rounded-full"
            animate={{
                scale: [1, 1.8, 1],
                opacity: [0.8, 0, 0.8]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
            }}
        />
        <motion.div
            className="absolute inset-0 border border-orange-200 rounded-full"
            animate={{
                scale: [1, 2.2, 1],
                opacity: [0.6, 0, 0.6]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.5
            }}
        />
    </div>
)

// Component cho icon map pin với hiệu ứng bounce
const AnimatedMapPin = () => (
    <motion.div
        animate={{
            y: [0, -4, 0],
        }}
        transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        <MapPin className="w-8 h-8 text-orange-600" />
    </motion.div>
)

// Component cho icon phone với hiệu ứng chuông
const AnimatedPhone = () => (
    <div className="relative">
        <motion.div
            animate={{
                rotate: [0, 8, -8, 8, -8, 0],
            }}
            transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
            }}
        >
            <Phone className="w-8 h-8 text-orange-600" />
        </motion.div>
        {/* Sóng âm thanh */}
        <motion.div
            className="absolute -top-1 -right-1"
            animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 0.8, 0]
            }}
            transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 1.8,
                ease: "easeOut"
            }}
        >
            <div className="w-3 h-3 border-2 border-orange-400 rounded-full" />
        </motion.div>
        <motion.div
            className="absolute -top-2 -right-2"
            animate={{
                scale: [0, 2, 0],
                opacity: [0, 0.4, 0]
            }}
            transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 1.8,
                ease: "easeOut",
                delay: 0.2
            }}
        >
            <div className="w-4 h-4 border border-orange-300 rounded-full" />
        </motion.div>
    </div>
)

// Component cho icon package với hiệu ứng đóng gói
const AnimatedPackage = () => (
    <div className="relative">
        <motion.div
            animate={{
                y: [0, -2, 0],
                rotateY: [0, 10, -10, 0]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <Package className="w-8 h-8 text-orange-600" />
        </motion.div>
        {/* Băng keo đóng gói */}
        <motion.div
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-orange-400"
            initial={{ scaleX: 0 }}
            animate={{
                scaleX: [0, 1, 1, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
        <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-400"
            initial={{ scaleY: 0 }}
            animate={{
                scaleY: [0, 1, 1, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
            }}
        />
    </div>
)

const services = [
    {
        icon: AnimatedTruck,
        title: "Vận chuyển hàng hóa",
        description: "Dịch vụ vận chuyển hàng hóa an toàn, nhanh chóng từ Bắc vào Nam với đội xe đa dạng từ 1-10 tấn.",
        features: ["Đa dạng loại xe", "Tài xế kinh nghiệm", "Theo dõi hành trình"]
    },
    {
        icon: AnimatedClock,
        title: "Giao hàng nhanh",
        description: "Cam kết thời gian giao hàng nhanh nhất, đúng hẹn với hệ thống logistics hiện đại.",
        features: ["Giao hàng trong ngày", "Theo dõi real-time", "Báo cáo tiến độ"]
    },
    {
        icon: AnimatedShield,
        title: "Bảo hiểm hàng hóa",
        description: "Toàn bộ hàng hóa được bảo hiểm 100% giá trị, đảm bảo an toàn tuyệt đối.",
        features: ["Bảo hiểm toàn diện", "Bồi thường nhanh chóng", "Quy trình minh bạch"]
    },
    {
        icon: AnimatedMapPin,
        title: "Phủ sóng toàn quốc",
        description: "Mạng lưới vận chuyển bao phủ toàn quốc, từ các thành phố lớn đến vùng sâu vùng xa.",
        features: ["63 tỉnh thành", "Mạng lưới rộng khắp", "Kho bãi chiến lược"]
    },
    {
        icon: AnimatedPhone,
        title: "Hỗ trợ 24/7",
        description: "Đội ngũ chăm sóc khách hàng chuyên nghiệp, sẵn sàng hỗ trợ 24/7.",
        features: ["Hotline 24/7", "Tư vấn miễn phí", "Xử lý khiếu nại nhanh"]
    },
    {
        icon: AnimatedPackage,
        title: "Đóng gói chuyên nghiệp",
        description: "Dịch vụ đóng gói hàng hóa chuyên nghiệp, đảm bảo an toàn trong quá trình vận chuyển.",
        features: ["Vật liệu chất lượng", "Kỹ thuật chuyên nghiệp", "Tùy chỉnh theo yêu cầu"]
    }
]

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
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
                                        <service.icon />
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
                                Bạn là doanh nghiệp cần vận chuyển hàng ngày?
                            </motion.h3>

                            <motion.p
                                className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                Trở thành đối tác để nhận <strong>giảm giá đến 30%</strong> và tận hưởng nhiều quyền lợi đặc biệt
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <motion.button
                                    className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-yellow-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        document.getElementById('partnership-booster')?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                >
                                    🤝 Đăng ký đối tác ngay
                                </motion.button>

                                <motion.button
                                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                >
                                    💬 Tư vấn miễn phí
                                </motion.button>
                            </motion.div>

                            {/* Partnership Benefits */}
                            <motion.div
                                className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3">
                                    <div className="text-2xl font-bold">30%</div>
                                    <div className="text-xs text-orange-100">Giảm giá tối đa</div>
                                </div>
                                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3">
                                    <div className="text-2xl font-bold">24/7</div>
                                    <div className="text-xs text-orange-100">Hỗ trợ riêng</div>
                                </div>
                                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3">
                                    <div className="text-2xl font-bold">VIP</div>
                                    <div className="text-xs text-orange-100">Ưu tiên cao</div>
                                </div>
                                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3">
                                    <div className="text-2xl font-bold">+45%</div>
                                    <div className="text-xs text-orange-100">Tăng hiệu quả</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
