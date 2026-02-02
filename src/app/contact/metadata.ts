import type { Metadata } from "next";
import { contactPageSchema, breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Travel Experts",
  description: "Contact Journeu for personalized Kashmir and Himalayas tour packages. Available 24/7 with expert travel guides ready to help plan your perfect journey.",
  keywords: ["contact journeu", "kashmir travel contact", "tour booking", "travel inquiry", "kashmir tour operator contact"],
  openGraph: {
    title: "Contact Journeu - Kashmir & Himalayas Travel Experts",
    description: "Get in touch with our expert team for personalized Kashmir travel planning. 24/7 support available.",
    url: "https://journeu.com/contact",
    images: [
      {
        url: "/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Journeu Travel Agency",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Journeu - Kashmir Travel Experts",
    description: "Get in touch for personalized Kashmir tour planning.",
  },
  alternates: {
    canonical: "https://journeu.com/contact",
  },
};

// Export structured data for the page
export const contactStructuredData = [
  contactPageSchema,
  breadcrumbSchema([
    { name: "Home", url: "https://journeu.com" },
    { name: "Contact", url: "https://journeu.com/contact" }
  ])
];
