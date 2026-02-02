"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  MapPin, Calendar, Users, Star, Clock, Plane,
  Cloud, Sun, Snowflake, Umbrella, Map, Camera,
  Award, Shield, Phone, Mail, ChevronRight, Home, ArrowRight,
  X, ChevronLeft
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SimilarTours from "@/components/custom/SimilarTours";
// import TestimonialsCarousel from "@/components/custom/TestimonialsCarousel";
import TrustedPartners from "@/components/custom/TrustedPartners";
import { getDestinationDetail } from "@/data/destinationDetails";
import THEME from "@/constants/theme";

export default function DestinationDetailPage() {
  const params = useParams();
  const destinationId = params.destinationId as string;
  
  const [activeTab, setActiveTab] = useState("overview");
  const [activeGalleryCategory, setActiveGalleryCategory] = useState("all");
  const [isTabsSticky, setIsTabsSticky] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (tabsRef.current) {
        const tabsTop = tabsRef.current.getBoundingClientRect().top;
        // Add threshold to prevent flickering at boundary
        setIsTabsSticky(tabsTop <= 80); // 80px is the navbar height
      }
    };

    // Throttle scroll events to reduce flickering
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    // Scroll to content with offset for sticky navbar and tabs
    if (contentRef.current) {
      const offset = 180; // navbar (80px) + tabs height (~100px)
      const elementPosition = contentRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Get destination data from centralized data file
  const destinationData = getDestinationDetail(destinationId);

  // If destination not found, show error
  if (!destinationData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* <Navbar /> */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
          <p className="text-gray-600 mb-8">The destination you're looking for doesn't exist.</p>
          <Link href="/destinations">
            <button className="px-6 py-3 bg-[#1BA5B8] text-white rounded-lg hover:bg-[#0A4D5C]">
              Browse All Destinations
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const destination = destinationData;

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen || !destination) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const filteredImages = destination.gallery.all.filter(
        (img: { category: string }) => activeGalleryCategory === "all" || img.category === activeGalleryCategory
      );

      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, activeGalleryCategory, destination]);

  const weatherIcons = {
    flower: Sun,
    sun: Sun,
    leaf: Cloud,
    snow: Snowflake
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl w-full">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {/* Featured Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-[#FFD84D] rounded-full"></div>
                  <span className="text-white/90 text-xs uppercase tracking-[0.2em] font-medium">
                    Featured Destination
                  </span>
                </motion.div>

                {/* Destination Name */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white font-ubuntu leading-none uppercase">
                  {destination.name}
                </h1>

                {/* Tagline */}
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-2xl">
                  {destination.tagline}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {destination.tags.map((tag: string, index: number) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs font-medium uppercase tracking-wider"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8"
                >
                  <Link href={`/tours?search=${destination.name}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="cursor-pointer px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-2xl hover:shadow-white/20 transition-all text-sm flex items-center gap-3 group uppercase tracking-wider"
                    >
                      VIEW TOURS
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Right Side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 right-8 md:right-16 z-10 flex flex-col items-center gap-3"
        >
          <p className="text-white/70 text-xs uppercase tracking-widest">Scroll to Explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-2 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-200 pt-20">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#1BA5B8] transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/destinations" className="text-gray-600 hover:text-[#1BA5B8] transition-colors">
              Destinations
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{destination.name}</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Tab Navigation */}
          <div 
            ref={tabsRef}
            className={`flex flex-wrap gap-4 mb-12 border-b border-gray-200 overflow-x-auto transition-all duration-300 ${
              isTabsSticky 
                ? "sticky top-20 bg-white z-40 shadow-md py-4 -mx-4 px-4" 
                : ""
            }`}
          >
            {["overview", "attractions", "gallery", "weather", "things-to-do", "travel-guide", "faq"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`cursor-pointer pb-4 px-2 text-sm font-semibold uppercase tracking-wider transition-colors relative whitespace-nowrap ${
                  activeTab === tab
                    ? "text-[#1BA5B8] border-b-2 border-[#1BA5B8]"
                    : "text-gray-600 hover:text-[#1BA5B8]"
                }`}
              >
                {tab.replace(/-/g, " ")}
              </button>
            ))}
          </div>

          {/* Content Container */}
          <div ref={contentRef}>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-16"
            >
              {/* Quick Facts */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-ubuntu">Quick Facts</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {[
                    { label: "Best Time", value: destination.quickFacts.bestTime, icon: "🌤️" },
                    { label: "Language", value: destination.quickFacts.language, icon: "💬" },
                    { label: "Currency", value: destination.quickFacts.currency, icon: "💰" },
                    { label: "Timezone", value: destination.quickFacts.timezone, icon: "🕐" },
                    { label: "Visa", value: destination.quickFacts.visa, icon: "📝" },
                    { label: "Airport", value: destination.quickFacts.airport, icon: "✈️" }
                  ].map((fact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-gradient-to-br from-[#1BA5B8]/5 to-[#FFD84D]/5 rounded-xl p-4 border border-[#1BA5B8]/10 text-center"
                    >
                      <div className="text-2xl mb-2">{fact.icon}</div>
                      <div className="text-xs text-gray-500 mb-1">{fact.label}</div>
                      <div className="text-xs font-medium text-[#0A4D5C]">{fact.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* About Section */}
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 font-ubuntu">
                    About {destination.name}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {destination.longDescription}
                  </p>
                  <div className="bg-gradient-to-br from-[#1BA5B8]/5 to-[#0A4D5C]/5 rounded-2xl p-6 border border-[#1BA5B8]/20">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Why Visit {destination.name}?</h3>
                    <ul className="space-y-3">
                      {destination.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1 p-1 bg-[#1BA5B8] rounded-full">
                            <Star className="w-3 h-3 text-white fill-white" />
                          </div>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <img
                    src={destination.gallery.all[0].url}
                    alt={destination.gallery.all[0].caption}
                    className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    {destination.gallery.all.slice(1, 3).map((image, index) => (
                      <img
                        key={index}
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-[190px] object-cover rounded-xl shadow-md"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Video Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-ubuntu">Experience {destination.name}</h2>
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src={destination.videoUrl}
                    title="Destination Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-2xl"
                  ></iframe>
                </div>
              </div>

              {/* Cultural Insights */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-ubuntu">Cultural Insights</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {destination?.culturalInsights?.map((insight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#1BA5B8]/30 transition-colors shadow-md"
                    >
                      <h3 className="text-lg font-bold text-[#0A4D5C] mb-3 font-ubuntu">{insight.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{insight.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Itinerary Tab */}
          {activeTab === "itinerary" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4 font-ubuntu">Sample Itinerary</h2>
                <p className="text-gray-600 text-lg">A carefully curated journey through the best of {destination.name}</p>
              </div>
              {/* <div className="space-y-6">
                {destination.itinerary.map((day, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C] p-8 md:w-32 flex flex-row md:flex-col items-center justify-center gap-3 md:gap-2">
                        <div className="text-white/70 text-sm font-medium">Day</div>
                        <div className="text-white text-5xl font-bold font-ubuntu">{day.day}</div>
                      </div>
                      <div className="flex-1 p-8">
                        <h3 className="text-2xl font-bold text-[#0A4D5C] mb-4 font-ubuntu">{day.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{day.description}</p>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">Highlights</h4>
                          <div className="flex flex-wrap gap-2">
                            {day.highlights.map((highlight, hIndex) => (
                              <span
                                key={hIndex}
                                className="px-3 py-1.5 bg-[#1BA5B8]/10 text-[#0A4D5C] text-sm rounded-full border border-[#1BA5B8]/20"
                              >
                                ✓ {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div> */}
              <div className="bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-3 font-ubuntu">This is Just a Sample!</h3>
                <p className="text-lg mb-6 text-white/90">All our itineraries are fully customizable. We'll work with you to create your perfect Kashmir experience.</p>
                <button className="px-8 py-3 bg-white text-[#0A4D5C] font-bold rounded-lg hover:bg-[#FFD84D] transition-colors">
                  Customize Your Trip
                </button>
              </div>
            </motion.div>
          )}

          {/* Attractions Tab */}
          {activeTab === "attractions" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 font-ubuntu">Must-Visit Attractions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destination.attractions.map((attraction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#1BA5B8]/30 transition-all hover:shadow-xl group"
                  >
                    <div className="relative h-56">
                      <img
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {attraction.mustVisit && (
                        <div className="absolute top-4 right-4 bg-[#FFD84D] text-[#0A4D5C] px-3 py-1 rounded-full text-xs font-bold">
                          Must Visit ⭐
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 font-ubuntu">{attraction.name}</h3>
                      <p className="text-gray-600 text-sm">{attraction.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Cuisine Tab */}
          {activeTab === "cuisine" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3 font-ubuntu">Local Cuisine</h2>
                <p className="text-gray-600">Savor the authentic flavors and traditional dishes of {destination.name}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {destination.cuisine.map((dish, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#1BA5B8]/30 transition-all hover:shadow-xl group"
                  >
                    <div className="relative h-48">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#0A4D5C]">
                        {dish.type}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-bold text-gray-900 mb-2 font-ubuntu">{dish.name}</h3>
                      <p className="text-gray-600 text-xs">{dish.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Gallery Tab */}
          {activeTab === "gallery" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-ubuntu">Photo Gallery</h2>
                {/* Gallery Categories */}
                {/* <div className="flex gap-3 flex-wrap">
                  {["all", "landscapes", "culture", "adventure", "cuisine"].map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveGalleryCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm capitalize transition-colors font-medium ${
                        activeGalleryCategory === category
                          ? "bg-[#1BA5B8] text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div> */}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destination.gallery.all
                  .filter(img => activeGalleryCategory === "all" || img.category === activeGalleryCategory)
                  .map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                      onClick={() => {
                        setLightboxIndex(index);
                        setLightboxOpen(true);
                      }}
                    >
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          {/* <p className="text-white font-semibold">{image.caption}</p> */}
                          <Camera className="w-5 h-5 text-white/80 mt-2" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>

              {/* Lightbox Modal */}
              {lightboxOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
                  onClick={() => setLightboxOpen(false)}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setLightboxOpen(false)}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>

                  {/* Previous Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const filteredImages = destination.gallery.all.filter(
                        img => activeGalleryCategory === "all" || img.category === activeGalleryCategory
                      );
                      setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
                    }}
                    className="absolute left-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>

                  {/* Image */}
                  <motion.div
                    key={lightboxIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="relative max-w-[90vw] max-h-[85vh]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={
                        destination.gallery.all.filter(
                          img => activeGalleryCategory === "all" || img.category === activeGalleryCategory
                        )[lightboxIndex]?.url
                      }
                      alt={
                        destination.gallery.all.filter(
                          img => activeGalleryCategory === "all" || img.category === activeGalleryCategory
                        )[lightboxIndex]?.caption
                      }
                      className="max-w-full max-h-[85vh] object-contain rounded-lg"
                    />
                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                      {lightboxIndex + 1} / {destination.gallery.all.filter(
                        img => activeGalleryCategory === "all" || img.category === activeGalleryCategory
                      ).length}
                    </div>
                  </motion.div>

                  {/* Next Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const filteredImages = destination.gallery.all.filter(
                        img => activeGalleryCategory === "all" || img.category === activeGalleryCategory
                      );
                      setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
                    }}
                    className="absolute right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Weather Tab */}
          {activeTab === "weather" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-ubuntu">
                When to Visit {destination.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {destination.weather.map((season, index) => {
                  const Icon = weatherIcons[season.icon as keyof typeof weatherIcons];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#1BA5B8] transition-all"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{season.season}</h3>
                        {/* <Icon className="w-8 h-8 text-[#1BA5B8]" /> */}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{season.months}</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Temperature</span>
                          <span className="font-semibold text-[#0A4D5C]">{season.temp}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Rainfall</span>
                          {/* <span className="font-semibold text-[#0A4D5C]">{season.rainfall}</span> */}
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-4 leading-relaxed">{season.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Things to Do Tab */}
          {activeTab === "things-to-do" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-ubuntu">
                Top Things to Do in {destination.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {destination?.thingsToDo?.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group"
                  >
                    <div className="relative h-[250px] overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 px-4 py-2 bg-[#FFD84D] text-[#0A4D5C] font-bold rounded-full shadow-lg">
                        {activity.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                      <p className="text-gray-600 mb-4">{activity.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{activity.duration}</span>
                        </div>
                        {/* <button className={` ${THEME.button.primary} px-6 py-2 text-white font-semibold rounded-lg hover:shadow-lg transition-all`}>
                          Book Now
                        </button> */}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Travel Guide Tab */}
          {activeTab === "travel-guide" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-16"
            >
              {/* Accommodation */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-ubuntu">Where to Stay</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {destination.accommodation.map((acc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-[#1BA5B8]/5 to-[#FFD84D]/5 rounded-xl p-6 border border-[#1BA5B8]/10 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-[#0A4D5C] font-ubuntu">{acc.type}</h3>
                         <div className="flex items-center gap-1">
                          <span className="text-[#FFD84D]">⭐</span>
                          {/* <span className="text-sm font-medium">{acc.rating}</span> */}
                        </div>
                      </div>
                    {/*  <p className="text-gray-600 text-sm mb-3">{acc.description}</p>
                      <div className="text-[#1BA5B8] font-semibold text-lg">{acc.priceRange}</div> */}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Transportation */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-ubuntu">Getting There & Around</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {destination?.transportation?.map((trans, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#1BA5B8]/30 transition-colors shadow-md"
                    >
                      <div className="text-4xl mb-4">{trans.icon === "plane" ? "✈️" : trans.icon === "car" ? "🚗" : "🚕"}</div>
                      <h3 className="text-lg font-bold text-[#0A4D5C] mb-3 font-ubuntu">{trans.mode}</h3>
                      <p className="text-gray-600 text-sm">{trans.details}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Travel Tips */}
             {/* <div>
                 <h2 className="text-3xl font-bold text-gray-900 mb-8 font-ubuntu">Essential Travel Tips</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destination.travelTips.map((tip, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#1BA5B8]/30 transition-colors shadow-md"
                    >
                      <div className="w-12 h-12 bg-[#1BA5B8]/10 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">
                          {tip.icon === "shield" ? "🛡️" : 
                           tip.icon === "wallet" ? "💰" : 
                           tip.icon === "clothes" ? "👔" : 
                           tip.icon === "phone" ? "📱" : 
                           tip.icon === "medicine" ? "💊" : "📷"}
                        </span> 
                      </div>
                       <h3 className="text-base font-bold text-[#0A4D5C] mb-2 font-ubuntu">{tip.title}</h3> 
                      <p className="text-gray-600 text-sm">{tip.tip}</p>
                    </motion.div>
                  ))}
                </div>
              </div>*/}
            </motion.div>
          )}

          {/* FAQ Tab */}
          {activeTab === "faq" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8 max-w-4xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 font-ubuntu">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {destination.faq?.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#0A4D5C] mb-3 flex items-start gap-3 font-ubuntu">
                        <span className="text-[#1BA5B8]">Q.</span>
                        {item.question}
                      </h3>
                      <p className="text-gray-600 pl-7 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          </div>
          {/* End Content Container */}
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <span className="text-[#1BA5B8] font-semibold text-sm uppercase tracking-wider">ESCAPE THE ORDINARY</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4 font-ubuntu">
              Travel Stories & Guides
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover insider tips, travel guides, and inspiring stories about {destination.name}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destination.relatedPosts?.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#FFD84D] text-[#0A4D5C] px-3 py-1 rounded-full text-xs font-bold">
                    {post.readTime}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-3">{post.date}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 font-ubuntu line-clamp-2 group-hover:text-[#1BA5B8] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                  <button className="text-[#1BA5B8] font-semibold text-sm hover:gap-3 flex items-center gap-2 transition-all">
                    Continue Reading
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4 font-ubuntu">
              Explore {destination.name} Tours
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our curated collection of tours and experiences in {destination.name}
            </p>
          </div>
          <SimilarTours tours={[]} />
        </div>
      </section>

      {/* Enhanced Testimonials */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <span className="text-[#1BA5B8] font-semibold text-sm uppercase tracking-wider">TRAVELER STORIES</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4 font-ubuntu">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from real travelers who explored {destination.name} with us
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Williams",
                location: "London, UK",
                rating: 5,
                text: "Kashmir exceeded all my expectations! The houseboats, the gardens, the people - everything was magical. Our guide was knowledgeable and the entire trip was seamlessly organized. The Shikara ride at sunset was the highlight of my year!",
                image: "https://i.pravatar.cc/150?img=1"
              },
              {
                name: "Michael Chen",
                location: "Singapore",
                rating: 5,
                text: "Absolutely breathtaking destination! The snow-capped mountains, pristine valleys, and warm hospitality made this trip unforgettable. Gulmarg's gondola ride was phenomenal. Highly recommend for anyone seeking natural beauty and adventure.",
                image: "https://i.pravatar.cc/150?img=2"
              },
              {
                name: "Emma Rodriguez",
                location: "Barcelona, Spain",
                rating: 5,
                text: "Paradise on Earth is not just a tagline - it's reality! From the floating gardens of Dal Lake to the saffron fields, every moment was picture-perfect. The food was incredible, and the cultural experiences were enriching. Can't wait to return!",
                image: "https://i.pravatar.cc/150?img=3"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFD84D] text-[#FFD84D]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact & Inquiry Form */}
      <section id="contact" className={`${THEME.section.uniformBlue} py-20`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <span className="text-white/70 font-semibold text-sm uppercase tracking-wider">DISCOVER YOUR NEXT ADVENTURE</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4 font-ubuntu">
              Plan Your {destination.name} Journey
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let our travel experts create a personalized itinerary just for you
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.a
                href="tel:+916005571959"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="p-4 bg-white/20 rounded-full group-hover:bg-white/30 transition-all">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Call Us Anytime</div>
                  <div className="text-xl font-bold text-white">+91 6005 571959</div>
                </div>
              </motion.a>
              <motion.a
                href="mailto:info@journeu.com"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="p-4 bg-white/20 rounded-full group-hover:bg-white/30 transition-all">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Email Us</div>
                  <div className="text-xl font-bold text-white">info@journeu.com</div>
                </div>
              </motion.a>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 font-ubuntu">Why Choose Us?</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFD84D]">✓</span>
                    <span>Personalized itineraries tailored to your preferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFD84D]">✓</span>
                    <span>Expert local guides with deep cultural knowledge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFD84D]">✓</span>
                    <span>24/7 support throughout your journey</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFD84D]">✓</span>
                    <span>Best prices with no hidden costs</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Inquiry Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-ubuntu">Send Us an Inquiry</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1BA5B8] focus:ring-2 focus:ring-[#1BA5B8]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1BA5B8] focus:ring-2 focus:ring-[#1BA5B8]/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+91 6005 571959"
                    required
                    pattern="[\d\s+()-]{10,}"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1BA5B8] focus:ring-2 focus:ring-[#1BA5B8]/20 outline-none transition-all"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date *</label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1BA5B8] focus:ring-2 focus:ring-[#1BA5B8]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers *</label>
                    <input
                      type="number"
                      placeholder="2"
                      min="1"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1BA5B8] focus:ring-2 focus:ring-[#1BA5B8]/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your dream Kashmir trip..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1BA5B8] focus:ring-2 focus:ring-[#1BA5B8]/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`${THEME.button.primary} cursor-pointer w-full py-4 text-white font-bold rounded-lg hover:shadow-xl transition-all text-lg`}
                >
                  Submit Inquiry
                </button>
                <p className="text-xs text-gray-500 text-center">We'll respond within 24 hours with a customized proposal</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <TrustedPartners />
        </div>
      </section>

      <Footer />
    </div>
  );
}
