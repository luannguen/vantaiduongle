'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin, Package, Phone, Shield, Truck, CheckCircle2, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Professional Animated Icons
const AnimatedTruck = () => (
    <div className="relative w-12 h-12 flex items-center justify-center bg-primary-50 rounded-2xl group-hover:bg-primary-600 transition-colors duration-500">
        <Truck className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-500" />
    </div>
)

const AnimatedClock = () => (
    <div className="relative w-12 h-12 flex items-center justify-center bg-primary-50 rounded-2xl group-hover:bg-primary-600 transition-colors duration-500">
        <Clock className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-500" />
    </div>
)

const AnimatedShield = () => (
    <div className="relative w-12 h-12 flex items-center justify-center bg-primary-50 rounded-2xl group-hover:bg-primary-600 transition-colors duration-500">
        <Shield className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-500" />
    </div>
)

const AnimatedMapPin = () => (
    <div className="relative w-12 h-12 flex items-center justify-center bg-primary-50 rounded-2xl group-hover:bg-primary-600 transition-colors duration-500">
        <MapPin className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-500" />
    </div>
)

const AnimatedPhone = () => (
    <div className="relative w-12 h-12 flex items-center justify-center bg-primary-50 rounded-2xl group-hover:bg-primary-600 transition-colors duration-500">
        <Phone className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-500" />
    </div>
)

const AnimatedPackage = () => (
    <div className="relative w-12 h-12 flex items-center justify-center bg-primary-50 rounded-2xl group-hover:bg-primary-600 transition-colors duration-500">
        <Package className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-500" />
    </div>
)

const services = [
    {
        icon: AnimatedTruck,
        title: "Vận tải Đa phương thức",
        description: "Giải pháp vận chuyển hàng hóa linh hoạt, tối ưu chi phí với đội xe chuyên dụng hiện đại.",
        features: ["Đội xe 1-15 tấn", "Vận tải Bắc - Nam", "Hệ thống GPS 24/7"]
    },
    {
        icon: AnimatedClock,
        title: "Logistics Tốc hành",
        description: "Cam kết thời gian giao hàng chuẩn xác, quy trình vận hành tinh gọn cho doanh nghiệp.",
        features: ["Giao nhận 24h", "Xử lý đơn hàng nhanh", "Đúng hẹn 99.9%"]
    },
    {
        icon: AnimatedShield,
        title: "Bảo hiểm Rủi ro 100%",
        description: "An tâm tuyệt đối với gói bảo hiểm hàng hóa toàn diện, đền bù minh bạch và nhanh chóng.",
        features: ["Hợp đồng bảo hiểm", "Giám định chuyên nghiệp", "Bồi thường 1:1"]
    },
    {
        icon: AnimatedMapPin,
        title: "Mạng lưới Toàn quốc",
        description: "Hệ thống kho bãi và điểm trung chuyển trải dài khắp 63 tỉnh thành Việt Nam.",
        features: ["Phủ sóng 63 tỉnh", "Kho bãi hiện đại", "Kết nối liên vùng"]
    },
    {
        icon: AnimatedPhone,
        title: "Chăm sóc Chuyên biệt",
        description: "Đội ngũ chuyên viên hỗ trợ riêng biệt cho từng đối tác doanh nghiệp, sẵn sàng 24/7.",
        features: ["Quản lý tài khoản riêng", "Tư vấn giải pháp", "Hỗ trợ kỹ thuật"]
    },
    {
        icon: AnimatedPackage,
        title: "Đóng gói & Lưu kho",
        description: "Dịch vụ đóng gói tiêu chuẩn công nghiệp và lưu kho an toàn trong hệ thống kho chuẩn.",
        features: ["Đóng gói pallet", "Lưu kho ngắn/dài hạn", "Kiểm soát tồn kho"]
    }
]

export default function Services({ limit }: { limit?: number }) {
    const displayedServices = limit ? services.slice(0, limit) : services

    return (
        <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-x-0 top-0 h-40 bg-white/50"></div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary-50/50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full mb-6"
                    >
                        <Star className="w-4 h-4 text-primary-600 fill-primary-600" />
                        <span className="text-primary-700 text-xs font-black uppercase tracking-widest">Dịch vụ tiêu chuẩn quốc tế</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
                    >
                        Giải Pháp <span className="text-primary-600">Vận Tải Hoàn Hảo</span> <br />
                        Cho Mọi Doanh Nghiệp
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg text-slate-500 max-w-2xl mx-auto"
                    >
                        Chúng tôi không chỉ vận chuyển hàng hóa, chúng tôi xây dựng sự tin cậy thông qua những quy trình logistics hiện đại và chuyên nghiệp nhất.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {displayedServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-primary-100 enterprise-shadow transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50/20 rounded-full blur-2xl translate-x-16 -translate-y-16 group-hover:translate-x-8 transition-transform duration-700"></div>

                            <div className="relative z-10">
                                <service.icon />

                                <h3 className="text-xl font-black text-slate-900 mt-6 mb-4">{service.title}</h3>

                                <p className="text-slate-500 text-sm leading-relaxed mb-8 h-12 overflow-hidden">
                                    {service.description}
                                </p>

                                <ul className="space-y-3">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center text-xs font-bold text-slate-600">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 pt-6 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-primary-600 text-xs font-black uppercase tracking-widest cursor-pointer">
                                    Chi tiết dịch vụ <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Partnership Invitation Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] overflow-hidden bg-slate-900 border border-white/10"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.2),transparent_50%)]"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full">
                        <Image
                            src="/images/partnership_bg.png"
                            alt="Partnership"
                            fill
                            className="object-cover opacity-30 mix-blend-overlay"
                        />
                    </div>

                    <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                <span className="text-white text-[10px] font-black uppercase tracking-widest">Hỗ trợ đối tác mới</span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                                Đồng Hành Cùng <br /> Phái Triển Doanh Nghiệp
                            </h3>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Đăng ký trở thành đối tác chiến lược của 62 Dương Lê để nhận được ưu đãi vận chuyển linh hoạt và ưu tiên vận hành hàng đầu.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Link href="/#contact" className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-lg hover:bg-primary-50 transition-all shadow-xl">
                                    🤝 Đăng ký đối tác
                                </Link>
                                <Link href="tel:0931879070" className="px-10 py-5 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-2xl font-black text-lg hover:bg-white/20 transition-all">
                                    📞 Gọi 0931.879.070
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                            {[
                                { label: 'Doanh nghiệp', value: '500+' },
                                { label: 'Tỉnh thành', value: '63' },
                                { label: 'Xe vận tải', value: '100+' },
                                { label: 'An toàn hỏa tốc', value: '100%' },
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center backdrop-blur-sm">
                                    <div className="text-2xl font-black text-primary-400 tracking-tighter mb-1">{stat.value}</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
