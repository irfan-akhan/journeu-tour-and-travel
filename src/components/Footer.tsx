"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  AtSign,
  MessageCircle,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import CallButton from "@/components/custom/CallButton";
import { tours } from "@/data/toursData";
import { SECTION_BACKGROUNDS } from "@/constants/theme";

export default function Footer() {
  // Get first 5 tours
  const popularTours = tours.slice(0, 5);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Subscribed!", {
          description: "You'll receive our latest updates and deals.",
        });
        setEmail("");
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
    <>
      <footer className={`${SECTION_BACKGROUNDS.uniformBlue} text-white relative overflow-hidden`}>
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 30, repeat: Infinity }}
            className="absolute top-20 left-20 w-96 h-96 bg-[#FFD84D] rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 35, repeat: Infinity }}
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-white rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Main Footer Content */}
          <div className="py-20 border-b border-white/10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-left items-start justify-items-start">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-1"
              >
                <div className="mb-6">
                  <img
                    src="/logo_footer.png"
                    alt="Journeu Logo"
                    className="w-80 h-20 object-contain object-left"
                  />
                  {/* <h3 className="text-4xl font-ubuntu font-bold">
                    Journeu
                  </h3> */}
                </div>
                <p className="text-white/80 mb-8 leading-relaxed font-light">
                  Crafting extraordinary journeys through Kashmir & the Himalayas
                  since day one. Where every trip becomes a story worth telling.
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, href: "https://www.facebook.com/people/Journeutourandtravels/61584146454761/" },
                    { icon: Instagram, href: "https://www.instagram.com/journeutourandtravels" },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/10 hover:bg-[#FFD84D] rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h4 className="text-xl font-ubuntu font-bold mb-6">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: "About Us", href: "/about" },
                    { label: "Tour Packages", href: "/tours" },
                    { label: "Destinations", href: "/destinations" },
                    { label: "Contact Us", href: "/contact" },
                    // { label: "Blog", href: "/blog" },
                    // { label: "Careers", href: "/careers" },
                  ].map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-white/80 hover:text-[#FFD84D] transition-colors flex items-center gap-2 font-light"
                      >
                        <span className="w-1.5 h-1.5 bg-[#FFD84D] rounded-full" />
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Popular Tours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h4 className="text-xl font-ubuntu font-bold mb-6">
                  Popular Tours
                </h4>
                <ul className="space-y-3">
                  {popularTours.map((tour, index) => (
                    <li key={index}>
                      <motion.a
                        href={`/tours/${tour.id}`}
                        whileHover={{ x: 5 }}
                        className="text-white/80 hover:text-[#FFD84D] transition-colors flex items-center gap-2 font-light"
                      >
                        <span className="w-1.5 h-1.5 bg-[#FFD84D] rounded-full" />
                        {tour.title}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h4 className="text-xl font-ubuntu font-bold mb-6">
                  Get in Touch
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FFD84D] mt-1 flex-shrink-0" />
                    <p className="text-white/80 font-light">
                      Fajpora Tangmarg, Gulmarg 193403
                      <br />
                      Jammu and Kashmir India
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#FFD84D] flex-shrink-0" />
                    <a
                      href="tel:+916005571959"
                      className="text-white/80 hover:text-[#FFD84D] transition-colors font-light"
                    >
                      +91 6005 571959
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#FFD84D] flex-shrink-0" />
                    <a
                      href="mailto:contact@journeu.com"
                      className="text-white/80 hover:text-[#FFD84D] transition-colors font-light"
                    >
                      contact@journeu.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#FFD84D] flex-shrink-0" />
                    <p className="text-white/80 font-light">Mon - Sun 24*7</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-12 border-b border-white/10"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h4 className="text-3xl font-ubuntu font-bold mb-4">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-white/80 mb-8 font-light">
                Get the latest travel tips, exclusive deals, and destination guides
                delivered to your inbox.
              </p>
              <form className="flex flex-col gap-4 max-w-xl mx-auto" onSubmit={handleNewsletterSubmit}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 py-6 text-lg backdrop-blur"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#FFD84D] text-gray-900 hover:bg-[#FFD84D]/90 px-8 py-6 text-lg font-semibold whitespace-nowrap disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe Now"
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-white/60 text-sm font-light"
              >
                © 2025 Journeu. All rights reserved. Crafted with love for
                travelers.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex gap-6 text-sm"
              >
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                  { label: "Sitemap", href: "/sitemap" },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-white/60 hover:text-[#FFD84D] transition-colors font-light"
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/916005571959?text=Hi%20Journeu,%20I%20would%20like%20to%20inquire%20about%20Kashmir%20tours"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white group"
        suppressHydrationWarning
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Call Button - Mobile Only */}
      <CallButton phoneNumber="+916005571959" />
    </>
  );
}
