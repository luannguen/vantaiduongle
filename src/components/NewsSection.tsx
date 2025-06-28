'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, Eye, Tag, TrendingUp, User } from 'lucide-react'
import Image from 'next/image'

const newsArticles = [
    {
        id: 1,
        title: "Xu hướng vận tải xanh và bền vững trong năm 2024",
        excerpt: "Ngành vận tải đang chuyển mình mạnh mẽ với các giải pháp thân thiện môi trường, từ xe điện đến tối ưu hóa tuyến đường...",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
        date: "28/12/2024",
        views: 1250,
        readTime: "5 phút đọc",
        category: "Xu hướng",
        categoryColor: "from-green-500 to-emerald-600",
        author: "Nguyễn Minh An"
    },
    {
        id: 2,
        title: "5 lợi ích khi sử dụng dịch vụ vận tải chuyên nghiệp",
        excerpt: "Việc lựa chọn dịch vụ vận tải chuyên nghiệp sẽ mang lại nhiều lợi ích thiết thực cho doanh nghiệp của bạn...",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
        date: "25/12/2024",
        views: 890,
        readTime: "3 phút đọc",
        category: "Hướng dẫn",
        categoryColor: "from-blue-500 to-indigo-600",
        author: "Trần Văn Hùng"
    },
    {
        id: 3,
        title: "Vận Tải Dương Lê mở rộng mạng lưới ra miền Nam",
        excerpt: "Chúng tôi vừa khai trương chi nhánh mới tại TP.HCM để phục vụ khách hàng tốt hơn với dịch vụ chất lượng cao...",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
        date: "20/12/2024",
        views: 2100,
        readTime: "4 phút đọc",
        category: "Tin tức",
        categoryColor: "from-orange-500 to-red-600",
        author: "Lê Thị Mai"
    }
]

export default function NewsSection() {
    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 120,
                damping: 20
            }
        }
    }

    return (
        <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-32 right-32 w-72 h-72 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-32 left-32 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-yellow-200/20 rounded-full blur-3xl" />
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
                        <TrendingUp className="w-4 h-4 text-orange-600 mr-2" />
                        <span className="text-sm font-semibold text-orange-800">Cập nhật liên tục</span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Tin tức & Cập nhật
                    </motion.h2>

                    <motion.p
                        className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Cập nhật những thông tin mới nhất về ngành vận tải và hoạt động của chúng tôi
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {newsArticles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            variants={cardVariants}
                            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover-lift group overflow-hidden border border-orange-100/50 relative"
                            whileHover={{
                                y: -12,
                                scale: 1.03,
                                transition: { type: "spring", stiffness: 300, damping: 20 }
                            }}
                        >
                            {/* Featured badge for popular articles */}
                            {article.views > 1500 && (
                                <div className="absolute top-4 left-4 z-20">
                                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                        🔥 HOT
                                    </div>
                                </div>
                            )}

                            <div className="relative h-56 overflow-hidden">
                                <motion.div
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ duration: 0.6 }}
                                    className="h-full"
                                >
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </motion.div>

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Category badge */}
                                <motion.div
                                    className="absolute top-4 right-4 z-10"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={`bg-gradient-to-r ${article.categoryColor} text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg backdrop-blur-sm`}>
                                        <Tag className="w-3 h-3 mr-1 inline" />
                                        {article.category}
                                    </div>
                                </motion.div>

                                {/* Reading indicator */}
                                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <motion.div
                                        className="bg-white/20 backdrop-blur-md rounded-xl px-3 py-2 text-white text-sm font-medium border border-white/30"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Clock className="w-4 h-4 mr-2 inline" />
                                        {article.readTime}
                                    </motion.div>
                                </div>
                            </div>

                            <div className="p-6">
                                {/* Article metadata */}
                                <div className="flex items-center justify-between text-sm text-slate-500 mb-3">
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        <span>{article.date}</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="flex items-center">
                                            <Eye className="w-4 h-4 mr-1" />
                                            <span>{article.views.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <User className="w-4 h-4 mr-1" />
                                            <span className="text-orange-600">{article.author}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                                    {article.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                                    {article.excerpt}
                                </p>

                                {/* Read More Button */}
                                <motion.button
                                    className="group/btn w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 font-semibold text-sm flex items-center justify-center shadow-lg relative overflow-hidden"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />

                                    <span className="relative z-10">Đọc thêm</span>
                                    <motion.div
                                        animate={{ x: [0, 3, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="relative z-10"
                                    >
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </motion.div>
                                </motion.button>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Newsletter Subscription */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-2xl p-8 text-white text-center relative overflow-hidden hover-lift shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                >
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />

                    <div className="relative z-10">
                        <motion.div
                            className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span className="font-semibold">Newsletter</span>
                        </motion.div>

                        <h3 className="text-3xl font-bold mb-4">
                            Đăng ký nhận tin tức mới nhất
                        </h3>
                        <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                            Nhận thông tin về khuyến mãi, cập nhật dịch vụ và xu hướng ngành vận tải
                        </p>

                        <motion.form
                            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <motion.input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="flex-1 px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                                whileFocus={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                            <motion.button
                                type="submit"
                                className="bg-white text-orange-600 px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors font-semibold shadow-lg relative overflow-hidden group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                <span className="relative z-10">Đăng ký</span>
                            </motion.button>
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
