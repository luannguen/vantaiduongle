'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import {
    Activity,
    Award,
    BarChart3,
    Clock,
    Globe2,
    History,
    PieChart,
    Shield,
    Target,
    TrendingUp,
    Truck,
    Users2
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const stats = [
    {
        label: 'Năm Kinh nghiệm',
        value: 12,
        suffix: '+',
        icon: History,
        color: 'from-blue-600 to-blue-800',
        description: 'Vận hành bền bỉ từ 2012'
    },
    {
        label: 'Đối tác chiến lược',
        value: 500,
        suffix: '+',
        icon: Users2,
        color: 'from-amber-500 to-amber-700',
        description: 'Tin dùng dịch vụ hàng năm'
    },
    {
        label: 'Tấn hàng vận chuyển',
        value: 100,
        suffix: 'k+',
        icon: Truck,
        color: 'from-slate-700 to-slate-900',
        description: 'An toàn đến mọi miền Tổ quốc'
    },
    {
        label: 'Độ chính xác thời gian',
        value: 99.8,
        suffix: '%',
        icon: Clock,
        color: 'from-emerald-600 to-emerald-800',
        description: 'Cam kết tiến độ tuyệt đối'
    }
]

const growthData = [
    { year: 2020, revenue: 65 },
    { year: 2021, revenue: 82 },
    { year: 2022, revenue: 110 },
    { year: 2023, revenue: 145 },
    { year: 2024, revenue: 190 }
]

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0)
    const nodeRef = useRef(null)

    useEffect(() => {
        let startTime: number
        const duration = 2000

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = (currentTime - startTime) / duration

            if (progress < 1) {
                setCount(Math.floor(value * progress))
                requestAnimationFrame(animate)
            } else {
                setCount(value)
            }
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.5 }
        )

        if (nodeRef.current) {
            observer.observe(nodeRef.current)
        }

        return () => observer.disconnect()
    }, [value])

    return <span ref={nodeRef}>{count}{suffix}</span>
}

export default function Stats() {
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])

    return (
        <section ref={sectionRef} className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Artistic Background */}
            <div className="absolute inset-0 opacity-10">
                <motion.div style={{ y: y1 }} className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-900 rounded-full blur-[150px]" />
                <motion.div style={{ y: y2 }} className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-amber-500 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-2 text-amber-500 font-bold tracking-widest uppercase mb-4"
                        >
                            <Activity className="w-5 h-5" />
                            <span>Hiệu suất & Tin cậy</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-white leading-tight"
                        >
                            Đo lường <span className="text-gradient-gold">Giá trị Thực</span> <br />
                            Trong từng chuyến hàng
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-sm mb-2"
                    >
                        Cam kết minh bạch dữ liệu, không ngừng cải tiến quy trình để mang lại hiệu quả kinh tế cao nhất cho đối tác.
                    </motion.p>
                </div>

                {/* Main Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card bg-white/5 border-white/10 p-10 rounded-[2.5rem] relative overflow-hidden group hover:bg-white/10 transition-all duration-500"
                        >
                            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="relative">
                                <div className="text-5xl font-black text-white mb-2 tracking-tighter">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-lg font-bold text-slate-200 mb-2 uppercase tracking-wide">{stat.label}</div>
                                <p className="text-slate-500 text-sm leading-relaxed">{stat.description}</p>
                            </div>

                            {/* Decorative line */}
                            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                        </motion.div>
                    ))}
                </div>

                {/* Data Insights Section */}
                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* Growth Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card bg-slate-900/50 border-white/10 p-10 rounded-[3rem] relative overflow-hidden"
                    >
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <h3 className="text-2xl font-bold text-white flex items-center">
                                    <TrendingUp className="w-6 h-6 text-emerald-400 mr-3" />
                                    Tăng trưởng hàng năm
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">Sản lượng tấn hàng vận chuyển (nghìn tấn)</p>
                            </div>
                            <div className="bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold border border-emerald-500/20">
                                +35% CAGR
                            </div>
                        </div>

                        <div className="flex items-end justify-between h-[250px] gap-4">
                            {growthData.map((item, index) => (
                                <div key={index} className="flex-1 flex flex-col items-center group">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${(item.revenue / 200) * 100}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: index * 0.1 }}
                                        className="w-full bg-gradient-to-t from-blue-600/20 via-blue-500/40 to-blue-400 rounded-2xl relative group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300"
                                    >
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-slate-950 text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                                            {item.revenue}k Tấn
                                        </div>
                                    </motion.div>
                                    <div className="mt-6 text-sm font-bold text-slate-500">{item.year}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Features/Trust Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className="glass-card bg-white/5 border-white/10 p-8 rounded-[2.5rem] space-y-4 hover:border-blue-500/30 transition-colors">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                                <Shield className="w-6 h-6 text-blue-400" />
                            </div>
                            <h4 className="text-lg font-bold text-white tracking-tight">An toàn 100%</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Bảo hiểm hàng hóa trách nhiệm dân sự lên đến 10 tỷ đồng mỗi vụ.
                            </p>
                        </div>
                        <div className="glass-card bg-white/5 border-white/10 p-8 rounded-[2.5rem] space-y-4 hover:border-amber-500/30 transition-colors">
                            <div className="w-12 h-12 bg-amber-500/20 rounded-2xl flex items-center justify-center">
                                <Target className="w-6 h-6 text-amber-500" />
                            </div>
                            <h4 className="text-lg font-bold text-white tracking-tight">Chính xác</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Hệ thống TMS thông minh tối ưu hóa lộ trình và theo dõi real-time.
                            </p>
                        </div>
                        <div className="glass-card bg-white/5 border-white/10 p-8 rounded-[2.5rem] space-y-4 hover:border-emerald-500/30 transition-colors">
                            <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                                <Globe2 className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h4 className="text-lg font-bold text-white tracking-tight">Toàn quốc</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                63 tỉnh thành được phủ sóng bởi mạng lưới vận hành chuyên nghiệp.
                            </p>
                        </div>
                        <div className="glass-card bg-white/5 border-white/10 p-8 rounded-[2.5rem] space-y-4 hover:border-slate-500/30 transition-colors">
                            <div className="w-12 h-12 bg-slate-500/20 rounded-2xl flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 text-slate-400" />
                            </div>
                            <h4 className="text-lg font-bold text-white tracking-tight">Tối ưu</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Giúp doanh nghiệp giảm trung bình 15% tổng chi phí logistics.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
