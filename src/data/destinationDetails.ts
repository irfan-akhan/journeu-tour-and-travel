// Comprehensive destination detail data for Kashmir, Jammu, and Ladakh regions

export interface DestinationDetail {
  id: string;
  name: string;
  region: string;
  country: string;
  tagline: string;
  tags: string[];
  description: string;
  longDescription: string;
  heroImage: string;
  startingPrice: number;
  videoUrl?: string;
  quickFacts: {
    bestTime: string;
    language: string;
    currency: string;
    timezone: string;
    visa: string;
    airport: string;
  };
  gallery: {
    all: Array<{
      url: string;
      caption: string;
      category: string;
    }>;
  };
  highlights: string[];
  attractions: Array<{
    name: string;
    description: string;
    image: string;
    mustVisit: boolean;
  }>;
  cuisine: Array<{
    name: string;
    description: string;
    image: string;
    type: string;
  }>;
  activities: Array<{
    name: string;
    description: string;
    icon: string;
  }>;
  accommodation: Array<{
    type: string;
    description: string;
    priceRange: string;
    rating: string;
  }>;
  travelTips: Array<{
    icon: string;
    title: string;
    tip: string;
  }>;
  weather: Array<{
    season: string;
    months: string;
    temp: string;
    rainfall: string;
    icon: string;
    description: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  culturalInsights: Array<{
    title: string;
    description: string;
  }>;
  relatedPosts: Array<{
    title: string;
    excerpt: string;
    image: string;
    date: string;
    readTime: string;
  }>;
  stats: {
    tours: string;
    visitors: string;
    rating: string;
    guides: string;
  };
  transportation: Array<{
    mode: string;
    details: string;
    icon: string;
  }>;
  thingsToDo: Array<{
    title: string;
    description: string;
    image: string;
    duration: string;
    price: string;
  }>;
}

export const destinationDetails: Record<string, DestinationDetail> = {
  // KASHMIR DESTINATIONS
  "srinagar": {
    culturalInsights: [
      { title: "Kashmiri Handicrafts", description: "Srinagar is renowned for its exquisite handicrafts, including Pashmina shawls, carpets, and papier-mâché art." },
      { title: "Mughal Heritage", description: "The city’s gardens and architecture reflect a rich Mughal legacy." },
      { title: "Lake Culture", description: "Life on Dal Lake with houseboats and floating markets is unique to Srinagar." }
    ],
    cuisine: [
      { name: "Rogan Josh", description: "Aromatic lamb curry with Kashmiri spices", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", type: "Main Course" },
      { name: "Kahwa", description: "Traditional Kashmiri green tea with saffron", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" },
      { name: "Wazwan", description: "Multi-course traditional feast", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400", type: "Main Course" }
    ],
    weather: [
      { season: "Spring", months: "March-May", temp: "15-25°C", rainfall: "80mm", icon: "🌸", description: "Pleasant weather, blooming gardens" },
      { season: "Summer", months: "June-August", temp: "20-30°C", rainfall: "60mm", icon: "☀️", description: "Peak tourist season, ideal for sightseeing" },
      { season: "Autumn", months: "September-November", temp: "10-20°C", rainfall: "40mm", icon: "🍂", description: "Clear skies, colorful foliage" },
      { season: "Winter", months: "December-February", temp: "-2 to 10°C", rainfall: "30mm", icon: "❄️", description: "Snow-covered, cold but beautiful" }
    ],
    thingsToDo: [
      { title: "Shikara Ride", description: "Enjoy a peaceful boat ride on Dal Lake.", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800", duration: "1 hour", price: "₹500" },
      { title: "Mughal Garden Tour", description: "Explore the famous Mughal gardens.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", duration: "2 hours", price: "₹300" },
      { title: "Houseboat Stay", description: "Experience a night on a traditional houseboat.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", duration: "Overnight", price: "₹2500+" }
    ],
    accommodation: [
      { type: "Houseboat", description: "Traditional wooden houseboats on Dal Lake with modern amenities.", priceRange: "₹2000-₹10000/night", rating: "4.7/5" },
      { type: "Hotel", description: "Luxury and boutique hotels in the city.", priceRange: "₹3000-₹15000/night", rating: "4.5/5" }
    ],
    transportation: [
      { mode: "By Air", details: "Sheikh ul-Alam International Airport connects Srinagar to major cities.", icon: "✈️" },
      { mode: "By Road", details: "Well-connected by road to Jammu and other cities.", icon: "🚌" },
      { mode: "By Rail", details: "Nearest major railway station is Jammu Tawi.", icon: "🚆" }
    ],
    travelTips: [
      { icon: "📅", title: "Book Early", tip: "Book houseboat stays in advance during peak season." },
      { icon: "🧣", title: "Dress Modestly", tip: "Respect local customs and dress modestly." },
      { icon: "🍽️", title: "Try Local Cuisine", tip: "Don’t miss the authentic Wazwan feast." },
      { icon: "💵", title: "Carry Cash", tip: "Some areas have limited card facilities." }
    ],
    faq: [
      { question: "Is Srinagar safe for tourists?", answer: "Yes, Srinagar is generally safe for tourists. However, it's advisable to check current travel advisories and follow local guidelines." },
      { question: "What is the best time to visit?", answer: "March to October is ideal, with April-June being the peak season for pleasant weather." },
      { question: "How many days are enough?", answer: "3-5 days are recommended to explore Srinagar and nearby attractions comfortably." }
    ],
    relatedPosts: [
      { title: "Top 10 Things to Do in Srinagar", excerpt: "Explore the best experiences in Srinagar, from shikara rides to Mughal gardens.", image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800", date: "2025-06-10", readTime: "5 min" },
      { title: "A Guide to Houseboat Stays", excerpt: "Everything you need to know about staying on a houseboat in Dal Lake.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", date: "2025-07-15", readTime: "4 min" }
    ],
    stats: {
      tours: "45+",
      visitors: "100K+",
      rating: "4.8/5",
      guides: "30+"
    },
    id: "srinagar",
    name: "Srinagar",
    region: "Kashmir",
    country: "India",
    tagline: "Experience the timeless beauty of Dal Lake and its iconic houseboats, where Mughal heritage meets Himalayan serenity.",
    tags: ["DAL LAKE", "HOUSEBOATS", "MUGHAL GARDENS"],
    description: "Discover the breathtaking beauty of Srinagar, nestled in the Himalayas. Experience stunning lakes, rich culture, and warm hospitality.",
    longDescription: "Srinagar, the summer capital of Kashmir, is often called 'Paradise on Earth'. The city is renowned for its serene Dal Lake with traditional houseboats, exquisite Mughal gardens, and rich cultural heritage. From the serene Dal Lake to the historic Mughal gardens, every corner of Srinagar tells a story. The region is famous for its traditional handicrafts, warm hospitality, and breathtaking natural beauty.",
    heroImage: "/destinations/kashmir/srinagar/02.jpg",
    startingPrice: 299,
    videoUrl: "https://www.youtube.com/embed/cAFzSQwFjXk",
    quickFacts: {
      bestTime: "March to October",
      language: "Kashmiri, Urdu, Hindi, English",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Sheikh ul-Alam International Airport"
    },
    gallery: {
      all: [
        { url: "/destinations/kashmir/srinagar/01.jpg", caption: "Dal Lake", category: "landscapes" },
        { url: "/destinations/kashmir/srinagar/02.jpg", caption: "Dal Lake", category: "culture" },
        { url: "/destinations/kashmir/srinagar/03.jpg", caption: "Dal Lake", category: "heritage" },
        { url: "/destinations/kashmir/srinagar/04.jpg", caption: "Houseboat Stay", category: "accommodation" },
        { url: "/destinations/kashmir/srinagar/05.jpg", caption: "Mughal Gardens", category: "accommodation" },
        { url: "/destinations/kashmir/srinagar/06.jpg", caption: "Mughal Gardens", category: "accommodation" },
        { url: "/destinations/kashmir/srinagar/07.jpg", caption: "Houseboat Stay", category: "accommodation" },
        { url: "/destinations/kashmir/srinagar/09.jpg", caption: "Houseboat Stay", category: "accommodation" },
        { url: "/destinations/kashmir/srinagar/10.jpg", caption: "Houseboat Stay", category: "accommodation" },
      ]
    },
    highlights: [
      "Iconic Dal Lake with houseboats and shikaras",
      "Historic Mughal gardens - Shalimar Bagh, Nishat Bagh",
      "Traditional Kashmiri handicrafts and cuisine",
      "Shankaracharya Temple with panoramic views",
      "Floating vegetable market on Dal Lake",
      "Hazratbal Shrine and spiritual sites"
    ],
    attractions: [
      {
        name: "Dal Lake",
        description: "Iconic lake with houseboats, shikaras, and floating gardens",
        image: "/destinations/kashmir/srinagar/02.jpg",
        mustVisit: true
      },
      {
        name: "Shalimar Bagh",
        description: "Historic Mughal garden with terraced lawns and fountains",
        image: "/destinations/kashmir/nishat_bagh/1.jpg",
        mustVisit: true
      },
      {
        name: "Nishat Bagh",
        description: "Garden of Bliss with stunning lake views",
        image: "/destinations/kashmir/nishat_bagh/18.jpg",
        mustVisit: true
      },
     
    ],
    activities: [
      { name: "Shikara Rides", description: "Traditional boat rides on Dal Lake", icon: "🚣" },
      { name: "Garden Tours", description: "Explore historic Mughal gardens", icon: "🌺" },
      { name: "Shopping", description: "Handicrafts, carpets, and shawls", icon: "🛍️" },
      { name: "Photography", description: "Capture stunning landscapes", icon: "📸" }
    ]
  },

  "gulmarg": {
    id: "gulmarg",
    name: "Gulmarg",
    region: "Kashmir",
    country: "India",
    tagline: "Asia's premier skiing destination with world-class slopes and breathtaking gondola rides to snow-capped peaks.",
    tags: ["SKIING", "GONDOLA", "ADVENTURE"],
    description: "Experience world-class skiing, gondola rides, and stunning mountain vistas in this alpine paradise.",
    longDescription: "Gulmarg, meaning 'Meadow of Flowers', transforms into Asia's premier ski resort in winter. At an altitude of 2,650m, it offers spectacular mountain views, the world's second-highest operating cable car, and excellent skiing opportunities. In summer, it's a beautiful meadow perfect for trekking and golf.",
    heroImage: "/destinations/kashmir/gulmarg/03.jpg",
    startingPrice: 349,
    videoUrl: "https://www.youtube.com/embed/skiing-gulmarg",
    quickFacts: {
      bestTime: "December-March (skiing), May-October (meadows)",
      language: "Kashmiri, Hindi, English",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Srinagar (50km away)"
    },
    gallery: {
      all: [
        { url: "/destinations/kashmir/gulmarg/01.jpg", caption: "Gulmarg Gondola", category: "adventure" },
        { url: "/destinations/kashmir/gulmarg/02.jpg", caption: "Skiing Slopes", category: "sports" },
        { url: "/destinations/kashmir/gulmarg/03.jpg", caption: "Mountain Views", category: "landscapes" },
        { url: "/destinations/kashmir/gulmarg/04.jpg", caption: "Mountain Views", category: "landscapes" },
        { url: "/destinations/kashmir/gulmarg/05.jpg", caption: "Mountain Views", category: "landscapes" },
        { url: "/destinations/kashmir/gulmarg/06.jpg", caption: "Mountain Views", category: "landscapes" },
        { url: "/destinations/kashmir/gulmarg/07.jpg", caption: "Mountain Views", category: "landscapes" },
        { url: "/destinations/kashmir/gulmarg/08.jpg", caption: "Mountain Views", category: "landscapes" },
        { url: "/destinations/kashmir/gulmarg/09.jpg", caption: "Mountain Views", category: "landscapes" },
      ]
    },
    highlights: [
      "Gulmarg Gondola - world's second-highest cable car",
      "Premier skiing and snowboarding destination",
      "18-hole golf course at 2,650m altitude",
      "Stunning views of Nanga Parbat",
      // "Alpather Lake trekking",
      "Snow activities year-round at higher altitudes"
    ],
    attractions: [
      {
        name: "Gulmarg Gondola",
        description: "Cable car to Apharwat Peak with spectacular views",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600",
        mustVisit: true
      },
      {
        name: "Apharwat Peak",
        description: "Snow-covered peak perfect for skiing",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
        mustVisit: true
      },
      {
        name: "Gulmarg Golf Course",
        description: "One of the highest golf courses in the world",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
        mustVisit: false
      },
      {
        name: "Alpather Lake",
        description: "Alpine lake surrounded by snow-capped peaks",
        image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=600",
        mustVisit: false
      }
    ],
    culturalInsights: [
      { title: "Winter Sports Culture", description: "Gulmarg is famous for its vibrant winter sports scene, attracting skiers and snowboarders from around the world." },
      { title: "Meadow of Flowers", description: "In summer, Gulmarg transforms into a colorful meadow, celebrated in local festivals." }
    ],
    cuisine: [
      { name: "Kashmiri Kahwa", description: "Hot green tea perfect for cold weather", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" },
      { name: "Harissa", description: "Slow-cooked meat delicacy", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", type: "Main Course" },
      { name: "Hot Soup", description: "Warming soups for after skiing", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400", type: "Soup" }
    ],
    weather: [
      { season: "Winter", months: "December-March", temp: "-10 to 5°C", rainfall: "120mm", icon: "❄️", description: "Heavy snow, perfect for skiing" },
      { season: "Spring", months: "April-May", temp: "5-15°C", rainfall: "70mm", icon: "🌸", description: "Snow melting, beautiful flowers" },
      { season: "Summer", months: "June-August", temp: "10-25°C", rainfall: "50mm", icon: "☀️", description: "Green meadows, pleasant weather" },
      { season: "Autumn", months: "September-November", temp: "5-15°C", rainfall: "40mm", icon: "🍂", description: "Cool weather, golden landscapes" }
    ],
    thingsToDo: [
      { title: "Skiing", description: "Enjoy world-class skiing on powdery slopes.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", duration: "Half day", price: "₹2000+" },
      { title: "Gondola Ride", description: "Take the cable car to Apharwat Peak.", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800", duration: "1 hour", price: "₹800" },
      { title: "Snowboarding", description: "Thrilling snowboarding runs for all levels.", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800", duration: "Half day", price: "₹1800+" }
    ],
    accommodation: [
      { type: "Ski Resort", description: "Luxury ski-in/ski-out resorts with modern amenities.", priceRange: "₹5000-₹20000/night", rating: "4.8/5" },
      { type: "Hotel", description: "Comfortable hotels for all budgets.", priceRange: "₹3000-₹10000/night", rating: "4.4/5" }
    ],
    transportation: [
      { mode: "By Air", details: "Nearest airport is Srinagar, 50km away.", icon: "✈️" },
      { mode: "By Road", details: "Accessible by road from Srinagar and Jammu.", icon: "🚌" }
    ],
    travelTips: [
      { icon: "🎿", title: "Book Equipment Early", tip: "Book ski equipment and lessons in advance." },
      { icon: "🧥", title: "Dress Warmly", tip: "Dress in warm layers for high altitude." },
      { icon: "⏰", title: "Check Gondola Hours", tip: "Check gondola operational hours before planning your day." }
    ],
    faq: [
      { question: "Do I need skiing experience?", answer: "No, beginner slopes and professional instructors are available for all skill levels." },
      { question: "When is the best time for skiing?", answer: "December to March offers the best snow conditions for skiing." },
      { question: "Is the gondola safe?", answer: "Yes, the Gulmarg Gondola is well-maintained and operates with international safety standards." }
    ],
    relatedPosts: [
      { title: "Gulmarg Skiing Guide", excerpt: "Tips for skiing in Gulmarg, Asia’s top ski destination.", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800", date: "2025-01-20", readTime: "6 min" }
    ],
    stats: {
      tours: "20+",
      visitors: "60K+",
      rating: "4.7/5",
      guides: "15+"
    },
    activities: [
      { name: "Skiing", description: "World-class skiing slopes", icon: "⛷️" },
      { name: "Gondola Ride", description: "Cable car to mountain peaks", icon: "🚡" },
      { name: "Snowboarding", description: "Thrilling snowboarding runs", icon: "🏂" },
      // { name: "Trekking", description: "Summer meadow treks", icon: "🥾" }
    ]
  },

  "pahalgam": {
    id: "pahalgam",
    name: "Pahalgam",
    region: "Kashmir",
    country: "India",
    tagline: "Valley of Shepherds with pristine rivers, lush meadows, and gateway to the Amarnath pilgrimage.",
    tags: ["VALLEY", "NATURE"],
    description: "Explore the scenic beauty of Pahalgam, a tranquil valley surrounded by pine forests and the Lidder River.",
    longDescription: "Pahalgam, the 'Valley of Shepherds', is a picturesque town located at the confluence of streams from the Sheshnag Lake and the Lidder River. At an altitude of 2,130m, it serves as a base camp for the Amarnath pilgrimage and offers breathtaking views of snow-capped mountains, verdant meadows, and dense pine forests. Popular for trekking, fishing, and nature walks, Pahalgam is a perfect retreat for nature lovers.",
    heroImage: "/destinations/kashmir/pahalgam/5.jpg",
    startingPrice: 299,
    videoUrl: "https://www.youtube.com/embed/pahalgam-valley",
    quickFacts: {
      bestTime: "April-October",
      language: "Kashmiri, Urdu, Hindi, English",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Srinagar (95km away)"
    },
    gallery: {
      all: [
        { url: "/destinations/kashmir/pahalgam/1.jpg", caption: "Lidder River", category: "landscapes" },
        { url: "/destinations/kashmir/pahalgam/2.jpg", caption: "Betaab Valley", category: "nature" },
        { url: "/destinations/kashmir/pahalgam/3.jpg", caption: "Aru Valley", category: "landscapes" },
        { url: "/destinations/kashmir/pahalgam/4.jpg", caption: "Pine Forests", category: "nature" },
        { url: "/destinations/kashmir/pahalgam/5.jpg", caption: "Mountain Views", category: "landscapes" },
        { url: "/destinations/kashmir/pahalgam/6.jpg", caption: "Chandanwari", category: "adventure" },
        { url: "/destinations/kashmir/pahalgam/7.jpg", caption: "Chandanwari", category: "adventure" },
        // { url: "/pahalgam/08.jpg", caption: "Chandanwari", category: "adventure" }
      ]
    },
    highlights: [
      "Pristine Lidder River flowing through valleys",
      "Betaab Valley - named after Bollywood film",
      "Aru Valley - base for trekking expeditions",
      "Chandanwari - starting point for Amarnath Yatra",
      "Dense pine forests and meadows",
      "Horse riding and trekking opportunities"
    ],
    attractions: [
      {
        name: "Betaab Valley",
        description: "Scenic valley surrounded by snow-capped mountains and lush greenery",
        image: "/destinations/kashmir/pahalgam/2.jpg",
        mustVisit: true
      },
      {
        name: "Aru Valley",
        description: "Picturesque village and base for Kolahoi Glacier trek",
        image: "/pahalgam/03.jpg",
        mustVisit: true
      },
      {
        name: "Chandanwari",
        description: "Starting point of Amarnath Yatra with stunning snow views",
        image: "/pahalgam/06.jpg",
        mustVisit: true
      },
      {
        name: "Lidder River",
        description: "Crystal clear river perfect for trout fishing and riverside walks",
        image: "/destinations/kashmir/pahalgam/01.jpg",
        mustVisit: false
      }
    ],
    culturalInsights: [
      { title: "Shepherd Heritage", description: "Pahalgam's name comes from the nomadic shepherds who used these valleys as summer pastures." },
      { title: "Bollywood Connection", description: "Betaab Valley was named after the 1983 film 'Betaab' shot here, making it a popular filming location." },
      { title: "Amarnath Base Camp", description: "Pahalgam serves as the traditional base camp for the sacred Amarnath pilgrimage." }
    ],
    cuisine: [
      { name: "Trout Fish", description: "Fresh river trout prepared in traditional Kashmiri style", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400", type: "Main Course" },
      { name: "Dum Aloo", description: "Baby potatoes cooked in yogurt gravy", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", type: "Main Course" },
      { name: "Noon Chai", description: "Traditional pink salted tea", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" }
    ],
    weather: [
      { season: "Spring", months: "March-May", temp: "10-20°C", rainfall: "70mm", icon: "🌸", description: "Pleasant weather, blooming meadows" },
      { season: "Summer", months: "June-August", temp: "15-25°C", rainfall: "60mm", icon: "☀️", description: "Best time to visit, ideal for trekking" },
      { season: "Autumn", months: "September-November", temp: "5-15°C", rainfall: "40mm", icon: "🍂", description: "Clear skies, golden landscapes" },
      { season: "Winter", months: "December-February", temp: "-5 to 5°C", rainfall: "90mm", icon: "❄️", description: "Heavy snowfall, limited accessibility" }
    ],
    thingsToDo: [
      { title: "Valley Tour", description: "Visit Aru, Betaab, and Chandanwari valleys.", image: "/destinations/kashmir/pahalgam/02.jpg", duration: "Full day", price: "₹2500-3500" },
      { title: "Horse Riding", description: "Explore valleys on horseback.", image: "/destinations/kashmir/pahalgam/03.jpg", duration: "2-3 hours", price: "₹800-1500" },
      { title: "River Walk", description: "Stroll along the scenic Lidder River.", image: "/destinations/kashmir/pahalgam/01.jpg", duration: "1-2 hours", price: "Free" },
      { title: "Trekking", description: "Trek to Kolahoi Glacier or nearby peaks.", image: "/destinations/kashmir/pahalgam/04.jpg", duration: "2-5 days", price: "₹3000+" }
    ],
    accommodation: [
      { type: "Hotel", description: "Comfortable hotels with valley views.", priceRange: "₹2500-₹8000/night", rating: "4.5/5" },
      { type: "Resort", description: "Luxury resorts amidst pine forests.", priceRange: "₹5000-₹15000/night", rating: "4.7/5" },
      { type: "Guesthouse", description: "Budget-friendly local guesthouses.", priceRange: "₹1000-₹3000/night", rating: "4.2/5" }
    ],
    transportation: [
      { mode: "By Air", details: "Nearest airport is Srinagar, 95km away (2.5 hours drive).", icon: "✈️" },
      { mode: "By Road", details: "Well-connected by road from Srinagar via NH44.", icon: "🚌" },
      { mode: "Local Transport", details: "Local taxis required for valley sightseeing (union taxis).", icon: "🚕" }
    ],
    travelTips: [
      { icon: "🚕", title: "Union Taxis", tip: "Local union taxis are mandatory for valley tours. Budget ₹2,500-3,500 for Aru, Betaab, and Chandanwari." },
      { icon: "🧥", title: "Layer Up", tip: "Weather can change quickly; carry warm layers even in summer." },
      { icon: "👟", title: "Comfortable Shoes", tip: "Wear comfortable walking shoes for river trails and valley exploration." },
      { icon: "📷", title: "Photography", tip: "Best light for photography is early morning and late afternoon." }
    ],
    faq: [
      { question: "Do I need to hire local taxis?", answer: "Yes, union regulations require hiring local taxis to visit Aru Valley, Betaab Valley, and Chandanwari. Costs typically range from ₹2,500-3,500 for all three valleys." },
      { question: "What is the best time to visit Pahalgam?", answer: "April to October is ideal, with June-August being the peak season for pleasant weather and clear skies." },
      { question: "Can I do trekking from Pahalgam?", answer: "Yes, Pahalgam is the base for several treks including Kolahoi Glacier, Tarsar-Marsar Lakes, and various day hikes." },
      { question: "Is Pahalgam safe for families?", answer: "Yes, Pahalgam is very safe and family-friendly with activities suitable for all ages." }
    ],
    relatedPosts: [
      { title: "Pahalgam Valley Guide", excerpt: "Complete guide to exploring Aru, Betaab, and Chandanwari valleys.", image: "/destinations/kashmir/pahalgam/2.jpg", date: "2025-05-15", readTime: "6 min" },
      { title: "Trekking in Pahalgam", excerpt: "Best trekking routes and tips for adventure enthusiasts.", image: "/pahalgam/04.jpg", date: "2025-06-20", readTime: "7 min" }
    ],
    stats: {
      tours: "25+",
      visitors: "75K+",
      rating: "4.7/5",
      guides: "20+"
    },
    activities: [
      { name: "Valley Tours", description: "Explore Aru, Betaab, Chandanwari", icon: "🏔️" },
      { name: "Horse Riding", description: "Horseback valley exploration", icon: "🐎" },
      { name: "Trekking", description: "Multi-day mountain treks", icon: "🥾" },
      { name: "Fishing", description: "Trout fishing in Lidder River", icon: "🎣" },
      { name: "Photography", description: "Capture stunning landscapes", icon: "📸" }
    ]
  },

  "sonamarg": {
    id: "sonamarg",
    name: "Sonamarg",
    region: "Kashmir",
    country: "India",
    tagline: "Meadow of Gold with pristine glaciers, alpine meadows, and gateway to Ladakh via Zoji La Pass.",
    tags: ["GLACIER", "MEADOWS", "ADVENTURE"],
    description: "Discover Sonamarg, a stunning high-altitude meadow surrounded by glaciers and snow-capped peaks.",
    longDescription: "Sonamarg, meaning 'Meadow of Gold', sits at an altitude of 2,800m and is one of Kashmir's most spectacular destinations. Located at the gateway to Ladakh, it's surrounded by majestic glaciers including Thajiwas Glacier, alpine meadows carpeted with flowers, and the roaring Sindh River. The town serves as a base for trekking to high-altitude lakes and crossing the famous Zoji La Pass. In summer, the meadows come alive with wildflowers, while winter transforms it into a snow wonderland.",
    heroImage: "/destinations/kashmir/sonamarg/1.jpg",
    startingPrice: 279,
    videoUrl: "https://www.youtube.com/embed/sonamarg-meadows",
    quickFacts: {
      bestTime: "May-October",
      language: "Kashmiri, Urdu, Hindi, English",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Srinagar (80km away)"
    },
    gallery: {
      all: [
        { url: "/destinations/kashmir/sonamarg/1.jpg", caption: "Alpine Meadows", category: "nature" },
        { url: "/destinations/kashmir/sonamarg/2.jpg", caption: "Thajiwas Glacier", category: "landscapes" },
        { url: "/destinations/kashmir/sonamarg/05.jpg", caption: "Wildflower Meadows", category: "nature" },
        { url: "/destinations/kashmir/sonamarg/06.jpg", caption: "Mountain Peaks", category: "landscapes" },
      ]
    },
    highlights: [
      "Thajiwas Glacier - accessible by pony or trek",
      "Golden alpine meadows in summer",
      "Gateway to Ladakh via Zoji La Pass",
      "Sindh River flowing through the valley",
      "Base for high-altitude treks",
      "Vishansar and Krishansar Lakes nearby"
    ],
    attractions: [
      {
        name: "Thajiwas Glacier",
        description: "Stunning glacier accessible by pony ride or trekking",
        image: "/destinations/kashmir/sonamarg/01.jpg",
        mustVisit: true
      },
      {
        name: "Zoji La Pass",
        description: "Strategic mountain pass connecting Kashmir to Ladakh",
        image: "/destinations/kashmir/sonamarg/04.jpg",
        mustVisit: true
      },
      {
        name: "Alpine Meadows",
        description: "Vast meadows carpeted with wildflowers in summer",
        image: "/destinations/kashmir/sonamarg/02.jpg",
        mustVisit: true
      },
      {
        name: "Vishansar Lake",
        description: "High-altitude alpine lake reached through trekking",
        image: "/destinations/kashmir/sonamarg/06.jpg",
        mustVisit: false
      }
    ],
    culturalInsights: [
      { title: "Gateway to Ladakh", description: "Sonamarg is the last major town before Zoji La Pass, historically an important trade route to Ladakh." },
      { title: "Seasonal Settlement", description: "Due to heavy snowfall, Sonamarg is largely inaccessible in winter, making it a seasonal destination." },
      { title: "Trekking Paradise", description: "The region is famous among trekkers for routes to Kashmir Great Lakes and Amarnath Cave." }
    ],
    cuisine: [
      { name: "Kashmiri Rajma", description: "Red kidney beans in rich tomato gravy", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", type: "Main Course" },
      { name: "Goshtaba", description: "Minced mutton balls in yogurt curry", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400", type: "Main Course" },
      { name: "Kehwa", description: "Saffron-infused Kashmiri green tea", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" }
    ],
    weather: [
      { season: "Spring", months: "April-May", temp: "5-15°C", rainfall: "80mm", icon: "🌸", description: "Snow melting, roads opening" },
      { season: "Summer", months: "June-August", temp: "10-25°C", rainfall: "50mm", icon: "☀️", description: "Best time, meadows in full bloom" },
      { season: "Autumn", months: "September-October", temp: "5-15°C", rainfall: "40mm", icon: "🍂", description: "Clear skies, cooler weather" },
      { season: "Winter", months: "November-March", temp: "-10 to 0°C", rainfall: "150mm", icon: "❄️", description: "Heavy snow, roads closed" }
    ],
    thingsToDo: [
      { title: "Thajiwas Glacier Trek", description: "Pony ride or trek to the glacier.", image: "/destinations/kashmir/sonamarg/01.jpg", duration: "3-4 hours", price: "₹800-1500" },
      { title: "White Water Rafting", description: "Rafting on Sindh River rapids.", image: "/destinations/kashmir/sonamarg/03.jpg", duration: "1-2 hours", price: "₹1000-2000" },
      { title: "Camping", description: "Camp under the stars in alpine meadows.", image: "/destinations/kashmir/sonamarg/02.jpg", duration: "Overnight", price: "₹2000-3500" },
      { title: "Photography", description: "Capture stunning mountain landscapes.", image: "/destinations/kashmir/sonamarg/05.jpg", duration: "Flexible", price: "Free" }
    ],
    accommodation: [
      { type: "Hotel", description: "Limited hotels available in Sonamarg town.", priceRange: "₹2000-₹6000/night", rating: "4.3/5" },
      { type: "Camp", description: "Seasonal camping facilities in meadows.", priceRange: "₹1500-₹4000/night", rating: "4.5/5" },
      { type: "Guesthouse", description: "Basic guesthouses for budget travelers.", priceRange: "₹800-₹2500/night", rating: "4.0/5" }
    ],
    transportation: [
      { mode: "By Air", details: "Nearest airport is Srinagar, 80km away (2.5 hours drive).", icon: "✈️" },
      { mode: "By Road", details: "Connected via NH1 from Srinagar. Road open May-October.", icon: "🚌" },
      { mode: "Local Transport", details: "Ponies available for glacier treks; local taxis for sightseeing.", icon: "🐎" }
    ],
    travelTips: [
      { icon: "📅", title: "Seasonal Access", tip: "Sonamarg is accessible only from May to October due to heavy snowfall and road closures in winter." },
      { icon: "🧥", title: "Pack Warm", tip: "Temperature drops significantly even in summer evenings. Carry warm jackets and layers." },
      { icon: "⛰️", title: "Altitude Awareness", tip: "At 2,800m, some may experience mild altitude effects. Stay hydrated and acclimatize." },
      { icon: "🏕️", title: "Limited Facilities", tip: "Sonamarg has limited ATMs and mobile network. Carry cash and plan accordingly." }
    ],
    faq: [
      { question: "When is Sonamarg accessible?", answer: "Sonamarg is typically accessible from May to October. During winter (November-April), heavy snowfall closes the roads, especially Zoji La Pass." },
      { question: "How do I reach Thajiwas Glacier?", answer: "Thajiwas Glacier is about 3km from Sonamarg town. You can either trek (2-3 hours) or hire a pony (₹800-1,500) for the journey." },
      { question: "Is camping allowed in Sonamarg?", answer: "Yes, camping is popular in Sonamarg's meadows. Several operators offer camping packages with tents, meals, and bonfire arrangements." },
      { question: "Can I visit Sonamarg as a day trip?", answer: "Yes, Sonamarg makes an excellent day trip from Srinagar (160km round trip, 5-6 hours total travel time)." }
    ],
    relatedPosts: [
      { title: "Sonamarg Travel Guide", excerpt: "Everything you need to know for visiting the Meadow of Gold.", image: "/destinations/kashmir/sonamarg/02.jpg", date: "2025-06-10", readTime: "6 min" },
      { title: "Kashmir Great Lakes Trek", excerpt: "Starting from Sonamarg, this epic trek covers stunning alpine lakes.", image: "/destinations/kashmir/sonamarg/06.jpg", date: "2025-07-05", readTime: "8 min" }
    ],
    stats: {
      tours: "18+",
      visitors: "45K+",
      rating: "4.6/5",
      guides: "12+"
    },
    activities: [
      { name: "Glacier Trekking", description: "Trek to Thajiwas Glacier", icon: "🏔️" },
      { name: "Pony Rides", description: "Horse rides to glacier", icon: "🐎" },
      { name: "River Rafting", description: "Sindh River white water rafting", icon: "🚣" },
      { name: "Camping", description: "Alpine meadow camping", icon: "⛺" },
      { name: "Photography", description: "Landscape and nature photography", icon: "📸" }
    ]
  },

  // JAMMU DESTINATIONS
  "vaishno-devi": {
    id: "vaishno-devi",
    name: "Vaishno Devi",
    region: "Jammu",
    country: "India",
    tagline: "Sacred pilgrimage to the holy shrine of Mata Vaishno Devi, nestled in the Trikuta Mountains.",
    tags: ["PILGRIMAGE", "SPIRITUAL", "HOLY SHRINE"],
    description: "Embark on a spiritual journey to one of India's most revered Hindu pilgrimage sites.",
    longDescription: "Vaishno Devi, located in the Trikuta Mountains, is one of the holiest Hindu shrines in India. Millions of devotees undertake the 12km trek to seek blessings of Mata Vaishno Devi. The journey combines spirituality with natural beauty, offering breathtaking mountain views and a profound spiritual experience.",
    heroImage: "/destinations/jammu/vaishno_devi/2.jpg",
    startingPrice: 189,
    videoUrl: "https://www.youtube.com/embed/vaishno-devi-yatra",
    quickFacts: {
      bestTime: "March-October",
      language: "Hindi, Dogri, Punjabi, English",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Jammu Airport (50km to Katra)"
    },
    gallery: {
      all: [
        { url: "/destinations/jammu/vaishno_devi/1.jpg", caption: "Trikuta Mountains", category: "landscapes" },
        { url: "/destinations/jammu/vaishno_devi/3.jpg", caption: "Temple Complex", category: "spiritual" },
        { url: "/destinations/jammu/vaishno_devi/4.jpg", caption: "Pilgrimage Path", category: "culture" },
        { url: "/destinations/jammu/vaishno_devi/2.jpg", caption: "Mountain Views", category: "nature" },
        { url: "/destinations/jammu/vaishno_devi/5.jpg", caption: "Mountain Views", category: "nature" }
      ]
    },
    highlights: [
      "Sacred cave shrine of Mata Vaishno Devi",
      "12km pilgrimage trek through mountains",
      "Helicopter services available",
      "Ban Ganga holy water source",
      "Ardhkuwari Cave midway point",
      "Beautiful mountain scenery"
    ],
    attractions: [
      {
        name: "Holy Cave Shrine",
        description: "Sacred cave where Mata Vaishno Devi manifested",
        image: "https://images.unsplash.com/photo-1609952533942-0157649f8d5c?w=600",
        mustVisit: true
      },
      {
        name: "Ban Ganga",
        description: "Holy stream created by Mata's arrow",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600",
        mustVisit: true
      },
      {
        name: "Ardhkuwari Cave",
        description: "Midway cave temple on pilgrimage route",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600",
        mustVisit: false
      },
      {
        name: "Bhairon Temple",
        description: "Temple completing the pilgrimage circuit",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
        mustVisit: false
      }
    ],
    culturalInsights: [
      { title: "Pilgrimage Traditions", description: "Vaishno Devi is one of the most important Hindu pilgrimage sites, attracting millions annually." },
      { title: "Spiritual Practices", description: "Devotees perform rituals and prayers along the trek and at the shrine." }
    ],
    cuisine: [
      { name: "Prasad", description: "Holy offerings blessed at the shrine", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400", type: "Prasad" },
      { name: "Chole Bhature", description: "Popular North Indian dish", image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400", type: "Main Course" },
      { name: "Rajma Chawal", description: "Comfort food for pilgrims", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400", type: "Main Course" }
    ],
    weather: [
      { season: "Spring", months: "March-May", temp: "15-30°C", rainfall: "60mm", icon: "🌸", description: "Pleasant pilgrimage weather" },
      { season: "Monsoon", months: "June-August", temp: "20-35°C", rainfall: "200mm", icon: "🌧️", description: "Avoid if possible, slippery paths" },
      { season: "Autumn", months: "September-November", temp: "10-25°C", rainfall: "40mm", icon: "🍂", description: "Ideal weather, clear skies" },
      { season: "Winter", months: "December-February", temp: "0-15°C", rainfall: "30mm", icon: "❄️", description: "Cold, carry warm clothes" }
    ],
    thingsToDo: [
      { title: "Pilgrimage Trek", description: "Undertake the 12km trek to the holy shrine.", image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800", duration: "4-6 hours", price: "Free" },
      { title: "Helicopter Ride", description: "Quick access to Bhawan for darshan.", image: "https://images.unsplash.com/photo-1609952533942-0157649f8d5c?w=800", duration: "15 min", price: "₹2000+" }
    ],
    accommodation: [
      { type: "Hotel", description: "Hotels and lodges in Katra for pilgrims.", priceRange: "₹1000-₹5000/night", rating: "4.2/5" },
      { type: "Dharamshala", description: "Budget and free accommodation for devotees.", priceRange: "Free-₹1000/night", rating: "4.0/5" }
    ],
    transportation: [
      { mode: "By Air", details: "Jammu Airport is the nearest airport, 50km from Katra.", icon: "✈️" },
      { mode: "By Road", details: "Regular buses and taxis from Jammu to Katra.", icon: "🚌" },
      { mode: "By Helicopter", details: "Helicopter services from Katra to Sanjichhat.", icon: "🚁" }
    ],
    travelTips: [
      { icon: "👟", title: "Wear Good Shoes", tip: "Wear comfortable walking shoes for the trek." },
      { icon: "🪪", title: "Carry ID", tip: "Carry valid ID proof for registration." },
      { icon: "🙏", title: "Respect Customs", tip: "Respect temple customs and dress modestly." }
    ],
    faq: [
      { question: "How long does the trek take?", answer: "On foot, it takes 4-6 hours one way. Helicopters reduce travel time to 15 minutes." },
      { question: "Is registration mandatory?", answer: "Yes, online registration is required before starting the yatra." },
      { question: "Can elderly people visit?", answer: "Yes, helicopter services, ponies, and palanquins are available for all age groups." }
    ],
    relatedPosts: [
      { title: "Vaishno Devi Yatra Guide", excerpt: "Tips for a smooth and spiritual pilgrimage to Vaishno Devi.", image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800", date: "2025-03-01", readTime: "5 min" }
    ],
    stats: {
      tours: "10+",
      visitors: "8M+",
      rating: "4.9/5",
      guides: "50+"
    },
    activities: [
      { name: "Pilgrimage Trek", description: "12km spiritual journey", icon: "🙏" },
      { name: "Helicopter Ride", description: "Quick access to Bhawan", icon: "🚁" },
      { name: "Darshan", description: "Holy shrine visit", icon: "🕉️" },
      { name: "Mountain Views", description: "Scenic Himalayan vistas", icon: "⛰️" }
    ]
  },

  "patnitop": {
    id: "patnitop",
    name: "Patnitop",
    region: "Jammu",
    country: "India",
    tagline: "Serene hill station with panoramic views of the Himalayas and lush meadows.",
    tags: ["HILL STATION", "NATURE", "TREKKING"],
    description: "Discover tranquil mountain landscapes, meadows, and adventure activities in this charming hill station.",
    longDescription: "Patnitop is a picturesque hill station perched at 2,024m in the Shiwalik range. Known for its beautiful meadows, dense forests, and panoramic mountain views, it offers a peaceful retreat. The area is perfect for nature walks, paragliding, and experiencing authentic mountain life.",
    heroImage: "/destinations/jammu/patnitop/1.jpg",
    startingPrice: 229,
    quickFacts: {
      bestTime: "April-November",
      language: "Hindi, Dogri, Punjabi",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Jammu Airport (110km away)"
    },
    gallery: {
      all: [
        { url: "/destinations/jammu/patnitop/2.jpg", caption: "Mountain Meadows", category: "nature" },
        { url: "/destinations/jammu/patnitop/3.jpg", caption: "Forest Trails", category: "adventure" },
        { url: "/destinations/jammu/patnitop/4.jpg", caption: "Forest Trails", category: "adventure" },
        { url: "/destinations/jammu/patnitop/5.jpg", caption: "Forest Trails", category: "adventure" },
        { url: "/destinations/jammu/patnitop/6.jpg", caption: "Forest Trails", category: "adventure" },
        { url: "/destinations/jammu/patnitop/7.jpg", caption: "Forest Trails", category: "adventure" },

        { url: "/destinations/jammu/patnitop/1.jpg", caption: "Valley Views", category: "landscapes" }
      ]
    },
    highlights: [
      "Panoramic Himalayan views",
      "Paragliding and adventure sports",
      "Beautiful pine forests",
      "Nathatop meadows",
      "Naag Temple",
      "Winter skiing opportunities"
    ],
    attractions: [
      {
        name: "Nathatop",
        description: "Scenic meadow with snow activities",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
        mustVisit: true
      },
      {
        name: "Sanasar",
        description: "Lake and adventure sports hub",
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600",
        mustVisit: false
      }
    ],
    culturalInsights: [
      { title: "Dogra Culture", description: "Patnitop reflects the traditions and hospitality of the Dogra community." },
      { title: "Mountain Festivals", description: "Seasonal festivals and fairs are celebrated with music and dance." }
    ],
    cuisine: [
      { name: "Rajma Chawal", description: "Traditional Jammu comfort food", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400", type: "Main Course" },
      { name: "Kaladi Kulcha", description: "Local cheese bread", image: "https://images.unsplash.com/photo-1598887142487-3c854a32812f?w=400", type: "Snack" }
    ],
    weather: [
      { season: "Summer", months: "April-June", temp: "15-25°C", rainfall: "90mm", icon: "☀️", description: "Pleasant weather ideal for visits" },
      { season: "Monsoon", months: "July-September", temp: "10-20°C", rainfall: "180mm", icon: "🌧️", description: "Lush green, occasional rain" },
      { season: "Winter", months: "November-March", temp: "0-10°C", rainfall: "60mm", icon: "❄️", description: "Snowfall, winter sports" }
    ],
    thingsToDo: [
      { title: "Paragliding", description: "Soar over the valleys for breathtaking views.", image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800", duration: "30 min", price: "₹2500" },
      { title: "Nature Walks", description: "Explore pine forests and meadows.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", duration: "1-2 hours", price: "Free" }
    ],
    accommodation: [
      { type: "Hotel", description: "Tourist resorts and hotels with mountain views.", priceRange: "₹2000-₹8000/night", rating: "4.3/5" },
      { type: "Cottage", description: "Private cottages for families and groups.", priceRange: "₹3000-₹9000/night", rating: "4.5/5" }
    ],
    transportation: [
      { mode: "By Air", details: "Jammu Airport is 110km away.", icon: "✈️" },
      { mode: "By Road", details: "Scenic but winding road from Jammu.", icon: "🚌" }
    ],
    travelTips: [
      { icon: "🌄", title: "Start Early", tip: "Visit in early morning for best mountain views." },
      { icon: "🧥", title: "Carry Warm Clothes", tip: "Carry warm clothes even in summer." }
    ],
    faq: [
      { question: "How far is Patnitop from Jammu?", answer: "Approximately 112km, about 3-4 hours by road." },
      { question: "What activities are available?", answer: "Paragliding, trekking, skiing (winter), nature walks, and sightseeing." }
    ],
    relatedPosts: [
      { title: "Patnitop Adventure Activities", excerpt: "A guide to paragliding and trekking in Patnitop.", image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800", date: "2025-05-10", readTime: "4 min" }
    ],
    stats: {
      tours: "8+",
      visitors: "30K+",
      rating: "4.6/5",
      guides: "10+"
    },
    activities: [
      { name: "Paragliding", description: "Soar over valleys", icon: "🪂" },
      { name: "Trekking", description: "Forest and meadow trails", icon: "🥾" },
      { name: "Photography", description: "Capture stunning views", icon: "📸" }
    ]
  },

  "warwan-valley": {
    id: "warwan-valley",
    name: "Warwan Valley",
    region: "Jammu",
    country: "India",
    tagline: "Explore the untouched paradise of Kashmir's most remote and pristine valley, where traditional villages meet alpine meadows.",
    tags: ["OFF-BEAT", "REMOTE", "ADVENTURE"],
    description: "Experience the unspoiled beauty of Warwan Valley, Kashmir's hidden gem with pristine landscapes and warm hospitality.",
    longDescription: "Warwan Valley is one of Kashmir's most remote and beautiful destinations, tucked away in the southeastern region. This untouched paradise offers a rare glimpse into traditional Kashmiri village life, surrounded by towering mountains, lush meadows, and crystal-clear streams. The valley is accessible only during summer months and requires a spirit of adventure. Visitors are rewarded with breathtaking landscapes, warm local hospitality, and the serenity of complete isolation from the modern world.",
    heroImage: "/destinations/jammu/warwan_valley/01.jpg",
    startingPrice: 549,
    quickFacts: {
      bestTime: "June-September",
      language: "Kashmiri, Urdu, Hindi",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Sheikh ul-Alam International Airport (200km, 7-8 hours)"
    },
    gallery: {
      all: [
        { url: "/destinations/jammu/warwan_valley/01.jpg", caption: "Warwan_valley Valley Meadows", category: "landscapes" },
        { url: "/destinations/jammu/warwan_valley/02.jpg", caption: "Traditional Village", category: "culture" },
        { url: "/destinations/jammu/warwan_valley/03.jpg", caption: "Alpine Streams", category: "nature" },
        { url: "/destinations/jammu/warwan_valley/04.jpg", caption: "Mountain Views", category: "landscapes" }
      ]
    },
    highlights: [
      "Remote pristine valley with traditional villages",
      "Untouched alpine meadows and streams",
      "Authentic Kashmiri village culture",
      "Spectacular mountain scenery",
      "Perfect for adventure seekers",
      "Riverside camping opportunities"
    ],
    attractions: [
      {
        name: "Warwan Meadows",
        description: "Vast alpine meadows surrounded by snow-capped peaks",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
        mustVisit: true
      },
      {
        name: "Traditional Villages",
        description: "Experience authentic Kashmiri village life and hospitality",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600",
        mustVisit: true
      },
      {
        name: "Warwan River",
        description: "Crystal-clear river flowing through the valley",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
        mustVisit: false
      }
    ],
    culturalInsights: [
      { title: "Remote Living", description: "Warwan Valley remains largely isolated, preserving traditional Kashmiri culture and lifestyle." },
      { title: "Seasonal Access", description: "The valley is accessible only during summer months when snow melts from the passes." },
      { title: "Local Hospitality", description: "Villagers are known for their exceptional warmth and traditional Kashmiri hospitality." }
    ],
    cuisine: [
      { name: "Traditional Kashmiri Bread", description: "Locally baked breads from village ovens", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400", type: "Bread" },
      { name: "Local Dairy Products", description: "Fresh milk, butter, and yogurt from local farms", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400", type: "Dairy" },
      { name: "Kehwa", description: "Traditional Kashmiri green tea", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" }
    ],
    weather: [
      { season: "Spring", months: "May-June", temp: "10-20°C", rainfall: "60mm", icon: "🌸", description: "Snow melting, valley opening" },
      { season: "Summer", months: "July-August", temp: "15-25°C", rainfall: "40mm", icon: "☀️", description: "Best time, meadows in bloom" },
      { season: "Autumn", months: "September", temp: "8-18°C", rainfall: "30mm", icon: "🍂", description: "Clear skies, cooler weather" },
      { season: "Winter", months: "October-April", temp: "-15 to 5°C", rainfall: "200mm", icon: "❄️", description: "Heavy snow, completely inaccessible" }
    ],
    thingsToDo: [
      { title: "Valley Trekking", description: "Explore the pristine valley on foot.", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800", duration: "Full day", price: "₹1500" },
      { title: "Village Homestay", description: "Experience traditional Kashmiri village life.", image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800", duration: "Overnight", price: "₹1000/night" },
      { title: "Riverside Camping", description: "Camp by the crystal-clear Warwan River.", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800", duration: "Overnight", price: "₹2000" }
    ],
    accommodation: [
      { type: "Homestay", description: "Stay with local families in traditional homes.", priceRange: "₹800-₹2000/night", rating: "4.8/5" },
      { type: "Camping", description: "Riverside and meadow camping with basic facilities.", priceRange: "₹1500-₹3000/night", rating: "4.6/5" }
    ],
    transportation: [
      { mode: "By Road", details: "Accessible via Sinthan Pass from Anantnag/Kokernag, 4-5 hours drive.", icon: "🚙" }
    ],
    travelTips: [
      { icon: "🎒", title: "Pack Light", tip: "Limited facilities, pack essential items only." },
      { icon: "💵", title: "Carry Cash", tip: "No ATMs or card facilities available." },
      { icon: "🌤️", title: "Check Weather", tip: "Weather can change quickly, be prepared." },
      { icon: "📱", title: "Limited Connectivity", tip: "Mobile network coverage is very limited." }
    ],
    faq: [
      { question: "When is Warwan Valley accessible?", answer: "The valley is accessible only from June to September when Sinthan Pass is open." },
      { question: "Are there hotels in Warwan?", answer: "No conventional hotels exist. Accommodation is mainly through homestays and camping." },
      { question: "Is it safe to visit?", answer: "Yes, it's safe. The local community is very welcoming, but it's advisable to travel with a local guide." }
    ],
    relatedPosts: [
      { title: "Journey to Warwan Valley", excerpt: "A complete guide to reaching Kashmir's most remote valley.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", date: "2025-07-10", readTime: "8 min" }
    ],
    stats: {
      tours: "3+",
      visitors: "500+",
      rating: "4.9/5",
      guides: "5+"
    },
    activities: [
      { name: "Trekking", description: "Explore pristine mountain trails", icon: "🥾" },
      { name: "Village Tours", description: "Experience traditional culture", icon: "🏘️" },
      { name: "Photography", description: "Capture untouched landscapes", icon: "📸" },
      { name: "Camping", description: "Riverside and meadow camping", icon: "⛺" }
    ]
  },

  "daksum": {
    id: "daksum",
    name: "Daksum",
    region: "Jammu",
    country: "India",
    tagline: "Discover the enchanting forest retreat where pine and deodar trees meet the flowing Brengi River.",
    tags: ["FORESTS", "RIVER", "NATURE"],
    description: "Experience the serene beauty of Daksum, a hidden forest paradise with towering deodars and crystal-clear streams.",
    longDescription: "Daksum is a picturesque forest village in Kashmir's Anantnag district, known for its dense pine and deodar forests and the pristine Brengi River. This off-beat destination offers a peaceful retreat away from crowded tourist spots. The cool climate, lush greenery, and melodious sound of flowing water create a perfect setting for nature lovers. Daksum serves as a base for treks to higher altitudes and is increasingly popular among travelers seeking tranquility and natural beauty.",
    heroImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80",
    startingPrice: 299,
    quickFacts: {
      bestTime: "April-October",
      language: "Kashmiri, Urdu, Hindi",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Sheikh ul-Alam International Airport (120km, 4 hours)"
    },
    gallery: {
      all: [
        { url: "/destinations/jammu/daksum/01.jpg", caption: "Deodar Forests", category: "nature" },
        { url: "/destinations/jammu/daksum/02.jpg", caption: "Brengi River", category: "landscapes" },
        { url: "/destinations/jammu/daksum/03.jpg", caption: "Forest Trails", category: "nature" },
        { url: "/destinations/jammu/daksum/04.jpg", caption: "Mountain Views", category: "landscapes" }
      ]
    },
    highlights: [
      "Dense pine and deodar forests",
      "Pristine Brengi River flowing through valley",
      "Cool climate year-round",
      "Gateway to Sinthan Pass",
      "Peaceful and less crowded",
      "Perfect for nature walks and picnics"
    ],
    attractions: [
      {
        name: "Brengi River",
        description: "Crystal-clear river perfect for riverside picnics and relaxation",
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600",
        mustVisit: true
      },
      {
        name: "Deodar Forests",
        description: "Towering deodar trees creating a serene forest environment",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
        mustVisit: true
      },
      {
        name: "Forest Trails",
        description: "Nature walks through pine and deodar groves",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600",
        mustVisit: false
      }
    ],
    culturalInsights: [
      { title: "Forest Village", description: "Daksum is a small settlement deeply connected to the surrounding forests and nature." },
      { title: "Gateway Location", description: "Serves as the last major stop before ascending to Sinthan Pass." },
      { title: "Emerging Destination", description: "Increasingly popular among travelers seeking offbeat experiences in Kashmir." }
    ],
    cuisine: [
      { name: "Kashmiri Wazwan", description: "Traditional multi-course feast", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400", type: "Main Course" },
      { name: "Kehwa", description: "Traditional green tea perfect for cool climate", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" },
      { name: "Kashmiri Bread", description: "Freshly baked local breads", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400", type: "Bread" }
    ],
    weather: [
      { season: "Spring", months: "March-May", temp: "10-20°C", rainfall: "70mm", icon: "🌸", description: "Pleasant weather, forests coming alive" },
      { season: "Summer", months: "June-August", temp: "15-25°C", rainfall: "50mm", icon: "☀️", description: "Best time, cool and comfortable" },
      { season: "Autumn", months: "September-November", temp: "8-18°C", rainfall: "40mm", icon: "🍂", description: "Clear skies, colorful foliage" },
      { season: "Winter", months: "December-February", temp: "-5 to 8°C", rainfall: "100mm", icon: "❄️", description: "Cold with occasional snow" }
    ],
    thingsToDo: [
      { title: "Riverside Picnic", description: "Relax by the Brengi River with family.", image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800", duration: "Half day", price: "Free" },
      { title: "Forest Walks", description: "Explore the serene deodar forests.", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800", duration: "2-3 hours", price: "₹500" },
      { title: "Photography", description: "Capture the natural beauty of forests and rivers.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", duration: "Flexible", price: "Free" }
    ],
    accommodation: [
      { type: "Guesthouse", description: "Simple guesthouses with basic amenities.", priceRange: "₹800-₹2000/night", rating: "4.3/5" },
      { type: "Forest Huts", description: "Rustic cottages surrounded by nature.", priceRange: "₹1500-₹3000/night", rating: "4.5/5" }
    ],
    transportation: [
      { mode: "By Road", details: "70km from Anantnag, accessible by taxi or private vehicle.", icon: "🚙" }
    ],
    travelTips: [
      { icon: "🧥", title: "Carry Warm Clothes", tip: "Even in summer, evenings can be cool." },
      { icon: "🍽️", title: "Limited Restaurants", tip: "Dining options are limited, some hotels offer meals." },
      { icon: "💵", title: "Carry Cash", tip: "ATM facilities are limited." },
      { icon: "📱", title: "Network Issues", tip: "Mobile network can be patchy in some areas." }
    ],
    faq: [
      { question: "How far is Daksum from Srinagar?", answer: "Approximately 120km, around 4 hours drive via Anantnag and Kokernag." },
      { question: "Is Daksum good for families?", answer: "Yes, it's a peaceful destination perfect for family picnics and nature lovers." },
      { question: "What is the best time to visit?", answer: "April to October is ideal, with summer months being the most pleasant." }
    ],
    relatedPosts: [
      { title: "Daksum: Kashmir's Hidden Forest Gem", excerpt: "Explore the serene forests and rivers of Daksum.", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800", date: "2025-06-20", readTime: "5 min" }
    ],
    stats: {
      tours: "4+",
      visitors: "2K+",
      rating: "4.6/5",
      guides: "6+"
    },
    activities: [
      { name: "Nature Walks", description: "Forest trails and riverside paths", icon: "🚶" },
      { name: "Picnicking", description: "Riverside picnics and relaxation", icon: "🧺" },
      { name: "Photography", description: "Capture forests and streams", icon: "📸" },
      { name: "Bird Watching", description: "Diverse forest bird species", icon: "🦅" }
    ]
  },

  "sinthan-top": {
    id: "sinthan-top",
    name: "Sinthan Top",
    region: "Jammu",
    country: "India",
    tagline: "Conquer one of Kashmir's highest motorable mountain passes at 12,500 feet, offering breathtaking panoramic views.",
    tags: ["HIGH ALTITUDE", "MOUNTAIN PASS", "ADVENTURE"],
    description: "Experience the thrill of crossing Sinthan Pass, one of Kashmir's highest and most scenic mountain passes.",
    longDescription: "Sinthan Top, at an elevation of 12,500 feet (3,810 meters), is one of the highest motorable passes in Kashmir. This spectacular mountain pass connects the Kashmir Valley with Kishtwar and beyond. The journey to Sinthan Top is an adventure in itself, with hairpin bends, dramatic elevation changes, and breathtaking views at every turn. During summer, the pass is adorned with wildflowers, while snow patches remain visible even in peak season. The top offers 360-degree panoramic views of snow-capped peaks, making it a photographer's paradise and a must-visit for adventure enthusiasts.",
    heroImage: "/destinations/jammu/sinthan_top/1.jpg",
    startingPrice: 449,
    quickFacts: {
      bestTime: "June-September",
      language: "Kashmiri, Urdu, Hindi",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Sheikh ul-Alam International Airport (140km, 5-6 hours)"
    },
    gallery: {
      all: [
        { url: "/destinations/jammu/sinthan_top/1.jpg", caption: "Sinthan_top Pass Summit", category: "landscapes" },
        { url: "/destinations/jammu/sinthan_top/2.jpg", caption: "Mountain Views", category: "landscapes" },
        { url: "/destinations/jammu/sinthan_top/3.jpg", caption: "Hairpin Bends", category: "adventure" },
        { url: "/destinations/jammu/sinthan_top/5.jpg", caption: "Hairpin Bends", category: "adventure" },
        { url: "/destinations/jammu/sinthan_top/6.jpg", caption: "Hairpin Bends", category: "adventure" },
        { url: "/destinations/jammu/sinthan_top/4.jpg", caption: "Snow Patches", category: "nature" }
      ]
    },
    highlights: [
      "One of Kashmir's highest motorable passes at 12,500 feet",
      "360-degree panoramic mountain views",
      "Dramatic hairpin bends and elevation changes",
      "Snow patches even in summer",
      "Gateway to remote valleys",
      "Adventure driving experience"
    ],
    attractions: [
      {
        name: "Sinthan Pass Summit",
        description: "The pass summit with breathtaking 360-degree views",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
        mustVisit: true
      },
      {
        name: "Mountain Viewpoints",
        description: "Multiple viewpoints along the ascent offering spectacular vistas",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
        mustVisit: true
      },
      {
        name: "Alpine Meadows",
        description: "High-altitude meadows with seasonal wildflowers",
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600",
        mustVisit: false
      }
    ],
    culturalInsights: [
      { title: "Strategic Pass", description: "Historically an important route connecting Kashmir Valley with Kishtwar and Jammu regions." },
      { title: "Seasonal Access", description: "Pass is closed during winter months (November-May) due to heavy snowfall." },
      { title: "Engineering Marvel", description: "The road to Sinthan Top is an engineering feat with numerous hairpin bends carved into mountainsides." }
    ],
    cuisine: [
      { name: "Kahwa", description: "Hot Kashmiri tea essential at high altitude", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" },
      { name: "Instant Noodles", description: "Quick hot meal available at summit tea stalls", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400", type: "Snack" },
      { name: "Pakoras", description: "Hot fritters perfect for cold weather", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400", type: "Snack" }
    ],
    weather: [
      { season: "Spring", months: "May-June", temp: "0-10°C", rainfall: "80mm", icon: "🌸", description: "Snow melting, pass opening" },
      { season: "Summer", months: "July-August", temp: "5-15°C", rainfall: "60mm", icon: "☀️", description: "Best time, clear views" },
      { season: "Autumn", months: "September-October", temp: "0-10°C", rainfall: "40mm", icon: "🍂", description: "Clear weather, early snow possible" },
      { season: "Winter", months: "November-April", temp: "-20 to 0°C", rainfall: "300mm", icon: "❄️", description: "Heavy snow, completely closed" }
    ],
    thingsToDo: [
      { title: "Pass Crossing", description: "Drive or ride across the spectacular mountain pass.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", duration: "2-3 hours", price: "Vehicle rental ₹3000+" },
      { title: "Photography", description: "Capture stunning mountain panoramas.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", duration: "Flexible", price: "Free" },
      { title: "Snow Play", description: "Experience snow even in summer months.", image: "https://images.unsplash.com/photo-1478827387698-1527781a4887?w=800", duration: "1 hour", price: "Free" }
    ],
    accommodation: [
      { type: "Daksum Base", description: "Stay in Daksum before/after pass crossing.", priceRange: "₹1000-₹3000/night", rating: "4.4/5" },
      { type: "Tent Camping", description: "Camping near the pass (seasonal, very basic).", priceRange: "₹1500-₹2500/night", rating: "4.0/5" }
    ],
    transportation: [
      { mode: "By Road", details: "Accessible from Daksum/Kokernag side or Kishtwar side. 4WD recommended.", icon: "🚙" }
    ],
    travelTips: [
      { icon: "🧥", title: "Warm Clothing", tip: "Carry heavy woolens even in summer, temperatures drop significantly." },
      { icon: "⛽", title: "Fuel Up", tip: "Fill fuel tank before ascending, no fuel stations on the pass." },
      { icon: "📱", title: "No Network", tip: "Mobile network is not available on the pass." },
      { icon: "🩺", title: "Altitude Sickness", tip: "Ascend slowly and stay hydrated to avoid altitude issues." }
    ],
    faq: [
      { question: "When is Sinthan Pass open?", answer: "Typically from June to September/early October, depending on snowfall." },
      { question: "Is it safe to drive?", answer: "Yes, but requires experienced driving skills. The road has hairpin bends and steep sections." },
      { question: "Are there facilities at the top?", answer: "Basic tea stalls are available during peak season, offering hot beverages and snacks." }
    ],
    relatedPosts: [
      { title: "Crossing Sinthan Pass: A Complete Guide", excerpt: "Everything you need to know about conquering Kashmir's high-altitude pass.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", date: "2025-07-15", readTime: "7 min" }
    ],
    stats: {
      tours: "5+",
      visitors: "5K+",
      rating: "4.8/5",
      guides: "8+"
    },
    activities: [
      { name: "Mountain Driving", description: "Thrilling high-altitude drive", icon: "🚗" },
      { name: "Photography", description: "Capture panoramic views", icon: "📸" },
      { name: "Snow Activities", description: "Play in summer snow patches", icon: "⛄" },
      { name: "Sightseeing", description: "Enjoy 360-degree vistas", icon: "👀" }
    ]
  },

  "margan-top": {
    id: "margan-top",
    name: "Margan Top",
    region: "Jammu",
    country: "India",
    tagline: "Discover the spectacular alpine pass adorned with meadows, waterfalls, and stunning mountain vistas.",
    tags: ["ALPINE PASS", "MEADOWS", "WATERFALLS"],
    description: "Experience the enchanting beauty of Margan Top, a high-altitude pass featuring lush meadows and cascading waterfalls.",
    longDescription: "Margan Top is a stunning alpine pass located between Sinthan Pass and Warwan Valley. This lesser-known gem offers spectacular mountain scenery, verdant meadows, and numerous waterfalls cascading down rocky slopes. The pass sits at a considerable elevation, offering panoramic views of surrounding peaks and valleys. During summer, the meadows burst with wildflowers, creating a carpet of colors against the backdrop of snow-capped mountains. Margan Top is perfect for nature lovers, photographers, and those seeking tranquility away from crowded tourist destinations.",
    heroImage: "/destinations/jammu/margan_top/1.jpg",
    startingPrice: 499,
    quickFacts: {
      bestTime: "June-September",
      language: "Kashmiri, Urdu, Hindi",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Sheikh ul-Alam International Airport (160km, 6-7 hours)"
    },
    gallery: {
      all: [
        { url: "/destinations/jammmu/margan_top/1.jpg", caption: "Alpine Meadows", category: "landscapes" },
        { url: "/destinations/jammmu/margan_top/2.jpg", caption: "Mountain Waterfalls", category: "nature" },
        { url: "/destinations/jammmu/margan_top/3.jpg", caption: "Pass Views", category: "landscapes" },
        { url: "/destinations/jammmu/margan_top/4.jpg", caption: "Wildflowers", category: "nature" }
      ]
    },
    highlights: [
      "Spectacular alpine meadows with seasonal flowers",
      "Multiple waterfalls cascading from peaks",
      "Panoramic mountain vistas",
      "Between Sinthan Pass and Warwan Valley",
      "Less crowded than other passes",
      "Perfect for photography and nature walks"
    ],
    attractions: [
      {
        name: "Alpine Meadows",
        description: "Vast meadows carpeted with wildflowers in summer",
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600",
        mustVisit: true
      },
      {
        name: "Mountain Waterfalls",
        description: "Numerous waterfalls flowing from mountain slopes",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
        mustVisit: true
      },
      {
        name: "Panoramic Viewpoints",
        description: "Multiple vantage points offering stunning valley views",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
        mustVisit: false
      }
    ],
    culturalInsights: [
      { title: "Pristine Environment", description: "Margan Top remains relatively untouched, offering an authentic wilderness experience." },
      { title: "Seasonal Beauty", description: "The pass transforms dramatically with seasons - snow in winter, flowers in summer." },
      { title: "Gateway Pass", description: "Serves as a scenic connection between Sinthan Pass and the remote Warwan Valley." }
    ],
    cuisine: [
      { name: "Packed Meals", description: "Most visitors carry packed meals due to limited facilities", image: "https://images.unsplash.com/photo-1543257580-7269da773bf5?w=400", type: "Packed Food" },
      { name: "Hot Tea", description: "Tea from thermosfor warmth at high altitude", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" },
      { name: "Energy Snacks", description: "Chocolates, nuts, and energy bars", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400", type: "Snacks" }
    ],
    weather: [
      { season: "Spring", months: "May-June", temp: "5-15°C", rainfall: "70mm", icon: "🌸", description: "Snow melting, flowers emerging" },
      { season: "Summer", months: "July-August", temp: "10-20°C", rainfall: "50mm", icon: "☀️", description: "Best time, meadows in full bloom" },
      { season: "Autumn", months: "September", temp: "5-15°C", rainfall: "40mm", icon: "🍂", description: "Clear skies, cooler temperatures" },
      { season: "Winter", months: "October-April", temp: "-15 to 5°C", rainfall: "250mm", icon: "❄️", description: "Heavy snow, inaccessible" }
    ],
    thingsToDo: [
      { title: "Meadow Walks", description: "Explore the beautiful alpine meadows on foot.", image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800", duration: "2-3 hours", price: "Free" },
      { title: "Waterfall Photography", description: "Capture the stunning cascading waterfalls.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", duration: "Flexible", price: "Free" },
      { title: "Picnicking", description: "Enjoy a peaceful picnic in the meadows.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", duration: "Half day", price: "Free" }
    ],
    accommodation: [
      { type: "Camping", description: "Basic camping facilities in summer months.", priceRange: "₹1500-₹3000/night", rating: "4.2/5" },
      { type: "Daksum Base", description: "Stay in nearby Daksum before/after visiting.", priceRange: "₹1000-₹3000/night", rating: "4.4/5" }
    ],
    transportation: [
      { mode: "By Road", details: "Accessible en route from Sinthan Pass to Warwan Valley. 4WD vehicle recommended.", icon: "🚙" }
    ],
    travelTips: [
      { icon: "🥾", title: "Good Footwear", tip: "Wear proper trekking shoes for meadow walks." },
      { icon: "🧥", title: "Layer Clothing", tip: "Weather can change quickly, dress in layers." },
      { icon: "💧", title: "Carry Water", tip: "No shops available, carry sufficient water and snacks." },
      { icon: "📱", title: "No Mobile Network", tip: "Limited or no mobile connectivity available." }
    ],
    faq: [
      { question: "How do I reach Margan Top?", answer: "It's located on the route between Sinthan Pass and Warwan Valley, accessible by 4WD vehicles during summer." },
      { question: "Are there any facilities?", answer: "No permanent facilities exist. Visitors should carry food, water, and necessary supplies." },
      { question: "Can I camp there?", answer: "Yes, camping is possible during summer months, but you need to bring your own equipment." }
    ],
    relatedPosts: [
      { title: "Margan Top: Kashmir's Hidden Alpine Paradise", excerpt: "Explore the meadows and waterfalls of this spectacular pass.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", date: "2025-07-20", readTime: "6 min" }
    ],
    stats: {
      tours: "3+",
      visitors: "1K+",
      rating: "4.9/5",
      guides: "4+"
    },
    activities: [
      { name: "Nature Walks", description: "Explore alpine meadows", icon: "🚶" },
      { name: "Photography", description: "Capture waterfalls and landscapes", icon: "📸" },
      { name: "Picnicking", description: "Enjoy peaceful outdoor meals", icon: "🧺" },
      { name: "Bird Watching", description: "Spot high-altitude bird species", icon: "🦅" }
    ]
  },

  "tosa-maidan": {
    id: "tosa-maidan",
    name: "Tosa Maidan",
    region: "Kashmir",
    country: "India",
    tagline: "Discover the vast alpine meadow, once a military firing range, now a pristine natural paradise.",
    tags: ["MEADOWS", "ALPINE", "ADVENTURE"],
    description: "Experience the expansive beauty of Tosa Maidan, a high-altitude meadow offering stunning views and peaceful landscapes.",
    longDescription: "Tosa Maidan, meaning 'meadow of wild horses', is a spectacular alpine meadow located in the Pir Panjal range of Kashmir. Spread across several kilometers at an elevation of about 11,000 feet, this vast grassland was once used as a firing range but has now been opened to tourists. The meadow offers breathtaking 360-degree views of snow-capped peaks, rolling green hills, and endless blue skies. During summer, the meadow is carpeted with wildflowers, creating a stunning natural spectacle. It's an ideal destination for camping, trekking, horse riding, and experiencing pristine wilderness away from crowded tourist spots.",
    heroImage: "/destinations/kashmir/tosa_maidan/2.png",
    startingPrice: 399,
    quickFacts: {
      bestTime: "May-September",
      language: "Kashmiri, Urdu, Hindi",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Sheikh ul-Alam International Airport (110km, 4 hours)"
    },
    gallery: {
      all: [
        { url: "/destinations/kashmir/tosa_maidan/1.png", caption: "Vast Meadows", category: "landscapes" },
        { url: "/destinations/kashmir/tosa_maidan/2.png", caption: "Mountain Views", category: "landscapes" },
        { url: "/destinations/kashmir/tosa_maidan/3.png", caption: "Wildflowers", category: "nature" },
        { url: "/destinations/kashmir/tosa_maidan/5.png", caption: "Wildflowers", category: "nature" },
        { url: "/destinations/kashmir/tosa_maidan/4.png", caption: "Camping Sites", category: "adventure" }
      ]
    },
    highlights: [
      "Vast alpine meadow at 11,000 feet elevation",
      "360-degree mountain views",
      "Wildflower carpets in summer",
      "Perfect for camping and horse riding",
      "Recently opened to tourists",
      "Pristine and less crowded"
    ],
    attractions: [
      {
        name: "Alpine Meadow",
        description: "Expansive grassland with stunning mountain backdrop",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
        mustVisit: true
      },
      {
        name: "Mountain Viewpoints",
        description: "Panoramic views of Pir Panjal range",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
        mustVisit: true
      },
      {
        name: "Camping Grounds",
        description: "Perfect spots for overnight camping under stars",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600",
        mustVisit: false
      }
    ],
    culturalInsights: [
      { title: "Military History", description: "Tosa Maidan was used as a high-altitude firing range until recently, now opened for tourism." },
      { title: "Name Origin", description: "The name means 'meadow of wild horses', though wild horses are no longer found here." },
      { title: "Emerging Destination", description: "As a newly opened tourist spot, it offers a pristine experience away from crowds." }
    ],
    cuisine: [
      { name: "Packed Meals", description: "Visitors typically bring packed lunches due to limited facilities", image: "https://images.unsplash.com/photo-1543257580-7269da773bf5?w=400", type: "Packed Food" },
      { name: "Kehwa", description: "Traditional Kashmiri tea carried in thermos", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" },
      { name: "Local Snacks", description: "Dry fruits and traditional breads", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400", type: "Snacks" }
    ],
    weather: [
      { season: "Spring", months: "April-May", temp: "5-15°C", rainfall: "60mm", icon: "🌸", description: "Snow melting, flowers emerging" },
      { season: "Summer", months: "June-August", temp: "10-20°C", rainfall: "40mm", icon: "☀️", description: "Best time, meadows in full bloom" },
      { season: "Autumn", months: "September-October", temp: "5-15°C", rainfall: "30mm", icon: "🍂", description: "Clear skies, pleasant weather" },
      { season: "Winter", months: "November-March", temp: "-10 to 5°C", rainfall: "200mm", icon: "❄️", description: "Heavy snow, difficult access" }
    ],
    thingsToDo: [
      { title: "Meadow Camping", description: "Camp overnight in the vast alpine meadow.", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800", duration: "Overnight", price: "₹1500-₹3000" },
      { title: "Horse Riding", description: "Explore the meadow on horseback.", image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800", duration: "1-2 hours", price: "₹500-₹1000" },
      { title: "Photography", description: "Capture the stunning landscapes and wildflowers.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", duration: "Flexible", price: "Free" }
    ],
    accommodation: [
      { type: "Camping", description: "Tented accommodation in the meadow (seasonal).", priceRange: "₹1500-₹3000/night", rating: "4.5/5" },
      { type: "Khag Base", description: "Stay in nearby Khag village.", priceRange: "₹1000-₹2500/night", rating: "4.2/5" }
    ],
    transportation: [
      { mode: "By Road", details: "Accessible from Khag (25km) via mountain roads. 4WD recommended.", icon: "🚙" }
    ],
    travelTips: [
      { icon: "🧥", title: "Warm Clothing", tip: "Temperatures can drop suddenly, carry warm layers." },
      { icon: "🎒", title: "Self-Sufficient", tip: "No shops available, bring all necessary supplies." },
      { icon: "📱", title: "Limited Network", tip: "Mobile connectivity is very limited." },
      { icon: "🥾", title: "Good Shoes", tip: "Wear proper trekking shoes for meadow walks." }
    ],
    faq: [
      { question: "How do I reach Tosa Maidan?", answer: "From Srinagar, drive to Khag (85km), then take a 25km mountain road to Tosa Maidan. 4WD vehicle is recommended." },
      { question: "Can I camp there?", answer: "Yes, camping is allowed and encouraged. Some tour operators provide tented camps with basic facilities." },
      { question: "Is it safe to visit?", answer: "Yes, it's safe. The area has been cleared and opened for tourism." }
    ],
    relatedPosts: [
      { title: "Tosa Maidan: Kashmir's Newest Tourist Paradise", excerpt: "Discover the vast alpine meadow that was once off-limits.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", date: "2025-06-25", readTime: "6 min" }
    ],
    stats: {
      tours: "4+",
      visitors: "3K+",
      rating: "4.7/5",
      guides: "7+"
    },
    activities: [
      { name: "Camping", description: "Overnight stays in alpine meadow", icon: "⛺" },
      { name: "Horse Riding", description: "Explore on horseback", icon: "🐴" },
      { name: "Photography", description: "Capture pristine landscapes", icon: "📸" },
      { name: "Trekking", description: "Meadow and hill walks", icon: "🥾" }
    ]
  },

  "wular-lake": {
    id: "wular-lake",
    name: "Wular Lake",
    region: "Kashmir",
    country: "India",
    tagline: "Experience Asia's largest freshwater lake, a haven for migratory birds and aquatic biodiversity.",
    tags: ["LAKE", "BIRD WATCHING", "NATURE"],
    description: "Discover the serene beauty of Wular Lake, one of Asia's largest freshwater lakes with rich biodiversity.",
    longDescription: "Wular Lake is one of the largest freshwater lakes in Asia, spread across approximately 200 square kilometers in the Bandipora district of Kashmir. Fed by the Jhelum River, this ancient lake is not only a scenic wonder but also plays a crucial role in the region's ecosystem. The lake serves as a natural flood basin and is home to diverse aquatic life and migratory birds. Surrounded by mountains on three sides, Wular Lake offers breathtaking views, especially during sunrise and sunset. The lake is dotted with small islands, including the artificial island of Zaina Lank with its ancient watchtower. Fishing communities thrive along its shores, and the lake provides excellent opportunities for bird watching, boating, and photography.",
    heroImage: "/destinations/kashmir/wular_lake/1.png",
    startingPrice: 249,
    quickFacts: {
      bestTime: "October-April (for bird watching)",
      language: "Kashmiri, Urdu, Hindi",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Sheikh ul-Alam International Airport (60km, 2 hours)"
    },
    gallery: {
      all: [
        { url: "/destinations/kashmir/wular_lake/1.png", caption: "Wular Lake Expanse", category: "landscapes" },
        { url: "/destinations/kashmir/wular_lake/2.png", caption: "Sunset Views", category: "landscapes" },
        { url: "/destinations/kashmir/wular_lake/3.png", caption: "Migratory Birds", category: "wildlife" },
        { url: "/destinations/kashmir/wular_lake/4.png", caption: "Fishing Boats", category: "culture" }
      ]
    },
    highlights: [
      "One of Asia's largest freshwater lakes",
      "Important wetland and bird sanctuary",
      "Historic Zaina Lank island with watchtower",
      "Spectacular sunrise and sunset views",
      "Traditional fishing communities",
      "Ideal for bird watching and photography"
    ],
    attractions: [
      {
        name: "Zaina Lank Island",
        description: "Artificial island with 15th-century watchtower ruins",
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600",
        mustVisit: true
      },
      {
        name: "Bird Sanctuary",
        description: "Spot numerous migratory bird species",
        image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600",
        mustVisit: true
      },
      {
        name: "Lake Viewpoints",
        description: "Multiple spots offering panoramic lake views",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
        mustVisit: false
      }
    ],
    culturalInsights: [
      { title: "Ancient History", description: "The lake has existed for millions of years and has been referenced in ancient texts." },
      { title: "Fishing Heritage", description: "Traditional fishing communities have lived along Wular's shores for generations." },
      { title: "Ecological Importance", description: "The lake serves as a natural flood absorption basin for the Jhelum River." }
    ],
    cuisine: [
      { name: "Fresh Fish", description: "Lake fish prepared in traditional Kashmiri style", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400", type: "Seafood" },
      { name: "Noon Chai", description: "Traditional pink salt tea", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" },
      { name: "Kashmiri Pulao", description: "Fragrant rice dish with dry fruits", image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400", type: "Main Course" }
    ],
    weather: [
      { season: "Spring", months: "March-May", temp: "15-25°C", rainfall: "70mm", icon: "🌸", description: "Pleasant weather, good for boating" },
      { season: "Summer", months: "June-August", temp: "20-30°C", rainfall: "50mm", icon: "☀️", description: "Warm, ideal for lake visits" },
      { season: "Autumn", months: "September-November", temp: "10-20°C", rainfall: "40mm", icon: "🍂", description: "Cool weather, migratory birds arrive" },
      { season: "Winter", months: "December-February", temp: "0-10°C", rainfall: "30mm", icon: "❄️", description: "Cold, best for bird watching" }
    ],
    thingsToDo: [
      { title: "Boat Ride", description: "Explore the vast lake by boat.", image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800", duration: "1-2 hours", price: "₹500-₹1000" },
      { title: "Bird Watching", description: "Spot migratory birds, especially in winter.", image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800", duration: "2-3 hours", price: "₹300" },
      { title: "Visit Zaina Lank", description: "Explore the historic island and watchtower.", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800", duration: "1 hour", price: "₹200" }
    ],
    accommodation: [
      { type: "Lakeside Guesthouse", description: "Simple accommodations near the lake shore.", priceRange: "₹1000-₹2500/night", rating: "4.0/5" },
      { type: "Bandipora Hotels", description: "Hotels in nearby Bandipora town.", priceRange: "₹1500-₹4000/night", rating: "4.2/5" }
    ],
    transportation: [
      { mode: "By Road", details: "60km from Srinagar via Bandipora, well-connected by road.", icon: "🚙" },
      { mode: "By Boat", details: "Local boats available for lake exploration.", icon: "⛵" }
    ],
    travelTips: [
      { icon: "🦅", title: "Bird Watching Season", tip: "Visit between October-March for best bird watching opportunities." },
      { icon: "🌅", title: "Sunrise/Sunset", tip: "Don't miss the spectacular sunrise or sunset views over the lake." },
      { icon: "📱", title: "Basic Facilities", tip: "Limited tourist facilities, plan accordingly." },
      { icon: "🧥", title: "Warm Clothes", tip: "Carry warm clothing, especially in winter months." }
    ],
    faq: [
      { question: "What is the best time to visit Wular Lake?", answer: "October to April is ideal, especially for bird watching. Summer months are good for boating." },
      { question: "Can I go boating on the lake?", answer: "Yes, local boatmen offer rides. You can also visit Zaina Lank island by boat." },
      { question: "What birds can I see here?", answer: "Wular attracts many migratory species including geese, ducks, coots, and various wading birds during winter." }
    ],
    relatedPosts: [
      { title: "Wular Lake: Kashmir's Forgotten Gem", excerpt: "Discover Asia's largest freshwater lake and its rich biodiversity.", image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800", date: "2025-05-15", readTime: "7 min" }
    ],
    stats: {
      tours: "5+",
      visitors: "8K+",
      rating: "4.5/5",
      guides: "10+"
    },
    activities: [
      { name: "Boating", description: "Explore the vast lake", icon: "⛵" },
      { name: "Bird Watching", description: "Spot migratory species", icon: "🦅" },
      { name: "Photography", description: "Capture lake landscapes", icon: "📸" },
      { name: "Fishing", description: "Traditional fishing experience", icon: "🎣" }
    ]
  },

  "manasbal-lake": {
    id: "manasbal-lake",
    name: "Manasbal Lake",
    region: "Kashmir",
    country: "India",
    tagline: "Explore Kashmir's deepest lake, known as the 'Supreme Gem of all Kashmir Lakes' with crystal-clear waters.",
    tags: ["LAKE", "BIRD SANCTUARY", "LOTUS GARDENS"],
    description: "Experience the pristine beauty of Manasbal Lake, Kashmir's deepest natural lake surrounded by Mughal gardens.",
    longDescription: "Manasbal Lake, often called the 'Supreme Gem of all Kashmir Lakes', is the deepest natural lake in Kashmir with a maximum depth of about 13 meters. Located about 30km north of Srinagar in Ganderbal district, this beautiful lake is fed by underground springs, keeping its waters remarkably clean and clear. The lake is surrounded by three villages and is famous for its aquatic life, especially lotus flowers that bloom in July-August. Ancient Mughal gardens, including the Jaroka garden, dot the lake shores. The lake is also an important bird sanctuary, attracting various migratory and resident bird species. Unlike the more touristy Dal Lake, Manasbal offers a peaceful, authentic experience with local charm.",
    heroImage: "/destinations/kashmir/manasbal_lake/3.png",
    startingPrice: 199,
    quickFacts: {
      bestTime: "March-November",
      language: "Kashmiri, Urdu, Hindi",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Sheikh ul-Alam International Airport (30km, 1 hour)"
    },
    gallery: {
      all: [
        { url: "/destinations/kashmir/manasbal_lake/1.png", caption: "Lake Waters", category: "landscapes" },
        { url: "/destinations/kashmir/manasbal_lake/2.png", caption: "Lotus Blooms", category: "nature" },
        { url: "/destinations/kashmir/manasbal_lake/3.png", caption: "Mughal Garden", category: "heritage" },
        { url: "/destinations/kashmir/manasbal_lake/4.png", caption: "Bird Life", category: "wildlife" }
      ]
    },
    highlights: [
      "Kashmir's deepest natural lake",
      "Crystal-clear spring-fed waters",
      "Famous lotus gardens (blooming July-August)",
      "Historic Mughal Jaroka garden",
      "Important bird sanctuary",
      "Peaceful and less touristy than Dal Lake"
    ],
    attractions: [
      {
        name: "Lotus Gardens",
        description: "Spectacular lotus blooms covering the lake in summer",
        image: "https://images.unsplash.com/photo-1498842812179-c81beecf902c?w=600",
        mustVisit: true
      },
      {
        name: "Jaroka Garden",
        description: "Historic Mughal garden on the lake shore",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
        mustVisit: true
      },
      {
        name: "Bird Watching Spots",
        description: "Various viewpoints for observing aquatic birds",
        image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600",
        mustVisit: false
      }
    ],
    culturalInsights: [
      { title: "Deepest Lake", description: "Manasbal is Kashmir's deepest natural lake, reaching depths of 13 meters." },
      { title: "Mughal Connection", description: "The Mughal emperors favored this lake and built gardens along its shores." },
      { title: "Lotus Paradise", description: "The lake is famous for its lotus blooms, considered among the finest in Asia." }
    ],
    cuisine: [
      { name: "Fresh Lake Fish", description: "Fish from Manasbal cooked in Kashmiri style", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400", type: "Seafood" },
      { name: "Sheer Chai", description: "Traditional pink salt tea", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" },
      { name: "Nadru Yakhin", description: "Lotus stem curry, a local specialty", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", type: "Main Course" }
    ],
    weather: [
      { season: "Spring", months: "March-May", temp: "15-25°C", rainfall: "70mm", icon: "🌸", description: "Pleasant weather, gardens blooming" },
      { season: "Summer", months: "June-August", temp: "20-30°C", rainfall: "50mm", icon: "☀️", description: "Best time, lotus in full bloom" },
      { season: "Autumn", months: "September-November", temp: "10-20°C", rainfall: "40mm", icon: "🍂", description: "Cool, clear skies" },
      { season: "Winter", months: "December-February", temp: "0-10°C", rainfall: "30mm", icon: "❄️", description: "Cold, occasional freezing" }
    ],
    thingsToDo: [
      { title: "Shikara Ride", description: "Peaceful boat ride on crystal-clear waters.", image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800", duration: "1 hour", price: "₹300-₹500" },
      { title: "Lotus Viewing", description: "See the spectacular lotus blooms (July-August).", image: "https://images.unsplash.com/photo-1498842812179-c81beecf902c?w=800", duration: "1-2 hours", price: "Free" },
      { title: "Garden Visit", description: "Explore the historic Jaroka Mughal garden.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", duration: "30 min", price: "₹50" }
    ],
    accommodation: [
      { type: "Lakeside Guesthouse", description: "Simple accommodations near the lake.", priceRange: "₹800-₹2000/night", rating: "4.1/5" },
      { type: "Ganderbal Hotels", description: "Hotels in nearby Ganderbal town.", priceRange: "₹1500-₹3500/night", rating: "4.3/5" }
    ],
    transportation: [
      { mode: "By Road", details: "30km from Srinagar, easily accessible by taxi or private vehicle.", icon: "🚙" },
      { mode: "By Shikara", details: "Traditional boats available for lake exploration.", icon: "🚣" }
    ],
    travelTips: [
      { icon: "🌺", title: "Lotus Season", tip: "Visit in July-August to see the lotus blooms at their peak." },
      { icon: "📸", title: "Photography", tip: "Early morning offers best light for photography." },
      { icon: "🦆", title: "Bird Watching", tip: "Bring binoculars for bird watching, especially in winter." },
      { icon: "🏞️", title: "Peaceful Visit", tip: "Less crowded than Dal Lake, perfect for tranquil experience." }
    ],
    faq: [
      { question: "When do lotus flowers bloom?", answer: "Lotus flowers bloom from July to August, creating a spectacular sight across the lake." },
      { question: "How is Manasbal different from Dal Lake?", answer: "Manasbal is deeper, less commercialized, and more peaceful. It has crystal-clear spring-fed waters." },
      { question: "Can I stay in a houseboat here?", answer: "Unlike Dal Lake, Manasbal has limited houseboat options. Most visitors stay in guesthouses or return to Srinagar." }
    ],
    relatedPosts: [
      { title: "Manasbal Lake: The Hidden Paradise", excerpt: "Discover Kashmir's deepest and most pristine lake.", image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800", date: "2025-06-05", readTime: "6 min" }
    ],
    stats: {
      tours: "6+",
      visitors: "12K+",
      rating: "4.6/5",
      guides: "12+"
    },
    activities: [
      { name: "Shikara Rides", description: "Peaceful boat rides", icon: "🚣" },
      { name: "Lotus Viewing", description: "Seasonal lotus blooms", icon: "🌺" },
      { name: "Photography", description: "Capture pristine beauty", icon: "📸" },
      { name: "Bird Watching", description: "Aquatic bird species", icon: "🦆" }
    ]
  },

  "awantipora": {
    id: "awantipora",
    name: "Awantipora Ruins",
    region: "Kashmir",
    country: "India",
    tagline: "Step back in time at these magnificent 1100-year-old Hindu temple ruins, Kashmir's architectural heritage.",
    tags: ["HERITAGE", "RUINS", "ARCHAEOLOGY"],
    description: "Explore the ancient Awantipora temple ruins, remarkable examples of Kashmir's rich architectural and cultural heritage.",
    longDescription: "Awantipora, named after King Avantivarman who ruled Kashmir from 855-883 CE, is home to two spectacular temple ruins dedicated to Lord Vishnu (Avantiswami Temple) and Lord Shiva (Avantiswara Temple). These 1100-year-old structures represent the finest examples of Kashmiri temple architecture from the medieval period. Built from locally quarried limestone, the temples showcase intricate carvings, elegant columns, and sophisticated architectural design. Though partially ruined due to earthquakes and time, the remaining structures still convey the grandeur of Kashmir's ancient Hindu heritage. The site is located on the banks of the Jhelum River in Pulwama district, about 30km from Srinagar. These ruins are protected monuments under the Archaeological Survey of India and offer a fascinating glimpse into Kashmir's pre-Islamic history.",
    heroImage: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=1920&q=80",
    startingPrice: 149,
    quickFacts: {
      bestTime: "March-October",
      language: "Kashmiri, Urdu, Hindi",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Sheikh ul-Alam International Airport (30km, 45 minutes)"
    },
    gallery: {
      all: [
        { url: "/destinations/kashmir/awantipora/01.jpg", caption: "Temple Ruins", category: "heritage" },
        { url: "/destinations/kashmir/awantipora/02.jpg", caption: "Stone Carvings", category: "heritage" },
        { url: "/destinations/kashmir/awantipora/03.jpg", caption: "Architectural Details", category: "architecture" },
        { url: "/destinations/kashmir/awantipora/04.jpg", caption: "Historic Site", category: "heritage" }
      ]
    },
    highlights: [
      "1100-year-old Hindu temple ruins",
      "Finest examples of Kashmiri temple architecture",
      "Dedicated to Lord Vishnu and Lord Shiva",
      "Intricate stone carvings and sculptures",
      "Protected by Archaeological Survey of India",
      "Important pre-Islamic heritage site"
    ],
    attractions: [
      {
        name: "Avantiswami Temple",
        description: "Main temple dedicated to Lord Vishnu with elaborate architecture",
        image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=600",
        mustVisit: true
      },
      {
        name: "Avantiswara Temple",
        description: "Shiva temple with beautiful stone carvings",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600",
        mustVisit: true
      },
      {
        name: "Carved Pillars",
        description: "Intricately carved stone pillars and architectural elements",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600",
        mustVisit: false
      }
    ],
    culturalInsights: [
      { title: "King Avantivarman", description: "Built by King Avantivarman (855-883 CE), founder of the Utpala dynasty of Kashmir." },
      { title: "Architectural Style", description: "Represents unique Kashmiri temple architecture with strong Greek and Gandharan influences." },
      { title: "Historical Significance", description: "Evidence of Kashmir's rich Hindu heritage and architectural prowess before Islamic period." }
    ],
    cuisine: [
      { name: "Local Snacks", description: "Available from nearby Awantipora town", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400", type: "Snacks" },
      { name: "Kashmiri Tea", description: "Traditional tea from local chai stalls", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" },
      { name: "Street Food", description: "Samosas and pakoras near the site", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400", type: "Street Food" }
    ],
    weather: [
      { season: "Spring", months: "March-May", temp: "15-25°C", rainfall: "70mm", icon: "🌸", description: "Pleasant weather for exploration" },
      { season: "Summer", months: "June-August", temp: "20-30°C", rainfall: "50mm", icon: "☀️", description: "Warm but comfortable" },
      { season: "Autumn", months: "September-November", temp: "10-20°C", rainfall: "40mm", icon: "🍂", description: "Cool and ideal for sightseeing" },
      { season: "Winter", months: "December-February", temp: "0-10°C", rainfall: "30mm", icon: "❄️", description: "Cold, fewer visitors" }
    ],
    thingsToDo: [
      { title: "Temple Exploration", description: "Walk through the ancient ruins and structures.", image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=800", duration: "1-2 hours", price: "₹25 (entry)" },
      { title: "Photography", description: "Capture the architectural details and carvings.", image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800", duration: "Flexible", price: "Free" },
      { title: "Historical Tour", description: "Guided tour explaining the history and architecture.", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800", duration: "1 hour", price: "₹500" }
    ],
    accommodation: [
      { type: "Awantipora Hotels", description: "Basic hotels in Awantipora town.", priceRange: "₹800-₹2000/night", rating: "3.8/5" },
      { type: "Srinagar Base", description: "Most visitors stay in Srinagar (30km away).", priceRange: "₹2000-₹8000/night", rating: "4.5/5" }
    ],
    transportation: [
      { mode: "By Road", details: "30km from Srinagar on Srinagar-Jammu highway, easily accessible by taxi.", icon: "🚙" }
    ],
    travelTips: [
      { icon: "📚", title: "Learn History", tip: "Read about King Avantivarman and Utpala dynasty before visiting." },
      { icon: "🕐", title: "Visit Timing", tip: "Allow 1-2 hours for thorough exploration of both temple sites." },
      { icon: "👟", title: "Comfortable Shoes", tip: "Wear comfortable shoes for walking on uneven surfaces." },
      { icon: "☀️", title: "Sun Protection", tip: "Minimal shade available, carry hat and sunscreen." }
    ],
    faq: [
      { question: "What is the entry fee?", answer: "Entry fee is ₹25 for Indian nationals and ₹300 for foreign tourists. Free for children under 15." },
      { question: "How much time needed?", answer: "1-2 hours is sufficient to explore both temple ruins thoroughly." },
      { question: "Is photography allowed?", answer: "Yes, photography is allowed for personal use without any additional charges." }
    ],
    relatedPosts: [
      { title: "Awantipora: Kashmir's Forgotten Temples", excerpt: "Explore the 1100-year-old architectural marvels of ancient Kashmir.", image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=800", date: "2025-05-25", readTime: "8 min" }
    ],
    stats: {
      tours: "8+",
      visitors: "15K+",
      rating: "4.4/5",
      guides: "15+"
    },
    activities: [
      { name: "Temple Exploration", description: "Walk through ancient ruins", icon: "🏛️" },
      { name: "Photography", description: "Capture architectural details", icon: "📸" },
      { name: "History Learning", description: "Discover Kashmir's past", icon: "📚" },
      { name: "Architecture Study", description: "Examine unique designs", icon: "🏗️" }
    ]
  },

  "astan-marg": {
    id: "astan-marg",
    name: "Astan Marg",
    region: "Kashmir",
    country: "India",
    tagline: "Discover the serene meadow nestled between pine forests, a hidden gem perfect for peaceful retreats.",
    tags: ["MEADOWS", "FORESTS", "OFF-BEAT"],
    description: "Experience the tranquil beauty of Astan Marg, a picturesque meadow surrounded by dense forests and mountains.",
    longDescription: "Astan Marg is a beautiful, relatively unknown meadow located in the Anantnag district of Kashmir. This hidden gem sits at a moderate altitude, surrounded by dense pine and deodar forests with the majestic Pir Panjal range in the background. The meadow offers a peaceful retreat away from crowded tourist spots, making it perfect for those seeking solitude and natural beauty. During summer, the grasslands are lush green and dotted with wildflowers. The area is excellent for picnics, nature walks, and photography. Local shepherds can sometimes be seen with their flocks, adding to the pastoral charm. The cool climate, fresh mountain air, and pristine environment make Astan Marg an ideal destination for nature lovers and families.",
    heroImage: "destinations/kashmir/astan_marg/1.jpg",
    startingPrice: 199,
    quickFacts: {
      bestTime: "April-October",
      language: "Kashmiri, Urdu, Hindi",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Sheikh ul-Alam International Airport (75km, 3 hours)"
    },
    gallery: {
      all: [
        { url: "/destinations/kashmir/astan_marg/1.jpg", caption: "Meadow Views", category: "landscapes" },
        { url: "/destinations/kashmir/astan_marg/2.jpg", caption: "Pine Forests", category: "nature" },
        { url: "/destinations/kashmir/astan_marg/3.jpg", caption: "Picnic Spots", category: "leisure" },
        { url: "/destinations/kashmir/astan_marg/4.jpg", caption: "Mountain Backdrop", category: "landscapes" }
      ]
    },
    highlights: [
      "Peaceful meadow surrounded by pine forests",
      "Less crowded, off-beat destination",
      "Perfect for family picnics",
      "Beautiful Pir Panjal mountain views",
      "Nature walks and forest trails",
      "Pastoral setting with shepherds and flocks"
    ],
    attractions: [
      {
        name: "Central Meadow",
        description: "Expansive grassland perfect for relaxation and activities",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
        mustVisit: true
      },
      {
        name: "Pine Forests",
        description: "Dense coniferous forests surrounding the meadow",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
        mustVisit: true
      },
      {
        name: "Nature Trails",
        description: "Walking paths through forests and meadows",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600",
        mustVisit: false
      }
    ],
    culturalInsights: [
      { title: "Hidden Gem", description: "Astan Marg remains relatively unknown, preserving its pristine natural character." },
      { title: "Pastoral Life", description: "Local shepherds use the meadow for grazing, offering glimpses of traditional lifestyle." },
      { title: "Emerging Destination", description: "Slowly gaining popularity among travelers seeking off-beat Kashmir experiences." }
    ],
    cuisine: [
      { name: "Packed Picnic Meals", description: "Most visitors bring their own food for picnics", image: "https://images.unsplash.com/photo-1543257580-7269da773bf5?w=400", type: "Packed Food" },
      { name: "Local Tea Stalls", description: "Simple tea stalls available seasonally", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" },
      { name: "Kashmiri Snacks", description: "Traditional breads and snacks from nearby areas", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400", type: "Snacks" }
    ],
    weather: [
      { season: "Spring", months: "April-May", temp: "10-20°C", rainfall: "60mm", icon: "🌸", description: "Pleasant weather, flowers blooming" },
      { season: "Summer", months: "June-August", temp: "15-25°C", rainfall: "40mm", icon: "☀️", description: "Best time, cool and comfortable" },
      { season: "Autumn", months: "September-October", temp: "10-20°C", rainfall: "30mm", icon: "🍂", description: "Clear skies, colorful foliage" },
      { season: "Winter", months: "November-March", temp: "-5 to 10°C", rainfall: "100mm", icon: "❄️", description: "Cold with snow, limited access" }
    ],
    thingsToDo: [
      { title: "Meadow Picnic", description: "Enjoy a family picnic in the peaceful meadow.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", duration: "Half day", price: "Free" },
      { title: "Nature Walk", description: "Explore the surrounding pine forests on foot.", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800", duration: "1-2 hours", price: "Free" },
      { title: "Photography", description: "Capture the natural beauty and mountain views.", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800", duration: "Flexible", price: "Free" }
    ],
    accommodation: [
      { type: "Nearby Guesthouses", description: "Simple accommodations in nearby villages.", priceRange: "₹800-₹1500/night", rating: "3.9/5" },
      { type: "Anantnag Base", description: "Stay in Anantnag town (25km away).", priceRange: "₹1500-₹3500/night", rating: "4.2/5" }
    ],
    transportation: [
      { mode: "By Road", details: "Accessible from Anantnag, about 25km via local roads.", icon: "🚙" }
    ],
    travelTips: [
      { icon: "🧺", title: "Bring Picnic Supplies", tip: "No restaurants, bring your own food and beverages." },
      { icon: "🧥", title: "Light Jacket", tip: "Carry a light jacket even in summer, evenings can be cool." },
      { icon: "📱", title: "Limited Network", tip: "Mobile network may be weak or unavailable." },
      { icon: "🚗", title: "Own Transport", tip: "Best to visit with private vehicle as public transport is limited." }
    ],
    faq: [
      { question: "Is Astan Marg crowded?", answer: "No, it's a relatively unknown destination and remains peaceful even during peak season." },
      { question: "Are there facilities available?", answer: "Very basic facilities. Visitors should be self-sufficient with food, water, and supplies." },
      { question: "Can families visit?", answer: "Yes, it's perfect for families looking for a peaceful day out in nature." }
    ],
    relatedPosts: [
      { title: "Astan Marg: Kashmir's Peaceful Retreat", excerpt: "Discover this hidden meadow perfect for peaceful getaways.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", date: "2025-06-15", readTime: "5 min" }
    ],
    stats: {
      tours: "3+",
      visitors: "1.5K+",
      rating: "4.5/5",
      guides: "5+"
    },
    activities: [
      { name: "Picnicking", description: "Peaceful meadow picnics", icon: "🧺" },
      { name: "Nature Walks", description: "Forest and meadow trails", icon: "🚶" },
      { name: "Photography", description: "Capture natural beauty", icon: "📸" },
      { name: "Relaxation", description: "Quiet peaceful retreat", icon: "🧘" }
    ]
  },

  // ADDITIONAL KASHMIR DESTINATIONS
  "doodhpathri": {
    id: "doodhpathri",
    name: "Doodhpathri",
    region: "Kashmir",
    country: "India",
    tagline: "The Valley of Milk - pristine meadows, crystal streams, and untouched natural beauty.",
    tags: ["MEADOWS", "NATURE", "OFFBEAT"],
    description: "Discover the hidden gem of Kashmir with lush green meadows and gurgling streams.",
    longDescription: "Doodhpathri, meaning 'Valley of Milk', is a pristine bowl-shaped meadow located at 2,730m altitude in Budgam district. Named for its milky white streams that flow through the meadow, this offbeat destination offers untouched natural beauty, dense pine forests, and panoramic mountain views. Perfect for nature lovers seeking tranquility away from crowds.",
    heroImage: "/destinations/kashmir/doodpathri/5.jpg",
    startingPrice: 249,
    quickFacts: {
      bestTime: "April-October",
      language: "Kashmiri, Hindi, English",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Srinagar (42km away)"
    },
    gallery: {
      all: [
        { url: "/destinations/kashmir/doodpathri/1.jpg", caption: "Doodhpathri Meadows", category: "landscapes" },
        { url: "/destinations/kashmir/doodpathri/2.jpg", caption: "Doodhpathri Meadows", category: "landscapes" },
        { url: "/destinations/kashmir/doodpathri/3.jpg", caption: "Doodhpathri Meadows", category: "landscapes" },
        { url: "/destinations/kashmir/doodpathri/4.jpg", caption: "Doodhpathri Meadows", category: "landscapes" },
        { url: "/destinations/kashmir/doodpathri/5.jpg", caption: "Doodhpathri Meadows", category: "landscapes" },
        { url: "/destinations/kashmir/doodpathri/6.jpg", caption: "Doodhpathri Meadows", category: "landscapes" },
        { url: "/destinations/kashmir/doodpathri/7.jpg", caption: "Doodhpathri Meadows", category: "landscapes" },
      ]
    },
    highlights: [
      "Pristine bowl-shaped meadow at 2,730m",
      "Milky white streams flowing through",
      "Dense pine and fir forests",
      "Panoramic Himalayan views",
      "Horse riding through meadows",
      "Picnic spots by streams"
    ],
    attractions: [
      {
        name: "Doodhpathri Meadow",
        description: "Main meadow with stunning views",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
        mustVisit: true
      },
      {
        name: "Tangnar",
        description: "Beautiful nearby meadow",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
        mustVisit: false
      }
    ],
    culturalInsights: [
      { title: "Name Origin", description: "Doodhpathri means 'Valley of Milk', named after the milky white streams that flow through the meadow." },
      { title: "Local Shepherds", description: "Gujjar and Bakerwal shepherds graze their livestock here during summer months." }
    ],
    cuisine: [
      { name: "Kashmiri Kahwa", description: "Traditional green tea with saffron", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" },
      { name: "Rogan Josh", description: "Aromatic lamb curry", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", type: "Main Course" }
    ],
    weather: [
      { season: "Spring", months: "April-May", temp: "10-20°C", rainfall: "60mm", icon: "🌸", description: "Flowers blooming, pleasant weather" },
      { season: "Summer", months: "June-August", temp: "15-25°C", rainfall: "50mm", icon: "☀️", description: "Best time to visit" },
      { season: "Autumn", months: "September-October", temp: "10-20°C", rainfall: "30mm", icon: "🍂", description: "Golden meadows" },
      { season: "Winter", months: "November-March", temp: "-5 to 10°C", rainfall: "80mm", icon: "❄️", description: "Snow covered, limited access" }
    ],
    thingsToDo: [
      { title: "Horse Riding", description: "Explore meadows on horseback.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", duration: "1-2 hours", price: "₹500+" },
      { title: "Picnicking", description: "Enjoy a peaceful picnic by streams.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", duration: "Half day", price: "Free" },
      { title: "Photography", description: "Capture the pristine beauty.", image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800", duration: "Flexible", price: "Free" }
    ],
    accommodation: [
      { type: "Tented Camps", description: "Basic camping facilities available.", priceRange: "₹1500-₹4000/night", rating: "4.0/5" },
      { type: "Day Visit", description: "Most visitors come for day trips from Srinagar.", priceRange: "N/A", rating: "N/A" }
    ],
    transportation: [
      { mode: "By Road", details: "42km from Srinagar, accessible by car.", icon: "🚗" }
    ],
    travelTips: [
      { icon: "🍱", title: "Carry Food", tip: "Limited food options available, carry packed lunch." },
      { icon: "🧥", title: "Layer Up", tip: "Weather can change quickly, carry warm layers." },
      { icon: "📷", title: "Camera Ready", tip: "Don't forget your camera for stunning views." }
    ],
    faq: [
      { question: "Is Doodhpathri crowded?", answer: "No, it's relatively offbeat and less crowded than other destinations." },
      { question: "Can I stay overnight?", answer: "Limited camping options available, most visitors do day trips." }
    ],
    relatedPosts: [
      { title: "Hidden Gems of Kashmir", excerpt: "Discover offbeat destinations like Doodhpathri.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", date: "2025-05-10", readTime: "5 min" }
    ],
    stats: {
      tours: "5+",
      visitors: "10K+",
      rating: "4.6/5",
      guides: "5+"
    },
    activities: [
      { name: "Horse Riding", description: "Explore on horseback", icon: "🐴" },
      { name: "Picnicking", description: "Stream-side picnics", icon: "🧺" },
      { name: "Photography", description: "Capture natural beauty", icon: "📸" },
      { name: "Nature Walks", description: "Explore meadows", icon: "🚶" }
    ]
  },

  "gurez-valley": {
    id: "gurez-valley",
    name: "Gurez Valley",
    region: "Kashmir",
    country: "India",
    tagline: "A remote paradise near the Line of Control with stunning alpine beauty and rich Dard culture.",
    tags: ["REMOTE", "OFFBEAT", "ADVENTURE"],
    description: "Explore one of Kashmir's most remote and beautiful valleys near the LoC.",
    longDescription: "Gurez Valley, located at 2,400m altitude in Bandipora district, is one of Kashmir's most remote and pristine destinations. Situated near the Line of Control, this valley remained closed to tourists until recently. Home to the Dard-Shin people with their unique culture, Gurez offers dramatic mountain scenery, the meandering Kishanganga River, and an authentic experience far from tourist crowds.",
    heroImage: "/destinations/kashmir/gurez/7.jpg",
    startingPrice: 399,
    quickFacts: {
      bestTime: "May-October (road closed in winter)",
      language: "Shina, Kashmiri, Hindi",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Srinagar (123km away)"
    },
    gallery: {
      all: [
        { url: "/destinations/kashmir/gurez/1.jpg", caption: "Gurez Valley", category: "landscapes" },
        { url: "/destinations/kashmir/gurez/2.jpg", caption: "Kishanganga River", category: "nature" },
        { url: "/destinations/kashmir/gurez/3.jpg", caption: "Mountain Views", category: "landscapes" },
        { url: "/destinations/kashmir/gurez/4.jpg", caption: "Mountain Views", category: "landscapes" },
        { url: "/destinations/kashmir/gurez/5.jpg", caption: "Mountain Views", category: "landscapes" },
        { url: "/destinations/kashmir/gurez/6.jpg", caption: "Mountain Views", category: "landscapes" },
        { url: "/destinations/kashmir/gurez/7.jpg", caption: "Mountain Views", category: "landscapes" }
      ]
    },
    highlights: [
      "Remote valley near Line of Control",
      "Home to Dard-Shin community",
      "Pristine Kishanganga River",
      "Habba Khatoon peak views",
      "Traditional wooden houses",
      "Offbeat adventure destination"
    ],
    attractions: [
      {
        name: "Dawar Village",
        description: "Main village and administrative center",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600",
        mustVisit: true
      },
      {
        name: "Habba Khatoon Peak",
        description: "Named after legendary Kashmiri poetess",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
        mustVisit: true
      },
      {
        name: "Tulail Valley",
        description: "Beautiful sub-valley of Gurez",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
        mustVisit: false
      }
    ],
    culturalInsights: [
      { title: "Dard-Shin People", description: "Gurez is home to the Dard-Shin community, believed to be descendants of Alexander's army, with unique traditions and the Shina language." },
      { title: "Wooden Architecture", description: "Traditional wooden houses with intricate carvings are a distinctive feature of the valley." }
    ],
    cuisine: [
      { name: "Harissa", description: "Slow-cooked meat dish", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", type: "Main Course" },
      { name: "Girda", description: "Traditional bread", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400", type: "Bread" }
    ],
    weather: [
      { season: "Summer", months: "May-September", temp: "10-25°C", rainfall: "50mm", icon: "☀️", description: "Only accessible season" },
      { season: "Winter", months: "October-April", temp: "-15 to 5°C", rainfall: "Heavy snow", icon: "❄️", description: "Road closed due to snow" }
    ],
    thingsToDo: [
      { title: "River Rafting", description: "Adventure on Kishanganga River.", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800", duration: "2-3 hours", price: "₹1500+" },
      { title: "Trekking", description: "Trek to nearby peaks and meadows.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", duration: "Full day", price: "₹800+" },
      { title: "Cultural Immersion", description: "Experience Dard-Shin culture.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", duration: "Flexible", price: "Free" }
    ],
    accommodation: [
      { type: "Guesthouse", description: "Basic guesthouses in Dawar.", priceRange: "₹1000-₹3000/night", rating: "3.8/5" },
      { type: "Homestay", description: "Stay with local families.", priceRange: "₹800-₹2000/night", rating: "4.2/5" }
    ],
    transportation: [
      { mode: "By Road", details: "123km from Srinagar via Razdan Pass.", icon: "🚗" }
    ],
    travelTips: [
      { icon: "📝", title: "Permit Required", tip: "Carry ID proof for security checkpoints." },
      { icon: "⛽", title: "Full Tank", tip: "Fill fuel in Srinagar, limited options in Gurez." },
      { icon: "📵", title: "Limited Connectivity", tip: "Mobile networks are unreliable, inform family beforehand." }
    ],
    faq: [
      { question: "Is Gurez safe to visit?", answer: "Yes, the valley is safe for tourists. You'll pass through security checkpoints." },
      { question: "When is the road open?", answer: "The road opens in May after snow clears and closes by October." }
    ],
    relatedPosts: [
      { title: "Exploring Gurez Valley", excerpt: "A guide to Kashmir's most remote valley.", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800", date: "2025-06-20", readTime: "7 min" }
    ],
    stats: {
      tours: "3+",
      visitors: "5K+",
      rating: "4.8/5",
      guides: "3+"
    },
    activities: [
      { name: "River Rafting", description: "Kishanganga River adventure", icon: "🚣" },
      { name: "Trekking", description: "Mountain trails", icon: "🥾" },
      { name: "Cultural Tours", description: "Dard-Shin heritage", icon: "🏛️" },
      { name: "Photography", description: "Stunning landscapes", icon: "📸" }
    ]
  },

  "keeren-valley": {
    id: "keeren-valley",
    name: "Keran Valley",
    region: "Kashmir",
    country: "India",
    tagline: "A scenic valley along the Neelum River with views of Pakistan-administered Kashmir across the water.",
    tags: ["BORDER", "SCENIC", "OFFBEAT"],
    description: "Experience the unique border valley with stunning river views and peaceful atmosphere.",
    longDescription: "Keran Valley, located in Kupwara district along the Line of Control, offers a unique experience where you can see villages in Pakistan-administered Kashmir across the Neelum River. This offbeat destination features dramatic mountain scenery, traditional Kashmiri villages, and a peaceful atmosphere. The valley is gaining popularity among tourists seeking unexplored destinations.",
    heroImage: "/destinations/kashmir/keran_valley/4.jpg",
    startingPrice: 349,
    quickFacts: {
      bestTime: "April-October",
      language: "Kashmiri, Hindi, English",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Srinagar (130km away)"
    },
    gallery: {
      all: [
        { url: "/destinations/kashmir/keran_valley/1.jpg", caption: "Keran Valley", category: "landscapes" },
        { url: "/destinations/kashmir/keran_valley/2.jpg", caption: "Neelum River", category: "nature" },
        { url: "/destinations/kashmir/keran_valley/3.jpg", caption: "Neelum River", category: "nature" },
        { url: "/destinations/kashmir/keran_valley/4.jpg", caption: "Border Views", category: "landscapes" }
      ]
    },
    highlights: [
      "Views of PoK across Neelum River",
      "Offbeat border tourism destination",
      "Traditional Kashmiri villages",
      "Dramatic mountain scenery",
      "Peaceful riverside walks",
      "Authentic local culture"
    ],
    attractions: [
      {
        name: "Keran Town",
        description: "Main town with river views",
        image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=600",
        mustVisit: true
      },
      {
        name: "Neelum River Viewpoint",
        description: "See PoK across the river",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600",
        mustVisit: true
      }
    ],
    culturalInsights: [
      { title: "Border Culture", description: "Families on both sides of the LoC share cultural ties, and you can see life across the border." },
      { title: "Traditional Crafts", description: "Local artisans create beautiful handicrafts and woolen items." }
    ],
    cuisine: [
      { name: "Kashmiri Wazwan", description: "Traditional multi-course meal", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400", type: "Main Course" },
      { name: "Noon Chai", description: "Pink salted tea", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" }
    ],
    weather: [
      { season: "Spring", months: "April-May", temp: "12-22°C", rainfall: "60mm", icon: "🌸", description: "Pleasant weather" },
      { season: "Summer", months: "June-August", temp: "18-28°C", rainfall: "50mm", icon: "☀️", description: "Best time to visit" },
      { season: "Autumn", months: "September-October", temp: "10-20°C", rainfall: "40mm", icon: "🍂", description: "Golden landscapes" },
      { season: "Winter", months: "November-March", temp: "-2 to 10°C", rainfall: "100mm", icon: "❄️", description: "Cold, some areas inaccessible" }
    ],
    thingsToDo: [
      { title: "Border Viewing", description: "View PoK across the river.", image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800", duration: "1-2 hours", price: "Free" },
      { title: "Village Walks", description: "Explore traditional villages.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", duration: "Half day", price: "Free" },
      { title: "River Activities", description: "Riverside walks and photography.", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800", duration: "Flexible", price: "Free" }
    ],
    accommodation: [
      { type: "Guesthouse", description: "Basic guesthouses in Keran.", priceRange: "₹1000-₹2500/night", rating: "3.7/5" },
      { type: "Homestay", description: "Stay with local families.", priceRange: "₹800-₹1800/night", rating: "4.0/5" }
    ],
    transportation: [
      { mode: "By Road", details: "130km from Srinagar via Kupwara.", icon: "🚗" }
    ],
    travelTips: [
      { icon: "📝", title: "ID Required", tip: "Carry valid ID for checkpoints." },
      { icon: "🔇", title: "Respectful Behavior", tip: "Be respectful near the border area." },
      { icon: "📷", title: "Photography Rules", tip: "Some areas may have photography restrictions." }
    ],
    faq: [
      { question: "Is Keran Valley safe?", answer: "Yes, the area is safe and patrolled. Follow local guidelines." },
      { question: "Can I take photos of the border?", answer: "Photography may be restricted in some areas. Follow signage and instructions." }
    ],
    relatedPosts: [
      { title: "Border Tourism in Kashmir", excerpt: "Exploring unique border destinations.", image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800", date: "2025-07-15", readTime: "6 min" }
    ],
    stats: {
      tours: "2+",
      visitors: "3K+",
      rating: "4.5/5",
      guides: "2+"
    },
    activities: [
      { name: "Border Viewing", description: "See PoK across river", icon: "👀" },
      { name: "Village Tours", description: "Explore local villages", icon: "🏘️" },
      { name: "Photography", description: "Scenic photography", icon: "📸" },
      { name: "Riverside Walks", description: "Peaceful walks", icon: "🚶" }
    ]
  },

  "verinag": {
    id: "verinag",
    name: "Verinag",
    region: "Kashmir",
    country: "India",
    tagline: "The legendary source of river Jhelum, blessed with a sacred octagonal spring and Mughal gardens.",
    tags: ["SPRINGS", "HERITAGE", "NATURE"],
    description: "Discover the sacred spring that gives birth to the mighty Jhelum River.",
    longDescription: "Verinag is a historic town in Anantnag district, famous as the source of the Jhelum River. The main attraction is the octagonal spring enclosed by Mughal-era walls, built by Emperor Jahangir. The crystal-clear blue waters of the spring are considered sacred, and the surrounding Mughal gardens offer a peaceful retreat. Verinag is a must-visit for those interested in Kashmir's Mughal heritage.",
    heroImage: "/destinations/kashmir/verinag/04.jpg",
    startingPrice: 199,
    quickFacts: {
      bestTime: "March-October",
      language: "Kashmiri, Hindi, English",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Srinagar (80km away)"
    },
    gallery: {
      all: [
        { url: "/destinations/kashmir/verinag/01.jpg", caption: "Verinag Spring", category: "heritage" },
        { url: "/destinations/kashmir/verinag/02.jpg", caption: "Mughal Gardens", category: "gardens" },
        { url: "/destinations/kashmir/verinag/03.jpg", caption: "Mughal Gardens", category: "gardens" },
        { url: "/destinations/kashmir/verinag/04.jpg", caption: "Mountain Backdrop", category: "landscapes" }
      ]
    },
    highlights: [
      "Source of Jhelum River",
      "Mughal-era octagonal spring",
      "Crystal-clear blue waters",
      "Beautiful Mughal gardens",
      "Historical significance",
      "Peaceful natural setting"
    ],
    attractions: [
      {
        name: "Verinag Spring",
        description: "Sacred octagonal spring, source of Jhelum",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
        mustVisit: true
      },
      {
        name: "Mughal Garden",
        description: "Historic garden around the spring",
        image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=600",
        mustVisit: true
      }
    ],
    culturalInsights: [
      { title: "Mughal Heritage", description: "Emperor Jahangir built the octagonal enclosure around the spring in 1620." },
      { title: "Sacred Waters", description: "The spring is considered sacred and is believed to have healing properties." }
    ],
    cuisine: [
      { name: "Kashmiri Pulao", description: "Fragrant rice with dry fruits", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400", type: "Main Course" },
      { name: "Sheer Chai", description: "Traditional pink tea", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" }
    ],
    weather: [
      { season: "Spring", months: "March-May", temp: "12-22°C", rainfall: "70mm", icon: "🌸", description: "Gardens in bloom" },
      { season: "Summer", months: "June-August", temp: "18-30°C", rainfall: "50mm", icon: "☀️", description: "Pleasant weather" },
      { season: "Autumn", months: "September-November", temp: "10-20°C", rainfall: "40mm", icon: "🍂", description: "Golden foliage" },
      { season: "Winter", months: "December-February", temp: "0-10°C", rainfall: "60mm", icon: "❄️", description: "Cold but accessible" }
    ],
    thingsToDo: [
      { title: "Visit the Spring", description: "See the source of Jhelum River.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", duration: "1 hour", price: "₹25" },
      { title: "Garden Walk", description: "Stroll through Mughal gardens.", image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800", duration: "1-2 hours", price: "Included" },
      { title: "Photography", description: "Capture the historic beauty.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", duration: "Flexible", price: "Free" }
    ],
    accommodation: [
      { type: "Tourist Bungalow", description: "Government-run accommodation.", priceRange: "₹1200-₹3000/night", rating: "3.8/5" },
      { type: "Nearby Hotels", description: "Hotels in Anantnag.", priceRange: "₹1500-₹4000/night", rating: "4.0/5" }
    ],
    transportation: [
      { mode: "By Road", details: "80km from Srinagar via NH44.", icon: "🚗" }
    ],
    travelTips: [
      { icon: "👟", title: "Comfortable Shoes", tip: "Wear comfortable walking shoes for the gardens." },
      { icon: "📸", title: "Morning Visit", tip: "Visit early morning for best light and fewer crowds." }
    ],
    faq: [
      { question: "What is the entry fee?", answer: "There's a nominal entry fee of ₹25 for adults." },
      { question: "How much time is needed?", answer: "2-3 hours is sufficient to explore the spring and gardens." }
    ],
    relatedPosts: [
      { title: "Mughal Heritage in Kashmir", excerpt: "Exploring Kashmir's Mughal legacy.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", date: "2025-04-20", readTime: "5 min" }
    ],
    stats: {
      tours: "8+",
      visitors: "20K+",
      rating: "4.4/5",
      guides: "6+"
    },
    activities: [
      { name: "Heritage Tour", description: "Explore Mughal history", icon: "🏛️" },
      { name: "Garden Walk", description: "Stroll through gardens", icon: "🌳" },
      { name: "Photography", description: "Capture historic beauty", icon: "📸" },
      { name: "Meditation", description: "Peaceful spring-side meditation", icon: "🧘" }
    ]
  },

  // JAMMU DESTINATIONS
  "bahu-fort": {
    id: "bahu-fort",
    name: "Bahu Fort",
    region: "Jammu",
    country: "India",
    tagline: "An ancient fortress overlooking the Tawi River with a temple dedicated to Goddess Kali.",
    tags: ["HERITAGE", "TEMPLE", "HISTORY"],
    description: "Explore the historic fort and temple complex offering panoramic views of Jammu city.",
    longDescription: "Bahu Fort is one of the oldest forts in Jammu, believed to have been built by Raja Bahulochan around 3,000 years ago. Located on the left bank of river Tawi, the fort houses the famous Bahu Temple dedicated to Goddess Kali. The surrounding Bagh-e-Bahu gardens feature an aquarium and offer stunning views of the city. It's a popular destination for pilgrims and history enthusiasts.",
    heroImage: "/destinations/jammu/bahu_fort/38.png",
    startingPrice: 149,
    quickFacts: {
      bestTime: "October-March",
      language: "Dogri, Hindi, English",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Jammu (8km away)"
    },
    gallery: {
      all: [
        { url: "/destinations/jammu/bahu_fort/38.png", caption: "Bahu Fort", category: "heritage" },
        { url: "/destinations/jammu/bahu_fort/40.png", caption: "Bahu Temple", category: "spiritual" },
        { url: "/destinations/jammu/bahu_fort/39.png", caption: "City Views", category: "landscapes" }
      ]
    },
    highlights: [
      "3,000-year-old historic fort",
      "Bahu Temple dedicated to Goddess Kali",
      "Panoramic views of Jammu city",
      "Bagh-e-Bahu gardens and aquarium",
      "Tawi River views",
      "Popular pilgrimage site"
    ],
    attractions: [
      {
        name: "Bahu Temple",
        description: "Ancient temple of Goddess Kali",
        image: "/destinations/jammu/bahu_fort/38.png",
        mustVisit: true
      },
      {
        name: "Bagh-e-Bahu",
        description: "Beautiful terraced gardens",
        image: "/destinations/jammu/bahu_fort/39.png",
        mustVisit: true
      }
    ],
    culturalInsights: [
      { title: "Religious Significance", description: "Tuesday and Sunday see special pujas at Bahu Temple, attracting thousands of devotees." },
      { title: "Historical Legacy", description: "The fort is named after Raja Bahulochan who founded Jammu city." }
    ],
    cuisine: [
      { name: "Rajma Chawal", description: "Kidney beans with rice", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", type: "Main Course" },
      { name: "Kaladi Kulcha", description: "Local cheese with bread", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400", type: "Snack" }
    ],
    weather: [
      { season: "Winter", months: "November-February", temp: "5-18°C", rainfall: "40mm", icon: "❄️", description: "Best time to visit" },
      { season: "Spring", months: "March-April", temp: "15-30°C", rainfall: "50mm", icon: "🌸", description: "Pleasant weather" },
      { season: "Summer", months: "May-June", temp: "25-45°C", rainfall: "30mm", icon: "☀️", description: "Very hot" },
      { season: "Monsoon", months: "July-September", temp: "25-35°C", rainfall: "200mm", icon: "🌧️", description: "Heavy rains" }
    ],
    thingsToDo: [
      { title: "Temple Visit", description: "Seek blessings at Bahu Temple.", image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800", duration: "1 hour", price: "Free" },
      { title: "Garden Walk", description: "Explore Bagh-e-Bahu gardens.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", duration: "1-2 hours", price: "₹15" },
      { title: "Aquarium Visit", description: "See exotic fish species.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", duration: "1 hour", price: "₹50" }
    ],
    accommodation: [
      { type: "City Hotels", description: "Various hotels in Jammu city.", priceRange: "₹1500-₹6000/night", rating: "4.0/5" }
    ],
    transportation: [
      { mode: "By Air", details: "Jammu Airport is 8km away.", icon: "✈️" },
      { mode: "By Rail", details: "Jammu Tawi station is 5km away.", icon: "🚆" },
      { mode: "Local", details: "Auto-rickshaws and taxis available.", icon: "🚕" }
    ],
    travelTips: [
      { icon: "👟", title: "Footwear", tip: "Remove shoes before entering the temple." },
      { icon: "🌙", title: "Tuesday Visit", tip: "Visit on Tuesday for special religious significance." }
    ],
    faq: [
      { question: "What is the best time to visit?", answer: "October to March when weather is pleasant." },
      { question: "Is there an entry fee?", answer: "Temple is free; garden entry is ₹15." }
    ],
    relatedPosts: [
      { title: "Heritage Sites of Jammu", excerpt: "Exploring Jammu's historical treasures.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", date: "2025-03-10", readTime: "5 min" }
    ],
    stats: {
      tours: "10+",
      visitors: "100K+",
      rating: "4.3/5",
      guides: "8+"
    },
    activities: [
      { name: "Temple Visit", description: "Seek divine blessings", icon: "🛕" },
      { name: "Garden Tour", description: "Explore terraced gardens", icon: "🌳" },
      { name: "Photography", description: "Capture city views", icon: "📸" },
      { name: "Aquarium Visit", description: "Marine life exploration", icon: "🐠" }
    ]
  },

  "mansar-lake": {
    id: "mansar-lake",
    name: "Mansar Lake",
    region: "Jammu",
    country: "India",
    tagline: "A sacred lake surrounded by hills and shrines, perfect for nature lovers and pilgrims alike.",
    tags: ["LAKES", "SPIRITUAL", "NATURE"],
    description: "Visit the sacred lake known for its religious significance and natural beauty.",
    longDescription: "Mansar Lake is a beautiful natural lake located 62km from Jammu, surrounded by forested hills. Considered sacred, the lake has several temples including Sheshnag, Umapati Mahadev, and Narsimha shrines around its banks. According to mythology, the lake is associated with the epic Mahabharata. It's a popular destination for both pilgrims and nature lovers, with facilities for boating and wildlife observation.",
    heroImage: "/destinations/jammu/mansar_lake/3.jpg",
    startingPrice: 179,
    quickFacts: {
      bestTime: "September-March",
      language: "Dogri, Hindi, English",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Jammu (62km away)"
    },
    gallery: {
      all: [
        { url: "/destinations/jammu/mansar_lake/2.jpg", caption: "Mansar Lake", category: "nature" },
        { url: "/destinations/jammu/mansar_lake/3.jpg", caption: "Lake Temples", category: "spiritual" }
      ]
    },
    highlights: [
      "Sacred natural lake",
      "Ancient temples around the lake",
      "Connected to Mahabharata legends",
      "Boating facilities",
      "Rich birdlife and wildlife",
      "Surrounded by forested hills"
    ],
    attractions: [
      {
        name: "Mansar Lake",
        description: "Sacred lake with boating",
        image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=600",
        mustVisit: true
      },
      {
        name: "Sheshnag Temple",
        description: "Temple dedicated to serpent god",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
        mustVisit: true
      },
      {
        name: "Surinsar Lake",
        description: "Twin lake nearby",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
        mustVisit: false
      }
    ],
    culturalInsights: [
      { title: "Mahabharata Connection", description: "The lake is believed to be associated with Arjuna from the Mahabharata epic." },
      { title: "Wedding Tradition", description: "Newly married couples visit to seek blessings for a happy married life." }
    ],
    cuisine: [
      { name: "Dogri Thali", description: "Traditional Dogra meal", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", type: "Main Course" },
      { name: "Ambal", description: "Sour pumpkin preparation", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400", type: "Side Dish" }
    ],
    weather: [
      { season: "Winter", months: "November-February", temp: "5-15°C", rainfall: "30mm", icon: "❄️", description: "Cool and pleasant" },
      { season: "Spring", months: "March-April", temp: "15-28°C", rainfall: "40mm", icon: "🌸", description: "Good time to visit" },
      { season: "Summer", months: "May-June", temp: "25-40°C", rainfall: "20mm", icon: "☀️", description: "Hot weather" },
      { season: "Monsoon", months: "July-September", temp: "22-32°C", rainfall: "250mm", icon: "🌧️", description: "Heavy rains, lush greenery" }
    ],
    thingsToDo: [
      { title: "Boating", description: "Enjoy paddle boats on the lake.", image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800", duration: "30 min", price: "₹100" },
      { title: "Temple Circuit", description: "Visit all temples around the lake.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", duration: "2 hours", price: "Free" },
      { title: "Bird Watching", description: "Spot migratory birds.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", duration: "1-2 hours", price: "Free" }
    ],
    accommodation: [
      { type: "Lake Resort", description: "JKTDC accommodation by the lake.", priceRange: "₹1500-₹4000/night", rating: "3.8/5" },
      { type: "Guest Houses", description: "Private accommodations nearby.", priceRange: "₹1000-₹2500/night", rating: "3.5/5" }
    ],
    transportation: [
      { mode: "By Road", details: "62km from Jammu, well-connected.", icon: "🚗" }
    ],
    travelTips: [
      { icon: "👶", title: "Family Friendly", tip: "Great destination for families with children." },
      { icon: "🎣", title: "No Fishing", tip: "Fishing is prohibited in the sacred lake." }
    ],
    faq: [
      { question: "Can we swim in the lake?", answer: "Swimming is not allowed as the lake is considered sacred." },
      { question: "Are there restaurants nearby?", answer: "Yes, there are small eateries and the JKTDC cafeteria." }
    ],
    relatedPosts: [
      { title: "Sacred Lakes of Jammu", excerpt: "Exploring the spiritual lakes of the region.", image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800", date: "2025-02-15", readTime: "4 min" }
    ],
    stats: {
      tours: "6+",
      visitors: "50K+",
      rating: "4.2/5",
      guides: "5+"
    },
    activities: [
      { name: "Boating", description: "Lake paddle boats", icon: "🚣" },
      { name: "Temple Visits", description: "Sacred shrine circuit", icon: "🛕" },
      { name: "Bird Watching", description: "Spot migratory birds", icon: "🦅" },
      { name: "Nature Walk", description: "Lakeside trails", icon: "🚶" }
    ]
  },

  "raghunath-temple": {
    id: "raghunath-temple",
    name: "Raghunath Temple",
    region: "Jammu",
    country: "India",
    tagline: "One of North India's largest temple complexes with stunning architecture and spiritual significance.",
    tags: ["SPIRITUAL", "HERITAGE", "TEMPLE"],
    description: "Visit the magnificent temple complex dedicated to Lord Rama in the heart of Jammu.",
    longDescription: "Raghunath Temple is one of the largest temple complexes in North India, located in the heart of Jammu city. Built between 1835-1860 by Maharaja Gulab Singh and his son Ranbir Singh, the temple is dedicated to Lord Rama (Raghunath). The complex houses seven shrines with gold leaf-covered interiors, a large library of ancient Sanskrit manuscripts, and galleries displaying paintings of events from the Ramayana and Mahabharata.",
    heroImage: "/destinations/jammu/raghunath_temple/1.jpg",
    startingPrice: 129,
    quickFacts: {
      bestTime: "October-March",
      language: "Dogri, Hindi, English",
      currency: "Indian Rupee (INR)",
      timezone: "IST (GMT+5:30)",
      visa: "e-Visa available",
      airport: "Jammu (7km away)"
    },
    gallery: {
      all: [
        { url: "/destinations/jammu/raghunath_temple/1.jpg", caption: "Raghunath Temple", category: "spiritual" },
        { url: "/destinations/jammu/raghunath_temple/2.jpg", caption: "Temple Interior", category: "heritage" },
        { url: "/destinations/jammu/raghunath_temple/3.jpg", caption: "Temple Interior", category: "heritage" },
        { url: "/destinations/jammu/raghunath_temple/4.jpg", caption: "Temple Interior", category: "heritage" },
        { url: "/destinations/jammu/raghunath_temple/5.jpg", caption: "Temple Interior", category: "heritage" },
        { url: "/destinations/jammu/raghunath_temple/6.jpg", caption: "Temple Complex", category: "architecture" }
      ]
    },
    highlights: [
      "One of largest temple complexes in North India",
      "Seven shrines with gold-plated interiors",
      "Built by Dogra rulers",
      "Ancient Sanskrit manuscript library",
      "Beautiful architectural galleries",
      "Central location in Jammu"
    ],
    attractions: [
      {
        name: "Main Shrine",
        description: "Temple of Lord Rama with gold interiors",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
        mustVisit: true
      },
      {
        name: "Manuscript Library",
        description: "Collection of ancient texts",
        image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=600",
        mustVisit: false
      },
      {
        name: "Painting Galleries",
        description: "Ramayana and Mahabharata scenes",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
        mustVisit: true
      }
    ],
    culturalInsights: [
      { title: "Dogra Dynasty", description: "Built by the Dogra Maharajas, the temple reflects their devotion to Lord Rama." },
      { title: "Festival Celebrations", description: "Ram Navami and Dussehra are celebrated with great fervor at this temple." }
    ],
    cuisine: [
      { name: "Temple Prasad", description: "Sacred offering available", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400", type: "Prasad" },
      { name: "Nearby Street Food", description: "Local snacks around the temple", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", type: "Snacks" }
    ],
    weather: [
      { season: "Winter", months: "November-February", temp: "5-18°C", rainfall: "40mm", icon: "❄️", description: "Best time to visit" },
      { season: "Spring", months: "March-April", temp: "15-30°C", rainfall: "50mm", icon: "🌸", description: "Pleasant weather" },
      { season: "Summer", months: "May-June", temp: "25-45°C", rainfall: "30mm", icon: "☀️", description: "Very hot" },
      { season: "Monsoon", months: "July-September", temp: "25-35°C", rainfall: "200mm", icon: "🌧️", description: "Rainy season" }
    ],
    thingsToDo: [
      { title: "Temple Darshan", description: "Seek blessings at all seven shrines.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", duration: "1-2 hours", price: "Free" },
      { title: "Gallery Tour", description: "Explore the painting galleries.", image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800", duration: "1 hour", price: "Free" },
      { title: "Aarti Attendance", description: "Witness the evening aarti ceremony.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", duration: "30 min", price: "Free" }
    ],
    accommodation: [
      { type: "City Hotels", description: "Various hotels near the temple.", priceRange: "₹1200-₹5000/night", rating: "4.0/5" },
      { type: "Dharamshala", description: "Temple-run pilgrim accommodation.", priceRange: "₹300-₹800/night", rating: "3.5/5" }
    ],
    transportation: [
      { mode: "By Air", details: "Jammu Airport is 7km away.", icon: "✈️" },
      { mode: "By Rail", details: "Jammu Tawi station is 2km away.", icon: "🚆" },
      { mode: "Local", details: "Auto-rickshaws and taxis available.", icon: "🚕" }
    ],
    travelTips: [
      { icon: "👟", title: "Remove Footwear", tip: "Remove shoes at the entrance." },
      { icon: "📵", title: "No Photography", tip: "Photography inside main shrines is not allowed." },
      { icon: "👗", title: "Dress Code", tip: "Wear modest clothing for temple visit." }
    ],
    faq: [
      { question: "What are the temple timings?", answer: "5:00 AM to 9:00 PM, with breaks during afternoon." },
      { question: "Is there parking available?", answer: "Limited parking available nearby; public transport recommended." }
    ],
    relatedPosts: [
      { title: "Temples of Jammu", excerpt: "A spiritual journey through Jammu's sacred sites.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", date: "2025-01-25", readTime: "5 min" }
    ],
    stats: {
      tours: "12+",
      visitors: "200K+",
      rating: "4.5/5",
      guides: "10+"
    },
    activities: [
      { name: "Temple Darshan", description: "Visit all shrines", icon: "🛕" },
      { name: "Aarti", description: "Evening prayer ceremony", icon: "🪔" },
      { name: "Gallery Tour", description: "Art and history", icon: "🖼️" },
      { name: "Shopping", description: "Religious items nearby", icon: "🛍️" }
    ]
  },

  // LADAKH DESTINATIONS
  // "pangong-lake": {
  //   id: "pangong-lake",
  //   name: "Pangong Lake",
  //   region: "Ladakh",
  //   country: "India",
  //   tagline: "Marvel at the spectacular high-altitude lake that changes colors throughout the day, stretching into Tibet.",
  //   tags: ["HIGH ALTITUDE", "SCENIC", "PHOTOGRAPHY"],
  //   description: "Experience the mesmerizing beauty of this 134km-long lake at 4,350m altitude.",
  //   longDescription: "Pangong Tso, situated at 4,350m, is one of the world's highest saltwater lakes. Extending from India to Tibet, the lake is famous for its ever-changing colors - from shades of blue to green to red. Made famous by Bollywood, it offers stunning landscapes and an unforgettable high-altitude experience.",
  //   heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80",
  //   startingPrice: 599,
  //   quickFacts: {
  //     bestTime: "May-September",
  //     language: "Ladakhi, Hindi, English",
  //     currency: "Indian Rupee (INR)",
  //     timezone: "IST (GMT+5:30)",
  //     visa: "e-Visa available",
  //     airport: "Leh (160km away, 5-6 hours drive)"
  //   },
  //   gallery: {
  //     all: [
  //       { url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800", caption: "Pangong Lake Blue", category: "landscapes" },
  //       { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", caption: "Mountain Reflections", category: "nature" },
  //       { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", caption: "Camping Site", category: "adventure" }
  //     ]
  //   },
  //   highlights: [
  //     "134km-long high-altitude lake",
  //     "Color-changing waters",
  //     "Extends into Tibet",
  //     "3 Idiots movie location",
  //     "Lakeside camping",
  //     "Stunning mountain reflections"
  //   ],
  //   attractions: [
  //     {
  //       name: "Pangong Tso",
  //       description: "Main lake with color-changing waters",
  //       image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600",
  //       mustVisit: true
  //     },
  //     {
  //       name: "Spangmik Village",
  //       description: "Lakeside village with camping",
  //       image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
  //       mustVisit: false
  //     }
  //   ],
  //   culturalInsights: [
  //     { title: "Nomadic Traditions", description: "Pangong Lake region is home to Changpa nomads who herd yaks and goats." },
  //     { title: "Bollywood Fame", description: "The lake gained international fame after being featured in movies like '3 Idiots'." }
  //   ],
  //   cuisine: [
  //     { name: "Thukpa", description: "Tibetan noodle soup", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400", type: "Main Course" },
  //     { name: "Momos", description: "Steamed dumplings", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400", type: "Snack" },
  //     { name: "Butter Tea", description: "Traditional Ladakhi tea", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" }
  //   ],
  //   weather: [
  //     { season: "Summer", months: "May-September", temp: "5-20°C", rainfall: "20mm", icon: "☀️", description: "Road open, best time to visit" },
  //     { season: "Winter", months: "October-April", temp: "-20 to 0°C", rainfall: "5mm", icon: "❄️", description: "Frozen lake, road closed" }
  //   ],
  //   thingsToDo: [
  //     { title: "Photography", description: "Capture the color-changing lake and landscapes.", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800", duration: "Flexible", price: "Free" },
  //     { title: "Camping", description: "Stay overnight in lakeside camps.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", duration: "Overnight", price: "₹3000+" }
  //   ],
  //   accommodation: [
  //     { type: "Camp", description: "Luxury and budget camps by the lake.", priceRange: "₹2500-₹12000/night", rating: "4.6/5" },
  //     { type: "Homestay", description: "Stay with local families in Spangmik village.", priceRange: "₹1500-₹5000/night", rating: "4.3/5" }
  //   ],
  //   transportation: [
  //     { mode: "By Air", details: "Leh is the nearest airport, 160km away.", icon: "✈️" },
  //     { mode: "By Road", details: "Accessible by road from Leh via Chang La pass.", icon: "🚙" }
  //   ],
  //   travelTips: [
  //     { icon: "⛰️", title: "Acclimatize", tip: "Acclimatize in Leh for 2 days before visiting." },
  //     { icon: "💊", title: "Carry Medication", tip: "Carry altitude sickness medication." }
  //   ],
  //   faq: [
  //     { question: "Do I need a permit?", answer: "Yes, Inner Line Permit is mandatory. Can be obtained online or in Leh." },
  //     { question: "Can I stay overnight?", answer: "Yes, camping is available at Spangmik and other lakeside locations." },
  //     { question: "Is the road safe?", answer: "The road is generally safe but rough. 4x4 vehicles are recommended." }
  //   ],
  //   relatedPosts: [
  //     { title: "Pangong Lake Camping Tips", excerpt: "How to plan a safe and memorable camping trip at Pangong Lake.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", date: "2025-08-01", readTime: "5 min" }
  //   ],
  //   stats: {
  //     tours: "5+",
  //     visitors: "20K+",
  //     rating: "4.9/5",
  //     guides: "8+"
  //   },
  //   activities: [
  //     { name: "Photography", description: "Capture color-changing lake", icon: "📸" },
  //     { name: "Camping", description: "Lakeside overnight stay", icon: "⛺" },
  //     { name: "Bird Watching", description: "Migratory birds", icon: "🦅" }
  //   ]
  // },

  // "nubra-valley": {
  //   id: "nubra-valley",
  //   name: "Nubra Valley",
  //   region: "Ladakh",
  //   country: "India",
  //   tagline: "Experience the surreal high-altitude desert with sand dunes and double-humped Bactrian camels.",
  //   tags: ["DESERT", "CAMELS", "MONASTERIES"],
  //   description: "Discover the unique landscape where cold desert meets snow-capped mountains.",
  //   longDescription: "Nubra Valley, at 3,000m altitude, is a high-altitude cold desert with white sand dunes, double-humped camels, and ancient monasteries. Accessible via the world's highest motorable pass Khardung La, the valley offers a unique blend of desert and mountain landscapes, Buddhist culture, and adventure.",
  //   heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80",
  //   startingPrice: 649,
  //   quickFacts: {
  //     bestTime: "May-September",
  //     language: "Ladakhi, Hindi, English",
  //     currency: "Indian Rupee (INR)",
  //     timezone: "IST (GMT+5:30)",
  //     visa: "e-Visa available",
  //     airport: "Leh (120km away via Khardung La)"
  //   },
  //   gallery: {
  //     all: [
  //       { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", caption: "Sand Dunes", category: "desert" },
  //       { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", caption: "Bactrian Camels", category: "wildlife" },
  //       { url: "https://images.unsplash.com/photo-1609952533942-0157649f8d5c?w=800", caption: "Diskit Monastery", category: "culture" }
  //     ]
  //   },
  //   highlights: [
  //     "White sand dunes at Hunder",
  //     "Double-humped Bactrian camels",
  //     "Diskit Monastery with giant Buddha",
  //     "Khardung La pass crossing",
  //     "Shyok and Nubra river valleys",
  //     "Panamik hot springs"
  //   ],
  //   attractions: [
  //     {
  //       name: "Hunder Sand Dunes",
  //       description: "White sand dunes with camel rides",
  //       image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
  //       mustVisit: true
  //     },
  //     {
  //       name: "Diskit Monastery",
  //       description: "Ancient monastery with 32m Buddha statue",
  //       image: "https://images.unsplash.com/photo-1609952533942-0157649f8d5c?w=600",
  //       mustVisit: true
  //     },
  //     {
  //       name: "Panamik Hot Springs",
  //       description: "Natural hot water springs",
  //       image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
  //       mustVisit: false
  //     }
  //   ],
  //   culturalInsights: [
  //     { title: "Buddhist Heritage", description: "Nubra Valley is dotted with ancient monasteries and reflects Ladakh’s Buddhist culture." },
  //     { title: "Camel Caravans", description: "The valley was once part of the Silk Route, known for its double-humped Bactrian camels." }
  //   ],
  //   cuisine: [
  //     { name: "Thukpa", description: "Hearty noodle soup", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400", type: "Main Course" },
  //     { name: "Momos", description: "Tibetan dumplings", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400", type: "Snack" },
  //     { name: "Butter Tea", description: "Traditional salted tea", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", type: "Beverage" }
  //   ],
  //   weather: [
  //     { season: "Summer", months: "May-September", temp: "10-30°C", rainfall: "15mm", icon: "☀️", description: "Pleasant weather, road open" },
  //     { season: "Winter", months: "October-April", temp: "-15 to 5°C", rainfall: "2mm", icon: "❄️", description: "Extremely cold, road closed" }
  //   ],
  //   thingsToDo: [
  //     { title: "Camel Safari", description: "Ride double-humped camels on the sand dunes.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", duration: "30 min", price: "₹500" },
  //     { title: "Monastery Tour", description: "Visit Diskit and other ancient monasteries.", image: "https://images.unsplash.com/photo-1609952533942-0157649f8d5c?w=800", duration: "2 hours", price: "₹200" }
  //   ],
  //   accommodation: [
  //     { type: "Camp", description: "Luxury camps and eco-resorts in Hunder.", priceRange: "₹3000-₹10000/night", rating: "4.7/5" },
  //     { type: "Homestay", description: "Stay with local families in Nubra villages.", priceRange: "₹1500-₹4000/night", rating: "4.4/5" }
  //   ],
  //   transportation: [
  //     { mode: "By Air", details: "Leh is the nearest airport, 120km away via Khardung La.", icon: "✈️" },
  //     { mode: "By Road", details: "Accessible by road from Leh via Khardung La pass.", icon: "🚙" }
  //   ],
  //   travelTips: [
  //     { icon: "⛰️", title: "Acclimatize", tip: "Acclimatize in Leh before traveling to Nubra Valley." },
  //     { icon: "💵", title: "Carry Cash", tip: "Limited ATMs, carry cash for expenses." }
  //   ],
  //   faq: [
  //     { question: "Do I need a permit for Nubra Valley?", answer: "Yes, Inner Line Permit is required, obtainable in Leh or online." },
  //     { question: "How do I reach Nubra Valley?", answer: "Via Khardung La pass from Leh, approximately 5-6 hours drive." },
  //     { question: "Is camel ride safe?", answer: "Yes, guided camel rides are safe and a unique experience in the cold desert." }
  //   ],
  //   relatedPosts: [
  //     { title: "Nubra Valley Travel Guide", excerpt: "Everything you need to know for a trip to Nubra Valley.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", date: "2025-07-25", readTime: "6 min" }
  //   ],
  //   stats: {
  //     tours: "7+",
  //     visitors: "15K+",
  //     rating: "4.8/5",
  //     guides: "6+"
  //   },
  //   activities: [
  //     { name: "Camel Safari", description: "Ride double-humped camels", icon: "🐫" },
  //     { name: "Monastery Tours", description: "Visit ancient Buddhist sites", icon: "🛕" },
  //     { name: "Photography", description: "Desert and mountain landscapes", icon: "📸" },
  //     { name: "River Rafting", description: "Shyok River adventures", icon: "🚣" }
  //   ]
  // }
};

// Helper function to get destination detail by ID
export function getDestinationDetail(id: string): DestinationDetail | undefined {
  return destinationDetails[id];
}

// Get all destination IDs
export function getAllDestinationIds(): string[] {
  return Object.keys(destinationDetails);
}
