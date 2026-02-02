"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Send, Phone, Mail, Globe, MapPin } from "lucide-react";
import { useState } from "react";
import ContactSidebar from "./ContactSidebar";
import { z } from "zod";
import { toast } from "sonner";
import THEME from "@/constants/theme";

interface ContactFormSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
}

export default function ContactFormSection({
  eyebrow = "Let's Talk With Our Expert Travel Guides",
  title = "We're Just A Message Away",
  description = "Your perfect Kashmir adventure starts here. Share your dreams with us, and our expert travel guides will craft a personalized journey just for you.",
  phoneNumber = "+91 6005 571959",
  email = "contact@journeu.com",
  address = "Dal Lake Road, Srinagar, Kashmir 190001"
}: ContactFormSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation schema
  const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name is too long"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().regex(/^[\d\s+()-]{10,}$/, "Please enter a valid phone number"),
    subject: z.string().min(3, "Subject must be at least 3 characters").max(100, "Subject is too long"),
    message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(formData);
      
      // Call API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }
      
      // Success
      toast.success("Message sent successfully!", {
        description: result.message || "We'll get back to you within 24 hours.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Please fix the errors in the form", {
          description: "Check the highlighted fields below.",
        });
      } else {
        // Handle other errors
        toast.error("Something went wrong!", {
          description: "Please try again later or contact us directly.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-28 bg-white" id="contact-form">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#1BA5B8] font-semibold mb-4 tracking-[0.3em] uppercase text-sm">
              {eyebrow}
            </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-ubuntu font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
              {title}
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto font-light leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
                <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name *</label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={errors.name ? "border-red-500 focus:ring-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={errors.email ? "border-red-500 focus:ring-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                    <Input
                      type="tel"
                      placeholder="+91 XXXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={errors.phone ? "border-red-500 focus:ring-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject *</label>
                    <Input
                      placeholder="Tour Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={errors.subject ? "border-red-500 focus:ring-red-500" : ""}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Your Message *</label>
                  <textarea
                    rows={6}
                    className={`w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1BA5B8] ${
                      errors.message ? "border-red-500 focus:ring-red-500" : ""
                    }`}
                    placeholder="Tell us about your travel plans..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className={`${THEME.section.uniformBlue} w-full gap-2 cursor-pointer`} 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          {/* <ContactSidebar /> */}
        </div>
      </div>
    </section>
  );
}
