"use client";

import { Card } from "@/components/ui/card";
import THEME from "@/constants/theme";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function QuickContactInfo() {
  const contactItems = [
    { icon: Phone, title: "Phone Number", value: "+91 6005 571959", link: "tel:+916005571959" },
    { icon: Mail, title: "Email Address", value: "contact@journeu.com", link: "mailto:contact@journeu.com" },
    { icon: MapPin, title: "Office Location", value: "Tangmarg Gulmarg 193403",  },
    { icon: Clock, title: "Working Hours", value: "Mon - Sun: 24 * 7",  },
  ];

  return (
    <section className="py-20 -mt-0 relative z-20">
      <div className="container mx-auto px-2">
        <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.15, duration: 0.7, ease: "easeOut" }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="block"
              >
                <Card className="p-4 text-center hover:shadow-2xl transition-all duration-500 bg-white border-0 shadow-xl">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className={`${THEME.section.uniformBlue} w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="font-ubuntu font-bold text-md mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-medium">{item.value}</p>
                </Card>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
