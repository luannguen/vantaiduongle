'use client'

import { motion } from 'framer-motion'
import {
    ArrowRight,
    Award,
    Calendar,
    CheckCircle,
    Clock,
    Handshake,
    HeartHandshake,
    MessageSquare,
    Phone,
    Shield,
    Star,
    Target,
    TrendingUp,
    Users
} from 'lucide-react'
import { useState } from 'react'

const partnershipJourney = [
    {
        step: 1,
        title: "Liên hệ khám phá",
        subtitle: "Bước đầu làm quen",
        description: "Gọi điện hoặc chat để tìm hiểu nhu cầu và thảo luận sơ bộ về khả năng hợp tác.",
        duration: "15 phút",
        icon: MessageSquare,
        color: "from-orange-500 to-amber-500",
        features: ["Tư vấn miễn phí", "Đánh giá nhu cầu", "Báo giá sơ bộ"]
    },
    {
        step: 2,
        title: "Đơn hàng thử nghiệm",
        subtitle: "Kiểm chứng chất lượng",
        description: "Thực hiện 1-3 đơn hàng nhỏ để đánh giá chất lượng dịch vụ và mức độ phù hợp.",
        duration: "1-2 tuần",
        icon: CheckCircle,
        color: "from-amber-500 to-yellow-500",
        features: ["Giá ưu đãi thử nghiệm", "Theo dõi sát sao", "Đánh giá chi tiết"]
    },
    {
        step: 3,
        title: "Hợp tác thường xuyên",
        subtitle: "Xây dựng niềm tin",
        description: "Tăng dần tần suất và quy mô đơn hàng, xây dựng quy trình làm việc ổn định.",
        duration: "3-6 tháng",
        icon: TrendingUp,
        color: "from-yellow-600 to-orange-600",
        features: ["Giá ưu đãi thường xuyên", "Quy trình chuẩn hóa", "Báo cáo định kỳ"]
    },
    {
        step: 4,
        title: "Đối tác chiến lược",
        subtitle: "Cam kết lâu dài",
        description: "Ký kết hợp đồng khung dài hạn với những ưu đãi và cam kết đặc biệt.",
        duration: "1+ năm",
        icon: HeartHandshake,
        color: "from-amber-700 to-orange-800",
        features: ["Giá ưu đãi tối đa", "Ưu tiên cao nhất", "Tư vấn logistics"]
    }
]

const partnershipBenefits = [
    {
        level: "Thử nghiệm",
        discount: "5-10%",
        features: [
            "Giá ưu đãi lần đầu",
            "Tư vấn miễn phí",
            "Theo dõi 24/7"
        ],
        color: "from-orange-100 to-amber-100",
        textColor: "text-orange-700"
    },
    {
        level: "Thường xuyên",
        discount: "10-15%",
        features: [
            "Giảm giá tích lũy",
            "Ưu tiên xử lý",
            "Báo cáo hàng tháng"
        ],
        color: "from-amber-100 to-yellow-100",
        textColor: "text-amber-700"
    },
    {
        level: "Chiến lược VIP",
        discount: "15-25%",
        features: [
            "Giá tốt nhất thị trường",
            "Account Manager riêng",
            "Dịch vụ tùy chỉnh"
        ],
        color: "from-yellow-100 to-orange-100",
        textColor: "text-yellow-700"
    }
]

const trustSignals = [
    {
        icon: Award,
        title: "15+ năm kinh nghiệm",
        description: "Đã phục vụ hàng nghìn doanh nghiệp",
        color: "text-amber-600"
    },
    {
        icon: Users,
        title: "1000+ đối tác tin tưởng",
        description: "Từ SME đến tập đoàn lớn",
        color: "text-orange-600"
    },
    {
        icon: Star,
        title: "99.5% hài lòng",
        description: "Đánh giá trung bình 4.8/5 sao",
        color: "text-yellow-600"
    },
    {
        icon: Target,
        title: "99.9% đúng hẹn",
        description: "Cam kết giao hàng đúng thời gian",
        color: "text-orange-700"
    }
]

export default function PartnershipJourney() {
    const [activeStep, setActiveStep] = useState(1)

    return (
        <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-40 h-40 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 bg-amber-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center mb-4">
                        <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-3 rounded-xl mr-4">
                            <Handshake className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
                            Hành trình đối tác
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Từ lần hợp tác đầu tiên đến đối tác chiến lược lâu dài
                    </p>

                    {/* Trust Signals */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {trustSignals.map((signal, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <signal.icon className={`w-8 h-8 ${signal.color} mx-auto mb-2`} />
                                <h4 className="font-bold text-gray-900 text-sm">{signal.title}</h4>
                                <p className="text-xs text-gray-600">{signal.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Partnership Journey Steps */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Steps */}
                    <div className="space-y-8">
                        {partnershipJourney.map((journey, index) => (
                            <motion.div
                                key={journey.step}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative cursor-pointer transition-all duration-300 ${activeStep === journey.step ? 'scale-105' : 'hover:scale-102'
                                    }`}
                                onClick={() => setActiveStep(journey.step)}
                            >
                                <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${activeStep === journey.step
                                    ? 'border-orange-300 shadow-orange-500/20'
                                    : 'border-white/50 hover:border-orange-200'
                                    }`}>
                                    <div className="flex items-start">
                                        <div className={`bg-gradient-to-r ${journey.color} p-3 rounded-xl mr-4 flex-shrink-0`}>
                                            <journey.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium text-orange-600">Bước {journey.step}</span>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <Clock className="w-4 h-4 mr-1" />
                                                    {journey.duration}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">{journey.title}</h3>
                                            <p className="text-sm text-orange-600 font-medium mb-3">{journey.subtitle}</p>
                                            <p className="text-gray-600 mb-4">{journey.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {journey.features.map((feature, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-orange-50 text-orange-700 text-xs rounded-full font-medium"
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Connection Line */}
                                {index < partnershipJourney.length - 1 && (
                                    <div className="absolute left-[30px] top-full w-0.5 h-8 bg-gradient-to-b from-orange-300 to-orange-200"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Benefits Overview */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Ưu đãi theo cấp độ đối tác</h3>

                        {partnershipBenefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`bg-gradient-to-r ${benefit.color} rounded-xl p-6 border border-white/50`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className={`text-lg font-bold ${benefit.textColor}`}>{benefit.level}</h4>
                                    <div className={`${benefit.textColor} font-bold text-xl`}>
                                        -{benefit.discount}
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {benefit.features.map((feature, idx) => (
                                        <li key={idx} className={`flex items-center ${benefit.textColor}`}>
                                            <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

                        <div className="relative z-10">
                            {/* Premium Header */}
                            <motion.div
                                className="mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/20 to-orange-400/20 px-4 py-2 rounded-full border border-yellow-400/30 mb-4">
                                    <Star className="w-4 h-4 text-yellow-400 mr-2 fill-current" />
                                    <span className="text-sm font-medium text-yellow-100">Đối tác chiến lược hàng đầu</span>
                                </div>
                            </motion.div>

                            <motion.h3
                                className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                Bắt đầu hành trình đối tác thành công
                            </motion.h3>

                            <motion.p
                                className="text-lg mb-8 text-orange-100 max-w-2xl mx-auto leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                Tham gia cùng <span className="font-semibold text-yellow-300">500+ đối tác</span> đang phát triển mạnh mẽ.
                                <br className="hidden md:block" />Bắt đầu với cuộc gọi tư vấn miễn phí 15 phút.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <motion.button
                                    className="group relative bg-gradient-to-r from-orange-400 to-amber-500 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:from-orange-500 hover:to-amber-600 transition-all duration-300 flex items-center justify-center overflow-hidden border border-orange-300/30"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                    <Calendar className="w-5 h-5 mr-3" />
                                    <span className="text-lg">Đặt lịch tư vấn miễn phí</span>
                                    <motion.div
                                        className="ml-2"
                                        animate={{ x: [0, 3, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.div>
                                </motion.button>

                                <motion.button
                                    className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center justify-center"
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: "rgba(255, 255, 255, 0.95)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Phone className="w-5 h-5 mr-3" />
                                    <div className="flex flex-col items-start">
                                        <span className="text-sm opacity-90">Hotline 24/7</span>
                                        <span className="text-lg font-bold">0912 345 678</span>
                                    </div>
                                </motion.button>
                            </motion.div>

                            {/* Trust Signals */}
                            <motion.div
                                className="flex flex-wrap items-center justify-center gap-6 text-sm text-orange-100/80"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center">
                                    <Shield className="w-4 h-4 mr-2 text-green-400" />
                                    <span>Cam kết bảo mật thông tin</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-2 text-blue-400" />
                                    <span>Phản hồi trong 30 phút</span>
                                </div>
                                <div className="flex items-center">
                                    <TrendingUp className="w-4 h-4 mr-2 text-yellow-400" />
                                    <span>ROI trung bình +45%</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
