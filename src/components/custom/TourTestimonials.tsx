"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  role?: string;
  rating: number;
}

interface TourTestimonialsProps {
  testimonials: Testimonial[];
}

export default function TourTestimonials({ testimonials }: TourTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-gradient-to-br from-[#0A4D5C] via-[#1BA5B8] to-[#0A4D5C] rounded-3xl shadow-2xl p-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 bg-[#FFD84D] rounded-full mb-6"
          >
            <Quote className="w-10 h-10 text-[#0A4D5C]" />
          </motion.div>
          <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-white mb-3">
            What Our Travelers Say
          </h2>
          <p className="text-white/80 text-lg">
            Real stories from real adventures
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/20"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-2 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#FFD84D] text-[#FFD84D]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white text-xl md:text-2xl leading-relaxed text-center mb-8 font-light italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFD84D] to-[#FFC700] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-[#0A4D5C] font-bold text-2xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-white font-bold text-xl mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-white/70">
                  {testimonials[currentIndex].location}
                  {testimonials[currentIndex].role && ` • ${testimonials[currentIndex].role}`}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 p-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all shadow-xl"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 p-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all shadow-xl"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all rounded-full ${
                index === currentIndex
                  ? "w-12 h-3 bg-[#FFD84D]"
                  : "w-3 h-3 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
