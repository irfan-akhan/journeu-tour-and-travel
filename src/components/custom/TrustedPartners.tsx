"use client";

import THEME from "@/constants/theme";
import { motion } from "framer-motion";
import { Shield, Award, CheckCircle2, Users } from "lucide-react";

const partners = [
  {
    id: 1,
    name: "Ministry of Tourism",
    logo: "MOT",
    description: "Government Approved",
  },
  // {
  //   id: 2,
  //   name: "IATA Certified",
  //   logo: "IATA",
  //   description: "International Standards",
  // },
  {
    id: 3,
    name: "TripAdvisor",
    logo: "TA",
    description: "Excellence Award",
  },
  {
    id: 4,
    name: "Tourism Association",
    logo: "TACK",
    description: "Member Since 2022",
  },
  // {
  //   id: 5,
  //   name: "ISO Certified",
  //   logo: "ISO",
  //   description: "9001:2015",
  // },
  // {
  //   id: 6,
  //   name: "Safe Travel",
  //   logo: "ST",
  //   description: "COVID-19 Certified",
  // },
];

const stats = [
  {
    icon: Users,
    value: "200+",
    label: "Happy Travelers",
    color: "from-[#1BA5B8] to-[#0A4D5C]",
  },
  {
    icon: CheckCircle2,
    value: "100%",
    label: "Verified Tours",
    color: "from-[#FFD84D] to-[#FFA500]",
  },
  // {
  //   icon: Award,
  //   value: "10+",
  //   label: "Awards Won",
  //   color: "from-[#0A4D5C] to-[#1BA5B8]",
  // },
  {
    icon: Shield,
    value: "24/7",
    label: "Support Available",
    color: "from-[#1BA5B8] to-[#FFD84D]",
  },
];

export default function TrustedPartners() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%231BA5B8' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
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
            Trusted by Thousands
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-ubuntu">
            Our Certifications & Partners
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Accredited by leading tourism bodies and trusted by travelers worldwide
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center h-full flex flex-col items-center justify-center"
                whileHover={{ y: -5 }}
              >
                {/* Logo Circle */}
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1BA5B8]/10 to-[#0A4D5C]/10 flex items-center justify-center mb-3 group-hover:from-[#1BA5B8]/20 group-hover:to-[#0A4D5C]/20 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-[#1BA5B8] font-bold text-xs font-ubuntu">
                    {partner.logo}
                  </span>
                </motion.div>

                {/* Partner Name */}
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {partner.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500">{partner.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Gradient Background */}
          <div className={`${THEME.section.uniformBlue} absolute inset-0`} />

          {/* Animated Pattern Overlay */}
          <motion.div
            className="absolute inset-0 opacity-10"
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

          {/* Content */}
          <div className="relative z-10 py-12 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {/* Icon */}
                    <motion.div
                      className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm mb-4"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Value */}
                    <motion.h3
                      className="text-4xl md:text-5xl font-bold text-white mb-2 font-ubuntu"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {stat.value}
                    </motion.h3>

                    {/* Label */}
                    <p className="text-white/90 text-sm font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-20 -translate-y-20" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-20 translate-y-20" />
        </motion.div>

        {/* Trust Message */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            <Shield className="w-4 h-4 inline-block mr-2 text-[#1BA5B8]" />
            Your safety and satisfaction are our top priorities. All our tours are fully insured and comply with international safety standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
