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
            <TableOfContents />
            <section id="hero">
                <Hero />
            </section>
            <section id="partnership-booster">
                <PartnershipBooster />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="truck-types">
                <TruckTypes />
            </section>
            <section id="price-calculator">
                <PriceCalculator />
            </section>
            <section id="roi-calculator">
                <ROICalculator />
            </section>
            <section id="tracking">
                <TrackingSection />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="stats">
                <Stats />
            </section>
            <section id="trust-builder">
                <TrustBuilder />
            </section>
            <section id="detailed-case-studies">
                <DetailedCaseStudies />
            </section>
            <section id="partnership-journey">
                <PartnershipJourney />
            </section>
            <section id="video-testimonials">
                <VideoTestimonials />
            </section>
            <section id="certifications">
                <Certifications />
            </section>
            <section id="partners">
                <Partners />
            </section>
            <section id="partnership-onboarding">
                <PartnershipOnboarding />
            </section>
            <section id="testimonials">
                <Testimonials />
            </section>
            <section id="faq">
                <FAQ />
            </section>
            <section id="news">
                <NewsSection />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <StickyPartnershipCTA />
            <LiveChat />
        </main>
    )
}