'use client'

import { motion } from 'framer-motion'
import {
    Award,
    CheckCircle2,
    FileCheck,
    Globe,
    Medal,
    ShieldCheck,
    Star,
    Trophy
} from 'lucide-react'

const certifications = [
    {
        title: 'ISO 9001:2015',
        org: 'Hệ thống Quản lý Chất lượng',
        description: 'Tiêu chuẩn quốc tế về quy trình vận hành và kiểm soát chất lượng dịch vụ vận tải.',
        icon: ShieldCheck,
        color: 'text-blue-400',
        borderColor: 'border-blue-500/20'
    },
    {
        title: 'Vận tải Uy tín 2023',
        org: 'Hiệp hội Vận tải Việt Nam',
        description: 'Vinh danh doanh nghiệp có đóng góp xuất sắc và giữ vững uy tín trong ngành logistics.',
        icon: Trophy,
        color: 'text-amber-500',
        borderColor: 'border-amber-500/20'
    },
    {
        title: 'An toàn Giao thông',
        org: 'Ủy ban ATGT Quốc gia',
        description: 'Chứng nhận đơn vị tuân thủ nghiêm ngặt các quy tắc an toàn và không xảy ra sự cố nghiêm trọng.',
        icon: FileCheck,
        color: 'text-emerald-400',
        borderColor: 'border-emerald-500/20'
    },
    {
        title: 'Top 500 Doanh nghiệp',
        org: 'Vietnam Report',
        description: 'Nằm trong danh sách các doanh nghiệp vận tải tăng trưởng nhanh và bền vững nhất.',
        icon: Medal,
        color: 'text-indigo-400',
        borderColor: 'border-indigo-500/20'
    }
]

const achievements = [
    { label: 'Độ phủ hạ tầng', value: '100%', detail: 'Sở hữu bãi xe tại 3 miền' },
    { label: 'Bảo hiểm hàng hóa', value: '10 Tỷ', detail: 'Mức trách nhiệm cao nhất' },
    { label: 'Thời gian vận hành', value: '24/7', detail: 'Hỗ trợ khách hàng liên tục' },
    { label: 'Hệ thống giám sát', value: 'GPS', detail: 'Theo dõi lộ trình thời gian thực' }
]

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    {/* Left Side: Content & Achievements */}
                    <div className="lg:col-span-12 xl:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-6">
                                <Award className="w-5 h-5 text-amber-500" />
                                <span className="text-amber-500 text-sm font-bold uppercase tracking-wider">Tiêu chuẩn & Chứng nhận</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                Cam kết <span className="text-gradient-blue">Tiêu chuẩn</span> <br />
                                Quốc tế & Chất lượng
                            </h2>

                            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                                Chúng tôi không ngừng hoàn thiện hệ thống quản lý và nâng cao năng lực vận hành để đáp ứng những yêu cầu khắt khe nhất từ các đối tác đa quốc gia.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {achievements.map((item, index) => (
                                    <div key={index} className="space-y-1 border-l-2 border-blue-600/30 pl-6 group">
                                        <div className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tighter">{item.value}</div>
                                        <div className="text-sm font-bold text-slate-300">{item.label}</div>
                                        <div className="text-xs text-slate-500">{item.detail}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Certification Cards */}
                    <div className="lg:col-span-12 xl:col-span-7">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`glass-card bg-white/5 border ${cert.borderColor} p-8 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 group relative overflow-hidden`}
                                >
                                    {/* Abstract shape decoration */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-current opacity-[0.03] rounded-full blur-2xl transition-transform group-hover:scale-150" />

                                    <div className={`w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center mb-6 shadow-xl ${cert.color}`}>
                                        <cert.icon className="w-7 h-7" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                                    <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4">{cert.org}</div>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        {cert.description}
                                    </p>

                                    <div className="mt-8 flex items-center text-blue-400 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                        <CheckCircle2 className="w-4 h-4 mr-2" />
                                        <span>ĐÃ XÁC MINH</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Trust Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 pt-10 border-t border-white/5 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                >
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Phối hợp cùng:</span>
                    <Globe className="w-6 h-6 text-slate-400" />
                    <Star className="w-6 h-6 text-slate-400" />
                    <ShieldCheck className="w-6 h-6 text-slate-400" />
                    <div className="h-4 w-px bg-white/10 hidden md:block" />
                    <span className="text-slate-400 text-sm italic font-medium">Hơn 1000+ doanh nghiệp đã tin tưởng & lựa chọn dịch vụ của chúng tôi</span>
                </motion.div>
            </div>
        </section>
    )
}
