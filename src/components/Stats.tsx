'use client'

import { motion } from 'framer-motion'
import { Award, MapPin, Truck, Users } from 'lucide-react'
import { useEffect, useState } from 'react'

// Animated Progress Hook for Charts
const useChartProgress = (startAnimation: boolean = false, duration: number = 2500) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (!startAnimation) {
            setProgress(0)
            return
        }

        let startTime: number
        let animationFrame: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progressValue = Math.min((timestamp - startTime) / duration, 1)

            setProgress(progressValue)

            if (progressValue < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [startAnimation, duration])

    return progress
}

// Animated Counter Hook
const useCountUp = (end: number, duration: number = 2000, startAnimation: boolean = false) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!startAnimation) return

        let startTime: number
        let animationFrame: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)

            setCount(Math.floor(progress * end))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [end, duration, startAnimation])

    return count
}

// Animated Stat Value Component
const AnimatedStatValue = ({ value, isVisible }: { value: string, isVisible: boolean }) => {
    // Extract numeric value and non-numeric parts
    const numericMatch = value.match(/\d+/)
    const numericValue = numericMatch ? parseInt(numericMatch[0]) : 0
    const prefix = value.substring(0, value.indexOf(numericMatch?.[0] || ''))
    const suffix = value.substring((value.indexOf(numericMatch?.[0] || '') + (numericMatch?.[0]?.length || 0)))

    const animatedNumber = useCountUp(numericValue, 2500, isVisible)

    return (
        <span>
            {prefix}{animatedNumber}{suffix}
        </span>
    )
}

const stats = [
    {
        id: 1,
        label: 'Chuyến vận chuyển',
        value: '15,000+',
        icon: Truck,
        color: 'text-blue-600'
    },
    {
        id: 2,
        label: 'Khách hàng tin tưởng',
        value: '5,000+',
        icon: Users,
        color: 'text-green-600'
    },
    {
        id: 3,
        label: 'Tỉnh thành phủ sóng',
        value: '63/63',
        icon: MapPin,
        color: 'text-amber-600'
    },
    {
        id: 4,
        label: 'Năm kinh nghiệm',
        value: '12+',
        icon: Award,
        color: 'text-purple-600'
    }
]

export default function Stats() {
    const [countersVisible, setCountersVisible] = useState(false)
    const chartProgress = useChartProgress(countersVisible, 3000)

    return (
        <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Con số ấn tượng
                    </h2>
                    <p className="text-lg text-gray-600">
                        Những thành tích đáng tự hào trong hành trình phát triển
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {

                        return (
                            <motion.div
                                key={stat.id}
                                className="text-center group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.6,
                                        delay: index * 0.15,
                                        onComplete: () => {
                                            if (index === 0) {
                                                setTimeout(() => setCountersVisible(true), 200)
                                            }
                                        }
                                    }
                                }}
                                viewport={{ once: false, amount: 0.8 }}
                                onViewportEnter={() => {
                                    if (index === 0) {
                                        setCountersVisible(false)
                                        setTimeout(() => {
                                            setCountersVisible(true)
                                        }, 300)
                                    }
                                }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="bg-white rounded-2xl shadow-lg shadow-blue-500/10 p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                                    {/* Icon */}
                                    <motion.div
                                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.color} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-300`}
                                        initial={{ scale: 0, rotate: -180 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.8, delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                                        viewport={{ once: false }}
                                    >
                                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                    </motion.div>

                                    {/* Number with Counter Animation */}
                                    <motion.div
                                        className={`text-4xl md:text-5xl font-bold ${stat.color} mb-4`}
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: false }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.15 + 0.4,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 12
                                        }}
                                    >
                                        <AnimatedStatValue value={stat.value} isVisible={countersVisible} />
                                    </motion.div>

                                    {/* Label */}
                                    <motion.p
                                        className="text-gray-600 font-medium text-sm md:text-base mb-6"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                                        viewport={{ once: false }}
                                    >
                                        {stat.label}
                                    </motion.p>

                                    {/* Separate Chart Section */}
                                    <div className="border-t border-gray-100 pt-4">
                                        <motion.div
                                            className="h-32 relative bg-gray-50 rounded-lg p-3"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 0.8, delay: index * 0.15 + 0.8 }}
                                            viewport={{ once: false }}
                                        >
                                            <svg className="w-full h-full" viewBox="0 0 200 100">
                                                <defs>
                                                    <linearGradient id={`chart-gradient-${stat.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" stopColor={
                                                            stat.color.includes('blue') ? '#3B82F6' :
                                                                stat.color.includes('green') ? '#10B981' :
                                                                    stat.color.includes('amber') ? '#F59E0B' : '#8B5CF6'
                                                        } stopOpacity="0.8" />
                                                        <stop offset="100%" stopColor={
                                                            stat.color.includes('blue') ? '#3B82F6' :
                                                                stat.color.includes('green') ? '#10B981' :
                                                                    stat.color.includes('amber') ? '#F59E0B' : '#8B5CF6'
                                                        } stopOpacity="0.2" />
                                                    </linearGradient>
                                                    <pattern id={`grid-${stat.id}`} width="10" height="8" patternUnits="userSpaceOnUse">
                                                        <path d="M 10 0 L 0 0 0 8" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
                                                    </pattern>
                                                </defs>

                                                {/* Grid background */}
                                                <rect width="180" height="70" x="15" y="15" fill={`url(#grid-${stat.id})`} opacity="0.5" />

                                                {/* Y-axis */}
                                                <line x1="15" y1="15" x2="15" y2="85" stroke="#6b7280" strokeWidth="1" />

                                                {/* X-axis */}
                                                <line x1="15" y1="85" x2="195" y2="85" stroke="#6b7280" strokeWidth="1" />

                                                {/* Y-axis labels */}
                                                {[0, 25, 50, 75, 100].map((value, idx) => (
                                                    <g key={idx}>
                                                        <text x="10" y={85 - idx * 17.5} fontSize="6" fill="#6b7280" textAnchor="end">
                                                            {stat.id === 1 ? `${value * 150}` :
                                                                stat.id === 2 ? `${value * 50}` :
                                                                    stat.id === 3 ? `${value}%` : `${value / 10}`}
                                                        </text>
                                                        <line x1="13" y1={85 - idx * 17.5} x2="15" y2={85 - idx * 17.5} stroke="#6b7280" strokeWidth="0.5" />
                                                    </g>
                                                ))}

                                                {/* X-axis labels */}
                                                {['2020', '2021', '2022', '2023', '2024'].map((year, idx) => (
                                                    <g key={idx}>
                                                        <text x={15 + idx * 36} y="95" fontSize="6" fill="#6b7280" textAnchor="middle">
                                                            {year}
                                                        </text>
                                                        <line x1={15 + idx * 36} y1="83" x2={15 + idx * 36} y2="85" stroke="#6b7280" strokeWidth="0.5" />
                                                    </g>
                                                ))}

                                                {/* Data points and bars */}
                                                {[
                                                    stat.id === 1 ? [35, 45, 52, 68, 85] : // Truck deliveries growth
                                                        stat.id === 2 ? [25, 35, 48, 65, 85] : // Customer growth  
                                                            stat.id === 3 ? [45, 55, 70, 85, 95] : // Coverage growth
                                                                [20, 35, 50, 70, 85] // Experience/awards
                                                ][0].map((height, pointIndex) => (
                                                    <g key={pointIndex}>
                                                        {/* Data bars with chart progress */}
                                                        <rect
                                                            x={15 + pointIndex * 36 - 8}
                                                            y={85 - (height * 0.7 * chartProgress)}
                                                            width="16"
                                                            height={height * 0.7 * chartProgress}
                                                            fill={`url(#chart-gradient-${stat.id})`}
                                                            rx="1"
                                                        />

                                                        {/* Data points */}
                                                        <circle
                                                            cx={15 + pointIndex * 36}
                                                            cy={85 - height * 0.7 * chartProgress}
                                                            r={chartProgress > 0.5 ? 2 : 0}
                                                            fill={
                                                                stat.color.includes('blue') ? '#1d4ed8' :
                                                                    stat.color.includes('green') ? '#059669' :
                                                                        stat.color.includes('amber') ? '#d97706' : '#7c3aed'
                                                            }
                                                        />

                                                        {/* Value labels */}
                                                        <text
                                                            x={15 + pointIndex * 36}
                                                            y={85 - height * 0.7 * chartProgress - 5}
                                                            fontSize="5"
                                                            fill={
                                                                stat.color.includes('blue') ? '#1d4ed8' :
                                                                    stat.color.includes('green') ? '#059669' :
                                                                        stat.color.includes('amber') ? '#d97706' : '#7c3aed'
                                                            }
                                                            textAnchor="middle"
                                                            fontWeight="600"
                                                            opacity={chartProgress > 0.7 ? 1 : 0}
                                                        >
                                                            {stat.id === 1 ? `${Math.floor(height * 150 * chartProgress)}` :
                                                                stat.id === 2 ? `${Math.floor(height * 50 * chartProgress)}` :
                                                                    stat.id === 3 ? `${Math.floor(height * chartProgress)}%` :
                                                                        `${((height / 10) * chartProgress).toFixed(1)}`}
                                                        </text>
                                                    </g>
                                                ))}

                                                {/* Trend line connecting points */}
                                                <path
                                                    d={`M15,${85 - (stat.id === 1 ? 35 : stat.id === 2 ? 25 : stat.id === 3 ? 45 : 20) * 0.7 * chartProgress} 
                                                   L51,${85 - (stat.id === 1 ? 45 : stat.id === 2 ? 35 : stat.id === 3 ? 55 : 35) * 0.7 * chartProgress}
                                                   L87,${85 - (stat.id === 1 ? 52 : stat.id === 2 ? 48 : stat.id === 3 ? 70 : 50) * 0.7 * chartProgress}
                                                   L123,${85 - (stat.id === 1 ? 68 : stat.id === 2 ? 65 : stat.id === 3 ? 85 : 70) * 0.7 * chartProgress}
                                                   L159,${85 - (stat.id === 1 ? 85 : stat.id === 2 ? 85 : stat.id === 3 ? 95 : 85) * 0.7 * chartProgress}`}
                                                    stroke={
                                                        stat.color.includes('blue') ? '#3B82F6' :
                                                            stat.color.includes('green') ? '#10B981' :
                                                                stat.color.includes('amber') ? '#F59E0B' : '#8B5CF6'
                                                    }
                                                    strokeWidth="1.5"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    opacity={chartProgress}
                                                />

                                                {/* Chart title */}
                                                <text x="100" y="10" fontSize="7" fill="#374151" textAnchor="middle" fontWeight="600">
                                                    {stat.id === 1 ? 'Số chuyến/tháng' :
                                                        stat.id === 2 ? 'Khách hàng mới' :
                                                            stat.id === 3 ? 'Tỉ lệ phủ sóng' : 'Điểm kinh nghiệm'}
                                                </text>
                                            </svg>
                                        </motion.div>

                                        {/* Chart statistics */}
                                        <motion.div
                                            className="mt-3 grid grid-cols-2 gap-2 text-xs"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 0.6, delay: index * 0.15 + 2.5 }}
                                            viewport={{ once: false }}
                                        >
                                            <div className="text-center p-2 bg-white rounded border">
                                                <div className={`font-bold ${stat.color}`}>
                                                    +{stat.id === 1 ? Math.floor(143 * chartProgress) :
                                                        stat.id === 2 ? Math.floor(240 * chartProgress) :
                                                            stat.id === 3 ? Math.floor(111 * chartProgress) :
                                                                Math.floor(325 * chartProgress)}%
                                                </div>
                                                <div className="text-gray-500">5 năm qua</div>
                                            </div>
                                            <div className="text-center p-2 bg-white rounded border">
                                                <div className={`font-bold ${stat.color}`}>
                                                    {stat.id === 1 ? (98.5 * chartProgress).toFixed(1) :
                                                        stat.id === 2 ? (96.2 * chartProgress).toFixed(1) :
                                                            stat.id === 3 ? (100 * chartProgress).toFixed(1) :
                                                                (99.1 * chartProgress).toFixed(1)}%
                                                </div>
                                                <div className="text-gray-500">Độ tin cậy</div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 2,
                            type: "spring",
                            stiffness: 200
                        }}
                        viewport={{ once: false }}
                        className="inline-block"
                    >
                        <div className="relative">
                            {/* Background Chart */}
                            <div className="absolute inset-0 opacity-10">
                                <svg className="w-full h-full" viewBox="0 0 300 80">
                                    <motion.path
                                        d="M0,60 Q75,20 150,40 T300,25"
                                        stroke="#3B82F6"
                                        strokeWidth="2"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 2, delay: 2.5 }}
                                        viewport={{ once: false }}
                                    />
                                    <motion.path
                                        d="M0,60 Q75,20 150,40 T300,25 L300,80 L0,80 Z"
                                        fill="url(#award-gradient)"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 2, delay: 3 }}
                                        viewport={{ once: false }}
                                    />
                                    <defs>
                                        <linearGradient id="award-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <p className="text-gray-600 bg-white px-8 py-4 rounded-full shadow-lg border border-gray-100 relative z-10">
                                🏆 Được vinh danh <span className="font-semibold text-blue-600">&ldquo;Doanh nghiệp vận tải uy tín 2023&rdquo;</span>

                                {/* Floating sparkles */}
                                <motion.span
                                    initial={{ opacity: 0, y: 0 }}
                                    whileInView={{ opacity: [0, 1, 0], y: -20 }}
                                    transition={{
                                        duration: 2,
                                        delay: 3.5,
                                        repeat: Infinity,
                                        repeatDelay: 3
                                    }}
                                    viewport={{ once: false }}
                                    className="absolute -top-2 left-1/4 text-yellow-400"
                                >
                                    ✨
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 0 }}
                                    whileInView={{ opacity: [0, 1, 0], y: -20 }}
                                    transition={{
                                        duration: 2,
                                        delay: 4,
                                        repeat: Infinity,
                                        repeatDelay: 3
                                    }}
                                    viewport={{ once: false }}
                                    className="absolute -top-2 right-1/4 text-yellow-400"
                                >
                                    ⭐
                                </motion.span>
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
