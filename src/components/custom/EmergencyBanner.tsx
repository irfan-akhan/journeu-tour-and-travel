"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <section className="bg-red-600 text-white py-4 relative z-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold">24/7 Emergency Hotline</p>
              <p className="text-sm text-white/90">For travelers in need</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+916005571959" className="font-bold text-xl hover:underline">
              1800-123-456 (Toll Free)
            </a>
            <Badge className="bg-white text-red-600">Active 24/7</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
