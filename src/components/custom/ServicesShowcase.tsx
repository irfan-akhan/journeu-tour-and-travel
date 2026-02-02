"use client";

import { motion } from "framer-motion";
import { Compass, MapPin, Calendar, Shield, Plane, Users } from "lucide-react";
import Link from "next/link";
import { BRAND_GRADIENTS, BUTTON_GRADIENTS, DECORATIVE_GRADIENTS } from "@/constants/theme";

const services = [
  {
    id: 1,
    icon: Users,
    title: "Group Tour Planning",
    description: "Curated group adventures with expert guides across Kashmir's most stunning destinations",
    link: "",
    gradient: "from-[#1BA5B8] to-[#1BA5B8]",
  },
  {
    id: 2,
    icon: MapPin,
    title: "Custom Itineraries",
    description: "Personalized travel plans tailored to your preferences, pace, and budget",
    link: "",
    gradient: "from-[#FFD84D] to-[#FFA500]",
  },
  {
    id: 3,
    icon: Plane,
    title: "Transport",
    description: "Seamless booking of cabs, transfers, and local transportation for hassle-free travel",
    link: "",
    gradient: "from-[#1BA5B8] to-[#1BA5B8]",
  },
  {
    id: 4,
    icon: Calendar,
    title: "Seasonal Packages",
    description: "Exclusive seasonal tours showcasing Kashmir in spring blooms, summer meadows, autumn colors, and winter snow",
    link: "",
    gradient: "from-[#FFD84D] to-[#FFA500]",
  },
  {
    id: 5,
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive coverage and 24/7 emergency support for peace of mind throughout your journey",
    link: "",
    gradient: "from-[#1BA5B8] to-[#1BA5B8]",
  },
  {
    id: 6,
    icon: Compass,
    title: "Adventure Activities",
    description: "Thrilling experiences from trekking to skiing, river rafting to paragliding",
    link: "",
    gradient: "from-[#FFD84D] to-[#FFA500]",
  },
];

export default function ServicesShowcase() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-[#1BA5B8]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#FFD84D]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
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
          <motion.p
            className="text-[#1BA5B8] font-semibold text-sm tracking-wider uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            World Class Services
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-ubuntu">
            Which Services We Provide
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive travel solutions designed to make your Kashmir journey effortless and unforgettable
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* <Link href={service.link}> */}
                  <motion.div
                    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full"
                    whileHover={{ y: -8 }}
                  >
                    {/* Gradient Background on Hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      {/* Icon with Gradient Background */}
                      <motion.div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Service Number Badge */}
                      <div className="absolute top-0 right-0 w-12 h-12 bg-gray-50 rounded-bl-2xl flex items-center justify-center">
                        <span className="text-xl font-bold text-gray-300 font-ubuntu">
                          {String(service.id).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1BA5B8] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Arrow Link */}
                      <motion.div
                        className="inline-flex items-center text-[#1BA5B8] font-semibold group-hover:gap-3 gap-2 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {/* <span>Learn More</span> */}
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                {/* </Link> */}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/services">
            <motion.button
              className={`px-8 py-4 ${BUTTON_GRADIENTS.primary} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
}
