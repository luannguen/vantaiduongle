'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'

const faqs = [
    {
        id: 1,
        question: "Vận Tải 62 Dương Lê có những loại xe nào?",
        answer: "Chúng tôi có đầy đủ các loại xe từ 1 tấn đến 10 tấn, bao gồm xe tải thường, xe tải mui bạt, xe tải thùng kín, xe chuyên dụng vận chuyển hàng lạnh và hàng đặc biệt."
    },
    {
        id: 2,
        question: "Thời gian vận chuyển từ Hà Nội đến TP.HCM là bao lâu?",
        answer: "Thời gian vận chuyển tiêu chuẩn từ Hà Nội đến TP.HCM là 2-3 ngày làm việc. Chúng tôi cũng có dịch vụ express 24-48h với chi phí cao hơn."
    },
    {
        id: 3,
        question: "Làm thế nào để tính phí vận chuyển?",
        answer: "Phí vận chuyển được tính dựa trên trọng lượng, thể tích, khoảng cách và loại hàng hóa. Bạn có thể sử dụng form báo giá trên website hoặc liên hệ hotline để được tư vấn chi tiết."
    },
    {
        id: 4,
        question: "Có bảo hiểm hàng hóa trong quá trình vận chuyển không?",
        answer: "Có, tất cả hàng hóa đều được bảo hiểm 100% giá trị. Chúng tôi cam kết bồi thường nếu có hư hỏng hoặc mất mát trong quá trình vận chuyển."
    },
    {
        id: 5,
        question: "Có thể theo dõi hàng hóa real-time không?",
        answer: "Có, khách hàng có thể theo dõi hành trình vận chuyển real-time thông qua mã đơn hàng trên website hoặc ứng dụng di động của chúng tôi."
    },
    {
        id: 6,
        question: "Có nhận vận chuyển hàng nguy hiểm không?",
        answer: "Chúng tôi nhận vận chuyển một số loại hàng nguy hiểm theo quy định của pháp luật. Vui lòng liên hệ trước để được tư vấn về thủ tục và yêu cầu đặc biệt."
    },
    {
        id: 7,
        question: "Thời gian làm việc của Vận Tải 62 Dương Lê?",
        answer: "Chúng tôi làm việc 24/7 để phục vụ khách hàng. Hotline hỗ trợ hoạt động 24h, đặt hàng và thu gom có thể thực hiện vào cuối tuần và ngày lễ."
    },
    {
        id: 8,
        question: "Có hỗ trợ đóng gói hàng hóa không?",
        answer: "Có, chúng tôi cung cấp dịch vụ đóng gói chuyên nghiệp cho các loại hàng hóa đặc biệt như hàng dễ vỡ, điện tử, và hàng có giá trị cao."
    }
]

export default function FAQ() {
    const [openItems, setOpenItems] = useState<number[]>([])
    const [showFAQ, setShowFAQ] = useState(false)

    const toggleItem = (id: number) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        )
    }

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center mb-6">
                        <motion.div
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="bg-blue-100 p-4 rounded-full mr-4"
                        >
                            <HelpCircle className="w-8 h-8 text-blue-600" />
                        </motion.div>
                        <h2 className="text-4xl font-bold text-gray-900">
                            Câu hỏi thường gặp
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Tìm hiểu thêm về dịch vụ vận tải của chúng tôi qua những câu hỏi phổ biến nhất
                    </p>

                    {/* Show/Hide FAQ Button */}
                    <motion.button
                        onClick={() => setShowFAQ(!showFAQ)}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <HelpCircle className="w-5 h-5" />
                        {showFAQ ? 'Ẩn câu hỏi thường gặp' : 'Xem câu hỏi thường gặp'}
                        <motion.div
                            animate={{ rotate: showFAQ ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown className="w-5 h-5" />
                        </motion.div>
                    </motion.button>
                </motion.div>

                <AnimatePresence>
                    {showFAQ && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: -20 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                className="space-y-4 mb-16"
                            >
                                {faqs.map((faq) => (
                                    <motion.div
                                        key={faq.id}
                                        variants={fadeInUp}
                                        className="bg-white rounded-xl shadow-lg hover-lift overflow-hidden"
                                        whileHover={{ scale: 1.01 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <motion.button
                                            onClick={() => toggleItem(faq.id)}
                                            className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <span className="text-lg font-semibold text-gray-900 pr-4">
                                                {faq.question}
                                            </span>
                                            <motion.div
                                                animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="flex-shrink-0"
                                            >
                                                <ChevronDown className="w-6 h-6 text-blue-600" />
                                            </motion.div>
                                        </motion.button>

                                        <AnimatePresence>
                                            {openItems.includes(faq.id) && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <motion.div
                                                        initial={{ y: -10 }}
                                                        animate={{ y: 0 }}
                                                        exit={{ y: -10 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="px-8 pb-6 border-t border-gray-100"
                                                    >
                                                        <div className="pt-4">
                                                            <p className="text-gray-700 leading-relaxed">
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            Vẫn có câu hỏi khác?
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Đội ngũ tư vấn chuyên nghiệp của chúng tôi sẵn sàng hỗ trợ bạn 24/7
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Gọi hotline: 0912 345 678
                            </motion.button>
                            <motion.button
                                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Chat trực tuyến
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
