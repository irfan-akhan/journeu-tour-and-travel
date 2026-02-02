"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  place: string;
  avatar: string;
}

interface ServiceTestimonialsProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  testimonials?: Testimonial[];
}

export default function ServiceTestimonials({
  eyebrow = "Customer Reviews",
  title = "Loved By Travelers",
  description = "Real experiences from our valued customers",
  testimonials = [
    { 
      name: "Rebecca", 
      rating: 5, 
      text: "My experience JOURNEU was truly exceptional from start to finish. Everything was thoughtfully planned, clearly communicated, and executed with great care. What stood out the most was their responsiveness and personal touch—they were always available and ensured our journey was stress-free and memorable. We felt valued as customers, not just clients. Highly recommended for anyone looking for a seamless, trustworthy, and enriching travel experience. We look forward to traveling with them again!",
      place: "Uttrakhand, Dehradun",
      avatar: "from-blue-400 to-cyan-500" 
    },
    { 
      name: "M Pradyumn Prabhu", 
      rating: 5, 
      place: "Manglore",
      text: "And its so nice to hear about Imdad A good guide can totally make or break a trip, and it sounds like he went above and beyond for you and your family. That kind of genuine care and hospitality stays with you long after the vacation ends. What was your favorite part of the trip Dal Lake, Gulmarg, Pahalgam, or just soaking in the views everywhere",
      avatar: "from-pink-400 to-rose-500" 
    },
    { 
      name: "Amit Roy", 
      rating: 5, 
      place: "Bhopal Madhya Pradesh",
      text: "Our trip was flawlessly organized, thoughtful, and deeply personal. From the moment we arrived, everything felt seamless—well-planned itineraries, comfortable stays, and experiences that truly reflected the local culture. Every detail was handled with professionalism, yet the experience never felt commercial—it felt real, warm, and meaningful. Thanks to this team, we didn’t just visit a destination, we experienced it. Highly recommended for anyone seeking authentic and stress-free travel.",
      avatar: "from-purple-400 to-indigo-500" 
    },
  ]
}: ServiceTestimonialsProps) {
  return (
    <section className="py-28 bg-gradient-to-br from-white via-cyan-50/20 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(27,165,184,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,216,77,0.05)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
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

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white relative overflow-hidden group">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#1BA5B8]/10 to-transparent rounded-bl-full" />
                
                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.avatar} mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
                >
                  {testimonial.name.charAt(0)}
                </motion.div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Review Text */}
<p className="text-gray-700 mb-4 sm:mb-6 italic text-sm sm:text-base leading-relaxed font-light">&quot;{testimonial.text}&quot;</p>
                
                {/* Author & Response */}
                <div className="flex items-center justify-between mt-auto pt-6 border-t-2 border-gray-100">
                  <div>
                      <p className="font-ubuntu font-bold text-base sm:text-lg">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">{testimonial.place}</p>
                  </div>
                  {/* <div className="text-right">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 px-3 py-2 rounded-lg">
                        <p className="text-xs sm:text-sm font-bold text-green-700">{testimonial.response}</p>
                        <p className="text-[10px] sm:text-xs text-green-600">Response</p>
                    </div>
                  </div> */}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
