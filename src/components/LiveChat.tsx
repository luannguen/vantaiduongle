'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Mail, MessageCircle, Phone, Send, X } from 'lucide-react'
import { useState } from 'react'

export default function LiveChat() {
    const [isOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState('')

    const quickReplies = [
        "Tôi muốn báo giá vận chuyển",
        "Thời gian vận chuyển là bao lâu?",
        "Có bảo hiểm hàng hóa không?",
        "Tôi cần hỗ trợ khác"
    ]

    const handleSendMessage = (text: string) => {
        // Simulate sending message
        console.log('Sending message:', text)
        if (text === message) {
            setMessage('')
        }
    }

    return (
        <>
            {/* Chat Toggle Button */}
            <motion.div
                className="fixed bottom-24 right-6 z-50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2, type: "spring", stiffness: 300 }}
            >
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={!isOpen ? {
                        boxShadow: [
                            "0 0 0 0 rgba(59, 130, 246, 0.7)",
                            "0 0 0 20px rgba(59, 130, 246, 0)",
                        ]
                    } : {}}
                    transition={!isOpen ? { duration: 2, repeat: Infinity } : {}}
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="w-6 h-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="chat"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="relative"
                            >
                                <MessageCircle className="w-6 h-6" />
                                {/* Notification dot */}
                                <motion.div
                                    className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>

                {/* Tooltip */}
                <AnimatePresence>
                    {!isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.8 }}
                            transition={{ delay: 3 }}
                            className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap"
                        >
                            Hỗ trợ trực tuyến 24/7
                            <div className="absolute top-1/2 left-full transform -translate-y-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-l-gray-800"></div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 100 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 100 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-44 right-20 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Hỗ trợ trực tuyến</h3>
                                    <p className="text-blue-100 text-sm">
                                        <span className="w-2 h-2 bg-green-400 rounded-full inline-block mr-1"></span>
                                        Đang trực tuyến
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="p-4 h-48 overflow-y-auto bg-gray-50">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white p-3 rounded-lg shadow-sm mb-3"
                            >
                                <p className="text-sm text-gray-700">
                                    Xin chào! Tôi có thể hỗ trợ gì cho bạn về dịch vụ vận tải?
                                </p>
                                <span className="text-xs text-gray-500 mt-1 block">
                                    Nhân viên hỗ trợ • Vừa xong
                                </span>
                            </motion.div>

                            {/* Quick Actions */}
                            <div className="space-y-2 mt-4">
                                <p className="text-xs text-gray-500 mb-2">Hoặc chọn nhanh:</p>
                                {quickReplies.map((reply, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => handleSendMessage(reply)}
                                        className="w-full text-left p-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-sm text-blue-700 transition-colors duration-200"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                    >
                                        {reply}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Contact Options */}
                        <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
                            <div className="flex gap-2">
                                <motion.button
                                    className="flex-1 flex items-center justify-center p-2 bg-green-500 text-white rounded-lg text-sm font-medium"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Phone className="w-4 h-4 mr-1" />
                                    Gọi
                                </motion.button>
                                <motion.button
                                    className="flex-1 flex items-center justify-center p-2 bg-blue-500 text-white rounded-lg text-sm font-medium"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Mail className="w-4 h-4 mr-1" />
                                    Email
                                </motion.button>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white border-t border-gray-200">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Nhập tin nhắn..."
                                    className="flex-1 p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSendMessage(message)
                                        }
                                    }}
                                />
                                <motion.button
                                    onClick={() => handleSendMessage(message)}
                                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={!message.trim()}
                                >
                                    <Send className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
