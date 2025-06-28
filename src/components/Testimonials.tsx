'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Package, Star, User } from 'lucide-react'

const testimonials = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        company: "Công ty ABC",
        rating: 5,
        comment: "Dịch vụ tuyệt vời! Hàng hóa được giao đúng hẹn và an toàn. Tôi sẽ tiếp tục sử dụng dịch vụ của Vận Tải Dương Lê.",
        route: "Hà Nội → TP.HCM",
        cargo: "Điện tử",
        date: "15/12/2024"
    },
    {
        id: 2,
        name: "Trần Thị B",
        company: "Doanh nghiệp XYZ",
        rating: 5,
        comment: "Đội ngũ chuyên nghiệp, giá cả hợp lý. Đặc biệt ấn tượng với việc theo dõi đơn hàng real-time.",
        route: "Đà Nẵng → Hà Nội",
        cargo: "Thực phẩm đông lạnh",
        date: "10/12/2024"
    },
    {
        id: 3,
        name: "Lê Văn C",
        company: "Cửa hàng DEF",
        rating: 5,
        comment: "Lần đầu sử dụng dịch vụ và rất hài lòng. Sẽ giới thiệu cho bạn bè và đối tác.",
        route: "TP.HCM → Cần Thơ",
        cargo: "Hàng tiêu dùng",
        date: "08/12/2024"
    }
]

export default function Testimonials() {
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 10
            }
        }
    }

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const starVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 200,
                damping: 10
            }
        }
    }

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Khách hàng nói gì về chúng tôi
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Hàng nghìn khách hàng đã tin tưởng và sử dụng dịch vụ của chúng tôi
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            variants={cardVariants}
                            className="bg-white rounded-xl shadow-lg hover-lift group relative overflow-hidden"
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 300, damping: 20 }
                            }}
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

                            <div className="relative z-10 p-6">
                                <motion.div
                                    className="flex items-center mb-4"
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div
                                        className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors duration-300"
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <User className="w-6 h-6 text-blue-600" />
                                    </motion.div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-600">{testimonial.company}</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-center mb-4"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            variants={starVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            transition={{ delay: index * 0.1 + 0.4 + i * 0.05 }}
                                            viewport={{ once: true }}
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: 10,
                                                transition: { type: "spring", stiffness: 300 }
                                            }}
                                        >
                                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.p
                                    className="text-gray-700 mb-6 italic relative"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="text-4xl text-blue-200 absolute -top-2 -left-2">&ldquo;</span>
                                    {testimonial.comment}
                                    <span className="text-4xl text-blue-200 absolute -bottom-4 -right-2">&rdquo;</span>
                                </motion.p>

                                <motion.div
                                    className="space-y-2 text-sm text-gray-600"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 + 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div
                                        className="flex items-center group-hover:text-blue-600 transition-colors duration-300"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                                        <span>{testimonial.route}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center group-hover:text-blue-600 transition-colors duration-300"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Package className="w-4 h-4 mr-2 text-blue-600" />
                                        <span>{testimonial.cargo}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center group-hover:text-blue-600 transition-colors duration-300"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                                        <span>{testimonial.date}</span>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden hover-lift"
                    whileHover={{ scale: 1.02 }}
                >
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                    <motion.div
                        className="grid md:grid-cols-4 gap-8 text-center relative z-10"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { value: "98%", label: "Khách hàng hài lòng" },
                            { value: "24h", label: "Thời gian phản hồi" },
                            { value: "99.9%", label: "Giao hàng đúng hẹn" },
                            { value: "0%", label: "Hàng hóa thất lạc" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30, scale: 0.8 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 10,
                                            delay: index * 0.1
                                        }
                                    }
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -5,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                            >
                                <motion.div
                                    className="text-4xl font-bold mb-2"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        delay: index * 0.1 + 0.3
                                    }}
                                    viewport={{ once: true }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-blue-100">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
