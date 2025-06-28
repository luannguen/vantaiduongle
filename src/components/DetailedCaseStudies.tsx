'use client'

import { motion } from 'framer-motion'
import { Award, BarChart3, Calendar, ChevronRight, MapPin, Target, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

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

// Enhanced Animated Counter Component
const AnimatedMetricValue = ({ value, isVisible }: { value: string, isVisible: boolean }) => {
    const numericValue = parseFloat(value.replace(/[^\d.]/g, ''))
    const prefix = value.match(/^[^\d]*/)?.[0] || ''
    const suffix = value.match(/[^\d]*$/)?.[0] || ''

    const animatedNumber = useCountUp(numericValue, 2000, isVisible)

    return (
        <span>
            {prefix}{animatedNumber}{suffix}
        </span>
    )
}

// Progress Bar Chart Component
const ProgressChart = ({ before, after, improvement }: {
    before: string,
    after: string,
    improvement: string
}) => {
    const beforeNum = parseFloat(before.replace(/[^\d.]/g, ''))
    const afterNum = parseFloat(after.replace(/[^\d.]/g, ''))
    const maxValue = Math.max(beforeNum, afterNum)
    const beforePercent = (beforeNum / maxValue) * 100
    const afterPercent = (afterNum / maxValue) * 100
    const isImprovement = improvement.startsWith('+') || improvement.startsWith('-')

    return (
        <div className="mt-4 bg-gray-100 rounded-lg p-4">
            <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Trước</span>
                <span className="text-sm text-gray-600">Sau</span>
            </div>
            <div className="flex items-center space-x-2 mb-3">
                <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${beforePercent}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-red-400 rounded-full"
                    />
                </div>
                <span className="text-xs font-medium text-gray-500 w-8">VS</span>
                <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${afterPercent}%` }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-green-500 rounded-full"
                    />
                </div>
            </div>
            <div className="text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${isImprovement && improvement.startsWith('+')
                        ? 'bg-green-100 text-green-700'
                        : isImprovement && improvement.startsWith('-')
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-purple-100 text-purple-700'
                        }`}
                >
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {improvement}
                </motion.div>
            </div>
        </div>
    )
}

const detailedCaseStudies = [
    {
        id: 1,
        title: "Chuyển Đổi Số Logistics Cho Chuỗi Siêu Thị ABC",
        client: "ABC Retail Group",
        industry: "Bán lẻ & Phân phối",
        duration: "18 tháng",
        projectValue: "₫15 tỷ",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",

        overview: {
            challenge: "ABC Retail Group với 120 cửa hàng trên toàn quốc đang gặp khó khăn trong việc quản lý chuỗi cung ứng. Chi phí logistics chiếm đến 12% doanh thu, giao hàng chậm trễ 25% và thiếu khả năng theo dõi real-time.",
            solution: "Triển khai hệ thống logistics tích hợp với AI route optimization, warehouse management và real-time tracking. Xây dựng 8 hub logistics chiến lược và đào tạo 200+ nhân viên.",
            results: "Giảm 35% chi phí logistics, tăng 95% hiệu quả giao hàng và tiết kiệm ₫5.2 tỷ/năm. ROI đạt 280% sau 12 tháng."
        },

        timeline: [
            {
                phase: "Khảo sát & Phân tích",
                duration: "Tháng 1-2",
                description: "Đánh giá hiện trạng, phân tích dữ liệu và xác định pain points",
                deliverables: ["Báo cáo phân tích chi tiết", "Road map chuyển đổi", "KPI tracking system"],
                status: "completed"
            },
            {
                phase: "Thiết kế & Pilot",
                duration: "Tháng 3-5",
                description: "Thiết kế giải pháp tích hợp và triển khai pilot tại 10 cửa hàng",
                deliverables: ["Hệ thống WMS", "Route optimization tool", "Training program"],
                status: "completed"
            },
            {
                phase: "Triển khai Toàn diện",
                duration: "Tháng 6-12",
                description: "Scale up solution cho toàn bộ 120 cửa hàng và 8 kho phân phối",
                deliverables: ["Full deployment", "Staff training", "Performance monitoring"],
                status: "completed"
            },
            {
                phase: "Tối ưu & Mở rộng",
                duration: "Tháng 13-18",
                description: "Fine-tuning hệ thống và mở rộng tính năng AI analytics",
                deliverables: ["Advanced analytics", "Predictive maintenance", "Expansion plan"],
                status: "completed"
            }
        ],

        metrics: [
            {
                category: "Chi phí",
                before: "12% doanh thu",
                after: "7.8% doanh thu",
                improvement: "-35%",
                icon: TrendingUp,
                color: "text-green-600"
            },
            {
                category: "Hiệu quả giao hàng",
                before: "75% đúng hẹn",
                after: "95% đúng hẹn",
                improvement: "+20%",
                icon: Target,
                color: "text-blue-600"
            },
            {
                category: "Thời gian xử lý",
                before: "3.5 ngày",
                after: "1.2 ngày",
                improvement: "-66%",
                icon: Calendar,
                color: "text-purple-600"
            },
            {
                category: "Hài lòng khách hàng",
                before: "78%",
                after: "96%",
                improvement: "+18%",
                icon: Users,
                color: "text-orange-600"
            }
        ],

        testimonial: {
            quote: "Dự án chuyển đổi logistics với Vận Tải Dương Lê đã thay đổi hoàn toàn cách chúng tôi vận hành. Không chỉ tiết kiệm chi phí mà còn nâng cao trải nghiệm khách hàng đáng kể.",
            author: "Ông Nguyễn Minh Tuấn",
            position: "Tổng Giám Đốc ABC Retail Group",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
        },

        technologies: [
            "AI Route Optimization",
            "Warehouse Management System",
            "Real-time Tracking",
            "Predictive Analytics",
            "Mobile Apps",
            "IoT Sensors"
        ],

        awards: [
            "Best Logistics Innovation 2023",
            "Digital Transformation Excellence",
            "Supply Chain Optimization Award"
        ]
    },
    {
        id: 2,
        title: "Tối Ưu Chuỗi Lạnh Cho Tập Đoàn Dược Phẩm XYZ",
        client: "XYZ Pharmaceutical Corp",
        industry: "Y tế & Dược phẩm",
        duration: "24 tháng",
        projectValue: "₫28 tỷ",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",

        overview: {
            challenge: "XYZ Corp cần vận chuyển dược phẩm nhạy cảm với temperature 2-8°C đến 500+ nhà thuốc. Thách thức: compliance với GSP, zero tolerance với sai sót và tracking 24/7.",
            solution: "Xây dựng cold chain infrastructure với 15 kho lạnh chuyên dụng, 200 xe refrigerated trucks và hệ thống monitoring IoT. Đào tạo 300+ nhân viên theo chuẩn GDP.",
            results: "100% compliance với GSP standards, giảm 90% product loss và tăng 45% market coverage. Tiết kiệm ₫8.5 tỷ/năm chi phí vận hành."
        },

        timeline: [
            {
                phase: "Compliance Assessment",
                duration: "Tháng 1-3",
                description: "Đánh giá compliance với GSP/GDP standards và regulatory requirements",
                deliverables: ["Compliance audit report", "Risk assessment", "Regulatory roadmap"],
                status: "completed"
            },
            {
                phase: "Infrastructure Development",
                duration: "Tháng 4-12",
                description: "Xây dựng cold storage facilities và refrigerated vehicle fleet",
                deliverables: ["15 cold warehouses", "200 refrigerated trucks", "IoT monitoring system"],
                status: "completed"
            },
            {
                phase: "System Integration",
                duration: "Tháng 13-18",
                description: "Tích hợp ERP, WMS và real-time monitoring systems",
                deliverables: ["Integrated platform", "API connections", "Data analytics dashboard"],
                status: "completed"
            },
            {
                phase: "Optimization & Scale",
                duration: "Tháng 19-24",
                description: "Fine-tuning operations và mở rộng coverage area",
                deliverables: ["Performance optimization", "Network expansion", "Advanced analytics"],
                status: "completed"
            }
        ],

        metrics: [
            {
                category: "Product Integrity",
                before: "92% maintained",
                after: "99.9% maintained",
                improvement: "+7.9%",
                icon: Award,
                color: "text-green-600"
            },
            {
                category: "Market Coverage",
                before: "320 locations",
                after: "500+ locations",
                improvement: "+56%",
                icon: MapPin,
                color: "text-blue-600"
            },
            {
                category: "Compliance Score",
                before: "85%",
                after: "100%",
                improvement: "+15%",
                icon: Target,
                color: "text-purple-600"
            },
            {
                category: "Cost Efficiency",
                before: "₫120M/tháng",
                after: "₫78M/tháng",
                improvement: "-35%",
                icon: TrendingUp,
                color: "text-orange-600"
            }
        ],

        testimonial: {
            quote: "Cold chain solution của Dương Lê không chỉ đáp ứng mà còn vượt xa các tiêu chuẩn quốc tế. Chúng tôi hoàn toàn yên tâm về chất lượng sản phẩm từ nhà máy đến tay bệnh nhân.",
            author: "Bà Trần Thu Hằng",
            position: "Giám Đốc Chuỗi Cung Ứng XYZ Corp",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b2fd?w=60&h=60&fit=crop&crop=face"
        },

        technologies: [
            "Cold Chain Management",
            "IoT Temperature Monitoring",
            "Blockchain Traceability",
            "RFID Tracking",
            "Compliance Management",
            "Predictive Maintenance"
        ],

        awards: [
            "Cold Chain Excellence Award 2023",
            "Healthcare Logistics Innovation",
            "Quality Assurance Recognition"
        ]
    },
    {
        id: 3,
        title: "E-commerce Fulfillment Cho Marketplace DEF",
        client: "DEF E-commerce Platform",
        industry: "Thương mại điện tử",
        duration: "12 tháng",
        projectValue: "₫35 tỷ",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",

        overview: {
            challenge: "DEF Platform xử lý 50,000+ đơn hàng/ngày với 100ms+ sellers. Thách thức: same-day delivery, returns processing và inventory management cho multiple sellers.",
            solution: "Triển khai automated fulfillment centers với robotics, AI-powered inventory forecasting và last-mile delivery optimization. Xây dựng network 25 micro-fulfillment centers.",
            results: "Tăng 300% capacity xử lý đơn hàng, giảm 40% delivery time và đạt 98.5% customer satisfaction. Revenue tăng 150% trong 12 tháng."
        },

        timeline: [
            {
                phase: "System Architecture",
                duration: "Tháng 1-2",
                description: "Thiết kế kiến trúc hệ thống và technology stack",
                deliverables: ["Technical architecture", "Integration roadmap", "Performance benchmarks"],
                status: "completed"
            },
            {
                phase: "Fulfillment Centers",
                duration: "Tháng 3-6",
                description: "Xây dựng automated fulfillment centers với robotics",
                deliverables: ["5 main fulfillment centers", "Robotics automation", "WMS implementation"],
                status: "completed"
            },
            {
                phase: "Micro-Fulfillment Network",
                duration: "Tháng 7-9",
                description: "Triển khai 25 micro-fulfillment centers cho last-mile delivery",
                deliverables: ["25 micro-centers", "Same-day delivery", "Returns processing"],
                status: "completed"
            },
            {
                phase: "AI Optimization",
                duration: "Tháng 10-12",
                description: "Triển khai AI forecasting và route optimization",
                deliverables: ["AI forecasting model", "Dynamic routing", "Performance analytics"],
                status: "completed"
            }
        ],

        metrics: [
            {
                category: "Order Processing",
                before: "50K orders/day",
                after: "150K orders/day",
                improvement: "+200%",
                icon: BarChart3,
                color: "text-green-600"
            },
            {
                category: "Delivery Speed",
                before: "3.5 days average",
                after: "1.2 days average",
                improvement: "-66%",
                icon: TrendingUp,
                color: "text-blue-600"
            },
            {
                category: "Customer Satisfaction",
                before: "82%",
                after: "98.5%",
                improvement: "+16.5%",
                icon: Users,
                color: "text-purple-600"
            },
            {
                category: "Same-day Delivery",
                before: "0%",
                after: "75%",
                improvement: "+75%",
                icon: Target,
                color: "text-orange-600"
            }
        ],

        testimonial: {
            quote: "Partnership với Dương Lê đã transform hoàn toàn fulfillment operations của chúng tôi. Từ marketplace nhỏ, giờ chúng tôi compete được với các giant như Shopee, Lazada.",
            author: "Ông Lê Đức Anh",
            position: "CEO & Founder DEF Platform",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
        },

        technologies: [
            "Robotics Automation",
            "AI Inventory Forecasting",
            "Dynamic Route Optimization",
            "Micro-Fulfillment Centers",
            "Real-time Analytics",
            "Mobile Workforce Management"
        ],

        awards: [
            "E-commerce Innovation Award 2023",
            "Fulfillment Excellence Recognition",
            "Technology Leadership Award"
        ]
    }
]

export default function DetailedCaseStudies() {
    const [selectedCase, setSelectedCase] = useState(detailedCaseStudies[0])
    const [activeTab, setActiveTab] = useState('overview')

    const tabs = [
        { id: 'overview', label: 'Tổng quan', icon: Target },
        { id: 'timeline', label: 'Timeline', icon: Calendar },
        { id: 'metrics', label: 'Kết quả', icon: BarChart3 },
        { id: 'testimonial', label: 'Đánh giá', icon: Users }
    ]

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
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
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl mr-4">
                            <Award className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Case Studies Chi Tiết
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Khám phá những dự án transformation thành công và cách chúng tôi đã giúp
                        các doanh nghiệp đạt được breakthrough trong logistics & supply chain
                    </p>
                </motion.div>

                {/* Case Study Selector */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-6 mb-12"
                >
                    {detailedCaseStudies.map((caseStudy) => (
                        <motion.div
                            key={caseStudy.id}
                            onClick={() => setSelectedCase(caseStudy)}
                            className={`cursor-pointer bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${selectedCase.id === caseStudy.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300'
                                }`}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="aspect-video rounded-lg mb-4 relative overflow-hidden">
                                <Image
                                    src={caseStudy.image}
                                    alt={caseStudy.client}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <span className="text-white font-bold text-lg drop-shadow-lg">{caseStudy.client}</span>
                                        <div className="text-white/90 text-sm mt-1">{caseStudy.industry}</div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{caseStudy.title}</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center text-gray-600">
                                    <Users className="w-4 h-4 mr-2" />
                                    {caseStudy.industry}
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {caseStudy.duration}
                                </div>
                                <div className="flex items-center text-blue-600 font-semibold">
                                    <TrendingUp className="w-4 h-4 mr-2" />
                                    {caseStudy.projectValue}
                                </div>
                            </div>

                            <div className="mt-4 flex items-center text-blue-600 font-medium">
                                <span className="mr-2">Xem chi tiết</span>
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main Case Study Display */}
                <motion.div
                    key={selectedCase.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
                        <div className="flex items-start justify-between">
                            <div>
                                <h1 className="text-3xl font-bold mb-2">{selectedCase.title}</h1>
                                <p className="text-blue-100 text-lg mb-4">{selectedCase.client} • {selectedCase.industry}</p>
                                <div className="flex items-center space-x-6">
                                    <div>
                                        <span className="text-blue-200 text-sm">Thời gian</span>
                                        <div className="font-semibold">{selectedCase.duration}</div>
                                    </div>
                                    <div>
                                        <span className="text-blue-200 text-sm">Giá trị dự án</span>
                                        <div className="font-semibold">{selectedCase.projectValue}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                {selectedCase.awards.map((award, index) => (
                                    <div key={index} className="bg-white bg-opacity-20 rounded-lg p-2">
                                        <Award className="w-6 h-6" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="border-b border-gray-200">
                        <nav className="flex">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center px-6 py-4 font-medium transition-colors ${activeTab === tab.id
                                        ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <tab.icon className="w-5 h-5 mr-2" />
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        {activeTab === 'overview' && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-8"
                            >
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                                        <h3 className="text-lg font-bold text-red-700 mb-3 flex items-center">
                                            <Target className="w-5 h-5 mr-2" />
                                            Thách thức
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">{selectedCase.overview.challenge}</p>
                                    </div>

                                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                                        <h3 className="text-lg font-bold text-blue-700 mb-3 flex items-center">
                                            <TrendingUp className="w-5 h-5 mr-2" />
                                            Giải pháp
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">{selectedCase.overview.solution}</p>
                                    </div>

                                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                                        <h3 className="text-lg font-bold text-green-700 mb-3 flex items-center">
                                            <Award className="w-5 h-5 mr-2" />
                                            Kết quả
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">{selectedCase.overview.results}</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Công nghệ sử dụng</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedCase.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'timeline' && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                {selectedCase.timeline.map((phase, index) => (
                                    <div key={index} className="relative">
                                        {index < selectedCase.timeline.length - 1 && (
                                            <div className="absolute left-6 top-16 w-0.5 h-20 bg-blue-200"></div>
                                        )}

                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-6">
                                                {index + 1}
                                            </div>

                                            <div className="flex-1 bg-gray-50 rounded-xl p-6">
                                                <div className="flex items-center justify-between mb-3">
                                                    <h3 className="text-lg font-bold text-gray-900">{phase.phase}</h3>
                                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                                        {phase.duration}
                                                    </span>
                                                </div>

                                                <p className="text-gray-700 mb-4">{phase.description}</p>

                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                                                    <ul className="list-disc list-inside space-y-1">
                                                        {phase.deliverables.map((deliverable, idx) => (
                                                            <li key={idx} className="text-gray-600 text-sm">{deliverable}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === 'metrics' && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-8"
                            >
                                {/* Overview Stats */}
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                                    <h3 className="text-2xl font-bold text-center mb-8">📊 Tổng Quan Kết Quả</h3>
                                    <div className="grid md:grid-cols-4 gap-6">
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.1 }}
                                            className="text-center"
                                        >
                                            <div className="text-4xl font-bold mb-2">
                                                <AnimatedMetricValue value={selectedCase.projectValue} isVisible={true} />
                                            </div>
                                            <div className="text-blue-200">Giá trị dự án</div>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                            className="text-center"
                                        >
                                            <div className="text-4xl font-bold mb-2">{selectedCase.duration}</div>
                                            <div className="text-blue-200">Thời gian thực hiện</div>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            className="text-center"
                                        >
                                            <div className="text-4xl font-bold mb-2">
                                                {selectedCase.technologies.length}+
                                            </div>
                                            <div className="text-blue-200">Công nghệ áp dụng</div>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.4 }}
                                            className="text-center"
                                        >
                                            <div className="text-4xl font-bold mb-2">
                                                {selectedCase.awards.length}
                                            </div>
                                            <div className="text-blue-200">Giải thưởng đạt được</div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Detailed Metrics with Charts */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {selectedCase.metrics.map((metric, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-lg"
                                        >
                                            <div className="flex items-center mb-6">
                                                <metric.icon className={`w-10 h-10 ${metric.color} mr-4`} />
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900">{metric.category}</h3>
                                                    <p className="text-sm text-gray-600">So sánh trước và sau</p>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                                                    <span className="text-gray-700 font-medium">Trước khi hợp tác:</span>
                                                    <span className="font-bold text-red-600 text-lg">
                                                        <AnimatedMetricValue value={metric.before} isVisible={true} />
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                                                    <span className="text-gray-700 font-medium">Sau khi hợp tác:</span>
                                                    <span className="font-bold text-green-600 text-lg">
                                                        <AnimatedMetricValue value={metric.after} isVisible={true} />
                                                    </span>
                                                </div>
                                            </div>

                                            <ProgressChart
                                                before={metric.before}
                                                after={metric.after}
                                                improvement={metric.improvement}
                                            />

                                            {/* Impact Badge */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                                                className="mt-4 text-center"
                                            >
                                                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full font-bold text-sm shadow-lg">
                                                    <Award className="w-4 h-4 mr-2" />
                                                    Cải thiện vượt trội
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* ROI Summary */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200"
                                >
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                                            <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                                            Return on Investment (ROI)
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="bg-white rounded-xl p-6 shadow-md">
                                                <div className="text-3xl font-bold text-green-600 mb-2">
                                                    {selectedCase.id === 1 ? '280%' : selectedCase.id === 2 ? '420%' : '350%'}
                                                </div>
                                                <div className="text-gray-600">ROI sau 12 tháng</div>
                                            </div>
                                            <div className="bg-white rounded-xl p-6 shadow-md">
                                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                                    {selectedCase.id === 1 ? '₫5.2 tỷ' : selectedCase.id === 2 ? '₫8.5 tỷ' : '₫12.8 tỷ'}
                                                </div>
                                                <div className="text-gray-600">Tiết kiệm hàng năm</div>
                                            </div>
                                            <div className="bg-white rounded-xl p-6 shadow-md">
                                                <div className="text-3xl font-bold text-purple-600 mb-2">
                                                    {selectedCase.id === 1 ? '8 tháng' : selectedCase.id === 2 ? '6 tháng' : '5 tháng'}
                                                </div>
                                                <div className="text-gray-600">Payback period</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}

                        {activeTab === 'testimonial' && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="max-w-4xl mx-auto"
                            >
                                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
                                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                                        {selectedCase.testimonial.author.split(' ').map(n => n[0]).join('')}
                                    </div>

                                    <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
                                        &ldquo;{selectedCase.testimonial.quote}&rdquo;
                                    </blockquote>

                                    <div>
                                        <div className="font-bold text-gray-900 text-lg">{selectedCase.testimonial.author}</div>
                                        <div className="text-blue-600 font-medium">{selectedCase.testimonial.position}</div>
                                        <div className="text-gray-600">{selectedCase.client}</div>
                                    </div>
                                </div>

                                <div className="mt-8 grid md:grid-cols-3 gap-6">
                                    {selectedCase.awards.map((award, index) => (
                                        <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
                                            <Award className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                                            <h4 className="font-bold text-gray-900 text-sm">{award}</h4>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center"
                >
                    <h3 className="text-3xl font-bold mb-4">
                        🚀 Sẵn Sàng Transform Logistics Của Bạn?
                    </h3>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Tham gia cùng 1000+ doanh nghiệp đã đạt được breakthrough với giải pháp logistics của chúng tôi
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            📞 Tư Vấn Miễn Phí
                        </motion.button>
                        <motion.button
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            📊 Tải Case Study PDF
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
