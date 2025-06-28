'use client'

import { motion } from 'framer-motion'
import { Play, Quote, Star, Users } from 'lucide-react'
import { useState } from 'react'

const videoTestimonials = [
    {
        id: 1,
        name: "Ông Nguyễn Minh Tuấn",
        position: "Tổng Giám Đốc",
        company: "Công ty TNHH ABC Distribution",
        industry: "Phân phối FMCG",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
        duration: "2:45",
        quote: "Sau 3 năm hợp tác, Vận Tải Dương Lê đã giúp chúng tôi tiết kiệm 30% chi phí logistics và tăng hiệu quả giao hàng lên 95%.",
        metrics: {
            costSaving: "30%",
            efficiency: "95%",
            partnership: "3 năm"
        },
        rating: 5
    },
    {
        id: 2,
        name: "Bà Trần Thu Hằng",
        position: "Giám Đốc Vận Hành",
        company: "XYZ Electronics Corp",
        industry: "Điện tử & Công nghệ",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b2fd?w=400&h=300&fit=crop&crop=face",
        duration: "3:12",
        quote: "Đội ngũ chuyên nghiệp, hệ thống tracking real-time và dịch vụ khách hàng 24/7 thực sự ấn tượng. Chúng tôi đã mở rộng được thị trường nhờ sự hỗ trợ của họ.",
        metrics: {
            marketExpansion: "5 tỉnh mới",
            delivery: "99.8%",
            partnership: "2 năm"
        },
        rating: 5
    },
    {
        id: 3,
        name: "Ông Lê Đức Anh",
        position: "Phó Tổng Giám Đốc",
        company: "DEF Manufacturing",
        industry: "Sản xuất & Chế tạo",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
        duration: "4:20",
        quote: "Với quy mô sản xuất lớn, chúng tôi cần đối tác logistics đáng tin cậy. Vận Tải Dương Lê không chỉ đáp ứng mà còn vượt xa mong đợi của chúng tôi.",
        metrics: {
            volume: "500+ chuyến/tháng",
            onTime: "99.5%",
            partnership: "4 năm"
        },
        rating: 5
    }
]

const additionalTestimonials = [
    {
        name: "Ông Hoàng Văn Nam",
        position: "CEO",
        company: "GHI Retail Chain",
        quote: "Hệ thống phân phối của Dương Lê giúp chúng tôi vận hành chuỗi cửa hàng hiệu quả hơn 40%.",
        rating: 5,
        avatar: "/images/testimonials/ceo-ghi.jpg"
    },
    {
        name: "Bà Phạm Thị Lan",
        position: "Giám Đốc Logistics",
        company: "JKL Import-Export",
        quote: "Dịch vụ xuất sắc, chi phí hợp lý. Đây là đối tác không thể thiếu trong chuỗi cung ứng của chúng tôi.",
        rating: 5,
        avatar: "/images/testimonials/ceo-jkl.jpg"
    }
]

export default function VideoTestimonials() {
    const [activeVideo, setActiveVideo] = useState<number | null>(null)

    const playVideo = (videoId: number) => {
        setActiveVideo(videoId)
    }

    const closeVideo = () => {
        setActiveVideo(null)
    }

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
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
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl mr-4">
                            <Play className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Lãnh Đạo Doanh Nghiệp Chia Sẻ
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Nghe trực tiếp từ các CEO và Giám Đốc về trải nghiệm hợp tác
                        và những thành công đạt được cùng Vận Tải Dương Lê
                    </p>
                </motion.div>

                {/* Video Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {videoTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover-lift">
                                {/* Video Thumbnail */}
                                <div className="relative">
                                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                                        {/* Placeholder for video thumbnail */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-80"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.button
                                                onClick={() => playVideo(testimonial.id)}
                                                className="bg-white bg-opacity-90 rounded-full p-6 shadow-lg hover:bg-opacity-100 transition-all duration-300 group-hover:scale-110"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Play className="w-8 h-8 text-blue-600 ml-1" />
                                            </motion.button>
                                        </div>

                                        {/* Duration Badge */}
                                        <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-lg text-sm font-medium">
                                            {testimonial.duration}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Quote */}
                                    <div className="mb-4">
                                        <Quote className="w-6 h-6 text-blue-500 mb-2" />
                                        <p className="text-gray-700 italic leading-relaxed">
                                            &ldquo;{testimonial.quote}&rdquo;
                                        </p>
                                    </div>

                                    {/* Person Info */}
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-600">{testimonial.position}</p>
                                            <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                                        </div>
                                    </div>

                                    {/* Metrics */}
                                    <div className="border-t pt-4">
                                        <div className="grid grid-cols-2 gap-4 text-center">
                                            {Object.entries(testimonial.metrics).map(([key, value], idx) => (
                                                <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-3">
                                                    <div className="text-2xl font-bold text-blue-600">{value}</div>
                                                    <div className="text-xs text-gray-600 capitalize">
                                                        {key === 'costSaving' ? 'Tiết kiệm' :
                                                            key === 'efficiency' ? 'Hiệu quả' :
                                                                key === 'partnership' ? 'Hợp tác' :
                                                                    key === 'marketExpansion' ? 'Mở rộng' :
                                                                        key === 'delivery' ? 'Giao hàng' :
                                                                            key === 'volume' ? 'Khối lượng' :
                                                                                key === 'onTime' ? 'Đúng hẹn' : key}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center justify-center mt-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Text Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 shadow-xl"
                >
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                        Thêm Nhiều Lãnh Đạo Tin Tưởng
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {additionalTestimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-100"
                            >
                                <Quote className="w-6 h-6 text-blue-500 mb-3" />
                                <p className="text-gray-700 italic mb-4 leading-relaxed">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 text-sm">{testimonial.name}</h5>
                                            <p className="text-xs text-gray-600">{testimonial.position}</p>
                                            <p className="text-xs text-blue-600 font-medium">{testimonial.company}</p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center"
                >
                    <h3 className="text-3xl font-bold mb-6">
                        🎯 Được Tin Tưởng Bởi Các Lãnh Đạo Hàng Đầu
                    </h3>

                    <div className="grid md:grid-cols-4 gap-6">
                        <div>
                            <div className="text-4xl font-bold mb-2">500+</div>
                            <div className="text-blue-100">CEO/Giám Đốc</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">15+</div>
                            <div className="text-blue-100">Ngành Nghề</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">4.9/5</div>
                            <div className="text-blue-100">Đánh Giá Trung Bình</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">95%+</div>
                            <div className="text-blue-100">Tỷ Lệ Hài Lòng</div>
                        </div>
                    </div>

                    <motion.button
                        className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Users className="w-5 h-5 inline mr-2" />
                        Trở Thành Đối Tác Tiếp Theo
                    </motion.button>
                </motion.div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={closeVideo}
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        className="bg-white rounded-xl overflow-hidden max-w-4xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="aspect-video">
                            <iframe
                                src={videoTestimonials.find(v => v.id === activeVideo)?.videoUrl}
                                className="w-full h-full"
                                allowFullScreen
                                title="Video Testimonial"
                            />
                        </div>

                        <div className="p-6">
                            {(() => {
                                const testimonial = videoTestimonials.find(v => v.id === activeVideo)!
                                return (
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {testimonial.name} - {testimonial.position}
                                        </h3>
                                        <p className="text-blue-600 font-medium mb-4">{testimonial.company}</p>
                                        <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                                    </div>
                                )
                            })()}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    )
}
