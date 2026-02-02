// Tour data for the website
export interface Tour {
  id: string;
  title: string;
  tourCode?: string;
  subtitle?: string;
  description?: string;
  price?: number;
  originalPrice?: number;
  discount?: number;
  duration?: string;
  theme?: string;
  rating?: number;
  reviews?: number;
  reviewCount?: number;
  groupSize?: string;
  image?: string;
  images?: string[];
  category?: string;
  season?: string;
  featured?: boolean;
  badges?: string[];
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  coverImage?: string,
  itinerary?: Array<{
    day: number;
    title: string;
    description: string;
    activities?: string[];
    meals?: string[];
    accommodation?: string;
    location?: string;
    image?: string;
    media?: Array<{ type: 'image' | 'video'; url: string; caption?: string }>;
    highlights?: string[];
  }>;
  accommodationDetails?: {
    hotels?: Array<{
      name: string;
      location: string;
      rating: number;
      description: string;
      amenities: string[];
    }>;
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  amenities?: Array<{
    icon: string;
    label: string;
  }>;
  sustainability?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  availableDates?: string[];
  addons?: Array<{
    id: number;
    name: string;
    price: number;
    description: string;
  }>;
}

export const tours: Tour[] = [
  // NEW REAL TOUR - Kashmir 4-Day Escape
  {
    id: "kashmir-4-day-escape",
    title: "Kashmir 4-Day Escape - Srinagar, Gulmarg & Pahalgam",
    description: "This four-day escape to Kashmir blends iconic landscapes with gentle adventure and comfort. Drift across Dal Lake, explore Mughal gardens, ride the Gondola in Gulmarg, and discover pine forests in Pahalgam.",
    price: 299,
    duration: "4 Days",
    theme: "family-leisure",
    rating: 4.9,
    reviews: 87,
    groupSize: "2-10",
    image: "/tour_covers/kashmir-4-day-escape.png",
    category: "Cultural",
    season: "Spring",
    featured: true,
    badges: ["New Arrival", "3-Star Stay"]
  },
  // NEW REAL TOUR - Kashmir 7-Day Complete Journey
  {
    id: "kashmir-7-day-jammu-circuit",
    title: "Kashmir 7-Day Complete Journey - Jammu to Jammu Circuit",
    description: "This seven-day journey begins and ends in Jammu, unfolding gradually from warm plains to the cool alpine air of Kashmir's mountains. Travel through Srinagar, Gulmarg, Sonmarg and Pahalgam experiencing lakes, meadows, and valleys.",
    price: 449,
    duration: "7 Days",
    theme: "family-leisure",
    rating: 4.9,
    reviews: 103,
    groupSize: "2-12",
    image: "/tour_covers/kashmir-7-day-jammu-circuit.png",
    category: "Cultural",
    season: "All Year",
    featured: true,
    badges: ["Complete Tour", "Best Value"]
  },
  // NEW REAL TOUR - Kashmir 7-Day Valley & Houseboat Experience
  {
    id: "kashmir-7-day-valley-houseboat",
    title: "Kashmir 7-Day Valley & Houseboat Experience",
    description: "This seven-day Kashmir escape blends breathtaking landscapes with culture and comfort. From shimmering lakes and historic gardens to snow-tipped slopes of Gulmarg and forested valleys of Pahalgam, experience traditional houseboat stay on Dal Lake.",
    price: 399,
    duration: "7 Days",
    theme: "nature-offbeat",
    rating: 4.8,
    reviews: 95,
    groupSize: "2-10",
    image: "/tour_covers/kashmir-7-day-valley-houseboat.png",
    category: "Cultural",
    season: "All Year",
    featured: true,
    badges: ["Houseboat Stay", "Popular"]
  },
  // NEW REAL TOUR - Kashmir 7-Day Luxury Escape (5-Star)
  {
    id: "kashmir-7-day-luxury-escape",
    title: "Kashmir 7-Day Luxury Escape - Premier 5-Star Experience",
    description: "Step into a world where the Himalayas meet heritage. This curated seven-day escape elevates Kashmir's beauty with five-star comfort, exclusive experiences, and seamless service. From palatial resorts to premium houseboats, experience Kashmir wrapped in world-class hospitality.",
    price: 899,
    duration: "7 Days",
    theme: "luxury",
    rating: 5.0,
    reviews: 67,
    groupSize: "2-8",
    image: "/tour_covers/kashmir-7-day-luxury-escape.png",
    category: "Luxury",
    season: "All Year",
    featured: true,
    badges: ["5-Star Luxury", "Premium"]
  },
  // NEW REAL TOUR - Kashmir 7-Day Premium Experience (4-Star)
  {
    id: "kashmir-7-day-premium-experience",
    title: "Kashmir 7-Day Premium Experience - 4-Star Comfort",
    description: "Experience Kashmir with premium 4-star comfort. From shimmering lakes and historic gardens to snow-tipped slopes of Gulmarg and forested valleys of Pahalgam, enjoy Gondola rides, local guides, and ATV adventures with quality accommodations throughout.",
    price: 549,
    duration: "7 Days",
    theme: "luxury",
    rating: 4.8,
    reviews: 112,
    groupSize: "2-10",
    image: "/tour_covers/kashmir-7-day-premium-experience.png",
    category: "Premium",
    season: "All Year",
    featured: true,
    badges: ["4-Star Comfort", "Great Value"]
  },
  // NEW REAL TOUR - Kashmir Family Holiday (3-Star) 6N7D
  {
    id: "kashmir-family-6n7d-3star",
    title: "Kashmir Family Holiday - 3-Star Comfort",
    description: "A relaxed, family-friendly Kashmir itinerary with gentle sightseeing, nature walks, and picture spots. Two nights in Pahalgam's pine valleys, one night each in Gulmarg and Sonmarg, plus calm Srinagar evenings, perfect for children, parents and grandparents traveling together.",
    price: 499,
    duration: "7 Days",
    theme: "family-leisure",
    rating: 4.9,
    reviews: 78,
    groupSize: "2-12",
    image: "/tour_covers/kashmir-family-6n7d-3star.png",
    category: "Family",
    season: "All Year",
    featured: true,
    badges: ["Family Friendly", "3-Star Stay"]
  },
  // NEW REAL TOUR - Kashmir Honeymoon (6D5N)
  {
    id: "kashmir-honeymoon-6d5n",
    title: "Kashmir Honeymoon - Romantic Escape",
    description: "Experience the magic of Kashmir with your loved one. This specially designed honeymoon itinerary offers romantic moments by serene lakes, snow-covered mountains, scenic valleys, and cozy stays. Perfect for couples looking for peace, beauty, and unforgettable memories together.",
    price: 449,
    duration: "6 Days",
    theme: "honeymoon",
    rating: 5.0,
    reviews: 145,
    groupSize: "2",
    image: "/tour_covers/kashmir-honeymoon-6d5n.png",
    category: "Honeymoon",
    season: "All Year",
    featured: true,
    badges: ["Romantic", "Honeymoon Special"]
  },
  // NEW REAL TOUR - Kashmir Group Tour (5N6D 3-Star)
  {
    id: "kashmir-group-5n6d-3star",
    title: "Kashmir Group Tour - 3-Star Comfort",
    description: "A scenic and social journey crafted for groups — friends, college batches, families or corporate teams — showcasing Kashmir's highlights. From Dal Lake sunsets and Mughal gardens to pine valleys and snow-kissed meadows, this easy-paced trip includes a deluxe houseboat stay.",
    price: 399,
    duration: "6 Days",
    theme: "corporate-group",
    rating: 4.8,
    reviews: 203,
    groupSize: "6-20",
    image: "/tour_covers/kashmir-group-5n6d-3star.png",
    category: "Group",
    season: "All Year",
    featured: true,
    badges: ["Group Travel", "Best for Friends"]
  },
  // NEW REAL TOUR - Kashmir Cultural Journey (6N7D 4-Star)
  {
    id: "kashmir-cultural-6n7d-4star",
    title: "Kashmir Cultural Journey - 4-Star Heritage",
    description: "A week-long cultural immersion blending Srinagar's old-city heritage, traditional Mughal gardens, Sufi influences, artisan crafts and warm mountain hospitality. Experience Kashmir through its living traditions, stories, and people with luxury 4-star accommodations.",
    price: 649,
    duration: "7 Days",
    theme: "culture-heritage",
    rating: 4.9,
    reviews: 156,
    groupSize: "2-8",
    image: "/tour_covers/kashmir-cultural-6n7d-4star.png",
    category: "Cultural",
    season: "All Year",
    featured: true,
    badges: ["Cultural Experience", "4-Star Luxury"]
  },
  // NEW REAL TOUR - Kashmir Adventure (7N8D)
  {
    id: "kashmir-adventure-7n8d",
    title: "Kashmir Adventure - Action-Packed Experience",
    description: "A thrilling week across Kashmir's adventure belt — from the snowy bowls of Gulmarg to the glacier rivers of Sonmarg and pine trails of Pahalgam. Snow play, gondola rides, short hikes, waterfalls and high valleys make every day active, scenic and unforgettable.",
    price: 699,
    duration: "8 Days",
    theme: "adventure",
    rating: 4.9,
    reviews: 187,
    groupSize: "2-10",
    image: "/tour_covers/kashmir-adventure-7n8d.png",
    category: "Adventure",
    season: "All Year",
    featured: true,
    badges: ["Adventure", "Action-Packed"]
  },
  // NEW REAL TOUR - Honeymoon 5N6D 3-Star (Srinagar Base)
  {
    id: "kashmir-honeymoon-5n6d-3star",
    title: "Kashmir Honeymoon - Budget Romance (3-Star)",
    description: "This 6-day Kashmir honeymoon is perfect for couples seeking romance without breaking the bank. Stay in Srinagar throughout, taking day trips to Gulmarg's meadows, Sonmarg's glaciers, and Pahalgam's valleys. Includes candlelight dinner, Shikara ride, and cozy 3-star hotel or houseboat stays.",
    price: 389,
    duration: "6 Days",
    theme: "honeymoon",
    rating: 4.7,
    reviews: 124,
    groupSize: "2",
    image: "/tour_covers/kashmir-honeymoon-5n6d-3star.png",
    category: "Honeymoon",
    season: "All Year",
    featured: false,
    badges: ["Budget Friendly", "Romantic"]
  },
  // NEW REAL TOUR - Gurez Valley Escape 7N8D 3-Star
  {
    id: "gurez-valley-7n8d-3star",
    title: "Gurez Valley Escape - Untouched Frontier (3-Star)",
    description: "A slow-paced, scenic Himalayan escape into Kashmir's most untouched frontier — Gurez Valley. Cross the dramatic Razdan Pass, stay beside the Kishanganga River, walk to ancient villages like Tulail & Dawar, and meet the warm Dard Shina community. Perfect for nature lovers seeking raw beauty, starry skies, and quiet evenings.",
    price: 549,
    duration: "8 Days",
    theme: "adventure",
    rating: 4.8,
    reviews: 67,
    groupSize: "2-8",
    image: "/tour_covers/gurez-valley-7n8d-3star.png",
    category: "Adventure",
    season: "Summer",
    featured: true,
    badges: ["Off-Beat", "Cultural", "Nature"]
  },
  // NEW REAL TOUR - Gurez Valley Frontier 6N7D 4-Star
  {
    id: "gurez-valley-6n7d-4star",
    title: "Gurez Frontier Experience - Premium Explorer (4-Star)",
    description: "A rare Himalayan escape into Kashmir's northern frontier — the mystical Gurez Valley. Cross Razdan Pass, wander through ancient communities, trace the Kishanganga River, and witness raw landscapes few travellers ever see. A blend of comfort, culture, and isolation — designed for explorers, photographers and lovers of unspoiled nature.",
    price: 649,
    duration: "7 Days",
    theme: "adventure",
    rating: 4.9,
    reviews: 42,
    groupSize: "2-6",
    image: "/tour_covers/gurez-valley-6n7d-4star.png",
    category: "Premium Adventure",
    season: "Summer",
    featured: true,
    badges: ["Premium", "Off-Beat", "Photography"]
  },
  // NEW REAL TOUR - Keran Valley Escape 6N7D 3-Star
  {
    id: "keran-valley-6n7d-3star",
    title: "Keran Valley Escape - Hidden Frontier (3-Star)",
    description: "A scenic Himalayan journey into the newly opened Keran Valley — a lush riverside wonderland tucked along the Kishanganga River. Expect pure fresh air, wooden hillside villages, pine forests, orchard belts, and peaceful days surrounded by mountain silence. Ideal for nature lovers, families seeking a quiet retreat, and travellers wishing to explore Kashmir's hidden frontier landscapes away from crowds.",
    price: 499,
    duration: "7 Days",
    theme: "nature",
    rating: 4.7,
    reviews: 38,
    groupSize: "2-10",
    image: "/tour_covers/keran-valley-6n7d-3star.png",
    category: "Nature",
    season: "Summer",
    featured: true,
    badges: ["Off-Beat", "Nature", "Peaceful"]
  },
  // NEW REAL TOUR - Off-Beat Kashmir Unveiled 11N12D
  {
    id: "offbeat-kashmir-11n12d",
    title: "Off-Beat Kashmir Unveiled - Complete Explorer",
    description: "An immersive journey into Kashmir's lesser-known wonders — tranquil lakes, lost temples, alpine meadows, and ancient ruins. From the emerald meadows of Tosa Maidan to the sacred springs of Verinag, from the waters of Wular & Manasbal to the historic marvels of Martand Sun Temple, this itinerary blends nature, heritage, and quiet exploration. Perfect for travellers seeking a slow, scenic circuit with limited crowds, rich stories, day hikes, sacred spaces, and postcard landscapes — far beyond the usual Gulmarg–Pahalgam loop.",
    price: 849,
    duration: "12 Days",
    theme: "culture-heritage",
    rating: 4.9,
    reviews: 56,
    groupSize: "2-12",
    image: "/tour_covers/offbeat-kashmir-11n12d.png",
    category: "Heritage & Nature",
    season: "All Year",
    featured: true,
    badges: ["Off-Beat", "Heritage", "Comprehensive"]
  },
  // NEW REAL TOUR - Kashmir Special Luxe Escape 5N6D 4-Star
  {
    id: "kashmir-special-5n6d-4star",
    title: "Kashmir Special - Luxe Escape (4-Star)",
    description: "A refined Kashmir getaway bringing together lakes, Mughal gardens, high meadows and river valleys — with comfort stays and curated sightseeing at a relaxed pace. Spend dreamy evenings on the lakefront, ride through pine valleys, feel the chill on snow slopes, and wander through riverside meadows. This elegant circuit blends culture, nature, and leisure — perfect for couples, families & friends seeking comfort with charm.",
    price: 599,
    duration: "6 Days",
    theme: "family-leisure",
    rating: 4.8,
    reviews: 94,
    groupSize: "2-8",
    image: "/tour_covers/kashmir-special-5n6d-4star.png",
    category: "Premium",
    season: "All Year",
    featured: true,
    badges: ["Premium", "4-Star", "Luxury"]
  },
  // NEW REAL TOUR - Kashmir Frontier Circuit 6N7D 3-Star
  {
    id: "kashmir-frontier-6n7d",
    title: "Kashmir Frontier Circuit - Wild Southeast",
    description: "A thrilling journey into Kashmir's wild southeast — a region few tourists ever reach. From the mist-wrapped forests of Daksum and the hairpin ascent to Sinthan Pass to Margan Top and the dreamlike meadows of Warwan Valley, this itinerary blends nature, road adventure, and quiet village life. Returning via Patnitop, Bahu Fort, and the sacred Mansar Lake, it's the perfect loop for explorers chasing epic views, secluded picnics, warm hospitality, and untouched beauty.",
    price: 549,
    duration: "7 Days",
    theme: "adventure",
    rating: 4.7,
    reviews: 31,
    groupSize: "2-10",
    image: "/tour_covers/kashmir-frontier-6n7d.png",
    category: "Adventure",
    season: "Summer",
    featured: true,
    badges: ["Off-Beat", "Adventure", "Frontier"]
  },
  // NEW REAL TOUR - 9N10D Jammu Kashmir Complete Tour with Vaishno Devi
  {
    id: "jammu-kashmir-9n10d",
    title: "Complete Jammu Kashmir - 10 Days with Vaishno Devi",
    description: "The ultimate Jammu & Kashmir experience combining sacred pilgrimage with scenic exploration. Begin with Vaishno Devi Darshan at Katra, journey through hill stations like Patnitop and Mansar Lake, explore the valley jewels of Pahalgam, Gulmarg, Srinagar and Sonmarg. This comprehensive 10-day tour covers all major destinations with comfortable 3-star stays, private vehicle, Shikara ride, Mughal Gardens, alpine meadows, and riverside walks. Perfect for families, pilgrims, and those seeking a complete Kashmir experience without rushing.",
    price: 699,
    duration: "10 Days",
    theme: "pilgrimage-scenic",
    rating: 4.9,
    reviews: 187,
    groupSize: "2-12",
    image: "/tour_covers/jammu-kashmir-9n10d.jpeg",
    category: "Pilgrimage",
    season: "All Year",
    featured: true,
    badges: ["Best Seller", "Pilgrimage", "Complete Tour"]
  },
  // // EXISTING DUMMY TOURS BELOW
  // {
  //   id: "kashmir-valley-explorer",
  //   title: "Kashmir Valley Explorer",
  //   description: "Discover the paradise on earth with pristine lakes, Mughal gardens, and snow-capped mountains",
  //   price: 299,
  //   duration: "7 Days",
  //   difficulty: "Easy",
  //   rating: 4.9,
  //   reviews: 124,
  //   groupSize: "2-12",
  //   image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
  //   category: "Cultural",
  //   season: "Spring",
  //   featured: true,
  //   badges: ["Best Seller", "Eco-Friendly"]
  // },
  // {
  //   id: "gulmarg-skiing-adventure",
  //   title: "Gulmarg Skiing Adventure",
  //   description: "Experience world-class skiing on Asia's finest slopes with breathtaking Himalayan views",
  //   price: 499,
  //   duration: "5 Days",
  //   difficulty: "Challenging",
  //   rating: 4.8,
  //   reviews: 89,
  //   groupSize: "4-10",
  //   image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
  //   category: "Adventure",
  //   season: "Winter",
  //   badges: ["Limited Spots"]
  // },
  // {
  //   id: "sonmarg-trek-expedition",
  //   title: "Sonmarg Trek Expedition",
  //   description: "Trek through meadows of gold with pristine alpine lakes and majestic glacier views",
  //   price: 399,
  //   duration: "6 Days",
  //   difficulty: "Moderate",
  //   rating: 4.9,
  //   reviews: 156,
  //   groupSize: "6-15",
  //   image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
  //   category: "Trekking",
  //   season: "Summer",
  //   badges: ["Popular"]
  // },
  // {
  //   id: "pahalgam-photography-tour",
  //   title: "Pahalgam Photography Tour",
  //   description: "Capture stunning landscapes, wildlife, and local culture in Kashmir's most photogenic valley",
  //   price: 449,
  //   duration: "5 Days",
  //   difficulty: "Easy",
  //   rating: 4.7,
  //   reviews: 67,
  //   groupSize: "4-8",
  //   image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
  //   category: "Photography",
  //   season: "Autumn",
  //   badges: ["New"]
  // },
  // {
  //   id: "luxury-houseboat-experience",
  //   title: "Luxury Houseboat Experience",
  //   description: "Indulge in opulent houseboat stays on Dal Lake with personalized butler service",
  //   price: 799,
  //   duration: "4 Days",
  //   difficulty: "Easy",
  //   rating: 5.0,
  //   reviews: 43,
  //   groupSize: "2-6",
  //   image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
  //   category: "Luxury",
  //   season: "Spring",
  //   featured: true,
  //   badges: ["Premium", "Romantic"]
  // },
  // {
  //   id: "family-kashmir-adventure",
  //   title: "Family Kashmir Adventure",
  //   description: "Kid-friendly exploration of Kashmir's wonders with comfortable stays and easy activities",
  //   price: 349,
  //   duration: "6 Days",
  //   difficulty: "Easy",
  //   rating: 4.8,
  //   reviews: 92,
  //   groupSize: "4-12",
  //   image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
  //   category: "Family",
  //   season: "Summer",
  //   badges: ["Family Friendly"]
  // }
];

// Detailed tour information for the new Kashmir 4-Day Escape
export const kashmir4DayEscapeDetail = {
  id: "kashmir-4-day-escape",
  coverImage: "/tour_covers/kashmir-4-day-escape.png",
  tourCode: "JRN-KSH-4D",
  title: "Kashmir 4-Day Escape",
  subtitle: "Srinagar, Gulmarg & Pahalgam",
  description: "This four-day escape to Kashmir blends iconic landscapes with gentle adventure and comfort. You drift across Dal Lake, stand beneath pine forests in Pahalgam, ride the cable car in Gulmarg, and explore the timeless Mughal-era gardens of Srinagar. Scenic drives, snow-kissed slopes, and calm evenings at warm 3-star stays bring together a journey that is short, sweet, and unforgettable.",
  price: 299,
  originalPrice: 399,
  discount: 25,
  duration: "4 Days / 3 Nights",
  theme: "family-leisure",
  groupSize: "2-10 People",
  rating: 4.9,
  reviews: 87,
  category: "Cultural & Nature",
  season: "All Year Round",
  departureTime: "Upon arrival at Srinagar Airport",
  returnTime: "After breakfast on Day 4",
  dressCode: "Comfortable clothing, warm layers for winter, walking shoes",
  tourType: "Private & Group Tours Available",
  language: "English, Hindi",
  minAge: 5,
  
  availableDates: [
    "2025-03-15",
    "2025-03-22",
    "2025-04-05",
    "2025-04-19",
    "2025-05-10",
    "2025-05-24",
    "2025-06-10",
    "2025-06-24"
  ],

  addons: [
    { id: 1, name: "Travel Insurance", price: 25, description: "Comprehensive travel coverage" },
    { id: 2, name: "Gondola Phase II Upgrade", price: 50, description: "Upgrade to Gondola Phase II at Gulmarg" },
    { id: 3, name: "Adventure Activities Pack", price: 80, description: "Includes ATV, snow scooter, sledging" },
    { id: 4, name: "Premium Accommodation Upgrade", price: 150, description: "Upgrade to 4-star hotels" },
    { id: 5, name: "Professional Photography", price: 120, description: "Personal photographer for key attractions" }
  ],

  highlights: [
    "Shikara ride on pristine Dal Lake (1 hour)",
    "Visit Mughal Gardens - Nishat Bagh and Shalimar Bagh",
    "Gulmarg Gondola ride (Phase I)",
    "Explore Meadow of Flowers in Gulmarg",
    "Visit St. Mary's Church in Gulmarg",
    "Saffron Fields of Kashmir Valley",
    "Aru Valley, Betaab Valley, and Chandanwari exploration",
    "Evening stroll along Lidder River in Pahalgam",
    "Optional visit to Shankaracharya Temple",
    "3 nights accommodation in 3-star hotel and houseboat"
  ],

  inclusions: [
    "3 Nights accommodation (2 nights in 3-star hotel + 1 night in 3-star houseboat)",
    "All transportation for 4 days from Srinagar Airport to Srinagar Airport",
    "Daily breakfast and dinner",
    "1-hour Shikara ride on Dal Lake",
    "All sightseeing as per itinerary",
    "English-speaking driver/guide",
    "All applicable taxes"
  ],

  exclusions: [
    "Gondola tickets for Gulmarg cable car",
    "Entry tickets for gardens and monumental sights",
    "Lunch (you will be exploring during the day)",
    "Shopping and personal expenses",
    "Adventure activities - Pony rides, ATV, snow scooter, sledging, skiing",
    "Local taxis for Pahalgam, Sonmarg, and Gulmarg sightseeing",
    "Travel insurance",
    "Any items not mentioned in inclusions"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Srinagar + Mughal Gardens & Shikara Ride",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "You arrive at Srinagar Airport and settle into a comfortable 3-star hotel such as Star of Kashmir, Royal Heritage, The Victory, or Grand Kaisar. Rested and refreshed, the day opens with the elegance of Mughal gardens — Nishat Bagh and Shalimar Bagh — lined with terraced lawns, fountains and Chinar trees. Later, a Shikara ride on Dal Lake glides across floating gardens and reflections of the mountains. Optional visit to Shankaracharya Temple offers a hilltop view over the city. As dusk falls, stroll along Boulevard Road before retiring for dinner and your first night in Kashmir.",
      activities: [
        "Airport pickup and hotel check-in",
        "Visit Nishat Bagh (Garden of Bliss)",
        "Explore Shalimar Bagh (Abode of Love)",
        "1-hour Shikara ride on Dal Lake",
        "Optional: Shankaracharya Temple visit",
        "Evening stroll on Boulevard Road"
      ],
      meals: ["Dinner"],
      accommodation: "3-Star Hotel (Star of Kashmir / Royal Heritage / The Victory / Grand Kaisar)",
      highlights: [
        "First glimpse of majestic Dal Lake",
        "Stunning Mughal architecture and gardens",
        "Floating gardens on Dal Lake"
      ]
    },
    {
      day: 2,
      title: "Srinagar to Gulmarg Day Trip",
      location: "Gulmarg (52 km, 2 hours)",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "After breakfast, you travel to Gulmarg, the Meadow of Flowers. Set against sky-piercing peaks, Gulmarg invites you to board the Gondola (Phase I) — a gentle ascent to panoramic horizons and snow-traced slopes. You may explore the meadows, visit St. Mary's Church, or enjoy optional snow activities if available. By late afternoon, you return to Srinagar for dinner and a restful night at your hotel.",
      activities: [
        "Scenic drive to Gulmarg through pine forests",
        "Gondola ride Phase I (tickets not included)",
        "Explore the Meadow of Flowers",
        "Visit St. Mary's Church",
        "Optional: Snow activities (skiing, sledging, ATV)",
        "Photography at alpine meadows"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Srinagar",
      highlights: [
        "Asia's highest cable car experience",
        "Panoramic Himalayan views",
        "Snow-covered peaks and meadows"
      ]
    },
    {
      day: 3,
      title: "Pahalgam Day Trip",
      location: "Pahalgam (100 km, 3 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "After breakfast, the journey continues toward Pahalgam with a refreshing stop at the Saffron Fields of Kashmir Valley. You continue along river valleys and forest slopes to reach Pahalgam, the Valley of Shepherds. Local taxis take you deeper into the hills to explore Aru Valley, Betaab Valley, and Chandanwari — where pine forests, tumbling streams and pasturelands shape a picture-perfect day. An evening stroll along the Lidder River brings calm before returning to Srinagar for dinner and an overnight stay (Hotel or optional Houseboat).",
      activities: [
        "Stop at Kashmir Saffron Fields",
        "Scenic drive along Lidder River valley",
        "Explore Aru Valley (local taxi required)",
        "Visit Betaab Valley - Bollywood filming location",
        "Trip to Chandanwari",
        "Evening walk along Lidder River",
        "Optional: Pony rides in the valleys"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel or Houseboat in Srinagar (Humayun Palace / Similar)",
      highlights: [
        "Golden saffron fields of Kashmir",
        "Pine forests and mountain streams",
        "Bollywood's favorite shooting location"
      ]
    },
    {
      day: 4,
      title: "Departure from Srinagar",
      location: "Srinagar Airport",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "With breakfast complete, you depart for the airport carrying memories of soaring Gondola views, riverside walks, waterfall mists, and timeless lake sunsets — the essence of Kashmir in four unforgettable days.",
      activities: [
        "Breakfast at hotel/houseboat",
        "Check-out and airport transfer",
        "Departure with unforgettable memories"
      ],
      meals: ["Breakfast"],
      accommodation: "N/A",
      highlights: [
        "Last views of beautiful Srinagar",
        "Memories to cherish forever"
      ]
    }
  ],

  accommodationDetails: {
    title: "Accommodation Details",
    description: "All 3 nights in Srinagar - 2 nights in a 3-star hotel and 1 night in a 3-star Houseboat",
    hotels: [
      {
        name: "Hotel Star Kashmir or Similar",
        type: "3-Star Hotel",
        location: "Srinagar",
        nights: 2,
        amenities: ["Comfortable rooms", "Restaurant", "WiFi", "Room service"]
      },
      {
        name: "Houseboat Humayun Palace or Similar",
        type: "3-Star Houseboat",
        location: "Dal Lake, Srinagar",
        nights: 1,
        amenities: ["Traditional decor", "Lake views", "Authentic experience", "Peaceful ambiance"]
      }
    ]
  },

  images: [
    "/destinations/kashmir/srinagar/01.jpg",
    "/destinations/kashmir/gulmarg/01.jpg",
    "/destinations/kashmir/pahalgam/1.jpg",
    "/destinations/kashmir/dal_lake/1.jpg",
    "/destinations/kashmir/nishat_bagh/1.jpg",
    "/destinations/kashmir/shalimar_bagh/1.jpg",
    "/destinations/kashmir/gulmarg/02.jpg",
    "/destinations/kashmir/pahalgam/2.jpg",
    "/destinations/kashmir/srinagar/02.jpg"
  ],

  faqs: [
    {
      question: "What is the best time to book this tour?",
      answer: "This tour operates year-round. Summer (April-June) offers pleasant weather and blooming flowers. Autumn (September-November) provides stunning foliage. Winter (December-February) is perfect for snow activities in Gulmarg. Spring (March-April) showcases beautiful gardens in full bloom."
    },
    {
      question: "Are Gondola tickets included in the package?",
      answer: "No, Gondola tickets for Gulmarg cable car are not included in the package price. You can purchase them on-site. Current rates: Phase I costs approximately ₹740-990, Phase II costs approximately ₹950-1,250 (prices subject to change)."
    },
    {
      question: "Do I need to hire local taxis in Pahalgam?",
      answer: "Yes, local taxis are required in Pahalgam to visit Aru Valley, Betaab Valley, and Chandanwari as union regulations don't allow outside vehicles. These costs are not included in the package and typically range from ₹2,500-3,500 for all valleys."
    },
    {
      question: "Is lunch included in the package?",
      answer: "No, lunch is not included as you'll be out exploring during the day with flexible timing. This allows you to try local restaurants and cuisines at your own pace. We can recommend excellent dining options at each location."
    },
    {
      question: "Can I upgrade to a 5-star hotel?",
      answer: "Yes, we can arrange hotel upgrades to 4-star or 5-star properties at an additional cost. Please contact us for upgrade pricing and availability."
    },
    {
      question: "What should I pack for this tour?",
      answer: "Pack comfortable walking shoes, warm layers (even in summer, mornings/evenings can be cool), sunscreen, sunglasses, camera, and any personal medications. In winter, bring heavy woolens, gloves, and warm socks."
    }
  ],

  amenities: [
    { icon: "Hotel", name: "3-Star Accommodation" },
    { icon: "Utensils", name: "Daily Breakfast & Dinner" },
    { icon: "Car", name: "Private Transportation" },
    { icon: "Camera", name: "Scenic Photo Spots" },
    { icon: "Shield", name: "Travel Assistance" },
    { icon: "MapPin", name: "Experienced Driver" }
  ],

  sustainability: [
    { icon: "Leaf", title: "Eco-Friendly Transport", description: "Well-maintained vehicles with reduced emissions" },
    { icon: "Award", title: "Local Community Support", description: "Supporting local businesses and communities" },
    { icon: "Leaf", title: "Responsible Tourism", description: "Following sustainable tourism practices" }
  ]
};

// Detailed tour information for the Kashmir 7-Day Jammu Circuit
export const kashmir7DayJammuCircuitDetail = {
  id: "kashmir-7-day-jammu-circuit",
  coverImage: "/tour_covers/kashmir-7-day-jammu-circuit.png",
  tourCode: "JRN-KSH-7D-JMU",
  title: "Kashmir 7-Day Complete Journey",
  subtitle: "Jammu to Jammu Circuit via Srinagar, Gulmarg, Sonmarg & Pahalgam",
  description: "This seven-day journey begins and ends in Jammu, unfolding gradually from warm plains to the cool alpine air of Kashmir's mountains. As you travel through Srinagar, Gulmarg, Sonmarg and Pahalgam, every stop paints a different shade of the valley — lakes reflecting snowy peaks, meadows tucked beneath pine forests, and rivers carving through deep green valleys. Comfortable nights in handpicked stays, serene landscapes, and scenic drives create a beautifully paced Kashmiri experience.",
  price: 449,
  originalPrice: 599,
  discount: 25,
  duration: "7 Days / 6 Nights",
  theme: "family-leisure",
  groupSize: "2-12 People",
  rating: 4.9,
  reviews: 103,
  category: "Cultural & Nature",
  season: "All Year Round",
  departureTime: "Upon arrival at Jammu",
  returnTime: "After breakfast on Day 7 from Pahalgam",
  dressCode: "Comfortable clothing, warm layers, walking shoes",
  tourType: "Private & Group Tours Available",
  language: "English, Hindi",
  minAge: 5,

  availableDates: [
    "2025-03-10",
    "2025-03-24",
    "2025-04-07",
    "2025-04-21",
    "2025-05-05",
    "2025-05-19",
    "2025-06-02",
    "2025-06-16"
  ],

  addons: [
    { id: 1, name: "Travel Insurance", price: 30, description: "Comprehensive travel coverage for 7 days" },
    { id: 2, name: "Gondola Phase II Upgrade", price: 50, description: "Upgrade to Gondola Phase II at Gulmarg" },
    { id: 3, name: "Thajiwas Glacier Trek", price: 60, description: "Guided pony ride to Thajiwas Glacier in Sonmarg" },
    { id: 4, name: "Adventure Activities Pack", price: 100, description: "Includes ATV, snow activities, river rafting" },
    { id: 5, name: "Premium Accommodation Upgrade", price: 200, description: "Upgrade to 4-star hotels throughout" }
  ],

  highlights: [
    "Complete Kashmir circuit starting and ending in Jammu",
    "Visit Mughal Gardens - Shalimar Bagh and Nishat Garden",
    "Shikara ride on pristine Dal Lake",
    "Pari Mahal ridge with panoramic city views",
    "Gulmarg Gondola ride and alpine meadows",
    "Sonmarg's Meadow of Gold and Sindh River",
    "Optional Thajiwas Glacier pony ride",
    "Aru Valley, Betaab Valley, and Chandanwari exploration",
    "Scenic drive through saffron fields and pine forests",
    "Evening walks by Lidder River in Pahalgam",
    "6 nights in comfortable 3-star accommodations"
  ],

  inclusions: [
    "6 nights accommodation in 3-star hotels/houseboats",
    "MAP basis - Breakfast + Lunch/Dinner daily",
    "Private taxi for all transfers and sightseeing",
    "Jammu Airport/Railway pickup and drop",
    "1-hour Shikara ride on Dal Lake",
    "All sightseeing as per itinerary",
    "Driver allowances, fuel, toll taxes, parking",
    "Welcome drink on arrival",
    "Mineral water during travel",
    "All applicable taxes"
  ],

  exclusions: [
    "Airfare or train tickets to/from Jammu",
    "Gondola ride tickets in Gulmarg",
    "Union car charges for local sightseeing in Gulmarg, Pahalgam & Sonmarg",
    "Private activities - Pony rides, water rafting, ATV, etc.",
    "Personal expenses - Tips, laundry, shopping",
    "Entry fees to gardens and monuments",
    "Travel insurance",
    "Any items not mentioned in inclusions"
  ],

  itinerary: [
    {
      day: 1,
      title: "Jammu Arrival → Srinagar Transfer",
      location: "Jammu to Srinagar (270 km, 7-8 hours)",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Upon arrival in Jammu, your scenic road journey to the Kashmir Valley begins — winding roads, mountain vistas and cool air welcome you as you cross into Srinagar. Check into your hotel — such as Star of Kashmir, Royal Heritage or The Victory — and enjoy a quiet evening at leisure.",
      activities: [
        "Pickup from Jammu Airport/Railway Station",
        "Scenic drive through mountain roads",
        "Check-in at hotel in Srinagar",
        "Evening at leisure",
        "Welcome drink on arrival"
      ],
      meals: ["Dinner"],
      accommodation: "3-Star Hotel in Srinagar (Star of Kashmir / Royal Heritage / The Victory)",
      highlights: [
        "First glimpses of Kashmir Valley",
        "Mountain drive with scenic views",
        "Comfortable hotel check-in"
      ]
    },
    {
      day: 2,
      title: "Srinagar City & Lakefront Charm",
      location: "Srinagar Local Sightseeing",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "Your morning starts with Mughal elegance at Shalimar Bagh and Nishat Garden, set against the sparkling Zabarwan range. A short drive takes you to the peaceful Pari Mahal ridge, overlooking the city and Dal Lake below. Later, you drift by Shikara across Dal Lake — floating markets, wooden houseboats and snow-fringed mountains frame a perfect afternoon.",
      activities: [
        "Visit Shalimar Bagh (Mughal Garden)",
        "Explore Nishat Garden with Zabarwan mountain backdrop",
        "Visit Pari Mahal ridge for panoramic views",
        "1-hour Shikara ride on Dal Lake",
        "Witness floating markets and houseboats",
        "Evening walk on Boulevard Road (optional)"
      ],
      meals: ["Breakfast", "Lunch/Dinner"],
      accommodation: "3-Star Hotel in Srinagar",
      highlights: [
        "Stunning Mughal architecture and gardens",
        "Serene Shikara ride experience",
        "Panoramic views from Pari Mahal"
      ]
    },
    {
      day: 3,
      title: "Gulmarg Meadows & Gondola Magic",
      location: "Srinagar to Gulmarg (52 km, 2 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Leave Srinagar behind for the pine-lined slopes of Gulmarg, where open meadows and crisp mountain air define the day. Ride the Gondola up to Phase I, with an option to continue higher if weather permits. Walk the fields, enjoy views of Nanga Parbat on a clear day, or visit the historic Gulmarg Golf Course.",
      activities: [
        "Scenic drive through pine forests to Gulmarg",
        "Gondola ride Phase I (tickets not included)",
        "Optional Phase II for higher altitude views",
        "Explore meadows and alpine flowers",
        "Visit Gulmarg Golf Course",
        "Optional snow activities (winter)",
        "Photography at scenic viewpoints"
      ],
      meals: ["Breakfast", "Lunch/Dinner"],
      accommodation: "3-Star Hotel in Gulmarg/Tangmarg (Hotel Countryside or Similar)",
      highlights: [
        "Asia's highest cable car experience",
        "Breathtaking views of Nanga Parbat",
        "Alpine meadows and pine forests"
      ]
    },
    {
      day: 4,
      title: "Gulmarg → Sonmarg (Meadow of Gold)",
      location: "Gulmarg to Sonmarg (~120 km, 3-4 hours)",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "After breakfast, the journey continues toward the glacial landscapes of Sonmarg. Wide valleys, shimmering snow, and river-fed plains define this beautiful region. Walk along the Sindh River, or (on own) choose a pony ride toward Thajiwas Glacier if weather allows.",
      activities: [
        "Drive through scenic mountain roads",
        "Arrive at Sonmarg (Meadow of Gold)",
        "Walk along Sindh River banks",
        "Optional pony ride to Thajiwas Glacier (own cost)",
        "Photography in glacial landscapes",
        "Enjoy raw mountain scenery"
      ],
      meals: ["Breakfast", "Lunch/Dinner"],
      accommodation: "3-Star Hotel in Sonmarg (Hotel Sonmarg Inn or Similar)",
      highlights: [
        "Stunning glacial valley views",
        "Crystal clear Sindh River",
        "Optional Thajiwas Glacier visit"
      ]
    },
    {
      day: 5,
      title: "Sonmarg → Pahalgam",
      location: "Sonmarg to Pahalgam (160 km, 5-6 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Today's road trip blends rugged highlands with forested valleys as you drive to Pahalgam — the Valley of Shepherds. En route, stop briefly at saffron plantations and cricket bat workshops near Awantipora. Arrive in Pahalgam and check in at your hotel — Pine Spring, Brooklyn Resorts or Similar.",
      activities: [
        "Scenic drive through highlands and valleys",
        "Stop at saffron plantations",
        "Visit cricket bat manufacturing workshops",
        "Visit Awantipora ruins (optional)",
        "Check-in at Pahalgam hotel",
        "Evening stroll by Lidder River"
      ],
      meals: ["Breakfast", "Lunch/Dinner"],
      accommodation: "3-Star Hotel in Pahalgam (Brooklyn Resort / Pine Spring or Similar)",
      highlights: [
        "Golden saffron fields",
        "Traditional cricket bat workshops",
        "First views of Lidder Valley"
      ]
    },
    {
      day: 6,
      title: "Pahalgam Valleys Exploration",
      location: "Pahalgam Local Sightseeing",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
      description: "After breakfast, a local taxi leads you deep into the heart of Pahalgam's beauty. Visit Aru Valley — broad meadows and pine forests, Betaab Valley — river curves, film scenery and picnic-perfect spots, and Chandanwari — fresh mountain air and glacier-fed streams. A calm evening back at the hotel rounds off the day, ideal for river walks and stargazing.",
      activities: [
        "Explore Aru Valley meadows (union taxi required)",
        "Visit Betaab Valley - Bollywood filming location",
        "Trip to Chandanwari glacier point",
        "Optional pony rides in valleys",
        "Walk along pine forests",
        "Evening riverside stroll",
        "Stargazing opportunity"
      ],
      meals: ["Breakfast", "Lunch/Dinner"],
      accommodation: "3-Star Hotel in Pahalgam (Brooklyn Resort / Pine Spring or Similar)",
      highlights: [
        "Three stunning valleys in one day",
        "Bollywood's favorite shooting spots",
        "Pine forests and mountain streams"
      ]
    },
    {
      day: 7,
      title: "Pahalgam → Jammu Departure",
      location: "Pahalgam to Jammu (270 km, 7-8 hours)",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "With a heart full of valley memories, begin your road journey back to Jammu. Carry with you the sound of flowing rivers, the stillness of lakes, and mountain horizons — the timeless magic of Kashmir.",
      activities: [
        "Breakfast at hotel",
        "Check-out and departure",
        "Scenic drive back to Jammu",
        "Drop at Jammu Airport/Railway Station"
      ],
      meals: ["Breakfast"],
      accommodation: "N/A",
      highlights: [
        "Last views of Kashmir Valley",
        "Memories of a complete Kashmir journey"
      ]
    }
  ],

  accommodationDetails: {
    title: "Accommodation Details - 6 Nights",
    description: "Stay in carefully selected 3-star properties across Kashmir",
    hotels: [
      {
        name: "Hotel Star Kashmir / Royal Heritage / The Victory",
        type: "3-Star Hotel",
        location: "Srinagar",
        nights: 2,
        amenities: ["Comfortable rooms", "Restaurant", "WiFi", "Room service", "MAP meals"]
      },
      {
        name: "Hotel Countryside or Similar",
        type: "3-Star Hotel",
        location: "Gulmarg/Tangmarg",
        nights: 1,
        amenities: ["Mountain views", "Heating", "Restaurant", "MAP meals"]
      },
      {
        name: "Hotel Sonmarg Inn or Similar",
        type: "3-Star Hotel",
        location: "Sonmarg",
        nights: 1,
        amenities: ["Valley views", "Cozy rooms", "Restaurant", "MAP meals"]
      },
      {
        name: "Brooklyn Resort / Pine Spring or Similar",
        type: "3-Star Hotel",
        location: "Pahalgam",
        nights: 2,
        amenities: ["Riverside location", "Garden", "Restaurant", "MAP meals", "Peaceful ambiance"]
      }
    ]
  },
  images: [
    "/destinations/jammu/patnitop/1.jpg",
    "/destinations/kashmir/srinagar/01.jpg",
    "/destinations/kashmir/gulmarg/01.jpg",
    "/destinations/kashmir/sonamarg/1.jpg",
    "/destinations/kashmir/pahalgam/1.jpg",
    "/destinations/jammu/patnitop/2.jpg",
    "/destinations/kashmir/dal_lake/1.jpg",
    "/destinations/kashmir/gulmarg/03.jpg",
    "/destinations/kashmir/pahalgam/3.jpg"
  ],

  faqs: [
    {
      question: "Why does this tour start and end in Jammu?",
      answer: "Jammu is a major transportation hub with excellent air and rail connectivity. Starting from Jammu allows for a scenic road journey into Kashmir Valley, experiencing the gradual transformation from plains to mountains. It's also convenient for travelers from various parts of India."
    },
    {
      question: "What does MAP (Modified American Plan) include?",
      answer: "MAP includes your room accommodation plus two meals daily - breakfast and either lunch or dinner. This typically means breakfast and dinner are included throughout the tour."
    },
    {
      question: "Are Gondola tickets included?",
      answer: "No, Gondola tickets for Gulmarg cable car are not included in the package. Phase I costs approximately ₹740-990, Phase II costs approximately ₹950-1,250 (prices subject to change)."
    },
    {
      question: "What are union car charges?",
      answer: "In certain areas like Gulmarg, Pahalgam, and Sonmarg, local taxi unions have exclusive rights. You'll need to hire local taxis for valley sightseeing. Typical costs: Pahalgam valleys ₹2,500-3,500, Gulmarg ₹1,500-2,000, Sonmarg ₹1,500-2,500."
    },
    {
      question: "Is this tour suitable for elderly travelers?",
      answer: "Yes, this is an easy-paced tour with comfortable accommodations and private transportation. However, some locations involve walking and the roads can be winding. Elderly travelers with normal mobility should be fine, but those with serious health conditions should consult their doctor."
    },
    {
      question: "What's the best time for this tour?",
      answer: "April to October is ideal. Summer (May-August) offers pleasant weather and blooming valleys. September-October provides autumn colors. Winter (November-March) brings snow but roads can be challenging, especially to Sonmarg which may be closed due to heavy snowfall."
    },
    {
      question: "How long are the daily drives?",
      answer: "Day 1: 7-8 hours (Jammu-Srinagar), Day 3: 2 hours (Srinagar-Gulmarg), Day 4: 3-4 hours (Gulmarg-Sonmarg), Day 5: 5-6 hours (Sonmarg-Pahalgam), Day 7: 7-8 hours (Pahalgam-Jammu). All drives are scenic with regular breaks."
    }
  ],

  amenities: [
    { icon: "Hotel", name: "3-Star Hotels" },
    { icon: "Utensils", name: "MAP - Breakfast + Lunch/Dinner" },
    { icon: "Car", name: "Private Taxi" },
    { icon: "Camera", name: "Scenic Routes" },
    { icon: "Shield", name: "Driver Assistance" },
    { icon: "MapPin", name: "Complete Circuit" }
  ],

  sustainability: [
    { icon: "Leaf", title: "Eco-Friendly Transport", description: "Well-maintained vehicles for mountain roads" },
    { icon: "Award", title: "Local Community Support", description: "Supporting local hotels and businesses across Kashmir" },
    { icon: "Leaf", title: "Responsible Tourism", description: "Following sustainable tourism practices throughout the circuit" }
  ]
};

// Detailed tour information for the Kashmir 7-Day Valley & Houseboat Experience
export const kashmir7DayValleyHouseboatDetail = {
  id: "kashmir-7-day-valley-houseboat",
  coverImage: "/tour_covers/kashmir-7-day-valley-houseboat.png",
  tourCode: "JRN-KSH-7D-HB",
  title: "Kashmir 7-Day Valley & Houseboat Experience",
  subtitle: "Srinagar, Gulmarg, Pahalgam, Sonmarg with Traditional Houseboat Stay",
  description: "This seven-day Kashmir escape blends breathtaking landscapes with culture and comfort. From the shimmering lakes and historic gardens of Srinagar to the snow-tipped slopes of Gulmarg and the forested valleys of Pahalgam, every day reveals a new side of the valley. You drift by Shikara on Dal Lake, visit roaring waterfalls, explore scenic Sonmarg, and unwind each evening in handpicked 3-star stays and a traditional houseboat. A perfect balance of exploration, relaxation and natural beauty awaits in Kashmir.",
  price: 399,
  originalPrice: 529,
  discount: 25,
  duration: "7 Days / 6 Nights",
  theme: "family-leisure",
  groupSize: "2-10 People",
  rating: 4.8,
  reviews: 95,
  category: "Cultural & Nature",
  season: "All Year Round",
  departureTime: "Upon arrival at Srinagar Airport",
  returnTime: "After breakfast on Day 7",
  dressCode: "Comfortable clothing, warm layers, walking shoes",
  tourType: "Private & Group Tours Available",
  language: "English, Hindi",
  minAge: 5,

  availableDates: [
    "2025-03-12",
    "2025-03-26",
    "2025-04-09",
    "2025-04-23",
    "2025-05-07",
    "2025-05-21",
    "2025-06-04",
    "2025-06-18"
  ],

  addons: [
    { id: 1, name: "Travel Insurance", price: 28, description: "Comprehensive travel coverage for 7 days" },
    { id: 2, name: "Gondola Phase II Upgrade", price: 50, description: "Upgrade to Gondola Phase II at Gulmarg" },
    { id: 3, name: "Adventure Activities Pack", price: 90, description: "Includes pony rides, ATV, snow activities" },
    { id: 4, name: "Luxury Houseboat Upgrade", price: 100, description: "Upgrade to deluxe houseboat on Dal Lake" },
    { id: 5, name: "Professional Photography", price: 150, description: "Personal photographer for the entire trip" }
  ],

  highlights: [
    "Visit Nishat and Shalimar Mughal Gardens",
    "Shankaracharya Temple with panoramic city views",
    "1-hour Shikara ride on Dal Lake",
    "Explore Srinagar's vibrant old markets",
    "Gulmarg Gondola ride to Phase One",
    "Walk through alpine meadows and visit St. Mary's Church",
    "Visit dramatic Drung Waterfall",
    "Explore Aru Valley, Betaab Valley, and Chandanwari",
    "Lunch at riverside Willow Café in Pahalgam",
    "Traditional cricket bat factory visit",
    "Overnight stay in authentic Dal Lake houseboat",
    "Day trip to scenic Sonmarg meadows",
    "Walk along Sindh River in Sonmarg"
  ],

  inclusions: [
    "6 nights accommodation (5 nights in 3-star hotels + 1 night in 3-star houseboat)",
    "Daily breakfast and dinner",
    "1-hour Shikara ride on Dal Lake",
    "All transfers in private vehicle",
    "Srinagar Airport pickup and drop",
    "All sightseeing as per itinerary",
    "English-speaking driver/guide",
    "All applicable taxes"
  ],

  exclusions: [
    "Gondola tickets in Gulmarg",
    "Entry tickets for gardens and monumental sights",
    "Lunch (you will be out exploring during the day)",
    "Shopping and personal expenses",
    "Activities like pony rides, ATV rides, snow mobile rides, skiing, sledging",
    "Local taxi for sightseeing in Sonmarg and Pahalgam",
    "Travel insurance",
    "Any items not mentioned in inclusions"
  ],

  itinerary: [
    {
      day: 1,
      title: "Srinagar Arrival & City Charm",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "You arrive at Srinagar Airport and check into your hotel — a simple but warm and welcoming 3-star stay such as Hotel Royal Heritage, Hotel The Victory, or Hotel Grand Kaisar. After breakfast, the day takes you through the soothing terraces of Nishat and Shalimar Gardens, followed by a gentle Shikara ride that glides across Dal Lake, framed by floating gardens and distant mountains. Later, the ancient Shankaracharya Temple offers sweeping views of the city before you stroll through Srinagar's lively old markets. Dusk settles as you walk along Boulevard Road and return to your hotel for a peaceful first night in the valley.",
      activities: [
        "Airport pickup and hotel check-in",
        "Visit Nishat Garden (Garden of Bliss)",
        "Explore Shalimar Garden (Abode of Love)",
        "1-hour Shikara ride on Dal Lake",
        "Visit Shankaracharya Temple (panoramic views)",
        "Explore Srinagar's old markets",
        "Evening stroll on Boulevard Road"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Srinagar (Royal Heritage / The Victory / Grand Kaisar)",
      highlights: [
        "Mughal Gardens with terraced lawns",
        "Floating gardens on Dal Lake",
        "360-degree valley views from temple"
      ]
    },
    {
      day: 2,
      title: "Srinagar to Gulmarg",
      location: "Gulmarg (52 km, 2 hours)",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "Leaving the city behind, you drive to Gulmarg and check into a comfortable 3-star alpine property such as Hotel Hilltop Gulmarg, Grand Mumtaz Gulmarg, or Hotel Pine Spring Gulmarg. After freshening up, the Gondola welcomes you — lifting you high toward Phase One for panoramic views of jagged peaks and snow-draped slopes. You spend the afternoon wandering open meadows or visiting St. Mary's Church before the crisp mountain air ushers you back indoors for dinner and a restful night surrounded by pine woods.",
      activities: [
        "Scenic drive to Gulmarg through pine forests",
        "Check-in at 3-star alpine hotel",
        "Gondola ride to Phase One (tickets not included)",
        "Explore alpine meadows",
        "Visit St. Mary's Church",
        "Optional snow activities (seasonal)",
        "Photography at scenic viewpoints"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Gulmarg (Hilltop Gulmarg / Grand Mumtaz / Pine Spring)",
      highlights: [
        "Panoramic Himalayan views from Gondola",
        "Open meadows and wildflowers",
        "Historic St. Mary's Church"
      ]
    },
    {
      day: 3,
      title: "Gulmarg to Drung Waterfall and Pahalgam",
      location: "Pahalgam (140 km, 4 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "After breakfast, the road leads to Drung Waterfall — a dramatic torrent of water that echoes off the cliffs. You pause to soak in its cool mist and peaceful surroundings before continuing your journey toward Pahalgam. Upon arrival, you settle comfortably into a 3-star retreat such as Hotel Pine Spring Pahalgam, Green Heights, or Hotel Lidder Spring Resort. An evening stroll by the Lidder River completes a gentle day as you settle into mountain life.",
      activities: [
        "Drive from Gulmarg to Pahalgam",
        "Visit Drung Waterfall - dramatic cascade",
        "Photography at the waterfall",
        "Arrive in Pahalgam",
        "Check-in at riverside hotel",
        "Evening walk along Lidder River"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Pahalgam (Pine Spring / Green Heights / Lidder Spring Resort)",
      highlights: [
        "Dramatic Drung Waterfall",
        "Scenic mountain drive",
        "Peaceful Lidder River views"
      ]
    },
    {
      day: 4,
      title: "Pahalgam Valley Exploration",
      location: "Pahalgam Local Sightseeing",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
      description: "Your morning begins with the calming soundtrack of water rushing downstream beside your hotel. A local taxi takes you into the scenic trio of Aru Valley, Betaab Valley, and Chandanwari — places where pine forests meet alpine meadows and streams tumble through sunlit rock beds. You pause at Willow Café along the riverbank for lunch, then return to Pahalgam as the air grows cooler and light fades behind the hills. The evening is slow and soothing — perfect for an early dinner and another cozy night in town.",
      activities: [
        "Explore Aru Valley meadows (local taxi required)",
        "Visit Betaab Valley - Bollywood location",
        "Trip to Chandanwari glacier point",
        "Lunch at Willow Café by the river",
        "Optional pony rides in valleys",
        "Walk through pine forests",
        "Evening at leisure in Pahalgam"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Pahalgam",
      highlights: [
        "Three stunning valleys in one day",
        "Riverside lunch at Willow Café",
        "Pine forests and alpine meadows"
      ]
    },
    {
      day: 5,
      title: "Pahalgam to Srinagar Houseboat",
      location: "Pahalgam to Srinagar (95 km, 2.5 hours)",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "You leave Pahalgam and stop at a traditional willow cricket bat factory where artisans shape the wood into globally-loved cricket bats. By afternoon, you arrive at Dal Lake and board your floating stay — a 3-star houseboat such as New Golden Flower, Wangnoo Houseboats, or Dandoo Palace. Wooden interiors, calm waters, and mountain silhouettes create an atmosphere no land hotel can match. A serene evening on the lake welcomes you into the rhythm of Kashmiri living on water.",
      activities: [
        "Drive from Pahalgam to Srinagar",
        "Visit willow cricket bat factory",
        "Watch artisans craft cricket bats",
        "Arrive at Dal Lake",
        "Check-in to traditional houseboat",
        "Evening on the deck with lake views",
        "Experience floating lifestyle"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Houseboat on Dal Lake (New Golden Flower / Wangnoo / Dandoo Palace)",
      highlights: [
        "Traditional cricket bat craftsmanship",
        "Authentic houseboat experience",
        "Sunset over Dal Lake"
      ]
    },
    {
      day: 6,
      title: "Day Trip to Sonmarg",
      location: "Sonmarg Day Trip (90 km from Srinagar)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "As dawn breaks over the lake, you leave Srinagar for a breathtaking drive toward Sonmarg — known for shimmering snowfields and majestic slopes. With mountains rising on every side and rivers carving silver paths through the valley floor, Sonmarg feels vast and untouched. You may walk along the Sindh River, drink in the crisp air, or take a local pony ride to viewpoints if available. After a day surrounded by some of Kashmir's most dramatic terrain, you return to Srinagar and check into a 3-star city hotel such as Hotel Royal Heritage, The Victory, or Grand Kaisar for your final night in the valley, savoring dinner and slow conversation.",
      activities: [
        "Early morning departure for Sonmarg",
        "Drive through scenic mountain roads",
        "Walk along Sindh River",
        "Enjoy views of glacial meadows",
        "Optional pony ride (own cost)",
        "Photography in dramatic landscapes",
        "Return to Srinagar",
        "Check-in at hotel for final night"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Srinagar (Royal Heritage / The Victory / Grand Kaisar)",
      highlights: [
        "Sonmarg's glacial valley beauty",
        "Sindh River and meadows of gold",
        "Dramatic mountain scenery"
      ]
    },
    {
      day: 7,
      title: "Departure",
      location: "Srinagar Airport",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "With breakfast finished, you make your way back to the airport, carrying with you a week filled with meadows, rivers, waterfalls, snowy peaks and lakeside sunsets — all the memories Kashmir creates so effortlessly.",
      activities: [
        "Breakfast at hotel",
        "Check-out and airport transfer",
        "Departure with unforgettable memories"
      ],
      meals: ["Breakfast"],
      accommodation: "N/A",
      highlights: [
        "Last views of beautiful Kashmir",
        "Memories of valleys, lakes, and mountains"
      ]
    }
  ],

  accommodationDetails: {
    title: "Accommodation Details - 6 Nights",
    description: "Experience a mix of comfortable hotels and authentic houseboat stay",
    hotels: [
      {
        name: "Hotel Star Of Kashmir or Similar",
        type: "3-Star Hotel",
        location: "Srinagar",
        nights: 3,
        amenities: ["Comfortable rooms", "Restaurant", "WiFi", "Room service", "City location"]
      },
      {
        name: "Hotel Countryside Tangmarg or Similar",
        type: "3-Star Hotel",
        location: "Gulmarg/Tangmarg",
        nights: 1,
        amenities: ["Mountain views", "Heating", "Restaurant", "Alpine setting"]
      },
      {
        name: "Hotel Brooklyn Resorts or Similar",
        type: "3-Star Hotel",
        location: "Pahalgam",
        nights: 1,
        amenities: ["Riverside location", "Garden", "Restaurant", "Scenic views"]
      },
      {
        name: "Houseboat Humayun Palace or Similar",
        type: "3-Star Houseboat",
        location: "Dal Lake, Srinagar",
        nights: 1,
        amenities: ["Traditional wooden interiors", "Lake views", "Authentic experience", "Peaceful ambiance"]
      }
    ]
  },

  images: [
    "/destinations/kashmir/dal_lake/1.jpg",
    "/destinations/kashmir/srinagar/01.jpg",
    "/destinations/kashmir/gulmarg/01.jpg",
    "/destinations/kashmir/pahalgam/1.jpg",
    "/destinations/kashmir/sonamarg/1.jpg",
    "/destinations/kashmir/nishat_bagh/1.jpg",
    "/destinations/kashmir/gulmarg/04.jpg",
    "/destinations/kashmir/sonamarg/2.jpg",
    "/destinations/kashmir/srinagar/03.jpg"
  ],

  faqs: [
    {
      question: "What makes this tour different from other Kashmir tours?",
      answer: "This tour combines the best of both worlds - comfortable hotel stays and an authentic houseboat experience on Dal Lake. You'll visit all major attractions including Gulmarg, Pahalgam, Sonmarg, plus unique spots like Drung Waterfall and a traditional cricket bat factory."
    },
    {
      question: "Are Gondola tickets included in the package?",
      answer: "No, Gondola tickets for Gulmarg cable car are not included in the package price. Phase I costs approximately ₹740-990 (prices subject to change). You can purchase them on-site based on your preference."
    },
    {
      question: "What is included in the houseboat stay?",
      answer: "Your one night on the houseboat includes comfortable accommodation in a traditional wooden boat on Dal Lake, with breakfast and dinner. The houseboat features authentic Kashmiri decor, peaceful lake views, and a unique floating lifestyle experience."
    },
    {
      question: "Do I need to hire local taxis in Pahalgam and Sonmarg?",
      answer: "Yes, local taxi unions have exclusive rights in certain areas. For Pahalgam valley sightseeing (Aru, Betaab, Chandanwari), local taxis cost approximately ₹2,500-3,500. Sonmarg pony rides and local taxis are also additional."
    },
    {
      question: "Is lunch included in the package?",
      answer: "No, lunch is not included as you'll be out exploring during the day. This gives you flexibility to try local restaurants and cuisines at your own pace. We can recommend excellent dining spots at each location."
    },
    {
      question: "What's the best time to take this tour?",
      answer: "April to October is ideal. Summer (May-August) offers pleasant weather and blooming valleys. September-October brings beautiful autumn colors. Winter (November-March) is great for snow lovers, though some areas like Sonmarg may have limited access due to heavy snowfall."
    },
    {
      question: "Can the tour be customized?",
      answer: "Yes, we can customize the itinerary, upgrade accommodations, or add extra activities. Contact us with your preferences and we'll create a personalized package for you."
    }
  ],

  amenities: [
    { icon: "Hotel", name: "3-Star Hotels & Houseboat" },
    { icon: "Utensils", name: "Daily Breakfast & Dinner" },
    { icon: "Car", name: "Private Transportation" },
    { icon: "Camera", name: "Scenic Locations" },
    { icon: "Shield", name: "Travel Assistance" },
    { icon: "MapPin", name: "Complete Valley Tour" }
  ],

  sustainability: [
    { icon: "Leaf", title: "Eco-Friendly Travel", description: "Supporting sustainable tourism practices" },
    { icon: "Award", title: "Local Artisans", description: "Visiting traditional craft workshops and supporting local communities" },
    { icon: "Leaf", title: "Responsible Tourism", description: "Respecting natural environments and local culture" }
  ]
};

// Detailed tour information for the Kashmir 7-Day Luxury Escape (5-Star)
export const kashmir7DayLuxuryEscapeDetail = {
  id: "kashmir-7-day-luxury-escape",
  tourCode: "JRN-KSH-7D-LUX",
  coverImage: "/tour_covers/kashmir-7-day-luxury-escape.png",
  title: "Kashmir 7-Day Luxury Escape",
  subtitle: "Premier Himalayan Holiday with 5-Star Comfort",
  description: "Step into a world where the Himalayas meet heritage, and every sunset is mirrored in a lake of glass. This curated seven-day escape elevates the beauty of Kashmir with five-star comfort, exclusive experiences, and seamless service from arrival to departure. Your journey begins amid the Mughal gardens and waterways of Srinagar before climbing into the snow-draped meadows of Gulmarg and onward to the forested valleys of Pahalgam. This is Kashmir, carefully designed for the traveler who appreciates space, exclusivity, and comfort.",
  price: 899,
  originalPrice: 1199,
  discount: 25,
  duration: "7 Days / 6 Nights",
  theme: "luxury",
  groupSize: "2-8 People",
  rating: 5.0,
  reviews: 67,
  category: "Luxury & Premium",
  season: "All Year Round",
  departureTime: "Upon arrival at Srinagar Airport",
  returnTime: "After breakfast on Day 7",
  dressCode: "Smart casual, warm layers for mountains",
  tourType: "Premium Private Tours",
  language: "English, Hindi",
  minAge: 5,

  availableDates: [
    "2025-03-08",
    "2025-03-22",
    "2025-04-05",
    "2025-04-19",
    "2025-05-03",
    "2025-05-17",
    "2025-06-07",
    "2025-06-21"
  ],

  addons: [
    { id: 1, name: "Premium Travel Insurance", price: 50, description: "Comprehensive luxury travel coverage" },
    { id: 2, name: "Full Spa Session at Khyber Resort", price: 200, description: "Complete spa experience in Gulmarg" },
    { id: 3, name: "Private Photographer", price: 300, description: "Professional photographer for entire tour" },
    { id: 4, name: "Luxury SUV Upgrade", price: 250, description: "Premium SUV transportation throughout" },
    { id: 5, name: "Private Dinner Setup", price: 180, description: "Exclusive fine-dining experience with special setup" }
  ],

  highlights: [
    "Stay at premium 5-star properties: The Lalit Grand Palace, Vivanta Dal View",
    "Alpine luxury at The Khyber Himalayan Resort & Spa or The Vintage Gulmarg",
    "5-star comfort in Pahalgam: Welcomhotel Pine N Peak or Radisson Golf View",
    "Premium houseboat stay: Sukoon, Royal Group, or Mascot Premium",
    "Private Shikara ride on Dal Lake",
    "Gondola tickets included for Phase 1 & 2",
    "Local guide service in Gulmarg",
    "Complimentary ATV ride in Gulmarg",
    "All local sightseeing taxis included (Sonmarg, Gulmarg, Pahalgam)",
    "Visit Mughal Gardens and Shankaracharya Temple",
    "Explore dramatic Drung Waterfall",
    "Discover Aru Valley, Betaab Valley, and Chandanwari",
    "Traditional cricket bat factory tour",
    "Day trip to golden Sonmarg meadows",
    "Gourmet breakfast and dinner daily"
  ],

  inclusions: [
    "6 nights in premium 5-star hotels and luxury houseboat",
    "Daily gourmet breakfast and dinner",
    "Private chauffeur-driven transfers throughout",
    "Srinagar Airport pickup and drop in luxury vehicle",
    "1-hour private Shikara ride on Dal Lake",
    "Gondola tickets for both Phase 1 and Phase 2 in Gulmarg",
    "Local guide service in Gulmarg",
    "Complimentary ATV ride in Gulmarg",
    "All local sightseeing taxis in Sonmarg, Gulmarg, and Pahalgam",
    "All sightseeing as per itinerary",
    "Welcome drinks at hotels",
    "All applicable taxes and service charges"
  ],

  exclusions: [
    "Entry tickets for gardens and monumental sights",
    "Lunch (flexibility to explore local fine dining)",
    "Shopping and personal expenses",
    "Optional activities: Pony rides, snow mobile rides, skiing, sledging",
    "Spa services (available as add-on)",
    "Travel insurance (available as add-on)",
    "Any items not mentioned in inclusions"
  ],

  itinerary: [
    {
      day: 1,
      title: "Srinagar Arrival & Mughal Elegance",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Your personal chauffeur whisks you from the airport to The Lalit Grand Palace or Vivanta Dal View, where you settle into sweeping lake or mountain views. Later, you wander through the iconic Mughal gardens, glide across Dal Lake on a private Shikara, and catch the sunset along Boulevard Road before returning to five-star dining and rest.",
      activities: [
        "VIP airport pickup in luxury vehicle",
        "Check-in at 5-star palace hotel",
        "Visit Nishat Bagh and Shalimar Bagh (Mughal Gardens)",
        "Private 1-hour Shikara ride on Dal Lake",
        "Sunset views on Boulevard Road",
        "Welcome drink and orientation",
        "Gourmet dinner at hotel"
      ],
      meals: ["Dinner"],
      accommodation: "5-Star: The Lalit Grand Palace / Vivanta Dal View, Srinagar",
      highlights: [
        "Palatial 5-star luxury overlooking Dal Lake",
        "Private Shikara experience",
        "Mughal architectural splendor"
      ]
    },
    {
      day: 2,
      title: "Into the Mountains: Srinagar to Gulmarg",
      location: "Gulmarg (52 km, 2 hours)",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "Wake to crisp air and gourmet breakfast before journeying to Gulmarg. The Khyber Himalayan Resort & Spa or The Vintage Gulmarg becomes your alpine haven. This afternoon, the famous Gulmarg Gondola lifts you into snow-laden slopes where the horizon stretches into a jagged line of white peaks. Evening invites spa warmth, fireside tea, and quiet luxury in the mountains.",
      activities: [
        "Gourmet breakfast with lake views",
        "Scenic luxury drive to Gulmarg",
        "Check-in at 5-star alpine resort",
        "Gondola ride Phase 1 & 2 (included)",
        "Complimentary ATV ride experience",
        "Local guide assistance",
        "Optional spa session",
        "Fireside tea and evening relaxation"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "5-Star: The Khyber Himalayan Resort & Spa / The Vintage Gulmarg",
      highlights: [
        "World-class alpine resort with spa",
        "Complete Gondola experience (both phases)",
        "Complimentary ATV adventure",
        "Panoramic Himalayan views"
      ]
    },
    {
      day: 3,
      title: "Gulmarg, Drung Waterfall & Arrival in Pahalgam",
      location: "Pahalgam (140 km, 4 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "After breakfast with pine-view windows, the road curves toward Drung Waterfall, a dramatic cascade framed by stone cliffs and icy spray. By afternoon you arrive in Pahalgam at Welcomhotel Pine N Peak or Radisson Golf View Pahalgam, where forest-scented air and valley views welcome you to a slower pace of life.",
      activities: [
        "Breakfast overlooking pine forests",
        "Luxury drive to Drung Waterfall",
        "Photography at the dramatic cascade",
        "Continue journey to Pahalgam",
        "Check-in at 5-star valley resort",
        "Explore resort amenities",
        "Evening valley views from room"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "5-Star: Welcomhotel Pine N Peak / Radisson Golf View, Pahalgam",
      highlights: [
        "Dramatic Drung Waterfall experience",
        "Premium valley resort with golf views",
        "Forest-scented mountain air"
      ]
    },
    {
      day: 4,
      title: "Pahalgam's Valleys and River Trails",
      location: "Pahalgam Local Sightseeing",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
      description: "The day unfolds in Pahalgam's cinematic landscapes, from the soft meadows of Aru to the breathtaking curves of Betaab Valley and the glacier gateways of Chandanwari. After a riverside lunch, you return to your hill resort to unwind with views fading from gold to starlit night.",
      activities: [
        "Explore Aru Valley meadows (local taxi included)",
        "Visit Betaab Valley - Bollywood location",
        "Trip to Chandanwari glacier point",
        "Riverside lunch at premium café",
        "Optional pony rides",
        "Evening at leisure in resort",
        "Gourmet dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "5-Star: Welcomhotel Pine N Peak / Radisson Golf View, Pahalgam",
      highlights: [
        "Three stunning valleys in comfort",
        "Riverside fine dining experience",
        "Cinematic Kashmir landscapes"
      ]
    },
    {
      day: 5,
      title: "Craft, Culture & Your Luxury Houseboat Stay",
      location: "Pahalgam to Srinagar (95 km, 2.5 hours)",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "This morning carries you through Kashmir's craft legacy as willow bat artisans shape cricket bats by hand. A smooth drive returns you to Dal Lake where your floating residence awaits — Sukoon Houseboat, Royal Group, or Mascot Premium Houseboats. Dinner is served over still waters beneath mountains that fade into moonlight.",
      activities: [
        "Visit traditional cricket bat factory",
        "Watch master artisans at work",
        "Luxury drive to Dal Lake",
        "Check-in to premium houseboat",
        "Explore handcrafted wooden interiors",
        "Sunset from houseboat deck",
        "Dinner on the water"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Premium 5-Star Houseboat: Sukoon / Royal Group / Mascot Premium",
      highlights: [
        "Traditional craft workshop experience",
        "Luxury houseboat with premium interiors",
        "Moonlit dinner on Dal Lake"
      ]
    },
    {
      day: 6,
      title: "Sonmarg: The Meadow of Gold",
      location: "Sonmarg Day Trip (90 km from Srinagar)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Today's excursion takes you into Sonmarg, a valley of towering peaks, emerald slopes, and rushing glacial rivers. From riverside walks to soft snowfields and scenic viewpoints, the mountain amphitheatre feels endless. After sunset return to Srinagar for a final night at The Lalit or Vivanta.",
      activities: [
        "Early morning departure for Sonmarg",
        "Luxury drive through mountain passes",
        "Walk along Sindh River",
        "Explore glacial meadows",
        "Local taxi for viewpoint tours (included)",
        "Photography in dramatic landscapes",
        "Return to Srinagar 5-star hotel",
        "Farewell gourmet dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "5-Star: The Lalit Grand Palace / Vivanta Dal View, Srinagar",
      highlights: [
        "Sonmarg's untouched glacial beauty",
        "Emerald meadows and snow peaks",
        "Final night in palatial luxury"
      ]
    },
    {
      day: 7,
      title: "Farewell to Paradise",
      location: "Srinagar Airport",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Savor your final breakfast before your private transfer to Srinagar Airport. As you depart, Kashmir travels home with you — the scent of pine, the rhythm of rivers, and memories of palaces, mountains and still-water reflections.",
      activities: [
        "Final gourmet breakfast",
        "Check-out with assistance",
        "Private luxury transfer to airport",
        "Departure with unforgettable memories"
      ],
      meals: ["Breakfast"],
      accommodation: "N/A",
      highlights: [
        "Last moments in paradise",
        "VIP airport transfer",
        "Memories of luxury and natural beauty"
      ]
    }
  ],

  accommodationDetails: {
    title: "Signature 5-Star Selection",
    description: "Experience Kashmir's finest luxury properties",
    hotels: [
      {
        name: "The Lalit Grand Palace / Vivanta Dal View",
        type: "5-Star Luxury Hotel",
        location: "Srinagar",
        nights: 3,
        amenities: ["Palatial rooms", "Lake/mountain views", "Fine dining", "Spa", "Concierge", "Premium service"]
      },
      {
        name: "The Khyber Himalayan Resort & Spa / The Vintage Gulmarg",
        type: "5-Star Alpine Resort",
        location: "Gulmarg",
        nights: 1,
        amenities: ["Luxury suites", "World-class spa", "Fine dining", "Ski facilities", "Heated rooms", "Butler service"]
      },
      {
        name: "Welcomhotel Pine N Peak / Radisson Golf View",
        type: "5-Star Valley Resort",
        location: "Pahalgam",
        nights: 1,
        amenities: ["Premium rooms", "Valley views", "Fine dining", "Golf course", "Spa", "Premium amenities"]
      },
      {
        name: "Sukoon / Royal Group / Mascot Premium Houseboats",
        type: "Luxury Houseboat",
        location: "Dal Lake, Srinagar",
        nights: 1,
        amenities: ["Handcrafted interiors", "Premium furnishings", "Personalized service", "Lake dining", "Exclusive experience"]
      }
    ]
  },

  images: [
    "/destinations/kashmir/srinagar/01.jpg",
    "/destinations/kashmir/gulmarg/01.jpg",
    "/destinations/kashmir/pahalgam/1.jpg",
    "/destinations/kashmir/dal_lake/1.jpg",
    "/destinations/kashmir/nishat_bagh/1.jpg",
    "/destinations/kashmir/gulmarg/05.jpg",
    "/destinations/kashmir/srinagar/04.jpg",
    "/destinations/kashmir/pahalgam/4.jpg",
    "/destinations/kashmir/sonamarg/05.jpg"
  ],

  faqs: [
    {
      question: "What makes this a luxury tour?",
      answer: "This tour features exclusively 5-star accommodations including The Lalit Grand Palace, The Khyber Himalayan Resort & Spa, and premium properties throughout. All Gondola tickets, local sightseeing taxis, ATV rides, and a local guide are included. You'll travel in luxury vehicles with private chauffeurs and experience gourmet dining daily."
    },
    {
      question: "Are all activities and transfers included?",
      answer: "Yes! Unlike standard tours, this package includes Gondola tickets for both phases, all local sightseeing taxis in Gulmarg, Pahalgam, and Sonmarg, complimentary ATV ride, local guide in Gulmarg, and private luxury transfers throughout. Only monument entry fees and optional activities are extra."
    },
    {
      question: "What is the quality of the houseboat?",
      answer: "You'll stay in premium luxury houseboats like Sukoon, Royal Group, or Mascot Premium - featuring handcrafted wooden interiors, premium furnishings, personalized butler service, and an exclusive floating experience with gourmet dining on the water."
    },
    {
      question: "Can I customize this luxury package?",
      answer: "Absolutely! We can arrange spa sessions at Khyber Resort, private photography services, luxury SUV upgrades, fine-dining reservations, private dinner setups, and other exclusive experiences. Contact us for personalized arrangements."
    },
    {
      question: "Is this tour suitable for honeymooners?",
      answer: "Perfect for honeymooners! The tour offers privacy, luxury, romantic settings, and can be customized with special arrangements like private dinners, spa couples packages, and romantic setups. Many couples choose this for their Kashmir honeymoon."
    },
    {
      question: "What's the group size?",
      answer: "This premium tour maintains exclusivity with a maximum of 8 guests, ensuring personalized attention and intimate experiences. Private tour options are also available for couples and families."
    },
    {
      question: "What's the best season for this luxury tour?",
      answer: "Year-round excellence! Spring (March-May) offers blooming gardens, summer (June-August) provides perfect weather, autumn (September-November) displays golden landscapes, and winter (December-February) creates a snowy wonderland. The Khyber Resort and luxury properties ensure comfort in all seasons."
    }
  ],

  amenities: [
    { icon: "Hotel", name: "5-Star Luxury Properties" },
    { icon: "Utensils", name: "Gourmet Dining" },
    { icon: "Car", name: "Private Chauffeur" },
    { icon: "Camera", name: "Exclusive Experiences" },
    { icon: "Shield", name: "Premium Service" },
    { icon: "MapPin", name: "Complete Luxury Circuit" }
  ],

  sustainability: [
    { icon: "Leaf", title: "Luxury Eco-Tourism", description: "Premium experiences with environmental responsibility" },
    { icon: "Award", title: "Heritage Support", description: "Supporting Kashmir's cultural heritage and local artisans" },
    { icon: "Leaf", title: "Responsible Luxury", description: "Five-star comfort with sustainable practices" }
  ]
};

// Kashmir 7-Day Premium Experience - 4-Star Comfort
export const kashmir7DayPremiumExperienceDetail: Tour = {
  id: "kashmir-7-day-premium-experience",
  tourCode: "KSH-7D-4ST-001",
  coverImage: "/tour_covers/kashmir-7-day-premium-experience.png",
  title: "Kashmir 7-Day Premium Experience - 4-Star Comfort",
  subtitle: "Discover Kashmir with premium 4-star accommodations and unforgettable experiences",
  description: "Experience the best of Kashmir with our premium 7-day tour featuring comfortable 4-star hotels, a traditional houseboat stay, and iconic destinations including Gulmarg, Pahalgam, and Sonmarg. Enjoy included Gondola tickets, local guide services, and carefully curated experiences that balance comfort with authenticity.",
  price: 549,
  duration: "7 Days",
  groupSize: "2-12 people",
  theme: "family-leisure",
  rating: 4.8,
  reviewCount: 145,
  badges: ["4-Star Comfort", "Great Value"],
  category: "Adventure",
  
  itinerary: [
    {
      day: 1,
      title: "Arrival in Srinagar - Welcome to Paradise",
      description: "Arrive at Srinagar Airport and transfer to your premium 4-star hotel. Enjoy a relaxing Shikara ride on Dal Lake in the evening, experiencing the serene beauty of floating gardens and local life.",
      activities: ["Airport pickup", "Hotel check-in", "Evening Shikara ride on Dal Lake", "Welcome dinner"],
      meals: ["Dinner"],
      accommodation: "Hotel Star Of Kashmir or similar 4-star hotel in Srinagar"
    },
    {
      day: 2,
      title: "Srinagar to Gulmarg - The Meadow of Flowers",
      description: "Journey to Gulmarg, the beautiful 'Meadow of Flowers'. Experience the world's second-highest cable car (Gondola ride tickets included) with breathtaking views. Enjoy local guide services and an ATV ride through the meadows.",
      activities: ["Drive to Gulmarg (2 hours)", "Gondola cable car ride (Phase 1 & 2 included)", "Local guide services in Gulmarg", "ATV ride experience", "Free time to explore"],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Hotel Countryside Tangmarg or similar 4-star hotel in Gulmarg"
    },
    {
      day: 3,
      title: "Gulmarg to Pahalgam via Drung Waterfall",
      description: "Travel to Pahalgam, the 'Valley of Shepherds', with a scenic stop at Drung Waterfall (seasonal, best from December to April). Visit the famous cricket bat factory and enjoy the stunning landscapes along the way.",
      activities: ["Visit Drung Waterfall (seasonal)", "Stop at cricket bat factory", "Scenic drive through countryside", "Check-in at premium Pahalgam hotel", "Evening walk by Lidder River"],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Hotel Brooklyn Resorts or similar 4-star hotel in Pahalgam"
    },
    {
      day: 4,
      title: "Pahalgam Valley Exploration",
      description: "Explore the magnificent valleys of Pahalgam with included local taxi services. Visit Betaab Valley, Aru Valley, and Chandanwari, each offering unique natural beauty and photo opportunities.",
      activities: ["Betaab Valley visit (local taxi included)", "Aru Valley exploration", "Chandanwari sightseeing", "Optional pony rides (not included)", "Leisure time by Lidder River"],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Hotel Brooklyn Resorts or similar 4-star hotel in Pahalgam"
    },
    {
      day: 5,
      title: "Pahalgam to Srinagar - Houseboat Experience",
      description: "Return to Srinagar and check in to a traditional premium 4-star houseboat on Dal Lake. Experience authentic Kashmiri hospitality, enjoy local cuisine, and witness the unique lifestyle of living on water.",
      activities: ["Drive back to Srinagar", "Houseboat check-in", "Explore local floating markets", "Shikara ride around Dal Lake", "Traditional Kashmiri dinner on houseboat"],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Houseboat Humayun Palace or similar premium 4-star houseboat"
    },
    {
      day: 6,
      title: "Srinagar to Sonmarg Day Trip - Meadow of Gold",
      description: "Full-day excursion to Sonmarg, the stunning 'Meadow of Gold'. Enjoy the alpine scenery, glaciers, and optional activities. Local taxi services included for valley exploration.",
      activities: ["Scenic drive to Sonmarg (2.5 hours)", "Thajiwas Glacier visit (local taxi included)", "Optional pony rides to glacier", "Photography and nature walks", "Return to Srinagar hotel"],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Hotel Star Of Kashmir or similar 4-star hotel in Srinagar"
    },
    {
      day: 7,
      title: "Departure from Srinagar",
      description: "Enjoy a leisurely breakfast at your hotel. Optional morning shopping at local markets for souvenirs, handicrafts, and Pashmina shawls. Transfer to Srinagar Airport for your onward journey with unforgettable memories.",
      activities: ["Breakfast at hotel", "Optional shopping time", "Check-out and airport transfer", "Departure with memories of Kashmir"],
      meals: ["Breakfast"],
      accommodation: "N/A"
    }
  ],

  inclusions: [
    "Premium 4-star hotel accommodation for 5 nights",
    "Premium 4-star houseboat stay for 1 night",
    "Daily breakfast and dinner (MAP basis)",
    "All transfers and sightseeing by private vehicle",
    "Gondola cable car tickets (Phase 1 & 2) in Gulmarg",
    "Local guide services in Gulmarg",
    "ATV ride experience in Gulmarg",
    "Shikara ride on Dal Lake",
    "Local taxi services in Sonmarg and Pahalgam valleys",
    "All applicable taxes and service charges",
    "Airport pickup and drop-off"
  ],

  exclusions: [
    "Airfare to and from Srinagar",
    "Lunch during the tour",
    "Entry fees to gardens and monuments",
    "Optional activities (pony rides, paragliding, etc.)",
    "Personal expenses and shopping",
    "Travel insurance",
    "Tips and gratuities",
    "Any services not mentioned in inclusions"
  ],

  accommodationDetails: {
    hotels: [
      {
        name: "Hotel Star Of Kashmir",
        location: "Srinagar",
        rating: 4,
        description: "Premium 4-star hotel offering modern amenities, comfortable rooms with valley views, multi-cuisine restaurant, and warm Kashmiri hospitality.",
        amenities: ["Free Wi-Fi", "Restaurant", "Room Service", "Valley Views", "Heating", "24/7 Front Desk"]
      },
      {
        name: "Hotel Countryside Tangmarg",
        location: "Gulmarg",
        rating: 4,
        description: "Premium hotel near Gulmarg offering stunning mountain views, cozy rooms with modern facilities, and easy access to Gondola point.",
        amenities: ["Mountain Views", "Restaurant", "Heating", "Room Service", "Parking", "Wi-Fi"]
      },
      {
        name: "Hotel Brooklyn Resorts",
        location: "Pahalgam",
        rating: 4,
        description: "Premium resort in Pahalgam with scenic river views, spacious rooms, excellent dining, and proximity to major attractions.",
        amenities: ["River Views", "Multi-cuisine Restaurant", "Garden", "Room Service", "Wi-Fi", "Parking"]
      },
      {
        name: "Houseboat Humayun Palace",
        location: "Dal Lake, Srinagar",
        rating: 4,
        description: "Premium traditional Kashmiri houseboat with elegant wooden interiors, comfortable rooms, and authentic cultural experience on Dal Lake.",
        amenities: ["Traditional Decor", "Lake Views", "Kashmiri Cuisine", "Shikara Service", "Cozy Interiors", "Unique Experience"]
      }
    ]
  },

  faqs: [
    {
      question: "What makes this 4-star package different from the 3-star option?",
      answer: "This package features premium 4-star hotels and houseboats with superior comfort, better amenities, and enhanced services. You'll enjoy more spacious rooms, better dining options, and upgraded facilities throughout your stay."
    },
    {
      question: "Are Gondola tickets included in the package?",
      answer: "Yes, Gondola cable car tickets for both Phase 1 and Phase 2 are included in the package, along with local guide services and an ATV ride in Gulmarg."
    },
    {
      question: "When is the best time to visit for the Drung Waterfall?",
      answer: "Drung Waterfall is most spectacular from December to April when it's partially frozen, creating a stunning ice formation. During other months, it's a regular waterfall but still worth visiting."
    },
    {
      question: "What is MAP basis for meals?",
      answer: "MAP (Modified American Plan) means breakfast and dinner are included daily. Lunch is not included, giving you flexibility to try different local restaurants or cuisines during your explorations."
    },
    {
      question: "Are local taxi services included for valley visits?",
      answer: "Yes, local taxi services are included for exploring valleys in Sonmarg and Pahalgam (Betaab Valley, Aru Valley, Chandanwari, and Thajiwas Glacier area)."
    },
    {
      question: "Can I upgrade to a better room category?",
      answer: "Yes, room upgrades are available at an additional cost. Please contact us to discuss available options at each property."
    },
    {
      question: "What should I pack for this trip?",
      answer: "Pack warm clothing (layers recommended), comfortable walking shoes, sunglasses, sunscreen, personal medications, and camera. Winter months (Nov-Mar) require heavy woolens and snow gear."
    },
    {
      question: "Is this tour suitable for families with children?",
      answer: "Absolutely! This tour is family-friendly with easy activities suitable for all ages. The 4-star accommodations provide extra comfort for families traveling with children."
    },
    {
      question: "What activities are not included that I might want to do?",
      answer: "Optional activities not included are: pony rides in Pahalgam and Sonmarg, paragliding in Gulmarg, zorbing, entry fees to Mughal Gardens, and shopping purchases."
    },
    {
      question: "Can I customize the itinerary?",
      answer: "Yes, we offer customization options. You can add extra days, change destinations, or include special experiences. Contact us to create your personalized Kashmir journey."
    }
  ],

  amenities: [
    { icon: "Hotel", label: "Premium 4-Star Hotels" },
    { icon: "Utensils", label: "Daily Breakfast & Dinner" },
    { icon: "Car", label: "Private Vehicle" },
    { icon: "Camera", label: "Gondola Tickets Included" },
    { icon: "Users", label: "Local Guide Services" },
    { icon: "Award", label: "ATV Ride Experience" }
  ],

  sustainability: [
    { icon: "Leaf", title: "Eco-Friendly Tourism", description: "Supporting local communities and sustainable travel practices" },
    { icon: "Award", title: "Cultural Preservation", description: "Promoting Kashmir's heritage through authentic experiences" },
    { icon: "Leaf", title: "Responsible Travel", description: "Minimizing environmental impact while maximizing memories" }
  ],

  images: [
    "/destinations/kashmir/srinagar/01.jpg",
    "/destinations/kashmir/gulmarg/01.jpg",
    "/destinations/kashmir/pahalgam/1.jpg",
    "/destinations/kashmir/sonamarg/1.jpg",
    "/destinations/kashmir/dal_lake/1.jpg",
    "/destinations/kashmir/gulmarg/02.jpg",
    "/destinations/kashmir/pahalgam/2.jpg",
    "/destinations/kashmir/srinagar/02.jpg",
    "/destinations/kashmir/nishat_bagh/1.jpg"
  ]
};

// Detailed tour information for Kashmir Family Holiday 6N7D (3-Star)
export const kashmirFamily6N7D3StarDetail = {
  id: "kashmir-family-6n7d-3star",
  coverImage: "/tour_covers/kashmir-family-6n7d-3star.png",
  tourCode: "JRN-KSH-FAM-6N7D",
  title: "Kashmir Family Holiday",
  subtitle: "6 Nights / 7 Days – Srinagar • Pahalgam • Gulmarg • Sonmarg",
  description: "A relaxed, family-friendly Kashmir itinerary with gentle sightseeing, nature walks, picture spots and cozy evening stays. Two nights in Pahalgam's pine valleys, one night each in Gulmarg and Sonmarg, plus calm Srinagar evenings, make it perfect for children, parents and grandparents traveling together.",
  price: 499,
  originalPrice: 649,
  discount: 23,
  duration: "6 Nights / 7 Days",
  theme: "family-leisure",
  groupSize: "2-12 People",
  rating: 4.9,
  reviews: 78,
  category: "Family & Cultural",
  season: "All Year Round",
  departureTime: "Upon arrival at Srinagar Airport",
  returnTime: "After breakfast on Day 7",
  dressCode: "Comfortable clothing, warm layers, family-friendly walking shoes",
  tourType: "Private & Group Tours Available",
  language: "English, Hindi, Urdu",
  minAge: 3,
  
  availableDates: [
    "2026-03-15",
    "2026-03-28",
    "2026-04-10",
    "2026-04-24",
    "2026-05-08",
    "2026-05-22",
    "2026-06-05",
    "2026-06-19",
    "2026-07-03",
    "2026-07-17"
  ],

  addons: [
    { id: 1, name: "Travel Insurance for Family", price: 60, description: "Comprehensive family coverage (up to 4 members)" },
    { id: 2, name: "Gondola Phase II Upgrade", price: 50, description: "Upgrade to Gondola Phase II tickets" },
    { id: 3, name: "Kids Activity Pack", price: 40, description: "Includes pony rides and snow play equipment" },
    { id: 4, name: "Professional Family Photography", price: 150, description: "Full-day photographer for family portraits" },
    { id: 5, name: "Extra Houseboat Night", price: 80, description: "Add one more night on Dal Lake houseboat" }
  ],

  highlights: [
    "Gentle sightseeing perfect for all ages",
    "Two nights in scenic Pahalgam pine valleys",
    "One-hour Shikara ride on Dal Lake",
    "Gondola Phase 1 ride in Gulmarg",
    "Visit to Mughal Gardens - Shalimar & Nishat Bagh",
    "Pahalgam valley exploration - Aru, Betaab, Chandanwari",
    "Sonmarg meadows and Thajiwas Glacier views",
    "Saffron fields visit and cricket bat factory tour",
    "Calm riverside walks along Lidder River",
    "Family-friendly 3-star accommodations with houseboat option"
  ],

  inclusions: [
    "6 nights accommodation in 3-star hotels (with 1 optional deluxe houseboat night)",
    "Daily breakfast and dinner (MAP basis)",
    "Private cab for entire 7-day trip",
    "1-hour Shikara ride on Dal Lake",
    "Gondola Phase 1 tickets",
    "Local taxi for Pahalgam valleys (union requirement)",
    "Driver allowance, fuel, toll, and parking",
    "All taxes and service charges"
  ],

  exclusions: [
    "Lunches and snacks during the day",
    "Entry tickets to gardens and attractions",
    "Pony rides, skiing, sledging, ATV rides",
    "White water rafting in Sonmarg",
    "Personal shopping, laundry, and tips",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Srinagar & Dal Lake Promenade",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Arrive in Srinagar and meet your chauffeur. Drive to your 3-star hotel (Star of Kashmir, Royal Heritage or similar). Take a gentle lakeside walk along Boulevard Road and enjoy the evening breeze with tea. Perfect relaxed start for the whole family. Dinner & overnight in Srinagar.",
      activities: [
        "Airport pickup and warm welcome",
        "Hotel check-in (3-star comfort)",
        "Gentle Boulevard Road lakeside walk",
        "Family tea time with mountain views",
        "Evening leisure at hotel"
      ],
      meals: ["Dinner"],
      accommodation: "3-Star Hotel in Srinagar (Star of Kashmir / Royal Heritage / Grand Habib)",
      highlights: [
        "First glimpses of Dal Lake",
        "Relaxed family-paced arrival",
        "Mountain air and peaceful evening"
      ]
    },
    {
      day: 2,
      title: "Mughal Gardens & Shikara Experience",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "Explore Shalimar Garden, Nishat Bagh and Pari Mahal for family-friendly photo spots. The terraced lawns, fountains and Chinar trees offer perfect settings for children to play and grandparents to rest. In the evening, enjoy a peaceful Shikara ride across Dal Lake — ideal for kids and parents alike. Dinner & overnight in Srinagar.",
      activities: [
        "Visit Shalimar Bagh (Mughal Garden)",
        "Explore Nishat Bagh with lake backdrop",
        "Pari Mahal viewpoint",
        "1-hour family Shikara ride on Dal Lake",
        "Photo opportunities for the whole family",
        "Evening at leisure"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Srinagar",
      highlights: [
        "Mughal heritage gardens",
        "Floating gardens on Dal Lake",
        "Memorable family Shikara ride"
      ]
    },
    {
      day: 3,
      title: "Srinagar to Pahalgam - Saffron & Bat Factory",
      location: "Pahalgam (95 km, 2.5 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Drive to Pahalgam with short stops at Pampore saffron fields and a cricket bat factory — both interesting for children and adults. The scenic drive follows river valleys and forest slopes. Check into Pine Spring, Tourist Palace or similar hotel. Evening leisure by the Lidder River where kids can spot stones and enjoy gentle walks. Dinner & overnight in Pahalgam.",
      activities: [
        "Scenic drive through Kashmir Valley",
        "Stop at Pampore saffron fields",
        "Visit cricket bat-making factory",
        "Hotel check-in at Pahalgam",
        "Evening river walk along Lidder",
        "Relaxed family time"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Pahalgam (Pine Spring / Tourist Palace / Regency)",
      highlights: [
        "Golden saffron fields visit",
        "Behind-the-scenes bat factory tour",
        "Peaceful Lidder River banks"
      ]
    },
    {
      day: 4,
      title: "Explore Pahalgam Valleys",
      location: "Pahalgam - Aru, Betaab & Chandanwari",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
      description: "Use union taxis to explore the beautiful valleys of Pahalgam. Visit Aru — with green meadows & light walking trails perfect for families. Betaab Valley offers picnic-perfect scenery where Bollywood films were shot. Chandanwari features streams and snow pockets (seasonal) creating wonderful photo moments. Return early to relax at hotel. Dinner & overnight in Pahalgam.",
      activities: [
        "Union taxi to Aru Valley (meadows)",
        "Explore Betaab Valley (Bollywood location)",
        "Visit Chandanwari (snow streams)",
        "Optional pony rides for kids",
        "Family picnic opportunities",
        "Return to hotel for early evening rest"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Pahalgam",
      highlights: [
        "Three stunning valleys in one day",
        "Child-friendly gentle terrain",
        "Bollywood filming locations"
      ]
    },
    {
      day: 5,
      title: "Pahalgam to Gulmarg - Gondola & Snow Fun",
      location: "Gulmarg (140 km, 4 hours)",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "Drive to Gulmarg and check into Royal Park, Gulmarg Inn or Heevan Retreat standard wing. Ride Gondola Phase 1 for panoramic mountain views — an experience children and grandparents both cherish. Enjoy snow play or family photos in the meadow. Optional activities like sledging and snow scooters available. Dinner & overnight in Gulmarg.",
      activities: [
        "Scenic drive to Gulmarg",
        "Hotel check-in",
        "Gondola Phase 1 ride (tickets included)",
        "Snow play and family fun",
        "Explore meadows of flowers",
        "Optional: sledging, snow activities",
        "Family photography session"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Gulmarg (Royal Park / Gulmarg Inn / Heevan Retreat Std Wing)",
      highlights: [
        "Asia's highest cable car experience",
        "Snow-covered peaks and valleys",
        "Family-friendly snow activities"
      ]
    },
    {
      day: 6,
      title: "Gulmarg to Sonmarg - Meadow of Gold",
      location: "Sonmarg (180 km, 5 hours)",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "Drive to Sonmarg, the 'Meadow of Gold,' surrounded by towering peaks and alpine beauty. Walk along the Sindh River where the sound of rushing water creates a peaceful ambiance. Take an optional pony ride toward Thajiwas Glacier for those interested. Check into Snow Land or Glacier View hotel. Dinner & overnight in Sonmarg.",
      activities: [
        "Scenic mountain drive to Sonmarg",
        "Walk along Sindh River",
        "View Thajiwas Glacier from distance",
        "Optional pony ride to glacier",
        "Family photo opportunities",
        "Check-in and evening relaxation"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Sonmarg (Snow Land / Glacier View / Sunshine)",
      highlights: [
        "Golden alpine meadows",
        "Majestic glacier views",
        "Crystal-clear mountain streams"
      ]
    },
    {
      day: 7,
      title: "Sonmarg to Srinagar Airport - Departure",
      location: "Srinagar Airport (80 km, 2.5 hours)",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Drive back toward Srinagar Airport and depart with family memories of lakes, gardens, pine forests, meadows and snow-filled valleys. Seven days of gentle exploration, bonding moments, and Kashmir's timeless beauty come to a heartwarming close.",
      activities: [
        "Breakfast at hotel",
        "Check-out and departure",
        "Scenic drive to airport",
        "Final Kashmir views",
        "Departure with cherished memories"
      ],
      meals: ["Breakfast"],
      accommodation: "N/A",
      highlights: [
        "Last glimpses of the Himalayas",
        "Memories to last a lifetime",
        "Family bonds strengthened"
      ]
    }
  ],

  accommodationDetails: {
    title: "Stay Plan (3-Star Category)",
    description: "Comfortable family-friendly accommodations with option for houseboat experience",
    hotels: [
      {
        name: "Star of Kashmir / Royal Heritage / Grand Habib",
        type: "3-Star Hotel",
        location: "Srinagar",
        nights: 2,
        amenities: ["Family rooms available", "Restaurant", "WiFi", "Room service", "Heating", "Hot water"]
      },
      {
        name: "Pine Spring / Tourist Palace / Regency",
        type: "3-Star Hotel",
        location: "Pahalgam",
        nights: 2,
        amenities: ["Comfortable rooms", "Valley views", "Restaurant", "WiFi", "Family-friendly"]
      },
      {
        name: "Royal Park / Gulmarg Inn / Heevan Retreat",
        type: "3-Star Hotel",
        location: "Gulmarg",
        nights: 1,
        amenities: ["Mountain views", "Heating", "Restaurant", "WiFi", "Parking"]
      },
      {
        name: "Snow Land / Glacier View / Sunshine",
        type: "3-Star Hotel",
        location: "Sonmarg",
        nights: 1,
        amenities: ["Scenic location", "Basic comfort", "Restaurant", "Hot water", "Heating"]
      }
    ]
  },

  images: [
    "/destinations/kashmir/srinagar/01.jpg",
    "/destinations/kashmir/pahalgam/1.jpg",
    "/destinations/kashmir/gulmarg/01.jpg",
    "/destinations/kashmir/sonamarg/1.jpg",
    "/destinations/kashmir/dal_lake/1.jpg",
    "/destinations/kashmir/nishat_bagh/1.jpg",
    "/destinations/kashmir/pahalgam/2.jpg",
    "/destinations/kashmir/gulmarg/06.jpg",
    "/destinations/kashmir/srinagar/05.jpg"
  ],

  faqs: [
    {
      question: "Is this tour suitable for elderly grandparents and small children?",
      answer: "Absolutely! This tour is specifically designed for multi-generational families. All activities are gentle, with optional rest periods. Walking is minimal, and all major attractions are easily accessible. Hotels provide comfortable rooms, and the pace is relaxed throughout."
    },
    {
      question: "What ages of children is this tour suitable for?",
      answer: "This tour is perfect for children aged 3 and above. The activities are safe, engaging, and age-appropriate. Younger children will enjoy pony rides, Shikara boats, snow play, and scenic nature walks."
    },
    {
      question: "Are the union taxis for Pahalgam included?",
      answer: "Yes, local union taxi charges for exploring Aru Valley, Betaab Valley, and Chandanwari are included in this package, making it hassle-free for families."
    },
    {
      question: "What meals are included?",
      answer: "Breakfast and dinner are included daily (MAP basis). Lunches are not included, giving you flexibility to try local restaurants, have picnics in valleys, or eat at your own pace with family."
    },
    {
      question: "Can we upgrade to a houseboat stay?",
      answer: "Yes! You can opt for a deluxe houseboat experience on Dal Lake for one night in Srinagar. This is available as an optional upgrade and must be requested during booking."
    },
    {
      question: "Are Gondola tickets included?",
      answer: "Yes, Gondola Phase 1 tickets are included in the package. Phase 2 tickets can be purchased separately on-site if you wish to go higher."
    },
    {
      question: "What should we pack for a family trip?",
      answer: "Pack comfortable walking shoes, warm layers (even in summer), sunscreen, hats, sunglasses, kids' snacks, medicines, camera, and any special items your family needs. In winter, bring heavy woolens, gloves, and warm socks for everyone."
    },
    {
      question: "Is there WiFi at hotels?",
      answer: "Most 3-star hotels offer WiFi in common areas, though connectivity may be limited in mountain areas like Sonmarg and Gulmarg. We recommend informing family back home about potential limited connectivity."
    },
    {
      question: "Can we customize this family tour?",
      answer: "Yes! We can customize the itinerary based on your family's interests, pace, and requirements. Contact us to discuss any special needs or preferences."
    },
    {
      question: "What if someone in our family has mobility issues?",
      answer: "Please inform us during booking about any mobility concerns. We can arrange ground-floor rooms, wheelchair assistance where possible, and adjust the itinerary to minimize walking while still enjoying Kashmir's beauty."
    }
  ],

  amenities: [
    { icon: "Hotel", label: "3-Star Family Hotels" },
    { icon: "Utensils", label: "Daily Breakfast & Dinner" },
    { icon: "Car", label: "Private Family Vehicle" },
    { icon: "Users", label: "Family-Friendly Pace" },
    { icon: "Camera", label: "Gondola Tickets Included" },
    { icon: "Shield", label: "Safe & Comfortable" }
  ],

  sustainability: [
    { icon: "Leaf", title: "Family-Focused Travel", description: "Creating meaningful family memories while respecting local culture" },
    { icon: "Award", title: "Local Community Support", description: "Supporting family-run businesses and local guides" },
    { icon: "Leaf", title: "Responsible Tourism", description: "Teaching children about sustainable travel practices" }
  ]
};

// Detailed tour information for Kashmir Honeymoon 6D5N
export const kashmirHoneymoon6D5NDetail = {
  id: "kashmir-honeymoon-6d5n",
  tourCode: "JRN-KSH-HM-6D5N",
  coverImage: "/tour_covers/kashmir-honeymoon-6d5n.png",
  title: "Kashmir Honeymoon",
  subtitle: "6 Days / 5 Nights – Srinagar • Gulmarg • Pahalgam",
  description: "Experience the magic of Kashmir with your loved one. This specially designed honeymoon itinerary offers romantic moments by serene lakes, snow-covered mountains, scenic valleys, and cozy stays. Perfect for couples looking for peace, beauty, and unforgettable memories together.",
  price: 449,
  originalPrice: 599,
  discount: 25,
  duration: "6 Days / 5 Nights",
  theme: "honeymoon",
  groupSize: "2 People (Couple)",
  rating: 5.0,
  reviews: 145,
  category: "Honeymoon & Romance",
  season: "All Year Round",
  departureTime: "Upon arrival at Srinagar Airport",
  returnTime: "After breakfast on Day 6",
  dressCode: "Comfortable romantic attire, warm layers, elegant evening wear optional",
  tourType: "Private Honeymoon Package",
  language: "English, Hindi, Urdu",
  minAge: 18,
  
  availableDates: [
    "2026-02-14",
    "2026-03-01",
    "2026-03-15",
    "2026-04-01",
    "2026-04-15",
    "2026-05-01",
    "2026-05-15",
    "2026-06-01",
    "2026-06-15",
    "2026-07-01"
  ],

  addons: [
    { id: 1, name: "Premium Houseboat Upgrade", price: 100, description: "Upgrade to luxury 5-star houseboat with private deck" },
    { id: 2, name: "Candlelight Dinner", price: 80, description: "Romantic candlelight dinner on Dal Lake" },
    { id: 3, name: "Couple Spa Package", price: 120, description: "Relaxing couple's spa treatment" },
    { id: 4, name: "Professional Couple Photography", price: 150, description: "Full-day professional photographer for romantic shots" },
    { id: 5, name: "Flower & Cake Surprise", price: 60, description: "Room decoration with flowers, cake and champagne" },
    { id: 6, name: "Gondola Phase II Upgrade", price: 50, description: "Upgrade to Gondola Phase II for higher altitude views" }
  ],

  highlights: [
    "Romantic Shikara ride on Dal Lake at sunset",
    "Private visits to Mughal Gardens - Shalimar, Nishat, Chashme Shahi",
    "Gondola Phase 1 ride in snow-covered Gulmarg",
    "Cozy honeymoon accommodation with flower bed decoration",
    "Scenic valley exploration - Aru, Betaab, Chandanwari",
    "Private vehicle for complete privacy and comfort",
    "Beautiful photo opportunities at every location",
    "Peaceful riverside moments in Pahalgam",
    "Romantic candlelit dinners (optional)",
    "Dedicated honeymoon couple service"
  ],

  inclusions: [
    "5 nights accommodation in well-appointed hotels/houseboat",
    "Daily breakfast and dinner for two",
    "Private airport transfers",
    "All sightseeing by private vehicle",
    "Private Shikara ride on Dal Lake",
    "Gondola Phase 1 ride tickets (Gulmarg)",
    "Honeymoon flower bed decoration (once during stay)",
    "All tolls, parking, fuel and driver charges",
    "All applicable taxes"
  ],

  exclusions: [
    "Airfare or train tickets",
    "Lunches during the tour",
    "Entry fees to gardens and monuments",
    "Local union taxis in Gulmarg & Pahalgam (for valley exploration)",
    "Adventure activities - skiing, pony rides, snow bike, rafting",
    "Personal expenses - shopping, tips, laundry",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Srinagar - Welcome to Paradise",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Arrive at Srinagar Airport where you'll be warmly welcomed and transferred to your hotel or traditional houseboat. After check-in and some rest, enjoy a relaxed evening near Dal Lake, taking in the serene mountain views. As the sun sets, share your first romantic dinner in Kashmir, marking the beginning of your unforgettable honeymoon. Overnight stay in Srinagar.",
      activities: [
        "Airport arrival and warm welcome",
        "Private transfer to hotel/houseboat",
        "Check-in and honeymoon room decoration",
        "Relaxed evening by Dal Lake",
        "Romantic sunset views",
        "Welcome dinner for two"
      ],
      meals: ["Dinner"],
      accommodation: "Hotel or Deluxe Houseboat in Srinagar",
      highlights: [
        "First romantic evening in Kashmir",
        "Flower bed decoration surprise",
        "Dal Lake sunset views"
      ]
    },
    {
      day: 2,
      title: "Srinagar Sightseeing & Romantic Shikara Ride",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "After a leisurely breakfast, visit the magnificent Mughal Gardens - Shalimar Bagh (Abode of Love), Nishat Bagh (Garden of Bliss), and Chashme Shahi (Royal Spring). These historic gardens with their terraced lawns, cascading fountains, and Chinar trees create the perfect romantic backdrop. Later in the afternoon, enjoy a private Shikara ride on Dal Lake, gliding past floating gardens and houseboats as the mountains reflect on the water. Capture beautiful moments together. Overnight stay in Srinagar.",
      activities: [
        "Visit Shalimar Bagh (Abode of Love)",
        "Explore Nishat Bagh (Garden of Bliss)",
        "Visit Chashme Shahi (Royal Spring)",
        "Private romantic Shikara ride on Dal Lake",
        "Floating gardens and houseboat views",
        "Couple photography opportunities",
        "Optional: Visit local handicraft shops"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Hotel or Houseboat in Srinagar",
      highlights: [
        "Mughal Gardens romantic walk",
        "Private Shikara ride for two",
        "Floating gardens experience"
      ]
    },
    {
      day: 3,
      title: "Srinagar to Gulmarg - Meadow of Romance",
      location: "Gulmarg (52 km, 2 hours)",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "After breakfast, drive to Gulmarg, the 'Meadow of Flowers', passing through scenic pine forests and mountain roads. Upon arrival, check into your cozy hotel and prepare for the highlight - the Gulmarg Gondola ride (Phase 1). Ascend to breathtaking heights with panoramic views of snow-capped peaks and valleys. Spend leisure time in the snow-covered meadows, perfect for snowball fights, sledging, or simply walking hand-in-hand. The crisp mountain air and stunning vistas create unforgettable romantic moments. Overnight stay in Gulmarg.",
      activities: [
        "Scenic drive through pine forests",
        "Hotel check-in at Gulmarg",
        "Gondola cable car ride (Phase 1)",
        "Explore snow-covered meadows",
        "Optional: Sledging, snow activities",
        "Romantic mountain photography",
        "Evening leisure at hotel"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Hotel in Gulmarg",
      highlights: [
        "Asia's highest cable car ride",
        "Snow-covered meadow romance",
        "Panoramic Himalayan views"
      ]
    },
    {
      day: 4,
      title: "Gulmarg to Pahalgam - Valley of Shepherds",
      location: "Pahalgam (140 km, 4 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "After a relaxed breakfast with mountain views, begin your scenic drive to Pahalgam through beautiful Kashmir landscapes. The journey itself is romantic, passing through villages, rivers, and pine-forested hills. Upon arrival in Pahalgam, the 'Valley of Shepherds', check into your hotel nestled amidst nature. Spend the evening strolling along the Lidder River, listening to the soothing sounds of flowing water. The peaceful ambiance and natural beauty make it perfect for couples. Overnight stay in Pahalgam.",
      activities: [
        "Scenic drive to Pahalgam",
        "Photo stops at beautiful locations",
        "Hotel check-in",
        "Romantic walk along Lidder River",
        "Evening leisure by riverside",
        "Quiet time together in nature"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Hotel in Pahalgam",
      highlights: [
        "Scenic mountain drive",
        "Lidder River romantic walk",
        "Peaceful valley atmosphere"
      ]
    },
    {
      day: 5,
      title: "Pahalgam Valley Exploration",
      location: "Pahalgam - Aru, Betaab & Chandanwari",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "Today explore Pahalgam's most beautiful valleys by local taxi. Visit Aru Valley with its pristine meadows and mountain backdrop - a perfect spot for nature walks and photography. Continue to Betaab Valley, named after a Bollywood romance film and known for its lush greenery and crystal streams - truly a romantic paradise. Then visit Chandanwari, where seasonal snow and gurgling streams create a magical setting. Each valley offers unique photo opportunities and intimate moments. Optional pony rides available for a unique experience. Return to your hotel for a romantic dinner. Overnight stay in Pahalgam.",
      activities: [
        "Union taxi to explore valleys",
        "Visit Aru Valley - meadows and mountains",
        "Explore Betaab Valley - Bollywood's romantic location",
        "Chandanwari - seasonal snow and streams",
        "Optional pony rides for couple",
        "Nature photography",
        "Romantic picnic opportunities",
        "Evening leisure at hotel"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Hotel in Pahalgam",
      highlights: [
        "Three romantic valleys in one day",
        "Betaab Valley - Bollywood romance location",
        "Pristine nature and photography"
      ]
    },
    {
      day: 6,
      title: "Pahalgam to Srinagar - Departure with Memories",
      location: "Srinagar Airport (95 km, 2.5 hours)",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "After a final breakfast together in the mountains, check out and drive back to Srinagar Airport. The journey offers last glimpses of Kashmir's beauty as you reflect on the wonderful memories created - from Shikara rides on Dal Lake to snow adventures in Gulmarg, from Mughal Gardens to peaceful valleys. Depart with hearts full of love and unforgettable experiences that will last a lifetime.",
      activities: [
        "Leisure breakfast",
        "Hotel check-out",
        "Scenic drive to airport",
        "Last views of Kashmir",
        "Departure with beautiful memories"
      ],
      meals: ["Breakfast"],
      accommodation: "N/A",
      highlights: [
        "Final Kashmir mountain views",
        "Memories to cherish forever",
        "Start of married life with beautiful experiences"
      ]
    }
  ],

  accommodationDetails: {
    title: "Honeymoon Stay Plan",
    description: "Romantic accommodations carefully selected for honeymooners",
    hotels: [
      {
        name: "Hotel or Deluxe Houseboat",
        type: "3-Star or Houseboat",
        location: "Srinagar",
        nights: 2,
        amenities: ["Honeymoon room decoration", "Private ambiance", "Lake views", "Restaurant", "WiFi", "Room service"]
      },
      {
        name: "Romantic Hotel",
        type: "3-Star",
        location: "Gulmarg",
        nights: 1,
        amenities: ["Mountain views", "Cozy rooms", "Heating", "Restaurant", "Couple-friendly"]
      },
      {
        name: "Riverside Hotel",
        type: "3-Star",
        location: "Pahalgam",
        nights: 2,
        amenities: ["Valley views", "Peaceful location", "Restaurant", "WiFi", "Romantic ambiance"]
      }
    ]
  },

  images: [
    "/destinations/kashmir/dal_lake/1.jpg",
    "/destinations/kashmir/srinagar/01.jpg",
    "/destinations/kashmir/gulmarg/01.jpg",
    "/destinations/kashmir/pahalgam/1.jpg",
    "/destinations/kashmir/nishat_bagh/1.jpg",
    "/destinations/kashmir/shalimar_bagh/1.jpg",
    "/destinations/kashmir/gulmarg/07.jpg",
    "/destinations/kashmir/pahalgam/5.jpg",
    "/destinations/kashmir/srinagar/06.jpg"
  ],

  faqs: [
    {
      question: "Is this package suitable for honeymoon couples?",
      answer: "Absolutely! This package is specially designed for honeymooners with romantic experiences, private moments, flower bed decoration, and couple-friendly activities. Every detail is curated to create unforgettable memories for newlyweds."
    },
    {
      question: "What romantic experiences are included?",
      answer: "The package includes a private Shikara ride on Dal Lake, honeymoon flower bed decoration, visits to romantic Mughal Gardens, gondola ride in Gulmarg, and peaceful valley explorations. We also offer optional add-ons like candlelight dinner and couple spa."
    },
    {
      question: "Can we stay in a houseboat?",
      answer: "Yes! You can opt for a traditional Kashmiri houseboat experience on Dal Lake for 1-2 nights in Srinagar. This adds a unique and romantic element to your honeymoon. Please mention your preference during booking."
    },
    {
      question: "Is the tour completely private?",
      answer: "Yes, this is a private honeymoon package with your own dedicated vehicle and driver. All experiences are designed for just the two of you, ensuring complete privacy and intimate moments."
    },
    {
      question: "What is the best time for a Kashmir honeymoon?",
      answer: "Kashmir is romantic year-round! March-June offers pleasant weather and blooming flowers. September-November provides clear skies and autumn colors. December-February is perfect for snow and cozy winter romance."
    },
    {
      question: "Are local union taxis included for Pahalgam valleys?",
      answer: "No, local union taxis for Aru, Betaab, and Chandanwari valley visits are not included and cost approximately ₹2,500-3,500. This is due to local regulations requiring union vehicles for valley access."
    },
    {
      question: "Can we add a candlelight dinner?",
      answer: "Yes! We offer candlelight dinner as an add-on experience. You can arrange a romantic dinner by Dal Lake or at select restaurants in Srinagar, Gulmarg, or Pahalgam. Contact us to customize this special experience."
    },
    {
      question: "What should we pack for our Kashmir honeymoon?",
      answer: "Pack comfortable clothing, warm layers (especially for Gulmarg), elegant evening wear for dinners, good walking shoes, camera, sunglasses, sunscreen, and personal items. In winter, bring heavy woolens, gloves, and warm accessories."
    },
    {
      question: "Is couple photography included?",
      answer: "While scenic photo opportunities are abundant throughout the tour, professional couple photography is available as an add-on. Your driver can also help with couple photos at beautiful locations."
    },
    {
      question: "Can we customize the honeymoon package?",
      answer: "Absolutely! We understand every couple is unique. You can add extra nights, upgrade accommodations, include special experiences, or modify the itinerary. Contact us to create your perfect honeymoon."
    }
  ],

  amenities: [
    { icon: "Hotel", label: "Romantic Accommodations" },
    { icon: "Utensils", label: "Daily Breakfast & Dinner" },
    { icon: "Car", label: "Private Vehicle" },
    { icon: "Heart", label: "Honeymoon Decoration" },
    { icon: "Camera", label: "Gondola & Shikara Included" },
    { icon: "Shield", label: "Complete Privacy" }
  ],

  sustainability: [
    { icon: "Heart", title: "Romantic Memories", description: "Creating lifetime memories while respecting local culture and environment" },
    { icon: "Award", title: "Local Community Support", description: "Supporting local artisans, businesses, and traditional hospitality" },
    { icon: "Leaf", title: "Sustainable Romance", description: "Eco-friendly practices ensuring Kashmir remains beautiful for future couples" }
  ]
};

// Detailed tour information for Kashmir Group Tour 5N6D (3-Star)
export const kashmirGroup5N6D3StarDetail = {
  id: "kashmir-group-5n6d-3star",
  coverImage: "/tour_covers/kashmir-group-5n6d-3star.png",
  tourCode: "JRN-KSH-GRP-5N6D",
  title: "Kashmir Group Tour",
  subtitle: "5 Nights / 6 Days – Srinagar • Pahalgam • Gulmarg",
  description: "A scenic and social journey crafted for groups — friends, college batches, families or corporate teams — showcasing the highlights of Kashmir. From Dal Lake sunsets and Mughal-era gardens to pine valleys and snow-kissed meadows, this trip is easy-paced, comfortable and full of shared memories. Three nights in Srinagar, one night each in Pahalgam and Gulmarg, and a deluxe houseboat stay together make this the perfect group experience.",
  price: 399,
  originalPrice: 549,
  discount: 27,
  duration: "5 Nights / 6 Days",
  theme: "adventure-group",
  groupSize: "6-20 People",
  rating: 4.8,
  reviews: 203,
  category: "Group Adventure & Cultural",
  season: "All Year Round",
  departureTime: "Upon arrival at Srinagar Airport",
  returnTime: "After breakfast on Day 6 from Gulmarg",
  dressCode: "Comfortable group travel attire, warm layers, walking shoes",
  tourType: "Group Tours (Friends, College, Corporate, Families)",
  language: "English, Hindi, Urdu",
  minAge: 15,
  
  availableDates: [
    "2026-03-10",
    "2026-03-24",
    "2026-04-07",
    "2026-04-21",
    "2026-05-05",
    "2026-05-19",
    "2026-06-02",
    "2026-06-16",
    "2026-07-07",
    "2026-07-21"
  ],

  addons: [
    { id: 1, name: "Group Travel Insurance", price: 20, description: "Per person comprehensive coverage" },
    { id: 2, name: "Gondola Phase II Upgrade", price: 50, description: "Group tickets for Phase II" },
    { id: 3, name: "Adventure Activities Pack", price: 100, description: "Group package for ATV, sledging, snow activities" },
    { id: 4, name: "Group Photography Session", price: 200, description: "Professional photographer for full day" },
    { id: 5, name: "Bonfire Night", price: 150, description: "Evening bonfire with music at hotel" },
    { id: 6, name: "Extra Meal Package", price: 40, description: "Add lunch for all days per person" }
  ],

  highlights: [
    "Perfect for groups of friends, college batches, corporate teams",
    "Comfortable Tempo Traveller or Mini Coach transport",
    "3 nights in Srinagar hotels + 1 deluxe houseboat experience",
    "Shared Shikara ride on Dal Lake (1 hour)",
    "Mughal Gardens exploration - Nishat, Shalimar, Chashme Shahi",
    "Gondola Phase 1 tickets included for entire group",
    "Pahalgam valley exploration - Aru, Betaab, Chandanwari",
    "Overnight in Gulmarg with snow activities",
    "Group bonding on houseboat deck",
    "Daily breakfast and dinner (buffet or standard)"
  ],

  inclusions: [
    "5 nights accommodation (3-star hotels + 1 deluxe houseboat night)",
    "Daily breakfast and dinner (buffet or standard meals)",
    "Tempo Traveller or Mini Coach (as per group size)",
    "Airport pickup and drop",
    "Shared 1-hour Shikara ride on Dal Lake",
    "Gulmarg Gondola Phase 1 tickets for group",
    "Local taxi in Pahalgam (union requirement)",
    "Driver allowance, fuel, tolls, and parking",
    "All applicable taxes"
  ],

  exclusions: [
    "Lunches during the tour",
    "Entry tickets to gardens and monuments",
    "Pony rides, skiing, ATV rides, sledging",
    "White water rafting and paragliding",
    "Shopping, tips, and personal expenses",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Srinagar & Dal Lake Walk",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Arrive in Srinagar where your group coach awaits. Check in to Star of Kashmir, Grand Habib, Royal Heritage or similar. After rest and settling in, enjoy a group lakeside walk on Boulevard Road where you can soak in mountain reflections over chai. Perfect ice-breaker activity for the group. Dinner and overnight in Srinagar.",
      activities: [
        "Group airport pickup",
        "Check-in to 3-star hotel",
        "Welcome refreshments",
        "Group walk on Boulevard Road",
        "Dal Lake views and photo opportunities",
        "Evening chai session",
        "Group dinner and introductions"
      ],
      meals: ["Dinner"],
      accommodation: "3-Star Hotel in Srinagar (Star of Kashmir / Grand Habib / Royal Heritage / Victory)",
      highlights: [
        "Group bonding begins",
        "First glimpse of Dal Lake",
        "Mountain views and fresh air"
      ]
    },
    {
      day: 2,
      title: "Srinagar Mughal Gardens & Group Shikara",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "Tour Srinagar's Mughal trio — Nishat Bagh (Garden of Bliss), Shalimar Garden (Abode of Love) and Chashme Shahi (Royal Spring). Learn how emperors shaped these royal spaces with your group guide. The terraced gardens offer amazing photo spots for group pictures. In the evening, enjoy a shared Shikara glide across Dal Lake with floating gardens and houseboats in view - a memorable experience for the entire group. Dinner and overnight in Srinagar.",
      activities: [
        "Visit Nishat Bagh with group",
        "Explore Shalimar Garden together",
        "Chashme Shahi Royal Spring visit",
        "Group photography at gardens",
        "Shared Shikara ride on Dal Lake (1 hour)",
        "Floating gardens and houseboat views",
        "Optional: Visit local handicraft shops as group",
        "Group dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Srinagar",
      highlights: [
        "Mughal heritage exploration",
        "Group Shikara ride experience",
        "Amazing group photo opportunities"
      ]
    },
    {
      day: 3,
      title: "Srinagar to Pahalgam - Saffron Fields & River Valley",
      location: "Pahalgam (95 km, 2.5 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Depart for Pahalgam via Pampore saffron farms and willow-cricket bat factories - interesting group stops to learn about local crafts. The scenic drive follows river valleys perfect for group conversations and photo stops. Check into Pine Spring, Regency, Tourist Palace or similar. Explore the local market together, riverside trails or relax with tea as a group. Dinner and overnight in Pahalgam.",
      activities: [
        "Scenic group drive to Pahalgam",
        "Stop at Pampore saffron fields",
        "Visit cricket bat-making factory",
        "Group photo opportunities en route",
        "Hotel check-in",
        "Explore Pahalgam market together",
        "Riverside group walks",
        "Group tea time",
        "Group dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Pahalgam (Pine Spring / Regency / Tourist Palace)",
      highlights: [
        "Saffron fields visit",
        "Cricket bat factory tour",
        "Scenic mountain drive"
      ]
    },
    {
      day: 4,
      title: "Pahalgam Valleys & Houseboat Experience",
      location: "Pahalgam Valleys then Srinagar Houseboat",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
      description: "Use local taxis to visit Pahalgam's beautiful valleys as a group. Aru Valley offers green meadows and fresh mountain air perfect for group activities. Betaab Valley, the film-famous valley with streams, is ideal for group photos. Chandanwari features snow points in season creating fun moments. After valley exploration, return to Srinagar and board a Deluxe Houseboat — Shelter, Peacock, or BlueBell. Enjoy group bonding on deck with mountain views, sharing stories and laughter. This unique houseboat experience together becomes a trip highlight. Dinner and overnight on houseboat in Srinagar.",
      activities: [
        "Union taxis to explore valleys",
        "Visit Aru Valley (meadows)",
        "Explore Betaab Valley (Bollywood location)",
        "Chandanwari snow points visit",
        "Group activities in valleys",
        "Drive back to Srinagar",
        "Check-in to deluxe houseboat",
        "Group bonding on houseboat deck",
        "Sunset views together",
        "Group dinner on houseboat"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Deluxe Houseboat in Srinagar (Shelter / Peacock / BlueBell)",
      highlights: [
        "Three beautiful valleys",
        "Unique houseboat group experience",
        "Memorable group bonding time"
      ]
    },
    {
      day: 5,
      title: "Srinagar to Gulmarg - Mountain Adventure",
      location: "Gulmarg (52 km, 2 hours)",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "Head to the alpine meadows of Gulmarg together. Ride Gondola Phase I as a group for wide mountain views - this cable car experience becomes even more exciting with friends. Enjoy group snow play, build snowmen, have snowball fights! Optional winter activities (self-pay) include sledging, snow bikes, beginner skiing - perfect for group fun. Check into Royal Park, Gulmarg Inn or Heevan Retreat standard wing. Evening group activities and bonding. Dinner and overnight in Gulmarg.",
      activities: [
        "Scenic group drive to Gulmarg",
        "Hotel check-in",
        "Gondola Phase I ride (group tickets included)",
        "Group snow play and activities",
        "Explore meadows together",
        "Optional: Sledging, snow activities",
        "Group photography session",
        "Evening leisure at hotel",
        "Group dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Gulmarg (Royal Park / Gulmarg Inn / Heevan Retreat)",
      highlights: [
        "Asia's highest cable car with friends",
        "Group snow activities",
        "Panoramic mountain views"
      ]
    },
    {
      day: 6,
      title: "Gulmarg to Srinagar - Departure with Memories",
      location: "Srinagar Airport (100 km, 3 hours)",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "After breakfast together, descend by road to Srinagar Airport. The final journey offers time to reflect on the amazing experiences shared - from Shikara rides and Mughal gardens to snowfields and houseboat nights. Depart with a treasure trove of group memories, inside jokes, countless photos, and friendships strengthened by this Kashmir adventure together.",
      activities: [
        "Group breakfast",
        "Hotel check-out",
        "Scenic drive to airport together",
        "Last group photos",
        "Final views of Kashmir",
        "Exchange contacts and promises to reunite",
        "Airport departure"
      ],
      meals: ["Breakfast"],
      accommodation: "N/A",
      highlights: [
        "Last mountain views together",
        "Memories to last a lifetime",
        "Friendships strengthened"
      ]
    }
  ],

  accommodationDetails: {
    title: "Stay Plan (3-Star Category)",
    description: "Comfortable group-friendly accommodations with special houseboat experience",
    hotels: [
      {
        name: "Star of Kashmir / Royal Heritage / Grand Habib / Victory",
        type: "3-Star Hotel",
        location: "Srinagar",
        nights: 2,
        amenities: ["Multiple rooms for group", "Restaurant", "WiFi", "Common areas", "Room service"]
      },
      {
        name: "Deluxe Houseboat (Shelter / Peacock / BlueBell)",
        type: "Deluxe Houseboat",
        location: "Dal Lake, Srinagar",
        nights: 1,
        amenities: ["Group accommodation", "Deck for gathering", "Traditional experience", "Lake views", "Kashmiri hospitality"]
      },
      {
        name: "Pine Spring / Tourist Palace / Regency",
        type: "3-Star Hotel",
        location: "Pahalgam",
        nights: 1,
        amenities: ["Group rooms", "Restaurant", "Valley views", "WiFi", "Comfortable stay"]
      },
      {
        name: "Royal Park / Gulmarg Inn / Heevan Retreat",
        type: "3-Star Hotel",
        location: "Gulmarg",
        nights: 1,
        amenities: ["Mountain views", "Heating", "Restaurant", "Group facilities", "Parking"]
      }
    ]
  },

  images: [
    "/destinations/kashmir/srinagar/01.jpg",
    "/destinations/kashmir/gulmarg/01.jpg",
    "/destinations/kashmir/pahalgam/1.jpg",
    "/destinations/kashmir/dal_lake/1.jpg",
    "/destinations/kashmir/sonamarg/1.jpg",
    "/destinations/kashmir/gulmarg/08.jpg",
    "/destinations/kashmir/srinagar/07.jpg",
    "/destinations/kashmir/pahalgam/6.jpg",
    "/destinations/kashmir/nishat_bagh/18.jpg"
  ],

  faqs: [
    {
      question: "What is the ideal group size for this tour?",
      answer: "This tour is designed for groups of 6-20 people. Whether you're a college batch, friend circle, corporate team, or extended family, we provide appropriate vehicles (Tempo Traveller or Mini Coach) based on your group size."
    },
    {
      question: "Can we customize activities for our group?",
      answer: "Yes! We understand each group has unique interests. You can add adventure activities, extend stays, include team-building exercises, or modify the itinerary. Contact us to customize your group tour."
    },
    {
      question: "How does the houseboat accommodation work for groups?",
      answer: "We arrange multiple deluxe houseboats or large houseboats with multiple rooms to accommodate your entire group. The common deck area is perfect for group gatherings, bonding, and enjoying Dal Lake together."
    },
    {
      question: "Are meals included for the entire group?",
      answer: "Yes, breakfast and dinner are included daily, served as buffet or standard meals suitable for groups. Lunches are not included, allowing your group flexibility to explore local restaurants together."
    },
    {
      question: "What vehicle will be provided?",
      answer: "Based on your group size, we provide either a Tempo Traveller (for 6-12 people) or a Mini Coach (for 12-20 people). All vehicles are comfortable, well-maintained, and equipped for mountain travel."
    },
    {
      question: "Is the Pahalgam union taxi cost included?",
      answer: "Yes! Unlike individual packages, the local union taxi charges for exploring Aru, Betaab, and Chandanwari valleys are included in this group package."
    },
    {
      question: "What about Gondola tickets?",
      answer: "Gondola Phase 1 tickets are included for all group members. If your group wants to go to Phase 2, tickets can be purchased on-site at additional cost."
    },
    {
      question: "Can we have special arrangements like bonfire nights?",
      answer: "Absolutely! We offer add-ons like bonfire nights with music, group photography sessions, and adventure activity packages. These can be added during booking or customized for your group."
    },
    {
      question: "Is this suitable for corporate team outings?",
      answer: "Yes! Many corporate teams choose this tour for team bonding and offsites. We can arrange team-building activities, meeting spaces, and adjust the itinerary for corporate requirements."
    },
    {
      question: "What if some group members want different room types?",
      answer: "We can arrange a mix of double, triple, or quad sharing rooms based on your group's preferences. Room allocation should be discussed during booking to ensure everyone's comfort."
    }
  ],

  amenities: [
    { icon: "Users", label: "Group Travel Specialist" },
    { icon: "Car", label: "Tempo Traveller/Mini Coach" },
    { icon: "Hotel", label: "3-Star Hotels + Houseboat" },
    { icon: "Utensils", label: "Daily Breakfast & Dinner" },
    { icon: "Camera", label: "Gondola & Shikara Included" },
    { icon: "Award", label: "Perfect for Friends & Teams" }
  ],

  sustainability: [
    { icon: "Users", title: "Group Bonding", description: "Creating shared memories while respecting local communities and environment" },
    { icon: "Award", title: "Local Community Impact", description: "Supporting local businesses, guides, and artisans through group tourism" },
    { icon: "Leaf", title: "Responsible Group Travel", description: "Sustainable practices ensuring Kashmir's beauty for future groups" }
  ]
};

// Detailed tour information for Kashmir Cultural Journey 6N7D (4-Star)
export const kashmirCultural6N7D4StarDetail = {
  id: "kashmir-cultural-6n7d-4star",
  tourCode: "JRN-KSH-CUL-6N7D",
  coverImage: "/tour_covers/kashmir-cultural-6n7d-4star.png",
  title: "Kashmir Cultural Journey",
  subtitle: "6 Nights / 7 Days – Srinagar • Gulmarg • Pahalgam",
  description: "This week-long cultural immersion blends Srinagar's old-city heritage, traditional Mughal gardens, Sufi influences, artisan crafts and warm mountain hospitality. From houseboat stays and garden promenades to alpine villages and pine valleys, Kashmir unfolds through its living traditions, stories and people. The itinerary is set at a relaxed pace with four nights in Srinagar, one in Gulmarg and one in Pahalgam to showcase the region's soul without rush.",
  price: 649,
  originalPrice: 849,
  discount: 24,
  duration: "6 Nights / 7 Days",
  theme: "culture-heritage",
  groupSize: "2-8 People",
  rating: 4.9,
  reviews: 156,
  category: "Cultural & Heritage",
  season: "All Year Round",
  departureTime: "Upon arrival at Srinagar Airport",
  returnTime: "After breakfast on Day 7",
  dressCode: "Comfortable cultural exploration attire, respectful clothing for religious sites, warm layers",
  tourType: "Private Cultural Tours",
  language: "English, Hindi, Urdu with Cultural Guide",
  minAge: 12,
  
  availableDates: [
    "2026-03-05",
    "2026-03-19",
    "2026-04-02",
    "2026-04-16",
    "2026-05-07",
    "2026-05-21",
    "2026-06-04",
    "2026-06-18",
    "2026-07-02",
    "2026-07-16"
  ],

  addons: [
    { id: 1, name: "Private Cultural Guide", price: 150, description: "Expert local guide for deeper cultural insights" },
    { id: 2, name: "Artisan Workshop Experience", price: 100, description: "Hands-on craft workshop with master artisans" },
    { id: 3, name: "Traditional Wazwan Feast", price: 120, description: "Authentic multi-course Kashmiri feast" },
    { id: 4, name: "Sufi Music Evening", price: 80, description: "Live Sufi music performance" },
    { id: 5, name: "Heritage Photography Package", price: 180, description: "Professional photographer for cultural moments" },
    { id: 6, name: "Pashmina Shopping Guide", price: 50, description: "Expert guide for authentic Pashmina purchase" }
  ],

  highlights: [
    "Deep dive into Kashmir's living cultural heritage",
    "Old city walk through ancestral lanes and spice markets",
    "Mughal Gardens historical tour - Shalimar, Nishat, Chashme Shahi",
    "Visit to Hazratbal Shrine and Shankaracharya Temple",
    "Artisan quarters experience - papier-mache, walnut carving, pashmina",
    "Tangmarg village visit with shepherd families",
    "Traditional salt tea in mountain village tea house",
    "Drung Waterfall natural wonder",
    "Aru Village traditional lifestyle immersion",
    "Luxury 4-star hotels plus authentic houseboat stay",
    "Private Shikara ride with cultural stories",
    "Gondola Phase 1 ride in Gulmarg"
  ],

  inclusions: [
    "6 nights accommodation (4-star hotels + 1 luxury houseboat night)",
    "Daily breakfast and dinner",
    "Private chauffeur-driven transport",
    "Airport pickup and drop",
    "1-hour private Shikara ride on Dal Lake",
    "Gondola Phase 1 ride tickets",
    "Local taxi for Pahalgam valleys exploration",
    "Cultural site visits and experiences",
    "Driver allowance, fuel, taxes, and parking",
    "All applicable taxes"
  ],

  exclusions: [
    "Entry tickets for monuments and gardens",
    "Lunches during the tour",
    "Pony rides, rafting, trekking, or adventure activities",
    "Personal expenses, tips, laundry, and shopping",
    "Artisan craft purchases",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ],

  itinerary: [
    {
      day: 1,
      title: "Welcome to Srinagar & Old City Heritage Walk",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Arrive in Srinagar and meet your chauffeur. Check in to your 4-star hotel (Four Points by Sheraton, Radisson Srinagar, or RK Sarovar). After settling in and refreshments, take an afternoon stroll into the old city lanes lined with ancestral bakeries, spice stores, and traditional timber homes. Experience the living heritage of Kashmir as you walk through centuries-old neighborhoods. Absorb the local buzz, authentic aromas, and architectural beauty. End your day with traditional tea along Dal Lake, watching the sunset paint the mountains. Dinner and overnight in Srinagar.",
      activities: [
        "Airport arrival and 4-star hotel check-in",
        "Welcome refreshments",
        "Guided old city heritage walk",
        "Visit ancestral bakeries and spice markets",
        "Explore traditional timber architecture",
        "Tea by Dal Lake at sunset",
        "Introduction to Kashmiri culture",
        "Welcome dinner"
      ],
      meals: ["Dinner"],
      accommodation: "4-Star Hotel in Srinagar (Four Points / Radisson / RK Sarovar)",
      highlights: [
        "Old city cultural immersion",
        "Traditional architecture exploration",
        "Sunset tea by Dal Lake"
      ]
    },
    {
      day: 2,
      title: "Mughal Garden History & Traditional Shikara Experience",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "Begin the day at Emperor Jahangir's terraced marvels — Shalimar Bagh (Abode of Love) and Nishat Bagh (Garden of Bliss). Learn about Mughal garden design, water channel systems, and the historical significance of these UNESCO heritage candidates. Visit Chashme Shahi, the Royal Spring garden, fed by a natural mountain spring with reputed healing properties. Later, relax on a private Shikara gliding along Dal Lake as your guide shares stories of floating gardens, lotus fields, and the carved houseboat heritage that defines Kashmiri life. Dinner and overnight in Srinagar.",
      activities: [
        "Visit Shalimar Bagh with historical context",
        "Explore Nishat Bagh's terraced beauty",
        "Chashme Shahi Royal Spring experience",
        "Learn about Mughal garden architecture",
        "Private Shikara ride with cultural storytelling",
        "Floating gardens and houseboat heritage",
        "Photography of traditional Kashmir life",
        "Traditional dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "4-Star Hotel in Srinagar",
      highlights: [
        "Mughal garden historical tour",
        "Royal Spring natural wonder",
        "Cultural Shikara storytelling experience"
      ]
    },
    {
      day: 3,
      title: "Sacred Sites & Master Artisan Traditions",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
      description: "Visit Hazratbal Shrine where marble domes reflect beautifully on water — an important Islamic shrine housing a holy relic. Experience the spiritual atmosphere and architectural elegance. Continue to Shankaracharya Temple, perched atop a hill and considered one of Kashmir's oldest spiritual sites, dating back to 200 BCE. The climb offers panoramic city views. Afternoon immersion in artisan quarters where you'll witness master craftspeople at work. Learn how papier-mache art is created with paper pulp and paint, how walnut wood is intricately hand-carved, and how pashmina shawls are woven from Himalayan goat wool. These centuries-old crafts have been passed down through generations. Dinner and overnight in Srinagar.",
      activities: [
        "Visit Hazratbal Shrine (Islamic heritage)",
        "Shankaracharya Temple ancient site",
        "Panoramic city views from hilltop",
        "Artisan quarter immersion",
        "Witness papier-mache craft making",
        "Walnut wood carving demonstration",
        "Pashmina weaving process learning",
        "Interact with master craftspeople",
        "Optional craft purchases"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "4-Star Hotel in Srinagar",
      highlights: [
        "Sacred site spiritual experiences",
        "Ancient temple and city views",
        "Master artisan craft immersion"
      ]
    },
    {
      day: 4,
      title: "Gulmarg Alpine Culture & Village Life",
      location: "Gulmarg (52 km, 2 hours)",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "Drive through scenic pine forests to Gulmarg, the 'Meadow of Flowers'. Check in to your 4-star alpine retreat (Heevan Retreat, Pine Spring, or Highlands Park). Ride the Gondola Phase 1 for breathtaking panoramic mountain views and experience the alpine ecosystem. Later, explore Tangmarg village where you'll meet local shepherd families and learn how harsh Himalayan winters shape their lifestyle and culture. Sip traditional salt tea (noon chai) at a village tea house while listening to stories of mountain life, seasonal migrations, and age-old traditions. This authentic interaction provides deep cultural insights. Dinner and overnight in Gulmarg.",
      activities: [
        "Scenic drive through pine forests",
        "4-star alpine hotel check-in",
        "Gondola Phase 1 mountain experience",
        "Alpine meadow exploration",
        "Tangmarg village cultural visit",
        "Meet shepherd families",
        "Traditional salt tea experience",
        "Learn about mountain lifestyle",
        "Stories of seasonal life and traditions",
        "Evening mountain ambiance"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "4-Star Hotel in Gulmarg (Heevan Retreat / Pine Spring / Highlands Park)",
      highlights: [
        "Alpine culture immersion",
        "Shepherd family interaction",
        "Traditional mountain tea ritual"
      ]
    },
    {
      day: 5,
      title: "Drung Waterfall & Valley of Shepherds Culture",
      location: "Gulmarg to Pahalgam via Drung (140 km, 4 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Depart Gulmarg and stop at the magnificent Drung Waterfall, where icy cascades tumble dramatically over rock walls. In winter, this waterfall often freezes into stunning ice formations, creating a natural spectacle. Continue your journey to Pahalgam — the 'Valley of Shepherds'. Check in to your 4-star hillside hotel (Pine Spring, Welcome Holiday, or Senator Pine-N-Peak Heritage). Explore the small traditional market, walk along riverside paths with wooden bridges, and soak in the peaceful mountain town atmosphere. Learn about Pahalgam's role as the starting point for the Amarnath pilgrimage and its shepherd heritage. Dinner and overnight in Pahalgam.",
      activities: [
        "Scenic mountain drive",
        "Drung Waterfall visit and photography",
        "Natural ice formations (seasonal)",
        "Drive through Kashmir countryside",
        "Pahalgam 4-star hotel check-in",
        "Traditional market exploration",
        "Riverside cultural walks",
        "Wooden bridge photography",
        "Learn about pilgrimage heritage",
        "Peaceful mountain evening"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "4-Star Hotel in Pahalgam (Pine Spring / Welcome Holiday / Senator Pine-N-Peak)",
      highlights: [
        "Drung Waterfall natural wonder",
        "Shepherd valley heritage",
        "Traditional market culture"
      ]
    },
    {
      day: 6,
      title: "Valley Villages & Luxury Houseboat Cultural Experience",
      location: "Pahalgam Valleys to Srinagar Houseboat",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "Visit three unique landscapes that have shaped local living and culture. Aru Village showcases traditional wooden homes, farm life, and the simplicity of mountain communities. Betaab Valley, made famous by Bollywood films, is steeped in local folklore and natural beauty. Chandanwari serves as the gateway to the Amarnath pilgrimage with glacier streams representing spiritual significance. Each valley tells a story of how geography, religion, and tradition interweave in Kashmiri culture. Return to Srinagar to spend your final night aboard a luxury houseboat (Peacock, Shelter, or Royal Dandoo). Enjoy dinner under intricately hand-carved walnut ceilings, experiencing the unique houseboat culture that has defined Kashmir for centuries. Overnight on houseboat in Srinagar.",
      activities: [
        "Union taxi valley exploration",
        "Aru Village traditional life experience",
        "Meet local farming families",
        "Betaab Valley cultural stories",
        "Chandanwari pilgrimage significance",
        "Glacier stream spiritual context",
        "Valley photography and nature",
        "Return drive to Srinagar",
        "Luxury houseboat check-in",
        "Hand-carved walnut interiors appreciation",
        "Traditional Kashmiri dinner on deck",
        "Houseboat heritage storytelling"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Luxury Houseboat in Srinagar (Peacock / Shelter / Royal Dandoo)",
      highlights: [
        "Traditional village life immersion",
        "Pilgrimage cultural significance",
        "Authentic luxury houseboat experience"
      ]
    },
    {
      day: 7,
      title: "Farewell from Cultural Kashmir",
      location: "Srinagar to Airport",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Enjoy a traditional Kashmiri breakfast on your houseboat — kahwa (saffron tea), fresh bread, and local delicacies. Check out and transfer to the airport via private vehicle. As you depart, carry home not just memories of beautiful landscapes, but deep stories of craftspeople, shrines, gardens, lakes, mountain villages, and the living cultural heart of Kashmir. This journey has connected you to the soul of the valley through its people, traditions, and heritage.",
      activities: [
        "Traditional Kashmiri breakfast",
        "Houseboat check-out",
        "Final Dal Lake views",
        "Private airport transfer",
        "Cultural reflections on journey",
        "Departure with enriched understanding"
      ],
      meals: ["Breakfast"],
      accommodation: "N/A",
      highlights: [
        "Traditional breakfast experience",
        "Cultural journey completion",
        "Enriched perspective on Kashmir"
      ]
    }
  ],

  accommodationDetails: {
    title: "Hotel Plan (4-Star Category)",
    description: "Premium cultural accommodations showcasing Kashmir's hospitality heritage",
    hotels: [
      {
        name: "Four Points by Sheraton / Radisson Srinagar / RK Sarovar",
        type: "4-Star Hotel",
        location: "Srinagar",
        nights: 4,
        amenities: ["Premium rooms", "Multi-cuisine restaurant", "WiFi", "Valley views", "Cultural ambiance", "Room service"]
      },
      {
        name: "Heevan Retreat / Pine Spring / Highlands Park",
        type: "4-Star Alpine Hotel",
        location: "Gulmarg",
        nights: 1,
        amenities: ["Mountain views", "Cozy interiors", "Heating", "Restaurant", "Alpine charm"]
      },
      {
        name: "Pine Spring / Welcome Holiday / Senator Pine-N-Peak Heritage",
        type: "4-Star Heritage Hotel",
        location: "Pahalgam",
        nights: 1,
        amenities: ["Valley views", "Heritage architecture", "Restaurant", "WiFi", "Cultural decor"]
      },
      {
        name: "Peacock Group / Royal Dandoo / Shelter Luxury",
        type: "Luxury Houseboat",
        location: "Dal Lake, Srinagar",
        nights: 1,
        amenities: ["Hand-carved walnut interiors", "Traditional decor", "Private deck", "Authentic experience", "Lake views", "Cultural immersion"]
      }
    ]
  },

  images: [
    "/destinations/kashmir/srinagar/01.jpg",
    "/destinations/kashmir/nishat_bagh/1.jpg",
    "/destinations/kashmir/shalimar_bagh/1.jpg",
    "/destinations/kashmir/dal_lake/1.jpg",
    "/destinations/kashmir/gulmarg/01.jpg",
    "/destinations/kashmir/pahalgam/1.jpg",
    "/destinations/kashmir/srinagar/02.jpg",
    "/destinations/kashmir/gulmarg/09.jpg",
    "/destinations/kashmir/pahalgam/7.jpg"
  ],

  faqs: [
    {
      question: "What makes this tour 'cultural' compared to regular tours?",
      answer: "This tour focuses deeply on Kashmir's living heritage — old city walks, artisan interactions, village life, sacred sites, traditional crafts, and cultural storytelling. You'll spend time with local craftspeople, visit spiritual sites with context, explore village tea houses, and learn about traditions passed down through generations. It's an immersive cultural education, not just sightseeing."
    },
    {
      question: "Will we have expert cultural guides?",
      answer: "Your driver is knowledgeable about local culture, and at key cultural sites like artisan quarters and villages, local experts will provide insights. For deeper experiences, we offer a private cultural guide as an add-on who can provide expert commentary throughout the journey."
    },
    {
      question: "Can we participate in craft-making activities?",
      answer: "Yes! Watching artisans is included, and we offer a hands-on artisan workshop as an add-on where you can try papier-mache painting, walnut carving basics, or learn weaving techniques under master guidance."
    },
    {
      question: "Are religious site visits suitable for all faiths?",
      answer: "Absolutely! This tour celebrates Kashmir's religious diversity and harmony. You'll visit both Islamic (Hazratbal) and Hindu (Shankaracharya) sites with respect and cultural context. All visitors are welcome regardless of faith, with appropriate respectful behavior expected."
    },
    {
      question: "What is the village experience like in Tangmarg?",
      answer: "You'll visit local homes, meet shepherd families, learn about their seasonal lifestyle, sip traditional salt tea, and hear authentic stories. It's an intimate, respectful cultural exchange that provides genuine insights into mountain life."
    },
    {
      question: "Can we purchase authentic crafts from artisans?",
      answer: "Yes! During the artisan quarter visit, you can purchase directly from craftspeople, ensuring authenticity and fair prices. We can also arrange a Pashmina shopping guide (add-on) to help you identify genuine products and navigate the market."
    },
    {
      question: "Is the houseboat stay authentic or touristy?",
      answer: "These are luxury heritage houseboats with hand-carved walnut interiors, traditional Kashmiri decor, and authentic family-run hospitality. While upgraded for comfort, they maintain cultural authenticity and represent true Kashmir houseboat heritage."
    },
    {
      question: "What is traditional Kashmiri food like?",
      answer: "Kashmiri cuisine features rich meat dishes (Rogan Josh, Goshtaba), aromatic rice, traditional breads, kahwa (saffron tea), and unique noon chai (salt tea). We include an authentic Wazwan feast as an add-on — a multi-course ceremonial meal representing Kashmiri culinary heritage."
    },
    {
      question: "Is this tour suitable for photography enthusiasts?",
      answer: "Excellent for cultural photography! You'll have access to old city architecture, artisan workshops, sacred sites, village life, traditional crafts in action, and authentic moments. We offer a heritage photography package add-on with a professional who knows the best cultural shots."
    },
    {
      question: "Can this itinerary be customized for deeper cultural immersion?",
      answer: "Absolutely! We can add Sufi music evenings, cooking classes with local families, extended artisan workshops, visits to more remote villages, or additional spiritual sites. Contact us to tailor the cultural depth to your interests."
    }
  ],

  amenities: [
    { icon: "Award", label: "Cultural Immersion" },
    { icon: "Hotel", label: "4-Star + Luxury Houseboat" },
    { icon: "Utensils", label: "Daily Breakfast & Dinner" },
    { icon: "Car", label: "Private Chauffeur" },
    { icon: "Users", label: "Artisan Interactions" },
    { icon: "Camera", label: "Heritage Experiences" }
  ],

  sustainability: [
    { icon: "Award", title: "Cultural Preservation", description: "Supporting traditional artisans, craftspeople, and keeping centuries-old heritage alive" },
    { icon: "Users", title: "Community Engagement", description: "Direct interactions benefiting local communities, families, and cultural custodians" },
    { icon: "Leaf", title: "Sustainable Heritage Tourism", description: "Responsible cultural tourism that respects traditions while sharing them with visitors" }
  ]
};

// Detailed tour information for Kashmir Adventure 7N8D
export const kashmirAdventure7N8DDetail = {
  id: "kashmir-adventure-7n8d",
  coverImage: "/tour_covers/kashmir-adventure-7n8d.png",
  tourCode: "JRN-KSH-ADV-7N8D",
  title: "Kashmir Adventure",
  subtitle: "7 Nights / 8 Days – Srinagar • Gulmarg • Pahalgam • Sonmarg",
  description: "A thrilling week across Kashmir's adventure belt — from the snowy bowls of Gulmarg to the glacier rivers of Sonmarg and pine trails of Pahalgam. Snow play, gondola rides, short hikes, waterfalls and high valleys make every day active, scenic and unforgettable.",
  price: 699,
  originalPrice: 899,
  discount: 22,
  duration: "7 Nights / 8 Days",
  theme: "adventure",
  groupSize: "2-10 People",
  rating: 4.9,
  reviews: 187,
  category: "Adventure & Nature",
  season: "All Year Round",
  departureTime: "Upon arrival at Srinagar Airport",
  returnTime: "After breakfast on Day 8 from Sonmarg",
  dressCode: "Comfortable adventure gear, waterproof clothing, hiking shoes, warm layers",
  tourType: "Private & Group Adventure Tours",
  language: "English, Hindi with Adventure Guide",
  minAge: 12,
  
  availableDates: [
    "2026-03-12",
    "2026-03-26",
    "2026-04-09",
    "2026-04-23",
    "2026-05-14",
    "2026-05-28",
    "2026-06-11",
    "2026-06-25",
    "2026-07-09",
    "2026-07-23"
  ],

  addons: [
    { id: 1, name: "Adventure Travel Insurance", price: 50, description: "Comprehensive adventure activity coverage" },
    { id: 2, name: "Professional Skiing Lessons", price: 150, description: "Full-day skiing instruction in Gulmarg" },
    { id: 3, name: "White Water Rafting in Sonmarg", price: 80, description: "Exciting Sindh River rafting experience" },
    { id: 4, name: "Paragliding in Pahalgam", price: 120, description: "Tandem paragliding with valley views" },
    { id: 5, name: "Adventure Photography Package", price: 200, description: "Professional action photographer" },
    { id: 6, name: "Trekking Guide for Kolahoi Glacier", price: 180, description: "2-day guided glacier trek from Pahalgam" }
  ],

  highlights: [
    "Gondola Phase 1 & 2 ride to highest cable car point in Asia",
    "ATV or snow bike adventure ride in Gulmarg",
    "Khilanmarg mountain hike with panoramic views",
    "Drung Waterfall spectacular natural wonder",
    "Aru, Betaab, and Chandanwari valley exploration",
    "Sonmarg 'Meadow of Gold' overnight stay",
    "Thajiwas Glacier proximity experience",
    "Sindh River trail adventures",
    "Multiple snow play and activity opportunities",
    "Private Shikara ride on Dal Lake",
    "Mughal Gardens cultural visit",
    "Premium adventure lodges and hotels"
  ],

  inclusions: [
    "7 nights accommodation in premium hotels and adventure lodges",
    "Daily breakfast and dinner",
    "Airport transfers (arrival and departure)",
    "Private car for entire 8-day journey",
    "Gondola tickets for Phase 1 & Phase 2 in Gulmarg",
    "1-hour Shikara ride on Dal Lake",
    "ATV or snow bike ride in Gulmarg",
    "Local taxis in Gulmarg and Pahalgam for valley exploration",
    "Driver allowance, fuel, tolls, and parking",
    "All applicable taxes"
  ],

  exclusions: [
    "Entry fees to gardens and monuments",
    "Lunches during the tour",
    "Skiing equipment and lessons",
    "White water rafting in Sonmarg",
    "Pony rides to Thajiwas Glacier",
    "Snowmobile and advanced snow activities",
    "Paragliding and advanced trekking",
    "Personal expenses, shopping, tips, and laundry",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ],

  itinerary: [
    {
      day: 1,
      title: "Srinagar Arrival - Adventure Begins",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Arrive in Srinagar Airport where your adventure journey begins. Meet your driver and transfer to your lakeside hotel. After check-in and rest, enjoy free time to explore Boulevard Road or simply relax by Dal Lake, soaking in the mountain views and preparing for the exciting week ahead. Evening at leisure. Dinner and overnight in Srinagar.",
      activities: [
        "Airport pickup",
        "Hotel check-in near Dal Lake",
        "Optional Boulevard Road walk",
        "Lake views and mountain sighting",
        "Trip briefing and preparation",
        "Welcome dinner"
      ],
      meals: ["Dinner"],
      accommodation: "Premium Hotel in Srinagar",
      highlights: [
        "First views of Dal Lake",
        "Mountain air and preparation",
        "Adventure anticipation"
      ]
    },
    {
      day: 2,
      title: "Srinagar Mughal Gardens & Shikara Adventure",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "Start with visits to Srinagar's iconic Mughal Gardens - Nishat Bagh (Garden of Bliss) and Shalimar Bagh (Abode of Love), showcasing centuries-old landscaping and architecture. Visit the hilltop Pari Mahal for panoramic valley views. In the evening, enjoy a private 1-hour Shikara ride on Dal Lake, gliding through floating gardens and past traditional houseboats - a peaceful prelude to the adventure days ahead. Dinner and overnight in Srinagar.",
      activities: [
        "Visit Nishat Bagh Mughal Garden",
        "Explore Shalimar Bagh",
        "Pari Mahal hilltop views",
        "Private 1-hour Shikara ride",
        "Floating gardens exploration",
        "Dal Lake photography",
        "Evening leisure"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Premium Hotel in Srinagar",
      highlights: [
        "Mughal architectural wonders",
        "Hilltop panoramic views",
        "Peaceful Shikara experience"
      ]
    },
    {
      day: 3,
      title: "Srinagar to Gulmarg - Snow Adventure Begins",
      location: "Gulmarg (52 km, 2 hours)",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
      description: "Drive through scenic pine forests to Gulmarg, the 'Meadow of Flowers' and Asia's premier adventure destination. Check into your mountain lodge and gear up for the main attraction - the Gulmarg Gondola. Ride both Phase 1 and Phase 2 (included), ascending to 13,780 feet for breathtaking snowfield views and access to high-altitude adventure terrain. Experience the thrill of being at one of the world's highest cable car points with 360-degree Himalayan panoramas. Optional skiing or sledging activities available (own cost). Dinner and overnight in Gulmarg.",
      activities: [
        "Scenic drive to Gulmarg",
        "Mountain lodge check-in",
        "Gondola Phase 1 ride",
        "Gondola Phase 2 to highest point",
        "High-altitude snow exploration",
        "Panoramic mountain photography",
        "Optional: Skiing, sledging",
        "Snow play and activities"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Adventure Lodge in Gulmarg",
      highlights: [
        "Asia's highest cable car experience",
        "13,780 feet altitude thrill",
        "Himalayan panoramic views"
      ]
    },
    {
      day: 4,
      title: "Gulmarg Adventure Day - Full Exploration",
      location: "Gulmarg",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "Today is dedicated to adventure activities in Gulmarg! Start with your included ATV or snow bike ride across the snowy meadows - an exhilarating experience through winter wonderland. Embark on a guided hike to Khilanmarg, offering stunning views of Nanga Parbat and the valley below. The moderate trek takes about 2-3 hours and rewards with pristine mountain scenery. Alternatively, spend time with optional snow activity sessions like snowboarding, skiing lessons, or snow tubing. Relax at your resort in the evening, sharing adventure stories. Dinner and overnight in Gulmarg.",
      activities: [
        "ATV or snow bike adventure ride (included)",
        "Khilanmarg mountain hike",
        "Nanga Parbat views",
        "Alpine meadow exploration",
        "Optional: Skiing, snowboarding",
        "Optional: Snow tubing, sledging",
        "Mountain photography",
        "Evening relaxation at lodge"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Adventure Lodge in Gulmarg",
      highlights: [
        "ATV/snow bike adrenaline rush",
        "Khilanmarg hiking adventure",
        "Full day of snow activities"
      ]
    },
    {
      day: 5,
      title: "Gulmarg to Pahalgam via Drung Waterfall",
      location: "Gulmarg to Pahalgam (140 km, 4 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Depart Gulmarg after breakfast and journey to the mesmerizing Drung Waterfall - one of Kashmir's most spectacular natural wonders. Watch as icy water cascades dramatically over rock formations, creating a stunning display (often frozen into beautiful ice sculptures in winter). Perfect for photography and nature appreciation. Continue the scenic drive to Pahalgam, the 'Valley of Shepherds', nestled along the Lidder River. Check into your mountain-view hotel and enjoy the peaceful riverside atmosphere. Evening at leisure to explore the local market. Dinner and overnight in Pahalgam.",
      activities: [
        "Scenic mountain drive",
        "Drung Waterfall visit and photography",
        "Natural wonder exploration",
        "Ice formations viewing (seasonal)",
        "Drive along Lidder River valley",
        "Pahalgam hotel check-in",
        "Riverside walk",
        "Local market exploration",
        "Evening leisure"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Mountain-View Hotel in Pahalgam",
      highlights: [
        "Drung Waterfall spectacle",
        "Scenic Kashmir countryside",
        "Riverside mountain town arrival"
      ]
    },
    {
      day: 6,
      title: "Pahalgam Valley Adventure Day",
      location: "Pahalgam - Aru, Betaab, Chandanwari",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
      description: "Today, explore three stunning valleys of Pahalgam using local taxis (included). Start with Aru Valley, a pristine meadow surrounded by mountains - perfect for short hikes and nature photography. Continue to Betaab Valley, named after a Bollywood film and famous for its lush greenery, flowing streams, and picturesque landscapes. Finally, visit Chandanwari, the starting point of Amarnath Yatra, featuring glacier streams and seasonal snow patches. Each valley offers unique adventure opportunities. Optional activities include trekking to higher points, pony rides, or seasonal paragliding (own cost). Evening return to hotel. Dinner and overnight in Pahalgam.",
      activities: [
        "Local taxi to valley exploration",
        "Aru Valley meadow hiking",
        "Nature photography",
        "Betaab Valley scenic exploration",
        "Stream crossing and nature trails",
        "Chandanwari glacier stream visit",
        "Optional: Extended trekking",
        "Optional: Paragliding (seasonal)",
        "Optional: Pony rides",
        "Evening return and relaxation"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Mountain-View Hotel in Pahalgam",
      highlights: [
        "Three beautiful valley exploration",
        "Glacier stream adventure",
        "Multiple hiking opportunities"
      ]
    },
    {
      day: 7,
      title: "Pahalgam to Sonmarg - Meadow of Gold Adventure",
      location: "Sonmarg (170 km, 5 hours via Srinagar)",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "Journey to Sonmarg, the spectacular 'Meadow of Gold', located at 2,800m altitude and gateway to Ladakh. The scenic drive passes through diverse landscapes. Upon arrival, check into your hotel and immediately feel the adventure atmosphere. Explore riverside trails along the roaring Sindh River. Visit nearby snowfields and meadows carpeted with wildflowers (seasonal). Optional activities include pony rides to Thajiwas Glacier (own cost) or white water rafting on the Sindh River (add-on available). The high-altitude setting and proximity to glaciers create an adventurous ambiance. Dinner and overnight in Sonmarg.",
      activities: [
        "Scenic drive to Sonmarg",
        "High-altitude mountain arrival",
        "Hotel check-in",
        "Sindh River trail exploration",
        "Alpine meadow walks",
        "Snowfield viewing",
        "Optional: Pony ride to Thajiwas Glacier",
        "Optional: White water rafting",
        "Mountain photography",
        "Evening at high altitude"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Mountain Hotel in Sonmarg",
      highlights: [
        "High-altitude meadow exploration",
        "Thajiwas Glacier proximity",
        "Sindh River adventure trails"
      ]
    },
    {
      day: 8,
      title: "Sonmarg to Srinagar - Departure with Memories",
      location: "Sonmarg to Srinagar Airport (80 km, 2.5 hours)",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "After breakfast with mountain views, check out from your Sonmarg hotel and begin the scenic drive back to Srinagar Airport. The journey offers final glimpses of Kashmir's stunning landscapes - mountain passes, pine forests, rivers, and valleys that have defined your adventure week. Reflect on the incredible experiences - from Gondola heights and ATV rides to waterfall wonders, valley explorations, and high-altitude meadows. Arrive at the airport with a heart full of adventure memories and a camera full of stunning photographs. Departure with unforgettable Kashmir adventure memories.",
      activities: [
        "Breakfast with mountain views",
        "Hotel check-out",
        "Scenic drive back to Srinagar",
        "Final Kashmir landscape views",
        "Mountain pass photography",
        "Reflection on adventure week",
        "Airport arrival and departure"
      ],
      meals: ["Breakfast"],
      accommodation: "N/A",
      highlights: [
        "Final mountain vistas",
        "Week of adventure completed",
        "Memories to last forever"
      ]
    }
  ],

  accommodationDetails: {
    title: "Stay Plan - Premium Adventure Accommodations",
    description: "Carefully selected hotels and lodges for adventurers",
    hotels: [
      {
        name: "Premium Lakeside Hotel",
        type: "Premium Hotel",
        location: "Srinagar",
        nights: 2,
        amenities: ["Lake views", "Restaurant", "WiFi", "Comfortable rooms", "Room service"]
      },
      {
        name: "Mountain Adventure Lodge",
        type: "Adventure Lodge",
        location: "Gulmarg",
        nights: 2,
        amenities: ["Mountain views", "Heating", "Restaurant", "Adventure equipment storage", "Drying facilities"]
      },
      {
        name: "Riverside Mountain Hotel",
        type: "Mountain Hotel",
        location: "Pahalgam",
        nights: 2,
        amenities: ["Valley views", "Lidder River proximity", "Restaurant", "WiFi", "Adventure gear friendly"]
      },
      {
        name: "High-Altitude Mountain Hotel",
        type: "Mountain Hotel",
        location: "Sonmarg",
        nights: 1,
        amenities: ["Alpine views", "Basic comfort", "Restaurant", "Heating", "Glacier proximity"]
      }
    ]
  },

  images: [
    "/destinations/kashmir/gulmarg/01.jpg",
    "/destinations/kashmir/sonamarg/1.jpg",
    "/destinations/kashmir/pahalgam/1.jpg",
    "/destinations/kashmir/doodpathri/1.jpg",
    "/destinations/kashmir/gulmarg/02.jpg",
    "/destinations/kashmir/sonamarg/2.jpg",
    "/destinations/kashmir/pahalgam/3.jpg",
    "/destinations/kashmir/doodpathri/2.jpg",
    "/destinations/kashmir/srinagar/01.jpg"
  ],

  faqs: [
    {
      question: "What level of fitness is required for this tour?",
      answer: "Moderate fitness level is recommended. You should be comfortable with 2-3 hour hikes, altitude changes (up to 13,780 feet), and full days of outdoor activities. Most activities are optional, so you can adjust based on your comfort level."
    },
    {
      question: "Are Gondola Phase 1 and 2 both included?",
      answer: "Yes! Both Phase 1 and Phase 2 Gondola tickets are included in the package, taking you to the highest accessible point at 13,780 feet for spectacular Himalayan views."
    },
    {
      question: "What adventure activities are included vs optional?",
      answer: "Included: Gondola Phase 1 & 2, ATV/snow bike ride, Shikara ride, valley exploration with local taxis. Optional (own cost): Skiing, snowboarding, paragliding, white water rafting, pony rides, snowmobile, advanced trekking."
    },
    {
      question: "Is skiing equipment provided?",
      answer: "Skiing equipment and lessons are not included. You can rent equipment and hire instructors in Gulmarg at additional cost. We can arrange this through our local partners if requested in advance."
    },
    {
      question: "Can beginners do this adventure tour?",
      answer: "Yes! Most included activities are beginner-friendly. The gondola, ATV ride, valley exploration, and hikes are accessible to those without prior adventure experience. Optional advanced activities are available for experienced adventurers."
    },
    {
      question: "What should I pack for this adventure tour?",
      answer: "Essential: Warm layers, waterproof jacket, hiking shoes, gloves, sunglasses, sunscreen (high SPF for altitude), camera, personal medications. Winter (Dec-Mar): Heavy woolens, snow boots, thermal wear. Summer: Light layers, rain gear."
    },
    {
      question: "When is the Drung Waterfall frozen?",
      answer: "Drung Waterfall typically freezes from December to March, creating spectacular ice formations. During other months, it's a powerful waterfall with cascading water - beautiful year-round but especially dramatic when frozen."
    },
    {
      question: "Can we add white water rafting in Sonmarg?",
      answer: "Yes! White water rafting on the Sindh River in Sonmarg is available as an add-on (₹80 per person). It's a thrilling experience through glacier-fed rapids. Subject to seasonal water levels and weather conditions."
    },
    {
      question: "Is altitude sickness a concern?",
      answer: "You'll reach 13,780 feet at Gondola Phase 2 and stay at 2,800m in Sonmarg. Mild symptoms like slight breathlessness are normal. Stay hydrated, avoid alcohol, and ascend gradually. If you have concerns, consult your doctor before booking."
    },
    {
      question: "Can this tour be customized with more adventure activities?",
      answer: "Absolutely! We can add professional skiing lessons, multi-day treks (like Kolahoi Glacier), paragliding sessions, extended rafting, or camping experiences. Contact us to create your ultimate Kashmir adventure itinerary."
    }
  ],

  amenities: [
    { icon: "Award", label: "Adventure Activities Included" },
    { icon: "Hotel", label: "Premium Adventure Lodges" },
    { icon: "Utensils", label: "Daily Breakfast & Dinner" },
    { icon: "Car", label: "Private Vehicle" },
    { icon: "Camera", label: "Gondola Phase 1 & 2" },
    { icon: "Users", label: "ATV/Snow Bike Included" }
  ],

  sustainability: [
    { icon: "Leaf", title: "Eco-Adventure", description: "Promoting responsible adventure tourism with minimal environmental impact" },
    { icon: "Award", title: "Local Adventure Guides", description: "Supporting local adventure professionals and mountain communities" },
    { icon: "Users", title: "Sustainable Thrill", description: "Balancing adventure experiences with nature conservation and respect for local ecosystems" }
  ]
};

// Detailed tour information for Kashmir Honeymoon 5N6D 3-Star (Srinagar Base)
export const kashmirHoneymoon5N6D3StarDetail = {
  id: "kashmir-honeymoon-5n6d-3star",
  coverImage: "/tour_covers/kashmir-honeymoon-5n6d-3star.png",
  tourCode: "JRN-KSH-HM-5N6D-3S",
  title: "Kashmir Honeymoon - Budget Romance",
  subtitle: "5 Nights / 6 Days – Srinagar Base with Day Trips",
  description: "This 6-day Kashmir honeymoon begins with your arrival in Srinagar, where you relax at a hotel or houseboat and enjoy an evening by Dal Lake. Over the next days, explore the city's Mughal Gardens, glide across Dal Lake on a Shikara, and take romantic day trips to Gulmarg, Sonmarg, and Pahalgam. Each evening, return to Srinagar for dinner and overnight stay, with a special candlelight dinner included. Perfect for couples seeking an affordable yet memorable Kashmir honeymoon.",
  price: 389,
  originalPrice: 499,
  discount: 22,
  duration: "5 Nights / 6 Days",
  theme: "honeymoon",
  groupSize: "2 People (Couple)",
  rating: 4.7,
  reviews: 124,
  category: "Budget Honeymoon",
  season: "All Year Round",
  departureTime: "Upon arrival at Srinagar Airport",
  returnTime: "After breakfast on Day 6",
  dressCode: "Comfortable romantic attire, warm layers for mountain trips",
  tourType: "Private Budget Honeymoon Package",
  language: "English, Hindi, Urdu",
  minAge: 18,
  
  availableDates: [
    "2026-02-14",
    "2026-03-01",
    "2026-03-15",
    "2026-04-01",
    "2026-04-15",
    "2026-05-01",
    "2026-05-15",
    "2026-06-01",
    "2026-06-15",
    "2026-07-01"
  ],

  addons: [
    { id: 1, name: "Gondola Cable Car Ride", price: 40, description: "Gulmarg Gondola Phase 1 tickets for couple" },
    { id: 2, name: "Houseboat Upgrade", price: 60, description: "Upgrade to deluxe houseboat for all nights" },
    { id: 3, name: "Pahalgam Valley Union Taxi", price: 30, description: "Local taxi for Betaab, Aru, Chandanwari" },
    { id: 4, name: "Extra Candlelight Dinner", price: 50, description: "Additional romantic dinner setup" },
    { id: 5, name: "Romantic Cake & Flowers", price: 40, description: "Surprise room decoration with cake" },
    { id: 6, name: "Couple Photography", price: 100, description: "Half-day professional photographer" }
  ],

  highlights: [
    "Budget-friendly honeymoon without compromising romance",
    "All 5 nights in Srinagar (hotel or houseboat option)",
    "Romantic candlelight dinner included",
    "Private 1-hour Shikara ride on Dal Lake",
    "Day trip to Gulmarg - Meadow of Flowers",
    "Day trip to Sonmarg - Meadow of Gold",
    "Day trip to Pahalgam - Valley of Shepherds",
    "Mughal Gardens and Pari Mahal exploration",
    "MAP basis (Breakfast + Lunch or Dinner daily)",
    "Private cab for all transfers and day trips",
    "Mineral water provided",
    "No hotel changes - comfortable Srinagar base"
  ],

  inclusions: [
    "5 nights accommodation in 3-star hotel (Hotel Snow Bliss Rajbagh or similar)",
    "Alternative: 5 nights in houseboat (Humayun Palace or similar)",
    "MAP basis - Room + Breakfast + Lunch/Dinner daily",
    "Private cab for all transfers and day trips",
    "Airport pickup and drop",
    "Romantic candlelight dinner (once during stay)",
    "1-hour private Shikara ride on Dal Lake",
    "Mineral water bottles",
    "Driver allowances, fuel, toll taxes, parking",
    "All applicable taxes"
  ],

  exclusions: [
    "Airfare or train tickets to/from Srinagar",
    "Gondola cable car ride in Gulmarg",
    "Union taxis for sightseeing in Gulmarg, Pahalgam, Sonmarg",
    "Local taxi for valley visits in Pahalgam (Betaab, Aru, etc.)",
    "Pony rides, water rafting, adventure activities",
    "Entry fees to gardens and monuments",
    "Personal expenses - tips, laundry, shopping",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Srinagar - Romantic Beginning",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Arrive in Srinagar and receive a warm welcome before being transferred to your 3-star hotel (Hotel Snow Bliss Rajbagh or similar) or traditional houseboat (Humayun Palace or similar). After check-in, relax and soak in the serene surroundings of Dal Lake. In the evening, enjoy a gentle romantic walk along Dal Lake or the nearby boulevard, taking in the views of the mountains and shimmering waters. Watch the sunset together as the sky paints the mountains in golden hues. Return to your hotel/houseboat for dinner and a comfortable overnight stay in Srinagar.",
      activities: [
        "Airport arrival and warm welcome",
        "Transfer to 3-star hotel or houseboat",
        "Honeymoon room/houseboat check-in",
        "Relaxation and settling in",
        "Evening walk along Dal Lake",
        "Boulevard Road romantic stroll",
        "Sunset viewing together",
        "Welcome dinner"
      ],
      meals: ["Dinner"],
      accommodation: "3-Star Hotel or Houseboat in Srinagar",
      highlights: [
        "First romantic evening in Kashmir",
        "Dal Lake sunset views",
        "Peaceful houseboat or hotel ambiance"
      ]
    },
    {
      day: 2,
      title: "Srinagar Local Sightseeing & Shikara Romance",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "After breakfast, begin your local sightseeing tour of Srinagar with visits to the famous Mughal Gardens – Shalimar Bagh (Abode of Love) and Nishat Garden (Garden of Bliss), beautifully laid out against the Zabarwan hills. These historic gardens with terraced lawns and fountains create perfect romantic backdrops. Continue to Pari Mahal, the 'Palace of Fairies', offering panoramic views of the city and Dal Lake - ideal for couple photographs. In the afternoon, enjoy a relaxing 1-hour private Shikara ride on Dal Lake, passing floating gardens and traditional houseboats. Let the gentle rowing create intimate moments as you glide across the mirror-like water. Spend the evening at leisure, strolling along the lakefront. Return to the hotel for dinner and overnight stay in Srinagar.",
      activities: [
        "Visit Shalimar Bagh (Abode of Love)",
        "Explore Nishat Garden (Garden of Bliss)",
        "Pari Mahal Palace visit with lake views",
        "Couple photography at gardens",
        "Private 1-hour Shikara ride (included)",
        "Floating gardens and houseboat views",
        "Evening lakefront walk",
        "Romantic dinner"
      ],
      meals: ["Breakfast", "Lunch or Dinner"],
      accommodation: "3-Star Hotel or Houseboat in Srinagar",
      highlights: [
        "Mughal Gardens romantic exploration",
        "Pari Mahal panoramic views",
        "Private Shikara ride for two"
      ]
    },
    {
      day: 3,
      title: "Gulmarg Day Trip - Meadow Romance",
      location: "Gulmarg Day Trip (52 km, 2 hours each way)",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "After an early breakfast, proceed for a full-day romantic excursion to Gulmarg, a picturesque hill station known for its rolling meadows and snow-covered mountains. The scenic drive through pine forests sets a romantic mood. On arrival, enjoy the scenic beauty and take a walk through the lush green landscapes hand-in-hand. You may opt for the famous Gondola cable car ride (optional, not included) for stunning views of the surrounding peaks - a thrilling experience to share together. Spend time exploring the meadows, having a romantic picnic, or enjoying snow activities if seasonal. The crisp mountain air and stunning vistas create perfect honeymoon moments. In the evening, return to Srinagar for dinner and overnight stay.",
      activities: [
        "Scenic drive to Gulmarg",
        "Meadow of Flowers exploration",
        "Romantic walks in alpine setting",
        "Optional: Gondola cable car ride",
        "Optional: Snow activities (seasonal)",
        "Mountain photography together",
        "Couple time in nature",
        "Return drive to Srinagar",
        "Evening at hotel"
      ],
      meals: ["Breakfast", "Lunch or Dinner"],
      accommodation: "3-Star Hotel or Houseboat in Srinagar",
      highlights: [
        "Alpine meadow romance",
        "Snow-covered mountain views",
        "Optional Gondola experience"
      ]
    },
    {
      day: 4,
      title: "Sonmarg Day Trip - Golden Meadow Beauty",
      location: "Sonmarg Day Trip (80 km, 2.5 hours each way)",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "After breakfast, depart for a full-day excursion to Sonmarg, known as the 'Meadow of Gold', surrounded by snow-capped peaks and alpine scenery. The drive through scenic landscapes offers countless photo opportunities. On arrival, enjoy the breathtaking views and take a leisurely walk along the Sindh River - the sound of rushing glacial water creates a romantic ambiance. The high-altitude meadows covered in wildflowers (seasonal) provide stunning natural beauty. You may opt for a pony ride or visit Thajiwas Glacier (optional, at extra cost) for adventure together. Spend quality time soaking in the natural beauty, having a picnic lunch, and creating memories in this pristine environment. Return to Srinagar in the evening for dinner and overnight stay.",
      activities: [
        "Scenic mountain drive to Sonmarg",
        "Meadow of Gold exploration",
        "Romantic walk along Sindh River",
        "Glacier views and photography",
        "Optional: Pony ride to Thajiwas Glacier",
        "High-altitude meadow picnic",
        "Quality couple time",
        "Return drive to Srinagar",
        "Evening relaxation"
      ],
      meals: ["Breakfast", "Lunch or Dinner"],
      accommodation: "3-Star Hotel or Houseboat in Srinagar",
      highlights: [
        "Meadow of Gold romance",
        "Glacial river beauty",
        "Optional glacier proximity"
      ]
    },
    {
      day: 5,
      title: "Pahalgam Day Trip - Valley of Shepherds",
      location: "Pahalgam Day Trip (95 km, 2.5 hours each way)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Start early in the morning and drive to Pahalgam, the 'Valley of Shepherds', surrounded by lush pine forests and snow-capped mountains. The journey through saffron fields and scenic countryside is beautiful. Upon arrival, enjoy a leisurely romantic walk along the Lidder River, listening to the soothing sound of flowing water. Explore the green meadows perfect for couple moments and photography. You may opt for pony rides to nearby scenic spots or visit local attractions like Betaab Valley (famous Bollywood location) or Aru Valley (optional, local taxi required). The pristine natural beauty and peaceful atmosphere make this day special. After a full day of sightseeing and nature immersion, return to Srinagar for your romantic candlelight dinner (included tonight!) and overnight stay.",
      activities: [
        "Scenic drive to Pahalgam",
        "Lidder River romantic walks",
        "Pine forest and meadow exploration",
        "Optional: Visit Betaab Valley",
        "Optional: Explore Aru Valley",
        "Optional: Pony rides together",
        "Nature photography",
        "Return to Srinagar",
        "Special Candlelight Dinner (included)",
        "Romantic evening"
      ],
      meals: ["Breakfast", "Candlelight Dinner"],
      accommodation: "3-Star Hotel or Houseboat in Srinagar",
      highlights: [
        "Valley of Shepherds beauty",
        "Lidder River romance",
        "Special candlelight dinner"
      ]
    },
    {
      day: 6,
      title: "Departure from Srinagar - Beautiful Memories",
      location: "Srinagar to Airport",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "After breakfast at the hotel or houseboat, complete your check-out formalities. Take some final moments to soak in the Dal Lake views and the peaceful Kashmir morning. Proceed to Srinagar Airport for your onward journey with your private cab. Bid farewell to the scenic valleys, serene landscapes, and romantic experiences of Kashmir, carrying back beautiful honeymoon memories, countless photographs, and a strengthened bond to cherish forever.",
      activities: [
        "Leisure breakfast",
        "Final Dal Lake views",
        "Hotel/houseboat check-out",
        "Last-minute shopping (optional)",
        "Private transfer to airport",
        "Departure with memories"
      ],
      meals: ["Breakfast"],
      accommodation: "N/A",
      highlights: [
        "Final Kashmir morning",
        "Honeymoon memories created",
        "Romantic journey completed"
      ]
    }
  ],

  accommodationDetails: {
    title: "3-Star Accommodation Options",
    description: "Choose between hotel or traditional houseboat for your entire stay",
    hotels: [
      {
        name: "Hotel Snow Bliss Rajbagh or Similar",
        type: "3-Star Hotel",
        location: "Srinagar",
        nights: 5,
        amenities: ["Comfortable honeymoon rooms", "Dal Lake proximity", "Restaurant", "WiFi", "Room service", "Heating"]
      },
      {
        name: "Houseboat Humayun Palace or Similar",
        type: "3-Star Houseboat",
        location: "Dal Lake, Srinagar",
        nights: 5,
        amenities: ["Traditional Kashmiri decor", "Private houseboat experience", "Lake views", "Authentic ambiance", "Peaceful setting"]
      }
    ]
  },

  images: [
    "/destinations/kashmir/dal_lake/1.jpg",
    "/destinations/kashmir/srinagar/01.jpg",
    "/destinations/kashmir/gulmarg/01.jpg",
    "/destinations/kashmir/pahalgam/1.jpg",
    "/destinations/kashmir/nishat_bagh/1.jpg",
    "/destinations/kashmir/srinagar/03.jpg",
    "/destinations/kashmir/gulmarg/03.jpg",
    "/destinations/kashmir/pahalgam/4.jpg",
    "/destinations/kashmir/shalimar_bagh/1.jpg"
  ],

  faqs: [
    {
      question: "Why is this honeymoon package more affordable?",
      answer: "This budget-friendly package stays in Srinagar throughout (no hotel changes), uses 3-star accommodations, and takes day trips to Gulmarg, Sonmarg, and Pahalgam instead of overnight stays. This reduces costs while still covering all major attractions, making it perfect for couples on a budget."
    },
    {
      question: "Can we choose to stay in a houseboat for all 5 nights?",
      answer: "Yes! You can opt for either a 3-star hotel (Hotel Snow Bliss or similar) or a traditional houseboat (Humayun Palace or similar) for all 5 nights. Please mention your preference during booking."
    },
    {
      question: "What does MAP basis mean?",
      answer: "MAP stands for Modified American Plan, meaning you'll receive Room + Breakfast + one main meal (either Lunch or Dinner) daily. This gives you flexibility while ensuring you're well-fed throughout your honeymoon."
    },
    {
      question: "Is the candlelight dinner included?",
      answer: "Yes! One romantic candlelight dinner is included in the package, typically arranged on Day 5 after your Pahalgam trip. Additional candlelight dinners can be arranged at extra cost."
    },
    {
      question: "Why isn't the Gondola ride included?",
      answer: "To keep the package budget-friendly, the Gondola cable car ride in Gulmarg is optional. It costs approximately ₹800-1,250 per person and can be purchased on-site if you wish to experience it."
    },
    {
      question: "Do we need union taxis in Pahalgam?",
      answer: "If you want to visit Betaab Valley, Aru Valley, or Chandanwari in Pahalgam, local union taxis are required (₹2,500-3,500 for all valleys). This is not included to keep the base package affordable, but we highly recommend it for the full experience."
    },
    {
      question: "How long are the day trips?",
      answer: "Each day trip is approximately 8-10 hours including travel time. Gulmarg (4 hours round trip), Sonmarg (5 hours round trip), and Pahalgam (5 hours round trip). You'll have 3-4 hours at each destination for sightseeing."
    },
    {
      question: "Can we extend the stay?",
      answer: "Yes! You can add extra nights in Srinagar or upgrade to include overnight stays in Gulmarg or Pahalgam. Contact us to customize your honeymoon duration and itinerary."
    },
    {
      question: "Is this suitable for a winter honeymoon?",
      answer: "Absolutely! Kashmir is beautiful in winter (December-March) with snow-covered landscapes. Gulmarg becomes a winter wonderland. Just pack warm clothing, and be prepared for cold temperatures and possible road closures to Sonmarg."
    },
    {
      question: "What's the difference between this and the 6D5N honeymoon package?",
      answer: "The other 6D5N package includes overnight stays in Gulmarg and Pahalgam with more time at each location, higher-end hotels, and more inclusions. This package is more budget-conscious, staying in Srinagar throughout with day trips, making it more affordable while still covering all major destinations."
    }
  ],

  amenities: [
    { icon: "Heart", label: "Budget Honeymoon Special" },
    { icon: "Hotel", label: "3-Star Hotel/Houseboat" },
    { icon: "Utensils", label: "MAP - Breakfast + Meal" },
    { icon: "Car", label: "Private Cab Included" },
    { icon: "Camera", label: "Shikara Ride Included" },
    { icon: "Award", label: "Candlelight Dinner" }
  ],

  sustainability: [
    { icon: "Heart", title: "Affordable Romance", description: "Making Kashmir honeymoons accessible to all couples while maintaining quality experiences" },
    { icon: "Award", title: "Local Business Support", description: "Supporting local hotels, houseboats, and family-run establishments" },
    { icon: "Leaf", title: "Sustainable Tourism", description: "Day-trip model reduces environmental impact while supporting multiple communities" }
  ]
};

// Detailed tour information for Gurez Valley Escape 7N8D 3-Star
export const gurezValley7N8D3StarDetail = {
  id: "gurez-valley-7n8d-3star",
  coverImage: "/tour_covers/gurez-valley-7n8d-3star.png",
  tourCode: "JRN-GRZ-7N8D-3S",
  title: "Gurez Valley Escape - Untouched Frontier",
  subtitle: "7 Nights / 8 Days – Srinagar • Gurez Valley",
  description: "A slow-paced, scenic Himalayan escape into Kashmir's most untouched frontier — Gurez Valley. Cross the dramatic Razdan Pass at 11,672 feet, stay beside the turquoise Kishanganga River, walk to ancient villages like Tulail and Dawar, and meet the warm Dard Shina community. This is raw Himalayan beauty with starry skies, wooden houses, terraced fields, and quiet evenings by the river. Perfect for nature lovers, photographers, and travelers seeking authentic mountain experiences far from tourist crowds.",
  price: 549,
  originalPrice: 699,
  discount: 21,
  duration: "7 Nights / 8 Days",
  theme: "adventure",
  groupSize: "2-8 People",
  rating: 4.8,
  reviews: 67,
  category: "Adventure & Cultural",
  season: "May to October (Gurez accessible)",
  departureTime: "Upon arrival at Srinagar Airport",
  returnTime: "After breakfast on Day 8",
  dressCode: "Comfortable outdoor clothing, warm layers, sturdy walking shoes",
  tourType: "Off-Beat Adventure & Cultural Immersion",
  language: "English, Hindi, Urdu, Basic Shina",
  minAge: 12,
  
  availableDates: [
    "2026-05-15",
    "2026-06-01",
    "2026-06-15",
    "2026-07-01",
    "2026-07-15",
    "2026-08-01",
    "2026-08-15",
    "2026-09-01",
    "2026-09-15",
    "2026-10-01"
  ],

  addons: [
    { id: 1, name: "Local Guide in Gurez", price: 80, description: "Experienced Dard Shina guide for cultural insights" },
    { id: 2, name: "Photography Tour", price: 120, description: "Professional photographer for landscape & village shoots" },
    { id: 3, name: "Camping Night", price: 70, description: "One night camping beside Kishanganga River" },
    { id: 4, name: "Village Homestay", price: 50, description: "Replace one guesthouse night with local family stay" },
    { id: 5, name: "Pony Ride to Chakwali", price: 40, description: "Pony excursion to border hamlet" },
    { id: 6, name: "Cultural Performance", price: 60, description: "Traditional Dard Shina music & dance evening" }
  ],

  highlights: [
    "Cross the dramatic Razdan Pass (11,672 ft) with panoramic views",
    "4 nights stay in remote Gurez Valley beside Kishanganga River",
    "Explore Dawar town and Habba Khatoon Peak viewpoint",
    "Full-day excursion to Tulail Valley and frontier villages",
    "Meet the warm Dard Shina community and learn their culture",
    "Walk along Kishanganga River with snow-capped peaks backdrop",
    "Visit ancient villages, wooden bridges, terraced farmlands",
    "Starry night skies far from light pollution",
    "Srinagar Mughal Gardens and 1-hour Shikara ride on Dal Lake",
    "Boutique guesthouses in Gurez with local hospitality",
    "Inner-Line Permits arranged for restricted border areas",
    "Perfect for photographers and nature enthusiasts"
  ],

  inclusions: [
    "3 nights accommodation in 3-star hotel in Srinagar (Star of Kashmir / Royal Heritage / Grand Habib or similar)",
    "4 nights accommodation in best available boutique guesthouse/cottage in Gurez (Dawar/Tulail region)",
    "Daily breakfast and dinner throughout the tour",
    "Private cab for entire trip including Srinagar-Gurez-Srinagar transfers",
    "1-hour Shikara ride on Dal Lake",
    "All road tolls, parking fees, fuel charges",
    "Driver allowances and accommodation",
    "Inner-Line Permits for Gurez Valley (as required by authorities)",
    "All applicable taxes and GST"
  ],

  exclusions: [
    "Airfare or train tickets to/from Srinagar",
    "Lunch meals, tea, snacks, and beverages",
    "Entry tickets to monuments and gardens",
    "Pony rides or jeep hire to off-road spots in Gurez",
    "Adventure activities (rafting, ATV, trekking beyond basic walks)",
    "Local guide services in Gurez (available as addon)",
    "Personal expenses - shopping, laundry, tips",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Srinagar & Lake Walk",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Arrive at Srinagar Airport where your chauffeur will warmly welcome you. Transfer to your comfortable 3-star hotel (Star of Kashmir, Royal Heritage, Grand Habib, or similar) and complete check-in formalities. After settling in, take a calm evening walk along Dal Lake's scenic promenade, watching the shikaras glide across the water and houseboats reflecting in the golden sunset light. You may explore the Old City market nearby for a taste of local life, handicrafts, and Kashmiri kahwa. This evening is all about acclimatization and relaxation before your journey into the remote Gurez Valley begins. Enjoy a traditional Kashmiri dinner at the hotel and overnight stay in Srinagar.",
      activities: [
        "Airport arrival and warm welcome",
        "Transfer to 3-star hotel in Srinagar",
        "Check-in and room allocation",
        "Evening walk along Dal Lake promenade",
        "Boulevard Road exploration",
        "Old City market visit (optional)",
        "Traditional Kashmiri dinner",
        "Overnight rest and acclimatization"
      ],
      meals: ["Dinner"],
      accommodation: "3-Star Hotel in Srinagar",
      highlights: [
        "First glimpse of Dal Lake beauty",
        "Peaceful Srinagar evening atmosphere",
        "Preparation for Gurez adventure"
      ]
    },
    {
      day: 2,
      title: "Mughal Gardens & Shikara Ride",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "After a leisurely breakfast, embark on a sightseeing tour of Srinagar's famous Mughal Gardens, built by emperors as symbols of paradise on earth. Visit Nishat Bagh (Garden of Bliss) with its twelve terraces representing the zodiac signs, and Shalimar Garden (Abode of Love) with its stunning water channels and Chinar trees. Continue to Pari Mahal (Palace of Fairies), perched on a hilltop offering panoramic views of Dal Lake and the city below. Alternatively, visit Chashme Shahi, the royal spring garden with fresh mountain water. In the afternoon, enjoy a peaceful 1-hour Shikara ride on Dal Lake, gliding past floating gardens, lotus flowers, and traditional houseboats. Watch the mountains reflect in the calm waters as the sun sets. This is your last taste of Kashmir's famous beauty before venturing into the remote frontier. Return to the hotel for dinner and overnight stay.",
      activities: [
        "Visit Nishat Bagh (Garden of Bliss)",
        "Explore Shalimar Garden (Abode of Love)",
        "Pari Mahal Palace with panoramic views",
        "Alternative: Chashme Shahi spring garden",
        "Photography at Mughal Gardens",
        "1-hour private Shikara ride (included)",
        "Floating gardens observation",
        "Dal Lake sunset views",
        "Evening at hotel"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Srinagar",
      highlights: [
        "Mughal Gardens architectural beauty",
        "Pari Mahal hilltop panorama",
        "Romantic Shikara experience"
      ]
    },
    {
      day: 3,
      title: "Srinagar to Gurez via Razdan Pass - The Great Crossing",
      location: "Srinagar → Razdan Pass → Gurez Valley (123 km, 4-5 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Today begins your journey into one of Kashmir's most remote and beautiful frontiers. After an early breakfast, depart Srinagar and drive toward Bandipora, gradually climbing through dense pine and deodar forests. The road winds upward, revealing glimpses of snow-covered peaks and deep valleys. As you ascend, you'll reach Razdan Pass (11,672 feet / 3,556 meters), a high mountain pass known for its vast panoramic views and snow patches even in summer. The landscape transforms dramatically — barren mountains, sweeping vistas, and a sense of entering a different world. Pause for photographs and hot tea before beginning the descent into Gurez Valley. The descent is equally spectacular, with the turquoise Kishanganga River appearing below, snaking through the valley. Arrive in Dawar, the main settlement of Gurez, and check into your boutique guesthouse or cottage stay beside the river. Take a short evening stroll around Dawar town, meeting friendly locals and observing traditional wooden houses. The evening air is crisp, the sky begins to fill with stars, and the sound of the river accompanies your dinner. Overnight in Gurez.",
      activities: [
        "Early breakfast and departure from Srinagar",
        "Scenic drive through Bandipora forests",
        "Ascent to Razdan Pass (11,672 ft)",
        "Photography at high-altitude pass",
        "Snow patch observation and mountain views",
        "Dramatic descent into Gurez Valley",
        "Kishanganga River first sighting",
        "Arrival in Dawar town",
        "Check-in to boutique guesthouse",
        "Evening walk around Dawar",
        "Local village interaction",
        "Stargazing introduction"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Boutique Guesthouse/Cottage in Gurez",
      highlights: [
        "Razdan Pass crossing (11,672 ft)",
        "First views of Kishanganga River",
        "Entry into untouched frontier"
      ]
    },
    {
      day: 4,
      title: "Dawar Village & Kishanganga Riverside Exploration",
      location: "Gurez Valley - Dawar",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "Wake up to the sound of the Kishanganga River and breathtaking mountain views from your window. After breakfast, spend the day exploring the heart of Gurez Valley. Visit the iconic Habba Khatoon Peak viewpoint, named after the legendary Kashmiri poetess who is said to have spent time here. The pyramid-shaped peak dominates the valley and creates stunning photo opportunities. Walk to Habba Khatoon Spring, where crystal-clear water flows from the mountains — locals believe it has healing properties. Visit the local village markets where you'll find traditional handicrafts, woolen shawls, and hand-carved wooden items made by the Dard Shina artisans. Spend the afternoon relaxing along the Kishanganga River, sitting on smooth river stones, sipping kahwa, and watching the turquoise water flow. The river, also known as Neelum River in Pakistan-administered Kashmir, forms a natural border and holds historical significance. The afternoon is yours for photography, reading, or simply soaking in the peaceful mountain atmosphere. Return to your guesthouse for dinner and another night under Gurez's brilliant star-filled sky.",
      activities: [
        "Breakfast with mountain views",
        "Visit Habba Khatoon Peak viewpoint",
        "Photography of pyramid-shaped peak",
        "Walk to Habba Khatoon Spring",
        "Local village market exploration",
        "Traditional handicraft observation",
        "Interaction with Dard Shina artisans",
        "Afternoon riverside relaxation",
        "Kishanganga River photography",
        "Kahwa tea by the river",
        "Leisure time for personal exploration",
        "Evening stargazing"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Boutique Guesthouse/Cottage in Gurez",
      highlights: [
        "Habba Khatoon Peak vistas",
        "Sacred spring water site",
        "Kishanganga River serenity"
      ]
    },
    {
      day: 5,
      title: "Tulail Valley - Deep Frontier Exploration",
      location: "Gurez → Tulail Valley → Gurez (60 km round trip)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Today you venture even deeper into the frontier on a full-day excursion to Tulail Valley, the northernmost accessible civilian area in this region. After breakfast, drive along the Kishanganga River, passing through quaint villages with traditional wooden architecture, terraced farmlands growing potatoes and barley, and wooden bridges spanning mountain streams. Stop at Sheikhpora village to observe daily rural life and interact with local families who have lived here for generations. Continue to Purana Tulail (Old Tulail), an ancient settlement with fascinating history and stunning mountain backdrops. The meadows here are ideal for quiet picnics, photography, and soaking in the absolute remoteness. The landscape is raw and untouched — no tourist crowds, no commercialization, just pure Himalayan beauty. You might spot shepherd families with their flocks moving across high pastures. The sense of being at the edge of the world is palpable. Return to Dawar in the late afternoon, stopping for photos along the river wherever the light is perfect. Dinner and overnight at your guesthouse in Gurez.",
      activities: [
        "Early breakfast and departure for Tulail",
        "Scenic drive along Kishanganga River",
        "Traditional wooden bridge crossings",
        "Sheikhpora village visit",
        "Local family interaction",
        "Purana Tulail ancient settlement exploration",
        "High-altitude meadow walks",
        "Picnic lunch in remote setting",
        "Frontier landscape photography",
        "Shepherd community observation",
        "Terraced farmland views",
        "Return journey with sunset views"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Boutique Guesthouse/Cottage in Gurez",
      highlights: [
        "Tulail Valley remoteness",
        "Ancient village architecture",
        "True frontier experience"
      ]
    },
    {
      day: 6,
      title: "Border Hamlet Walks & Cultural Immersion",
      location: "Gurez Valley",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "This day offers flexible experiences based on your interests and energy levels. Wake early for sunrise photography of Habba Khatoon Peak as the first light paints the mountains gold and pink. After breakfast, you may take an easy riverside walk toward Chakwali, a small hamlet closer to the Line of Control (subject to access permissions). The walk offers stunning river views, wildflower meadows (seasonal), and chances to see local wildlife. Alternatively, arrange to meet Dard Shina families to learn about their unique culture, language, and traditions that blend Central Asian, Tibetan, and Kashmiri influences. Visit a traditional home to see how locals preserve food for harsh winters, weave textiles, and carve wood. You might be offered homemade Gurez bread and butter tea. The afternoon is yours for leisure — read by the river, sketch the landscape, or simply sit in contemplation watching the water flow. The pace here is slow, intentionally so. This is a day to disconnect from the world and reconnect with nature and yourself. Enjoy your final dinner in Gurez under a brilliant canopy of stars — the Milky Way is often visible with incredible clarity here.",
      activities: [
        "Sunrise photography at Habba Khatoon Peak",
        "Golden hour mountain views",
        "Optional: Riverside walk toward Chakwali",
        "Optional: Meet Dard Shina families",
        "Cultural exchange and interaction",
        "Traditional home visit",
        "Local textile and woodwork observation",
        "Taste authentic Gurez bread and butter tea",
        "Afternoon leisure by the river",
        "Personal reflection time",
        "Landscape sketching or journaling",
        "Final Gurez evening under stars",
        "Milky Way stargazing"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Boutique Guesthouse/Cottage in Gurez",
      highlights: [
        "Sunrise over Himalayan peaks",
        "Deep cultural immersion",
        "Final starry night in wilderness"
      ]
    },
    {
      day: 7,
      title: "Gurez to Srinagar - Return to Civilization",
      location: "Gurez → Razdan Pass → Srinagar (123 km, 4-5 hours)",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "After breakfast and a final look at the Kishanganga River and Habba Khatoon Peak, bid farewell to the warm hospitality of Gurez Valley. Depart for Srinagar, retracing your route back across Razdan Pass. The journey offers different perspectives in reverse — you'll notice details you missed on the way up. The high-altitude pass crossing feels familiar now, yet still awe-inspiring. As you descend toward Srinagar, the landscape transitions from barren mountains to green forests and eventually to the lush Kashmir Valley. Arrive in Srinagar by afternoon and check into your 3-star hotel. The evening is free for personal activities — shop for souvenirs at Lal Chowk or Polo View Market, take a final walk along Dal Lake, or visit the bustling floating vegetable market if timing permits. Enjoy your last dinner in Kashmir and overnight stay in Srinagar.",
      activities: [
        "Breakfast with final Gurez views",
        "Farewell to guesthouse hosts",
        "Departure from Gurez Valley",
        "Razdan Pass crossing (return journey)",
        "Photography stops along the route",
        "Forest drive through Bandipora",
        "Arrival in Srinagar",
        "Hotel check-in",
        "Free evening for shopping",
        "Optional: Lal Chowk market visit",
        "Optional: Polo View Market",
        "Optional: Dal Lake evening walk",
        "Final Kashmiri dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Srinagar",
      highlights: [
        "Farewell to Gurez wilderness",
        "Razdan Pass memories",
        "Return to valley civilization"
      ]
    },
    {
      day: 8,
      title: "Departure from Srinagar - Journey's End",
      location: "Srinagar to Airport",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "After breakfast at the hotel, complete your check-out formalities. Depending on your flight schedule, you may have time for last-minute shopping or a quick visit to a nearby attraction. Your driver will transfer you to Srinagar Airport for your onward journey. Depart with rare memories of mountains, meadows, rivers, frontier culture, and the warmth of the Dard Shina people. Gurez Valley remains one of Kashmir's best-kept secrets, and you've experienced it in its purest form — unspoiled, authentic, and breathtakingly beautiful.",
      activities: [
        "Leisure breakfast",
        "Hotel check-out",
        "Last-minute shopping (time permitting)",
        "Transfer to Srinagar Airport",
        "Departure with memories"
      ],
      meals: ["Breakfast"],
      accommodation: "N/A",
      highlights: [
        "Final Kashmir morning",
        "Rare frontier memories",
        "Journey completed"
      ]
    }
  ],

  accommodationDetails: {
    title: "3-Star & Boutique Accommodation",
    description: "Comfortable hotels in Srinagar combined with best available boutique stays in remote Gurez",
    hotels: [
      {
        name: "Star of Kashmir / Royal Heritage / Grand Habib or Similar",
        type: "3-Star Hotel",
        location: "Srinagar",
        nights: 3,
        amenities: ["Comfortable rooms", "Dal Lake proximity", "Restaurant", "WiFi", "Hot water", "Heating", "Room service"]
      },
      {
        name: "Best Available Boutique Guesthouse/Cottage",
        type: "Boutique/Local Stay",
        location: "Gurez Valley (Dawar/Tulail region)",
        nights: 4,
        amenities: ["Riverside location", "Mountain views", "Traditional hospitality", "Clean rooms", "Hot water", "Local cuisine", "Warm blankets", "Limited WiFi"]
      }
    ],
    note: "Gurez accommodation is limited but charming and warm. Expect basic but clean facilities with incredible hospitality from local hosts. This is part of the authentic frontier experience."
  },

  images: [
    "/destinations/kashmir/gurez/1.jpg",
    "/destinations/kashmir/gurez/2.jpg",
    "/destinations/kashmir/gurez/3.jpg",
    "/destinations/kashmir/srinagar/01.jpg",
    "/destinations/kashmir/gurez/4.jpg",
    "/destinations/kashmir/gurez/5.jpg",
    "/destinations/kashmir/dal_lake/1.jpg",
    "/destinations/kashmir/gurez/6.jpg",
    "/destinations/kashmir/srinagar/02.jpg"
  ],

  faqs: [
    {
      question: "When is the best time to visit Gurez Valley?",
      answer: "Gurez Valley is accessible from May to October, with July-September being the most popular months. The valley is snow-covered and roads are closed from November to April. Summer (June-August) offers lush green meadows and pleasant weather, while September brings golden autumn colors."
    },
    {
      question: "Is Gurez Valley safe to visit?",
      answer: "Yes, Gurez Valley is completely safe for tourists. It's a protected border area with strong security presence. Inner-Line Permits are sometimes required and are arranged as part of this package. The local Dard Shina community is extremely hospitable and welcoming to visitors."
    },
    {
      question: "What is the accommodation like in Gurez?",
      answer: "Gurez has limited accommodation options compared to mainstream Kashmir destinations. You'll stay in the best available boutique guesthouses or cottages run by local families. Expect clean, comfortable rooms with basic amenities, hot water, and incredible hospitality. The charm is in the authentic experience and stunning riverside locations."
    },
    {
      question: "What are Inner-Line Permits and do I need them?",
      answer: "Inner-Line Permits are special permissions sometimes required to visit border areas like Gurez due to its proximity to the Line of Control. Requirements change periodically. We handle all permit arrangements as part of the package, so you don't need to worry about paperwork."
    },
    {
      question: "Is this tour suitable for elderly travelers or children?",
      answer: "The tour involves a challenging drive over Razdan Pass (11,672 ft) with altitude changes. The walks in Gurez are easy and optional, but the journey requires good health. We recommend this tour for travelers aged 12+ with reasonable fitness levels. Consult your doctor if you have altitude-related health concerns."
    },
    {
      question: "What should I pack for Gurez Valley?",
      answer: "Pack warm clothing even in summer (temperatures drop at night), comfortable walking shoes, sun protection, personal medications, camera with extra batteries (limited charging), flashlight, insect repellent, and any specific toiletries you need. Power supply can be intermittent in Gurez."
    },
    {
      question: "Will I have mobile network and internet in Gurez?",
      answer: "Mobile network connectivity in Gurez is limited and intermittent. BSNL typically works better than private operators. WiFi is available at some guesthouses but expect slow speeds. Consider this a digital detox opportunity to truly disconnect and immerse in nature."
    },
    {
      question: "Why isn't lunch included in the package?",
      answer: "Lunch is excluded to give you flexibility — you can eat at local restaurants, try different cuisines, or have light meals/snacks based on your appetite and schedule. This also keeps the package more affordable while ensuring quality breakfast and dinner."
    },
    {
      question: "Can I extend my stay in Gurez?",
      answer: "Yes! If you fall in love with Gurez's tranquility (many travelers do), you can add extra nights. Contact us to customize your itinerary with additional days in Tulail or Dawar for deeper exploration and complete disconnection from urban life."
    },
    {
      question: "How does Gurez compare to mainstream Kashmir destinations?",
      answer: "Gurez is Kashmir's best-kept secret — no tourist crowds, no commercialization, just raw Himalayan beauty and authentic culture. While Gulmarg and Pahalgam are beautiful and accessible, Gurez offers a frontier experience for travelers seeking off-beat destinations, cultural immersion, and true wilderness. It's not for everyone, but for the right traveler, it's unforgettable."
    }
  ],

  amenities: [
    { icon: "Mountain", label: "Razdan Pass (11,672 ft)" },
    { icon: "Hotel", label: "3-Star + Boutique Stays" },
    { icon: "Utensils", label: "Breakfast & Dinner Daily" },
    { icon: "Car", label: "Private Cab Entire Trip" },
    { icon: "FileCheck", label: "Permits Arranged" },
    { icon: "Users", label: "Cultural Immersion" }
  ],

  sustainability: [
    { icon: "Leaf", title: "Low-Impact Tourism", description: "Supporting remote communities without overwhelming the fragile ecosystem and local culture" },
    { icon: "Users", title: "Community-Based Tourism", description: "Staying in local guesthouses and directly supporting Dard Shina families and businesses" },
    { icon: "Award", title: "Cultural Preservation", description: "Promoting respectful interaction with indigenous communities and helping preserve traditional ways of life" }
  ]
};

// Detailed tour information for Gurez Frontier Experience 6N7D 4-Star
export const gurezValley6N7D4StarDetail = {
  id: "gurez-valley-6n7d-4star",
  coverImage: "/tour_covers/gurez-valley-6n7d-4star.png",
  tourCode: "JRN-GRZ-6N7D-4S",
  title: "Gurez Frontier Experience - Premium Explorer",
  subtitle: "6 Nights / 7 Days – Srinagar • Gurez Valley",
  description: "A rare Himalayan escape into Kashmir's northern frontier — the mystical Gurez Valley. Cross Razdan Pass at 11,672 feet, wander through ancient Dard Shina communities, trace the turquoise Kishanganga River, and witness raw landscapes few travellers ever see. This premium 4-star experience blends comfort with cultural immersion and complete isolation from the modern world. Designed for explorers, photographers, and lovers of unspoiled nature who appreciate both adventure and quality accommodation.",
  price: 649,
  originalPrice: 799,
  discount: 19,
  duration: "6 Nights / 7 Days",
  theme: "adventure",
  groupSize: "2-6 People",
  rating: 4.9,
  reviews: 42,
  category: "Premium Adventure & Cultural",
  season: "May to October (Gurez accessible)",
  departureTime: "Upon arrival at Srinagar Airport",
  returnTime: "After breakfast on Day 7",
  dressCode: "Comfortable outdoor clothing, warm layers, quality walking shoes",
  tourType: "Premium Off-Beat Adventure & Cultural Immersion",
  language: "English, Hindi, Urdu, Basic Shina",
  minAge: 12,
  
  availableDates: [
    "2026-05-15",
    "2026-06-01",
    "2026-06-15",
    "2026-07-01",
    "2026-07-15",
    "2026-08-01",
    "2026-08-15",
    "2026-09-01",
    "2026-09-15",
    "2026-10-01"
  ],

  addons: [
    { id: 1, name: "Professional Local Guide", price: 100, description: "Expert Dard Shina guide for full cultural immersion" },
    { id: 2, name: "Premium Photography Tour", price: 150, description: "Professional landscape photographer for sunrise/sunset shoots" },
    { id: 3, name: "Luxury Camping Night", price: 120, description: "One night premium camping beside Kishanganga River" },
    { id: 4, name: "Private Village Homestay", price: 80, description: "Authentic overnight stay with local Dard family" },
    { id: 5, name: "Chakwali Border Excursion", price: 60, description: "Guided excursion to border hamlet (subject to permissions)" },
    { id: 6, name: "Cultural Performance Evening", price: 90, description: "Traditional Dard Shina music, dance & storytelling" }
  ],

  highlights: [
    "Premium 4-star hotels in Srinagar with superior amenities",
    "Best available boutique riverside lodges in Gurez Valley",
    "Cross the dramatic Razdan Pass (11,672 ft) with spectacular views",
    "4 nights immersion in remote Gurez beside Kishanganga River",
    "Explore Dawar town, Habba Khatoon Peak, and sacred springs",
    "Full-day excursion to remote Tulail Valley frontier hamlets",
    "Meet Dard Shina community and experience ancient culture",
    "River walks, alpine meadows, and wooden bridge photography",
    "Crystal-clear night skies perfect for stargazing",
    "45-60 minute Shikara ride on Dal Lake included",
    "Inner-Line Permits arranged for restricted border areas",
    "Private SUV/cab for enhanced comfort throughout journey"
  ],

  inclusions: [
    "2 nights accommodation in 4-star hotel in Srinagar (The Grand Mamta / Asian Park / Lemon Tree or similar)",
    "4 nights accommodation in premium boutique riverside lodge in Gurez (best available category)",
    "Daily breakfast and dinner throughout the tour",
    "Private SUV/cab for entire trip with enhanced comfort",
    "45-60 minute Shikara ride on Dal Lake",
    "All road tolls, parking fees, fuel charges",
    "Driver allowances and accommodation",
    "Inner-Line Permits for Gurez Valley (as required)",
    "All applicable taxes and GST"
  ],

  exclusions: [
    "Airfare or train tickets to/from Srinagar",
    "Lunch meals, tea, snacks, and beverages",
    "Entry tickets to monuments and gardens",
    "Off-road jeeps, pony rides to remote spots",
    "Adventure activities (rafting, trekking beyond basic walks)",
    "Professional guide services (available as addon)",
    "Personal expenses - shopping, laundry, tips",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Srinagar & Heritage Evening",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Arrive at Srinagar Airport where your chauffeur will greet you with a traditional welcome. Transfer to your premium 4-star hotel (The Grand Mamta, Asian Park, Lemon Tree, or similar) and complete check-in. After freshening up, embark on a heritage evening experience visiting either Nishat Bagh (Garden of Bliss) or Shalimar Garden (Abode of Love), depending on timing and preference. These Mughal-era gardens with terraced lawns, cascading fountains, and Chinar trees offer a perfect introduction to Kashmir's royal past. Take a leisurely walk along the lakeside promenade as the sun sets over Dal Lake, painting the sky in golden hues. Watch shikaras gliding across the water and observe the daily life of houseboat residents. Return to your hotel for a welcome dinner featuring authentic Kashmiri cuisine. Overnight in Srinagar.",
      activities: [
        "Airport arrival with traditional welcome",
        "Transfer to 4-star premium hotel",
        "Check-in and room allocation",
        "Visit Nishat Bagh or Shalimar Garden",
        "Mughal architecture and fountain observation",
        "Evening lakeside promenade walk",
        "Dal Lake sunset photography",
        "Houseboat and Shikara observation",
        "Welcome dinner with Kashmiri cuisine",
        "Overnight rest"
      ],
      meals: ["Dinner"],
      accommodation: "4-Star Hotel in Srinagar",
      highlights: [
        "Mughal Gardens heritage experience",
        "Dal Lake evening atmosphere",
        "Premium hotel comfort"
      ]
    },
    {
      day: 2,
      title: "Srinagar to Gurez via Razdan Pass - Frontier Crossing",
      location: "Srinagar → Razdan Pass → Gurez Valley (123 km, 4-5 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "After an early breakfast, begin your journey into Kashmir's most remote and mystical frontier. Drive north through Bandipora district, passing apple orchards and walnut groves before the road begins its dramatic ascent. The landscape transforms as you climb through dense forests of pine and deodar, with glimpses of snow-capped peaks appearing between trees. The journey to Razdan Pass (11,672 feet / 3,556 meters) is an adventure in itself - winding mountain roads, hairpin bends, and ever-changing vistas. At the pass, step out for photographs and hot tea while marveling at the 360-degree panoramic views of barren Himalayan peaks. The air is thin and crisp; patches of snow remain even in summer. The descent into Gurez is equally spectacular - the turquoise ribbon of Kishanganga River appears below, snaking through a deep valley flanked by towering mountains. Arrive in Dawar, the main settlement, and check into your premium boutique riverside lodge - the best accommodation Gurez offers, combining local charm with comfort. Take a short evening village walk, observing traditional wooden houses, meeting friendly locals, and watching the river flow. The evening air is pristine, and as darkness falls, stars begin to emerge in unprecedented clarity. Dinner at the lodge featuring local delicacies. Overnight in Gurez.",
      activities: [
        "Early breakfast and departure",
        "Scenic drive through Bandipora orchards",
        "Forest ascent toward Razdan Pass",
        "Razdan Pass arrival (11,672 ft)",
        "360-degree mountain photography",
        "Hot tea break at high altitude",
        "Dramatic descent into Gurez Valley",
        "Kishanganga River first sighting",
        "Arrival in Dawar settlement",
        "Premium boutique lodge check-in",
        "Evening village walk",
        "Traditional wooden architecture observation",
        "Riverside relaxation",
        "Initial stargazing"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Premium Boutique Lodge in Gurez",
      highlights: [
        "Razdan Pass crossing (11,672 ft)",
        "First views of Kishanganga River",
        "Entry into untouched frontier"
      ]
    },
    {
      day: 3,
      title: "Discover Dawar & Habba Khatoon Legends",
      location: "Gurez Valley - Dawar",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "Wake to the melodious sound of the Kishanganga River flowing just outside your lodge, with morning mist rising from the valley floor. After breakfast with mountain views, begin your exploration of Dawar and its legendary landmarks. Visit the iconic Habba Khatoon Peak viewpoint, named after the 16th-century Kashmiri poetess whose tragic love story is woven into local folklore. The distinctive pyramid-shaped peak dominates the valley and offers spectacular photography opportunities, especially in morning light. Walk to Habba Khatoon Spring, where crystal-clear glacial water emerges from the mountainside - locals believe it has healing properties and spiritual significance. The spring area is serene, perfect for quiet contemplation. Continue to Dawar bazaar, the heart of local commerce where you'll find traditional handicrafts, hand-woven woolen shawls (Gurez is famous for its wool), and intricately carved wooden items made by Dard Shina artisans. Interact with shopkeepers and craftspeople, learning about their traditional techniques passed down through generations. In the afternoon, relax along the Kishanganga River - find a comfortable spot on smooth river stones, breathe the pure mountain air, and watch the turquoise water flow. The afternoon is yours for reading, photography, journaling, or simply absorbing the profound peace of this remote valley. As evening approaches, the setting sun illuminates the peaks in golden light. Return to your lodge for dinner and another night under Gurez's magnificent star-filled sky.",
      activities: [
        "Breakfast with mountain panorama",
        "Visit Habba Khatoon Peak viewpoint",
        "Photography of pyramid-shaped peak",
        "Learn poetess Habba Khatoon's tragic story",
        "Walk to Habba Khatoon Spring",
        "Spring water tasting (pure glacial source)",
        "Explore Dawar bazaar and market",
        "Traditional handicraft observation",
        "Meet Dard Shina artisans",
        "Woolen shawl and woodwork viewing",
        "Afternoon Kishanganga riverside relaxation",
        "Personal time for reflection or photography",
        "Sunset over valley peaks",
        "Evening stargazing session"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Premium Boutique Lodge in Gurez",
      highlights: [
        "Habba Khatoon Peak's legendary beauty",
        "Sacred spring water site",
        "Authentic Dard Shina craftsmanship"
      ]
    },
    {
      day: 4,
      title: "Tulail Valley - Deep Frontier Exploration",
      location: "Gurez → Tulail Valley → Gurez (60 km round trip)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Today you venture deeper into the frontier on a full-day excursion to Tulail Valley, one of India's northernmost accessible civilian areas. After breakfast, depart in your private SUV along the Kishanganga River, the road following the river's curves through increasingly remote terrain. Pass through quaint villages with traditional wooden architecture - log houses with sloping roofs designed to shed heavy winter snow. Stop at wooden bridges spanning mountain streams for photography - these engineering marvels are built without modern tools, testament to local ingenuity. Visit Sheikhpora village to observe daily rural life and interact with families who have lived in this frontier for generations. Their warmth and hospitality belie the harsh winters they endure. Continue to Purana Tulail (Old Tulail), an ancient settlement with fascinating history and dramatic mountain backdrops. The alpine meadows here are ideal for quiet picnics - spread out your packed lunch (or local breads and kahwa) and simply absorb the absolute remoteness. The landscape is raw and untouched - no tourist infrastructure, no commercialization, just pure Himalayan wilderness. Terraced farmlands grow potatoes and barley, the only crops that survive the short growing season. You might spot shepherd families with flocks moving across high pastures. The sense of being at the edge of civilization is profound. Spend time photographing the interplay of light on mountains, meadows, and river. Return to Dawar in late afternoon, stopping wherever the landscape calls for contemplation. Dinner and overnight at your lodge in Gurez.",
      activities: [
        "Early breakfast and Tulail departure",
        "Scenic SUV drive along Kishanganga River",
        "Traditional wooden bridge photography",
        "Sheikhpora village visit",
        "Local family interaction and chai",
        "Purana Tulail ancient settlement exploration",
        "Alpine meadow picnic lunch",
        "Terraced farmland observation",
        "Shepherd community spotting",
        "Mountain landscape photography",
        "Frontier remoteness experience",
        "Return journey with photo stops",
        "Evening lodge relaxation"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Premium Boutique Lodge in Gurez",
      highlights: [
        "Tulail Valley's extreme remoteness",
        "Ancient wooden architecture",
        "True frontier wilderness"
      ]
    },
    {
      day: 5,
      title: "River Walks & Border Hamlets - Slow Discovery",
      location: "Gurez Valley",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "This day is designed for slow discovery and deep connection with the landscape. Wake early for sunrise photography - watch as first light illuminates Habba Khatoon Peak, the colors shifting from deep purple to pink to gold. After a leisurely breakfast, embark on short hikes along the Kishanganga River toward Chakwali, a small hamlet closer to the Line of Control (subject to access permissions and local security clearances). The easy walk offers stunning river views, wildflower meadows (seasonal), and chances to see local wildlife - Himalayan griffons, golden eagles, and if lucky, ibex on distant slopes. The river here is a brilliant turquoise, fed by glacial melt. Alternatively, arrange to meet Dard Shina families for cultural immersion (can be organized through your lodge). Visit a traditional home to learn about their unique heritage - the Dards are believed to be descendants of Alexander the Great's army, with distinct physical features, language (Shina), and customs that blend Central Asian, Tibetan, and Kashmiri influences. Observe how they preserve food for harsh winters when the valley is completely snow-bound and isolated for 6 months. You might be offered homemade Gurez bread, butter tea (salty tea with butter), and local apricot products. The afternoon is yours for complete leisure - read by the river, sketch the landscape, practice photography, meditate, or simply sit in contemplation. This is a day to disconnect from the modern world and reconnect with nature, yourself, and the slow rhythm of mountain life. Enjoy your final dinner in Gurez under a magnificent canopy of stars. On clear nights, the Milky Way is visible in stunning detail, stretching across the sky in a brilliant arc. Your lodge host might share local folklore and stories around a bonfire.",
      activities: [
        "Sunrise photography at Habba Khatoon Peak",
        "Golden hour mountain illumination",
        "Leisurely breakfast with views",
        "Optional: Easy riverside walk toward Chakwali",
        "Wildflower meadow observation (seasonal)",
        "Bird watching - eagles, griffons",
        "Optional: Dard Shina family cultural visit",
        "Traditional home tour",
        "Learn about Dard heritage and Alexander connection",
        "Taste butter tea and local bread",
        "Observe winter food preservation techniques",
        "Afternoon complete leisure",
        "Personal reflection and nature connection",
        "Final Gurez dinner",
        "Bonfire and local folklore stories",
        "Milky Way stargazing"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Premium Boutique Lodge in Gurez",
      highlights: [
        "Sunrise over Himalayan peaks",
        "Deep cultural immersion",
        "Milky Way under clear frontier skies"
      ]
    },
    {
      day: 6,
      title: "Gurez to Srinagar - Return to Civilization",
      location: "Gurez → Razdan Pass → Srinagar (123 km, 4-5 hours)",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "After breakfast and a final lingering look at the Kishanganga River and Habba Khatoon Peak, bid farewell to the warm hospitality of Gurez Valley and your lodge hosts. The departure is bittersweet - you've connected deeply with this remote place and its people. Depart for Srinagar, retracing your route back across Razdan Pass. The journey offers different perspectives in reverse - you'll notice details missed on the way up, and your appreciation for the landscape has deepened. The high-altitude pass crossing feels familiar now, yet remains awe-inspiring. Stop for photos and one last breath of thin mountain air. As you descend toward Srinagar, the landscape transitions from barren Himalayan peaks to green forests and eventually to the lush, verdant Kashmir Valley. The contrast is striking after days in the stark frontier. Arrive in Srinagar by afternoon and check into your 4-star hotel. After settling in, the evening is free for personal activities and reconnecting with modern amenities. You might want to: take a Shikara ride on Dal Lake if not done earlier (45-60 minutes included); shop for souvenirs at Lal Chowk, Polo View Market, or the famous Floating Market; visit the Hazratbal Shrine or Shankaracharya Temple; or simply enjoy a walk along Boulevard Road watching the evening activity. Return to your hotel for a farewell dinner featuring your favorite Kashmiri dishes. Overnight in Srinagar.",
      activities: [
        "Breakfast with final Gurez views",
        "Farewell to lodge hosts and valley",
        "Departure from Gurez",
        "Razdan Pass crossing (return journey)",
        "Final high-altitude photography",
        "Forest descent through Bandipora",
        "Observation of landscape transitions",
        "Arrival in Srinagar",
        "4-star hotel check-in",
        "Optional: Shikara ride on Dal Lake (if not done)",
        "Optional: Shopping at Lal Chowk or Polo View",
        "Optional: Hazratbal Shrine or Shankaracharya Temple",
        "Optional: Boulevard Road evening walk",
        "Farewell dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "4-Star Hotel in Srinagar",
      highlights: [
        "Farewell to Gurez wilderness",
        "Final Razdan Pass memories",
        "Return to Kashmir Valley civilization"
      ]
    },
    {
      day: 7,
      title: "Departure from Srinagar - Journey's End",
      location: "Srinagar to Airport",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "After breakfast at your hotel, complete check-out formalities. Depending on your flight schedule, you may have time for last-minute shopping or a quick visit to a nearby attraction. Your driver will transfer you to Srinagar Airport in your comfortable SUV for your onward journey. Depart with rare and precious memories of mountains, meadows, rivers, frontier culture, and the extraordinary warmth of the Dard Shina people. Gurez Valley remains one of India's best-kept secrets, and you've experienced it at its finest - unspoiled, authentic, and breathtakingly beautiful. You leave not just with photographs, but with a transformed perspective on wilderness, solitude, and the resilient communities who call the frontier home.",
      activities: [
        "Leisure breakfast",
        "Hotel check-out",
        "Last-minute shopping (time permitting)",
        "Private SUV transfer to airport",
        "Departure with lifelong memories"
      ],
      meals: ["Breakfast"],
      accommodation: "N/A",
      highlights: [
        "Final Kashmir morning",
        "Rare frontier memories preserved",
        "Journey of discovery completed"
      ]
    }
  ],

  accommodationDetails: {
    title: "4-Star & Premium Boutique Accommodation",
    description: "Superior hotels in Srinagar combined with the best available boutique lodges in remote Gurez",
    hotels: [
      {
        name: "The Grand Mamta / Asian Park / Lemon Tree or Similar",
        type: "4-Star Hotel",
        location: "Srinagar",
        nights: 2,
        amenities: ["Superior rooms", "Dal Lake views", "Multi-cuisine restaurant", "High-speed WiFi", "Hot water 24/7", "Room heaters", "Room service", "Concierge", "Modern bathrooms"]
      },
      {
        name: "Premium Boutique River-View Lodge",
        type: "Best Available Premium Category",
        location: "Gurez Valley (Dawar region)",
        nights: 4,
        amenities: ["Prime riverside location", "Best rooms in Gurez", "Panoramic mountain views", "Traditional yet comfortable", "Exceptional local hospitality", "Hot water", "Local Kashmiri cuisine", "Quality bedding and heating", "Limited WiFi"]
      }
    ],
    note: "Gurez accommodation is limited but we provide the absolute best available. Expect superior comfort compared to standard guesthouses, with enhanced amenities while maintaining authentic charm. The premium lodges offer the finest rooms, best locations, and highest hospitality standards in Gurez."
  },

  images: [
    "/destinations/kashmir/gurez/1.jpg",
    "/destinations/kashmir/gurez/3.jpg",
    "/destinations/kashmir/srinagar/01.jpg",
    "/destinations/kashmir/gurez/5.jpg",
    "/destinations/kashmir/dal_lake/1.jpg",
    "/destinations/kashmir/gurez/2.jpg",
    "/destinations/kashmir/gurez/4.jpg",
    "/destinations/kashmir/srinagar/03.jpg",
    "/destinations/kashmir/gurez/6.jpg"
  ],

  faqs: [
    {
      question: "How is this 4-star tour different from the 3-star Gurez tour?",
      answer: "This premium tour offers 4-star hotels in Srinagar (vs 3-star), the best available premium boutique lodges in Gurez (vs standard guesthouses), private SUV transport for enhanced comfort, and it's a more streamlined 7-day itinerary (vs 8 days). The accommodations, transport, and overall experience are elevated while covering similar attractions."
    },
    {
      question: "When is the best time for this Gurez tour?",
      answer: "Gurez Valley is accessible from May to October. The best months are June-September when roads are fully clear and weather is most pleasant. July-August offers lush green landscapes, while September brings golden autumn colors. Avoid visiting during monsoon peak if concerned about landslides."
    },
    {
      question: "What is the accommodation really like in Gurez?",
      answer: "We provide the absolute best accommodation Gurez has to offer - premium boutique lodges with superior rooms, prime riverside locations, quality bedding, reliable hot water, and the highest hospitality standards. While not luxury in the conventional sense, these are far superior to basic guesthouses and offer genuine comfort combined with authentic local charm."
    },
    {
      question: "Are Inner-Line Permits difficult to obtain?",
      answer: "Inner-Line Permits for Gurez are generally straightforward but requirements change periodically due to security considerations. We handle all permit arrangements as part of the package - you just need to provide ID copies. Occasionally permits may be denied due to security situations, in which case we'll offer alternative itineraries or full refunds."
    },
    {
      question: "Is this tour suitable for photographers?",
      answer: "Absolutely! Gurez offers extraordinary photography opportunities - dramatic mountain passes, turquoise rivers, traditional wooden architecture, alpine meadows, cultural portraits, and some of the clearest night skies for astrophotography. We can arrange professional guide services as an addon for dedicated photography tours."
    },
    {
      question: "What about mobile network and internet connectivity?",
      answer: "Mobile connectivity in Gurez is limited and intermittent. BSNL works better than private operators. Premium lodges offer limited WiFi but expect slow speeds. We recommend embracing this as an opportunity to digitally disconnect and fully immerse in the frontier experience."
    },
    {
      question: "Can elderly travelers do this tour?",
      answer: "The tour involves crossing Razdan Pass (11,672 ft) with significant altitude changes and a long, winding drive. Walks in Gurez are easy and optional, but the journey requires good health. We recommend this for travelers with reasonable fitness levels and no serious altitude-related conditions. Consult your doctor before booking."
    },
    {
      question: "Why is lunch not included?",
      answer: "Lunch is excluded to provide flexibility - eat at local restaurants, try different foods, or have light meals based on your appetite. Options in Gurez are limited but authentic. This also keeps the package competitively priced while ensuring quality breakfast and dinner."
    },
    {
      question: "Can I extend my stay in Gurez?",
      answer: "Yes! Many travelers find Gurez so peaceful they want extra days. We can extend your lodge booking (subject to availability) and customize your itinerary with additional exploration days in Tulail, cultural activities, or simply relaxation by the river."
    },
    {
      question: "What makes Gurez Valley special compared to popular Kashmir destinations?",
      answer: "Gurez is Kashmir's best-kept secret and most authentic frontier experience. Unlike crowded Gulmarg or commercialized Pahalgam, Gurez offers absolute remoteness, untouched landscapes, genuine cultural immersion with the unique Dard Shina community, and a sense of discovery. It's for travelers who want to go beyond the usual tourist circuit and experience real wilderness and authentic Himalayan life."
    }
  ],

  amenities: [
    { icon: "Star", label: "4-Star Premium Hotels" },
    { icon: "Mountain", label: "Razdan Pass (11,672 ft)" },
    { icon: "Hotel", label: "Best Gurez Boutique Lodge" },
    { icon: "Car", label: "Private SUV Transport" },
    { icon: "FileCheck", label: "Permits Arranged" },
    { icon: "Camera", label: "Photography Paradise" }
  ],

  sustainability: [
    { icon: "Leaf", title: "Responsible Frontier Tourism", description: "Premium experiences that support conservation and avoid overwhelming the fragile Gurez ecosystem" },
    { icon: "Users", title: "Community Economic Support", description: "Staying at locally-owned premium lodges and supporting Dard Shina businesses directly" },
    { icon: "Award", title: "Cultural Heritage Preservation", description: "Facilitating meaningful cultural exchange while respecting traditions and supporting heritage preservation" }
  ]
};

// Detailed tour information for Keran Valley Escape 6N7D 3-Star
export const keranValley6N7D3StarDetail = {
  id: "keran-valley-6n7d-3star",
  coverImage: "/tour_covers/keran-valley-6n7d-3star.png",
  tourCode: "JRN-KRN-6N7D-3S",
  title: "Keran Valley Escape - Hidden Frontier",
  subtitle: "6 Nights / 7 Days – Srinagar • Keran Valley",
  description: "A scenic Himalayan journey into the newly opened Keran Valley — a lush riverside wonderland tucked along the Kishanganga River. Expect pure fresh air, wooden hillside villages, pine forests, orchard belts, and peaceful days surrounded by mountain silence. Cross the scenic Farkian Top with its panoramic ridgelines, stay beside the river in simple yet warm guesthouses, and explore trails virtually untouched by commercialization. Ideal for nature lovers, families seeking a quiet retreat, and travellers wishing to explore Kashmir's hidden frontier landscapes away from tourist crowds. Experience crisp starlit nights with zero light pollution and the warmth of local hospitality in one of Kashmir's most peaceful valleys.",
  price: 499,
  originalPrice: 649,
  discount: 23,
  duration: "6 Nights / 7 Days",
  theme: "nature",
  groupSize: "2-10 People",
  rating: 4.7,
  reviews: 38,
  category: "Nature & Off-Beat",
  season: "May to October (Keran accessible)",
  departureTime: "Upon arrival at Srinagar Airport",
  returnTime: "After breakfast on Day 7",
  dressCode: "Comfortable outdoor clothing, warm layers, walking shoes",
  tourType: "Off-Beat Nature & Slow Travel Experience",
  language: "English, Hindi, Urdu, Kashmiri",
  minAge: 8,
  
  availableDates: [
    "2026-05-15",
    "2026-06-01",
    "2026-06-15",
    "2026-07-01",
    "2026-07-15",
    "2026-08-01",
    "2026-08-15",
    "2026-09-01",
    "2026-09-15",
    "2026-10-01"
  ],

  addons: [
    { id: 1, name: "Professional Nature Guide", price: 70, description: "Expert guide for flora, fauna, and trail exploration" },
    { id: 2, name: "Photography Package", price: 100, description: "Half-day professional photographer for landscape shots" },
    { id: 3, name: "Riverside Camping Night", price: 60, description: "One night camping beside Kishanganga River" },
    { id: 4, name: "Village Homestay Experience", price: 50, description: "Replace one night with traditional village home" },
    { id: 5, name: "Orchard Picnic Basket", price: 30, description: "Local produce picnic basket for meadow lunch" },
    { id: 6, name: "Bonfire Evening", price: 40, description: "Traditional bonfire with local folk tales" }
  ],

  highlights: [
    "Newly opened, uncrowded hidden valley along Kishanganga River",
    "4 nights stay in peaceful Keran Valley riverside guesthouses",
    "Cross scenic Farkian Top with panoramic mountain views",
    "Explore traditional wooden hillside villages and local culture",
    "Walk through pine forests, apple orchards, and walnut groves",
    "River walks and meadow trails with mountain silence",
    "Zero light pollution - perfect for stargazing",
    "Professional guide assistance throughout the journey",
    "1-hour Shikara ride on Dal Lake in Srinagar",
    "Inner-line permits arranged for Keran Valley access",
    "Ideal for families, nature lovers, and slow travel enthusiasts",
    "Escape tourist crowds and experience authentic mountain life"
  ],

  inclusions: [
    "2 nights accommodation in 3-star hotel in Srinagar (Star of Kashmir / Grand Habib / Royal Heritage or similar)",
    "4 nights accommodation in best available guesthouse/cottage/nature lodge in Keran Valley",
    "Daily breakfast and dinner throughout the tour (MAP basis)",
    "Private vehicle for all transfers and sightseeing with professional chauffeur",
    "Trip-long professional guide assistance",
    "1-hour Shikara ride on Dal Lake",
    "Inner-line permits for Keran Valley access",
    "All parking fees, tolls, fuel charges",
    "Driver allowances and accommodation",
    "All applicable taxes and GST"
  ],

  exclusions: [
    "Airfare or train tickets to/from Srinagar",
    "Lunch meals, snacks, and beverages",
    "Entry tickets to Mughal gardens and monuments",
    "Pony or jeep hire for off-road areas (if required)",
    "Optional adventure activities (ATV, rafting, etc.)",
    "Personal shopping, laundry, and tips",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Srinagar & Dal-side Evening",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Arrive at Srinagar Airport where your driver will warmly welcome you. Transfer to your comfortable 3-star hotel (Star of Kashmir, Grand Habib, Royal Heritage, or similar) and complete check-in formalities. After settling in and refreshing, begin your Kashmir experience with a visit to one of the famous Mughal Gardens - Shalimar Bagh (Abode of Love) or Nishat Garden (Garden of Bliss). These terraced gardens with cascading fountains and Chinar trees showcase the grandeur of Mughal architecture and design. In the late afternoon or early evening, enjoy a relaxing lakeside walk along Dal Lake's Boulevard Road, watching shikaras glide across the water and observing the daily life of houseboat residents. Alternatively, take your included 1-hour Shikara ride now, floating peacefully across the mirror-like waters as the sun sets behind the Zabarwan mountains, painting the sky in shades of orange and pink. This gentle introduction to Kashmir sets the tone for your upcoming journey into the quieter, more remote Keran Valley. Return to your hotel for dinner featuring authentic Kashmiri cuisine. Overnight in Srinagar.",
      activities: [
        "Airport arrival and traditional welcome",
        "Transfer to 3-star hotel",
        "Check-in and room settling",
        "Visit Shalimar Bagh or Nishat Garden",
        "Mughal architecture appreciation",
        "Lakeside walk along Boulevard Road",
        "Optional: 1-hour Shikara ride at sunset",
        "Dal Lake observation and photography",
        "Welcome dinner with Kashmiri dishes",
        "Overnight rest"
      ],
      meals: ["Dinner"],
      accommodation: "3-Star Hotel in Srinagar",
      highlights: [
        "Mughal Gardens beauty",
        "Dal Lake sunset experience",
        "First taste of Kashmir"
      ]
    },
    {
      day: 2,
      title: "Srinagar to Keran Valley via Kupwara & Farkian Top",
      location: "Srinagar → Kupwara → Farkian Top → Keran Valley (110 km, 4-5 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "After breakfast, embark on your journey north toward the hidden Keran Valley. Drive through the outskirts of Srinagar and into the countryside, passing through traditional village belts where rural Kashmiri life unfolds - women working in fields, children playing in lanes, and men tending to orchards. The landscape gradually becomes more forested as you enter pine and deodar woods. Pass through Kupwara town, a frontier district hub, before beginning the scenic climb toward Farkian Top. The road winds upward through dense forests, offering glimpses of valleys below and snow-capped peaks in the distance. Farkian Top is known for its panoramic ridgeline views - stop here for photographs, hot tea, and to simply absorb the mountain atmosphere. The air becomes noticeably fresher and cooler. Begin the descent into Keran Valley, and soon the Kishanganga River appears below, a stunning turquoise ribbon flowing through the valley. The valley itself is lush and green, dotted with wooden houses and terraced fields. Arrive at your riverside guesthouse/cottage/nature lodge in Keran and check in. The accommodation is simple but clean and comfortable, with warm local hospitality that more than compensates for basic amenities. Take a short walk around the immediate area, breathing in the pure mountain air and listening to the constant, soothing sound of the river. The pace here is slow and peaceful - exactly what you came for. Enjoy dinner at the lodge, often featuring fresh local ingredients. Overnight in Keran Valley.",
      activities: [
        "Breakfast and departure from Srinagar",
        "Drive through rural Kashmir villages",
        "Pine forest passage",
        "Kupwara town transit",
        "Scenic climb to Farkian Top",
        "Farkian Top photography and tea break",
        "Panoramic ridgeline views",
        "Descent into Keran Valley",
        "Kishanganga River first sighting",
        "Arrival at riverside guesthouse",
        "Check-in and room settling",
        "Short evening walk around property",
        "River sound immersion",
        "Local dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Guesthouse/Cottage in Keran Valley",
      highlights: [
        "Farkian Top panoramic views",
        "Kishanganga River beauty",
        "Entry into peaceful valley"
      ]
    },
    {
      day: 3,
      title: "Keran Village Loops & River Walks",
      location: "Keran Valley",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "Wake to the gentle sound of the Kishanganga River and birdsong. After a leisurely breakfast, begin exploring the Keran Valley on foot with your guide. The day is dedicated to discovering the traditional village life and natural beauty that makes this valley special. Walk through village loops, observing the distinctive wooden houses built in traditional Kashmiri style - log construction with sloping roofs designed for heavy snowfall. Meet local families who are often delighted to interact with visitors; their warmth and hospitality are genuine. Visit valley viewpoints that offer perspectives of the river winding through the green landscape, framed by mountains on all sides. Explore local village lanes where chickens roam freely, children play traditional games, and elderly residents sit outside their homes enjoying the sun. In the afternoon, take an easy river walk along the Kishanganga's banks. The river here is pristine - fed by glacial melt and springs, the water is crystal clear with a beautiful turquoise hue. Find a peaceful spot to simply sit and watch the water flow, listen to its constant murmur, and feel the stress of modern life dissolve away. This is slow travel at its finest - no rushing, no packed itinerary, just gentle exploration and immersion in natural beauty. Return to your lodge in the late afternoon. The evening is at leisure - you might read a book, practice photography, sketch the landscape, or chat with other travelers or local hosts. As night falls, step outside to witness the star-filled sky - with zero light pollution, the stars are breathtakingly clear, and the Milky Way often visible. Dinner and overnight at your lodge in Keran.",
      activities: [
        "Riverside breakfast",
        "Guided village loop walk",
        "Traditional wooden house observation",
        "Local family interactions",
        "Valley viewpoint visits",
        "Village lane exploration",
        "Local culture immersion",
        "Afternoon Kishanganga River walk",
        "Riverside meditation and relaxation",
        "Photography of landscape and village life",
        "Leisure time at lodge",
        "Evening stargazing with zero light pollution",
        "Local dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Guesthouse/Cottage in Keran Valley",
      highlights: [
        "Traditional wooden village architecture",
        "Kishanganga riverside peace",
        "Brilliant night sky viewing"
      ]
    },
    {
      day: 4,
      title: "Farkian Top Excursion & Mountain Views",
      location: "Keran Valley → Farkian Top → Keran Valley (40 km round trip)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "After breakfast, embark on a half-day excursion back toward Farkian Top ridge for extended exploration and mountain photography (weather permitting). The journey itself is scenic, retracing part of your arrival route through pine forests and mountain curves. At Farkian Top, the panoramic views are spectacular - on clear days, you can see multiple mountain ranges stretching in all directions. The ridgeline offers 360-degree vistas, perfect for landscape photography enthusiasts. Your guide will point out significant peaks and explain the geography of the region. Spend time here absorbing the mountain atmosphere, taking photographs from different angles, and perhaps enjoying a thermos of kahwa (traditional Kashmiri green tea with spices). The high-altitude air is crisp and invigorating. Return to Keran by midday. Lunch is on your own - your host can prepare something simple, or you might have packed some snacks. The afternoon is completely free time to unwind and enjoy Keran at your own pace. You might: take a nap by the river, practice yoga or meditation in nature, read in a meadow, explore additional village trails, or simply sit and do nothing - an underrated pleasure in our rushed modern lives. The beauty of Keran is that there's no pressure to be constantly active; the valley itself is the attraction. As evening approaches, watch the light change on the mountains, the way shadows lengthen across the valley, and the river reflecting the sky's colors. Another evening of stargazing awaits after dinner. Overnight at your lodge in Keran.",
      activities: [
        "Breakfast at lodge",
        "Morning departure for Farkian Top",
        "Scenic drive through pine forests",
        "Farkian ridge arrival",
        "Panoramic mountain views",
        "360-degree vista photography",
        "Mountain range identification with guide",
        "Kahwa tea break at viewpoint",
        "High-altitude atmosphere enjoyment",
        "Return to Keran by midday",
        "Lunch break (own arrangement)",
        "Afternoon complete leisure",
        "Optional activities: river meditation, reading, walking",
        "Evening light observation",
        "Stargazing after dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Guesthouse/Cottage in Keran Valley",
      highlights: [
        "Farkian Top extended exploration",
        "Panoramic mountain photography",
        "Complete leisure afternoon"
      ]
    },
    {
      day: 5,
      title: "Meadows & Orchard Trails - Nature Immersion",
      location: "Keran Valley",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "Today is dedicated to exploring Keran's natural landscapes - meadows, orchards, and riverside trails. After breakfast, set out with your guide for relaxed walks through lower meadow grasslands. These meadows are dotted with wildflowers in season (especially May-August) and offer soft, peaceful walking. The grass is lush, the air fragrant, and the views consistently beautiful. Continue to local orchard belts - Keran, like much of Kashmir, is known for apple orchards, and you'll also find walnut groves and sometimes apricot trees. Depending on the season, you might see blossoms (spring), growing fruit (summer), or harvest activity (autumn). Walk through the orchards, learning about local agricultural practices. The families here often practice organic farming methods passed down through generations. Visit riverside picnic areas - scenic spots where locals come for gatherings and where you can spread out, enjoy packed snacks, and simply absorb the environment. The Kishanganga River remains your constant companion, its sound always present. In the afternoon, you might explore additional trails, or return to your lodge for rest. The evening is perfect for stargazing - on clear nights, Keran's zero light pollution allows for incredible celestial viewing. Your guide or host might point out constellations, planets, and the Milky Way's bright band stretching across the sky. Some lodges can arrange small bonfires (weather and regulations permitting), creating a cozy evening atmosphere with local stories and perhaps simple folk songs. Enjoy your final dinner in this peaceful valley. Overnight at your lodge in Keran.",
      activities: [
        "Breakfast with valley views",
        "Guided walk through lower meadow grasslands",
        "Wildflower observation (seasonal)",
        "Apple orchard exploration",
        "Walnut grove visits",
        "Learn local agricultural practices",
        "Orchard photography and fruit observation",
        "Riverside picnic area visit",
        "Packed snack or lunch in nature",
        "Additional trail exploration",
        "Afternoon leisure at lodge",
        "Evening stargazing session",
        "Constellation and Milky Way viewing",
        "Optional bonfire with local stories",
        "Final Keran Valley dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Guesthouse/Cottage in Keran Valley",
      highlights: [
        "Meadow and orchard walks",
        "Local agricultural immersion",
        "Final starlit evening in valley"
      ]
    },
    {
      day: 6,
      title: "Keran to Srinagar Return via Kupwara",
      location: "Keran Valley → Farkian Top → Kupwara → Srinagar (110 km, 4-5 hours)",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "After breakfast and a final look at the Kishanganga River and the peaceful valley you've called home for four nights, bid farewell to your hosts and Keran Valley. The departure is bittersweet - you've grown accustomed to the silence, the river's sound, and the slow pace of life here. Begin your return journey to Srinagar, crossing back over Farkian Top. The views are familiar now but still impressive, and you might notice details you missed on the way up. Descend through the pine forests toward Kupwara and continue through rural villages back toward the Kashmir Valley. The landscape transitions from frontier mountains to the lush, populated valley. Arrive in Srinagar by early afternoon and check into your 3-star hotel. After settling in, the evening is free for personal activities. This is an excellent time for shopping - visit Lal Chowk, the bustling commercial center of Srinagar, for traditional Kashmiri handicrafts, Pashmina shawls, carpets, paper mache items, and dry fruits. Polo View Market is another good option for souvenirs and local products. If you didn't take your Shikara ride on Day 1, you can enjoy it this evening, floating peacefully on Dal Lake as the sun sets. Alternatively, take a walk along Boulevard Road, visit a local bakery for Kashmiri breads, or simply relax at your hotel and process the peaceful days you've just experienced. Enjoy dinner at the hotel or at a local restaurant. Overnight in Srinagar.",
      activities: [
        "Breakfast with final valley views",
        "Farewell to lodge hosts",
        "Departure from Keran Valley",
        "Farkian Top crossing (return)",
        "Forest drive through Kupwara",
        "Rural village observation",
        "Arrival in Srinagar",
        "Hotel check-in",
        "Free evening for shopping",
        "Optional: Lal Chowk market visit",
        "Optional: Polo View Market exploration",
        "Optional: Shikara ride (if not done Day 1)",
        "Optional: Boulevard Road walk",
        "Souvenir shopping",
        "Dinner at hotel or local restaurant"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Srinagar",
      highlights: [
        "Farewell to peaceful Keran",
        "Return to Kashmir Valley",
        "Shopping and city exploration"
      ]
    },
    {
      day: 7,
      title: "Departure from Srinagar - Journey's End",
      location: "Srinagar to Airport",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "After breakfast at your hotel, complete check-out formalities. Depending on your flight schedule, you may have a little time for any last-minute shopping or a quick visit to a nearby attraction. Your driver will transfer you to Srinagar Airport for your onward journey. Depart with quiet mountain memories, breathtaking frontier landscapes, and the peaceful rhythm of Keran Valley still echoing in your mind. You've experienced a side of Kashmir few visitors see - a hidden valley where life moves slowly, nature remains pristine, and the warmth of local hospitality creates lasting impressions. These memories of river walks, starlit nights, wooden villages, and mountain silence will stay with you long after you've returned to the faster pace of regular life.",
      activities: [
        "Leisure breakfast",
        "Hotel check-out",
        "Last-minute shopping (time permitting)",
        "Transfer to Srinagar Airport",
        "Departure with peaceful memories"
      ],
      meals: ["Breakfast"],
      accommodation: "N/A",
      highlights: [
        "Final Kashmir morning",
        "Hidden valley memories",
        "Slow travel experience completed"
      ]
    }
  ],

  accommodationDetails: {
    title: "3-Star & Nature Lodge Accommodation",
    description: "Comfortable hotels in Srinagar combined with simple, warm guesthouses in remote Keran",
    hotels: [
      {
        name: "Star of Kashmir / Grand Habib / Royal Heritage or Similar",
        type: "3-Star Hotel",
        location: "Srinagar",
        nights: 2,
        amenities: ["Comfortable rooms", "Dal Lake proximity", "Restaurant", "WiFi", "Hot water", "Heating", "Room service"]
      },
      {
        name: "Best Available Guesthouse / Cottage / Nature Lodge",
        type: "Local Guesthouse/Nature Stay",
        location: "Keran Valley",
        nights: 4,
        amenities: ["Riverside location", "Mountain views", "Simple comfort", "Warm hospitality", "Clean rooms", "Hot water", "Local cuisine", "Peaceful setting", "Limited WiFi"]
      }
    ],
    note: "Keran Valley is newly opened to tourism with limited accommodation options. Expect simple but clean facilities with exceptional local hospitality. The simple comfort is part of the authentic frontier experience, and the peaceful setting more than compensates."
  },

  images: [
    "/destinations/kashmir/keran_valley/1.jpg",
    "/destinations/kashmir/keran_valley/2.jpg",
    "/destinations/kashmir/keran_valley/3.jpg",
    "/destinations/kashmir/srinagar/01.jpg",
    "/destinations/kashmir/keran_valley/4.jpg",
    "/destinations/kashmir/dal_lake/1.jpg",
    "/destinations/kashmir/srinagar/04.jpg",
    "/destinations/kashmir/nishat_bagh/1.jpg",
    "/destinations/kashmir/srinagar/05.jpg"
  ],

  faqs: [
    {
      question: "What makes Keran Valley different from other Kashmir destinations?",
      answer: "Keran Valley is newly opened to tourism, making it one of Kashmir's most uncrowded and authentic destinations. Unlike popular spots like Gulmarg or Pahalgam, Keran remains largely untouched by commercialization. It offers pure nature experiences - river walks, meadows, orchards, traditional villages - without tourist crowds. Perfect for travelers seeking peace, quiet, and authentic mountain life."
    },
    {
      question: "When is the best time to visit Keran Valley?",
      answer: "Keran is accessible from May to October. The best months are May-September. Spring (May-June) brings blossoms and fresh greenery, summer (July-August) offers lush landscapes and pleasant weather, and early autumn (September-October) showcases golden colors. The valley becomes snow-bound and inaccessible in winter."
    },
    {
      question: "Is Keran Valley suitable for families with children?",
      answer: "Yes! Keran is ideal for families seeking a peaceful retreat. The pace is slow, walks are easy, and the river and meadows provide natural play areas for children. Accommodation is simple but safe and clean. Children age 8+ typically enjoy the nature immersion, village exploration, and stargazing. It's a great escape from screens and city life."
    },
    {
      question: "What is the accommodation really like in Keran?",
      answer: "Keran accommodation is simple but clean and comfortable - think guesthouses or cottages run by local families with warm hospitality. Facilities are basic (clean beds, hot water, simple bathrooms) but the riverside locations and mountain views are priceless. This is authentic, non-luxury travel where the experience and nature are the real attractions."
    },
    {
      question: "Are Inner-Line Permits required for Keran?",
      answer: "Yes, Keran Valley requires Inner-Line Permits as it's in a border area near the Line of Control. We arrange all permits as part of the package - you just need to provide ID copies. Permit requirements can change based on security situations, and we stay updated on current regulations."
    },
    {
      question: "What about mobile network and internet in Keran?",
      answer: "Mobile connectivity in Keran is very limited and often intermittent. WiFi is available at some lodges but expect slow speeds or no connectivity. We recommend embracing this as a digital detox - an opportunity to disconnect from screens and fully connect with nature, which is the whole point of visiting such a remote valley."
    },
    {
      question: "What should I pack for Keran Valley?",
      answer: "Pack comfortable walking shoes, warm layers (temperatures drop at night even in summer), rain jacket, sun protection, insect repellent, flashlight, personal medications, camera, and any specific toiletries you need. Bring cash as ATMs are limited. A book or journal is great for leisure time."
    },
    {
      question: "Why is lunch not included in the package?",
      answer: "Lunch is excluded to give you flexibility - you can eat at your lodge, have packed lunches during excursions, or enjoy light snacks based on your appetite. Options in Keran are limited but hosts can arrange meals. This also keeps the package more affordable while ensuring quality breakfast and dinner."
    },
    {
      question: "Can we extend our stay in Keran?",
      answer: "Yes! If you fall in love with Keran's peace and quiet (many travelers do), you can add extra nights. Contact us to extend your lodge booking (subject to availability) and enjoy more days of slow travel, river walks, and stargazing."
    },
    {
      question: "What's the difference between Keran and Gurez valleys?",
      answer: "Both are hidden frontier valleys along the Kishanganga River. Gurez is more remote and famous with better (though still limited) infrastructure. Keran is newer to tourism, even more peaceful, and slightly easier to reach. Gurez offers more dramatic landscapes and cultural immersion with the Dard community, while Keran offers simpler nature experiences perfect for families and those seeking absolute quiet. Both are excellent off-beat choices."
    }
  ],

  amenities: [
    { icon: "Mountain", label: "Farkian Top Views" },
    { icon: "Hotel", label: "3-Star + Nature Lodge" },
    { icon: "Utensils", label: "Breakfast & Dinner Daily" },
    { icon: "Car", label: "Private Vehicle & Guide" },
    { icon: "FileCheck", label: "Permits Arranged" },
    { icon: "Star", label: "Zero Light Pollution" }
  ],

  sustainability: [
    { icon: "Leaf", title: "Emerging Destination Support", description: "Supporting a newly opened valley with responsible tourism practices from the start" },
    { icon: "Users", title: "Local Community Tourism", description: "Staying with local families and supporting village-based hospitality directly" },
    { icon: "Award", title: "Slow Travel Philosophy", description: "Promoting mindful, unhurried travel that respects nature and local pace of life" }
  ]
};

// Detailed tour information for Off-Beat Kashmir Unveiled 11N12D
export const offbeatKashmir11N12DDetail = {
  id: "offbeat-kashmir-11n12d",
  coverImage: "/tour_covers/offbeat-kashmir-11n12d.png",
  tourCode: "JRN-OBK-11N12D",
  title: "Off-Beat Kashmir Unveiled - Complete Explorer",
  subtitle: "11 Nights / 12 Days – Hidden Kashmir Circuit",
  description: "An immersive journey into Kashmir's lesser-known wonders — tranquil lakes, lost temples, alpine meadows, and ancient ruins. This comprehensive circuit takes you far beyond the usual tourist trail to discover the emerald meadows of Tosa Maidan, the sacred springs of Verinag, the vast waters of Wular and Manasbal lakes, the historic marvels of Martand Sun Temple and Awantipora ruins, the pristine Doodhpathri meadows, and peaceful corners of Srinagar's old city. This itinerary perfectly blends nature, heritage, and quiet exploration — tranquil lakes, day hikes, sacred spaces, shepherd trails, lotus blooms, ancient stone temples, and postcard landscapes with limited crowds. Experience Kashmir as few tourists do: slowly, deeply, authentically.",
  price: 849,
  originalPrice: 1099,
  discount: 23,
  duration: "11 Nights / 12 Days",
  theme: "culture-heritage",
  groupSize: "2-12 People",
  rating: 4.9,
  reviews: 56,
  category: "Heritage & Nature Circuit",
  season: "All Year Round (Best: April-October)",
  departureTime: "Upon arrival at Srinagar Airport",
  returnTime: "After breakfast on Day 12",
  dressCode: "Comfortable walking shoes, layered clothing, modest attire for temples",
  tourType: "Comprehensive Off-Beat Heritage & Nature Circuit",
  language: "English, Hindi, Urdu, Kashmiri",
  minAge: 10,
  
  availableDates: [
    "2026-04-01",
    "2026-04-15",
    "2026-05-01",
    "2026-05-15",
    "2026-06-01",
    "2026-06-15",
    "2026-07-01",
    "2026-07-15",
    "2026-08-01",
    "2026-08-15",
    "2026-09-01",
    "2026-09-15",
    "2026-10-01"
  ],

  addons: [
    { id: 1, name: "Professional Heritage Guide", price: 150, description: "Expert guide for temples, ruins, and historical sites" },
    { id: 2, name: "Photography Package", price: 180, description: "Professional photographer for heritage & landscape shoots" },
    { id: 3, name: "Gondola Cable Car Gulmarg", price: 40, description: "Gondola Phase 1 tickets for the group" },
    { id: 4, name: "Naranaag Temple Excursion", price: 80, description: "Additional day trip to ancient Naranaag ruins" },
    { id: 5, name: "Cultural Performance Evening", price: 100, description: "Traditional Kashmiri music and dance show in Srinagar" },
    { id: 6, name: "Trout Fishing Experience", price: 60, description: "Fishing session at Kokernag trout farm" }
  ],

  highlights: [
    "Comprehensive 12-day circuit covering Kashmir's hidden gems",
    "Doodhpathri meadows with Doodh Ganga river walks",
    "Tosa Maidan alpine grasslands and shepherd trails",
    "Wular Lake (India's largest freshwater lake) boat views",
    "Manasbal Lake with lotus blooms and birdwatching",
    "Sacred Verinag Spring - source of Jhelum River",
    "Kokernag gardens and optional trout farm visit",
    "Martand Sun Temple - 8th century architectural marvel",
    "Awantipora ruins - ancient temple complex",
    "Kheer Bhawani Temple at Tulmulla - sacred Hindu site",
    "Old Srinagar Downtown heritage walks",
    "Pahalgam valley - Aru, Betaab valleys, Lidder River",
    "Sonmarg meadows and Thajiwas Glacier views",
    "Gulmarg alpine wonderland",
    "1-hour Shikara ride on Dal Lake",
    "Professional guide assistance throughout"
  ],

  inclusions: [
    "11 nights accommodation in 3-star category hotels/cottages/guesthouses as per location",
    "Daily breakfast and dinner throughout the tour (MAP basis)",
    "Private chauffeur-driven cab for entire 12-day journey",
    "1-hour Shikara ride on Dal Lake",
    "Professional guide assistance throughout the trip",
    "All transfers and sightseeing as per itinerary",
    "All fuel charges, driver allowances, tolls, and parking fees",
    "Local permissions and permits where applicable",
    "All applicable taxes and GST"
  ],

  exclusions: [
    "Airfare or train tickets to/from Srinagar",
    "Lunch meals, snacks, and personal beverages",
    "Entry tickets to monuments, museums, temples, and ruins",
    "Pony rides, ATV rides, local jeeps for off-road trails",
    "Adventure activities (sledging, rafting, skiing, ziplining, etc.)",
    "Gondola cable car ride in Gulmarg",
    "Personal expenses, shopping, laundry, and tips",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Srinagar - Lakeside Welcome",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Arrive at Srinagar Airport and receive a warm traditional welcome from your driver and guide. Transfer to your lakeside hotel and complete check-in. After settling in, take the afternoon to acclimatize and explore the immediate surroundings. In the evening, enjoy a sunset walk around Boulevard Road, soaking in the views of Dal Lake with its shikaras, houseboats, and the Zabarwan mountains as a backdrop. Explore the floating bakeries selling fresh Kashmiri bread, and browse colorful markets selling handicrafts, dry fruits, and Kashmiri kahwa. This gentle introduction sets the tone for your 12-day journey into Kashmir's hidden treasures. Return to the hotel for a welcome dinner and overnight stay in Srinagar.",
      activities: [
        "Airport arrival and traditional welcome",
        "Transfer to lakeside hotel",
        "Check-in and room allocation",
        "Afternoon rest and acclimatization",
        "Sunset walk along Boulevard Road",
        "Dal Lake observation and photography",
        "Floating bakery exploration",
        "Local market browsing",
        "Welcome dinner",
        "Overnight rest"
      ],
      meals: ["Dinner"],
      accommodation: "3-Star Hotel in Srinagar",
      highlights: [
        "First Dal Lake sunset",
        "Boulevard Road atmosphere",
        "Floating market experience"
      ]
    },
    {
      day: 2,
      title: "Srinagar Old City & Kheer Bhawani Temple",
      location: "Srinagar → Tulmulla → Srinagar",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "After breakfast, drive to Tulmulla (about 27 km from Srinagar) to visit the sacred Kheer Bhawani Temple, one of Kashmir's most revered Hindu pilgrimage sites. The temple is dedicated to the Goddess Ragnya Devi, and the spring water here is believed to change colors - a phenomenon considered auspicious or ominous depending on the hue. Observe the peaceful atmosphere, the sacred spring pool, and the devotion of pilgrims. Return to Srinagar and spend the afternoon exploring Downtown Srinagar (Shahr-e-Khas), the old city with its narrow alleys, historic shrines, and vibrant spice markets. Visit the Jama Masjid, one of Kashmir's oldest mosques with its beautiful Indo-Saracenic architecture. Walk through bustling bazaars selling everything from spices and dried fruits to copperware and papier-mâché items. The old city offers an authentic glimpse into traditional Kashmiri life, largely unchanged for centuries. In the evening, return to Dal Lake for a peaceful stroll or simply relax at your hotel. Dinner and overnight in Srinagar.",
      activities: [
        "Breakfast at hotel",
        "Drive to Tulmulla village",
        "Visit Kheer Bhawani Temple",
        "Sacred spring observation",
        "Pilgrimage site cultural experience",
        "Return to Srinagar",
        "Downtown Srinagar heritage walk",
        "Jama Masjid visit",
        "Old city alley exploration",
        "Spice market browsing",
        "Traditional bazaar shopping",
        "Evening at Dal Lake",
        "Dinner at hotel"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Srinagar",
      highlights: [
        "Sacred Kheer Bhawani Temple",
        "Old Srinagar heritage lanes",
        "Authentic local market experience"
      ]
    },
    {
      day: 3,
      title: "Doodhpathri Meadows - Valley of Milk",
      location: "Srinagar → Doodhpathri → Srinagar (42 km each way)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Today's excursion takes you to Doodhpathri, meaning 'Valley of Milk', named for the milky-white water of the Doodh Ganga stream that flows through emerald meadows. After breakfast, drive southwest from Srinagar through scenic countryside and pine forests. Arrive at this pristine meadow destination, far less crowded than Gulmarg or Pahalgam. Walk along the Doodh Ganga river, whose water appears white due to its frothy, fast-flowing nature over smooth pebbles. The meadows are carpeted with wildflowers in season (May-August), creating a stunning natural display. Enjoy a stream-side picnic with packed lunch or tea, listening to the river's constant music. You have the option of a pony ride to Palmaidan, a higher meadow with even more spectacular views, or simply relaxing in the main meadow, perfect for photography, nature walks, or just sitting in contemplation. The air here is exceptionally pure, and the tranquility profound. Return to Srinagar in the late afternoon. Dinner and overnight in Srinagar.",
      activities: [
        "Breakfast and departure",
        "Scenic drive to Doodhpathri",
        "Pine forest drive",
        "Arrival at Valley of Milk",
        "Doodh Ganga river walk",
        "Wildflower meadow exploration",
        "Stream-side picnic and tea",
        "Photography session",
        "Optional pony ride to Palmaidan",
        "Nature immersion and relaxation",
        "Return drive to Srinagar",
        "Evening leisure",
        "Dinner at hotel"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Srinagar",
      highlights: [
        "Doodhpathri's pristine meadows",
        "Milky Doodh Ganga river",
        "Wildflower landscapes"
      ]
    },
    {
      day: 4,
      title: "Tosa Maidan - Alpine Grassland Explorer",
      location: "Srinagar → Tosa Maidan → Srinagar (Via Magam & Khag)",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "Embark on a full-day exploration of Tosa Maidan, one of Kashmir's most beautiful but lesser-visited alpine meadows. Drive via Magam and through dense Khag forests, gradually ascending to the vast grasslands of Tosa Maidan at about 3,000 meters altitude. This high-altitude meadow stretches as far as the eye can see, surrounded by snow-capped peaks. The grasslands are traditionally used by Gujjar and Bakarwal shepherds for summer grazing. Walk through the rolling meadows, following shepherd trails and observing the pastoral lifestyle. If accessible and appropriate, enjoy a tea stop with Gujjar families in their temporary summer settlements, learning about their nomadic lifestyle and traditional practices. The landscape here is breathtaking - expansive green meadows meeting blue sky, dotted with wildflowers and grazing livestock. The sense of space and freedom is incredible. Pack a picnic lunch to enjoy in the meadows. The afternoon light creates magical photography opportunities. Return to Srinagar via the same scenic route in the evening. Dinner and overnight in Srinagar.",
      activities: [
        "Early breakfast",
        "Drive via Magam town",
        "Khag forest passage",
        "Ascent to Tosa Maidan grasslands",
        "Alpine meadow walks",
        "Shepherd trail exploration",
        "Gujjar settlement observation",
        "Optional tea with Gujjar families",
        "Nomadic lifestyle learning",
        "Meadow picnic lunch",
        "Pastoral photography",
        "High-altitude nature immersion",
        "Return drive to Srinagar",
        "Dinner at hotel"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Srinagar",
      highlights: [
        "Tosa Maidan's vast grasslands",
        "Shepherd trail experiences",
        "Gujjar cultural interaction"
      ]
    },
    {
      day: 5,
      title: "Wular Lake → Manasbal Lake → Astanmarg",
      location: "Srinagar → Wular → Manasbal → Astanmarg → Srinagar",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "Today's journey explores Kashmir's most beautiful lakes beyond the famous Dal. After breakfast, drive north to Wular Lake, one of Asia's largest freshwater lakes and India's biggest. The lake's vastness is impressive - it stretches to the horizon like an inland sea. Take a boat ride or simply observe from viewpoints along the shore, watching fishing boats, migratory birds, and the play of light on water. Continue to Manasbal Lake, often called the 'Supreme Gem of all Kashmir Lakes.' This crystal-clear lake is famous for its lotus blooms (best in July-August) and is a paradise for birdwatchers. The lake is surrounded by gardens and offers stunning reflections of the Haramukh mountains. Spend time walking around the lake, observing aquatic birds, and enjoying the peaceful atmosphere. In the late afternoon, drive to Astanmarg viewpoint for sunset views over the valley. This elevated spot offers panoramic vistas of meadows, villages, and distant peaks painted in golden light. Return to Srinagar in the evening. Dinner and overnight in Srinagar.",
      activities: [
        "Breakfast and departure",
        "Drive to Wular Lake",
        "Wular Lake boat views",
        "Observe fishing boats and lake vastness",
        "Birdwatching opportunities",
        "Continue to Manasbal Lake",
        "Manasbal Lake walk",
        "Lotus bloom observation (seasonal)",
        "Haramukh mountain reflections",
        "Aquatic bird spotting",
        "Drive to Astanmarg viewpoint",
        "Sunset panoramic views",
        "Photography session",
        "Return to Srinagar",
        "Dinner at hotel"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Srinagar",
      highlights: [
        "Wular Lake's vastness",
        "Manasbal lotus blooms",
        "Astanmarg sunset panorama"
      ]
    },
    {
      day: 6,
      title: "Srinagar to Pahalgam via Verinag & Kokernag",
      location: "Srinagar → Verinag → Kokernag → Pahalgam (130 km, 4-5 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "After breakfast and checkout from Srinagar, begin your journey south toward Pahalgam with two beautiful stops en route. First, visit Verinag Spring, the source of the Jhelum River. This octagonal spring pool, built by Mughal Emperor Jahangir, gushes with crystal-clear water from underground sources. The spring is surrounded by beautifully landscaped gardens with Chinar trees, creating a serene atmosphere. The water is incredibly pure, and the site has both historical and religious significance. Continue to Kokernag, famous for its botanical gardens and freshwater springs. The Kokernag garden, established by the Mughals and later developed by Maharaja Hari Singh, features water channels, colorful flowerbeds, and towering Chinar trees. The multiple springs here feed trout pools. If interested, you can visit the optional trout farm to see rainbow and brown trout cultivation - Kashmir is famous for its trout fishing. After lunch on your own in Kokernag or along the route, continue the scenic drive to Pahalgam through the Lidder Valley. The drive follows the Lidder River, passing through pine forests and small villages. Arrive in Pahalgam by evening and check into your hotel/cottage. Pahalgam, the 'Valley of Shepherds', serves as your base for the next two nights. Dinner and overnight in Pahalgam.",
      activities: [
        "Breakfast and Srinagar checkout",
        "Drive toward south Kashmir",
        "Visit Verinag Spring (source of Jhelum)",
        "Octagonal spring pool observation",
        "Mughal garden walk",
        "Continue to Kokernag",
        "Explore Kokernag Botanical Garden",
        "Freshwater spring observation",
        "Optional trout farm visit",
        "Lunch break (own arrangement)",
        "Scenic drive through Lidder Valley",
        "Pine forest and river views",
        "Arrival in Pahalgam",
        "Hotel check-in",
        "Evening leisure",
        "Dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel/Cottage in Pahalgam",
      highlights: [
        "Sacred Verinag Spring",
        "Kokernag garden beauty",
        "Lidder Valley scenic drive"
      ]
    },
    {
      day: 7,
      title: "Martand Sun Temple & Awantipora Ruins",
      location: "Pahalgam → Martand → Awantipora → Pahalgam",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "Today is dedicated to exploring Kashmir's rich ancient heritage through two remarkable temple complexes. After breakfast, drive to Martand Sun Temple near Anantnag, one of the finest examples of ancient Kashmiri architecture. Built in the 8th century by King Lalitaditya Muktapida, this temple dedicated to Surya (the Sun God) stands majestically on a plateau overlooking the Kashmir Valley. Though now in ruins, the temple's grandeur is still evident in its 84 columns, intricate stone carvings, and strategic architectural design. The temple faces east to catch the first rays of sunrise, and the views from this elevated site are spectacular. Spend time exploring the ruins, understanding the architectural elements with your guide, and photographing this historic marvel. Continue to Awantipora to visit the ruins of two ancient temple complexes built by King Avantivarman in the 9th century - the Avantiswami Temple (dedicated to Vishnu) and Avantiswara Temple (dedicated to Shiva). These ruins, though less visited, showcase the artistic and architectural achievements of medieval Kashmir. The stone carvings, despite centuries of weathering, still display remarkable craftsmanship. Return to Pahalgam and spend the evening exploring Lidder Valley markets, browsing local handicrafts, woolens, and dry fruits. Dinner and overnight in Pahalgam.",
      activities: [
        "Breakfast at hotel",
        "Drive to Martand Sun Temple",
        "Explore 8th-century temple ruins",
        "Ancient architecture appreciation",
        "Stone carving observation",
        "Valley views from temple plateau",
        "Photography and heritage learning",
        "Continue to Awantipora",
        "Visit Avantiswami Temple ruins",
        "Explore Avantiswara Temple ruins",
        "9th-century craftsmanship study",
        "Return to Pahalgam",
        "Evening Lidder Valley market walk",
        "Local handicraft shopping",
        "Dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel/Cottage in Pahalgam",
      highlights: [
        "Martand Sun Temple grandeur",
        "8th-century architecture",
        "Awantipora twin temple ruins"
      ]
    },
    {
      day: 8,
      title: "Pahalgam Valley Exploration - Aru & Betaab",
      location: "Pahalgam Local Sightseeing",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Dedicate today to exploring the beautiful valleys around Pahalgam. After breakfast, visit Aru Valley (about 12 km from Pahalgam), a pristine village and meadow known for its scenic beauty and as a base for trekking expeditions. The valley is surrounded by mountains and offers beautiful walks through meadows and along streams. Continue to Betaab Valley, named after the Bollywood film 'Betaab' shot here. This lush green valley with its carpet of grass, dense pine forests, and snow-covered mountains is picture-perfect. Spend time walking through the valley, enjoying the landscape and the Lidder River's beauty. Return to Pahalgam town for lunch (on your own) and spend the afternoon on riverside walks along the Lidder River. The river, fed by glaciers and snowmelt, flows with clear turquoise water. You might observe local fishermen trying their luck for trout, or families enjoying picnics on the riverbanks. Optional: Take a pony ride to Baisaran, often called 'Mini Switzerland' for its meadow beauty. The 30-minute pony ride takes you through forests to an open meadow with stunning 360-degree views of snow-covered peaks. If time and energy permit, you might also visit Chandanwari (base for Amarnath Yatra) or other nearby spots. Evening at leisure in Pahalgam. Dinner and overnight.",
      activities: [
        "Breakfast at hotel",
        "Drive to Aru Valley",
        "Aru Valley meadow walks",
        "Mountain and stream views",
        "Continue to Betaab Valley",
        "Betaab Valley exploration",
        "Bollywood filming location visit",
        "Pine forest walks",
        "Photography session",
        "Return to Pahalgam town",
        "Lunch break (own arrangement)",
        "Afternoon Lidder riverside walks",
        "River observation and relaxation",
        "Optional pony ride to Baisaran meadow",
        "Optional Chandanwari visit",
        "Evening leisure",
        "Dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel/Cottage in Pahalgam",
      highlights: [
        "Aru Valley pristine beauty",
        "Betaab Valley landscapes",
        "Optional Baisaran 'Mini Switzerland'"
      ]
    },
    {
      day: 9,
      title: "Pahalgam to Sonmarg - Golden Meadow Journey",
      location: "Pahalgam → Sonmarg (170 km via Srinagar, 5-6 hours)",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "After breakfast and checkout from Pahalgam, embark on a scenic journey to Sonmarg, the 'Meadow of Gold'. The drive initially retraces part of your route toward Srinagar before heading northeast through forests and gorges. The road follows the Sindh River, offering spectacular mountain and valley views. Pass through villages and pine forests, gradually ascending to higher altitudes. As you approach Sonmarg, the landscape opens up into vast meadows surrounded by snow-covered peaks. Arrive in Sonmarg by afternoon and check into your hotel/guesthouse. After settling in, take an evening walk through the golden meadows (the grass takes on a golden hue, hence the name). Observe the Sindh River flowing through the valley, and enjoy views of the surrounding glaciers and peaks. The air here is crisp and fresh, the atmosphere peaceful. In season (May-September), the meadows are dotted with wildflowers. Enjoy a relaxed evening soaking in the high-altitude mountain environment. Dinner and overnight in Sonmarg.",
      activities: [
        "Breakfast and Pahalgam checkout",
        "Scenic drive toward Sonmarg",
        "Forest and gorge passage",
        "Sindh River valley drive",
        "Mountain landscape photography stops",
        "Village and pine forest views",
        "Arrival in Sonmarg",
        "Hotel/guesthouse check-in",
        "Evening golden meadow walk",
        "Sindh River observation",
        "Glacier valley views",
        "Wildflower meadow exploration (seasonal)",
        "High-altitude atmosphere enjoyment",
        "Dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel/Guesthouse in Sonmarg",
      highlights: [
        "Scenic mountain drive",
        "Sonmarg's golden meadows",
        "Glacier-surrounded valley"
      ]
    },
    {
      day: 10,
      title: "Sonmarg Meadows & Optional Thajiwas Glacier",
      location: "Sonmarg Local Exploration",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Today is dedicated to exploring Sonmarg's natural beauty. After breakfast, you have several options based on your interests and energy levels. Popular choice: Take a pony ride or hike toward Thajiwas Glacier, located about 3-4 km from the main meadow. The journey offers stunning views of snow-covered slopes even in summer. While you don't reach the actual glacier face, you get close enough to observe the snowfields and feel the glacial chill. The walk/ride takes you through meadows and up rocky paths with increasingly dramatic views. Alternative: Visit the Naranaag ruins (if time and permissions allow) - an ancient temple complex dedicated to Shiva, dating back to the 8th century. These ruins are less visited but architecturally significant. If preferring a relaxed day, spend time walking through Sonmarg's various meadows, following the Sindh River upstream, and simply absorbing the high-altitude atmosphere. The meadows offer numerous spots for picnics, photography, or meditation. Watch local shepherd activity, observe Himalayan birds, and enjoy the play of light on mountains. In the afternoon, you might explore the local market for woolens and handicrafts. Enjoy sunset by the riverbank as the golden light illuminates the peaks. Dinner and overnight in Sonmarg.",
      activities: [
        "Breakfast with mountain views",
        "Option 1: Pony ride to Thajiwas Glacier area",
        "Glacier viewpoint exploration",
        "Snowfield observation",
        "High-altitude photography",
        "Option 2: Naranaag temple ruins visit",
        "8th-century architecture study",
        "Option 3: Relaxed meadow walks",
        "Sindh River upstream exploration",
        "Shepherd observation",
        "Himalayan birdwatching",
        "Photography and nature time",
        "Afternoon local market visit",
        "Sunset by riverbank",
        "Dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel/Guesthouse in Sonmarg",
      highlights: [
        "Thajiwas Glacier proximity",
        "Optional Naranaag ruins",
        "Meadow of Gold relaxation"
      ]
    },
    {
      day: 11,
      title: "Sonmarg to Gulmarg - Alpine Transition",
      location: "Sonmarg → Gulmarg (120 km via Srinagar, 4-5 hours)",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "After breakfast and checkout from Sonmarg, drive to Gulmarg, transitioning from the golden meadows to the 'Meadow of Flowers'. The journey takes you through Srinagar and then west toward the famous hill station. As you approach Gulmarg, the road winds through forests, gradually revealing the vast meadow bowl surrounded by towering peaks. Arrive in Gulmarg by early afternoon and check into your hotel. Gulmarg, at about 2,650 meters altitude, is Kashmir's premier hill station, famous for its skiing in winter and lush meadows in summer. After settling in, spend the afternoon exploring Gulmarg. Options include: taking the Gondola cable car to Phase 1 (Kongdori) for spectacular views of the valley and Nanga Parbat on clear days (tickets at extra cost); walking through the Children's Park area; exploring Strawberry Valley nearby; or simply strolling through the main meadow, famous for its carpet of flowers in summer. Visit the historic St. Mary's Church, built in 1902, a charming stone structure in the midst of the meadow. Enjoy the evening atmosphere of this alpine wonderland as the sun sets over the peaks. This is your final night in the mountains. Dinner and overnight in Gulmarg.",
      activities: [
        "Breakfast and Sonmarg checkout",
        "Scenic drive to Gulmarg via Srinagar",
        "Forest drive and mountain views",
        "Arrival in Gulmarg meadow",
        "Hotel check-in",
        "Optional Gondola cable car to Kongdori (Phase 1)",
        "Valley and Nanga Parbat views",
        "Children's Park walk",
        "Strawberry Valley exploration",
        "Main meadow stroll",
        "St. Mary's Church visit",
        "Alpine photography",
        "Evening mountain atmosphere",
        "Final mountain dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel/Cottage in Gulmarg",
      highlights: [
        "Gulmarg's famous meadows",
        "Optional Gondola experience",
        "Alpine wonderland evening"
      ]
    },
    {
      day: 12,
      title: "Gulmarg to Srinagar Departure - Journey's End",
      location: "Gulmarg → Srinagar Airport (60 km, 2 hours)",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Wake up to your final morning in the Kashmir mountains. After breakfast with views of the Gulmarg meadow and surrounding peaks, complete checkout formalities. Take a few last moments to absorb the alpine atmosphere, perhaps taking a short morning walk through the meadow or simply sitting and reflecting on the incredible 12-day journey you've completed. Depart Gulmarg and drive back to Srinagar for your airport transfer. The drive retraces your route through forests and gradually descends into the Kashmir Valley. Arrive at Srinagar Airport with time for your departure flight. Bid farewell to Kashmir with memories of hidden meadows, ancient temples, tranquil lakes, sacred springs, golden sunsets, shepherd trails, and the countless off-beat wonders you've discovered. This comprehensive journey has shown you a side of Kashmir few tourists experience - authentic, unhurried, rich in heritage and natural beauty. The images, experiences, and stories from these 12 days will stay with you for a lifetime.",
      activities: [
        "Breakfast with final mountain views",
        "Final morning walk in Gulmarg (optional)",
        "Hotel checkout",
        "Reflection and photography",
        "Drive to Srinagar",
        "Forest and valley descent",
        "Transfer to Srinagar Airport",
        "Departure with comprehensive memories"
      ],
      meals: ["Breakfast"],
      accommodation: "N/A",
      highlights: [
        "Final Gulmarg morning",
        "12-day journey completed",
        "Off-beat Kashmir unveiled"
      ]
    }
  ],

  accommodationDetails: {
    title: "3-Star Category Hotels & Cottages",
    description: "Comfortable accommodation chosen for location and quiet settings throughout the circuit",
    hotels: [
      {
        name: "3-Star Hotels in Srinagar",
        type: "Hotel",
        location: "Srinagar",
        nights: 5,
        amenities: ["Comfortable rooms", "Dal Lake proximity", "Restaurant", "WiFi", "Hot water", "Heating", "Room service"]
      },
      {
        name: "3-Star Hotels/Cottages in Pahalgam",
        type: "Hotel/Cottage",
        location: "Pahalgam",
        nights: 2,
        amenities: ["Valley views", "Restaurant", "WiFi", "Hot water", "Comfortable rooms", "Lidder proximity"]
      },
      {
        name: "3-Star Hotels/Guesthouses in Sonmarg",
        type: "Hotel/Guesthouse",
        location: "Sonmarg",
        nights: 2,
        amenities: ["Meadow location", "Mountain views", "Basic comfort", "Hot water", "Restaurant"]
      },
      {
        name: "3-Star Hotels/Cottages in Gulmarg",
        type: "Hotel/Cottage",
        location: "Gulmarg",
        nights: 1,
        amenities: ["Meadow views", "Alpine setting", "Hot water", "Restaurant", "Central location"]
      }
    ],
    note: "Accommodation standard maintained across all locations. Hotels and cottages chosen for comfort, location, and quiet settings conducive to the off-beat exploration theme."
  },

  images: [
    "/destinations/kashmir/doodpathri/1.jpg",
    "/destinations/kashmir/verinag/01.jpg",
    "/destinations/kashmir/doodpathri/2.jpg",
    "/destinations/kashmir/srinagar/01.jpg",
    "/destinations/kashmir/verinag/02.jpg",
    "/destinations/kashmir/doodpathri/3.jpg",
    "/destinations/kashmir/gulmarg/01.jpg",
    "/destinations/kashmir/sonamarg/1.jpg",
    "/destinations/kashmir/doodpathri/4.jpg"
  ],

  faqs: [
    {
      question: "What makes this tour 'off-beat' compared to regular Kashmir packages?",
      answer: "This tour goes far beyond the usual Gulmarg-Pahalgam-Sonmarg circuit. You'll visit lesser-known gems like Doodhpathri meadows, Tosa Maidan grasslands, Wular and Manasbal lakes, ancient temple ruins (Martand, Awantipora), sacred springs (Verinag, Kokernag), Kheer Bhawani Temple, and Srinagar's old city heritage areas. These destinations see far fewer tourists but offer equally stunning beauty, rich history, and authentic experiences."
    },
    {
      question: "Is this tour suitable for all age groups?",
      answer: "Yes, this tour is suitable for ages 10+. While comprehensive with many destinations, the pace is relaxed with moderate walking involved. Most sites are accessible by vehicle with short walks. The 12-day duration allows for unhurried exploration without exhausting schedules. Families, senior travelers with reasonable mobility, and solo travelers all enjoy this circuit."
    },
    {
      question: "What is the best season for this tour?",
      answer: "The tour runs year-round but is best from April to October. Spring (April-May) brings blossoms, summer (June-August) offers lush meadows and lotus blooms at Manasbal, autumn (September-October) showcases golden colors. Winter is possible but some high-altitude areas like Sonmarg may have limited access due to snow."
    },
    {
      question: "How much walking is involved?",
      answer: "Walking is moderate and mostly optional. Most destinations are accessible by vehicle with walks ranging from 15 minutes to 1-2 hours for those who wish to explore fully. All walks are at your own pace with rest opportunities. Pony rides are available at several locations for those preferring not to walk long distances."
    },
    {
      question: "Are entry fees to temples and monuments included?",
      answer: "No, entry fees to monuments (Martand Temple, Awantipora ruins, etc.) and gardens are excluded to keep the base package affordable. These fees are typically nominal (₹20-100 per person per site). Your guide will advise on fees at each location."
    },
    {
      question: "Can the itinerary be customized?",
      answer: "Absolutely! This 12-day circuit can be customized based on your interests. Want more time at temples? Prefer additional meadow days? Want to skip certain destinations? We can tailor the itinerary to your preferences. Contact us to discuss your ideal Kashmir exploration."
    },
    {
      question: "Is a guide really necessary for the full tour?",
      answer: "Yes, highly recommended. Your guide provides historical context at heritage sites, helps navigate local areas, facilitates cultural interactions, and ensures you get the most from each destination. At places like Martand Temple, Awantipora ruins, and old Srinagar, expert commentary enriches the experience significantly."
    },
    {
      question: "What should I pack for this 12-day tour?",
      answer: "Pack layers for varying altitudes and temperatures, comfortable walking shoes, modest clothing for temple visits, rain jacket, sun protection, camera with extra batteries/memory cards, day backpack, personal medications, and basic toiletries. A small flashlight and reusable water bottle are useful."
    },
    {
      question: "Will we have time for shopping?",
      answer: "Yes, the itinerary includes free time in Srinagar (evenings on Days 1-5), Pahalgam (evening Day 7), and brief stops at local markets. You'll have opportunities to buy handicrafts, Pashminas, carpets, dry fruits, and souvenirs throughout the journey without feeling rushed."
    },
    {
      question: "How is this tour different from the usual 6-7 day Kashmir packages?",
      answer: "Most Kashmir packages cover only Srinagar-Gulmarg-Pahalgam-Sonmarg in 5-7 days with a rushed schedule. This 12-day circuit adds: ancient temple ruins, sacred springs, high-altitude meadows like Doodhpathri and Tosa Maidan, pristine lakes (Wular, Manasbal), heritage sites, old city exploration, and shepherd trail experiences. It's comprehensive, unhurried, and focuses on authentic, off-beat Kashmir rather than just the famous spots."
    }
  ],

  amenities: [
    { icon: "Calendar", label: "Comprehensive 12-Day Circuit" },
    { icon: "Mountain", label: "Multiple Meadows & Lakes" },
    { icon: "Award", label: "Ancient Temple Ruins" },
    { icon: "Users", label: "Professional Guide" },
    { icon: "Hotel", label: "3-Star Comfort" },
    { icon: "Car", label: "Private Cab Entire Journey" }
  ],

  sustainability: [
    { icon: "Leaf", title: "Distributed Tourism", description: "Spreading tourism benefits across multiple lesser-visited destinations, reducing pressure on crowded hotspots" },
    { icon: "Award", title: "Heritage Preservation Awareness", description: "Visiting and supporting ancient sites helps raise awareness for their preservation and maintenance" },
    { icon: "Users", title: "Slow Travel Philosophy", description: "Promoting unhurried, mindful exploration that respects local pace of life and allows deeper cultural connections" }
  ]
};

// Detailed tour information for Kashmir Special - Luxe Escape 5N6D 4-Star
export const kashmirSpecial5N6D4StarDetail = {
  id: "kashmir-special-5n6d-4star",
  coverImage: "/tour_covers/kashmir-special-5n6d-4star.png",
  tourCode: "JRN-KSP-5N6D-4S",
  title: "Kashmir Special - Luxe Escape",
  subtitle: "5 Nights / 6 Days — 4-Star Premium Experience",
  description: "A refined Kashmir getaway bringing together the best of lakes, Mughal gardens, high meadows, and river valleys — all wrapped in 4-star comfort and curated sightseeing at a relaxed pace. This elegant circuit perfectly balances culture, nature, and leisure. Spend dreamy evenings on Dal Lake's lakefront watching shikaras glide by, ride through pine valleys to Pahalgam's riverside meadows, feel the alpine chill on Gulmarg's snow slopes, explore Sonmarg's glacial meadows, and discover the timeless beauty of Srinagar's Mughal gardens. With premium 4-star accommodations, private exclusive cab, and thoughtfully planned sightseeing, this tour is designed for couples, families, and friends seeking comfort with authentic Kashmiri charm. Experience Kashmir at its finest without compromising on luxury or relaxation.",
  price: 599,
  originalPrice: 749,
  discount: 20,
  duration: "5 Nights / 6 Days",
  theme: "family-leisure",
  groupSize: "2-8 People",
  rating: 4.8,
  reviews: 94,
  category: "Premium Leisure",
  season: "All Year Round",
  departureTime: "Upon arrival at Srinagar Airport",
  returnTime: "After breakfast on Day 6",
  dressCode: "Comfortable smart-casual attire, warm layers for high altitudes",
  tourType: "Premium 4-Star Kashmir Circuit",
  language: "English, Hindi, Urdu, Kashmiri",
  minAge: 5,
  
  availableDates: [
    "2026-02-14",
    "2026-03-01",
    "2026-03-15",
    "2026-04-01",
    "2026-04-15",
    "2026-05-01",
    "2026-05-15",
    "2026-06-01",
    "2026-06-15",
    "2026-07-01",
    "2026-07-15",
    "2026-08-01",
    "2026-08-15",
    "2026-09-01"
  ],

  addons: [
    { id: 1, name: "Gondola Cable Car Gulmarg", price: 40, description: "Gondola Phase 1 tickets for the group" },
    { id: 2, name: "Houseboat Night Experience", price: 80, description: "Replace one Srinagar hotel night with luxury houseboat" },
    { id: 3, name: "Romantic Candlelight Dinner", price: 60, description: "Special lakeside or garden candlelight dinner setup" },
    { id: 4, name: "Professional Photography", price: 120, description: "Half-day professional photographer for family/couple shots" },
    { id: 5, name: "Kashmiri Wazwan Feast", price: 70, description: "Traditional multi-course Wazwan dinner experience" },
    { id: 6, name: "Extra Shikara Ride", price: 30, description: "Additional 1-hour Shikara ride on Dal Lake" }
  ],

  highlights: [
    "Premium 4-star hotels and resorts throughout the journey",
    "3 nights in Srinagar - Kashmir's cultural heart",
    "1 night in Gulmarg - alpine meadow wonderland",
    "1 night in Pahalgam - valley of shepherds",
    "Sonmarg full-day excursion - meadow of gold",
    "Comprehensive Mughal Garden circuit - Shalimar, Nishat, Chashme Shahi",
    "1-hour sunset Shikara ride on Dal Lake included",
    "Private exclusive cab for entire journey",
    "Relaxed pace - no rushing between destinations",
    "Riverside walks in Pahalgam (Aru/Betaab valleys)",
    "Alpine meadow exploration in Gulmarg",
    "Optional cable car ride and snow activities",
    "Old Srinagar heritage lanes exploration",
    "Floating shops and local market experiences",
    "Daily breakfast and dinner at premium properties",
    "Airport pickup and drop included"
  ],

  inclusions: [
    "5 nights accommodation in 4-star category hotels/resorts (3N Srinagar + 1N Gulmarg + 1N Pahalgam)",
    "Daily breakfast and dinner at hotel restaurants",
    "Private exclusive cab with professional chauffeur for entire journey",
    "1-hour Shikara ride on Dal Lake (sunset timing)",
    "Airport pickup and drop transfers",
    "All fuel charges, parking fees, toll taxes",
    "Driver allowances and accommodation",
    "All applicable taxes and GST"
  ],

  exclusions: [
    "Airfare or train tickets to/from Srinagar",
    "Lunch meals, snacks, and beverages",
    "Entry tickets to monuments, gardens, and attractions",
    "Gondola cable car tickets in Gulmarg",
    "Pony rides, rafting, ATV rides, sledging, and adventure activities",
    "Shopping expenses, laundry, and tips",
    "Extra transfers or sightseeing beyond stated itinerary",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Srinagar & Boulevard Sunset",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Arrive at Srinagar Airport where you'll be warmly greeted and transferred to your premium 4-star hotel. Complete check-in and settle into your comfortable room with views of Dal Lake or the surrounding mountains. After freshening up, take the afternoon to rest or explore the hotel amenities. In the late afternoon or early evening, embark on a walk along the iconic Dal Boulevard (Boulevard Road), the scenic lakefront promenade that defines Srinagar's charm. Watch colorful shikaras glide across Dal Lake, observe houseboats anchored in rows, and soak in the mountain backdrop as the sun begins to set. Visit the floating shops accessible by small boats — they sell everything from flowers and vegetables to handicrafts. Alternatively, explore Polo View Market nearby for Kashmiri shawls, dry fruits, and souvenirs. The evening light on Dal Lake is magical, perfect for photography. Return to your hotel for a relaxed dinner at the in-house restaurant, enjoying Kashmiri or multi-cuisine options. Overnight at your 4-star hotel in Srinagar.",
      activities: [
        "Airport arrival and VIP welcome",
        "Transfer to 4-star hotel",
        "Check-in to premium room",
        "Afternoon rest and hotel amenity exploration",
        "Evening walk along Dal Boulevard",
        "Dal Lake observation and photography",
        "Floating shops visit",
        "Optional Polo View Market shopping",
        "Sunset viewing over mountains",
        "Dinner at hotel restaurant",
        "Overnight rest"
      ],
      meals: ["Dinner"],
      accommodation: "4-Star Hotel in Srinagar",
      highlights: [
        "Dal Lake Boulevard sunset",
        "Floating shops experience",
        "Premium hotel comfort"
      ]
    },
    {
      day: 2,
      title: "Srinagar Mughal Garden Circuit & Shikara Ride",
      location: "Srinagar",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "After a leisurely breakfast at the hotel, embark on a full day exploring Srinagar's timeless beauty and heritage through its famous Mughal Gardens. Begin with Shalimar Bagh (Abode of Love), the largest Mughal garden in Kashmir, built by Emperor Jahangir for his wife Nur Jahan. Walk through its terraced lawns, cascading fountains, and towering Chinar trees, admiring the symmetrical Mughal landscaping. Continue to Nishat Bagh (Garden of Bliss), beautifully positioned on the eastern banks of Dal Lake with the Zabarwan mountains as backdrop. The twelve terraces represent the twelve zodiac signs, and the view over Dal Lake from here is stunning. Visit Chashme Shahi (Royal Spring), the smallest but arguably most charming Mughal garden, built around a natural spring with sweet, pure water. Alternatively, visit Pari Mahal (Palace of Fairies), a historic monument perched on a hilltop offering panoramic views of Dal Lake and Srinagar city — perfect for photography. Optional: Take a detour through Downtown Srinagar's narrow lanes for an authentic local experience. Browse knick-knacks, visit traditional bakeries for Kashmiri bread, and observe craftsmen at work. In the late afternoon, enjoy your included sunset Shikara ride on Dal Lake. Glide peacefully across the mirror-like water, passing floating gardens, lotus patches, and houseboats. The one-hour ride offers intimate views of lake life and stunning sunset reflections. Return to the hotel for dinner. Overnight in Srinagar.",
      activities: [
        "Breakfast at hotel",
        "Visit Shalimar Bagh (Abode of Love)",
        "Terraced lawns and fountain appreciation",
        "Visit Nishat Bagh (Garden of Bliss)",
        "Twelve-terrace garden exploration",
        "Dal Lake views from Nishat",
        "Visit Chashme Shahi or Pari Mahal",
        "Royal spring observation or hilltop panorama",
        "Photography at scenic viewpoints",
        "Optional Downtown Srinagar heritage walk",
        "Traditional bakery stops",
        "Late afternoon sunset Shikara ride (1 hour included)",
        "Floating gardens and houseboat observation",
        "Dinner at hotel"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "4-Star Hotel in Srinagar",
      highlights: [
        "Mughal Gardens architectural beauty",
        "Panoramic lake and mountain views",
        "Romantic sunset Shikara ride"
      ]
    },
    {
      day: 3,
      title: "Srinagar to Pahalgam via Lidder Valley",
      location: "Srinagar → Pahalgam (95 km, 2.5 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "After breakfast and hotel checkout, begin your scenic drive to Pahalgam, the 'Valley of Shepherds'. The journey itself is a visual treat — drive alongside gushing rivers, pass through famous saffron fields (especially beautiful in October-November when purple blooms appear), and observe cricket-bat willow plantations that supply willow for cricket bats worldwide. The road follows the Lidder River as you enter the valley, with pine forests on both sides creating a green tunnel effect. Arrive in Pahalgam by midday and check into your 4-star resort nestled in scenic valley surroundings. After settling in, begin exploring Pahalgam's natural attractions. Take a riverside walk along the crystal-clear Lidder River, whose turquoise waters flow rapidly over smooth stones. Visit Aru Valley (about 12 km from Pahalgam), a pristine meadow village surrounded by mountains, or take picture stops at Betaab Valley, named after the Bollywood film and known for its lush green carpet of grass, pine forests, and snow-capped mountain backdrop. Explore local cafes serving kahwa and Kashmiri snacks, and walk through pine trails breathing the pure mountain air. The pace here is relaxed — this is your day to unwind in nature. Return to your resort for dinner, perhaps enjoying a bonfire if weather permits (resort dependent). Overnight at your 4-star resort in Pahalgam.",
      activities: [
        "Breakfast and Srinagar hotel checkout",
        "Scenic drive to Pahalgam",
        "Gushing river views along the route",
        "Saffron field observation (seasonal)",
        "Cricket-bat willow plantation views",
        "Lidder Valley entry through pine forests",
        "Arrival and check-in at 4-star resort",
        "Afternoon riverside walk at Lidder River",
        "Visit Aru Valley meadows",
        "Photo stops at Betaab Valley",
        "Explore local cafes and pine trails",
        "Nature immersion and relaxation",
        "Dinner at resort",
        "Optional bonfire evening"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "4-Star Resort in Pahalgam",
      highlights: [
        "Scenic Lidder Valley drive",
        "Aru and Betaab valley beauty",
        "Riverside relaxation"
      ]
    },
    {
      day: 4,
      title: "Pahalgam to Gulmarg - Meadow of Flowers",
      location: "Pahalgam → Gulmarg (140 km via Srinagar, 4 hours)",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "After breakfast and checkout from Pahalgam, embark on your journey to Gulmarg, one of Kashmir's most famous destinations and a year-round attraction. Drive back through pastoral villages with traditional wooden houses, pass apple orchards (especially beautiful in spring with blossoms and in autumn with ripe fruit), and traverse the Kashmir Valley. The road gradually climbs as you approach Gulmarg, winding through forests before opening into the vast meadow bowl. Arrive in Gulmarg by early afternoon and check into your 4-star hotel. Gulmarg, situated at about 2,650 meters altitude, is famous for skiing in winter and lush meadows in summer. After settling in, spend the afternoon exploring at a relaxed pace. Take meadow walks to Strawberry Valley, a gentle slope with stunning views, or explore the main meadow which transforms into a carpet of wildflowers in summer. Optional: Take the famous Gondola cable car ride (tickets at extra cost) — Phase 1 takes you to Kongdori station at 3,080 meters for spectacular valley views and glimpses of Nanga Parbat on clear days. You'll have free time in this alpine setting to enjoy the mountain atmosphere, take photographs, or simply relax. Visit St. Mary's Church, a charming stone structure from 1902. The evening in Gulmarg is magical as the sun sets over the peaks. Dinner and overnight at your 4-star hotel in Gulmarg.",
      activities: [
        "Breakfast and Pahalgam checkout",
        "Scenic drive through Kashmir Valley",
        "Pastoral village and apple orchard views",
        "Forest drive to Gulmarg",
        "Arrival and check-in at 4-star hotel",
        "Meadow walks to Strawberry Valley",
        "Main Gulmarg meadow exploration",
        "Optional Gondola cable car to Kongdori (Phase 1)",
        "Valley panorama and Nanga Parbat views",
        "Free time in alpine settings",
        "Photography opportunities",
        "St. Mary's Church visit",
        "Evening mountain atmosphere",
        "Dinner at hotel"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "4-Star Hotel in Gulmarg",
      highlights: [
        "Gulmarg's famous alpine meadow",
        "Optional Gondola experience",
        "Mountain sunset views"
      ]
    },
    {
      day: 5,
      title: "Gulmarg to Sonmarg Day Trip, Return to Srinagar",
      location: "Gulmarg → Sonmarg → Srinagar (Gulmarg-Sonmarg 100 km, Sonmarg-Srinagar 80 km)",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "Today features an exciting full-day adventure to Sonmarg, the 'Meadow of Gold', before returning to Srinagar for your final night. After an early breakfast and checkout from Gulmarg, drive toward Sonmarg. The journey takes you through spectacular scenery — following the Sindh River through gorges, past pine forests, and into increasingly dramatic mountain terrain. Arrive in Sonmarg, surrounded by snow-capped peaks and vast meadows. The altitude here is higher, the air crisper, and the landscape more raw and beautiful. Walk through the pristine meadows which take on a golden hue (hence the name), enjoying panoramic views of glaciers and mountains. The meadows are perfect for leisurely walks, photography, and simply absorbing the high-altitude atmosphere. Optional: Take a pony ride toward Thajiwas Glacier (pony hire at extra cost) to get closer to the snowfields and glacial landscapes. Depending on the season, you might encounter patches of snow even in summer, perfect for snow play and photography. The Sindh River flows through the valley, adding to the scenic beauty. Enjoy a packed lunch or snacks in the meadows (lunch arrangements on your own). After a full day of exploration and mountain immersion, begin the drive to Srinagar in the late afternoon. The journey offers different perspectives as you descend back into the Kashmir Valley. Arrive in Srinagar by evening and check into your 4-star hotel. Dinner and overnight in Srinagar.",
      activities: [
        "Early breakfast and Gulmarg checkout",
        "Scenic drive to Sonmarg",
        "Sindh River and gorge views",
        "Forest passage",
        "Arrival in Sonmarg (Meadow of Gold)",
        "Pristine meadow walks",
        "Glacier and mountain panorama views",
        "Photography session",
        "Optional pony ride toward Thajiwas Glacier",
        "Snow play (seasonal)",
        "Meadow picnic/snack time",
        "High-altitude atmosphere enjoyment",
        "Late afternoon drive to Srinagar",
        "Evening arrival and hotel check-in",
        "Dinner at hotel"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "4-Star Hotel in Srinagar",
      highlights: [
        "Sonmarg's glacial meadows",
        "High-altitude adventure",
        "Optional Thajiwas proximity"
      ]
    },
    {
      day: 6,
      title: "Departure from Srinagar - Fond Farewell",
      location: "Srinagar to Airport",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "After a final leisurely breakfast at your hotel, complete checkout formalities. Depending on your flight schedule, you may have a little time for last-minute shopping or a quick stroll around the hotel area. Your private cab and driver will be ready to transfer you to Srinagar Airport for your onward journey. As you drive to the airport, take a last look at Dal Lake, the mountains, and the beautiful Kashmir Valley. Fly home with a heart full of memories — mountain sunsets, lakefront evenings, Mughal garden tranquility, alpine meadow walks, riverside serenity, and the warm hospitality experienced at every 4-star property. This luxe escape has shown you Kashmir's finest attractions in comfort and style, creating memories to cherish for a lifetime.",
      activities: [
        "Final breakfast at hotel",
        "Hotel checkout",
        "Last-minute shopping (time permitting)",
        "Private transfer to Srinagar Airport",
        "Final views of Dal Lake and mountains",
        "Departure with luxurious memories"
      ],
      meals: ["Breakfast"],
      accommodation: "N/A",
      highlights: [
        "Final Kashmir morning",
        "Luxe escape completed",
        "Memories of premium comfort"
      ]
    }
  ],

  accommodationDetails: {
    title: "4-Star Premium Hotels & Resorts",
    description: "Carefully selected 4-star properties offering comfort, excellent service, and scenic locations",
    hotels: [
      {
        name: "Royal Heritage / Hilltop / Regenta / Asian Park or Similar",
        type: "4-Star Hotel",
        location: "Srinagar",
        nights: 3,
        amenities: ["Premium rooms with lake/mountain views", "Multi-cuisine restaurant", "High-speed WiFi", "24/7 hot water", "Room heaters", "Room service", "Concierge services", "Modern bathrooms", "In-room amenities"]
      },
      {
        name: "Royal Park / Heevan Retreat or Similar",
        type: "4-Star Hotel",
        location: "Gulmarg",
        nights: 1,
        amenities: ["Alpine meadow views", "Premium rooms", "Restaurant", "WiFi", "Hot water", "Heating", "Mountain setting", "Comfortable bedding"]
      },
      {
        name: "Pine Spring / Green Heights / Royale Comfort or Similar",
        type: "4-Star Resort",
        location: "Pahalgam",
        nights: 1,
        amenities: ["Valley views", "Resort amenities", "Restaurant", "WiFi", "Hot water", "Comfortable rooms", "Scenic location", "River proximity"]
      }
    ],
    note: "All accommodations are 4-star category, ensuring premium comfort, excellent service, and scenic locations throughout your Kashmir journey."
  },

  images: [
    "/destinations/kashmir/srinagar/01.jpg",
    "/destinations/kashmir/gulmarg/01.jpg",
    "/destinations/kashmir/pahalgam/1.jpg",
    "/destinations/kashmir/dal_lake/1.jpg",
    "/destinations/kashmir/nishat_bagh/1.jpg",
    "/destinations/kashmir/gulmarg/04.jpg",
    "/destinations/kashmir/pahalgam/5.jpg",
    "/destinations/kashmir/srinagar/06.jpg",
    "/destinations/kashmir/sonamarg/05.jpg"
  ],

  faqs: [
    {
      question: "What makes this tour 'Luxe' or premium compared to standard packages?",
      answer: "This tour features 4-star category hotels and resorts throughout (vs 3-star in standard packages), ensuring premium rooms, better amenities, superior service, and more comfortable stays. The itinerary is also carefully curated for a relaxed pace without rushing, and you travel in a private exclusive cab with a professional chauffeur for your comfort."
    },
    {
      question: "Is this tour suitable for families with children?",
      answer: "Absolutely! The tour is perfect for families. The pace is relaxed, activities are gentle (walks, Shikara rides, garden visits), and all destinations are child-friendly. The 4-star hotels offer family rooms and amenities. Children age 5+ typically enjoy the variety of lakes, meadows, and mountain experiences."
    },
    {
      question: "Can we customize this itinerary?",
      answer: "Yes! This 6-day itinerary can be customized based on your preferences. Want an extra night in Gulmarg? Prefer to replace Sonmarg with another destination? Want to upgrade to 5-star hotels? We can tailor the tour to your needs. Contact us to discuss your ideal Kashmir luxe escape."
    },
    {
      question: "Is the Gondola ride in Gulmarg included?",
      answer: "The Gondola cable car ride is not included in the base package to keep it affordable and optional. Gondola Phase 1 tickets cost approximately ₹800-1,250 per person and can be purchased on-site or booked as an addon. We highly recommend it for the spectacular views."
    },
    {
      question: "What's the best season for this tour?",
      answer: "This tour is available year-round with different seasonal attractions. Spring (March-May) offers blossoms and pleasant weather. Summer (June-August) features lush green meadows and perfect temperatures. Autumn (September-November) showcases golden colors and saffron blooms. Winter (December-February) offers snow activities in Gulmarg and unique winter beauty."
    },
    {
      question: "Why isn't lunch included in the package?",
      answer: "Lunch is excluded to give you flexibility to dine at your preferred restaurants, try different cuisines, or have light meals based on your appetite and schedule. Your hotels can recommend good restaurants nearby, and your driver can suggest dining spots along the route."
    },
    {
      question: "Can we extend our stay or add extra nights?",
      answer: "Yes! You can add extra nights in Srinagar, Gulmarg, or Pahalgam. Many travelers choose to extend in Gulmarg for more time on the meadows or in Srinagar for additional sightseeing and shopping. Contact us to customize your duration."
    },
    {
      question: "Is this suitable for elderly travelers?",
      answer: "Yes, the tour is suitable for elderly travelers with reasonable mobility. Most activities involve easy walks and are optional. The 4-star hotels offer elevators and accessible rooms. The private cab ensures comfortable transfers without the need to change vehicles. Pony rides are available at most destinations for those who prefer not to walk long distances."
    },
    {
      question: "What's the difference between this and your 3-star Kashmir packages?",
      answer: "The main differences are: 1) All 4-star accommodations vs 3-star; 2) Premium rooms with better views and amenities; 3) Superior service at hotels; 4) More comfortable properties in prime locations; 5) Overall elevated comfort level while covering similar attractions. This is ideal for travelers who want Kashmir's beauty with enhanced comfort."
    },
    {
      question: "Can we replace a hotel night with a houseboat stay?",
      answer: "Yes! Many travelers love experiencing a luxury houseboat on Dal Lake. We can replace one Srinagar hotel night with a premium houseboat stay (available as addon or customization). Houseboats offer a unique Kashmiri experience with carved wood interiors, lake views, and traditional hospitality."
    }
  ],

  amenities: [
    { icon: "Star", label: "4-Star Premium Hotels" },
    { icon: "Car", label: "Private Exclusive Cab" },
    { icon: "Utensils", label: "Daily Breakfast & Dinner" },
    { icon: "Camera", label: "Shikara Ride Included" },
    { icon: "Mountain", label: "Complete Kashmir Circuit" },
    { icon: "Award", label: "Luxury & Comfort" }
  ],

  sustainability: [
    { icon: "Award", title: "Premium Responsible Tourism", description: "Supporting quality-focused tourism that benefits local communities while maintaining environmental standards" },
    { icon: "Leaf", title: "Balanced Exploration", description: "Covering major destinations at a relaxed pace, reducing rushed travel and carbon footprint" },
    { icon: "Users", title: "Local Economic Support", description: "Staying at local 4-star properties and using local services, directly supporting Kashmir's tourism economy" }
  ]
};

// Detailed tour information for Kashmir Frontier Circuit 6N7D
export const kashmirFrontier6N7DDetail = {
  id: "kashmir-frontier-6n7d",
  coverImage: "/tour_covers/kashmir-frontier-6n7d.png",
  tourCode: "JRN-KFC-6N7D",
  title: "Kashmir Frontier Circuit - Wild Southeast",
  subtitle: "6 Nights / 7 Days — Jammu • Warwan Valley • Alpine Passes",
  description: "A thrilling journey into Kashmir's wild southeast — a region few tourists ever reach. This extraordinary circuit ventures from Jammu through the mist-wrapped forests of Daksum, ascends the hairpin curves to Sinthan Pass at 12,500 feet, crosses the spectacular Margan Top, and descends into the dreamlike meadows of Warwan Valley — one of Kashmir's most remote and pristine areas. Return via the scenic Patnitop hill station and the sacred Mansar Lake. This itinerary perfectly blends nature, road adventure, quiet village life, alpine passes with snow patches, secluded riverside picnics, warm local hospitality, and completely untouched beauty. Perfect for explorers, adventure seekers, photographers, and those who want to experience Kashmir beyond the usual tourist trail. This is frontier travel at its finest.",
  price: 549,
  originalPrice: 699,
  discount: 21,
  duration: "6 Nights / 7 Days",
  theme: "adventure",
  groupSize: "2-10 People",
  rating: 4.7,
  reviews: 31,
  category: "Adventure & Off-Beat",
  season: "May to October (Road access dependent)",
  departureTime: "Upon arrival at Jammu Railway Station/Airport",
  returnTime: "After Bahu Fort visit on Day 7",
  dressCode: "Rugged outdoor clothing, warm layers, sturdy hiking shoes",
  tourType: "Frontier Adventure Circuit",
  language: "English, Hindi, Urdu, Kashmiri, Dogri",
  minAge: 12,
  
  availableDates: [
    "2026-05-15",
    "2026-06-01",
    "2026-06-15",
    "2026-07-01",
    "2026-07-15",
    "2026-08-01",
    "2026-08-15",
    "2026-09-01",
    "2026-09-15",
    "2026-10-01"
  ],

  addons: [
    { id: 1, name: "Professional Adventure Guide", price: 90, description: "Expert guide for high-altitude passes and remote areas" },
    { id: 2, name: "Photography Package", price: 130, description: "Professional photographer for landscape & adventure shots" },
    { id: 3, name: "Mansar Lake Boating", price: 30, description: "Boat ride on sacred Mansar Lake" },
    { id: 4, name: "Camping Night in Warwan", price: 70, description: "One night camping experience in Warwan meadows" },
    { id: 5, name: "Village Homestay Experience", price: 50, description: "Replace guesthouse with traditional village home" },
    { id: 6, name: "4x4 Vehicle Upgrade", price: 150, description: "Upgrade to SUV/4x4 for better comfort on rough roads" }
  ],

  highlights: [
    "Wild southeast Kashmir circuit - rarely explored by tourists",
    "Sinthan Pass crossing at 12,500 feet - one of Kashmir's highest motorable passes",
    "Margan Top spectacular alpine pass with meadows and waterfalls",
    "Warwan Valley - remote pristine valley with traditional villages",
    "Daksum forest zone with pine, deodar trails and Brengi River",
    "Patnitop hill station with cedar forests and meadows",
    "Sacred Mansar Lake - holy pilgrimage site",
    "Bahu Fort and Bagh-e-Bahu Gardens in Jammu",
    "Meet Bakarwal and Shina herders in remote areas",
    "Suspension bridges and mountain river crossings",
    "Snow patches available till late spring",
    "Complete off-beat circuit avoiding tourist crowds",
    "Road adventure with hairpin bends and dramatic views",
    "Warm village hospitality in remote guesthouses",
    "Professional guide assistance throughout",
    "Perfect for adventure photographers"
  ],

  inclusions: [
    "6 nights accommodation in 3-star hotels/cottages/scenic guesthouses as per location",
    "Daily breakfast and dinner throughout the tour",
    "Private vehicle for entire tour with professional driver",
    "Driver allowances, fuel charges, parking fees, and toll taxes",
    "Local guide assistance throughout the trip",
    "Pickup and drop at Jammu Railway Station/Airport",
    "All applicable taxes and GST"
  ],

  exclusions: [
    "Train tickets or airfare to/from Jammu",
    "Lunch meals, snacks, and beverages",
    "Entry tickets to forts, parks, museums, and attractions",
    "Pony rides or jeep hire to remote spots (if needed)",
    "Adventure activities (trekking, rafting, ATV, etc.)",
    "Personal shopping, laundry, tips, and incidental expenses",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Jammu & Transfer to Patnitop",
      location: "Jammu → Patnitop (112 km, 3 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Meet your tour driver at Jammu Railway Station or Airport and begin your frontier adventure. Drive from the plains of Jammu into the hills, passing through hillside villages with terraced fields and orchards. The road gradually ascends through cedar and pine forests as you approach Patnitop, a scenic hill station at about 2,024 meters altitude. Patnitop is known for its meadows, panoramic views, and pleasant climate. Upon arrival, check into your hotel and have lunch (on your own). In the afternoon, explore Patnitop at a relaxed pace. Walk through the lush meadows dotted with wildflowers in season, and stroll along pine tracks breathing the fresh mountain air. The landscape is gentle and inviting, perfect for easy walks. Drive or walk to Nathatop valley overlook, about 7 km from Patnitop, for spectacular views of the surrounding mountains and valleys. The sunset from here is beautiful, with the hills bathed in golden light. This gentle first day helps you acclimatize to the altitude and prepares you for the adventure days ahead. Return to your hotel for dinner and overnight stay in Patnitop.",
      activities: [
        "Arrival at Jammu Railway Station/Airport",
        "Meet tour driver and vehicle",
        "Drive from Jammu plains to hills",
        "Hillside village observation",
        "Cedar and pine forest drive",
        "Arrival and check-in at Patnitop hotel",
        "Lunch break (own arrangement)",
        "Afternoon meadow walks",
        "Pine track exploration",
        "Drive to Nathatop valley overlook",
        "Panoramic valley views",
        "Sunset photography",
        "Return to hotel",
        "Dinner and overnight rest"
      ],
      meals: ["Dinner"],
      accommodation: "3-Star Hotel in Patnitop",
      highlights: [
        "First mountain views",
        "Nathatop valley sunset",
        "Fresh mountain air"
      ]
    },
    {
      day: 2,
      title: "Patnitop to Daksum - Into Southeast Frontier",
      location: "Patnitop → Chenani-Nashri Tunnel → Kokernag → Daksum (150 km, 5 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "After breakfast and checkout, begin your journey deeper into Kashmir's southeast frontier region. Drive through scenic mountain roads and pass through the impressive Chenani-Nashri Tunnel (also known as Dr. Syama Prasad Mookerjee Tunnel), India's longest road tunnel at 9.28 km, connecting Jammu region to Kashmir Valley. Emerge on the Kashmir side and continue toward Kokernag, famous for its botanical gardens and freshwater springs. You may stop briefly at Kokernag to visit the gardens if time permits. Continue your journey into the Daksum Eco Forest Zone, an incredibly beautiful and relatively unexplored area known for its dense pine and deodar forests. The drive becomes more scenic as you follow the Brengi River, whose crystal-clear waters gush through the valley. Arrive at Daksum, a pristine forest destination surrounded by towering conifers and mountain peaks. Check into your hotel or forest guesthouse. After settling in, explore the immediate area with short walks on pine and deodar trails, breathing some of the purest air you'll experience. Visit viewpoints overlooking the gushing Brengi River, whose sound becomes a constant, soothing companion. Stop at quiet village tea stops, interacting with locals who live a simple, traditional life largely unchanged by modernity. Daksum is peaceful, cool, and refreshingly uncrowded — the perfect base for exploring the high passes tomorrow. Dinner and overnight in Daksum/Kokernag region.",
      activities: [
        "Breakfast and Patnitop checkout",
        "Mountain road drive",
        "Chenani-Nashri Tunnel passage (9.28 km)",
        "Entry into Kashmir Valley",
        "Optional Kokernag gardens stop",
        "Drive into Daksum forest zone",
        "Brengi River valley drive",
        "Arrival and check-in at Daksum",
        "Pine and deodar trail walks",
        "Brengi River viewpoint visits",
        "River sound immersion",
        "Village tea stops",
        "Local interaction",
        "Forest atmosphere enjoyment",
        "Dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Hotel/Forest Guesthouse in Daksum/Kokernag",
      highlights: [
        "Chenani-Nashri Tunnel experience",
        "Daksum forest beauty",
        "Brengi River pristine waters"
      ]
    },
    {
      day: 3,
      title: "Sinthan Top Snowline Exploration - High Pass Adventure",
      location: "Daksum → Sinthan Top → Daksum (80 km round trip)",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "Today is one of the highlights of your frontier circuit — a full-day excursion to Sinthan Top, one of Kashmir's highest and most spectacular motorable passes at 12,500 feet (3,810 meters). After an early breakfast, begin the ascent from Daksum. The road is a marvel of engineering, with hairpin bends and zigzag curves climbing steadily through forests, then alpine meadows, and finally barren high-altitude terrain. As you gain altitude, the views become increasingly dramatic — deep valleys below, snow-covered peaks all around, and vast panoramic vistas that seem to stretch forever. Sinthan Top offers a unique landscape reminiscent of Ladakh, with panoramic ridges spanning Jammu & Kashmir. Snow patches remain here until late spring (May-June), and even in summer, the air is crisp and cold. The pass connects Anantnag district with Kishtwar district and is stunningly beautiful. Step out at the top to absorb the high-altitude atmosphere, take photographs from every angle, and experience the exhilaration of standing at over 12,000 feet. The silence here is profound, broken only by the wind. You might see shepherd families with their flocks, or simply vast emptiness. Pack warm clothing as temperatures can be quite low even in summer. After thoroughly exploring Sinthan Top and having tea/snacks (bring packed items), begin the descent back to Daksum. The return journey offers different perspectives and lighting. Arrive back in Daksum by evening for rest. Dinner and overnight in Daksum.",
      activities: [
        "Early breakfast",
        "Departure for Sinthan Top",
        "Zigzag mountain road ascent",
        "Hairpin bend navigation",
        "Forest to alpine meadow transition",
        "High-altitude terrain observation",
        "Arrival at Sinthan Top (12,500 ft)",
        "Panoramic Ladakh-style ridge views",
        "Snow patch exploration (seasonal)",
        "High-altitude photography",
        "Shepherd observation",
        "Tea/snack break at the pass",
        "Profound silence experience",
        "Descent back to Daksum",
        "Evening rest and recovery",
        "Dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Hotel/Forest Guesthouse in Daksum",
      highlights: [
        "Sinthan Top at 12,500 feet",
        "Dramatic hairpin ascent",
        "High-altitude panoramic views"
      ]
    },
    {
      day: 4,
      title: "Daksum to Warwan Valley via Margan Top - Crown Jewel",
      location: "Daksum → Margan Pass → Warwan Valley (100 km, 5-6 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Today you enter what many consider the crown jewel of off-beat Kashmir — the remote and pristine Warwan Valley. After breakfast and checkout from Daksum, begin the scenic ascent toward Margan Pass (also known as Margan Top). The drive is spectacular, climbing through forests and then opening into high-altitude meadows with cascading waterfalls. Margan Pass sits at about 10,500 feet, offering sweeping views of surrounding peaks and valleys. Shepherd trails crisscross the meadows here, and in summer, you'll likely see Gujjar and Bakarwal herders with their flocks. The landscape is pristine and beautiful, perfect for photography and short walks. After crossing Margan Pass, begin the descent into Warwan Valley — one of Kashmir's most remote and least-visited valleys (road access subject to seasonal conditions and maintenance). The valley is a hidden gem, untouched by mass tourism, with tiny villages surrounded by towering mountains on all sides. The Marwah River flows through the valley, its sound constant and soothing. Arrive at Warwan/Panikhar region and check into the best available guesthouse — accommodation here is basic but the hospitality is warm and genuine. This is frontier living, and the experience is authentic. Enjoy a picnic beside the Marwah River, simply absorbing the pristine beauty and complete isolation from the modern world. The valley has a dreamlike quality — silent, beautiful, and utterly peaceful. Spend the afternoon exploring the immediate area, photographing the landscape, and resting. Dinner and overnight in Warwan region guesthouse.",
      activities: [
        "Breakfast and Daksum checkout",
        "Scenic ascent to Margan Pass",
        "Forest to meadow transition",
        "Waterfall observation along route",
        "Arrival at Margan Pass (10,500 ft)",
        "Sweeping valley views",
        "Shepherd trail walks",
        "Gujjar/Bakarwal herder observation",
        "High-meadow photography",
        "Descent into Warwan Valley",
        "Remote valley entry",
        "Marwah River views",
        "Arrival and check-in at Warwan guesthouse",
        "Riverside picnic",
        "Valley exploration",
        "Complete isolation experience",
        "Dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Best Available Guesthouse in Warwan/Panikhar",
      highlights: [
        "Margan Pass meadows",
        "Warwan Valley remoteness",
        "Marwah River serenity"
      ]
    },
    {
      day: 5,
      title: "Warwan Valley Slow Life & Return Journey",
      location: "Warwan Valley → Margan Pass → Kokernag/Verinag (100 km)",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      description: "Wake up to your first morning in one of Kashmir's most remote valleys. After breakfast, spend a slow, unplugged morning experiencing Warwan's authentic rural life. Take walks along farmland paths where traditional agriculture is still practiced by hand. The valley grows potatoes, pulses, and vegetables in its short growing season. Meet Bakarwal and Shina herders if they're present with their flocks — these nomadic communities follow ancient migration patterns and are happy to share chai and stories. Their lifestyle has remained unchanged for centuries. Visit suspension bridges crossing mountain streams and the Marwah River — these simple but sturdy bridges are engineering marvels and offer great photography opportunities. The morning in Warwan is about slowing down, observing, and appreciating a way of life that's disappearing elsewhere. After lunch (on your own or packed by the guesthouse), bid farewell to Warwan Valley and begin your return journey. Drive back over Margan Pass, taking one last look at the meadows and shepherd trails. Descend toward Kokernag or Verinag region, reentering the slightly more developed (but still peaceful) part of Kashmir. Check into your hotel in Kokernag or Verinag. If energy permits, you might visit Verinag Spring in the evening — the source of the Jhelum River with its octagonal Mughal-built pool. Dinner and overnight in Kokernag/Verinag.",
      activities: [
        "Breakfast with valley views",
        "Slow morning in Warwan",
        "Farmland path walks",
        "Traditional agriculture observation",
        "Meet Bakarwal and Shina herders",
        "Chai and story sharing",
        "Nomadic lifestyle learning",
        "Suspension bridge photography",
        "Mountain stream crossings",
        "Lunch break",
        "Farewell to Warwan Valley",
        "Return drive over Margan Pass",
        "Final meadow views",
        "Descent to Kokernag/Verinag",
        "Hotel check-in",
        "Optional Verinag Spring visit",
        "Dinner"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Kokernag/Verinag",
      highlights: [
        "Warwan authentic rural life",
        "Herder community interaction",
        "Suspension bridge experience"
      ]
    },
    {
      day: 6,
      title: "Kokernag to Jammu via Mansar Lake",
      location: "Kokernag/Verinag → Mansar Lake → Jammu (200 km, 5-6 hours)",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "After breakfast and checkout, begin your descent from the Kashmir Valley back toward the Jammu plains. The journey is long but scenic, gradually transitioning from mountain forests to hills to plains. Stop at the sacred Mansar Lake, one of the most revered pilgrimage sites in the Jammu region. This oval-shaped natural lake is surrounded by forested hills and has great religious significance for Hindus. According to legend, the lake was created by Lord Shiva and is associated with the serpent king Shesha. Walk around the lakeside path, observing the temples and shrines scattered around the perimeter. Optional: Take a boat ride on the calm waters for a peaceful experience and different perspective of the surrounding hills (boating fee extra). The lake has a serene atmosphere with ducks and birds adding to the tranquility. After spending time at Mansar Lake, continue to Jammu city. Arrive by evening and check into your hotel. You'll have free time in the evening to explore Jammu's local markets, such as Raghunath Bazaar, for last-minute shopping. Jammu is known for its handicrafts, dry fruits, and traditional items. Alternatively, relax at your hotel after the long day of travel. Enjoy your final dinner of the tour. Overnight in Jammu.",
      activities: [
        "Breakfast and hotel checkout",
        "Descent from Kashmir Valley",
        "Mountain to plains transition drive",
        "Stop at sacred Mansar Lake",
        "Lakeside walk",
        "Temple and shrine observation",
        "Learn lake mythology and legends",
        "Optional boat ride on lake",
        "Duck and bird watching",
        "Peaceful lake atmosphere",
        "Continue drive to Jammu",
        "Evening arrival and hotel check-in",
        "Free time for exploration",
        "Optional Raghunath Bazaar shopping",
        "Final dinner of tour"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "3-Star Hotel in Jammu",
      highlights: [
        "Sacred Mansar Lake pilgrimage site",
        "Optional boat ride experience",
        "Jammu city exploration"
      ]
    },
    {
      day: 7,
      title: "Bahu Fort Visit & Departure from Jammu",
      location: "Jammu City → Bahu Fort → Railway Station/Airport",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "After breakfast and hotel checkout, visit the historic Bahu Fort, one of Jammu's oldest structures perched on a rock face on the left bank of the Tawi River. The fort is believed to be about 3,000 years old, though the current structure dates back to the 19th century. Inside the fort complex is the famous Bahu (Bawe Wali Mata) Temple, dedicated to the Hindu goddess Kali. The temple is an important pilgrimage site, especially popular on Tuesdays and Sundays. Explore the fort, learning about its history and strategic importance. Walk through the adjacent Bagh-e-Bahu Gardens, a terraced garden built along the slopes with fountains, seasonal flowers, and excellent views of the Tawi River valley below. The gardens also have an aquarium and are a popular spot for families. Take time for photography and to absorb the atmosphere of this historic site. If you have time before your departure, you might do some last-minute shopping at Raghunath Bazaar for handicrafts, Kashmiri shawls, dry fruits, or souvenirs. Your driver will then drop you at Jammu Railway Station or Airport according to your departure schedule. Depart with incredible memories of valleys, alpine passes, remote villages, lakes, meadows, and the warm hospitality of Kashmir's frontier regions. This journey has taken you to places few tourists ever see, and the experiences will stay with you for a lifetime.",
      activities: [
        "Breakfast and hotel checkout",
        "Visit historic Bahu Fort",
        "Fort architecture and history",
        "Bahu Temple (Bawe Wali Mata) visit",
        "Temple observation and respect",
        "Walk through Bagh-e-Bahu Gardens",
        "Terraced garden exploration",
        "Fountain and flower observation",
        "Tawi River valley views",
        "Photography session",
        "Optional final Raghunath Bazaar shopping",
        "Souvenir and handicraft purchasing",
        "Transfer to Railway Station/Airport",
        "Departure with frontier memories"
      ],
      meals: ["Breakfast"],
      accommodation: "N/A",
      highlights: [
        "Historic Bahu Fort exploration",
        "Bagh-e-Bahu Gardens beauty",
        "Frontier circuit completed"
      ]
    }
  ],

  accommodationDetails: {
    title: "3-Star Hotels, Cottages & Scenic Guesthouses",
    description: "Mix of standard hotels and authentic guesthouses based on remote location availability",
    hotels: [
      {
        name: "3-Star Hotel in Patnitop",
        type: "Hotel",
        location: "Patnitop",
        nights: 1,
        amenities: ["Comfortable rooms", "Mountain views", "Restaurant", "Hot water", "Heating"]
      },
      {
        name: "Hotel/Forest Guesthouse in Daksum/Kokernag",
        type: "Hotel/Guesthouse",
        location: "Daksum/Kokernag region",
        nights: 2,
        amenities: ["Forest location", "River views", "Basic comfort", "Hot water", "Local cuisine", "Peaceful setting"]
      },
      {
        name: "Best Available Guesthouse in Warwan/Panikhar",
        type: "Guesthouse",
        location: "Warwan Valley",
        nights: 1,
        amenities: ["Remote valley location", "Authentic experience", "Basic facilities", "Warm hospitality", "Traditional meals"]
      },
      {
        name: "3-Star Hotel in Kokernag/Verinag",
        type: "Hotel",
        location: "Kokernag/Verinag",
        nights: 1,
        amenities: ["Comfortable rooms", "Spring proximity", "Restaurant", "Hot water", "WiFi"]
      },
      {
        name: "3-Star Hotel in Jammu",
        type: "Hotel",
        location: "Jammu City",
        nights: 1,
        amenities: ["City hotel amenities", "Restaurant", "WiFi", "Hot water", "Modern facilities"]
      }
    ],
    note: "Accommodation in Warwan Valley is basic but authentic. This is frontier travel where the experience and landscape are the real treasures. All other locations offer standard 3-star comfort."
  },

  images: [
    "/destinations/jammu/sinthan_top/1.jpg",
    "/destinations/jammu/margan_top/1.jpg",
    "/destinations/jammu/warwan_valley/01.jpg",
    "/destinations/kashmir/verinag/01.jpg",
    "/destinations/jammu/sinthan_top/2.jpg",
    "/destinations/jammu/margan_top/2.jpg",
    "/destinations/jammu/daksum/1.jpg",
    "/destinations/kashmir/verinag/02.jpg",
    "/destinations/jammu/sinthan_top/3.jpg"
  ],

  faqs: [
    {
      question: "Is this tour suitable for everyone?",
      answer: "This is an adventure circuit involving high-altitude passes (Sinthan at 12,500 ft, Margan at 10,500 ft), long drives on mountain roads, and stays in remote areas with basic facilities. It requires good health, reasonable fitness, and an adventurous spirit. Recommended for ages 12+ who can handle altitude and basic accommodations. Not suitable for those seeking luxury or with serious health conditions."
    },
    {
      question: "When is the best time for this frontier circuit?",
      answer: "May to October is the ideal window, with June-September being peak months. Roads to Sinthan Pass and Warwan Valley may be closed or difficult in early May due to snow, and close again in late October/November. July-August offers the best weather with green landscapes, though monsoons can occasionally cause delays. September brings clear skies and golden colors."
    },
    {
      question: "Is Warwan Valley safe and accessible?",
      answer: "Yes, Warwan Valley is safe with local security and a welcoming community. However, it's extremely remote with limited infrastructure. Road access depends on seasonal conditions and maintenance. We monitor road status and have contingency plans. If Warwan is inaccessible, we offer alternative routes covering equally beautiful areas. The remoteness is part of the adventure."
    },
    {
      question: "What's the accommodation like in Warwan Valley?",
      answer: "Warwan has very limited accommodation - basic guesthouses run by local families with simple rooms, shared or basic bathrooms, and traditional meals. Don't expect hotel amenities, WiFi, or modern comforts. However, the hospitality is genuine, the food is fresh and local, and the experience is authentic. This is what makes frontier travel special."
    },
    {
      question: "What should I pack for this adventure?",
      answer: "Pack warm layers (temperatures drop significantly at high passes), sturdy hiking shoes with good grip, rain jacket, sun protection, personal medications, flashlight, toiletries, camera with extra batteries, power bank, snacks for long drives, water bottle, and any specific items you need. Cash is essential as ATMs are scarce in remote areas."
    },
    {
      question: "Will there be mobile network in remote areas?",
      answer: "Mobile connectivity is limited or non-existent in Daksum, on the high passes, and especially in Warwan Valley. BSNL sometimes works better than private operators. Consider this a digital detox opportunity. Inform family of your itinerary beforehand. Connectivity returns in Kokernag and Jammu."
    },
    {
      question: "Can this tour be done in a regular car?",
      answer: "While possible in summer months, we strongly recommend a SUV or 4x4 vehicle for this circuit due to mountain roads, passes, and occasional rough patches. A 4x4 upgrade is available as an addon for enhanced comfort and safety on challenging terrain."
    },
    {
      question: "Why start and end in Jammu instead of Srinagar?",
      answer: "Starting from Jammu allows a logical circuit through southeastern Kashmir's frontier regions (Patnitop, Daksum, Sinthan, Warwan) before returning via Mansar Lake to Jammu. This route minimizes backtracking and maximizes unique experiences. It's also easier logistically for southeast Kashmir access."
    },
    {
      question: "Are meals included in remote areas?",
      answer: "Breakfast and dinner are included throughout. In remote areas like Warwan, meals are typically traditional Kashmiri/local cuisine prepared by guesthouse hosts using fresh local ingredients. Lunch is excluded for flexibility, but in remote areas, guesthouses can prepare packed lunches or simple meals (at nominal extra cost)."
    },
    {
      question: "What makes this tour special compared to regular Kashmir tours?",
      answer: "This tour goes where 95% of Kashmir tourists never venture - the wild southeast frontier. You'll cross two spectacular high passes, visit the remote Warwan Valley, experience authentic village life, meet nomadic herders, and see landscapes few have witnessed. This is real adventure travel for those who want Kashmir beyond the postcard destinations. It's challenging, rewarding, and utterly unforgettable."
    }
  ],

  amenities: [
    { icon: "Mountain", label: "High Passes (12,500 ft)" },
    { icon: "Car", label: "Private Vehicle" },
    { icon: "Users", label: "Local Guide" },
    { icon: "Utensils", label: "Daily Breakfast & Dinner" },
    { icon: "Award", label: "Frontier Adventure" },
    { icon: "Camera", label: "Photography Paradise" }
  ],

  sustainability: [
    { icon: "Leaf", title: "Remote Area Support", description: "Bringing tourism benefits to remote frontier communities rarely visited by travelers" },
    { icon: "Users", title: "Community-Based Tourism", description: "Staying in local guesthouses and directly supporting village economies in Warwan and Daksum" },
    { icon: "Award", title: "Authentic Cultural Exchange", description: "Facilitating genuine interactions with nomadic herders and remote village communities, promoting cultural understanding" }
  ]
};

// Detailed tour information for 9N10D Jammu Kashmir Complete Tour
export const jammuKashmir9N10DDetail = {
  id: "jammu-kashmir-9n10d",
  coverImage: "/tour_covers/jammu-kashmir-9n10d.jpeg",
  tourCode: "JRN-JK9N10D",
  title: "Complete Jammu Kashmir - 10 Days with Vaishno Devi",
  subtitle: "9 Nights / 10 Days — Jammu • Vaishno Devi • Patnitop • Pahalgam • Gulmarg • Srinagar • Sonmarg",
  description: "The ultimate Jammu & Kashmir experience designed to cover both important pilgrimage destinations and the most scenic locations in the valley. This comprehensive 10-day journey takes you from the temples of Jammu to the holy shrine of Vaishno Devi, through the pine forests of Patnitop and the serene Mansar Lake, into the heart of Kashmir Valley covering Pahalgam's riverside meadows, Gulmarg's snow slopes, Srinagar's Mughal heritage and Dal Lake, and the golden meadows of Sonmarg. With comfortable 3-star accommodations, private vehicle throughout, MAP meal plan (breakfast & dinner), one hour Shikara ride included, and flexibility to depart from either Jammu or Srinagar, this tour is perfect for families, pilgrims, honeymooners, and first-time visitors seeking a complete Kashmir experience without rushing. All sightseeing is thoughtfully paced across nine days with the tenth day reserved for flexible departure. This is the ideal tour for those who want to experience the spiritual and scenic wonders of Jammu & Kashmir in one seamless journey.",
  price: 699,
  originalPrice: 899,
  discount: 22,
  duration: "9 Nights / 10 Days",
  theme: "pilgrimage-scenic",
  groupSize: "2-12 People",
  rating: 4.9,
  reviews: 187,
  category: "Pilgrimage & Complete Tour",
  season: "All Year (Best: April to October)",
  departureTime: "Upon arrival at Jammu Airport/Railway Station",
  returnTime: "Flexible departure from Srinagar or Jammu on Day 10",
  dressCode: "Comfortable travel clothing, warm layers, modest attire for temples",
  tourType: "Complete Kashmir Circuit with Pilgrimage",
  language: "English, Hindi, Urdu, Kashmiri, Dogri",
  minAge: 0,
  
  availableDates: [
    "2026-03-15",
    "2026-04-01",
    "2026-04-15",
    "2026-05-01",
    "2026-05-15",
    "2026-06-01",
    "2026-06-15",
    "2026-07-01",
    "2026-07-15",
    "2026-08-01",
    "2026-08-15",
    "2026-09-01",
    "2026-09-15",
    "2026-10-01",
    "2026-10-15"
  ],

  addons: [
    { id: 1, name: "Gondola Ride Phase 1", price: 80, description: "Cable car ride to Kongdori (Gulmarg Phase 1)" },
    { id: 2, name: "Gondola Ride Phase 2", price: 150, description: "Cable car ride to Apharwat Peak (Gulmarg Phase 2)" },
    { id: 3, name: "Betaab Valley Union Taxi", price: 40, description: "Shared taxi to Betaab Valley from Pahalgam" },
    { id: 4, name: "Aru Valley Union Taxi", price: 35, description: "Shared taxi to Aru Valley from Pahalgam" },
    { id: 5, name: "Thajiwas Glacier Visit", price: 50, description: "Pony or snow sledge ride to Thajiwas Glacier in Sonmarg" },
    { id: 6, name: "Extended Shikara Ride", price: 40, description: "Additional 1 hour Shikara ride on Dal Lake" },
    { id: 7, name: "Helicopter Ticket to Vaishno Devi", price: 250, description: "Helicopter service from Katra to Sanjichhat (one way)" },
    { id: 8, name: "Photography Package", price: 120, description: "Professional photographer for 2 key days" }
  ],

  highlights: [
    "Vaishno Devi Darshan - one of India's most revered pilgrimage sites",
    "Complete Kashmir Valley coverage in 10 days",
    "Visit to Raghunath Temple and historic Bahu Fort in Jammu",
    "Sacred Mansar Lake pilgrimage site",
    "Patnitop hill station with pine forests and meadows",
    "Pahalgam - Valley of Shepherds with Lidder River walks",
    "Optional visits to Betaab Valley and Aru Valley",
    "Gulmarg - Meadow of Flowers with Gondola options",
    "Srinagar's Mughal Gardens - Nishat, Shalimar, Chashme Shahi",
    "One hour Shikara ride on Dal Lake included",
    "Sonmarg - Meadow of Gold day trip",
    "Optional Thajiwas Glacier visit",
    "Comfortable 3-star hotels throughout",
    "MAP plan with daily breakfast and dinner",
    "Private cab for entire tour",
    "Flexible departure - Jammu or Srinagar",
    "Perfect for families, pilgrims, first-time visitors",
    "All major destinations covered without rushing"
  ],

  inclusions: [
    "9 nights accommodation in 3-star hotels as per itinerary",
    "MAP (Modified American Plan) - Daily breakfast and dinner",
    "Private air-conditioned cab for entire tour",
    "All transfers: Airport/Railway Station pickup and drop",
    "One hour Shikara ride on Dal Lake",
    "Mineral water during travel",
    "Driver allowance, fuel charges, toll taxes, parking fees",
    "All applicable taxes and GST"
  ],

  exclusions: [
    "Airfare or train tickets to/from Jammu or Srinagar",
    "Lunch meals, snacks, and beverages",
    "Gondola ride at Gulmarg (Phase 1 & 2)",
    "Union taxis to Betaab Valley, Aru Valley, and other local spots",
    "Pony rides, sledge rides, and adventure activities",
    "Helicopter ticket to Vaishno Devi",
    "Entry tickets to gardens, museums, and attractions",
    "Personal expenses: laundry, tips, shopping",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Jammu - Temple City Welcome",
      location: "Jammu (Hotel check-in & city tour)",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "Welcome to Jammu, the City of Temples and the winter capital of Jammu & Kashmir! Upon arrival at Jammu Airport or Railway Station, meet your tour driver who will escort you to your hotel. Check in and freshen up. After settling in, begin your Jammu city sightseeing. First, visit the famous Raghunath Temple, located in the heart of Jammu city. This magnificent temple complex, built in 1857, is dedicated to Lord Rama and is one of the largest temple complexes in North India. The temple has seven shrines within its premises and features exquisite architecture with gold-plated spires. Devotees from across India visit this sacred site. Next, drive to Bahu Fort, an ancient fort perched on a rock face overlooking the Tawi River. The fort is believed to be about 3,000 years old and offers panoramic views of Jammu city. Within the fort complex is the Bahu (Bawe Wali Mata) Temple dedicated to Goddess Kali, an important pilgrimage site especially on Tuesdays and Sundays. Walk through the adjacent Bagh-e-Bahu, a beautifully landscaped terraced garden with fountains, flowers, and an aquarium. The garden offers stunning sunset views over the Tawi River valley. In the evening, you're free to explore Raghunath Bazaar for local shopping or simply relax at your hotel. Dinner will be served at the hotel. Overnight stay in Jammu, resting up for the spiritual journey ahead.",
      activities: [
        "Arrival at Jammu Airport/Railway Station",
        "Meet tour driver and transfer to hotel",
        "Hotel check-in and refreshment",
        "Visit Raghunath Temple complex",
        "Temple architecture observation",
        "Devotional atmosphere experience",
        "Drive to historic Bahu Fort",
        "Fort exploration and history",
        "Visit Bahu Temple (Bawe Wali Mata)",
        "Panoramic views of Jammu city",
        "Walk through Bagh-e-Bahu Gardens",
        "Terraced garden exploration",
        "Tawi River valley sunset views",
        "Evening leisure time",
        "Optional Raghunath Bazaar visit",
        "Dinner at hotel"
      ],
      meals: ["Dinner"],
      accommodation: "Hotel Rajdhani / Hotel Asia Jammu / Similar (3-Star)",
      highlights: [
        "Raghunath Temple darshan",
        "Historic Bahu Fort views",
        "Bagh-e-Bahu Gardens"
      ]
    },
    {
      day: 2,
      title: "Jammu to Katra - Gateway to Vaishno Devi",
      location: "Jammu → Katra (50 km, 1.5 hours)",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "After breakfast at the hotel and checkout, drive to Katra, the base camp for the sacred Vaishno Devi pilgrimage. The journey is short and scenic, passing through hillside villages and terraced fields. Katra is a bustling pilgrimage town situated at the foothills of the Trikuta Mountains. Arrive in Katra by late morning and check into your hotel. After lunch (on your own), you have the rest of the day to explore Katra at your leisure. The town has a vibrant market area with shops selling religious items, souvenirs, offerings for the temple, warm clothing for the trek, walking sticks, and local snacks. You can purchase items you'll need for tomorrow's yatra (pilgrimage). Visit the Katra market to observe the pilgrimage atmosphere - thousands of devotees arrive here daily from across India and abroad. You might also visit local temples in Katra town or simply rest at your hotel to prepare for the early morning trek tomorrow. The Vaishno Devi yatra is a physically demanding 13-14 km uphill trek, so it's important to rest well tonight. Your hotel staff can provide information about helicopter services, pony rides, and palanquin options if you prefer not to trek the entire distance on foot. Have dinner at the hotel and get a good night's sleep. Set your alarm for an early departure tomorrow. Overnight stay in Katra.",
      activities: [
        "Breakfast and Jammu hotel checkout",
        "Scenic drive to Katra",
        "Hillside village observation",
        "Arrival and hotel check-in at Katra",
        "Lunch break (own arrangement)",
        "Katra market exploration",
        "Religious shops and souvenir browsing",
        "Purchase trek supplies if needed",
        "Observation of pilgrimage atmosphere",
        "Optional local temple visits",
        "Rest and preparation for yatra",
        "Inquiry about helicopter/pony services",
        "Dinner at hotel",
        "Early night rest"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "The Black Pearl / Hotel Moon Light International / Similar (3-Star)",
      highlights: [
        "Katra market atmosphere",
        "Pilgrimage preparation",
        "Trikuta Mountains views"
      ]
    },
    {
      day: 3,
      title: "Vaishno Devi Darshan - Sacred Pilgrimage",
      location: "Katra → Vaishno Devi Bhawan → Katra (26-28 km trek round trip)",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "This is the spiritual highlight of your journey. Wake up very early (around 3:00-4:00 AM is recommended to avoid crowds) and begin your sacred pilgrimage to Vaishno Devi. The holy shrine of Mata Vaishno Devi is one of the most revered Hindu temples in India, attracting millions of devotees annually. The temple is located in a cave at an altitude of 5,200 feet in the Trikuta Mountains. The trek from Katra (Banganga) to the Bhawan (main shrine) is approximately 13-14 km uphill. The well-maintained path is paved and includes facilities like rest stops, refreshment kiosks, toilet facilities, medical aid posts, and battery-operated vehicle services for elderly or infirm pilgrims. The trek typically takes 4-6 hours uphill depending on your pace. Along the route, you'll pass several landmarks: Banganga (the starting point with a temple), Charan Paduka (a rock bearing footprints of the Goddess), Adhkuwari (a cave where the Goddess meditated), and finally Sanjichhat (helicopter point, just 2.5 km from Bhawan). The atmosphere is electric with devotion - pilgrims chanting 'Jai Mata Di!' throughout the journey. Upon reaching the Bhawan, after security check and depositing your belongings at the cloak room, enter the holy cave where the shrine of Mata Vaishno Devi is located. The shrine consists of three natural rock formations (pindies) representing the three forms of the Goddess: Maha Kali, Maha Lakshmi, and Maha Saraswati. Devotees offer prayers, seek blessings, and experience profound spiritual energy. After darshan (sacred viewing), return via the same route. The descent takes about 2-3 hours. Arrive back in Katra by evening, tired but spiritually fulfilled. Return to your hotel for dinner and well-deserved rest. Overnight stay in Katra.",
      activities: [
        "Very early morning wake-up (3-4 AM)",
        "Begin trek from Katra (Banganga)",
        "Pass Banganga temple",
        "Trek to Charan Paduka",
        "Visit Adhkuwari cave (Goddess meditation site)",
        "Continue ascent through Trikuta Mountains",
        "Rest stops and refreshments along route",
        "Devotional chanting atmosphere",
        "Arrival at Sanjichhat",
        "Final 2.5 km to Bhawan",
        "Security check and cloak room",
        "Entry into holy cave",
        "Darshan at Vaishno Devi shrine",
        "Prayer and blessings seeking",
        "Return descent to Katra",
        "Evening arrival at hotel",
        "Dinner and rest"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "The Black Pearl / Hotel Moon Light International / Similar (3-Star)",
      highlights: [
        "Vaishno Devi darshan",
        "Sacred cave shrine experience",
        "Spiritual pilgrimage completion"
      ]
    },
    {
      day: 4,
      title: "Katra to Patnitop via Mansar Lake",
      location: "Katra → Mansar Lake → Patnitop (130 km, 4 hours)",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "After breakfast and checkout from Katra, begin your journey toward Patnitop with a scenic stop at the sacred Mansar Lake. The drive takes you through changing landscapes - from the Trikuta foothills back toward the plains near Jammu, then ascending again into the hills. Mansar Lake is an oval-shaped natural lake surrounded by forested hills, located about 62 km from Jammu. It holds great religious significance for Hindus and is associated with the serpent king Shesha and Lord Shiva. According to legend, the lake was created by Lord Shiva himself. Walk around the lakeside path (there's a paved circumambulation path of about 3 km) observing the temples and shrines scattered around the perimeter. The main attractions include Umapati Mahadev Temple, Narsimha Temple, and other smaller shrines. The lake has a serene atmosphere with ducks and migratory birds (in season) adding to the tranquility. Optional: You can take a boat ride on the calm waters for a different perspective of the surrounding hills (boating fee extra). After spending time at Mansar Lake, continue your drive to Patnitop. The road ascends through beautiful cedar and pine forests. Patnitop is a scenic hill station at about 2,024 meters altitude, known for its meadows, panoramic views, and pleasant climate. Arrive in Patnitop by late afternoon/evening. Check into your hotel. The evening is at leisure - you can take a short walk through the pine forests near your hotel, breathing the fresh mountain air. Enjoy dinner at the hotel featuring local Dogri cuisine. Overnight stay in Patnitop, surrounded by the fragrance of pine and deodar.",
      activities: [
        "Breakfast and Katra hotel checkout",
        "Drive through varied landscapes",
        "Stop at sacred Mansar Lake",
        "Lakeside walk and circumambulation",
        "Visit Umapati Mahadev Temple",
        "Visit Narsimha Temple",
        "Lake mythology and legends learning",
        "Optional boat ride on lake",
        "Bird watching (seasonal)",
        "Continue drive to Patnitop",
        "Ascent through cedar and pine forests",
        "Arrival and check-in at Patnitop",
        "Evening leisure walk in pine forest",
        "Fresh mountain air immersion",
        "Dinner featuring Dogri cuisine"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Hotel Hilltop / Hotel Pine Spring / Similar (3-Star)",
      highlights: [
        "Sacred Mansar Lake darshan",
        "Forest drive scenery",
        "Patnitop hill station charm"
      ]
    },
    {
      day: 5,
      title: "Patnitop to Pahalgam - Valley of Shepherds",
      location: "Patnitop → Pahalgam (170 km, 5 hours)",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "After breakfast and checkout, embark on a beautiful drive from Patnitop to Pahalgam, entering deeper into Kashmir Valley. The journey passes through the Jawahar Tunnel (also connecting route) or via Chenani-Nashri Tunnel, transitioning from the Jammu region to Kashmir Valley. As you enter Kashmir, notice the landscape changing to lush green valleys, apple orchards, and traditional Kashmiri villages with wooden houses and tin roofs. The Lidder River will be your companion as you approach Pahalgam. Arrive in Pahalgam by afternoon. Pahalgam, meaning 'Village of Shepherds,' sits at the confluence of the Lidder River and Sheshnag Lake streams at about 2,130 meters altitude. This beautiful town is surrounded by pine forests and snow-capped mountains. Check into your hotel. After lunch (on your own), take a leisurely walk along the Lidder River. The river is crystal clear with turquoise waters flowing through the valley. Walk on the riverside paths, breathe the pure mountain air, and observe local life. Pahalgam's main market area has shops selling Kashmiri handicrafts, woolens, carpets, and souvenirs - a good place for window shopping or purchasing mementos. You might also walk to nearby meadows for peaceful picnic spots. The evening is at leisure to relax and absorb Pahalgam's natural beauty. Tomorrow you'll have the option to explore surrounding valleys. Enjoy dinner at your hotel. Overnight stay in Pahalgam with the sound of the Lidder River as your lullaby.",
      activities: [
        "Breakfast and Patnitop checkout",
        "Scenic drive to Pahalgam",
        "Jawahar/Chenani-Nashri Tunnel passage",
        "Entry into Kashmir Valley",
        "Apple orchard observation",
        "Traditional village sighting",
        "Lidder River valley drive",
        "Arrival and hotel check-in",
        "Lunch break (own arrangement)",
        "Leisurely Lidder River walk",
        "Riverside path exploration",
        "Crystal clear water observation",
        "Main market visit",
        "Kashmiri handicraft browsing",
        "Optional meadow walks",
        "Evening leisure and relaxation",
        "Dinner at hotel"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Hotel Brooklyn Resort / Hotel Poet's Inn / Similar (3-Star)",
      highlights: [
        "Lidder River pristine beauty",
        "Pahalgam natural surroundings",
        "Valley of Shepherds charm"
      ]
    },
    {
      day: 6,
      title: "Pahalgam Local Sightseeing - Valleys & Meadows",
      location: "Pahalgam (Betaab Valley, Aru Valley, Chandanwari - Optional)",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Today is dedicated to exploring the beautiful valleys around Pahalgam. After breakfast, you have the option to visit some of Pahalgam's most scenic spots. Please note that union taxis (shared or private) to these locations are at your own cost and not included in the package. Betaab Valley (approximately 15 km from Pahalgam) is named after the Bollywood film 'Betaab' which was shot here. This breathtakingly beautiful valley is surrounded by lush green meadows, snow-covered mountains, and dense forests. The Lidder River flows through it, adding to the scenic charm. It's perfect for nature walks, photography, and simply relaxing in nature's lap. You can reach Betaab Valley by union taxi (nominal cost of around ₹40-50 per person for shared taxi). Aru Valley (approximately 12 km from Pahalgam) is a pristine village and meadow area with spectacular views. It's less crowded than Betaab Valley and offers a more peaceful atmosphere. Aru is the base for several treks including the Tarsar-Marsar lakes trek and Kolahoi Glacier trek. The village has traditional Kashmiri houses and offers beautiful picnic spots. Union taxi cost is similar to Betaab Valley. If you're adventurous and time permits, you might also consider Chandanwari (about 16 km from Pahalgam), which is the starting point of the Amarnath Yatra and offers snow viewing even in summer. However, this requires additional time and taxi cost. Alternatively, if you prefer a relaxed day, you can spend time walking along more sections of the Lidder River, exploring Pahalgam town more thoroughly, or simply relaxing at your hotel enjoying the mountain views. The choice is yours based on your energy levels and interests. Return to your hotel by evening. Dinner and overnight stay in Pahalgam.",
      activities: [
        "Breakfast at hotel",
        "Optional visit to Betaab Valley",
        "Meadows and mountain scenery",
        "Lidder River through valley",
        "Nature walks and photography",
        "Optional visit to Aru Valley",
        "Pristine village observation",
        "Traditional Kashmiri houses",
        "Peaceful picnic spots",
        "Optional Chandanwari visit",
        "Snow viewing (seasonal)",
        "Alternative: Extended Lidder walks",
        "Pahalgam town exploration",
        "Hotel relaxation with views",
        "Evening leisure time",
        "Dinner at hotel"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Hotel Brooklyn Resort / Hotel Poet's Inn / Similar (3-Star)",
      highlights: [
        "Betaab Valley scenic beauty",
        "Aru Valley serenity",
        "Flexible exploration day"
      ]
    },
    {
      day: 7,
      title: "Pahalgam to Gulmarg - Meadow of Flowers",
      location: "Pahalgam → Gulmarg (140 km, 4.5 hours)",
      image: "https://images.unsplash.com/photo-1606297048706-e5c39b8c5b1b?w=800",
      description: "After breakfast and checkout from Pahalgam, begin your scenic drive to Gulmarg, one of Asia's premier ski resorts and one of the most beautiful meadows you'll ever see. The route takes you through apple orchards, saffron fields (in season), and traditional villages. You'll pass through or near Srinagar's outskirts (though we're not stopping in the city today - that's saved for later). As you approach Gulmarg, the road ascends through forests of pine, fir, and deodar. Arrive in Gulmarg, located at about 2,650 meters altitude. The name Gulmarg means 'Meadow of Flowers,' and in spring and summer, the vast meadows are carpeted with countless varieties of wildflowers. In winter, it transforms into a white wonderland and becomes India's premier skiing destination. Check into your hotel in Gulmarg town or Tangmarg (base of Gulmarg). After lunch (on your own), explore the stunning meadows. Walk or hire a pony to explore different parts of the meadow. The views of the Nanga Parbat and Harmukh mountains in the distance are spectacular. The meadow seems to stretch endlessly, with horses grazing and the fresh alpine air filling your lungs. Optional (at extra cost): Take the world-famous Gulmarg Gondola cable car. Phase 1 takes you to Kongdori station at 3,080 meters, offering stunning views of the meadow and surrounding peaks. Phase 2 (if operational) takes you to Apharwat Peak at 3,979 meters, where you can see snow year-round and enjoy breathtaking Himalayan panoramas. The Gondola is one of the highest cable cars in the world. Costs: Phase 1 approximately ₹740-800, Phase 2 approximately ₹950-1000 (prices subject to change). If you prefer to skip the Gondola, you can enjoy the meadow walks, visit the historic Gulmarg Golf Course (one of the highest in the world), and visit the small Shiva temple (Maharani Temple). Enjoy the magical golden hour as the sun sets over the meadows. Return to your hotel for dinner. Overnight stay in Gulmarg region, surrounded by nature's grandeur.",
      activities: [
        "Breakfast and Pahalgam checkout",
        "Scenic drive to Gulmarg",
        "Apple orchard observation",
        "Saffron field viewing (seasonal)",
        "Traditional village sighting",
        "Forest drive (pine, fir, deodar)",
        "Arrival and hotel check-in",
        "Lunch break (own arrangement)",
        "Gulmarg meadow exploration",
        "Meadow walks or pony rides",
        "Nanga Parbat & Harmukh views",
        "Optional Gulmarg Gondola Phase 1",
        "Optional Gondola Phase 2 to Apharwat",
        "Alternative: Golf Course visit",
        "Maharani Temple (Shiva temple)",
        "Golden hour sunset photography",
        "Dinner at hotel"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Hotel Countryside / Hotel Gulmarg House Tangmarg / Similar (3-Star)",
      highlights: [
        "Gulmarg endless meadows",
        "Optional world-famous Gondola",
        "Himalayan panoramic views"
      ]
    },
    {
      day: 8,
      title: "Gulmarg to Srinagar - Lake City Heritage",
      location: "Gulmarg → Srinagar (50 km, 2 hours)",
      image: "https://images.unsplash.com/photo-1588409347169-3d5a6d3653d3?w=800",
      description: "After breakfast and checkout, drive to Srinagar, the summer capital of Jammu & Kashmir and the heart of Kashmir Valley. The short drive takes you through picturesque landscapes. Arrive in Srinagar by mid-morning and check into your hotel. After settling in, begin your Srinagar sightseeing tour, focusing on the world-famous Mughal Gardens. First, visit Nishat Bagh ('Garden of Joy'), located on the eastern side of Dal Lake with the Zabarwan Mountains as backdrop. Built in 1633, this terraced garden features beautiful flowerbeds, fountains, and water channels following the Persian garden design. The view of Dal Lake from the top terrace is spectacular. Next, visit Shalimar Bagh ('Abode of Love'), the largest Mughal garden built in 1619 by Emperor Jahangir for his wife Nur Jahan. The garden has four terraces with pavilions, waterfalls, and over 400 fountains. The Mughal architecture and landscaping are stunning. Also visit Chashme Shahi ('Royal Spring'), the smallest but most elegant Mughal garden, built around a natural spring with medicinal properties. After the garden visits, proceed to Dal Lake for your included one-hour Shikara ride. Glide through the calm waters in a traditional wooden Shikara boat, observing life on the lake - floating vegetable gardens, houseboats, markets on boats, and the surrounding mountains reflected in the water. The Shikara ride is a quintessential Kashmir experience, peaceful and romantic. Your Shikara operator might offer to take you to floating markets where vendors sell flowers, vegetables, and handicrafts from their boats (shopping optional). In the evening, you can take a walk along the Boulevard Road by Dal Lake, enjoy local snacks at lakeside cafes, or visit Lal Chowk market for shopping. Dinner and overnight stay in Srinagar, with Dal Lake as your neighbor.",
      activities: [
        "Breakfast and Gulmarg checkout",
        "Picturesque drive to Srinagar",
        "Arrival and hotel check-in",
        "Begin Mughal Gardens tour",
        "Visit Nishat Bagh (Garden of Joy)",
        "Terraced garden exploration",
        "Dal Lake views from garden",
        "Visit Shalimar Bagh (Abode of Love)",
        "Pavilions and fountains observation",
        "Mughal architecture appreciation",
        "Visit Chashme Shahi (Royal Spring)",
        "Natural spring observation",
        "Proceed to Dal Lake",
        "One-hour Shikara ride (included)",
        "Floating gardens observation",
        "Houseboat lifestyle viewing",
        "Optional floating market visit",
        "Evening Boulevard Road walk",
        "Optional Lal Chowk shopping",
        "Dinner at hotel"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Hotel Star of Kashmir / Hotel Snowbliss / Similar (3-Star)",
      highlights: [
        "Mughal Gardens splendor",
        "Shikara ride on Dal Lake",
        "Srinagar heritage experience"
      ]
    },
    {
      day: 9,
      title: "Srinagar to Sonmarg Day Trip - Golden Meadow",
      location: "Srinagar → Sonmarg → Srinagar (160 km round trip, 6-7 hours)",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "After an early breakfast, embark on a full-day excursion to Sonmarg, the 'Meadow of Gold.' This is one of the most beautiful drives in Kashmir, following the Sindh River through spectacular gorges and valleys. The 80 km journey from Srinagar to Sonmarg takes about 2.5-3 hours. The route passes through several charming villages and offers views of snow-covered peaks. Arrive at Sonmarg, situated at about 2,800 meters altitude. Sonmarg is a pristine valley surrounded by majestic glaciers and serene lakes. In spring and summer, the valley is covered with flowers, earning it the name 'Meadow of Gold.' The Sindh River, originating from the glaciers, flows through the valley with tremendous force and beauty. Spend time exploring the meadows, walking along the river, and soaking in the panoramic mountain views. The atmosphere is fresh, cool, and incredibly peaceful. Optional (at extra cost): Visit Thajiwas Glacier, located about 3-4 km from the main Sonmarg point. The glacier remains snow-covered throughout the year. To reach the glacier, you can hire a pony or take a snow sledge ride (costs approximately ₹500-800 per person round trip, depending on negotiation and season). The trek/ride takes you through beautiful landscapes, and seeing the glacier and playing in the snow (even in summer) is a memorable experience. Note: Thajiwas Glacier visit requires additional time (2-3 hours round trip) and is subject to weather conditions. After thoroughly enjoying Sonmarg, have lunch at one of the local dhabas or restaurants (on your own cost). Begin your return journey to Srinagar by afternoon. The drive back offers different lighting and perspectives of the same beautiful landscapes. Arrive back in Srinagar by evening. You might have time for some last-minute shopping at local markets or simply relax by Dal Lake. Dinner and overnight stay in Srinagar. Tomorrow is departure day, so pack your belongings tonight.",
      activities: [
        "Early breakfast",
        "Departure for Sonmarg",
        "Scenic drive along Sindh River",
        "Gorge and valley observation",
        "Village sightseeing along route",
        "Arrival at Sonmarg (Meadow of Gold)",
        "Meadow exploration and walks",
        "Sindh River observation",
        "Glacier-fed river beauty",
        "Panoramic mountain views",
        "Optional Thajiwas Glacier visit",
        "Pony/snow sledge ride to glacier",
        "Snow experience (summer too)",
        "Photography session",
        "Lunch at local dhaba/restaurant",
        "Return drive to Srinagar",
        "Evening arrival",
        "Optional last-minute shopping",
        "Dal Lake leisure time",
        "Dinner at hotel",
        "Packing for departure"
      ],
      meals: ["Breakfast", "Dinner"],
      accommodation: "Hotel Star of Kashmir / Hotel Snowbliss / Similar (3-Star)",
      highlights: [
        "Sonmarg golden meadows",
        "Optional Thajiwas Glacier",
        "Sindh River valley beauty"
      ]
    },
    {
      day: 10,
      title: "Departure - Flexible Exit",
      location: "Srinagar Airport or Jammu (Optional)",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      description: "Your incredible 10-day journey through Jammu & Kashmir comes to an end today. After breakfast, check out from your hotel. Depending on your preference and flight/train bookings, you have flexible departure options. Option 1: Departure from Srinagar - If you're flying out of Srinagar, your driver will transfer you to Srinagar Airport (about 30-40 minutes from the city) according to your flight schedule. Srinagar Airport (Sheikh ul-Alam International Airport) has good connectivity to major Indian cities including Delhi, Mumbai, Bangalore, etc. Option 2: Departure from Jammu - If you prefer to depart from Jammu (perhaps your return tickets are from there, or you want to revisit the city), your driver will take you from Srinagar to Jammu (approximately 270 km, 7-8 hours drive). This gives you another scenic journey through Kashmir and back to Jammu. You can be dropped at Jammu Airport or Jammu Railway Station according to your schedule. Make sure your departure time from Jammu allows for the long drive from Srinagar. If time permits before your departure, you might do some last-minute shopping for Kashmiri handicrafts, dry fruits, saffron, or Pashmina shawls. Depart with your heart full of memories - the spiritual experience of Vaishno Devi, the pristine beauty of Pahalgam and Sonmarg, the endless meadows of Gulmarg, the Mughal heritage of Srinagar, and the warm hospitality of the people. This comprehensive tour has given you the complete essence of Jammu & Kashmir. The landscapes, culture, spirituality, and experiences will stay with you forever. We hope to welcome you back to the paradise on earth someday. Safe travels!",
      activities: [
        "Breakfast at hotel",
        "Hotel checkout",
        "Last-minute packing",
        "Option 1: Transfer to Srinagar Airport",
        "Srinagar Airport drop",
        "Option 2: Drive to Jammu",
        "Scenic return journey",
        "Jammu Airport/Railway Station drop",
        "Optional last shopping",
        "Kashmiri handicrafts purchase",
        "Dry fruits and saffron buying",
        "Departure with memories",
        "Tour completion"
      ],
      meals: ["Breakfast"],
      accommodation: "N/A",
      highlights: [
        "Flexible departure options",
        "Complete tour memories",
        "Safe onward journey"
      ]
    }
  ],

  accommodationDetails: {
    title: "Comfortable 3-Star Hotels Throughout",
    description: "Handpicked 3-star category hotels with modern amenities and local hospitality",
    hotels: [
      {
        name: "Hotel Rajdhani / Hotel Asia Jammu / Similar",
        type: "3-Star Hotel",
        location: "Jammu City",
        nights: 1,
        amenities: ["City center location", "Restaurant", "WiFi", "Hot water", "Modern rooms", "Breakfast included"]
      },
      {
        name: "The Black Pearl / Hotel Moon Light International / Similar",
        type: "3-Star Hotel",
        location: "Katra",
        nights: 2,
        amenities: ["Near Vaishno Devi route", "Restaurant", "WiFi", "Hot water", "Pilgrim-friendly", "Early breakfast available"]
      },
      {
        name: "Hotel Hilltop / Hotel Pine Spring / Similar",
        type: "3-Star Hotel",
        location: "Patnitop",
        nights: 1,
        amenities: ["Mountain views", "Pine forest setting", "Restaurant", "Hot water", "Heating", "Peaceful ambiance"]
      },
      {
        name: "Hotel Brooklyn Resort / Hotel Poet's Inn / Similar",
        type: "3-Star Hotel",
        location: "Pahalgam",
        nights: 2,
        amenities: ["Lidder River proximity", "Valley views", "Restaurant", "WiFi", "Hot water", "Comfortable rooms"]
      },
      {
        name: "Hotel Countryside / Hotel Gulmarg House Tangmarg / Similar",
        type: "3-Star Hotel",
        location: "Gulmarg/Tangmarg",
        nights: 1,
        amenities: ["Meadow/forest views", "Restaurant", "Heating", "Hot water", "Mountain ambiance"]
      },
      {
        name: "Hotel Star of Kashmir / Hotel Snowbliss / Similar",
        type: "3-Star Hotel",
        location: "Srinagar",
        nights: 2,
        amenities: ["Dal Lake proximity", "Modern amenities", "Restaurant", "WiFi", "Hot water", "Kashmiri hospitality"]
      }
    ],
    note: "All hotels are in the 3-star category offering comfortable rooms, attached bathrooms with hot water, WiFi (subject to connectivity), restaurants, and essential amenities. Actual hotels will be confirmed at the time of booking based on availability, maintaining the same standard."
  },

  images: [
    "/destinations/jammu/vaishno_devi/1.jpg",
    "/destinations/kashmir/gulmarg/01.jpg",
    "/destinations/jammu/patnitop/1.jpg",
    "/destinations/kashmir/pahalgam/1.jpg",
    "/destinations/kashmir/srinagar/01.jpg",
    "/destinations/jammu/vaishno_devi/2.jpg",
    "/destinations/kashmir/sonamarg/1.jpg",
    "/destinations/jammu/raghunath_temple/1.jpg",
    "/destinations/kashmir/dal_lake/1.jpg"
  ],

  faqs: [
    {
      question: "What makes this 10-day tour different from shorter Kashmir tours?",
      answer: "This comprehensive tour combines the spiritual pilgrimage of Vaishno Devi with complete Kashmir Valley coverage. Unlike shorter tours that rush through destinations, this 10-day itinerary allows you to experience both Jammu region highlights (temples, forts, lakes) and all major Kashmir destinations (Pahalgam, Gulmarg, Srinagar, Sonmarg) at a comfortable pace. It's the perfect choice for first-time visitors who want a complete, unhurried experience."
    },
    {
      question: "Is the Vaishno Devi trek difficult? Are there alternatives to walking?",
      answer: "The Vaishno Devi trek is a 13-14 km uphill walk on a well-paved path with facilities throughout. While it requires reasonable fitness, millions of devotees of all ages complete it annually. Alternatives available (at extra cost): Helicopter service from Katra to Sanjichhat (reducing trek to 2.5 km), pony rides, palanquin (carried by porters), and battery-operated vehicles for elderly/infirm. We recommend starting early to avoid crowds and heat."
    },
    {
      question: "What's included in the MAP (Modified American Plan) meal plan?",
      answer: "MAP includes daily breakfast and dinner at your hotels throughout the 9 nights. Lunch is excluded for flexibility, allowing you to try local restaurants and dhabas at different destinations. Most hotels offer good breakfast spreads, and dinners feature local and multi-cuisine options. Lunches typically cost ₹200-400 per person depending on location and choice."
    },
    {
      question: "Why is the Gondola ride in Gulmarg not included?",
      answer: "The Gulmarg Gondola is optional because: 1) It's quite expensive (₹740-1000 per person), 2) It's subject to weather conditions and may not operate, 3) Some travelers prefer to spend time exploring the meadows instead, and 4) Keeping it optional allows us to offer a more affordable base price. We highly recommend it for the spectacular views if budget permits."
    },
    {
      question: "Can I skip Vaishno Devi if I'm not interested in the pilgrimage?",
      answer: "Yes, absolutely. While Vaishno Devi is a highlight for many travelers, we can customize the tour to skip Katra and spend that time elsewhere, perhaps adding a day in Srinagar or including additional destinations like Doodhpathri or Yusmarg. Contact us for customization options. The tour is flexible to your interests."
    },
    {
      question: "What's the best time to take this tour?",
      answer: "March to October is ideal. April-May: Pleasant weather, flowers blooming, Vaishno Devi less crowded. June-August: Peak season, warm weather, all destinations accessible, but can be crowded. September-October: Excellent weather, autumn colors, fewer crowds. November-February: Very cold with snow, many roads may be closed, but winter beauty is stunning. Gulmarg is best for skiing December-March."
    },
    {
      question: "Should I depart from Srinagar or Jammu on Day 10?",
      answer: "It depends on your flight/train availability and preference. Departing from Srinagar is convenient (short transfer) and you maximize time in Kashmir. Departing from Jammu requires a 7-8 hour drive from Srinagar but might offer better flight connections or fares from your home city. Consider flight availability and costs when booking. We accommodate both options."
    },
    {
      question: "Are union taxis to Betaab Valley, Aru Valley necessary?",
      answer: "Union taxis are required for accessing specific valleys around Pahalgam due to environmental regulations and narrow roads. Private vehicles are not allowed beyond certain points. Union taxis are shared or private local taxis that operate on fixed routes. They're affordable (₹35-50 per person for shared taxis) and efficient. We can help arrange them on the spot."
    },
    {
      question: "What should I pack for this 10-day tour?",
      answer: "Pack layered clothing (weather can vary greatly between Jammu plains and Kashmir valleys), warm jacket or sweater (even in summer, evenings are cold), comfortable walking shoes for Vaishno Devi trek, modest clothing for temples, sunscreen and sunglasses, personal medications, camera, power bank, and some cash (ATMs available but remote areas may have limited access). For Vaishno Devi: walking stick (available in Katra), raincoat, small backpack."
    },
    {
      question: "Is this tour suitable for elderly people and children?",
      answer: "Yes, with considerations. The tour is generally suitable for all ages. For elderly: The Vaishno Devi trek can be challenging, but helicopter/pony options are available. All other destinations are easily accessible. For children: Most activities are family-friendly. However, high-altitude destinations (Gulmarg, Sonmarg) may require acclimatization. Consult your doctor if you have specific health concerns. We've had families with grandparents and young children enjoy this tour successfully."
    }
  ],

  amenities: [
    { icon: "Mountain", label: "Complete Kashmir Coverage" },
    { icon: "Car", label: "Private Cab Entire Tour" },
    { icon: "Utensils", label: "Breakfast & Dinner Daily" },
    { icon: "Camera", label: "Shikara Ride Included" },
    { icon: "Award", label: "Vaishno Devi Pilgrimage" },
    { icon: "Users", label: "Flexible Group Size" }
  ],

  sustainability: [
    { icon: "Award", title: "Responsible Pilgrimage Tourism", description: "Supporting spiritual tourism while respecting sacred sites and local customs" },
    { icon: "Users", title: "Community Engagement", description: "Staying at local hotels, using local services, and supporting regional economies across Jammu and Kashmir" },
    { icon: "Leaf", title: "Balanced Exploration", description: "Thoughtfully paced itinerary reducing travel fatigue and environmental impact while maximizing cultural immersion" }
  ]
};
