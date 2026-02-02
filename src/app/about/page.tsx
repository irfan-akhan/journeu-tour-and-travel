"use client";

import Navbar from "@/components/Navbar";
import AboutHero from "@/components/custom/AboutHero";
import AboutIntro from "@/components/custom/AboutIntro";
import WhyTravelWithUs from "@/components/custom/WhyTravelWithUs";
import FounderStory from "@/components/custom/FounderStory";
import OurStory from "@/components/custom/OurStory";
import OurPurpose from "@/components/custom/OurPurpose";
import TeamSection from "@/components/custom/TeamSection";
import AwardsRecognition from "@/components/custom/AwardsRecognition";
import GalleryShowcase from "@/components/custom/GalleryShowcase";
import ServiceTestimonials from "@/components/custom/ServiceTestimonials";
import WhyChooseUs from "@/components/custom/WhyChooseUs";
// import TrustCertifications from "@/components/custom/TrustCertifications";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import ScrollProgress from "@/components/custom/ScrollProgress";
import BackToTop from "@/components/custom/BackToTop";

export default function AboutPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <ScrollProgress />
        <Navbar />
        <main role="main" aria-label="About page content">
          <AboutHero />
          <AboutIntro />
          <WhyTravelWithUs />
          <FounderStory />
          <OurStory />
          <OurPurpose />
          <TeamSection />
          {/* <AwardsRecognition /> */}
          {/* <GalleryShowcase /> */}
          <ServiceTestimonials />
          <WhyChooseUs />
          {/* <TrustCertifications /> */}
        </main>
        <Footer />
        {/* <BackToTop /> */}
      </div>
    </ErrorBoundary>
  );
}
