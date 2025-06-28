'use client'

import { COMPANY_INFO } from '@/lib/company-metadata'
import { Facebook, MessageCircle, Phone, Youtube } from 'lucide-react'
import { useState } from 'react'

export default function SocialWidget() {
    const [isOpen, setIsOpen] = useState(false)

    const socialLinks = [
        {
            name: 'Facebook',
            icon: Facebook,
            url: COMPANY_INFO.social.facebook.url,
            bgColor: 'bg-blue-600 hover:bg-blue-700',
            hoverBgColor: 'hover:bg-blue-50'
        },
        {
            name: 'Zalo',
            icon: MessageCircle,
            url: COMPANY_INFO.messaging.zalo.url,
            bgColor: 'bg-blue-500 hover:bg-blue-600',
            hoverBgColor: 'hover:bg-blue-50'
        },
        {
            name: 'YouTube',
            icon: Youtube,
            url: COMPANY_INFO.social.youtube.url,
            bgColor: 'bg-red-600 hover:bg-red-700',
            hoverBgColor: 'hover:bg-red-50'
        },
        {
            name: 'Hotline',
            icon: Phone,
            url: `tel:${COMPANY_INFO.contact.phone.primary.replace(/\./g, '')}`,
            bgColor: 'bg-green-600 hover:bg-green-700',
            hoverBgColor: 'hover:bg-green-50'
        }
    ]

    return (
        <>
            {/* Social Widget */}
            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
                <div className="flex flex-col items-center space-y-2">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${social.bgColor} text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group`}
                            aria-label={social.name}
                        >
                            <social.icon className="w-5 h-5" />
                            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                {social.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Messenger Chat Plugin */}
            <div className="fixed bottom-4 left-4 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
                    aria-label="Chat với chúng tôi"
                >
                    <MessageCircle className="w-6 h-6" />
                </button>

                {isOpen && (
                    <div className="absolute bottom-16 left-0 bg-white rounded-lg shadow-xl p-4 w-80 border">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="font-semibold text-gray-800">Chat với chúng tôi</h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ×
                            </button>
                        </div>
                        <div className="space-y-2">
                            <a
                                href="https://m.me/vantaiduongle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-colors"
                            >
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                                    <MessageCircle className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm font-medium">Chat qua Messenger</span>
                            </a>
                            <a
                                href={COMPANY_INFO.messaging.zalo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-colors"
                            >
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                    <MessageCircle className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm font-medium">Chat qua Zalo</span>
                            </a>
                            <a
                                href={`tel:${COMPANY_INFO.contact.phone.primary.replace(/\./g, '')}`}
                                className="flex items-center p-2 rounded-lg hover:bg-green-50 transition-colors"
                            >
                                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                                    <Phone className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm font-medium">Gọi ngay: {COMPANY_INFO.contact.phone.primary}</span>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
