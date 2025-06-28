'use client'

import { motion } from 'framer-motion'
import { Award, Calendar, CheckCircle, Shield, Star } from 'lucide-react'

const certifications = [
    {
        id: 1,
        title: 'Giấy phép kinh doanh vận tải',
        issuer: 'Sở Giao thông Vận tải TP.HCM',
        date: 'Cấp ngày 15/03/2020',
        validUntil: 'Có hiệu lực đến 15/03/2025',
        icon: Award,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
    },
    {
        id: 2,
        title: 'Chứng nhận ISO 9001:2015',
        issuer: 'Tổ chức chứng nhận Quốc tế',
        date: 'Cấp ngày 20/08/2022',
        validUntil: 'Có hiệu lực đến 20/08/2025',
        icon: Shield,
        color: 'text-green-600',
        bgColor: 'bg-green-50'
    },
    {
        id: 3,
        title: 'Chứng nhận an toàn lao động',
        issuer: 'Thanh tra Lao động TP.HCM',
        date: 'Cấp ngày 10/01/2024',
        validUntil: 'Có hiệu lực đến 10/01/2026',
        icon: CheckCircle,
        color: 'text-amber-600',
        bgColor: 'bg-amber-50'
    },
    {
        id: 4,
        title: 'Doanh nghiệp uy tín năm 2023',
        issuer: 'Hiệp hội Vận tải Việt Nam',
        date: 'Nhận giải ngày 05/12/2023',
        validUntil: 'Danh hiệu thường niên',
        icon: Star,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
    }
]

const achievements = [
    {
        title: 'Top 10 doanh nghiệp vận tải uy tín',
        year: '2023',
        description: 'Được bình chọn bởi Hiệp hội Vận tải Việt Nam'
    },
    {
        title: 'Giải thưởng Dịch vụ xuất sắc',
        year: '2022',
        description: 'Vinh danh từ Sở Giao thông Vận tải'
    },
    {
        title: 'Doanh nghiệp tăng trưởng nhanh',
        year: '2021',
        description: 'Tăng trưởng 150% về doanh thu so với năm trước'
    }
]

export default function Certifications() {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Chứng nhận & Giải thưởng
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Những chứng nhận và giải thưởng khẳng định uy tín và chất lượng dịch vụ của chúng tôi
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            className="bg-white rounded-2xl shadow-lg shadow-blue-500/10 p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-start">
                                <div className={`${cert.bgColor} p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <cert.icon className={`w-8 h-8 ${cert.color}`} />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                        {cert.title}
                                    </h3>
                                    <p className="text-gray-600 mb-2 font-medium">
                                        {cert.issuer}
                                    </p>
                                    <div className="space-y-1 text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {cert.date}
                                        </div>
                                        <div className="flex items-center">
                                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                            {cert.validUntil}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Achievements Section */}
                <motion.div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Thành tích nổi bật
                        </h3>
                        <p className="text-blue-100 text-lg">
                            Những dấu mốc quan trọng trong hành trình phát triển
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="text-center group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300">
                                    <div className="text-3xl font-bold text-yellow-300 mb-2">
                                        {achievement.year}
                                    </div>
                                    <h4 className="text-lg font-bold mb-3">
                                        {achievement.title}
                                    </h4>
                                    <p className="text-blue-100 text-sm">
                                        {achievement.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Quality Assurance */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="bg-white rounded-2xl shadow-lg shadow-blue-500/10 p-8 max-w-4xl mx-auto border border-gray-100">
                        <div className="flex items-center justify-center mb-6">
                            <div className="bg-green-100 p-4 rounded-full mr-4">
                                <Shield className="w-8 h-8 text-green-600" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Cam kết chất lượng
                                </h3>
                                <p className="text-gray-600">
                                    Tuân thủ nghiêm ngặt các tiêu chuẩn quốc tế
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="p-4">
                                <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
                                <p className="text-gray-600 text-sm">Tuân thủ quy định pháp luật</p>
                            </div>
                            <div className="p-4">
                                <div className="text-2xl font-bold text-green-600 mb-2">24/7</div>
                                <p className="text-gray-600 text-sm">Giám sát chất lượng dịch vụ</p>
                            </div>
                            <div className="p-4">
                                <div className="text-2xl font-bold text-purple-600 mb-2">ISO</div>
                                <p className="text-gray-600 text-sm">Chứng nhận hệ thống quản lý</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
