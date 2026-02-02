import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Analytics from "@/components/Analytics";
import { generateLocalBusinessSchema } from "@/lib/seo";
import { websiteSchema } from "@/lib/structuredData";
import { Suspense } from "react";
import { ItineraryBuilderProvider } from "@/components/itinerary-builder/context/ItineraryBuilderContext";
import { ItineraryBuilderDrawer } from "@/components/itinerary-builder/ItineraryBuilderDrawer";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://journeu.com'),
  title: {
    default: "Kashmir Tour Packages 2025 | Best Jammu Kashmir Holiday Packages | Journeu",
    template: "%s | Journeu - Kashmir Tours"
  },
  description: "Book best Kashmir tour packages starting ₹15,999. Explore Srinagar, Gulmarg, Pahalgam, Dal Lake houseboats, Leh Ladakh & Vaishno Devi. 500+ happy travelers. Customizable Jammu Kashmir holiday packages with expert local guides. Best Kashmir travel agency.",
  keywords: [
    // Primary Keywords
    "Kashmir tour packages",
    "Kashmir tourism",
    "Jammu Kashmir tours",
    "Kashmir holiday packages",
    "Kashmir travel packages",
    "Srinagar tour packages",
    "Gulmarg tour packages",
    "Pahalgam tour packages",
    "Leh Ladakh tour packages",
    "Kashmir honeymoon packages",
    // Secondary Keywords
    "Dal Lake houseboat",
    "Kashmir shikara ride",
    "Gulmarg skiing",
    "Sonmarg tour",
    "Vaishno Devi packages",
    "Kashmir valley tour",
    "Kashmir adventure tours",
    "Pangong Lake tour",
    "Nubra Valley tour",
    // Long-tail Keywords
    "best Kashmir tour packages from Delhi",
    "Kashmir tour packages for couples",
    "Kashmir family tour packages",
    "luxury Kashmir tour packages",
    "7 days Kashmir tour itinerary",
    "best time to visit Kashmir",
    "Kashmir travel agency",
    "Kashmir tour operator",
  ],
  authors: [{ name: "Journeu - Kashmir Travel Experts" }],
  creator: "Journeu",
  publisher: "Journeu Travel Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://journeu.com",
    siteName: "Journeu - Kashmir Tours",
    title: "Kashmir Tour Packages 2025 | Best Jammu Kashmir Holiday Packages",
    description: "Book best Kashmir tour packages starting ₹15,999. Explore Srinagar, Gulmarg, Pahalgam, Dal Lake & more. 500+ happy travelers. Expert local guides.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kashmir Tour Packages - Journeu Travel",
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: 'https://journeu.com',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
  },
  category: 'Travel & Tourism',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${ubuntu.variable} ${ubuntuMono.variable} antialiased`}
      >
        <ItineraryBuilderProvider>
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
          {children}
          <ItineraryBuilderDrawer />
          <Toaster
            position="top-right"
            richColors
            closeButton
            toastOptions={{
              style: {
                fontFamily: 'var(--font-ubuntu)',
              },
            }}
          />
        </ItineraryBuilderProvider>
      </body>
    </html>
  );
}
