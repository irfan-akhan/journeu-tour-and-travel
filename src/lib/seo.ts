// SEO Constants and Utilities for Journeu Travel Website
// Optimized for Jammu & Kashmir Tourism Competition

export const SITE_CONFIG = {
  name: 'Journeu tour and travels',
  tagline: 'Kashmir and beyond Your Gateway to Heaven on Earth',
  domain: 'https://journeu.com',
  phone: '+91 6005571959',
  email: 'contact@journeu.com',
  address: 'Fajpora Tangmarg, Gulmarg 193403, Jammu and Kashmir India',
};

// Primary Keywords - High Search Volume for J&K Tourism
export const PRIMARY_KEYWORDS = [
  'Kashmir tour packages',
  'Kashmir tourism',
  'Jammu Kashmir tours',
  'Kashmir holiday packages',
  'Kashmir travel packages',
  'Srinagar tour packages',
  'Gulmarg tour packages',
  'Pahalgam tour packages',
  'Leh Ladakh tour packages',
  'Kashmir honeymoon packages',
];

// Secondary Keywords - Location Specific
export const SECONDARY_KEYWORDS = [
  // Kashmir Specific
  'Dal Lake houseboat stay',
  'Gulmarg skiing packages',
  'Sonmarg tour packages',
  'Mughal gardens Srinagar',
  'Kashmir shikara ride',
  'Kashmir valley tour',
  'Srinagar sightseeing',
  'Kashmir adventure tours',

  // Jammu Specific
  'Vaishno Devi tour packages',
  'Patnitop tour packages',
  'Jammu pilgrimage tour',
  'Katra to Vaishno Devi',
  'Jammu temples tour',

  // Ladakh Specific
  'Leh Ladakh bike trip',
  'Pangong Lake tour',
  'Nubra Valley tour',
  'Khardung La pass',
  'Ladakh monastery tour',
  'Magnetic Hill Ladakh',
  'Ladakh adventure tour',
];

// Long-tail Keywords - High Intent
export const LONGTAIL_KEYWORDS = [
  'best Kashmir tour packages from Delhi',
  'Kashmir tour packages for couples',
  'Kashmir family tour packages',
  'luxury Kashmir tour packages',
  'budget Kashmir tour packages',
  'Kashmir tour packages with airfare',
  '7 days Kashmir tour itinerary',
  '5 days Kashmir tour package',
  'Kashmir winter tour packages',
  'Kashmir summer tour packages',
  'Kashmir tulip festival tour',
  'best time to visit Kashmir',
  'Kashmir honeymoon trip cost',
  'Gulmarg skiing season packages',
  'Leh Ladakh road trip packages',
];

// Page-specific SEO configurations
export const PAGE_SEO = {
  home: {
    title: 'Kashmir Tour Packages 2025 | Best Jammu Kashmir Holiday Packages | Journeu',
    description: 'Book best Kashmir tour packages starting ₹15,999. Explore Srinagar, Gulmarg, Pahalgam, Dal Lake houseboats & more. 500+ happy travelers. Customizable Kashmir holiday packages with expert local guides.',
    keywords: [
      ...PRIMARY_KEYWORDS,
      'Kashmir trip planner',
      'Kashmir travel agency',
      'best Kashmir tour operator',
      'Kashmir packages from Delhi',
      'Kashmir packages from Mumbai',
    ],
  },
  about: {
    title: 'About Journeu - Leading Kashmir Tour Operator & Travel Agency',
    description: 'Journeu is a trusted Kashmir travel agency with 10+ years of experience. We specialize in customized Jammu Kashmir tour packages, honeymoon trips, family vacations & adventure tours. 4.9★ rated by 2000+ travelers.',
    keywords: [
      'Kashmir travel agency',
      'Kashmir tour operator',
      'best travel agent in Kashmir',
      'Srinagar travel company',
      'trusted Kashmir tour company',
      'local Kashmir tour guides',
    ],
  },
  tours: {
    title: 'Kashmir Tour Packages 2025 - Best Deals & Offers | Journeu',
    description: 'Explore 50+ curated Kashmir tour packages. From budget-friendly to luxury Kashmir holidays. Includes Srinagar, Gulmarg, Pahalgam, Sonmarg tours. Book now & get 20% early bird discount!',
    keywords: [
      'Kashmir tour packages 2025',
      'Kashmir holiday packages',
      'Srinagar Gulmarg Pahalgam packages',
      'Kashmir group tours',
      'Kashmir private tours',
      'customized Kashmir tours',
      'Kashmir tour deals',
    ],
  },
  destinations: {
    title: 'Explore Jammu Kashmir & Ladakh Destinations | Travel Guide | Journeu',
    description: 'Discover top destinations in Jammu, Kashmir & Ladakh. Complete travel guide to Srinagar, Gulmarg, Pahalgam, Sonmarg, Leh, Pangong Lake & more. Plan your perfect Himalayan getaway.',
    keywords: [
      'Kashmir destinations',
      'places to visit in Kashmir',
      'Jammu tourist places',
      'Ladakh tourist attractions',
      'Kashmir travel guide',
      'best places in Kashmir',
      'Kashmir sightseeing places',
    ],
  },
  kashmir: {
    title: 'Kashmir Tour Packages - Paradise on Earth | Dal Lake, Gulmarg, Pahalgam',
    description: 'Experience Kashmir - Paradise on Earth. Book tour packages for Dal Lake houseboats, Gulmarg skiing, Pahalgam valleys, Mughal gardens & more. Best time: March-October. Starting ₹15,999.',
    keywords: [
      'Kashmir tour packages',
      'Kashmir tourism',
      'Dal Lake tour',
      'Gulmarg packages',
      'Pahalgam tour',
      'Srinagar holiday',
      'Kashmir valley tour',
      'houseboats in Kashmir',
      'shikara ride Kashmir',
    ],
  },
  jammu: {
    title: 'Jammu Tour Packages - Vaishno Devi, Patnitop & Temple Tours',
    description: 'Explore Jammu - City of Temples. Book Vaishno Devi pilgrimage packages, Patnitop hill station tours, Katra packages & more. Spiritual journeys starting ₹8,999. Helicopter bookings available.',
    keywords: [
      'Jammu tour packages',
      'Vaishno Devi packages',
      'Vaishno Devi helicopter booking',
      'Patnitop tour packages',
      'Katra tour packages',
      'Jammu pilgrimage tour',
      'temples in Jammu',
      'Raghunath temple Jammu',
    ],
  },
  ladakh: {
    title: 'Leh Ladakh Tour Packages 2025 - Pangong, Nubra Valley & Bike Trips',
    description: 'Adventure awaits in Ladakh! Book Leh Ladakh tour packages for Pangong Lake, Nubra Valley, Khardung La, monastery tours & bike trips. Best time: May-September. Packages from ₹24,999.',
    keywords: [
      'Leh Ladakh tour packages',
      'Ladakh bike trip',
      'Pangong Lake tour',
      'Nubra Valley tour',
      'Khardung La pass',
      'Ladakh adventure tour',
      'Leh monastery tour',
      'Magnetic Hill Ladakh',
      'Ladakh road trip',
    ],
  },
  contact: {
    title: 'Contact Journeu - Book Kashmir Tour Packages | 24/7 Support',
    description: 'Contact Journeu for Kashmir tour bookings. Call +91 6005571959 or email contact@journeu.com. Free trip consultation. Office: Dal Lake Road, Srinagar. Available 24/7 for inquiries.',
    keywords: [
      'contact Kashmir tour operator',
      'book Kashmir tour',
      'Kashmir travel inquiry',
      'Srinagar tour booking',
      'Kashmir trip consultation',
    ],
  },
};

// Destination-specific SEO
export const DESTINATION_SEO: Record<string, {
  title: string;
  description: string;
  keywords: string[];
}> = {
  kashmir: PAGE_SEO.kashmir,
  jammu: PAGE_SEO.jammu,
  'leh-ladakh': PAGE_SEO.ladakh,
};

// Generate tour-specific SEO
export function generateTourSEO(tour: {
  title: string;
  description?: string;
  duration?: string;
  price?: number;
  highlights?: string[];
}) {
  const priceText = tour.price ? `Starting ₹${tour.price.toLocaleString('en-IN')}` : '';
  const durationText = tour.duration || '';

  return {
    title: `${tour.title} | ${durationText} Kashmir Tour | Journeu`,
    description: tour.description
      ? `${tour.description.slice(0, 140)}... ${priceText}. Book now for best deals!`
      : `Book ${tour.title}. ${durationText} tour with comfortable stays, meals & transfers included. ${priceText}. Expert local guides.`,
    keywords: [
      tour.title.toLowerCase(),
      `${durationText.toLowerCase()} kashmir tour`,
      'kashmir tour package',
      'kashmir holiday',
      ...(tour.highlights?.slice(0, 5).map(h => h.toLowerCase()) || []),
    ],
  };
}

// Open Graph image generator config
export const OG_IMAGE_CONFIG = {
  default: '/images/og-image.jpg',
  kashmir: '/images/og-kashmir.jpg',
  jammu: '/images/og-jammu.jpg',
  ladakh: '/images/og-ladakh.jpg',
  tours: '/images/og-tours.jpg',
  contact: '/images/og-contact.jpg',
};

// Structured data helpers
export function generateBreadcrumbList(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.domain}${item.url}`,
    })),
  };
}

export function generateProductSchema(tour: {
  id: string;
  title: string;
  description?: string;
  price?: number;
  rating?: number;
  reviews?: number;
  image?: string;
  duration?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: tour.title,
    description: tour.description,
    image: tour.image ? `${SITE_CONFIG.domain}${tour.image}` : undefined,
    brand: {
      '@type': 'Brand',
      name: 'Journeu',
    },
    offers: {
      '@type': 'Offer',
      url: `${SITE_CONFIG.domain}/tours/${tour.id}`,
      priceCurrency: 'INR',
      price: tour.price,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Journeu',
      },
    },
    aggregateRating: tour.rating ? {
      '@type': 'AggregateRating',
      ratingValue: tour.rating,
      reviewCount: tour.reviews || 0,
      bestRating: 5,
      worstRating: 1,
    } : undefined,
  };
}

export function generateTourSchema(tour: {
  id: string;
  title: string;
  description?: string;
  price?: number;
  duration?: string;
  image?: string;
  itinerary?: Array<{ day: number; title: string; description: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.title,
    description: tour.description,
    image: tour.image ? `${SITE_CONFIG.domain}${tour.image}` : undefined,
    touristType: ['Leisure', 'Adventure', 'Family'],
    provider: {
      '@type': 'TravelAgency',
      name: 'Journeu',
      url: SITE_CONFIG.domain,
      telephone: SITE_CONFIG.phone,
    },
    offers: {
      '@type': 'Offer',
      price: tour.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${SITE_CONFIG.domain}/tours/${tour.id}`,
    },
    itinerary: tour.itinerary ? {
      '@type': 'ItemList',
      numberOfItems: tour.itinerary.length,
      itemListElement: tour.itinerary.map((day, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: day.title,
        description: day.description,
      })),
    } : undefined,
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.domain}/logo.png`,
    '@id': SITE_CONFIG.domain,
    url: SITE_CONFIG.domain,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dal Lake Road',
      addressLocality: 'Srinagar',
      addressRegion: 'Jammu and Kashmir',
      postalCode: '190001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.0837,
      longitude: 74.7973,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/people/Journeutourandtravels/61584146454761',
      'https://www.instagram.com/journeutourandtravels',
    ],
    priceRange: '₹₹-₹₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      reviewCount: 2500,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

// Canonical URL helper
export function getCanonicalUrl(path: string = '') {
  return `${SITE_CONFIG.domain}${path}`;
}
