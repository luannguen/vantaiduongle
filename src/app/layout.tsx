import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SocialWidget from '@/components/SocialWidget';
import StickyCTA from '@/components/StickyCTA';
import TruckCompanion from '@/components/TruckCompanion';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { COMPANY_INFO } from '@/lib/company-metadata';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/animations.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name.vi} - Dịch vụ vận chuyển hàng hóa từ Bắc vào Nam`,
  description: "Dịch vụ vận tải đường bộ uy tín với đội xe tải từ 1 tấn đến 10 tấn. Cam kết giao hàng nhanh chóng, an toàn và đúng hẹn trên toàn quốc.",
  keywords: COMPANY_INFO.seo.keywords.vi,
  authors: [{ name: COMPANY_INFO.name.vi }],
  openGraph: {
    title: `${COMPANY_INFO.name.vi} - Dịch vụ vận chuyển uy tín`,
    description: COMPANY_INFO.slogan.vi,
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-inter antialiased`}
      >
        <LanguageProvider>
          <Header />
          <TruckCompanion />
          {children}
          <Footer />
          <SocialWidget />
          <StickyCTA />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
