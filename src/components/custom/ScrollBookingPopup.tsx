"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ScrollBookingPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const hasTriggered = useRef(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (!hasTriggered.current && window.scrollY > window.innerHeight * 0.85) {
        hasTriggered.current = true;
        setIsOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Please enter your name";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    if (
      !formData.phone.trim() ||
      !phoneRegex.test(formData.phone) ||
      formData.phone.length < 10
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Please enter a message (at least 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: "Booking Enquiry from Homepage",
        message: formData.message,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsOpen(false);
          setIsSuccess(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
        }, 3000);
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
          aria-modal="true"
          role="dialog"
          aria-labelledby="scroll-booking-heading"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-[#0A4D5C] via-[#1BA5B8] to-[#0A4D5C] px-6 py-7 text-white overflow-hidden flex-shrink-0">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FFD84D]/20 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

              {/* Close button — top-right */}
              <button
                onClick={handleClose}
                aria-label="Close booking form"
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/10 hover:bg-white/25 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header content */}
              <div className="relative z-10">
                <h2
                  id="scroll-booking-heading"
                  className="font-ubuntu text-2xl font-bold mb-1"
                >
                  Book With Us Today
                </h2>
                <p className="text-white/80 text-sm">
                  Tell us your travel plans and we&apos;ll craft the perfect experience.
                </p>
              </div>
            </div>

            {/* Scrollable form area */}
            <div className="p-6 overflow-y-auto">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    We&apos;ve received your booking request and will get back to you
                    within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="sbp-name"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="sbp-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 ${
                          errors.name
                            ? "border-red-300 bg-red-50"
                            : "border-gray-200"
                        } focus:border-[#1BA5B8] focus:ring-2 focus:ring-[#1BA5B8]/20 outline-none transition-all`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="sbp-email"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="sbp-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 ${
                          errors.email
                            ? "border-red-300 bg-red-50"
                            : "border-gray-200"
                        } focus:border-[#1BA5B8] focus:ring-2 focus:ring-[#1BA5B8]/20 outline-none transition-all`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="sbp-phone"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="sbp-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                        className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 ${
                          errors.phone
                            ? "border-red-300 bg-red-50"
                            : "border-gray-200"
                        } focus:border-[#1BA5B8] focus:ring-2 focus:ring-[#1BA5B8]/20 outline-none transition-all`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="sbp-message"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="sbp-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Where would you like to go? Any specific dates or requirements?"
                        className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 ${
                          errors.message
                            ? "border-red-300 bg-red-50"
                            : "border-gray-200"
                        } focus:border-[#1BA5B8] focus:ring-2 focus:ring-[#1BA5B8]/20 outline-none transition-all resize-none`}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#0A4D5C] via-[#1BA5B8] to-[#0A4D5C] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Booking Request</span>
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-gray-500 pt-1">
                    We typically respond within 2–4 hours during business hours
                  </p>

                  <div className="mt-3 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <span>Prefer a call?</span>
                      <a
                        href="tel:+916005571959"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1BA5B8]/10 text-[#1BA5B8] font-semibold rounded-lg hover:bg-[#1BA5B8]/20 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call Now</span>
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
