/**
 * Company Metadata - Tập trung quản lý tất cả thông tin công ty
 * Khi cần thay đổi thông tin, chỉ sửa ở file này
 */

export const COMPANY_INFO = {
    // Thông tin cơ bản
    name: {
        vi: 'Vận Tải 62 Dương Lê',
        en: '62 Duong Le Transport',
        short: '62 Dương Lê'
    },

    slogan: {
        vi: 'Dịch vụ vận chuyển uy tín từ Bắc vào Nam',
        en: 'Reliable transport services from North to South Vietnam'
    },

    description: {
        vi: 'Với hơn 15 năm kinh nghiệm trong lĩnh vực vận tải, Vận Tải 62 Dương Lê đã trở thành đối tác tin cậy của hàng nghìn khách hàng trên toàn quốc.',
        en: 'With over 15 years of experience in the transportation industry, 62 Duong Le Transport has become a trusted partner for thousands of customers nationwide.'
    },

    // Thông tin liên hệ
    contact: {
        address: {
            full: '114 Cầu Kinh, Tân Tạo A, Bình Tân, TP.HCM',
            street: '114 Cầu Kinh',
            district: 'Tân Tạo A, Bình Tân',
            city: 'TP.HCM',
            country: 'Việt Nam',
            googleMaps: 'https://maps.google.com/?q=114+Cầu+Kinh,+Tân+Tạo+A,+Bình+Tân,+TP.HCM',
            coordinates: {
                lat: 10.739801,
                lng: 106.614040
            }
        },

        phone: {
            primary: '0931.879.070',
            secondary: '0963.713.715',
            formatted: '+84 931 879 070',
            whatsapp: '+84931879070'
        },

        email: {
            primary: 'vantai62duongle@gmail.com',
            support: 'support@vantai62duongle.com',
            business: 'business@vantai62duongle.com',
            info: 'info@vantai62duongle.com'
        },

        website: {
            primary: 'https://vantai62duongle.com',
            booking: 'https://booking.vantai62duongle.com'
        }
    },

    // Mạng xã hội
    social: {
        facebook: {
            url: '#vantai62duongle',
            username: '@vantai62duongle',
            pageId: 'vantai62duongle'
        },

        instagram: {
            url: '#vantai62duongle',
            username: '@vantai62duongle'
        },

        youtube: {
            url: '#vantai62duongle',
            channelId: '@vantai62duongle'
        },

        tiktok: {
            url: '#vantai62duongle',
            username: '@vantai62duongle'
        },

        linkedin: {
            url: '#vantai-62-duong-le',
            company: 'vantai-62-duong-le'
        }
    },

    // Chat & Messaging
    messaging: {
        zalo: {
            number: '0931879070',
            url: 'https://zalo.me/0931879070',
            oaId: 'vantai62duongle'
        },

        telegram: {
            username: '@vantai62duongle',
            url: '#vantai62duongle'
        },

        messenger: {
            pageId: 'vantai62duongle',
            url: '#vantai62duongle'
        },

        viber: {
            number: '0931879070',
            url: 'viber://chat?number=+84931879070'
        }
    },

    // Thời gian làm việc
    workingHours: {
        vi: {
            weekdays: 'Thứ 2 - Chủ nhật: 24/7',
            note: 'Phục vụ không ngừng nghỉ',
            emergency: 'Hotline khẩn cấp: 0963.713.715'
        },
        en: {
            weekdays: 'Monday - Sunday: 24/7',
            note: 'Non-stop service',
            emergency: 'Emergency Hotline: 0963.713.715'
        }
    },

    // Business Information
    business: {
        taxCode: '0123456789',
        licenseNumber: 'TPHCM-123456',
        establishedYear: 2009,
        experience: '15+ năm',
        fleetSize: '50+ xe',
        coverage: 'Toàn quốc'
    },

    // SEO & Marketing
    seo: {
        keywords: {
            vi: 'vận tải, vận chuyển, xe tải, giao hàng, Dương Lê, Hà Nội, TP.HCM, logistics, 62 Dương Lê',
            en: 'transport, shipping, truck, delivery, logistics, Vietnam, freight'
        },

        ogImage: '/images/og-image.jpg',
        favicon: '/favicon.ico',
        logo: '/images/logo.png'
    },

    // Legal
    legal: {
        copyright: {
            vi: '© 2024 Vận Tải 62 Dương Lê. Tất cả quyền được bảo lưu.',
            en: '© 2024 62 Duong Le Transport. All rights reserved.'
        },
        privacy: '/privacy-policy',
        terms: '/terms-of-service'
    }
} as const;

// Helper functions để dễ dàng truy cập thông tin
export const getCompanyName = (lang: 'vi' | 'en' = 'vi') => COMPANY_INFO.name[lang];
export const getCompanySlogan = (lang: 'vi' | 'en' = 'vi') => COMPANY_INFO.slogan[lang];
export const getCompanyDescription = (lang: 'vi' | 'en' = 'vi') => COMPANY_INFO.description[lang];
export const getCompanyPhone = () => COMPANY_INFO.contact.phone.primary;
export const getCompanyEmail = () => COMPANY_INFO.contact.email.primary;
export const getCompanyAddress = () => COMPANY_INFO.contact.address.full;
export const getZaloUrl = () => COMPANY_INFO.messaging.zalo.url;
export const getFacebookUrl = () => COMPANY_INFO.social.facebook.url;
export const getCopyright = (lang: 'vi' | 'en' = 'vi') => COMPANY_INFO.legal.copyright[lang];

// Social media links array for easy iteration
export const SOCIAL_LINKS = [
    {
        name: 'Facebook',
        url: COMPANY_INFO.social.facebook.url,
        icon: 'facebook'
    },
    {
        name: 'Instagram',
        url: COMPANY_INFO.social.instagram.url,
        icon: 'instagram'
    },
    {
        name: 'YouTube',
        url: COMPANY_INFO.social.youtube.url,
        icon: 'youtube'
    },
    {
        name: 'TikTok',
        url: COMPANY_INFO.social.tiktok.url,
        icon: 'tiktok'
    }
] as const;

// Contact methods array for contact page
export const CONTACT_METHODS = [
    {
        type: 'phone',
        label: 'Điện thoại',
        value: COMPANY_INFO.contact.phone.primary,
        href: `tel:${COMPANY_INFO.contact.phone.primary.replace(/\./g, '')}`
    },
    {
        type: 'hotline',
        label: 'Hotline',
        value: COMPANY_INFO.contact.phone.secondary,
        href: `tel:${COMPANY_INFO.contact.phone.secondary.replace(/\./g, '')}`
    },
    {
        type: 'email',
        label: 'Email',
        value: COMPANY_INFO.contact.email.primary,
        href: `mailto:${COMPANY_INFO.contact.email.primary}`
    },
    {
        type: 'zalo',
        label: 'Zalo',
        value: COMPANY_INFO.messaging.zalo.number,
        href: COMPANY_INFO.messaging.zalo.url
    },
    {
        type: 'address',
        label: 'Địa chỉ',
        value: COMPANY_INFO.contact.address.full,
        href: COMPANY_INFO.contact.address.googleMaps
    }
] as const;
