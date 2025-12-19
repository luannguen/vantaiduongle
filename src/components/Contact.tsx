'use client'

import { motion } from 'framer-motion'
import {
    Clock,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Send
} from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log(formData)
    }

    return (
        <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8">
                            <MessageSquare className="w-5 h-5 text-blue-400" />
                            <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">LIÊN HỆ VỚI CHÚNG TÔI</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Sẵn sàng đồng hành cùng <br />
                            <span className="text-gradient-gold">Mọi thách thức Logistics</span>
                        </h2>

                        <p className="text-slate-400 text-lg mb-12 max-w-lg">
                            Dương Lê luôn lắng nghe và sẵn sàng phản hồi mọi yêu cầu từ quý khách hàng trong vòng 15 phút.
                        </p>

                        <div className="grid gap-8">
                            {[
                                {
                                    icon: Phone,
                                    label: 'Hotline 24/7',
                                    value: '0912 123 456',
                                    subValue: 'Phone/Zalo/WhatsApp',
                                    color: 'text-blue-400'
                                },
                                {
                                    icon: Mail,
                                    label: 'Email hỗ trợ',
                                    value: 'contact@duongle.vn',
                                    subValue: 'Báo giá nhanh: sales@duongle.vn',
                                    color: 'text-amber-500'
                                },
                                {
                                    icon: MapPin,
                                    label: 'Văn phòng chính',
                                    value: '123 Đường Vận Tải, Quận 7, TP. HCM',
                                    subValue: 'Chi nhánh: Hà Nội, Đà Nẵng, Hải Phòng',
                                    color: 'text-emerald-400'
                                },
                                {
                                    icon: Clock,
                                    label: 'Giờ làm việc',
                                    value: 'Thứ 2 - Thứ 7: 08:00 - 18:00',
                                    subValue: 'Vận hành xe: 24/7 không nghỉ',
                                    color: 'text-indigo-400'
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-6 group">
                                    <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all duration-500`}>
                                        <item.icon className={`w-6 h-6 ${item.color} group-hover:text-white transition-colors`} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                                        <div className="text-xl font-bold text-white mb-1">{item.value}</div>
                                        <div className="text-sm text-slate-400">{item.subValue}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-card bg-white/5 border-white/10 p-10 md:p-12 rounded-[3rem] relative overflow-hidden"
                    >
                        {/* Form Decoration */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-amber-500" />

                        <h3 className="text-2xl font-bold text-white mb-8">Gửi yêu cầu báo giá nhanh</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-300 ml-1">Họ và tên</label>
                                    <input
                                        type="text"
                                        placeholder="Nguyễn Văn A"
                                        className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-300 ml-1">Số điện thoại</label>
                                    <input
                                        type="tel"
                                        placeholder="09xx xxx xxx"
                                        className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300 ml-1">Tên doanh nghiệp (Nếu có)</label>
                                <input
                                    type="text"
                                    placeholder="Công ty Logistics ABC"
                                    className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300 ml-1">Email liên hệ</label>
                                <input
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300 ml-1">Nội dung yêu cầu</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tôi muốn thuê xe 5 tấn chở hàng từ HCM đi Bình Dương..."
                                    className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center space-x-3"
                            >
                                <span>GỬI YÊU CẦU NGAY</span>
                                <Send className="w-5 h-5" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Map Section Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 h-[450px] bg-slate-800/50 rounded-[3.5rem] border border-white/10 overflow-hidden relative"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center group cursor-pointer">
                            <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <MapPin className="w-10 h-10 text-blue-500" />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-2">Bản đồ trụ sở chính</h4>
                            <p className="text-slate-500">Xem địa chỉ trên Google Maps</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
