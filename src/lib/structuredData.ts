// Structured Data (JSON-LD) schemas for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Journeu",
  "description": "Luxury travel agency specializing in Kashmir and Himalayas tours",
  "url": "https://journeu.com",
  "logo": "https://journeu.com/logo_footer.png",
  "image": "https://journeu.com/images/og-image.jpg",
  "telephone": "+916005571959",
  "email": "contact@journeu.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dal Lake Road",
    "addressLocality": "Srinagar",
    "addressRegion": "Kashmir",
    "postalCode": "190001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.0837",
    "longitude": "74.7973"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://facebook.com/journeu",
    "https://twitter.com/journeu",
    "https://instagram.com/journeu",
    "https://linkedin.com/company/journeu"
  ],
  "priceRange": "₹₹₹",
  "areaServed": {
    "@type": "Place",
    "name": "Kashmir and Himalayas"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Journeu",
  "url": "https://journeu.com",
  "description": "Luxury Kashmir and Himalayas travel tours",
  "publisher": {
    "@type": "Organization",
    "name": "Journeu"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://journeu.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Journeu",
  "description": "Get in touch with Journeu for Kashmir and Himalayas travel planning",
  "url": "https://journeu.com/contact",
  "mainEntity": {
    "@type": "TravelAgency",
    "name": "Journeu",
    "telephone": "+916005571959",
    "email": "contact@journeu.com"
  }
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const tourPackageSchema = (tourData: {
  name: string;
  description: string;
  price: number;
  currency: string;
  duration: string;
  location: string;
  image: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": tourData.name,
  "description": tourData.description,
  "touristType": "Leisure",
  "offers": {
    "@type": "Offer",
    "price": tourData.price,
    "priceCurrency": tourData.currency,
    "availability": "https://schema.org/InStock"
  },
  "itinerary": {
    "@type": "ItemList",
    "name": tourData.name,
    "description": tourData.duration
  },
  "touristDestination": {
    "@type": "Place",
    "name": tourData.location
  },
  "image": tourData.image,
  "url": tourData.url,
  "provider": {
    "@type": "TravelAgency",
    "name": "Journeu"
  }
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const localBusinessSchema = (office: {
  name: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": office.name,
  "telephone": office.phone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": office.address
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": office.lat,
    "longitude": office.lng
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
});
