"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Play } from "lucide-react";
import THEME from "@/constants/theme";

const testimonials = [
  {
    id: 1,
      name: "Rebecca", 
    location: "Uttrakhand, Dehradun",
    tour: "Solo Trip",
    rating: 5,
    date: "November 2024",
    tripImage: "/gallery/21.png",
    text: "My experience JOURNEU was truly exceptional from start to finish. Everything was thoughtfully planned, clearly communicated, and executed with great care. What stood out the most was their responsiveness and personal touch—they were always available and ensured our journey was stress-free and memorable. We felt valued as customers, not just clients. Highly recommended for anyone looking for a seamless, trustworthy, and enriching travel experience. We look forward to traveling with them again!",
    verified: true,
    videoTestimonial: false,
  },
  {
    id: 2,
    name: "M Pradyumn Prabhu", 
    location: "Manglore",
    tour: "Family Package",
    rating: 5,
    date: "October 2024",
       tripImage: "/gallery/17.png",

    text: "And its so nice to hear about Imdad A good guide can totally make or break a trip, and it sounds like he went above and beyond for you and your family. That kind of genuine care and hospitality stays with you long after the vacation ends. What was your favorite part of the trip Dal Lake, Gulmarg, Pahalgam, or just soaking in the views everywhere",
    verified: true,
    videoTestimonial: false,
  },
  {
    id: 3,
      name: "Amit Roy", 
    location: "Bhopal Madhya Pradesh",
    tour: "Family Fun Package",
    rating: 5,
    date: "December 2024",
       tripImage: "/gallery/19.png",

    text: "Our trip was flawlessly organized, thoughtful, and deeply personal. From the moment we arrived, everything felt seamless—well-planned itineraries, comfortable stays, and experiences that truly reflected the local culture. Every detail was handled with professionalism, yet the experience never felt commercial—it felt real, warm, and meaningful. Thanks to this team, we didn’t just visit a destination, we experienced it. Highly recommended for anyone seeking authentic and stress-free travel.",
    verified: true,
    videoTestimonial: false,
  },
  // {
  //   id: 4,
  //   name: "Sarah Johnson",
  //   location: "London, UK",
  //   tour: "Cultural Heritage Tour",
  //   rating: 5,
  //   date: "September 2024",
  //   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  //   tripImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
  //   text: "As a solo female traveler, I felt completely safe and well-cared for. The cultural tour gave me deep insights into Kashmir's rich heritage. Visiting the Mughal gardens and exploring the old city bazaars was fascinating. The food tours were an unexpected delight!",
  //   verified: true,
  //   videoTestimonial: false,
  // },
  // {
  //   id: 5,
  //   name: "Amit Patel",
  //   location: "Bangalore, Karnataka",
  //   tour: "Kashmir Valley Complete",
  //   rating: 5,
  //   date: "August 2024",
  //   image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
  //   tripImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
  //   text: "This was my third trip with Journeu, and they never disappoint! The complete valley tour covered everything - from houseboats to cable cars to beautiful meadows. Excellent value for money and professional service throughout. Already planning my next trip!",
  //   verified: true,
  //   videoTestimonial: true,
  // },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={`${THEME.section.uniformBlue} relative py-24 overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Star className="w-5 h-5 text-[#FFD84D]" fill="#FFD84D" />
            <span className="text-white font-bold text-sm tracking-wider uppercase">
              Customer Stories
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-ubuntu">
            What Our Travelers
            <br />
            <span className="text-[#FFD84D]">Say About Us</span>
          </h2>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            Real experiences from real travelers who explored Kashmir with us
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            {/* <AnimatePresence initial={false} custom={direction}> */}
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                {/* Left: Trip Image */}
                <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${currentTestimonial.tripImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Video Testimonial Badge */}
                  {currentTestimonial.videoTestimonial && (
                    <motion.div
                      className="absolute top-6 left-6 px-4 py-2 bg-[#FFD84D] rounded-full flex items-center gap-2 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Play className="w-4 h-4 text-gray-900" fill="#0A4D5C" />
                      <span className="text-xs font-bold text-gray-900">Video Review</span>
                    </motion.div>
                  )}

                  {/* Verified Badge */}
                  {currentTestimonial.verified && (
                    <div className="absolute top-6 right-6 px-4 py-2 bg-green-500 rounded-full flex items-center gap-2 shadow-lg">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span className="text-xs font-bold text-white">Verified Traveler</span>
                    </div>
                  )}

                  {/* Tour Name */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl">
                      <p className="text-sm font-bold text-gray-900">{currentTestimonial.tour}</p>
                      <p className="text-xs text-gray-600">{currentTestimonial.date}</p>
                    </div>
                  </div>
                </div>

                {/* Right: Testimonial Content */}
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <Quote className="w-16 h-16 text-[#FFD84D] opacity-50" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-[#FFD84D]" fill="#FFD84D" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light">
                    "{currentTestimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                    <div
                      className="w-16 h-16 rounded-full bg-cover bg-center border-4 border-white/20"
                      // style={{ backgroundImage: `url(${currentTestimonial.image})` }}
                    />
                    <div>
                      <h4 className="text-white font-bold text-lg">{currentTestimonial.name}</h4>
                      <p className="text-white/70 text-sm">{currentTestimonial.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            {/* </AnimatePresence> */}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.button
              onClick={() => paginate(-1)}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-10 h-3 bg-[#FFD84D]"
                      : "w-3 h-3 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={() => paginate(1)}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <p className="text-white/70 text-sm">
              {currentIndex + 1} / {testimonials.length}
            </p>
          </div>
        </div>

        {/* Trust Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[
            { value: "200+", label: "Happy Travelers" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "98%", label: "Satisfaction Rate" },
            // { value: "1,200+", label: "5-Star Reviews" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-black text-[#FFD84D] mb-2 font-ubuntu">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
