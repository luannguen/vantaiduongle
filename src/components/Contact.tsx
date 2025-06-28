'use client';

import { COMPANY_INFO } from '@/lib/company-metadata';
import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';

// Component cho icon phone với hiệu ứng chuông
const AnimatedPhone = () => (
    <div className="relative">
        <motion.div
            animate={{
                rotate: [0, 8, -8, 8, -8, 0],
            }}
            transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
            }}
        >
            <Phone className="w-8 h-8 text-orange-600" />
        </motion.div>
        {/* Sóng âm thanh */}
        <motion.div
            className="absolute -top-1 -right-1"
            animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 0.8, 0]
            }}
            transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 1.8,
                ease: "easeOut"
            }}
        >
            <div className="w-3 h-3 border-2 border-orange-400 rounded-full" />
        </motion.div>
        <motion.div
            className="absolute -top-2 -right-2"
            animate={{
                scale: [0, 2, 0],
                opacity: [0, 0.4, 0]
            }}
            transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 1.8,
                ease: "easeOut",
                delay: 0.2
            }}
        >
            <div className="w-4 h-4 border border-orange-300 rounded-full" />
        </motion.div>
    </div>
)

// Component cho icon email với hiệu ứng gửi
const AnimatedMail = () => (
    <div className="relative">
        <motion.div
            animate={{
                y: [0, -2, 0],
                rotateZ: [0, 2, -2, 0]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <Mail className="w-8 h-8 text-orange-600" />
        </motion.div>
        {/* Hiệu ứng envelope */}
        <motion.div
            className="absolute -top-1 -left-1"
            animate={{
                scale: [0, 1.2, 0],
                opacity: [0, 0.6, 0],
                x: [0, 3, 6]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut"
            }}
        >
            <div className="text-xs text-orange-400">✉️</div>
        </motion.div>
    </div>
)

// Component cho icon map pin với hiệu ứng bounce
const AnimatedMapPin = () => (
    <motion.div
        animate={{
            y: [0, -4, 0],
        }}
        transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        <MapPin className="w-8 h-8 text-orange-600" />
    </motion.div>
)

// Component cho icon đồng hồ với kim quay
const AnimatedClock = () => (
    <div className="relative inline-block w-8 h-8">
        <Clock className="w-8 h-8 text-orange-600" />
        {/* Kim giờ */}
        <motion.div
            className="absolute w-0.5 bg-orange-800 rounded-full origin-bottom"
            style={{
                height: '8px',
                bottom: '50%',
                left: '50%',
                marginLeft: '-1px',
                transformOrigin: "bottom center"
            }}
            animate={{ rotate: 360 }}
            transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
            }}
        />
        {/* Kim phút */}
        <motion.div
            className="absolute w-0.5 bg-orange-600 rounded-full origin-bottom"
            style={{
                height: '12px',
                bottom: '50%',
                left: '50%',
                marginLeft: '-1px',
                transformOrigin: "bottom center"
            }}
            animate={{ rotate: 360 }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
            }}
        />
        {/* Kim giây */}
        <motion.div
            className="absolute w-px bg-red-500 rounded-full origin-bottom"
            style={{
                height: '14px',
                bottom: '50%',
                left: '50%',
                marginLeft: '-0.5px',
                transformOrigin: "bottom center"
            }}
            animate={{ rotate: 360 }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
            }}
        />
        {/* Tâm đồng hồ */}
        <div className="absolute w-1.5 h-1.5 bg-orange-800 rounded-full z-10"
            style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }} />
    </div>
)

const contactInfo = [
    {
        icon: AnimatedPhone,
        title: "Hotline 24/7",
        details: [COMPANY_INFO.contact.phone.primary, COMPANY_INFO.contact.phone.secondary],
        description: "Liên hệ bất cứ lúc nào"
    },
    {
        icon: AnimatedMail,
        title: "Email",
        details: [COMPANY_INFO.contact.email.primary, COMPANY_INFO.contact.email.support],
        description: "Gửi yêu cầu qua email"
    },
    {
        icon: AnimatedMapPin,
        title: "Trụ sở chính",
        details: [COMPANY_INFO.contact.address.street, COMPANY_INFO.contact.address.district + ", " + COMPANY_INFO.contact.address.city],
        description: "Văn phòng làm việc"
    },
    {
        icon: AnimatedClock,
        title: "Giờ làm việc",
        details: ["Thứ 2 - Chủ nhật", "24/7 phục vụ"],
        description: "Luôn sẵn sàng hỗ trợ"
    }
];

const offices = [
    {
        region: "Miền Bắc",
        address: "123 Đường Láng, Đống Đa, Hà Nội",
        phone: "024 3333 4444",
        email: "hanoi@vantaiduongle.com"
    },
    {
        region: "Miền Trung",
        address: "456 Lê Duẩn, Hải Châu, Đà Nẵng",
        phone: "0236 3555 6666",
        email: "danang@vantaiduongle.com"
    },
    {
        region: "Miền Nam",
        address: "789 Nguyễn Văn Linh, Quận 7, TP.HCM",
        phone: "028 7777 8888",
        email: "hcm@vantaiduongle.com"
    }
];

export default function Contact() {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-100/20 to-amber-100/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    {/* Premium badge */}
                    <motion.div
                        className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-3 rounded-full border border-orange-200/50 mb-6 shadow-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mr-3 animate-pulse"></div>
                        <span className="text-sm font-semibold text-orange-800">Hỗ trợ khách hàng 24/7</span>
                    </motion.div>

                    <motion.h2
                        className="section-title text-4xl md:text-5xl mb-6 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Kết nối với chúng tôi
                    </motion.h2>

                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                            Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn với dịch vụ vận tải
                            <span className="font-semibold text-orange-600"> chuyên nghiệp và đáng tin cậy</span>.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
                            <div className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-orange-100">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                <span className="font-medium">Tư vấn miễn phí</span>
                            </div>
                            <div className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-orange-100">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                                <span className="font-medium">Báo giá nhanh chóng</span>
                            </div>
                            <div className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-orange-100">
                                <div className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></div>
                                <span className="font-medium">Giá cả cạnh tranh</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-100/50 text-center hover-lift group relative overflow-hidden"
                            whileHover={{ y: -8, scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <motion.div
                                className="bg-gradient-to-br from-orange-100 to-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-orange-200 group-hover:to-amber-200 transition-all duration-300 relative z-10 shadow-sm"
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <info.icon />
                            </motion.div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 relative z-10">{info.title}</h3>
                            <div className="space-y-1 mb-3 relative z-10">
                                {info.details.map((detail, detailIndex) => (
                                    <p key={detailIndex} className="text-orange-700 font-semibold">{detail}</p>
                                ))}
                            </div>
                            <p className="text-sm text-slate-600 relative z-10">{info.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-orange-100/50 hover-lift relative overflow-hidden"
                        whileHover={{ y: -5 }}
                    >
                        {/* Form Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-amber-50/30" />

                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <h3 className="subsection-title text-2xl mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                                    Gửi yêu cầu báo giá
                                </h3>
                            </div>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Họ và tên *
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300 hover:border-orange-300 bg-white/80 backdrop-blur-sm"
                                            placeholder="Nhập họ và tên"
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.15 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Số điện thoại *
                                        </label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            required
                                            className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300 hover:border-orange-300 bg-white/80 backdrop-blur-sm"
                                            placeholder="Nhập số điện thoại"
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300 hover:border-orange-300 bg-white/80 backdrop-blur-sm"
                                        placeholder="Nhập địa chỉ email"
                                    />
                                </motion.div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.25 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="origin" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Điểm đi *
                                        </label>
                                        <input
                                            id="origin"
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300 hover:border-orange-300 bg-white/80 backdrop-blur-sm"
                                            placeholder="Nhập điểm đi"
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="destination" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Điểm đến *
                                        </label>
                                        <input
                                            id="destination"
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300 hover:border-orange-300 bg-white/80 backdrop-blur-sm"
                                            placeholder="Nhập điểm đến"
                                        />
                                    </motion.div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.35 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="truckType" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Loại xe
                                        </label>
                                        <select
                                            id="truckType"
                                            className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300 hover:border-orange-300 bg-white/80 backdrop-blur-sm"
                                        >
                                            <option>Chọn loại xe</option>
                                            <option>1 tấn</option>
                                            <option>2 tấn</option>
                                            <option>5 tấn</option>
                                            <option>10 tấn</option>
                                            <option>Xe chuyên dụng</option>
                                        </select>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="cargoType" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Loại hàng hóa
                                        </label>
                                        <select
                                            id="cargoType"
                                            className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300 hover:border-orange-300 bg-white/80 backdrop-blur-sm"
                                        >
                                            <option>Chọn loại hàng</option>
                                            <option>Hàng thường</option>
                                            <option>Hàng dễ vỡ</option>
                                            <option>Hàng lạnh</option>
                                            <option>Hàng nguy hiểm</option>
                                        </select>
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.45 }}
                                    viewport={{ once: true }}
                                >
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Yêu cầu đặc biệt
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300 hover:border-orange-300 bg-white/80 backdrop-blur-sm resize-none"
                                        placeholder="Mô tả chi tiết về yêu cầu vận chuyển..."
                                    ></textarea>
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 font-bold text-lg flex items-center justify-center shadow-lg hover:shadow-xl relative overflow-hidden group"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                    <span className="relative z-10">Gửi yêu cầu</span>
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                        className="relative z-10"
                                    >
                                        <Send className="w-5 h-5 ml-2" />
                                    </motion.div>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Offices & Contact Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Regional Offices */}
                        <motion.div
                            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-orange-100/50 hover-lift relative overflow-hidden"
                            whileHover={{ y: -5 }}
                        >
                            {/* Background Pattern */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-amber-50/30" />

                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center mr-3">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="subsection-title text-2xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                                        Văn phòng đại diện
                                    </h3>
                                </div>

                                <div className="space-y-6">
                                    {offices.map((office, index) => (
                                        <motion.div
                                            key={index}
                                            className="border-l-4 border-orange-400 pl-6 py-4 bg-white/50 backdrop-blur-sm rounded-r-xl group hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-md"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ x: 8, scale: 1.02 }}
                                        >
                                            <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                                                {office.region}
                                            </h4>
                                            <div className="space-y-2 text-slate-600">
                                                <p className="flex items-center group-hover:text-slate-700 transition-colors">
                                                    <MapPin className="w-4 h-4 mr-3 text-orange-500" />
                                                    <span className="font-medium">{office.address}</span>
                                                </p>
                                                <p className="flex items-center group-hover:text-slate-700 transition-colors">
                                                    <Phone className="w-4 h-4 mr-3 text-green-500" />
                                                    <span className="font-semibold text-orange-700">{office.phone}</span>
                                                </p>
                                                <p className="flex items-center group-hover:text-slate-700 transition-colors">
                                                    <Mail className="w-4 h-4 mr-3 text-blue-500" />
                                                    <span className="text-sm">{office.email}</span>
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Contact */}
                        <motion.div
                            className="bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 p-8 rounded-2xl text-white hover-lift relative overflow-hidden shadow-2xl"
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* Background decorative elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />

                            <div className="relative z-10">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold">Cần hỗ trợ ngay?</h3>
                                </div>

                                <p className="text-white/90 mb-6 text-lg leading-relaxed">
                                    Đội ngũ chăm sóc khách hàng chuyên nghiệp luôn sẵn sàng hỗ trợ bạn
                                    <span className="font-semibold"> 24/7</span>
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <motion.button
                                        className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 font-bold flex items-center justify-center border border-white/30 shadow-lg relative overflow-hidden"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {/* Shimmer effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                        <Phone className="w-5 h-5 mr-3 relative z-10" />
                                        <span className="relative z-10">Gọi ngay</span>
                                    </motion.button>
                                    <motion.button
                                        className="group bg-white text-orange-600 px-8 py-4 rounded-xl hover:bg-orange-50 transition-all duration-300 font-bold flex items-center justify-center shadow-lg relative overflow-hidden"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {/* Shimmer effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                        <MessageCircle className="w-5 h-5 mr-3 relative z-10" />
                                        <span className="relative z-10">Chat trực tuyến</span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Full Width Interactive Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full"
                >
                    <motion.div
                        className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-orange-100/50 hover-lift relative overflow-hidden"
                        whileHover={{ y: -5 }}
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-amber-50/30" />

                        <div className="relative z-10">
                            <div className="text-center mb-8">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center mr-3">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="section-title text-3xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                                        Mạng lưới phủ sóng toàn quốc
                                    </h3>
                                </div>
                                <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                                    Chúng tôi có mặt khắp cả nước, sẵn sàng phục vụ mọi nhu cầu vận chuyển của bạn
                                </p>
                            </div>

                            <motion.div
                                className="bg-gradient-to-br from-slate-100 to-slate-200 h-[500px] rounded-xl flex items-center justify-center group cursor-pointer relative overflow-hidden border-2 border-orange-200/50 shadow-inner"
                                whileHover={{ scale: 1.005 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {/* Map grid pattern */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="h-full w-full" style={{
                                        backgroundImage: `
                                            linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px),
                                            linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px)
                                        `,
                                        backgroundSize: '30px 30px'
                                    }} />
                                </div>

                                {/* Animated route connections */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                                    <motion.path
                                        d="M 200 120 Q 400 80, 600 150 T 900 200"
                                        stroke="url(#route1)"
                                        strokeWidth="4"
                                        fill="none"
                                        strokeDasharray="15,10"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
                                    />
                                    <motion.path
                                        d="M 150 250 Q 350 200, 550 280 T 850 320"
                                        stroke="url(#route2)"
                                        strokeWidth="4"
                                        fill="none"
                                        strokeDasharray="12,8"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 5, repeat: Infinity, repeatType: "loop", delay: 1 }}
                                    />
                                    <motion.path
                                        d="M 300 350 Q 500 300, 700 380 T 1000 420"
                                        stroke="url(#route3)"
                                        strokeWidth="4"
                                        fill="none"
                                        strokeDasharray="10,6"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 6, repeat: Infinity, repeatType: "loop", delay: 2 }}
                                    />
                                    <defs>
                                        <linearGradient id="route1" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#f97316" />
                                            <stop offset="50%" stopColor="#f59e0b" />
                                            <stop offset="100%" stopColor="#eab308" />
                                        </linearGradient>
                                        <linearGradient id="route2" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#3b82f6" />
                                            <stop offset="50%" stopColor="#06b6d4" />
                                            <stop offset="100%" stopColor="#0891b2" />
                                        </linearGradient>
                                        <linearGradient id="route3" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#10b981" />
                                            <stop offset="50%" stopColor="#059669" />
                                            <stop offset="100%" stopColor="#047857" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Regional location markers */}
                                <div className="absolute top-[25%] left-[20%]">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.3, 1],
                                            y: [0, -8, 0]
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 3,
                                            delay: 0
                                        }}
                                        className="relative"
                                    >
                                        <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-full shadow-xl border-2 border-white flex items-center justify-center">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-slate-800 whitespace-nowrap shadow-lg">
                                            Hà Nội
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="absolute top-[45%] left-[45%]">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.3, 1],
                                            y: [0, -8, 0]
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 3,
                                            delay: 1
                                        }}
                                        className="relative"
                                    >
                                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-xl border-2 border-white flex items-center justify-center">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-slate-800 whitespace-nowrap shadow-lg">
                                            Đà Nẵng
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="absolute top-[70%] left-[75%]">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.3, 1],
                                            y: [0, -8, 0]
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 3,
                                            delay: 2
                                        }}
                                        className="relative"
                                    >
                                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-xl border-2 border-white flex items-center justify-center">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-slate-800 whitespace-nowrap shadow-lg">
                                            TP.HCM
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Main headquarters marker */}
                                <div className="text-center relative z-10">
                                    <motion.div
                                        animate={{
                                            y: [0, -12, 0],
                                            scale: [1, 1.15, 1]
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 4,
                                            ease: "easeInOut"
                                        }}
                                        className="relative mb-8"
                                    >
                                        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto shadow-2xl border-4 border-white">
                                            <MapPin className="w-10 h-10 text-white" />
                                        </div>
                                        {/* Multiple ripple effects */}
                                        <motion.div
                                            animate={{
                                                scale: [1, 3, 1],
                                                opacity: [0.8, 0, 0.8]
                                            }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 3,
                                                ease: "easeOut"
                                            }}
                                            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 border-2 border-orange-400 rounded-full"
                                        />
                                        <motion.div
                                            animate={{
                                                scale: [1, 2.5, 1],
                                                opacity: [0.6, 0, 0.6]
                                            }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 3,
                                                ease: "easeOut",
                                                delay: 1
                                            }}
                                            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 border-2 border-amber-400 rounded-full"
                                        />
                                    </motion.div>

                                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-2xl border border-orange-200 max-w-md mx-auto">
                                        <h4 className="subsection-title text-2xl text-slate-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                                            Trụ sở chính
                                        </h4>
                                        <p className="text-slate-600 mb-4 font-medium text-lg">{COMPANY_INFO.contact.address.full}</p>
                                        <div className="flex items-center justify-center space-x-6 text-sm">
                                            <div className="flex items-center text-green-600">
                                                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                                <span className="font-semibold">Hoạt động 24/7</span>
                                            </div>
                                            <div className="flex items-center text-orange-600">
                                                <Phone className="w-4 h-4 mr-2" />
                                                <span className="font-bold">{COMPANY_INFO.contact.phone.primary}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Coverage statistics */}
                            <div className="grid md:grid-cols-4 gap-6 mt-8">
                                <motion.div
                                    className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-orange-100"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-800 mb-2">63</h4>
                                    <p className="text-sm text-slate-600 font-medium">Tỉnh thành phủ sóng</p>
                                </motion.div>

                                <motion.div
                                    className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-orange-100"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-800 mb-2">50+</h4>
                                    <p className="text-sm text-slate-600 font-medium">Văn phòng đại diện</p>
                                </motion.div>

                                <motion.div
                                    className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-orange-100"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-800 mb-2">24/7</h4>
                                    <p className="text-sm text-slate-600 font-medium">Hỗ trợ khách hàng</p>
                                </motion.div>

                                <motion.div
                                    className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-orange-100"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-800 mb-2">99%</h4>
                                    <p className="text-sm text-slate-600 font-medium">Độ tin cậy giao hàng</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
