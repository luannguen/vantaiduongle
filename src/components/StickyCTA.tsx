'use client'

import { COMPANY_INFO } from '@/lib/company-metadata'
import { motion } from 'framer-motion'
import { Calculator, MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'

export default function StickyCTA() {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 p-4 z-40 lg:hidden"
        >
            <div className="flex justify-center gap-3 max-w-sm mx-auto">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                >
                    <Link
                        href={`tel:${COMPANY_INFO.contact.phone.primary.replace(/\./g, '')}`}
                        className="w-full bg-green-600 text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center shadow-lg block"
                    >
                        <Phone className="w-4 h-4 mr-2" />
                        Gọi ngay
                    </Link>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                >
                    <Link
                        href="/#pricing"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center shadow-lg block"
                    >
                        <Calculator className="w-4 h-4 mr-2" />
                        Tính giá
                    </Link>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                >
                    <Link
                        href={COMPANY_INFO.messaging.zalo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-purple-600 text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center shadow-lg block"
                    >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Chat
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    )
}
