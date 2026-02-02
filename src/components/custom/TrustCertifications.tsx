"use client";

import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, CreditCard, LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TrustItem {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  gradient: string;
}

interface Certification {
  name: string;
  color: string;
}

interface TrustCertificationsProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  trustItems?: TrustItem[];
  certificationsTitle?: string;
  certifications?: Certification[];
}

export default function TrustCertifications({
  eyebrow = "Trust & Security",
  title = "Licensed & Certified",
  description = "Your safety and security are our top priorities",
  trustItems = [
    { icon: Shield, title: "Government Approved", subtitle: "Tourism License", gradient: "from-green-400 to-emerald-500" },
    { icon: Award, title: "Industry Member", subtitle: "IATO Certified", gradient: "from-blue-400 to-cyan-500" },
    { icon: CheckCircle, title: "Insured Tours", subtitle: "Full Coverage", gradient: "from-purple-400 to-pink-500" },
    { icon: CreditCard, title: "Secure Payments", subtitle: "SSL Encrypted", gradient: "from-orange-400 to-red-500" },
  ],
  certificationsTitle = "Recognized. Certified. Trusted.",
  certifications = [
    { name: "J&K Tourism", color: "from-blue-500 to-cyan-500" },
    { name: "IATO Member", color: "from-green-500 to-emerald-500" },
    { name: "TAAI Certified", color: "from-purple-500 to-pink-500" },
    { name: "ISO 9001", color: "from-orange-500 to-red-500" },
    { name: "Safe Travel", color: "from-teal-500 to-cyan-500" },
    { name: "Best Rated", color: "from-yellow-500 to-orange-500" }
  ]
}: TrustCertificationsProps) {
  return (
    <section className="py-28 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#1BA5B8] font-semibold mb-4 tracking-[0.3em] uppercase text-sm">
              {eyebrow}
            </p>
            <h2 className="text-5xl md:text-7xl font-ubuntu font-bold mb-6 text-gray-900 leading-tight">
              {title}
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto font-light">
              {description}
            </p>
          </motion.div>
        </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white group">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-xl`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                    <h3 className="font-ubuntu font-bold text-base sm:text-lg mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">{item.subtitle}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Certification Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border-0"
        >
          <h3 className="text-center font-ubuntu font-bold text-2xl md:text-3xl mb-10">{certificationsTitle}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                  className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 rounded-2xl flex items-center justify-center p-3 sm:p-5 text-center text-xs sm:text-sm font-bold text-gray-800 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 group cursor-pointer"
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity`} />
                  <span className="relative">{cert.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
