'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, MapPin, Shield, CheckCircle2, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    const { t } = useLanguage()

    return (
        <section id="home" className="relative overflow-hidden min-h-screen flex items-center pt-20">
            {/* Background Image with Premium Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Enterprise Transport"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-primary-900/40"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,64,175,0.15),transparent_50%)]"></div>
            </div>

            {/* Decorative Light Rays */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-500/20 to-transparent rotate-12 blur-sm"></div>
            <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary-400/10 to-transparent rotate-12 blur-sm"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left content: Value Proposition */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center space-x-2 bg-primary-500/10 backdrop-blur-md border border-primary-400/30 px-4 py-2 rounded-full mb-8"
                        >
                            <Star className="w-4 h-4 text-secondary-400 fill-secondary-400" />
                            <span className="text-primary-100 text-xs font-bold tracking-widest uppercase">Đối tác Vận tải Doanh nghiệp Hàng đầu</span>
                        </motion.div>

                        <motion.h1
                            className="text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight"
                        >
                            Vận Chuyển <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-200 to-white">Chuyên Nghiệp</span> <br />
                            Tầm Vóc Quốc Gia
                        </motion.h1>

                        <motion.p
                            className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl"
                        >
                            Chúng tôi cung cấp giải pháp logistics toàn diện cho doanh nghiệp với đội xe hiện đại, cam kết an toàn tuyệt đối và thời gian giao hàng chuẩn xác 24/7.
                        </motion.p>

                        {/* Feature Badges */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {[
                                { icon: Shield, text: 'Bảo hiểm 100%', color: 'text-emerald-400' },
                                { icon: Clock, text: 'Giao hàng 24h', color: 'text-primary-400' },
                                { icon: CheckCircle2, text: 'Hợp đồng minh bạch', color: 'text-secondary-400' },
                                { icon: MapPin, text: 'Toàn quốc', color: 'text-rose-400' },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                    className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 p-2.5 rounded-xl"
                                >
                                    <item.icon className={`w-4 h-4 ${item.color}`} />
                                    <span className="text-slate-200 text-xs font-bold">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/#contact" className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold text-lg enterprise-shadow transition-all flex items-center justify-center group">
                                Bắt đầu ngay
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/#about" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md rounded-xl font-bold text-lg transition-all text-center">
                                Tìm hiểu thêm
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right content: Smart Quote Form - Premium Glass Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Elegant glow effect behind card */}
                        <div className="absolute -inset-4 bg-primary-500/20 rounded-[2rem] blur-3xl -z-10 animate-pulse"></div>

                        <div className="glass-panel rounded-3xl p-8 border border-white/20 relative overflow-hidden">
                            {/* Form Header */}
                            <div className="mb-8 relative z-10">
                                <h3 className="text-xl font-black text-slate-900 mb-2">Yêu Cầu Báo Giá</h3>
                                <p className="text-slate-400 text-xs font-medium">Nhận phản hồi chuyên biệt sau 5 phút.</p>
                            </div>

                            <form className="space-y-5 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary-700 ml-1">Lộ trình khởi hành</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input
                                                type="text"
                                                placeholder="Điểm đi (Tỉnh/Thành)"
                                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 transition-all outline-none text-sm text-slate-900"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary-700 ml-1">Lộ trình kết thúc</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input
                                                type="text"
                                                placeholder="Điểm đến (Tỉnh/Thành)"
                                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 transition-all outline-none text-sm text-slate-900"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary-700 ml-1">Loại hàng vận chuyển</label>
                                        <select className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 transition-all outline-none text-sm text-slate-600 appearance-none cursor-pointer">
                                            <option>Hàng bách hóa</option>
                                            <option>Hàng dễ vỡ</option>
                                            <option>Hàng công nghiệp</option>
                                            <option>Khác...</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary-700 ml-1">Khối lượng ước tính</label>
                                        <select className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 transition-all outline-none text-sm text-slate-600 appearance-none cursor-pointer">
                                            <option>Dưới 1 tấn</option>
                                            <option>1 - 5 tấn</option>
                                            <option>5 - 15 tấn</option>
                                            <option>Trên 15 tấn</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary-700 ml-1">Số điện thoại liên hệ</label>
                                    <input
                                        type="tel"
                                        placeholder="Để chuyên viên tư vấn gọi lại ngay"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 transition-all outline-none text-sm text-slate-900"
                                    />
                                </div>

                                <button
                                    className="w-full py-5 bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-primary-900/40 hover:-translate-y-1 transition-all flex items-center justify-center space-x-3 group"
                                >
                                    <span>Gửi Yêu Cầu Ngay</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                    🔒 Thông tin của bạn được bảo mật tuyệt đối
                                </p>
                            </form>

                            {/* Trust badges inside card */}
                            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center px-2">
                                <div className="text-center">
                                    <div className="text-lg font-black text-primary-700 tracking-tighter">500+</div>
                                    <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Doanh nghiệp thân thiết</div>
                                </div>
                                <div className="h-8 w-px bg-slate-100"></div>
                                <div className="text-center">
                                    <div className="text-lg font-black text-primary-700 tracking-tighter">15+</div>
                                    <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Năm kinh nghiệm</div>
                                </div>
                                <div className="h-8 w-px bg-slate-100"></div>
                                <div className="text-center">
                                    <div className="text-lg font-black text-primary-700 tracking-tighter">24/7</div>
                                    <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Hỗ trợ vận hành</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
