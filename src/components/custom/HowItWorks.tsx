"use client";

import THEME from "@/constants/theme";
import { motion } from "framer-motion";
import { Compass, Users, Calendar, Shield, Heart, Award } from "lucide-react";

export default function HowItWorks() {
  const features = [
    {
      icon: Compass,
      title: "Choose Your Adventure",
      description: "Browse our curated collection of Kashmir tours and find the perfect match for your travel style and interests.",
    },
    {
      icon: Calendar,
      title: "Book with Confidence",
      description: "Select your dates, customize your itinerary, and book with our flexible cancellation policy.",
    },
    {
      icon: Users,
      title: "Meet Your Expert Guide",
      description: "Connect with your local guide who will share insider knowledge and authentic experiences.",
    },
    {
      icon: Heart,
      title: "Experience the Magic",
      description: "Immerse yourself in Kashmir's beauty, culture, and hospitality with worry-free travel.",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Safety First",
      description: "24/7 support and comprehensive insurance",
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Max 12 travelers for personalized experience",
    },
    {
      icon: Award,
      title: "Expert Guides",
      description: "Licensed professionals with local expertise",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#1BA5B8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Simple Process
          </span>
          <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-[#0A4D5C] mb-4">
            How It <span className="text-[#1BA5B8]">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From dreaming to discovering, we make your Kashmir journey seamless
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < features.length - 1 && (
                  <div className={`${THEME.section.uniformBlue} hidden md:block absolute top-12 left-[60%] w-full h-0.5`}></div>
                )}

                <div className="text-center relative z-10">
                  {/* Step number */}
                  <div className="inline-block mb-4">
                    <div className={`${THEME.section.uniformBlue} w-24 h-24 rounded-full flex items-center justify-center relative`}>
                      <feature.icon className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFD84D] rounded-full flex items-center justify-center text-[#0A4D5C] font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-ubuntu text-xl font-bold text-[#0A4D5C] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`${THEME.section.uniformBlue} to-[#1BA5B8] rounded-3xl p-12`}
        >
          <div className="text-center mb-10">
            <h3 className="font-ubuntu text-3xl font-bold text-white mb-3">
              What Makes Us Different
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Travel with confidence knowing you're in expert hands
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white text-lg mb-2">{benefit.title}</h4>
                <p className="text-white/80 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
