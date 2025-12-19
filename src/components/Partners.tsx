'use client'

import { motion } from 'framer-motion'
import {
    Building2,
    Handshake,
    ShieldCheck,
    Users
} from 'lucide-react'

const partnerLogos = [
    { name: 'Partner 1' },
    { name: 'Partner 2' },
    { name: 'Partner 3' },
    { name: 'Partner 4' },
    { name: 'Partner 5' },
    { name: 'Partner 6' },
    { name: 'Partner 7' },
    { name: 'Partner 8' }
]

const trustFactors = [
    {
        icon: Handshake,
        title: 'Hợp tác bền vững',
        description: 'Xây dựng mối quan hệ dựa trên sự tin tưởng và cùng phát triển.'
    },
    {
        icon: ShieldCheck,
        title: 'Cam kết dịch vụ',
        description: 'Đảm bảo chất lượng vận hành cao nhất cho mọi chuyến hàng.'
    },
    {
        icon: Users,
        title: 'Đội ngũ chuyên nghiệp',
        description: 'Nhân sự giàu kinh nghiệm, am hiểu sâu sắc về logistics.'
    }
]

export default function Partners() {
    return (
        <section id="partners" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center space-x-2 text-blue-400 font-bold tracking-widest uppercase mb-4"
                    >
                        <Building2 className="w-5 h-5" />
                        <span>Mạng lưới đối tác</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight"
                    >
                        Đồng hành cùng <br /> <span className="text-gradient-gold">Sự thịnh vượng</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        Chúng tôi tự hào là đối tác logistics tin cậy của hàng trăm doanh nghiệp đầu ngành tại Việt Nam và khu vực.
                    </motion.p>
                </div>

                {/* Logo Slider / Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {partnerLogos.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-32 glass-card bg-white/5 border-white/5 rounded-3xl flex items-center justify-center p-8 group hover:bg-white/10 transition-all duration-500"
                        >
                            <div className="relative w-full h-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                <div className="text-slate-600 font-black text-xl tracking-tighter group-hover:text-blue-400">{partner.name}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Section */}
                <div className="grid md:grid-cols-3 gap-8">
                    {trustFactors.map((factor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                            className="text-center group"
                        >
                            <div className="inline-flex p-4 rounded-2xl bg-blue-600/10 border border-blue-500/20 mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500">
                                <factor.icon className="w-8 h-8 text-blue-400 group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{factor.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {factor.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 py-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="text-center md:text-left">
                        <div className="text-amber-500 font-black text-2xl mb-1 tracking-tight">KẾT NỐI NGAY</div>
                        <p className="text-slate-500 font-medium">Trở thành đối tác chiến lược cùng Dương Lê Logistics</p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-blue-500/10"
                    >
                        Gửi Yêu Cầu Hợp Tác
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}
