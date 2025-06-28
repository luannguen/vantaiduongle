import { COMPANY_INFO } from '@/lib/company-metadata';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = COMPANY_INFO.contact.website.primary;
    const lastModified = new Date();

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/terms-of-service`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/site-map`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.5,
        },
    ];
}
