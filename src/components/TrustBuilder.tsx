'use client'

import { motion } from 'framer-motion'
import {
    Award,
    CheckCircle,
    MessageSquare,
    Phone,
    Shield,
    Star,
    TrendingUp,
    Truck,
    Users
} from 'lucide-react'

const testimonials = [
    {
        name: "Anh Minh Tuấn",
        company: "Công ty TNHH ABC",
        role: "Giám đốc kinh doanh",
        content: "Sau 3 năm hợp tác, tôi có thể khẳng định đây là đối tác vận chuyển đáng tin cậy nhất. Họ không chỉ giao hàng đúng hẹn mà còn tư vấn tối ưu chi phí logistics cho công ty chúng tôi.",
        duration: "3 năm hợp tác",
        savings: "Tiết kiệm 30% chi phí",
        rating: 5,
        image: "/api/placeholder/80/80"
    },
    {
        name: "Chị Thu Hằng",
        company: "XYZ Distribution",
        role: "Trưởng phòng vận hành",
        content: "Từ khi hợp tác với họ, công việc vận chuyển của chúng tôi trở nên nhẹ nhàng hơn rất nhiều. Account Manager luôn proactive, theo dõi từng lô hàng một cách chi tiết.",
        duration: "2 năm hợp tác",
        savings: "Giảm 40% thời gian xử lý",
        rating: 5,
        image: "/api/placeholder/80/80"
    },
    {
        name: "Anh Đức Anh",
        company: "DEF Logistics",
        role: "Phó giám đốc",
        content: "Tôi đã thử nhiều đơn vị vận chuyển khác nhưng không ai có thể sánh bằng sự chuyên nghiệp của họ. Đặc biệt ấn tượng với hệ thống tracking real-time và báo cáo chi tiết.",
        duration: "5 năm hợp tác",
        savings: "ROI tăng 25%",
        rating: 5,
        image: "/api/placeholder/80/80"
    }
]

const caseStudies = [
    {
        title: "Dự án vận chuyển thiết bị y tế",
        client: "Bệnh viện Đa khoa Quốc tế",
        challenge: "Vận chuyển thiết bị y tế đắt tiền, cần độ chính xác cao và bảo hiểm đặc biệt",
        solution: "Sử dụng xe chuyên dụng, bảo hiểm 200%, theo dõi GPS real-time, nhân viên được đào tạo chuyên biệt",
        result: "100% thiết bị được giao nguyên vẹn, tiết kiệm 20% thời gian so với dự kiến",
        metrics: [
            { label: "Thiết bị vận chuyển", value: "150+ máy móc" },
            { label: "Giá trị đơn hàng", value: "15 tỷ VNĐ" },
            { label: "Thời gian hoàn thành", value: "2 tuần" },
            { label: "Tỷ lệ thành công", value: "100%" }
        ],
        icon: Shield,
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "Hợp tác với chuỗi siêu thị lớn",
        client: "Chuỗi siêu thị XYZ",
        challenge: "Vận chuyển hàng hóa đến 50+ cửa hàng mỗi ngày, yêu cầu đúng giờ 100%",
        solution: "Xây dựng hệ thống phân phối hub & spoke, tối ưu tuyến đường, đội xe chuyên dụng",
        result: "Tăng hiệu quả 35%, giảm chi phí 25%, đánh giá hài lòng 99.8%",
        metrics: [
            { label: "Số cửa hàng phục vụ", value: "50+ địa điểm" },
            { label: "Đơn hàng/ngày", value: "200+ chuyến" },
            { label: "Tỷ lệ đúng hẹn", value: "99.8%" },
            { label: "Tiết kiệm chi phí", value: "25%" }
        ],
        icon: TrendingUp,
        color: "from-blue-500 to-cyan-500"
    }
]

const trustFactors = [
    {
        icon: Shield,
        title: "Bảo hiểm toàn diện",
        description: "Bảo hiểm 100% giá trị hàng hóa với các công ty bảo hiểm uy tín",
        details: ["Bảo Việt", "Bảo Minh", "PJICO"],
        color: "text-green-600"
    },
    {
        icon: Award,
        title: "Chứng nhận chất lượng",
        description: "Đạt các tiêu chuẩn quốc tế về logistics và vận tải",
        details: ["ISO 9001:2015", "GDP", "HACCP"],
        color: "text-blue-600"
    },
    {
        icon: Users,
        title: "Đội ngũ chuyên nghiệp",
        description: "100% nhân viên được đào tạo bài bản và có kinh nghiệm",
        details: ["15+ năm kinh nghiệm", "Đào tạo thường xuyên", "Chứng chỉ nghề nghiệp"],
        color: "text-purple-600"
    },
    {
        icon: Truck,
        title: "Đội xe hiện đại",
        description: "Xe tải từ 1-10 tấn, GPS tracking, bảo dưỡng định kỳ",
        details: ["200+ xe các loại", "GPS real-time", "Bảo dưỡng định kỳ"],
        color: "text-orange-600"
    }
]

export default function TrustBuilder() {

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-xl mr-4">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                            Tại sao chọn chúng tôi?
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Uy tín được xây dựng qua từng chuyến hàng, niềm tin được khẳng định qua từng đối tác
                    </p>
                </motion.div>

                {/* Trust Factors */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {trustFactors.map((factor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group"
                        >
                            <factor.icon className={`w-12 h-12 ${factor.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{factor.title}</h3>
                            <p className="text-gray-600 mb-4 text-sm">{factor.description}</p>
                            <ul className="space-y-1">
                                {factor.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-center text-xs text-gray-500">
                                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Customer Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Khách hàng nói gì về chúng tôi
                    </h3>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                {/* Content */}
                                <blockquote className="text-gray-700 mb-6 italic">
                                    &ldquo;{testimonial.content}&rdquo;
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                        {testimonial.name.charAt(testimonial.name.indexOf(' ') + 1)}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                                        <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                                    </div>
                                </div>

                                {/* Metrics */}
                                <div className="pt-4 border-t border-gray-100">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-green-600 font-medium">{testimonial.duration}</span>
                                        <span className="text-orange-600 font-medium">{testimonial.savings}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Case Studies */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Câu chuyện thành công
                    </h3>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                {/* Header */}
                                <div className="flex items-start mb-6">
                                    <div className={`bg-gradient-to-r ${study.color} p-3 rounded-xl mr-4 flex-shrink-0`}>
                                        <study.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-1">{study.title}</h4>
                                        <p className="text-blue-600 font-medium">{study.client}</p>
                                    </div>
                                </div>

                                {/* Challenge */}
                                <div className="mb-4">
                                    <h5 className="font-semibold text-gray-900 mb-2">Thách thức:</h5>
                                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                                </div>

                                {/* Solution */}
                                <div className="mb-4">
                                    <h5 className="font-semibold text-gray-900 mb-2">Giải pháp:</h5>
                                    <p className="text-gray-600 text-sm">{study.solution}</p>
                                </div>

                                {/* Result */}
                                <div className="mb-6">
                                    <h5 className="font-semibold text-gray-900 mb-2">Kết quả:</h5>
                                    <p className="text-green-600 text-sm font-medium">{study.result}</p>
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                                    {study.metrics.map((metric, idx) => (
                                        <div key={idx} className="text-center">
                                            <div className="text-lg font-bold text-blue-600">{metric.value}</div>
                                            <div className="text-xs text-gray-500">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                Bạn muốn trở thành câu chuyện thành công tiếp theo?
                            </h3>

                            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                                Hãy để chúng tôi tư vấn miễn phí và thiết kế giải pháp vận chuyển tối ưu cho doanh nghiệp của bạn
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <motion.button
                                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    Gọi tư vấn miễn phí
                                </motion.button>

                                <motion.button
                                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <MessageSquare className="w-5 h-5 mr-2" />
                                    Chat với chuyên gia
                                </motion.button>
                            </div>

                            <div className="text-sm text-blue-100">
                                <span className="font-semibold">Cam kết:</span> Tư vấn miễn phí • Báo giá trong 30 phút • Không phí ẩn
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
