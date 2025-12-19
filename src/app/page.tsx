import About from '@/components/About'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import DetailedCaseStudies from '@/components/DetailedCaseStudies'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import LiveChat from '@/components/LiveChat'
import NewsSection from '@/components/NewsSection'
import Partners from '@/components/Partners'
import PartnershipBooster from '@/components/PartnershipBooster'
import PartnershipJourney from '@/components/PartnershipJourney'
import PartnershipOnboarding from '@/components/PartnershipOnboarding'
import PriceCalculator from '@/components/PriceCalculator'
import ROICalculator from '@/components/ROICalculator'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import StickyPartnershipCTA from '@/components/StickyPartnershipCTA'
import TableOfContents from '@/components/TableOfContents'
import Testimonials from '@/components/Testimonials'
import TrackingSection from '@/components/TrackingSection'
import TruckTypes from '@/components/TruckTypes'
import TrustBuilder from '@/components/TrustBuilder'
import VideoTestimonials from '@/components/VideoTestimonials'

export default function Home() {
    return (
        <main>
            {/* Màn hình 1: Hero & Báo giá - Điểm chạm đầu tiên quan trọng nhất */}
            <section id="hero">
                <Hero />
            </section>

            {/* Màn hình 2: Bằng chứng năng lực & Đối tác - Xây dựng niềm tin ngay lập tức */}
            <section id="partnership-booster">
                <PartnershipBooster />
            </section>

            {/* Màn hình 3: Dịch vụ cốt lõi - Hiển thị 3 giải pháp chính */}
            <section id="services">
                <Services limit={3} />
            </section>

            {/* Màn hình 4: Năng lực vận tải - Đội xe và Chỉ số (Stats gộp vào đây hoặc liền kề) */}
            <section id="truck-types">
                <TruckTypes />
            </section>

            <section id="stats">
                <Stats />
            </section>

            {/* Màn hình 5: Chứng nhận & Uy tín */}
            <section id="certifications">
                <Certifications />
            </section>

            <section id="partners">
                <Partners />
            </section>

            {/* Màn hình 6: Liên hệ & Chân trang */}
            <section id="contact">
                <Contact />
            </section>

            <StickyPartnershipCTA />
            <LiveChat />

            {/* 
               Các Section sau đây được tạm thời ẩn khỏi trang chủ để giảm nhiễu thông tin.
               Chúng có thể được truy cập qua Navigation hoặc trang con:
               - PriceCalculator, ROICalculator, TrackingSection
               - About, TrustBuilder, DetailedCaseStudies, PartnershipJourney
               - VideoTestimonials, PartnershipOnboarding, Testimonials, FAQ, NewsSection
            */}
        </main>
    )
}
