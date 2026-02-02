"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  MapPin, Calendar, Users, Star, Clock, Phone, Mail, 
  Check, Share2, Heart, Mountain, Camera, Utensils, 
  Hotel, Wifi, Car, Shield, Award, Leaf, X, Copy, CheckCircle2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/custom/Breadcrumb";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/custom/StickyBookingBar";
import EnquiryModal from "@/components/custom/EnquiryModal";
import TourItinerary from "@/components/custom/TourItinerary";
import TourHighlights from "@/components/custom/TourHighlights";
import ImageGalleryLightbox from "@/components/custom/ImageGalleryLightbox";
// import CustomerReviews from "@/components/custom/CustomerReviews";
import TourFAQ from "@/components/custom/TourFAQ";
import SimilarTours from "@/components/custom/SimilarTours";
import GoogleMapSection from "@/components/custom/GoogleMapSection";
// import TourTestimonials from "@/components/custom/TourTestimonials";
// import AsSeenIn from "@/components/custom/AsSeenIn";
import StartExploringCTA from "@/components/custom/StartExploringCTA";
import {
  kashmir4DayEscapeDetail,
  kashmir7DayJammuCircuitDetail,
  kashmir7DayValleyHouseboatDetail,
  kashmir7DayLuxuryEscapeDetail,
  kashmir7DayPremiumExperienceDetail,
  kashmirHoneymoon5N6D3StarDetail,
  kashmirGroup5N6D3StarDetail,
  kashmirFamily6N7D3StarDetail,
  kashmirHoneymoon6D5NDetail,
  kashmirCultural6N7D4StarDetail,
  kashmirAdventure7N8DDetail,
  gurezValley7N8D3StarDetail,
  gurezValley6N7D4StarDetail,
  keranValley6N7D3StarDetail,
  offbeatKashmir11N12DDetail,
  kashmirSpecial5N6D4StarDetail,
  kashmirFrontier6N7DDetail,
  jammuKashmir9N10DDetail
} from "@/data/toursData";
import THEME from "@/constants/theme";

export default function TourDetailPage() {
  const params = useParams();
  const router = useRouter();
  const tourId = params?.tourId as string;
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState<number[]>([]);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  // Determine which tour data to show based on tourId
  const getTourData = () => {
    const tourDataMap: { [key: string]: any } = {
      "kashmir-4-day-escape": kashmir4DayEscapeDetail,
      "kashmir-7-day-jammu-circuit": kashmir7DayJammuCircuitDetail,
      "kashmir-7-day-valley-houseboat": kashmir7DayValleyHouseboatDetail,
      "kashmir-7-day-luxury-escape": kashmir7DayLuxuryEscapeDetail,
      "kashmir-7-day-premium-experience": kashmir7DayPremiumExperienceDetail,
      "kashmir-honeymoon-5n6d-3star": kashmirHoneymoon5N6D3StarDetail,
      "kashmir-group-5n6d-3star": kashmirGroup5N6D3StarDetail,
      "kashmir-family-6n7d-3star": kashmirFamily6N7D3StarDetail,
      "kashmir-honeymoon-6d5n": kashmirHoneymoon6D5NDetail,
      "kashmir-cultural-6n7d-4star": kashmirCultural6N7D4StarDetail,
      "kashmir-adventure-7n8d": kashmirAdventure7N8DDetail,
      "gurez-valley-7n8d-3star": gurezValley7N8D3StarDetail,
      "gurez-valley-6n7d-4star": gurezValley6N7D4StarDetail,
      "keran-valley-6n7d-3star": keranValley6N7D3StarDetail,
      "offbeat-kashmir-11n12d": offbeatKashmir11N12DDetail,
      "kashmir-special-5n6d-4star": kashmirSpecial5N6D4StarDetail,
      "kashmir-frontier-6n7d": kashmirFrontier6N7DDetail,
      "jammu-kashmir-9n10d": jammuKashmir9N10DDetail,
    };

    return tourDataMap[tourId] || {};
  };

  const tour = getTourData();

  const calculateTotalPrice = () => {
    const basePrice = (tour.price || 0) * (adults + children * 0.5);
    const addonsPrice = selectedAddons.reduce((total, addonId) => {
      const addon = tour.addons?.find((a: any) => a.id === addonId);
      return total + (addon?.price || 0);
    }, 0);
    return basePrice + addonsPrice;
  };

  const toggleAddon = (addonId: number) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  // Sample FAQ Data
  const faqsData = [
    {
      question: "What is the best time to visit Kashmir?",
      answer: "Kashmir is beautiful year-round! Summer (April-June) offers pleasant weather with blooming flowers, perfect for sightseeing. Autumn (September-November) provides stunning foliage and clear skies. Winter (December-February) is ideal for snow activities in Gulmarg. Spring (March-April) showcases blossoming gardens. This tour operates best during April to October."
    },
    {
      question: "Is Kashmir safe for tourists?",
      answer: "Yes, Kashmir is very safe for tourists. The tourism infrastructure is well-developed, and local people are extremely hospitable. We provide experienced local guides, and our team is in constant communication throughout your journey. Thousands of tourists visit Kashmir safely each year."
    },
    {
      question: "What should I pack for this tour?",
      answer: "Pack comfortable walking shoes, layered clothing (evenings can be cool even in summer), sunscreen, sunglasses, a light jacket, and personal medications. If visiting in winter, bring warm clothing, gloves, and thermal wear. We'll send you a detailed packing list upon booking."
    },
    {
      question: "Are vegetarian meal options available?",
      answer: "Absolutely! Kashmiri cuisine offers excellent vegetarian options. Please inform us of any dietary restrictions or preferences when booking, and we'll ensure all meals accommodate your needs. We work with restaurants that cater to various dietary requirements including vegan, Jain, and gluten-free."
    },
    {
      question: "What is the physical fitness level required?",
      answer: "This tour is rated 'Easy' and suitable for most fitness levels. Most activities involve light walking and sightseeing. The Gulmarg Gondola and Shikara rides require no physical exertion. If you have specific health concerns, please consult with us before booking."
    },
    {
      question: "Can I extend my stay or customize the itinerary?",
      answer: "Yes! We offer flexible tour extensions and customization options. You can add extra days in Srinagar, visit additional destinations like Sonamarg, or upgrade accommodations. Contact our team, and we'll create a personalized itinerary that matches your preferences and budget."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 30+ days before departure receive a full refund minus 10% processing fee. 15-29 days: 50% refund. 7-14 days: 25% refund. Less than 7 days: no refund. We strongly recommend travel insurance. Full details are provided in our terms and conditions."
    },
    {
      question: "Are single travelers welcome?",
      answer: "Absolutely! Many of our guests are solo travelers. You'll join a small group (2-12 people), making it easy to make friends. Single room supplements are available for those who prefer private accommodation. Our guides ensure everyone feels included and comfortable."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section - Ultra Premium */}
        <section className="relative bg-black overflow-hidden" style={{ marginTop: '-1px' }}>
          {/* Premium Texture Overlay */}
          <div className="absolute inset-0 opacity-5 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E')" }}></div>
          
          {/* Dramatic Decorative Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#FFD84D]/20 via-[#FFC700]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#1BA5B8]/20 via-[#1BA5B8]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FFD84D]/5 rounded-full blur-3xl"></div>
          
          {/* Main Hero Image Container */}
          <div className="relative h-[100vh] border-b-4 border-[#FFD84D]/50">
            {/* Background Layer 1 - Main Image with Ken Burns effect */}
            <motion.div
              initial={{ scale: 1.05 }}
              animate={{ scale: 1, x: [-10, 10] }}
              transition={{ 
                scale: { duration: 20, repeat: Infinity, repeatType: "reverse" },
                x: { duration: 30, repeat: Infinity, repeatType: "reverse" }
              }}
              className="absolute inset-0"
            >
              <img
                src={tour.coverImage}
                alt={tour.title}
                className="w-full h-full object-cover object-no-repeat"
              />
            </motion.div>
            
            {/* Animated gradient overlays */}
            <motion.div 
              animate={{ 
                background: [
                  "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.4), rgba(0,0,0,0.2))",
                  "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5), rgba(0,0,0,0.3))",
                  "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.4), rgba(0,0,0,0.2))"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
            
            {/* Moving light effect */}
            <motion.div
              animate={{
                x: [-100, 1920],
                opacity: [0, 0.3, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl"
            />
            
            {/* Hero Content - Restructured Split Layout */}
            <div className="absolute inset-0">
              <div className="container mx-auto max-w-7xl h-full px-8 md:px-16">
                <div className="grid lg:grid-cols-2 gap-8 h-full items-center pb-12">
                  
                  {/* Left Column - Main Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-6"
                  >
                    {/* Trust Badges - Refined */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-medium rounded-md border border-white/20">
                        <svg className="w-3 h-3 inline mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </span>
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-medium rounded-md border border-white/20">
                        Featured Tour
                      </span>
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-medium rounded-md border border-white/20">
                        Instant Booking
                      </span>
                    </div>
                    
                    {/* Category & Theme - Refined */}
                    <div className="flex flex-wrap items-center gap-3">
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="px-4 py-2 bg-[#1BA5B8]/20 backdrop-blur-md text-white text-sm font-medium rounded-lg border border-[#1BA5B8]/30"
                      >
                        {tour.category}
                      </motion.span>  
                      
                      {/* {tour.theme && (
                        <motion.span
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 }}
                          className="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-lg border border-white/20"
                        >
                          {tour.theme.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ')}
                        </motion.span>
                      )} */}
                    </div>
                    
                    {/* Title - Elegant */}
                    <motion.h1 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="font-ubuntu text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight leading-tight"
                    >
                      <span className="text-white drop-shadow-lg">
                        {tour.title}
                      </span>
                    </motion.h1>
                    
                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-lg md:text-xl text-white/90 mb-6 font-light leading-relaxed"
                    >
                      {tour.subtitle}
                    </motion.p>
                    
                    {/* Meta Info - Refined */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="grid grid-cols-2 gap-3"
                    >
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-white/20">
                        <Clock className="w-4 h-4 text-[#FFD84D]" />
                        <div>
                          <div className="text-white/60 text-xs">Duration</div>
                          <div className="text-white font-semibold text-sm">{tour.duration}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-white/20">
                        <Users className="w-4 h-4 text-[#FFD84D]" />
                        <div>
                          <div className="text-white/60 text-xs">Group Size</div>
                          <div className="text-white font-semibold text-sm">{tour.groupSize}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-white/20">
                        <Star className="w-4 h-4 fill-[#FFD84D] text-[#FFD84D]" />
                        <div>
                          <div className="text-white/60 text-xs">Rating</div>
                          <div className="text-white font-semibold text-sm">{tour.rating}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-white/20">
                        <MapPin className="w-4 h-4 text-[#FFD84D]" />
                        <div>
                          <div className="text-white/60 text-xs">Location</div>
                          <div className="text-white font-semibold text-sm">Kashmir</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* CTA Buttons - Refined */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 }}
                      className="flex flex-wrap gap-3 pt-2"
                    >
                      <button
                        onClick={() => setIsEnquiryModalOpen(true)}
                        className="cursor-pointer flex-1 min-w-[180px] px-6 py-3 bg-white text-[#1BA5B8] font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                      >
                        Enquire Now
                      </button>
                    </motion.div>
                  </motion.div>
                  
                  {/* Right Column - Premium Booking Card */}
                  {/* <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="hidden lg:block"
                  >
                    <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border-2 border-white/30 shadow-2xl"> */}
                      {/* Tour Info */}
                      {/* <div className="mb-6 pb-6 border-b-2 border-white/20">
                        <h3 className="text-2xl font-bold text-white mb-2">Ready to Explore?</h3>
                        <p className="text-white/80 text-sm">Duration: {tour.duration}</p>
                      </div> */}
                      
                      {/* Quick Info */}
                      {/* <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-white">
                          <span className="text-sm font-semibold">🎫 Instant Confirmation</span>
                          <span className="text-green-400">✓</span>
                        </div>
                        <div className="flex items-center justify-between text-white">
                          <span className="text-sm font-semibold">🔄 Free Cancellation</span>
                          <span className="text-green-400">✓</span>
                        </div>
                        <div className="flex items-center justify-between text-white">
                          <span className="text-sm font-semibold">⭐ Best Experience Guarantee</span>
                          <span className="text-green-400">✓</span>
                        </div>
                      </div> */}
                      
                      {/* Availability */}
                      {/* <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-semibold">Availability</span>
                          <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-bold rounded-full animate-pulse">6 Spots Left</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-1/2 rounded-full"></div>
                        </div>
                      </div> */}
                      
                      {/* Action Buttons */}
                      {/* <div className="space-y-3">
                        <button className="w-full px-6 py-4 bg-gradient-to-r from-[#FFD84D] via-[#FFC700] to-[#FFD84D] text-[#1BA5B8] font-black text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all">
                          ENQUIRE NOW
                        </button>
                        <button className="w-full px-6 py-3 bg-white/20 text-white font-bold rounded-2xl hover:bg-white/30 transition-all">
                          REQUEST CALLBACK
                        </button>
                      </div>
                    </div> 
                  </motion.div>*/}
                  
                </div>
              </div>
            </div>
            
            {/* Action Buttons - Enhanced with Share Menu */}
            {/* <div className="absolute top-8 right-8 flex gap-4 z-20"> */}
              {/* Share Button with Dropdown */}
              {/* <div className="relative"> */}
                {/* <motion.button 
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="p-4 bg-gradient-to-br from-white via-white to-white/90 backdrop-blur-xl rounded-full shadow-2xl hover:shadow-[#FFD84D]/50 transition-all border-2 border-white/50 group"
                >
                  <Share2 className="w-6 h-6 text-[#1BA5B8] group-hover:text-[#1BA5B8] transition-colors" />
                </motion.button> */}

                {/* Share Menu Dropdown */}
                {/* {showShareMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-30"
                  >
                    <div className="bg-gradient-to-r from-[#1BA5B8] to-[#1BA5B8] p-4 text-white">
                      <h3 className="font-bold text-sm">Share this tour</h3>
                      <p className="text-xs opacity-90 mt-1">Spread the adventure!</p>
                    </div>
                    
                    <div className="p-2">*/}
                      {/* Facebook */}
                      {/* <button
                        onClick={() => handleShare('facebook')}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-[#1877F2] rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium text-sm group-hover:text-[#1BA5B8]">Facebook</span>
                      </button> */}

                      {/* Twitter */}
                      {/* <button
                        onClick={() => handleShare('twitter')}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-[#1DA1F2] rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium text-sm group-hover:text-[#1BA5B8]">Twitter</span>
                      </button> */}

                      {/* WhatsApp */}
                      {/* <button
                        onClick={() => handleShare('whatsapp')}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium text-sm group-hover:text-[#1BA5B8]">WhatsApp</span>
                      </button> */}

                      {/* Email */}
                      {/* <button
                        onClick={() => handleShare('email')}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium text-sm group-hover:text-[#1BA5B8]">Email</span>
                      </button> */}

                      {/* Copy Link */}
                      {/* <button
                        onClick={() => handleShare('copy')}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-[#1BA5B8] rounded-lg flex items-center justify-center">
                          {copied ? (
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          ) : (
                            <Copy className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <span className="text-gray-700 font-medium text-sm group-hover:text-[#1BA5B8]">
                          {copied ? 'Link Copied!' : 'Copy Link'}
                        </span>
                      </button> */}
                    {/* </div> */}
                  {/* </motion.div> */}
                {/* )} */}
              {/* </div> */}

              {/* <motion.button 
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-gradient-to-br from-[#FFD84D] via-[#FFC700] to-[#FFD84D] backdrop-blur-xl rounded-full shadow-2xl hover:shadow-[#FFD84D]/70 transition-all border-2 border-[#FFD84D] group"
              >
                <Heart className="w-6 h-6 text-[#1BA5B8] group-hover:fill-[#1BA5B8] transition-all" />
              </motion.button> */}
            {/* </div> */}
          </div>
        </section>

      {/* Breadcrumb Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Tours", href: "/tours" },
              { label: tour.title }
            ]}
          />
        </div>
      </section>

      {/* Tour Information Grid */}
      {/* <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 mb-1">Tour Code</span>
                <span className="font-semibold text-gray-900">{tour.tourCode}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 mb-1">Tour Type</span>
                <span className="font-semibold text-gray-900">{tour.tourType}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 mb-1">Departure</span>
                <span className="font-semibold text-gray-900">{tour.departureTime}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 mb-1">Return</span>
                <span className="font-semibold text-gray-900">{tour.returnTime}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 mb-1">Dress Code</span>
                <span className="font-semibold text-gray-900">Casual</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 mb-1">Language</span>
                <span className="font-semibold text-gray-900">{tour.language}</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Overview Section - Before Gallery */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-12 bg-gradient-to-b from-[#1BA5B8] to-[#1BA5B8] rounded-full"></div>
              <h2 className="font-ubuntu text-4xl font-bold bg-gradient-to-r from-[#1BA5B8] to-[#1BA5B8] bg-clip-text text-transparent">Overview</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              {tour.description}
            </p>
            
            {/* Amenities */}
            {tour.amenities && tour.amenities.length > 0 && (
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-10">
                {tour.amenities.map((amenity: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex flex-col items-center gap-3 p-5 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 cursor-pointer"
                  >
                    <div className="p-3 bg-gradient-to-br from-[#1BA5B8]/10 to-[#1BA5B8]/10 rounded-xl">
                      {amenity.icon === "Hotel" && <Hotel className="w-7 h-7 text-[#1BA5B8]" />}
                      {amenity.icon === "Utensils" && <Utensils className="w-7 h-7 text-[#1BA5B8]" />}
                      {amenity.icon === "Car" && <Car className="w-7 h-7 text-[#1BA5B8]" />}
                      {amenity.icon === "Camera" && <Camera className="w-7 h-7 text-[#1BA5B8]" />}
                      {amenity.icon === "Shield" && <Shield className="w-7 h-7 text-[#1BA5B8]" />}
                      {amenity.icon === "MapPin" && <MapPin className="w-7 h-7 text-[#1BA5B8]" />}
                    </div>
                    <span className="text-sm font-semibold text-gray-700 text-center">{amenity.name}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 bg-gray-50">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Content */}
          {/* <div className="lg:col-span-2 space-y-12"> */}
          <div className="lg:col-span-12 space-y-12">
            
            {/* Highlights & Inclusions */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <div className={`${THEME.section.uniformBlue} w-2 h-14 rounded-full`}></div>
                <h2 className={`${THEME.section.uniformBlue} font-ubuntu text-4xl md:text-5xl font-bold  bg-clip-text text-transparent`}>
                  What's Included & Not Included
                </h2>
              </div>
              <TourHighlights
                highlights={tour.highlights || []}
                inclusions={tour.inclusions || []}
                exclusions={tour.exclusions || []}
              />
            </section>

            {/* START EXPLORING CTA */}
            {/* <StartExploringCTA /> */}

            {/* Itinerary */}
            {tour.itinerary && tour.itinerary.length > 0 && (
            <section id="itinerary-section">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-2 h-14 bg-gradient-to-b from-[#1BA5B8] to-[#1BA5B8] rounded-full"></div>
                <h2 className={`${THEME.section.uniformBlue} font-ubuntu text-4xl md:text-5xl font-bold bg-clip-text text-transparent`}>
                  Day-by-Day Itinerary
                </h2>
              </div>
              <TourItinerary days={tour.itinerary as any || []} />
            </section>
            )}

            {/* Image Gallery Section - Moved after Itinerary */}
            <section className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
              <div className="text-center mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`${THEME.section.uniformBlue} font-ubuntu text-4xl md:text-5xl font-bold bg-clip-text text-transparent mb-4`}
                >
                  Tour Gallery
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 text-lg"
                >
                  Explore the beauty and experiences that await you
                </motion.p>
              </div>
              <ImageGalleryLightbox images={tour.images || []} tourTitle={tour.title} />
            </section>

            {/* Weather & Best Time Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-3xl shadow-xl p-10 border border-blue-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`${THEME.section.uniformBlue} w-2 h-14 rounded-full`}></div>
                <h2 className={`${THEME.section.uniformBlue} font-ubuntu text-4xl font-bold bg-clip-text text-transparent`}>
                  Weather & Best Time to Visit
                </h2>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
                  <div className="text-4xl mb-2">🌸</div>
                  <h3 className="font-bold text-lg mb-2 text-[#1BA5B8]">Spring (Mar-May)</h3>
                  <p className="text-sm text-gray-600 mb-2">15-25°C</p>
                  <p className="text-sm text-gray-700">Blooming gardens, pleasant weather, perfect for sightseeing</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
                  <div className="text-4xl mb-2">☀️</div>
                  <h3 className="font-bold text-lg mb-2 text-[#1BA5B8]">Summer (Jun-Aug)</h3>
                  <p className="text-sm text-gray-600 mb-2">20-30°C</p>
                  <p className="text-sm text-gray-700">Peak season, ideal weather, all activities available</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
                  <div className="text-4xl mb-2">🍂</div>
                  <h3 className="font-bold text-lg mb-2 text-[#1BA5B8]">Autumn (Sep-Nov)</h3>
                  <p className="text-sm text-gray-600 mb-2">10-20°C</p>
                  <p className="text-sm text-gray-700">Beautiful foliage, clear skies, excellent photography</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
                  <div className="text-4xl mb-2">❄️</div>
                  <h3 className="font-bold text-lg mb-2 text-[#1BA5B8]">Winter (Dec-Feb)</h3>
                  <p className="text-sm text-gray-600 mb-2">-2 to 12°C</p>
                  <p className="text-sm text-gray-700">Snow activities, skiing in Gulmarg, winter wonderland</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-bold text-xl mb-4 text-[#1BA5B8]">🎒 What to Pack</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-[#1BA5B8]">Essentials</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>✓ Comfortable walking shoes</li>
                      <li>✓ Sunscreen & sunglasses</li>
                      <li>✓ Light jacket (evenings)</li>
                      <li>✓ Personal medications</li>
                      <li>✓ Camera with extra batteries</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-[#1BA5B8]">Clothing</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>✓ Layered clothing</li>
                      <li>✓ Long pants & shorts</li>
                      <li>✓ Light sweater/fleece</li>
                      <li>✓ Comfortable t-shirts</li>
                      <li>✓ Rain jacket (monsoon)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-[#1BA5B8]">Optional</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>✓ Binoculars for wildlife</li>
                      <li>✓ Reusable water bottle</li>
                      <li>✓ Travel adapter</li>
                      <li>✓ Portable charger</li>
                      <li>✓ Small backpack</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Google Map Section */}
            <GoogleMapSection tourTitle={tour.title} />

            {/* Sustainability */}
            {tour.sustainability && tour.sustainability.length > 0 && (
              <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8">
                <h2 className="font-ubuntu text-3xl font-bold text-gray-900 mb-6">
                  Sustainable Tourism
                </h2>
                <p className="text-gray-700 mb-6">
                  We're committed to responsible travel that benefits local communities and protects the environment.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {tour.sustainability.map((item: any, index: number) => {
                    const IconComponent = item.icon === "Leaf" ? Leaf : item.icon === "Award" ? Award : Leaf;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-md"
                      >
                        <IconComponent className="w-8 h-8 text-green-600 mb-3" />
                        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Customer Reviews Section */}
            {/* <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <CustomerReviews
                reviews={reviewsData}
                averageRating={tour.rating || 4.5}
                totalReviews={124}
              />
            </motion.section> */}

            {/* FAQ Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <TourFAQ faqs={faqsData} />
            </motion.section>

            {/* Similar Tours Section */}
            {/* <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SimilarTours tours={similarToursData} />
            </motion.section> */}

            {/* Testimonials Carousel */}
            {/* <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <TourTestimonials testimonials={testimonialsData} />
            </motion.section> */}

            {/* As Seen In */}
            {/* <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <AsSeenIn />
            </motion.section> */}
          </div>

          {/* Right Sidebar */}
          {/* <div className="lg:col-span-1 none">
            <div className="sticky top-24 space-y-6"> */}
              {/* Booking Card */}
              {/* <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-xl p-5 border border-gray-200 relative overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#1BA5B8]/10 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#FFD84D]/5 to-transparent rounded-tr-full"></div>
                
                <div className="text-center mb-4 relative z-10">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#1BA5B8] via-[#1BA5B8] to-[#1BA5B8] bg-clip-text text-transparent mb-2">
                    Book Your Adventure
                  </h3>
                  <p className="text-sm text-gray-600">Contact us for pricing and availability</p>
                </div> */}

                {/* Date Picker */}
                {/* <div className="mb-3 relative z-10">
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5 cursor-pointer">Select Date</label>
                  <select 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1BA5B8] focus:border-transparent text-xs"
                  >
                    <option value="">Choose a date</option>
                    {tour.availableDates && tour.availableDates.map((date: string) => (
                      <option key={date} value={date}>
                        {new Date(date).toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </option>
                    ))}
                  </select>
                </div> */}

                {/* Guest Selector */}
                {/* <div className="mb-3 relative z-10 space-y-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Guests</label>
                   */}
                  {/* Adults */}
                  {/* <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                    <div>
                      <div className="text-xs font-medium text-gray-900">Adults</div>
                      <div className="text-[10px] text-gray-500">Age 18+</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors text-sm"
                      >
                        -
                      </button>
                      <span className="w-7 text-center font-semibold text-sm">{adults}</span>
                      <button
                        onClick={() => setAdults(Math.min(12, adults + 1))}
                        className="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div> */}

                  {/* Children */}
                  {/* <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                    <div>
                      <div className="text-xs font-medium text-gray-900">Children</div>
                      <div className="text-[10px] text-gray-500">Age 5-17</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors text-sm"
                      >
                        -
                      </button>
                      <span className="w-7 text-center font-semibold text-sm">{children}</span>
                      <button
                        onClick={() => setChildren(Math.min(8, children + 1))}
                        className="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div> */}

                {/* Add-ons/Extras */}
                {/* <div className="mb-3 relative z-10">
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Extra Services (Optional)</label>
                  <div className="space-y-1.5">
                    {tour.addons && tour.addons.map((addon: any) => (
                      <label 
                        key={addon.id}
                        className="flex items-start gap-2 bg-gray-50 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={selectedAddons.includes(addon.id)}
                          onChange={() => toggleAddon(addon.id)}
                          className="mt-0.5 w-3.5 h-3.5 text-[#1BA5B8] border-gray-300 rounded focus:ring-[#1BA5B8]"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-gray-900">{addon.name}</span>
                          </div>
                          <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">{addon.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div> */}

                {/* Booking Summary */}
                {/* <div className="mb-3 relative z-10 bg-[#1BA5B8]/10 rounded-lg p-3">
                  <div className="text-sm font-semibold text-gray-800 mb-2">Booking Summary</div>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-600">
                      {adults} adult{adults > 1 ? 's' : ''}{children > 0 ? `, ${children} child${children > 1 ? 'ren' : ''}` : ''}
                    </div>
                    {selectedAddons.length > 0 && (
                      <div className="text-xs text-gray-600">
                        {selectedAddons.length} extra service{selectedAddons.length > 1 ? 's' : ''} selected
                      </div>
                    )}
                  </div>
                </div> 

                <div className="space-y-2 mb-4 relative z-10">
                  <Link href="#booking">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-2.5 bg-gradient-to-r from-[#1BA5B8] via-[#1BA5B8] to-[#1BA5B8] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-xs relative overflow-hidden group"
                      disabled={!selectedDate}
                    >
                      <span className="relative z-10">
                        {selectedDate ? 'Book Now' : 'Select Date to Book'}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1BA5B8] to-[#1BA5B8] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.button>
                  </Link>
                  
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="my-4 w-full py-2.5 bg-white text-primary font-semibold rounded-xl border-2 border-[#1BA5B8] hover:bg-[#1BA5B8] hover:text-white transition-all text-xs shadow-md"
                    >
                      Request Custom Quote
                    </motion.button>
                  </Link>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-gray-200 relative z-10">
                  <a
                    href="tel:+916005571959"
                    className="flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-[#1BA5B8]/5 to-[#1BA5B8]/5 text-[#1BA5B8] font-semibold rounded-lg hover:from-[#1BA5B8]/10 hover:to-[#1BA5B8]/10 transition-all text-xs border border-gray-200"
                  >
                    <div className="p-1 bg-[#1BA5B8]/20 rounded-full">
                      <Phone className="w-3.5 h-3.5 text-[#1BA5B8]" />
                    </div>
                    <span>Call Travel Expert</span>
                  </a>
                  
                  <a
                    href="mailto:info@journeu.com"
                    className="flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-[#1BA5B8]/5 to-[#1BA5B8]/5 text-[#1BA5B8] font-semibold rounded-lg hover:from-[#1BA5B8]/10 hover:to-[#1BA5B8]/10 transition-all text-xs border border-gray-200"
                  >
                    <div className="p-1 bg-[#1BA5B8]/20 rounded-full">
                      <Mail className="w-3.5 h-3.5 text-[#1BA5B8]" />
                    </div>
                    <span>Email Us</span>
                  </a>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 relative z-10 space-y-1.5">
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg border border-green-200">
                    <div className="p-0.5 bg-green-500 rounded-full">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-green-700">Free cancellation up to 48h</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
                    <div className="p-0.5 bg-blue-500 rounded-full">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-blue-700">Instant confirmation</span>
                  </div>
                </div>
              </motion.div>*/}

              {/* Contact Card */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`${THEME.section.uniformBlue}  text-white rounded-2xl p-7 shadow-xl relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#FFD84D]/10 rounded-tr-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">
                      Need Assistance?
                    </h3>
                  </div>
                  <p className="text-white/90 mb-5 text-sm leading-relaxed">
                    Our travel experts are ready to help you plan the perfect journey.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                      <div className="p-2 bg-[#FFD84D] rounded-lg">
                        <Phone className="w-4 h-4 text-[#1BA5B8]" />
                      </div>
                      <div>
                        <div className="text-xs text-white/70">Phone</div>
                        <span className="font-semibold text-sm">+91 6005 571959</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                      <div className="p-2 bg-[#FFD84D] rounded-lg">
                        <Mail className="w-4 h-4 text-[#1BA5B8]" />
                      </div>
                      <div>
                        <div className="text-xs text-white/70">Email</div>
                        <span className="font-semibold text-sm">info@journeu.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div> 
            </div>
          </div>*/}
        </div>
      </div>

      {/* Sticky Booking Bar */}
      <StickyBookingBar
        tourTitle={tour.title}
        tourId={tour.id}
      />

      {/* WhatsApp Floating Button */}
      {/* <WhatsAppButton
        phoneNumber="+916005571959"
        message={`Hi! I'm interested in the ${tour.title} tour. Can you provide more details?`}
      /> */}
    </div>

    <Footer />

    {/* Enquiry Modal */}
    <EnquiryModal
      isOpen={isEnquiryModalOpen}
      onClose={() => setIsEnquiryModalOpen(false)}
      tourTitle={tour.title}
      tourId={tour.id}
    />
    </>
  );
}
