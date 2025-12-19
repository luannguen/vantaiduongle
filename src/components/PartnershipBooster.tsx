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
import { useEffect, useState } from 'react'

export default function PartnershipBooster() {
    const [timeLeft] = useState({
        days: 2,
        hours: 14,
        minutes: 35,
        seconds: 42
    })

    const [currentPromo] = useState(0)
    const [currentUrgencyIndex, setCurrentUrgencyIndex] = useState(0)
    const [isClient, setIsClient] = useState(false)

    // Client-side only effect to prevent hydration mismatch
    useEffect(() => {
        setIsClient(true)

        // Cycle through urgency signals on client side only
        const interval = setInterval(() => {
            setCurrentUrgencyIndex(prev => (prev + 1) % 4) // urgencySignals has 4 items
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    const limitedOffers = [
        {
            title: "💎 Đặc quyền Đối tác Doanh nghiệp 2024",
            subtitle: "Giảm ngay 15% phí vận chuyển cho hợp đồng mới",
            value: "Tối ưu hóa ngân sách Logistics",
            expiry: "Ưu đãi có hạn",
            color: "from-slate-900 via-blue-950 to-slate-900"
        }
    ]

    const quickBenefits = [
        { icon: DollarSign, text: "Tiết kiệm 15-30% chi phí", color: "text-amber-500" },
        { icon: Users, text: "500+ Đối tác tin cậy", color: "text-blue-400" },
        { icon: TrendingUp, text: "Hiệu suất tăng 40%", color: "text-emerald-400" },
        { icon: Award, text: "Dịch vụ chuẩn Quốc tế", color: "text-amber-500" }
    ]

    const urgencySignals = [
        "✨ 2 doanh nghiệp vừa ký kết hợp đồng đối tác chiến lược",
        "⚡ Chỉ còn 15 suất đối tác ưu tiên trong quý này",
        "🚀 Hệ thống vừa ghi nhận 50 đơn hàng từ đối tác mới",
        "📞 Chuyên viên tư vấn đang sẵn sàng hỗ trợ bạn"
    ]

    const partnerTestimonials = [
        {
            name: "Giám đốc Hậu cần - Tập đoàn ABC",
            text: "Dương Lê là đối tác chiến lược giúp chúng tôi tối ưu 25% chi phí vận hành hàng năm.",
            avatar: "🏢",
            result: "Tối ưu 25% chi phí"
        },
        {
            name: "CEO Chuỗi bán lẻ XYZ",
            text: "Sự tin cậy và chuyên nghiệp là điều khiến chúng tôi gắn bó với Dương Lê hơn 5 năm qua.",
            avatar: "👤",
            result: "99% Đúng hẹn"
        }
    ]

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-900 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-slate-800 rounded-full blur-[100px]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Urgent Offer Banner */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-block relative">
                        <motion.div
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className={`glass-card bg-gradient-to-r ${limitedOffers[currentPromo].color} border-blue-500/20 px-10 py-6 rounded-3xl shadow-2xl relative overflow-hidden`}
                        >
                            <div className="absolute inset-0 bg-white/5 pointer-events-none" />
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <Sparkles className="w-8 h-8 text-amber-500 animate-pulse hidden md:block" />
                                <div className="text-center md:text-left">
                                    <div className="font-bold text-xl text-white mb-1 uppercase tracking-wider">{limitedOffers[currentPromo].title}</div>
                                    <div className="text-blue-200">{limitedOffers[currentPromo].subtitle}</div>
                                </div>
                                <div className="h-12 w-px bg-white/10 hidden md:block" />
                                <div className="bg-amber-500/10 border border-amber-500/30 px-6 py-2 rounded-2xl">
                                    <span className="text-amber-500 font-bold text-lg">
                                        PHÁP NHÂN ƯU TIÊN 💎
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Social Proof Ticker */}
                    <div className="mt-8 overflow-hidden h-8">
                        <motion.div
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-1.5 inline-block"
                        >
                            <div className="flex items-center text-sm text-blue-200">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                                {isClient ? urgencySignals[currentUrgencyIndex] : urgencySignals[0]}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Left Column - Value Proposition */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 space-y-10"
                    >
                        <div>
                            <motion.h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Giải pháp Logistics <br />
                                <span className="text-gradient-gold">Đẳng cấp Doanh nghiệp</span>
                            </motion.h2>
                            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                                Hơn cả một đơn vị vận chuyển, chúng tôi là <span className="text-white font-semibold">Cánh tay nối dài</span> giúp tối ưu hóa chuỗi cung ứng và nâng tầm thương hiệu của bạn.
                            </p>
                        </div>

                        {/* Quick Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {quickBenefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="glass-card bg-white/5 border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all duration-500 group"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-center">
                                        <div className={`p-3 rounded-xl bg-slate-900 group-hover:bg-slate-800 transition-colors mr-4`}>
                                            <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                                        </div>
                                        <span className="font-semibold text-slate-200">{benefit.text}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Partner Testimonials */}
                        <div className="glass-card bg-white/5 border-white/10 rounded-3xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Star className="w-24 h-24 text-amber-500 fill-current" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                                <Star className="w-5 h-5 text-amber-500 mr-3 fill-current" />
                                Đánh giá từ Khách hàng chiến lược
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {partnerTestimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-slate-900/50 p-5 rounded-2xl border border-white/5"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-xl mr-4 border border-blue-500/20">
                                                {testimonial.avatar}
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-100 text-sm">{testimonial.name}</div>
                                                <div className="text-xs text-emerald-400 font-semibold">{testimonial.result}</div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-400 italic">"{testimonial.text}"</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Trust Signals */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="flex items-center bg-blue-900/20 text-blue-300 px-5 py-2.5 rounded-full border border-blue-500/20 text-sm font-medium">
                                <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                                Hợp đồng Pháp lý minh bạch
                            </div>
                            <div className="flex items-center bg-emerald-900/20 text-emerald-300 px-5 py-2.5 rounded-full border border-emerald-500/20 text-sm font-medium">
                                <Zap className="w-4 h-4 mr-2 text-emerald-400" />
                                Kích hoạt tài khoản <span className="mx-1 text-white">24h</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Registration Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 glass-card bg-slate-900/80 border-blue-500/20 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[50px]" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 blur-[50px]" />

                        <div className="relative z-10">
                            {/* Form Header */}
                            <div className="text-center mb-8">
                                <motion.div
                                    animate={{
                                        y: [0, -5, 0],
                                        filter: ["drop-shadow(0 0 0px #3b82f6)", "drop-shadow(0 0 15px #3b82f6)", "drop-shadow(0 0 0px #3b82f6)"]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="inline-flex bg-blue-600 p-4 rounded-2xl mb-6 shadow-xl shadow-blue-900/20"
                                >
                                    <Handshake className="w-10 h-10 text-white" />
                                </motion.div>
                                <h3 className="text-3xl font-bold text-white mb-2">Đăng ký Đối tác</h3>
                                <p className="text-slate-400">Chuyên viên sẽ phản hồi trong vòng <span className="text-white font-semibold">10 phút</span></p>
                            </div>

                            {/* Quick Form */}
                            <form className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Thông tin pháp nhân</label>
                                    <input
                                        type="text"
                                        placeholder="Tên công ty / Doanh nghiệp"
                                        className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl text-white placeholder:text-slate-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all outline-none"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Đường dây nóng</label>
                                    <input
                                        type="tel"
                                        placeholder="Số điện thoại liên hệ"
                                        className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl text-white placeholder:text-slate-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all outline-none"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Nhu cầu vận hành</label>
                                    <select
                                        className="w-full bg-slate-950 border border-white/10 px-5 py-4 rounded-2xl text-slate-300 focus:border-amber-500 transition-all outline-none appearance-none"
                                        aria-label="Loại hình doanh nghiệp"
                                    >
                                        <option>Lĩnh vực hoạt động</option>
                                        <option>Sản xuất & Công nghiệp</option>
                                        <option>Thương mại điện tử & Bán lẻ</option>
                                        <option>Thực phẩm & F&B</option>
                                        <option>Xây dựng & Vật liệu</option>
                                        <option>Dược phẩm & Y tế</option>
                                    </select>
                                </div>

                                {/* CTA Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 py-5 rounded-2xl font-black text-lg shadow-xl shadow-amber-900/20 relative overflow-hidden group mt-4 uppercase tracking-tighter"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                    <div className="relative z-10 flex items-center justify-center">
                                        <span>Gửi hồ sơ hợp tác ngay</span>
                                        <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.button>
                            </form>

                            {/* Contact Options */}
                            <div className="mt-10 pt-8 border-t border-white/5 space-y-6">
                                <div className="flex gap-4">
                                    <motion.button
                                        className="flex-1 bg-emerald-500/10 text-emerald-400 py-4 rounded-2xl font-bold flex items-center justify-center border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all"
                                        whileHover={{ y: -2 }}
                                    >
                                        <Phone className="w-5 h-5 mr-3" />
                                        Hotline
                                    </motion.button>
                                    <motion.button
                                        className="flex-1 bg-blue-500/10 text-blue-400 py-4 rounded-2xl font-bold flex items-center justify-center border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all"
                                        whileHover={{ y: -2 }}
                                    >
                                        <MessageSquare className="w-5 h-5 mr-3" />
                                        Zalo
                                    </motion.button>
                                </div>

                                <div className="text-center">
                                    <div className="text-xs text-slate-500 mb-4 uppercase tracking-widest font-bold">Chỉ còn 48 giờ để nhận ưu đãi</div>
                                    <div className="flex justify-center gap-6">
                                        <div className="text-center">
                                            <div className="text-2xl font-black text-white leading-none">{timeLeft.days}</div>
                                            <div className="text-[10px] text-slate-500 font-bold mt-1">NGÀY</div>
                                        </div>
                                        <div className="text-xl font-bold text-slate-700 mb-2">:</div>
                                        <div className="text-center">
                                            <div className="text-2xl font-black text-white leading-none">{timeLeft.hours}</div>
                                            <div className="text-[10px] text-slate-500 font-bold mt-1">GIỜ</div>
                                        </div>
                                        <div className="text-xl font-bold text-slate-700 mb-2">:</div>
                                        <div className="text-center">
                                            <div className="text-2xl font-black text-white leading-none">{timeLeft.minutes}</div>
                                            <div className="text-[10px] text-slate-500 font-bold mt-1">PHÚT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
