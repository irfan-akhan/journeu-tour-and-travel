"use client";

import THEME from "@/constants/theme";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How do I book a tour with Journeu?",
    answer:
      "Booking is simple! Browse our tour packages, select your preferred dates, fill in your details, and proceed with payment. You can book online through our website, call us directly at +91 6005 571959, or email us at bookings@journeu.com. Our team will confirm your booking within 24 hours and send you a detailed itinerary.",
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer:
      "We accept multiple payment options for your convenience: Credit/Debit cards (Visa, Mastercard, RuPay), Net Banking, UPI (Google Pay, PhonePe, Paytm), Bank transfers, and Cash payments at our office. A 30% advance is required to confirm bookings, with the balance payable 15 days before departure. We also offer EMI options for packages above ₹50,000.",
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 30+ days before departure: 80% refund. 15-29 days: 50% refund. 7-14 days: 30% refund. Less than 7 days: No refund. However, you can reschedule your trip once without charges (subject to availability). For force majeure events, we offer full credit for future bookings. Travel insurance is recommended for additional protection.",
  },
  {
    id: 4,
    question: "What's included in the tour package?",
    answer:
      "Our packages typically include: Accommodation (as per package tier), Daily breakfast and dinner, Private/shared transportation, Professional tour guide, All entry tickets and permits, Airport/railway transfers, GST and service charges. Exclusions: Airfare/train tickets, lunch and drinks, personal expenses, travel insurance, adventure activity charges (unless specified), camera fees at monuments.",
  },
  {
    id: 5,
    question: "Do I need any special permits for Kashmir/Ladakh?",
    answer:
      "For Kashmir: No special permits required for Indian nationals. For Ladakh: Inner Line Permit (ILP) required for certain restricted areas like Nubra Valley, Pangong Lake, and Tso Moriri. We handle all permit applications as part of your package. Foreign nationals require Protected Area Permit (PAP) for some regions. Carry valid photo ID proof at all times.",
  },
  {
    id: 6,
    question: "Is it safe to travel to Kashmir?",
    answer:
      "Yes, Kashmir is safe for tourists. We monitor the situation constantly and only operate tours when conditions are favorable. Our experienced local guides know the area well and ensure your safety. We maintain 24/7 emergency support, travel with proper permits, follow government advisories, and have tie-ups with local authorities. Over 200+ travelers have safely explored Kashmir with us.",
  },
  {
    id: 7,
    question: "What should I pack for my Kashmir trip?",
    answer:
      "Summer (Apr-Jun): Light woolens, sunscreen, sunglasses, comfortable walking shoes. Monsoon (Jul-Aug): Waterproof jacket, umbrella, warm layers. Autumn (Sep-Oct): Medium woolens, layers for varying temperatures. Winter (Nov-Mar): Heavy woolens, thermals, snow boots, gloves, caps. Always pack: Medications, ID proofs, power bank, camera, reusable water bottle, backpack for day trips.",
  },
  {
    id: 8,
    question: "Can I customize my tour itinerary?",
    answer:
      "Absolutely! We specialize in customized tours. Tell us your preferences: Budget range, Duration, Destinations of interest, Activity preferences, Accommodation type, Special requirements (dietary, accessibility). Our travel experts will design a personalized itinerary just for you. Minimum 2 people required for custom group tours. Contact us at least 2 weeks before your travel dates for custom planning.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%231BA5B8' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#1BA5B8]/10 to-[#FFD84D]/10 rounded-full mb-6 border border-[#1BA5B8]/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <HelpCircle className="w-5 h-5 text-[#1BA5B8]" />
            <span className="text-[#1BA5B8] font-bold text-sm tracking-wider uppercase">
              Got Questions?
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-ubuntu">
            Frequently Asked
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1BA5B8] to-[#FFD84D]">
              Questions
            </span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about booking your Kashmir adventure with us
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <motion.div
                className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                  openId === faq.id
                    ? "border-[#1BA5B8] shadow-xl"
                    : "border-gray-200 shadow-md hover:shadow-lg"
                }`}
                whileHover={{ y: -2 }}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <div className="flex items-start gap-4 flex-1">
                    {/* Number Badge */}
                    <motion.div
                      className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        openId === faq.id
                          ? `${THEME.section.uniformBlue} text-white`
                          : "bg-gray-100 text-gray-600 group-hover:bg-[#1BA5B8]/10 group-hover:text-[#1BA5B8]"
                      }`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {String(faq.id).padStart(2, "0")}
                    </motion.div>

                    {/* Question Text */}
                    <h3
                      className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                        openId === faq.id
                          ? "text-[#1BA5B8]"
                          : "text-gray-900 group-hover:text-[#1BA5B8]"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Arrow Icon */}
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown
                      className={`w-6 h-6 transition-colors duration-300 ${
                        openId === faq.id
                          ? "text-[#1BA5B8]"
                          : "text-gray-400 group-hover:text-[#1BA5B8]"
                      }`}
                    />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="pl-14 pr-10">
                          <div className="w-full h-px bg-gradient-to-r from-[#1BA5B8]/30 to-transparent mb-4" />
                          <p className="text-gray-600 leading-relaxed text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className={`${THEME.section.uniformBlue} mt-16 text-center p-10 rounded-3xl shadow-2xl`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-ubuntu">
            Still Have Questions?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Our travel experts are here to help you plan the perfect Kashmir adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              className="px-8 py-4 bg-[#FFD84D] text-[#0A4D5C] font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-[#FFE066] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
            <motion.a
              href="tel:+916005571959"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
