import { COMPANY_INFO, getCompanyDescription, getCompanyName, getCompanySlogan } from './company-metadata';

export const translations = {
    vi: {
        // Header
        home: 'Trang chủ',
        services: 'Dịch vụ',
        trucks: 'Loại xe',
        about: 'Về chúng tôi',
        partners: 'Đối tác',
        contact: 'Liên hệ',
        bookNow: 'Đặt xe ngay',
        logisticsCompany: 'CÔNG TY VẬN TẢI LOGISTICS',
        partnershipCTA: 'Hợp tác doanh nghiệp',

        // Hero
        heroTitle: getCompanyName('vi'),
        heroSubtitle: getCompanySlogan('vi'),
        heroDescription: 'Với đội xe đa dạng từ 1-10 tấn và đội ngũ tài xế kinh nghiệm, chúng tôi cam kết mang đến dịch vụ vận chuyển nhanh chóng, an toàn và giá cả hợp lý.',
        getQuote: 'Báo giá ngay',
        callNow: 'Gọi ngay',

        // Services
        servicesTitle: 'Dịch vụ của chúng tôi',
        fastDelivery: 'Giao hàng nhanh',
        fastDeliveryDesc: 'Giao hàng trong ngày tại nội thành, 1-3 ngày liên tỉnh',
        safeTransport: 'Vận chuyển an toàn',
        safeTransportDesc: 'Bảo hiểm toàn diện, đảm bảo hàng hóa luôn an toàn',
        tracking: 'Theo dõi đơn hàng',
        trackingDesc: 'Theo dõi hành trình đơn hàng real-time qua app',
        support247: 'Hỗ trợ 24/7',
        support247Desc: 'Đội ngũ chăm sóc khách hàng sẵn sàng hỗ trợ mọi lúc',

        // Contact
        contactTitle: 'Liên hệ với chúng tôi',
        name: 'Họ tên',
        phone: 'Số điện thoại',
        email: 'Email',
        message: 'Tin nhắn',
        send: 'Gửi tin nhắn',

        // Footer
        workingHours: 'Giờ làm việc',
        allWeek: COMPANY_INFO.workingHours.vi.weekdays,
        nonstop: COMPANY_INFO.workingHours.vi.note,

        // Truck Types
        trucksTitle: 'Đội xe đa dạng',
        tonTruck: 'tấn',

        // About
        aboutTitle: `Về ${getCompanyName('vi')}`,
        aboutDescription: getCompanyDescription('vi'),

        // Common
        learnMore: 'Tìm hiểu thêm',
        viewAll: 'Xem tất cả',
        backToTop: 'Về đầu trang',
        chatWithUs: 'Chat với chúng tôi',
    },
    en: {
        // Header
        home: 'Home',
        services: 'Services',
        trucks: 'Truck Types',
        about: 'About Us',
        partners: 'Partners',
        contact: 'Contact',
        bookNow: 'Book Now',
        logisticsCompany: 'LOGISTICS TRANSPORT COMPANY',
        partnershipCTA: 'Business Partnership',

        // Hero
        heroTitle: getCompanyName('en'),
        heroSubtitle: getCompanySlogan('en'),
        heroDescription: 'With our diverse fleet of 1-10 ton trucks and experienced drivers, we are committed to providing fast, safe and affordable transportation services.',
        getQuote: 'Get Quote',
        callNow: 'Call Now',

        // Services
        servicesTitle: 'Our Services',
        fastDelivery: 'Fast Delivery',
        fastDeliveryDesc: 'Same-day delivery within city, 1-3 days inter-province',
        safeTransport: 'Safe Transport',
        safeTransportDesc: 'Comprehensive insurance, ensuring goods are always safe',
        tracking: 'Order Tracking',
        trackingDesc: 'Real-time order tracking through our app',
        support247: '24/7 Support',
        support247Desc: 'Customer service team ready to assist anytime',

        // Contact
        contactTitle: 'Contact Us',
        name: 'Full Name',
        phone: 'Phone Number',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',

        // Footer
        workingHours: 'Working Hours',
        allWeek: COMPANY_INFO.workingHours.en.weekdays,
        nonstop: COMPANY_INFO.workingHours.en.note,

        // Truck Types
        trucksTitle: 'Diverse Fleet',
        tonTruck: 'ton',

        // About
        aboutTitle: `About ${getCompanyName('en')}`,
        aboutDescription: getCompanyDescription('en'),

        // Common
        learnMore: 'Learn More',
        viewAll: 'View All',
        backToTop: 'Back to Top',
        chatWithUs: 'Chat with us',
    }
}
