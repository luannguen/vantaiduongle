'use client'

import { motion } from 'framer-motion'
import {
    ArrowRight,
    Award,
    Calendar,
    CheckCircle,
    DollarSign,
    Gift,
    Handshake,
    MessageSquare,
    Phone,
    Sparkles,
    Star,
    TrendingUp,
    Users,
    Zap
} from 'lucide-react'
import { useState } from 'react'

export default function PartnershipBooster() {
    const [timeLeft] = useState({
        days: 2,
        hours: 14,
        minutes: 35,
        seconds: 42
    })

    const [currentPromo] = useState(0)

    const limitedOffers = [
        {
            title: "🚛 Ưu đãi đối tác vận tải tháng 12",
            subtitle: "Giảm ngay 15% phí vận chuyển cho đối tác mới",
            value: "Tiết kiệm đến 20 triệu VNĐ",
            expiry: "Còn 48 giờ",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "🏆 Gói đối tác ưu tiên",
            subtitle: "Miễn phí Account Manager + Hỗ trợ 24/7",
            value: "Trị giá 15 triệu VNĐ/năm",
            expiry: "Chỉ 30 suất cuối",
            color: "from-blue-500 to-purple-500"
        },
        {
            title: "� Chương trình hoa hồng",
            subtitle: "Nhận 3% hoa hồng từ khách hàng giới thiệu",
            value: "Thu nhập thêm hàng tháng",
            expiry: "Đăng ký trong 3 ngày",
            color: "from-green-500 to-emerald-500"
        }
    ]

    const quickBenefits = [
        { icon: DollarSign, text: "Giảm chi phí vận chuyển 15-30%", color: "text-green-600" },
        { icon: Users, text: "500+ doanh nghiệp đối tác", color: "text-blue-600" },
        { icon: TrendingUp, text: "Tăng hiệu quả logistics 40%", color: "text-purple-600" },
        { icon: Award, text: "Đối tác tin cậy 2024", color: "text-amber-600" }
    ]

    const urgencySignals = [
        "� 2 doanh nghiệp vừa đăng ký đối tác cách đây 5 phút",
        "⚡ Chỉ còn 15 suất đối tác ưu tiên trong tháng này",
        "� Đối tác mới hôm qua đã vận chuyển 20 đơn hàng",
        "📞 Hotline đang có 5 cuộc gọi tư vấn đối tác"
    ]

    const partnerTestimonials = [
        {
            name: "Anh Minh - CEO Công ty Thực phẩm ABC",
            text: "Sau 3 tháng hợp tác, chi phí vận chuyển giảm 25%, dịch vụ rất chuyên nghiệp!",
            avatar: "👨‍💼",
            result: "Giảm 25% chi phí"
        },
        {
            name: "Chị Lan - GĐ Điện máy XYZ",
            text: "Giao hàng đúng hẹn 99%, khách hàng rất hài lòng với dịch vụ",
            avatar: "👩‍💼",
            result: "99% đúng hẹn"
        }
    ]

    return (
        <section className="py-16 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-purple-400 to-orange-400 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Urgent Offer Banner */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`inline-block bg-gradient-to-r ${limitedOffers[currentPromo].color} text-white px-8 py-4 rounded-2xl shadow-2xl mb-4`}
                    >
                        <div className="flex items-center justify-center gap-4">
                            <Sparkles className="w-6 h-6 animate-pulse" />
                            <div className="text-center">
                                <div className="font-bold text-lg">{limitedOffers[currentPromo].title}</div>
                                <div className="text-sm opacity-90">{limitedOffers[currentPromo].subtitle}</div>
                            </div>
                            <Sparkles className="w-6 h-6 animate-pulse" />
                        </div>
                        <div className="mt-2 text-center">
                            <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold">
                                {limitedOffers[currentPromo].expiry} ⏰
                            </span>
                        </div>
                    </motion.div>

                    {/* Social Proof Ticker */}
                    <motion.div
                        animate={{ x: [-100, 100, -100] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full px-6 py-2 inline-block shadow-lg"
                    >
                        <div className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            {urgencySignals[Math.floor(Date.now() / 3000) % urgencySignals.length]}
                        </div>
                    </motion.div>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Value Proposition */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Main Headline */}
                        <div>
                            <motion.h2
                                className="text-4xl md:text-5xl font-bold mb-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Trở thành đối tác vận tải{' '}
                                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
                                    tiết kiệm chi phí ngay
                                </span>
                            </motion.h2>
                            <motion.p
                                className="text-xl text-gray-600 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <strong className="text-orange-600">Cam kết:</strong> Giảm 15% chi phí vận chuyển và tăng hiệu quả giao hàng ngay từ đơn hàng đầu tiên
                            </motion.p>
                        </div>

                        {/* Quick Benefits Grid */}
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            {quickBenefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <div className="flex items-center">
                                        <benefit.icon className={`w-6 h-6 ${benefit.color} mr-3`} />
                                        <span className="text-sm font-semibold text-gray-800">{benefit.text}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Partner Testimonials */}
                        <motion.div
                            className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                <Star className="w-5 h-5 text-yellow-500 mr-2 fill-current" />
                                Đối tác nói gì về chúng tôi
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {partnerTestimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white/80 p-4 rounded-xl border border-orange-100"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className="text-2xl mr-3">{testimonial.avatar}</div>
                                            <div>
                                                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                                <div className="text-sm text-green-600 font-bold">{testimonial.result}</div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Trust Signals */}
                        <motion.div
                            className="flex flex-wrap gap-4 items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <div className="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                <span className="text-sm font-semibold">Miễn phí 100%</span>
                            </div>
                            <div className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                                <Zap className="w-4 h-4 mr-2" />
                                <span className="text-sm font-semibold">Bắt đầu trong 1 ngày</span>
                            </div>
                            <div className="flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                                <Gift className="w-4 h-4 mr-2" />
                                <span className="text-sm font-semibold">Hoa hồng 3%</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Registration Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-orange-200/50 relative overflow-hidden"
                    >
                        {/* Form Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-red-50/30 to-pink-50/50"></div>

                        <div className="relative z-10">
                            {/* Form Header */}
                            <div className="text-center mb-6">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="inline-block bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl mb-4"
                                >
                                    <Handshake className="w-8 h-8 text-white" />
                                </motion.div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                                    Đăng ký 30 giây
                                </h3>
                                <p className="text-gray-600">Nhận tư vấn và báo giá trong 10 phút</p>

                                {/* Progress Indicator */}
                                <div className="flex justify-center mt-4">
                                    <div className="bg-gray-200 h-2 w-full rounded-full">
                                        <motion.div
                                            className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: "85%" }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                        />
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">85% đã hoàn thành đăng ký hôm nay</p>
                            </div>

                            {/* Quick Form */}
                            <form className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="🏢 Tên công ty của bạn"
                                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white/80"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="📞 Số điện thoại (nhận ưu đãi qua SMS)"
                                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white/80"
                                        required
                                    />
                                </div>
                                <div>
                                    <select
                                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white/80"
                                        title="Chọn loại hàng hóa chính"
                                        aria-label="Loại hàng hóa chính"
                                    >
                                        <option>🚛 Loại hàng hóa chính</option>
                                        <option>📦 Hàng tiêu dùng</option>
                                        <option>🏭 Thiết bị công nghiệp</option>
                                        <option>🍎 Thực phẩm & F&B</option>
                                        <option>💻 Điện tử & Công nghệ</option>
                                        <option>🏗️ Vật liệu xây dựng</option>
                                        <option>🎯 Khác</option>
                                    </select>
                                </div>

                                {/* CTA Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-5 rounded-xl font-bold text-lg shadow-2xl relative overflow-hidden group"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                    <div className="relative z-10 flex items-center justify-center">
                                        <Zap className="w-6 h-6 mr-2" />
                                        <span>Nhận ưu đãi 15% ngay lập tức!</span>
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.button>

                                {/* Micro-commitments */}
                                <div className="space-y-2 text-xs text-gray-500">
                                    <div className="flex items-center">
                                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                                        Không spam, chỉ gửi thông tin hữu ích
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                                        Có thể hủy đăng ký bất cứ lúc nào
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                                        Tư vấn miễn phí, không ràng buộc
                                    </div>
                                </div>
                            </form>

                            {/* Contact Options */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <p className="text-center text-sm text-gray-600 mb-4">Hoặc liên hệ trực tiếp:</p>
                                <div className="flex gap-3">
                                    <motion.button
                                        className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Phone className="w-4 h-4 mr-2" />
                                        Gọi ngay
                                    </motion.button>
                                    <motion.button
                                        className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <MessageSquare className="w-4 h-4 mr-2" />
                                        Chat
                                    </motion.button>
                                </div>
                            </div>

                            {/* Countdown Timer */}
                            <motion.div
                                className="mt-6 bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-xl text-center"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <div className="text-sm mb-2">⏰ Ưu đãi kết thúc sau:</div>
                                <div className="flex justify-center gap-4 text-lg font-bold">
                                    <div>
                                        <div>{timeLeft.days}</div>
                                        <div className="text-xs">ngày</div>
                                    </div>
                                    <div>:</div>
                                    <div>
                                        <div>{timeLeft.hours}</div>
                                        <div className="text-xs">giờ</div>
                                    </div>
                                    <div>:</div>
                                    <div>
                                        <div>{timeLeft.minutes}</div>
                                        <div className="text-xs">phút</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom CTA Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-12 text-center"
                >
                    <div className="bg-gradient-to-r from-gray-900 via-orange-900 to-red-900 rounded-2xl p-8 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                        <div className="relative z-10">
                            <h4 className="text-2xl font-bold mb-4">
                                Tối ưu chi phí vận chuyển ngay hôm nay! �
                            </h4>
                            <div className="flex flex-wrap justify-center gap-4">
                                <motion.button
                                    className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Calendar className="w-5 h-5 mr-2 inline" />
                                    Đặt lịch tư vấn miễn phí
                                </motion.button>
                                <motion.button
                                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Phone className="w-5 h-5 mr-2 inline" />
                                    Hotline: 0931.879.070
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
