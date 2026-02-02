"use client";

import THEME from "@/constants/theme";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Shield, Award } from "lucide-react";

export default function WhyTravelWithUs() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "100% Guaranteed Departures",
      description: "Once booked, your trip is guaranteed. We never cancel tours due to minimum numbers.",
    },
    {
      icon: Shield,
      title: "24/7 Emergency Support",
      description: "Round-the-clock assistance throughout your journey. We're always here when you need us.",
    },
    {
      icon: Award,
      title: "Expert Local Guides",
      description: "Licensed professionals with deep local knowledge who bring destinations to life.",
    },
    {
      icon: Calendar,
      title: "Flexible Booking",
      description: "Lifetime deposits and flexible cancellation policies to give you peace of mind.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#1BA5B8]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD84D]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#1BA5B8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Travel Agent
          </span>
          <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-[#0A4D5C] mb-4">
            Why Travel <span className="text-[#1BA5B8]">With Us?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We never take your choice to travel with us for granted. Here's what sets us apart
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`${THEME.section.uniformBlue} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-ubuntu text-xl font-bold text-[#0A4D5C] mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`${THEME.section.uniformBlue} rounded-3xl p-12 text-center`}
        >
          <h3 className="font-ubuntu text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Kashmir Adventure?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who've discovered the magic of Kashmir with Journeu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tours"
              className="px-8 py-4 bg-[#FFD84D] text-[#0A4D5C] font-semibold rounded-full hover:bg-[#FFE066] transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              Browse Our Tours
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 inline-block"
            >
              Plan Custom Trip
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
