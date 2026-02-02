"use client";

import { Building2, HeadphonesIcon, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/custom/ContactHero";
// import EmergencyBanner from "@/components/custom/EmergencyBanner";
import QuickContactInfo from "@/components/custom/QuickContactInfo";
import CallbackWidget from "@/components/custom/CallbackWidget";
import DepartmentContacts from "@/components/custom/DepartmentContacts";
// import BusinessHours from "@/components/custom/BusinessHours";
import ContactFormSection from "@/components/custom/ContactFormSection";
import LanguageSupport from "@/components/custom/LanguageSupport";
import VideoIntroduction from "@/components/custom/VideoIntroduction";
import ServiceTestimonials from "@/components/custom/ServiceTestimonials";
// import TrustCertifications from "@/components/custom/TrustCertifications";
// import DownloadCenter from "@/components/custom/DownloadCenter";
// import OfficeGallery from "@/components/custom/OfficeGallery";
import OfficeLocations from "@/components/custom/OfficeLocations";
// import FAQQuickLinks from "@/components/custom/FAQQuickLinks";
import TourBookingCTA from "@/components/custom/TourBookingCTA";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import ScrollProgress from "@/components/custom/ScrollProgress";
import BackToTop from "@/components/custom/BackToTop";
import { contactStructuredData } from "./metadata";

export default function ContactPage() {
  const [showCallbackModal, setShowCallbackModal] = useState(false);

  // Add structured data to page
  useEffect(() => {
    contactStructuredData.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    });
  }, []);

  const departments = [
    { icon: Building2, dept: "Bookings & Reservations", phone: "+91 7051596516", email: "bookingsjourneu00@gmail.com", hours: "9 AM - 8 PM" },
    { icon: HeadphonesIcon, dept: "Customer Support", phone: "+91 9541868588", email: "jnrcustomerservice02@gmail.com", hours: "24/7" },
    // { icon: Users, dept: "Group Tours", phone: "+91 98765 43212", email: "groups@journeu.com", hours: "9 AM - 6 PM" },
    // { icon: UserCheck, dept: "Corporate Travel", phone: "+91 98765 43213", email: "corporate@journeu.com", hours: "9 AM - 6 PM" },
    // { icon: AlertCircle, dept: "Emergency Assistance", phone: "1800-123-456", email: "emergency@journeu.com", hours: "24/7" },
    { icon: MessageSquare, dept: "General Inquiries", phone: "+91 6005571959", email: "contact@journeu.com", hours: "9 AM - 6 PM" },
  ];

  const peakHours = [
    { day: "Monday - Saturday", hours: "8:00 AM - 9:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 6:00 PM" },
    { day: "Public Holidays", hours: "10:00 AM - 4:00 PM" },
  ];

  const offSeasonHours = [
    { day: "Monday - Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <ScrollProgress />
        <Navbar />
        <main role="main" aria-label="Contact page content">
          <ContactHero />
          {/* <EmergencyBanner /> */}
          <QuickContactInfo />
          <CallbackWidget />
          <DepartmentContacts departments={departments} />
          {/* <BusinessHours peakHours={peakHours} offSeasonHours={offSeasonHours} /> */}
          <ContactFormSection />
          <LanguageSupport />
          <VideoIntroduction />
          <ServiceTestimonials />
          {/* <TrustCertifications /> */}
          {/* <DownloadCenter /> */}
          {/* <OfficeGallery /> */}
          <OfficeLocations />
          {/* <FAQQuickLinks /> */}
          <TourBookingCTA />
        </main>
        <Footer />
        {/* <BackToTop /> */}
      </div>
    </ErrorBoundary>
  );
}
