'use client'

import { COMPANY_INFO } from '@/lib/company-metadata'
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Truck, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <Truck className="w-8 h-8 text-blue-400 mr-3" />
                            <div>
                                <h3 className="text-2xl font-bold">{COMPANY_INFO.name.vi}</h3>
                                <p className="text-gray-400 text-sm">{COMPANY_INFO.slogan.vi}</p>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            {COMPANY_INFO.description.vi}
                        </p>
                        <div className="flex space-x-4">
                            <a href={COMPANY_INFO.social.facebook.url} target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href={COMPANY_INFO.social.instagram.url} target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href={COMPANY_INFO.social.youtube.url} target="_blank" rel="noopener noreferrer" className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors" aria-label="Youtube">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a href={COMPANY_INFO.messaging.zalo.url} target="_blank" rel="noopener noreferrer" className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600 transition-colors" aria-label="Zalo">
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Dịch vụ</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">
                                    Vận chuyển hàng hóa
                                </Link>
                            </li>
                            <li>
                                <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">
                                    Giao hàng nhanh
                                </Link>
                            </li>
                            <li>
                                <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">
                                    Vận chuyển xe lạnh
                                </Link>
                            </li>
                            <li>
                                <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">
                                    Vận chuyển hàng nguy hiểm
                                </Link>
                            </li>
                            <li>
                                <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">
                                    Đóng gói chuyên nghiệp
                                </Link>
                            </li>
                            <li>
                                <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">
                                    Bảo hiểm hàng hóa
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Liên kết nhanh</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
                                    Về chúng tôi
                                </Link>
                            </li>
                            <li>
                                <Link href="/#pricing" className="text-gray-300 hover:text-white transition-colors">
                                    Bảng giá dịch vụ
                                </Link>
                            </li>
                            <li>
                                <Link href="/#tracking" className="text-gray-300 hover:text-white transition-colors">
                                    Theo dõi đơn hàng
                                </Link>
                            </li>
                            <li>
                                <Link href="/#news" className="text-gray-300 hover:text-white transition-colors">
                                    Tin tức
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                                    Điều khoản sử dụng
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                                    Chính sách bảo mật
                                </Link>
                            </li>
                            <li>
                                <Link href="/site-map" className="text-gray-300 hover:text-white transition-colors">
                                    Sitemap
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Liên hệ</h4>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-300">Trụ sở chính:</p>
                                    <p className="text-white">{COMPANY_INFO.contact.address.full}</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                                <div>
                                    <p className="text-white font-semibold">{COMPANY_INFO.contact.phone.primary}</p>
                                    <p className="text-gray-300 text-sm">Hotline: {COMPANY_INFO.contact.phone.secondary}</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                                <div>
                                    <p className="text-white">{COMPANY_INFO.contact.email.primary}</p>
                                    <p className="text-gray-300 text-sm">Email hỗ trợ</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <MessageCircle className="w-5 h-5 text-blue-400 mr-3" />
                                <div>
                                    <p className="text-white">Zalo: {COMPANY_INFO.messaging.zalo.number}</p>
                                    <p className="text-gray-300 text-sm">Chat trực tuyến</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                            <h5 className="font-semibold text-blue-400 mb-2">Giờ làm việc</h5>
                            <p className="text-gray-300 text-sm">{COMPANY_INFO.workingHours.vi.weekdays}</p>
                            <p className="text-gray-300 text-sm">{COMPANY_INFO.workingHours.vi.note}</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            <p>{COMPANY_INFO.legal.copyright.vi}</p>
                        </div>
                        <div className="flex flex-wrap gap-6 text-sm">
                            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                                Điều khoản sử dụng
                            </Link>
                            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                                Chính sách bảo mật
                            </Link>
                            <Link href="/site-map" className="text-gray-400 hover:text-white transition-colors">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
