'use client'

import { COMPANY_INFO } from '@/lib/company-metadata'
import { motion } from 'framer-motion'
import {
    ArrowRight,
    Award,
    Calendar,
    CheckCircle,
    Clock,
    FileText,
    Handshake,
    Mail,
    MapPin,
    Phone,
    Star,
    Target,
    Truck,
    User,
    Users
} from 'lucide-react'
import { useState } from 'react'

const onboardingSteps = [
    {
        step: 1,
        title: "Đăng ký thông tin",
        description: "Điền form đăng ký với thông tin cơ bản về doanh nghiệp và nhu cầu vận chuyển",
        duration: "5 phút",
        icon: User,
        color: "from-blue-500 to-cyan-500",
        details: [
            "Thông tin công ty",
            "Loại hàng hóa vận chuyển",
            "Tần suất và khối lượng",
            "Yêu cầu đặc biệt"
        ]
    },
    {
        step: 2,
        title: "Tư vấn & báo giá",
        description: "Chuyên gia sẽ liên hệ tư vấn chi tiết và đưa ra báo giá phù hợp",
        duration: "30 phút",
        icon: Phone,
        color: "from-green-500 to-emerald-500",
        details: [
            "Cuộc gọi tư vấn miễn phí",
            "Phân tích nhu cầu chi tiết",
            "Báo giá tùy chỉnh",
            "Tư vấn tối ưu chi phí"
        ]
    },
    {
        step: 3,
        title: "Ký kết hợp đồng",
        description: "Thống nhất điều khoản và ký kết hợp đồng đảm bảo quyền lợi cho cả hai bên",
        duration: "1 ngày",
        icon: FileText,
        color: "from-orange-500 to-amber-500",
        details: [
            "Hợp đồng minh bạch",
            "Điều khoản rõ ràng",
            "Bảo hiểm đầy đủ",
            "Cam kết chất lượng"
        ]
    },
    {
        step: 4,
        title: "Triển khai dịch vụ",
        description: "Bắt đầu cung cấp dịch vụ với Account Manager riêng để theo dõi và hỗ trợ",
        duration: "Ngay lập tức",
        icon: Handshake,
        color: "from-purple-500 to-pink-500",
        details: [
            "Account Manager riêng",
            "Hệ thống tracking",
            "Báo cáo định kỳ",
            "Hỗ trợ 24/7"
        ]
    }
]

const partnerRequirements = [
    {
        category: "Doanh nghiệp SME",
        minOrder: "5+ chuyến/tháng",
        benefits: [
            "Giảm giá 5-10%",
            "Tư vấn miễn phí",
            "Báo cáo hàng tháng",
            "Hỗ trợ 24/7"
        ],
        icon: Users,
        color: "from-blue-100 to-cyan-100",
        textColor: "text-blue-700"
    },
    {
        category: "Doanh nghiệp lớn",
        minOrder: "20+ chuyến/tháng",
        benefits: [
            "Giảm giá 10-15%",
            "Account Manager riêng",
            "Dịch vụ tùy chỉnh",
            "Báo cáo tuần"
        ],
        icon: Award,
        color: "from-green-100 to-emerald-100",
        textColor: "text-green-700"
    },
    {
        category: "Đối tác chiến lược",
        minOrder: "50+ chuyến/tháng",
        benefits: [
            "Giảm giá 15-25%",
            "Đội ngũ chuyên biệt",
            "Giải pháp logistics toàn diện",
            "Báo cáo real-time"
        ],
        icon: Star,
        color: "from-purple-100 to-pink-100",
        textColor: "text-purple-700"
    }
]

const quickStartForm = {
    fields: [
        { name: "company", label: "Tên công ty", type: "text", required: true, icon: User },
        { name: "contact", label: "Người liên hệ", type: "text", required: true, icon: User },
        { name: "phone", label: "Số điện thoại", type: "tel", required: true, icon: Phone },
        { name: "email", label: "Email", type: "email", required: true, icon: Mail },
        { name: "location", label: "Địa điểm", type: "text", required: true, icon: MapPin },
        { name: "cargo", label: "Loại hàng hóa", type: "text", required: false, icon: Truck }
    ]
}

export default function PartnershipOnboarding() {
    const [activeStep, setActiveStep] = useState(1)
    const [showForm, setShowForm] = useState(false)

    const handleFormChange = (field: string, value: string) => {
        console.log(`${field}: ${value}`) // For form handling
    }

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl mr-4">
                            <Target className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                            Quy trình đối tác
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        4 bước đơn giản để trở thành đối tác vận chuyển lâu dài của chúng tôi
                    </p>
                </motion.div>

                {/* Onboarding Steps */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Steps Timeline */}
                    <div className="space-y-6">
                        {onboardingSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative cursor-pointer transition-all duration-300 ${activeStep === step.step ? 'scale-105' : 'hover:scale-102'
                                    }`}
                                onClick={() => setActiveStep(step.step)}
                            >
                                <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${activeStep === step.step
                                    ? 'border-blue-300 shadow-blue-500/20'
                                    : 'border-white/50 hover:border-blue-200'
                                    }`}>
                                    <div className="flex items-start">
                                        <div className={`bg-gradient-to-r ${step.color} p-3 rounded-xl mr-4 flex-shrink-0`}>
                                            <step.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium text-blue-600">Bước {step.step}</span>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <Clock className="w-4 h-4 mr-1" />
                                                    {step.duration}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                            <p className="text-gray-600 mb-4">{step.description}</p>
                                            <div className="grid grid-cols-2 gap-2">
                                                {step.details.map((detail, idx) => (
                                                    <div key={idx} className="flex items-center text-sm text-gray-500">
                                                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                                                        {detail}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Connection Line */}
                                {index < onboardingSteps.length - 1 && (
                                    <div className="absolute left-[30px] top-full w-0.5 h-6 bg-gradient-to-b from-blue-300 to-blue-200"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Partner Requirements */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Cấp độ đối tác</h3>

                        {partnerRequirements.map((req, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`bg-gradient-to-r ${req.color} rounded-xl p-6 border border-white/50`}
                            >
                                <div className="flex items-center mb-4">
                                    <req.icon className={`w-8 h-8 ${req.textColor} mr-3`} />
                                    <div>
                                        <h4 className={`text-lg font-bold ${req.textColor}`}>{req.category}</h4>
                                        <p className={`text-sm ${req.textColor} opacity-80`}>Tối thiểu: {req.minOrder}</p>
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {req.benefits.map((benefit, idx) => (
                                        <li key={idx} className={`flex items-center ${req.textColor}`}>
                                            <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                                            <span className="text-sm">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Quick Start Form */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-200/50 overflow-hidden"
                >
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl -translate-y-32 translate-x-32" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-amber-200/20 to-yellow-200/20 rounded-full blur-3xl translate-y-24 -translate-x-24" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-100/10 to-amber-100/10 rounded-full blur-3xl" />
                    </div>

                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-6 left-6 w-4 h-4 bg-orange-400 rounded-full"></div>
                        <div className="absolute top-12 right-8 w-2 h-2 bg-amber-400 rounded-full"></div>
                        <div className="absolute bottom-8 left-12 w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="absolute bottom-16 right-6 w-5 h-5 bg-orange-300 rounded-full"></div>
                        <div className="absolute top-32 left-1/3 w-2 h-2 bg-amber-300 rounded-full"></div>
                        <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-orange-400 rounded-full"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="text-center mb-8">
                            <motion.div
                                className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-3 rounded-full border border-orange-200/50 mb-6 shadow-sm"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mr-3 animate-pulse"></div>
                                <span className="text-sm font-semibold text-orange-800">Đăng ký miễn phí</span>
                            </motion.div>

                            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                                Bắt đầu ngay hôm nay
                            </h3>
                            <p className="text-lg text-slate-700">
                                Điền thông tin để nhận tư vấn miễn phí và báo giá tốt nhất
                            </p>
                        </div>
                    </div>

                    {!showForm ? (
                        <div className="text-center relative z-10">
                            <motion.button
                                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto group relative overflow-hidden"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowForm(true)}
                            >
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <User className="w-6 h-6 mr-2 relative z-10" />
                                <span className="relative z-10">Đăng ký trở thành đối tác</span>
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                    className="relative z-10"
                                >
                                    <ArrowRight className="w-6 h-6 ml-2" />
                                </motion.div>
                            </motion.button>

                            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
                                <motion.div
                                    className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-3 rounded-full shadow-sm border border-orange-100"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                                    <span className="font-semibold text-slate-700">Miễn phí 100%</span>
                                </motion.div>
                                <motion.div
                                    className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-3 rounded-full shadow-sm border border-orange-100"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                                    <span className="font-semibold text-slate-700">Phản hồi trong 30 phút</span>
                                </motion.div>
                                <motion.div
                                    className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-3 rounded-full shadow-sm border border-orange-100"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-3 h-3 bg-amber-400 rounded-full mr-3 animate-pulse"></div>
                                    <span className="font-semibold text-slate-700">Không cam kết</span>
                                </motion.div>
                            </div>
                        </div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {quickStartForm.fields.map((field, index) => (
                                    <motion.div
                                        key={field.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="relative"
                                    >
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            {field.label} {field.required && <span className="text-red-500">*</span>}
                                        </label>
                                        <div className="relative">
                                            <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type={field.type}
                                                required={field.required}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                                placeholder={`Nhập ${field.label.toLowerCase()}`}
                                                onChange={(e) => handleFormChange(field.name, e.target.value)}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="text-center pt-6"
                            >
                                <motion.button
                                    type="submit"
                                    className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto group relative overflow-hidden"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                    <Calendar className="w-6 h-6 mr-2 relative z-10" />
                                    <span className="relative z-10">Gửi thông tin & nhận tư vấn</span>
                                </motion.button>

                                <p className="mt-4 text-sm text-slate-600">
                                    Bằng việc gửi thông tin, bạn đồng ý với{' '}
                                    <a href="#" className="text-orange-600 hover:underline font-medium">chính sách bảo mật</a> của chúng tôi
                                </p>
                            </motion.div>
                        </motion.form>
                    )}
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <h4 className="text-xl font-bold text-gray-900 mb-6">
                        Cần hỗ trợ ngay? Liên hệ trực tiếp
                    </h4>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <motion.a
                            href={`tel:${COMPANY_INFO.contact.phone.primary.replace(/\./g, '')}`}
                            className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Gọi ngay: {COMPANY_INFO.contact.phone.primary}
                        </motion.a>

                        <motion.a
                            href={`mailto:${COMPANY_INFO.contact.email.business}`}
                            className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Email: {COMPANY_INFO.contact.email.business}
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
