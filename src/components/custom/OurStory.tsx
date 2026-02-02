"use client";

import THEME from "@/constants/theme";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

export default function OurStory() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To create unforgettable travel experiences that connect people with the breathtaking beauty and rich cultural heritage of Kashmir and the Himalayas, while championing sustainable, responsible, and community-driven tourism.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the leading travel agency in Kashmir, recognized for exceptional service, authentic experiences, and our commitment to preserving the natural beauty and cultural heritage of the region.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Authenticity, Excellence, Sustainability, Customer Care, Local Partnership, and Cultural Respect guide everything we do. We believe in creating value for our travelers, communities, and environment.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Story Content */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-[#0A4D5C] mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-600 text-left">
              <p>
               Founded in 2022, Journeu was born from a deep love for Kashmir&apos;s pristine landscapes and an enduring desire to share this paradise with the world. What began as a small, family-run initiative has grown into one of Kashmir&apos;s most trusted travel agencies, having curated meaningful journeys for 200+ happy travelers from across India.
              </p>
              <p>Rooted in the land itself, our founder—a native Kashmiri with years of experience in hospitality and tourism—identified a growing need for travel experiences that are not only seamless and well-organized, but also genuinely reflective of Kashmir&apos;s soul. Journeu was established with a clear vision: to offer authentic journeys driven by local insight, personalized care, and a commitment to excellence.</p>
              <p>
              Today, Journeu stands on the strength of its deep local knowledge, enduring relationships with communities across Kashmir and the Himalayas, and a passionate team of travel experts who go the extra mile. Every experience we design is thoughtfully crafted, detail-driven, and guided by a sincere desire to showcase the very best of this magnificent region—its landscapes, its culture, and its people.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`${THEME.section.uniformBlue} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-ubuntu text-2xl font-bold text-[#0A4D5C] mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
