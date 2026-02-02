"use client";

import Navbar from "@/components/Navbar";
import HomeHero from "@/components/custom/HomeHero";
import TourCategories from "@/components/custom/TourCategories";
import PopularDestinations from "@/components/custom/PopularDestinations";
import SpecialOffers from "@/components/custom/SpecialOffers";
import ServicesShowcase from "@/components/custom/ServicesShowcase";
import HowItWorks from "@/components/custom/HowItWorks";
import FilterableTours from "@/components/custom/FilterableTours";
import VideoShowcase from "@/components/custom/VideoShowcase";
import DestinationsCarousel from "@/components/custom/DestinationsCarousel";
import TravelBySeasonSection from "@/components/custom/TravelBySeasonSection";
import WhyChooseUs from "@/components/custom/WhyChooseUs";
import TestimonialsCarousel from "@/components/custom/TestimonialsCarousel";
import TrustedPartners from "@/components/custom/TrustedPartners";
import FAQSection from "@/components/custom/FAQSection";
import BlogPreview from "@/components/custom/BlogPreview";
import NewsletterSection from "@/components/custom/NewsletterSection";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import ScrollProgress from "@/components/custom/ScrollProgress";
import BackToTop from "@/components/custom/BackToTop";
import CustomCursor from "@/components/custom/CustomCursor";
import PageTransition from "@/components/custom/PageTransition";

export default function Home() {
  return (
    <ErrorBoundary>
      <CustomCursor />
      <PageTransition>
        <div className="min-h-screen bg-gray-50">
          <ScrollProgress />
          <Navbar />
          <main role="main" aria-label="Homepage content">
          <HomeHero />
          <TourCategories />
          <PopularDestinations />
          <SpecialOffers />
          <ServicesShowcase />
          <VideoShowcase />
          <HowItWorks />
          <FilterableTours />
          <DestinationsCarousel />
          <TravelBySeasonSection />
          <WhyChooseUs />
          <TestimonialsCarousel />
          <TrustedPartners />
          <FAQSection />
          {/* <BlogPreview /> */}
          {/* <NewsletterSection /> */}
          </main>
          <Footer />
          {/* <BackToTop /> */}
        </div>
      </PageTransition>
    </ErrorBoundary>
  );
}
