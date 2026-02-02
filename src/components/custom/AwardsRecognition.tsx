"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award, Medal } from "lucide-react";

export default function AwardsRecognition() {
  const awards = [
    {
      icon: Trophy,
      year: "2024",
      title: "Best Kashmir Tour Operator",
      organization: "India Tourism Awards",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Star,
      year: "2023",
      title: "Excellence in Sustainable Tourism",
      organization: "J&K Tourism Department",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Award,
      year: "2022",
      title: "Top Rated Travel Agency",
      organization: "TripAdvisor Travelers' Choice",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Medal,
      year: "2021",
      title: "Outstanding Customer Service",
      organization: "Kashmir Chamber of Commerce",
      color: "from-purple-400 to-pink-500",
    },
  ];

  const certifications = [
    "Ministry of Tourism Approved",
    "IATA Certified Agent",
    "Kashmir Tourism Registered",
    "ISO 9001:2015 Certified",
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD84D]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#1BA5B8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Recognition
          </span>
          <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-[#0A4D5C] mb-4">
            Awards & <span className="text-[#1BA5B8]">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Honored to be recognized for our commitment to excellence and responsible tourism
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-[#1BA5B8] hover:shadow-xl transition-all duration-300 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <award.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm text-[#1BA5B8] font-semibold mb-2">{award.year}</div>
                <h3 className="font-ubuntu text-lg font-bold text-[#0A4D5C] mb-2">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-600">{award.organization}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#0A4D5C] to-[#1BA5B8] rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="font-ubuntu text-2xl font-bold text-white mb-2">
              Licensed & Certified
            </h3>
            <p className="text-white/80">
              Officially recognized and certified by leading tourism authorities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-[#FFD84D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-white font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
