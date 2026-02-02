"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const floatingShapes = [
  { size: 60, x: "10%", y: "20%", duration: 8, delay: 0 },
  { size: 40, x: "80%", y: "30%", duration: 10, delay: 1 },
  { size: 80, x: "70%", y: "60%", duration: 12, delay: 2 },
  { size: 50, x: "20%", y: "70%", duration: 9, delay: 1.5 },
  { size: 30, x: "90%", y: "80%", duration: 11, delay: 0.5 },
];

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1BA5B8]/10 to-[#FFD84D]/10 backdrop-blur-sm flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white/30" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
