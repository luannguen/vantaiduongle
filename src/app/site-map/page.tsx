import { COMPANY_INFO } from '@/lib/company-metadata';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: `Site Map - ${COMPANY_INFO.name.vi}`,
    description: 'Bản đồ trang web với tất cả các liên kết và trang quan trọng của website vận tải.',
};

export default function SiteMapPage() {
    const sections = [
        {
            title: 'Trang chính',
            links: [
                { name: 'Trang chủ', href: '/' },
                { name: 'Về chúng tôi', href: '/#about' },
                { name: 'Dịch vụ', href: '/#services' },
                { name: 'Loại xe', href: '/#trucks' },
                { name: 'Liên hệ', href: '/#contact' },
            ]
        },
        {
            title: 'Dịch vụ vận tải',
            links: [
                { name: 'Vận chuyển hàng hóa', href: '/#services' },
                { name: 'Giao hàng nhanh', href: '/#services' },
                { name: 'Vận chuyển xe lạnh', href: '/#services' },
                { name: 'Chuyển phát nhanh', href: '/#services' },
                { name: 'Bảo hiểm hàng hóa', href: '/#services' },
            ]
        },
        {
            title: 'Thông tin hữu ích',
            links: [
                { name: 'Bảng giá dịch vụ', href: '/#pricing' },
                { name: 'Hướng dẫn đặt xe', href: '/#services' },
                { name: 'Câu hỏi thường gặp', href: '/#contact' },
                { name: 'Tin tức', href: '/#news' },
                { name: 'Tuyển dụng', href: '/#contact' },
            ]
        },
        {
            title: 'Hỗ trợ khách hàng',
            links: [
                { name: 'Liên hệ hỗ trợ', href: '/#contact' },
                { name: 'Theo dõi đơn hàng', href: '/#tracking' },
                { name: 'Khiếu nại', href: '/#contact' },
                { name: 'Đánh giá dịch vụ', href: '/#contact' },
            ]
        },
        {
            title: 'Pháp lý',
            links: [
                { name: 'Điều khoản sử dụng', href: '/terms-of-service' },
                { name: 'Chính sách bảo mật', href: '/privacy-policy' },
                { name: 'Chính sách hoàn trả', href: '#' },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Site Map - Bản đồ trang web
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Tìm kiếm nhanh tất cả các trang và dịch vụ của {COMPANY_INFO.name.vi}.
                        Chúng tôi cam kết mang đến trải nghiệm người dùng tốt nhất.
                    </p>
                </div>

                {/* Site Map Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {sections.map((section, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                                {section.title}
                            </h2>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group"
                                        >
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></span>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Không tìm thấy thông tin bạn cần?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Liên hệ với chúng tôi để được hỗ trợ tận tình và chuyên nghiệp
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`tel:${COMPANY_INFO.contact.phone.primary.replace(/\./g, '')}`}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                        >
                            Gọi ngay: {COMPANY_INFO.contact.phone.primary}
                        </Link>
                        <Link
                            href={`mailto:${COMPANY_INFO.contact.email.primary}`}
                            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
                        >
                            Email: {COMPANY_INFO.contact.email.primary}
                        </Link>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="text-center mt-12">
                    <Link
                        href="/"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                        ← Về trang chủ
                    </Link>
                </div>
            </div>
        </div>
    );
}
