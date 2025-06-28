'use client'

import { motion } from 'framer-motion'

const partners = [
    {
        id: 1,
        name: "Tiki",
        logo: "/images/partners/tiki.png",
        category: "E-commerce",
        partnership: "2019",
        volume: "500+ đơn/tháng",
        description: "Đối tác vận chuyển chính cho khu vực Miền Bắc"
    },
    {
        id: 2,
        name: "Shopee",
        logo: "/images/partners/shopee.png",
        category: "E-commerce",
        partnership: "2020",
        volume: "800+ đơn/tháng",
        description: "Vận chuyển hàng hóa toàn quốc cho nền tảng thương mại điện tử"
    },
    {
        id: 3,
        name: "Lazada",
        logo: "/images/partners/lazada.png",
        category: "E-commerce",
        partnership: "2021",
        volume: "300+ đơn/tháng",
        description: "Đối tác logistics cho các sản phẩm điện tử và gia dụng"
    },
    {
        id: 4,
        name: "Vinamilk",
        logo: "/images/partners/vinamilk.png",
        category: "FMCG",
        partnership: "2018",
        volume: "1000+ đơn/tháng",
        description: "Vận chuyển sản phẩm sữa và thực phẩm trên toàn quốc"
    },
    {
        id: 5,
        name: "Unilever",
        logo: "/images/partners/unilever.png",
        category: "FMCG",
        partnership: "2019",
        volume: "600+ đơn/tháng",
        description: "Phân phối sản phẩm tiêu dùng đến các cửa hàng bán lẻ"
    },
    {
        id: 6,
        name: "Samsung",
        logo: "/images/partners/samsung.png",
        category: "Electronics",
        partnership: "2020",
        volume: "400+ đơn/tháng",
        description: "Vận chuyển thiết bị điện tử và đồ gia dụng cao cấp"
    },
    {
        id: 7,
        name: "LG",
        logo: "/images/partners/lg.png",
        category: "Electronics",
        partnership: "2021",
        volume: "250+ đơn/tháng",
        description: "Logistics cho máy lạnh, tủ lạnh và thiết bị gia đình"
    },
    {
        id: 8,
        name: "Thế Giới Di Động",
        logo: "/images/partners/tgdd.png",
        category: "Retail",
        partnership: "2022",
        volume: "350+ đơn/tháng",
        description: "Giao hàng nhanh cho chuỗi bán lẻ điện thoại hàng đầu"
    },
    {
        id: 9,
        name: "FPT",
        logo: "/images/partners/fpt.png",
        category: "Technology",
        partnership: "2020",
        volume: "200+ đơn/tháng",
        description: "Vận chuyển thiết bị IT và giải pháp công nghệ"
    },
    {
        id: 10,
        name: "VinGroup",
        logo: "/images/partners/vingroup.png",
        category: "Conglomerate",
        partnership: "2019",
        volume: "1200+ đơn/tháng",
        description: "Đối tác logistics cho hệ sinh thái VinGroup"
    },
    {
        id: 11,
        name: "Grab",
        logo: "/images/partners/grab.png",
        category: "Tech",
        partnership: "2023",
        volume: "150+ đơn/tháng",
        description: "Hỗ trợ logistics cho dịch vụ giao hàng và thương mại"
    },
    {
        id: 12,
        name: "Sendo",
        logo: "/images/partners/sendo.png",
        category: "E-commerce",
        partnership: "2022",
        volume: "180+ đơn/tháng",
        description: "Kết nối người mua và người bán qua dịch vụ vận chuyển"
    }
]

// Duplicate partners for seamless loop
// const allPartners = [...partners, ...partners]

const achievements = [
    {
        id: 1,
        title: "1000+ Đối tác",
        description: "Được hơn 1000+ doanh nghiệp tin tưởng lựa chọn làm đối tác logistics",
        icon: "🤝",
        number: "1000+",
        subtitle: "Đối tác tin cậy"
    },
    {
        id: 2,
        title: "63/63 Tỉnh thành",
        description: "Mạng lưới phủ sóng toàn quốc, phục vụ mọi tỉnh thành",
        icon: "🗺️",
        number: "63/63",
        subtitle: "Phủ sóng toàn quốc"
    },
    {
        id: 3,
        title: "99.9% Đúng hẹn",
        description: "Tỷ lệ giao hàng đúng hẹn và an toàn cao nhất thị trường",
        icon: "✅",
        number: "99.9%",
        subtitle: "Chất lượng đảm bảo"
    },
    {
        id: 4,
        title: "15+ Năm kinh nghiệm",
        description: "Hệ thống công nghệ hiện đại và đội ngũ chuyên nghiệp",
        icon: "💻",
        number: "15+",
        subtitle: "Năm kinh nghiệm"
    }
]

const partnerCategories = [
    {
        name: "E-commerce",
        description: "Các nền tảng thương mại điện tử",
        count: 4,
        color: "from-blue-500 to-cyan-500",
        textColor: "text-blue-600"
    },
    {
        name: "FMCG",
        description: "Hàng tiêu dùng nhanh",
        count: 2,
        color: "from-green-500 to-emerald-500",
        textColor: "text-green-600"
    },
    {
        name: "Electronics",
        description: "Thiết bị điện tử",
        count: 2,
        color: "from-orange-500 to-amber-500",
        textColor: "text-orange-600"
    },
    {
        name: "Technology",
        description: "Công nghệ và dịch vụ số",
        count: 2,
        color: "from-purple-500 to-pink-500",
        textColor: "text-purple-600"
    },
    {
        name: "Retail",
        description: "Chuỗi bán lẻ",
        count: 1,
        color: "from-red-500 to-rose-500",
        textColor: "text-red-600"
    },
    {
        name: "Conglomerate",
        description: "Tập đoàn đa ngành",
        count: 1,
        color: "from-indigo-500 to-blue-500",
        textColor: "text-indigo-600"
    }
]

export default function Partners() {
    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section id="partners" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-xl mr-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                            Đối tác của chúng tôi
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                        Được tin tưởng bởi những thương hiệu hàng đầu tại Việt Nam, từ startup đến tập đoàn lớn
                    </p>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-6 text-sm text-gray-500"
                    >
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            <span>1000+ doanh nghiệp tin tưởng</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                            <span>15+ năm kinh nghiệm</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            <span>99.9% hài lòng</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Partner Categories Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
                >
                    {partnerCategories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className={`bg-gradient-to-r ${category.color} p-4 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                <div className="text-white font-bold text-xl">{category.count}</div>
                            </div>
                            <h4 className={`font-semibold ${category.textColor} text-sm`}>{category.name}</h4>
                            <p className="text-xs text-gray-500">{category.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Featured Partners Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Đối tác nổi bật</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {partners.slice(0, 6).map((partner, index) => (
                            <motion.div
                                key={partner.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 group relative overflow-hidden"
                                whileHover={{ y: -5 }}
                            >
                                {/* Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10">
                                    {/* Partner Logo */}
                                    <div className="flex items-center mb-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-orange-600 font-bold text-2xl">
                                                {partner.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                                                {partner.name}
                                            </h4>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-medium">
                                                    {partner.category}
                                                </span>
                                                <span className="ml-2">Từ {partner.partnership}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Partnership Info */}
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Khối lượng:</span>
                                            <span className="text-sm font-semibold text-orange-600">{partner.volume}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {partner.description}
                                        </p>
                                    </div>

                                    {/* Success Indicators */}
                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                        <div className="flex items-center text-xs text-green-600">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Đối tác lâu dài
                                        </div>
                                        <div className="flex items-center text-xs text-blue-600">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            Tăng trưởng 25%
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Achievements Statistics */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                >
                    {achievements.map((achievement) => (
                        <motion.div
                            key={achievement.id}
                            variants={fadeInUp}
                            className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 group relative overflow-hidden"
                            whileHover={{
                                scale: 1.05,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                        >
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <motion.div
                                    className="text-5xl mb-4"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        rotate: [0, 5, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: achievement.id * 0.5
                                    }}
                                >
                                    {achievement.icon}
                                </motion.div>

                                <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:text-orange-700 transition-colors">
                                    {achievement.number}
                                </div>

                                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                    {achievement.subtitle}
                                </h4>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {achievement.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Partnership Success Stories */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Câu chuyện thành công</h3>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Những thành tựu đáng tự hào từ sự hợp tác lâu dài với các đối tác
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                        <div className="relative z-10 grid md:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-4xl font-bold mb-2">5+ Tỷ VNĐ</div>
                                <div className="text-orange-100 text-sm">Tiết kiệm chi phí cho đối tác</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-4xl font-bold mb-2">500K+</div>
                                <div className="text-orange-100 text-sm">Đơn hàng thành công</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-4xl font-bold mb-2">98%</div>
                                <div className="text-orange-100 text-sm">Tỷ lệ gia hạn hợp đồng</div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Partnership CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-100 relative overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/20 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-100/20 rounded-full translate-y-12 -translate-x-12"></div>

                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="mb-6"
                            >
                                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                                    </svg>
                                </div>
                            </motion.div>

                            <motion.h3
                                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                Bạn muốn trở thành đối tác tiếp theo?
                            </motion.h3>

                            <motion.p
                                className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Gia nhập mạng lưới đối tác tin cậy và cùng chúng tôi xây dựng hệ sinh thái logistics hiện đại nhất Việt Nam.
                                Hưởng lợi từ công nghệ tiên tiến, dịch vụ chuyên nghiệp và mạng lưới rộng khắp.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <motion.button
                                    className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-xl hover:from-orange-700 hover:to-amber-700 transition-all duration-300 font-semibold text-lg flex items-center shadow-lg hover:shadow-xl"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                    Đăng ký đối tác ngay
                                </motion.button>

                                <motion.button
                                    className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl hover:bg-orange-600 hover:text-white transition-all duration-300 font-semibold text-lg flex items-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Tư vấn miễn phí
                                </motion.button>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                viewport={{ once: true }}
                                className="mt-8 pt-6 border-t border-gray-200"
                            >
                                <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Tư vấn miễn phí 100%</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Phản hồi trong 30 phút</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Không ràng buộc dài hạn</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
