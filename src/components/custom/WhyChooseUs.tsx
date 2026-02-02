"use client";

import THEME from "@/constants/theme";
import { motion } from "framer-motion";
import { Shield, Award, HeadphonesIcon, Users, MapPin, Heart } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your safety is our priority with 24/7 emergency support and comprehensive travel insurance.",
    },
    {
      icon: Heart,
      title: "Authentic Experiences",
      description: "Discover genuine local culture and hidden gems beyond typical tourist attractions.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock customer support in multiple languages for your convenience.",
    },
    {
      icon: Users,
      title: "Expert Guides",
      description: "Professional, licensed guides with deep local knowledge and expertise.",
    },
    {
      icon: MapPin,
      title: "Best Locations",
      description: "Carefully curated destinations and accommodations for an unforgettable experience.",
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description: "Customized itineraries tailored to your preferences and budget.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-[#0A4D5C] mb-4">
            Why Choose Journeu?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We go beyond expectations to create memorable travel experiences
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#1BA5B8] hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className={`${THEME.section.uniformBlue} w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-ubuntu text-xl font-bold text-[#0A4D5C] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`${THEME.section.uniformBlue} mt-16 rounded-3xl p-12 text-center`}
        >
          <h3 className="font-ubuntu text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Adventure?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let our travel experts craft the perfect Kashmir experience for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-[#FFD84D] text-[#0A4D5C] font-semibold rounded-full hover:bg-[#FFE066] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us Today
            </a>
            <a
              href="tel:+916005571959"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Call: +91 6005 571959
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
