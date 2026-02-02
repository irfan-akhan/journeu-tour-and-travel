"use client";

import { motion } from "framer-motion";
import { Download, FileText, MapPin, Shield, CheckCircle, LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DownloadItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  size: string;
  gradient: string;
}

interface DownloadCenterProps {
  title?: string;
  description?: string;
  downloads?: DownloadItem[];
}

export default function DownloadCenter({
  title = "Download Resources",
  description = "Everything you need to plan your perfect journey",
  downloads = [
    { icon: FileText, title: "Tour Brochures", desc: "Complete catalog of Kashmir tours", size: "8.5 MB PDF", gradient: "from-blue-400 to-cyan-500" },
    { icon: MapPin, title: "Destination Guides", desc: "Travel tips for each location", size: "12.3 MB PDF", gradient: "from-green-400 to-emerald-500" },
    { icon: Shield, title: "Booking Policies", desc: "Terms, conditions & cancellation", size: "2.1 MB PDF", gradient: "from-purple-400 to-pink-500" },
    { icon: CheckCircle, title: "Travel Checklist", desc: "What to pack and prepare", size: "1.8 MB PDF", gradient: "from-orange-400 to-red-500" },
  ]
}: DownloadCenterProps) {
  return (
    <section className="py-28 bg-gradient-to-br from-white via-teal-50/20 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#1BA5B8]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-[#FFD84D]/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C] rounded-2xl mb-6 shadow-xl"
              >
                <Download className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-ubuntu font-bold mb-6 text-gray-900 leading-tight">
                {title}
              </h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto font-light">
                {description}
              </p>
            </motion.div>
          </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {downloads.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Card className="p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer group border-0 shadow-lg bg-white">
                    <div className="flex items-start gap-5">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                          <h3 className="font-ubuntu font-bold text-lg sm:text-xl mb-2">{item.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 font-light">{item.desc}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 font-medium">{item.size}</span>
                          <Button size="sm" className="gap-2 bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] hover:shadow-lg transition-all">
                            <Download className="w-4 h-4" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
