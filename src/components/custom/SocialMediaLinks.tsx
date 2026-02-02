"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface SocialMediaLinksProps {
  title?: string;
  description?: string;
}

export default function SocialMediaLinks({
  title = "Follow Us",
  description = "Stay connected for travel tips and updates"
}: SocialMediaLinksProps) {
  const socials = [
    { icon: Facebook, color: "hover:bg-blue-600", href: "#" },
    { icon: Twitter, color: "hover:bg-sky-500", href: "#" },
    { icon: Instagram, color: "hover:bg-pink-600", href: "#" },
    { icon: Linkedin, color: "hover:bg-blue-700", href: "#" },
  ];

  return (
    <Card className="p-6 sm:p-8 shadow-lg border-0 bg-white">
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <div className="w-8 h-8 bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C] rounded-lg flex items-center justify-center">
          <Instagram className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-ubuntu font-bold">{title}</h3>
      </div>
      <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5 font-light leading-relaxed">{description}</p>
      <div className="flex gap-2.5 sm:gap-3">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-gray-100 flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white shadow-sm hover:shadow-lg`}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          );
        })}
      </div>
    </Card>
  );
}
