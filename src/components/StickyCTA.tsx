'use client'

import { motion } from 'framer-motion'
import { Calculator, MessageCircle, Phone } from 'lucide-react'

export default function StickyCTA() {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 p-4 z-40 lg:hidden"
        >
            <div className="flex justify-center gap-3 max-w-sm mx-auto">
                <motion.button
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Phone className="w-4 h-4 mr-2" />
                    Gọi ngay
                </motion.button>

                <motion.button
                    className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Calculator className="w-4 h-4 mr-2" />
                    Tính giá
                </motion.button>

                <motion.button
                    className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat
                </motion.button>
            </div>
        </motion.div>
    )
}
