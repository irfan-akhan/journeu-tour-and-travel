"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Phone, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import THEME from "@/constants/theme";

interface CallbackWidgetProps {
  title?: string;
  description?: string;
  averageTime?: string;
}

export default function CallbackWidget({
  title = "Prefer a Call?",
  description = "Skip the form! Share your number and our travel experts will call you back at your preferred time.",
  averageTime = "15 minutes"
}: CallbackWidgetProps) {
  const [phone, setPhone] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    if (!preferredTime) {
      toast.error("Please select a preferred callback time");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, preferredTime }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Callback requested!", {
          description: "Our team will call you at your preferred time.",
        });
        setPhone("");
        setPreferredTime("");
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`${THEME.section.uniformBlue} py-24 relative overflow-hidden`}>
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="p-6 sm:p-10 md:p-16 lg:p-20 shadow-2xl border-0 bg-white/95 backdrop-blur">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`${THEME.section.uniformBlue} w-24 h-24 rounded-3xl flex items-center justify-center mb-8 shadow-2xl`}
                >
                  <Phone className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ubuntu font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
                  {title}
                </h3>
                <p className="text-gray-600 mb-8 text-lg font-light leading-relaxed">
                  {description}
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Average callback time: {averageTime}</span>
                </div>
              </motion.div>
              <motion.form
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                <Input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="text-lg py-6"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={isSubmitting}
                />
                <select
                  className="w-full border-2 border-gray-200 rounded-lg p-4 text-lg focus:border-[#1BA5B8] focus:outline-none transition-colors"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  disabled={isSubmitting}
                >
                  <option value="">Select Preferred Time</option>
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 3 PM)">Afternoon (12 PM - 3 PM)</option>
                  <option value="Evening (3 PM - 6 PM)">Evening (3 PM - 6 PM)</option>
                  <option value="Right Now">Right Now</option>
                </select>
                <Button
                  type="submit"
                  size="lg"
                  className={`${THEME.section.uniformBlue} w-full text-lg py-7 cursor-pointer hover:shadow-xl transition-all duration-300 font-semibold`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Requesting...
                    </>
                  ) : (
                    "Request Callback"
                  )}
                </Button>
              </motion.form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
