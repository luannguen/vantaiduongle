'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Eye, MessageCircle } from 'lucide-react'

const newsArticles = [
    {
        id: 1,
        title: 'Quy định mới về vận tải hàng hóa năm 2024',
        excerpt: 'Cập nhật những thay đổi quan trọng trong quy định vận tải hàng hóa để đảm bảo tuân thủ pháp luật và tối ưu hóa quy trình.',
        image: '/api/placeholder/400/250',
        date: '20/12/2024',
        category: 'Quy định',
        views: 1254,
        comments: 18,
        readTime: '5 phút đọc'
    },
    {
        id: 2,
        title: 'Xu hướng logistics thông minh trong vận tải',
        excerpt: 'Khám phá cách công nghệ AI và IoT đang cách mạng hóa ngành vận tải, giúp tối ưu chi phí và nâng cao chất lượng dịch vụ.',
        image: '/api/placeholder/400/250',
        date: '18/12/2024',
        category: 'Công nghệ',
        views: 892,
        comments: 12,
        readTime: '7 phút đọc'
    },
    {
        id: 3,
        title: 'Bí quyết đóng gói hàng hóa an toàn',
        excerpt: 'Hướng dẫn chi tiết cách đóng gói các loại hàng hóa khác nhau để đảm bảo an toàn trong quá trình vận chuyển.',
        image: '/api/placeholder/400/250',
        date: '15/12/2024',
        category: 'Hướng dẫn',
        views: 2156,
        comments: 34,
        readTime: '4 phút đọc'
    },
    {
        id: 4,
        title: 'Chương trình khuyến mãi cuối năm 2024',
        excerpt: 'Ưu đãi đặc biệt dành cho khách hàng thân thiết với mức giảm giá lên đến 20% cho các tuyến đường phổ biến.',
        image: '/api/placeholder/400/250',
        date: '12/12/2024',
        category: 'Khuyến mãi',
        views: 3421,
        comments: 67,
        readTime: '3 phút đọc'
    }
]

const categories = [
    { name: 'Tất cả', count: 24, active: true },
    { name: 'Quy định', count: 8, active: false },
    { name: 'Công nghệ', count: 6, active: false },
    { name: 'Hướng dẫn', count: 7, active: false },
    { name: 'Khuyến mãi', count: 3, active: false }
]

export default function News() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Tin tức & Khuyến mãi
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Cập nhật thông tin mới nhất về dịch vụ vận tải và các ưu đãi hấp dẫn
                    </p>
                </motion.div>

                {/* Categories Filter */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={category.name}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${category.active
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            {category.name}
                            <span className="ml-2 text-xs opacity-75">({category.count})</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {newsArticles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            className="bg-white rounded-2xl shadow-lg shadow-blue-500/10 overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-48">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-semibold rounded-full">
                                        {article.category}
                                    </span>
                                </div>

                                {/* Read Time */}
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="px-3 py-1 bg-black/20 backdrop-blur-sm text-white text-xs rounded-full">
                                        {article.readTime}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Date */}
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {article.date}
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                                    {article.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                {/* Stats */}
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center">
                                            <Eye className="w-4 h-4 mr-1" />
                                            {article.views.toLocaleString()}
                                        </div>
                                        <div className="flex items-center">
                                            <MessageCircle className="w-4 h-4 mr-1" />
                                            {article.comments}
                                        </div>
                                    </div>
                                </div>

                                {/* Read More Button */}
                                <motion.button
                                    className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group/btn"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Đọc thêm
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </motion.button>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Load More Button */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.button
                        className="btn-primary inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Xem thêm bài viết
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>

                {/* Newsletter Signup */}
                <motion.div
                    className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold mb-4">
                        Đăng ký nhận tin tức mới nhất
                    </h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Nhận thông báo về các chương trình khuyến mãi, cập nhật dịch vụ và tin tức ngành vận tải
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Nhập email của bạn"
                            className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
                        />
                        <motion.button
                            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Đăng ký
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
