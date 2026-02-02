"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import THEME from "@/constants/theme";

interface FAQItem {
  question: string;
  answer: string;
}

interface TourFAQProps {
  faqs: FAQItem[];
}

export default function TourFAQ({ faqs }: TourFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
      <div className="flex items-center gap-4 mb-8">
        <div className={`${THEME.section.uniformBlue} w-2 h-14 rounded-full`}></div>
        <h2 className={`${THEME.section.uniformBlue} font-ubuntu text-4xl font-bold bg-clip-text text-transparent`}>
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#1BA5B8] transition-colors"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left bg-gradient-to-r from-gray-50 to-white hover:from-[#1BA5B8]/5 hover:to-white transition-colors"
            >
              <div className="flex items-start gap-4 flex-1">
                <div className={`${THEME.section.uniformBlue}  p-2 rounded-lg`}>
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
              </div>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-[#1BA5B8]" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 pl-20 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
