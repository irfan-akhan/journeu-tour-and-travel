export interface Place {
  name: string;
  description: string;
  highlights: string[];
  image: string;
  category: 'nature' | 'heritage' | 'adventure' | 'spiritual' | 'cultural';
}

export interface RegionalDestination {
  id: string;
  name: string;
  tagline: string;
  description: string;
  hero_image: string;
  places: Place[];
  disabled?: boolean;
  disabledReason?: string;
}

export const KASHMIR_DESTINATION: RegionalDestination = {
  id: 'kashmir',
  name: 'Kashmir',
  tagline: 'Paradise on Earth',
  description: 'Kashmir, often called "Paradise on Earth," is a mesmerizing region of pristine lakes, snow-capped mountains, Mughal gardens, and rich cultural heritage. From the iconic houseboats of Dal Lake to the ski slopes of Gulmarg, Kashmir offers an unforgettable journey through breathtaking landscapes and timeless beauty.',
  hero_image: '/destinations/kashmir/heero.jpg',
  places: [
    {
      name: 'Dal Lake',
      description: 'The jewel of Srinagar, Dal Lake is famous for its traditional houseboats, floating gardens, and shikara rides. Spanning 18 square kilometers, this alpine lake is surrounded by Mughal gardens and snow-capped mountains, offering a serene escape and unforgettable sunset views.',
      highlights: [
        'Iconic houseboats and shikaras',
        'Floating vegetable gardens',
        'Char Chinar island',
        'Morning shikara rides',
        'Sunset views over the Himalayas'
      ],
      image: '/destinations/kashmir/dal_lake/1.jpg',
      category: 'nature'
    },
    {
      name: 'Nigeen Lake',
      description: 'A quieter sibling to Dal Lake, Nigeen Lake offers tranquility and pristine beauty. Connected to Dal Lake by a narrow causeway, this picturesque water body is surrounded by willow and poplar trees, making it ideal for peaceful boat rides and nature photography.',
      highlights: [
        'Peaceful atmosphere',
        'Luxury houseboats',
        'Water sports activities',
        'Bird watching',
        'Scenic views'
      ],
      image: '/destinations/kashmir/nigeen_lake/4.png',
      category: 'nature'
    },
    {
      name: 'Shalimar Bagh',
      description: 'Built by Mughal Emperor Jahangir in 1619 for his wife Nur Jahan, Shalimar Bagh is the largest Mughal garden in Kashmir. With four terraces adorned with fountains, pavilions, and vibrant flower beds, it exemplifies Mughal architectural brilliance and royal romance.',
      highlights: [
        'Four terraced levels',
        'Royal fountains and cascades',
        'Diwan-e-Khas pavilion',
        'Mughal architecture',
        'Evening light shows'
      ],
      image: '/destinations/kashmir/shalimar_bagh/1.jpg',
      category: 'heritage'
    },
    {
      name: 'Nishat Bagh',
      description: 'Known as the "Garden of Joy," Nishat Bagh was designed by Asif Khan in 1633. Set against the backdrop of Zabarwan mountains and overlooking Dal Lake, this twelve-terraced garden features cascading fountains, chinar trees, and stunning views.',
      highlights: [
        '12 terraced levels',
        'Lakefront location',
        'Ancient chinar trees',
        'Cascading water channels',
        'Mountain backdrop'
      ],
      image: '/destinations/kashmir/nishat_bagh/18.jpg',
      category: 'heritage'
    },
    {
      name: 'Pari Mahal',
      description: 'Perched atop Zabarwan mountain range, Pari Mahal (Palace of Fairies) is a seven-terraced garden built in the mid-1600s. This historic monument served as a Buddhist monastery, later converted into a royal observatory and library, offering breathtaking views of Srinagar and Dal Lake.',
      highlights: [
        'Seven terraced levels',
        'Buddhist and Mughal architecture',
        'Ancient observatory',
        'Panoramic city views',
        'Evening illumination'
      ],
      image: '/destinations/kashmir/pari_mahal/3.png',
      category: 'heritage'
    },
    {
      name: 'Gulmarg',
      description: 'Situated at 2,650 meters elevation, Gulmarg is Asia\'s premier ski destination and home to the world\'s second-highest cable car. The "Meadow of Flowers" transforms into a winter wonderland, offering world-class skiing, snowboarding, and year-round adventure activities.',
      highlights: [
        'Gulmarg Gondola (world\'s 2nd highest)',
        'Apharwat Peak (4,267m)',
        'World-class skiing facilities',
        'Maharani Temple',
        'Golf course (highest in world)'
      ],
      image: '/destinations/kashmir/gulmarg/01.jpg',
      category: 'adventure'
    },
    {
      name: 'Pahalgam',
      description: 'Known as the "Valley of Shepherds," Pahalgam sits at the confluence of streams from the Sheshnag Lake and Lidder River. This picturesque town serves as the base for the Amarnath Yatra and offers stunning meadows, pine forests, and adventure activities.',
      highlights: [
        'Lidder River rafting',
        'Betaab Valley',
        'Aru Valley',
        'Base for Amarnath Yatra',
        'Baisaran meadows'
      ],
      image: '/destinations/kashmir/pahalgam/2.jpg',
      category: 'nature'
    },
    {
      name: 'Sonamarg',
      description: 'The "Meadow of Gold" at 2,800 meters altitude is surrounded by glaciers and alpine lakes. Gateway to Ladakh, Sonamarg offers spectacular trekking routes, trout fishing, and views of the mighty Thajiwas Glacier.',
      highlights: [
        'Thajiwas Glacier',
        'Zoji La Pass gateway',
        'Trout fishing',
        'Trekking trails',
        'River rafting on Sindh'
      ],
      image: '/destinations/kashmir/sonamarg/1.jpg',
      category: 'nature'
    },
    {
      name: 'Hazratbal Shrine',
      description: 'Located on the northern shore of Dal Lake, Hazratbal is Kashmir\'s most revered Muslim shrine, housing a relic believed to be the hair of Prophet Muhammad. The white marble shrine with its distinctive dome is an architectural marvel and spiritual center.',
      highlights: [
        'Sacred Islamic shrine',
        'White marble architecture',
        'Lakeside location',
        'Religious festivals',
        'Peaceful ambiance'
      ],
      image: '/destinations/kashmir/hazratbal_shrine/2.png',
      category: 'spiritual'
    },
    {
      name: 'Doodhpathri',
      description: 'Known as the "Valley of Milk," Doodhpathri is a pristine meadow 42km from Srinagar. Covered with snow-white water streams, lush green pastures, and pine forests, this offbeat destination offers untouched natural beauty and tranquility.',
      highlights: [
        'Milky-white streams',
        'Alpine meadows',
        'Horse riding',
        'Picnic spots',
        'Unexplored beauty'
      ],
      image: '/destinations/kashmir/doodpathri/2.jpg',
      category: 'nature'
    },
    {
      name: 'Tosa Maidan',
      description: 'Tosa Maidan, meaning "meadow of wild horses," is a vast alpine meadow at 11,000 feet elevation in the Pir Panjal range. Once a military firing range, this newly opened destination offers pristine natural beauty with 360-degree mountain views, wildflower carpets in summer, and excellent camping opportunities.',
      highlights: [
        'High-altitude alpine meadow',
        '360-degree mountain views',
        'Wildflower meadows in summer',
        'Perfect for camping',
        'Recently opened to tourists'
      ],
      image: '/destinations/kashmir/tosa_maidan/2.png',
      category: 'nature'
    },
    {
      name: 'Wular Lake',
      description: 'One of Asia\'s largest freshwater lakes, Wular Lake spans approximately 200 square kilometers in Bandipora district. Fed by the Jhelum River, this ancient lake is an important wetland and bird sanctuary, home to diverse aquatic life and migratory birds. The Zaina Lank island with its 15th-century watchtower adds historical charm.',
      highlights: [
        'Asia\'s largest freshwater lake',
        'Important bird sanctuary',
        'Zaina Lank island with watchtower',
        'Spectacular sunrise and sunset',
        'Traditional fishing communities'
      ],
      image: '/destinations/kashmir/wular_lake/1.png',
      category: 'nature'
    },
    {
      name: 'Manasbal Lake',
      description: 'Known as the "Supreme Gem of all Kashmir Lakes," Manasbal is Kashmir\'s deepest natural lake with crystal-clear spring-fed waters. Famous for its spectacular lotus blooms in July-August and surrounded by ancient Mughal gardens including Jaroka, this peaceful lake offers an authentic experience away from tourist crowds.',
      highlights: [
        'Kashmir\'s deepest natural lake',
        'Spectacular lotus gardens',
        'Crystal-clear spring-fed waters',
        'Historic Jaroka Mughal garden',
        'Excellent bird watching'
      ],
      image: '/destinations/kashmir/manasbal_lake/3.png',
      category: 'nature'
    },
    {
      name: 'Astan Marg',
      description: 'A hidden gem in Anantnag district, Astan Marg is a serene meadow surrounded by dense pine and deodar forests with the Pir Panjal range in the background. This off-beat destination offers a peaceful retreat perfect for family picnics, nature walks, and photography, away from crowded tourist spots.',
      highlights: [
        'Peaceful meadow setting',
        'Dense pine forests',
        'Off-beat destination',
        'Perfect for picnics',
        'Pastoral mountain views'
      ],
      image: '/destinations/kashmir/astan_marg/1.jpg',
      category: 'nature'
    }
  ]
};

export const JAMMU_DESTINATION: RegionalDestination = {
  id: 'jammu',
  name: 'Jammu',
  tagline: 'City of Temples',
  description: 'Jammu, the winter capital of Jammu & Kashmir, is a land of ancient temples, majestic forts, and rich cultural heritage. Known as the "City of Temples," Jammu serves as the gateway to the Himalayas and houses some of North India\'s most revered pilgrimage sites, including the famous Vaishno Devi shrine.',
  hero_image: '/destinations/jammu/hero.jpg',
  places: [
    {
      name: 'Vaishno Devi Temple',
      description: 'One of India\'s holiest Hindu shrines, dedicated to Goddess Vaishno Devi, attracts over 8 million pilgrims annually. Situated at 5,200 feet in the Trikuta Mountains, the 13km trek to the cave shrine is a spiritual journey of faith and devotion.',
      highlights: [
        'Sacred cave shrine',
        '13km pilgrimage trek',
        'Helicopter service available',
        'Three rock formations (Pindis)',
        'Year-round pilgrimage'
      ],
      image: '/destinations/jammu/vaishno_devi/1.jpg',
      category: 'spiritual'
    },
    {
      name: 'Raghunath Temple',
      description: 'Built by Maharaja Gulab Singh in 1835, Raghunath Temple is one of North India\'s largest temple complexes. With seven shrines dedicated to Lord Rama, the temple features intricate gold-plated interiors and houses one of the world\'s largest galleries of Hindu deities.',
      highlights: [
        'Seven shrine complex',
        'Gold-plated interiors',
        'Massive deity gallery',
        'Architectural marvel',
        'Central location'
      ],
      image: '/destinations/jammu/raghunath_temple/1.jpg',
      category: 'spiritual'
    },
    {
      name: 'Bahu Fort',
      description: 'Overlooking the Tawi River, the ancient Bahu Fort dates back 3,000 years. Inside the fort is the revered Kali Temple (Bawey Wali Mata), attracting thousands of devotees. The terraced gardens offer panoramic views of Jammu city.',
      highlights: [
        'Ancient fortress',
        'Kali Temple inside',
        'Terraced gardens',
        'River views',
        'Historical significance'
      ],
      image: "/destinations/jammu/bahu_fort/38.png",
      category: 'heritage'
    },
    // {
    //   name: 'Mubarak Mandi Palace',
    //   description: 'The royal palace complex of Dogra kings, Mubarak Mandi showcases a blend of Rajasthani, Mughal, and European architectural styles. Spread over 46 acres, the palace features ornate courtyards, galleries, and museums preserving Jammu\'s royal heritage.',
    //   highlights: [
    //     'Royal palace complex',
    //     'Architectural fusion',
    //     'Museums and galleries',
    //     'Pink Hall (Gol Ghar)',
    //     'Heritage restoration'
    //   ],
    //   image: 'https://images.unsplash.com/photo-1611416517780-eff3a13b0359?w=800&h=600&fit=crop',
    //   category: 'heritage'
    // },
    // {
    //   name: 'Amar Mahal Palace',
    //   description: 'Built in the 19th century, Amar Mahal Palace now serves as a museum showcasing the art and culture of the Dogra dynasty. Perched on a hill overlooking Jammu, this red sandstone palace houses rare artifacts, miniature paintings, and a gold throne.',
    //   highlights: [
    //     'Museum and heritage center',
    //     'Gold throne',
    //     'Miniature Pahari paintings',
    //     'Library collection',
    //     'Panoramic views'
    //   ],
    //   image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop',
    //   category: 'heritage'
    // },
    {
      name: 'Patnitop',
      description: 'A beautiful hill station at 2,024 meters, Patnitop is known for its meadows, pine forests, and adventure activities. Located 112km from Jammu, it offers paragliding, skiing, and trekking with stunning views of the Himalayan ranges.',
      highlights: [
        'Hill station retreat',
        'Adventure activities',
        'Nathatop skiing',
        'Sanasar lake',
        'Panoramic viewpoints'
      ],
      image: '/destinations/jammu/patnitop/1.jpg',
      category: 'adventure'
    },
    {
      name: 'Mansar Lake',
      description: 'A sacred lake surrounded by forest-covered hills, Mansar is believed to be formed from Lord Shiva\'s tear. The lake features ancient temples, wildlife sanctuary, and a circumambulatory path used by pilgrims. Boating and birdwatching are popular activities.',
      highlights: [
        'Sacred pilgrimage site',
        'Boating facilities',
        'Wildlife sanctuary',
        'Ancient temples',
        'Natural beauty'
      ],
      image: '/destinations/jammu/mansar_lake/2.jpg',
      category: 'nature'
    },
    {
      name: 'Warwan Valley',
      description: 'One of Kashmir\'s most remote and pristine valleys, Warwan offers a rare glimpse into traditional village life surrounded by towering mountains, lush meadows, and crystal-clear streams. This untouched paradise is accessible only during summer months and rewards adventurous travelers with breathtaking landscapes and warm local hospitality.',
      highlights: [
        'Remote pristine valley',
        'Traditional village life',
        'Alpine meadows and streams',
        'Off-beat adventure destination',
        'Untouched natural beauty'
      ],
      image: '/destinations/jammu/warwan_valley/01.jpg',
      category: 'adventure'
    },
    {
      name: 'Daksum',
      description: 'A charming forest retreat in Anantnag district, Daksum sits along the flowing Brengi River surrounded by towering deodar and pine trees. This peaceful destination is perfect for nature walks, riverside picnics, and experiencing the serenity of dense forests. It serves as the gateway to Sinthan Pass.',
      highlights: [
        'Forest retreat setting',
        'Brengi River views',
        'Dense deodar forests',
        'Gateway to Sinthan Pass',
        'Perfect for nature lovers'
      ],
      image: '/destinations/jammu/daksum/1.jpg',
      category: 'nature'
    },
    {
      name: 'Sinthan Top',
      description: 'At 12,500 feet elevation, Sinthan Top is one of Kashmir\'s highest motorable mountain passes connecting the Kashmir Valley with Kishtwar. This spectacular pass features dramatic hairpin bends, 360-degree panoramic views of snow-capped peaks, and snow patches even in summer, making it an adventure driver\'s paradise.',
      highlights: [
        'High-altitude mountain pass',
        '360-degree panoramic views',
        'Dramatic hairpin bends',
        'Snow in summer',
        'Adventure driving experience'
      ],
      image: '/destinations/jammu/sinthan_top/1.jpg',
      category: 'adventure'
    },
    {
      name: 'Margan Top',
      description: 'A stunning alpine pass located between Sinthan Pass and Warwan Valley, Margan Top features lush meadows, cascading waterfalls, and spectacular mountain vistas. This lesser-known gem offers pristine wilderness perfect for photography, meadow camping, and experiencing the raw beauty of the Himalayas.',
      highlights: [
        'Alpine pass with meadows',
        'Cascading waterfalls',
        'Spectacular mountain views',
        'Perfect for photography',
        'Remote camping destination'
      ],
      image: '/destinations/jammu/margan_top/1.jpg',
      category: 'adventure'
    },
    // {
    //   name: 'Peer Kho Cave Temple',
    //   description: 'An ancient cave shrine dedicated to Lord Shiva, Peer Kho features a natural spring and is believed to be 600 million years old. The 150-meter-long cave has narrow passages and remains cool year-round, attracting pilgrims and adventure seekers.',
    //   highlights: [
    //     'Ancient cave temple',
    //     'Natural spring',
    //     'Religious significance',
    //     'Underground passages',
    //     'Archaeological interest'
    //   ],
    //   image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=600&fit=crop',
    //   category: 'spiritual'
    // },
    // {
    //   name: 'Ranbireshwar Temple',
    //   description: 'Built by Maharaja Ranbir Singh in 1883, this temple complex houses 12 Shiva lingams made of crystal and black marble, including India\'s tallest Shiva lingam at 7.5 feet. The temple\'s shikhara-style architecture attracts devotees and architecture enthusiasts.',
    //   highlights: [
    //     'Crystal Shiva lingams',
    //     'Tallest lingam in India',
    //     'Shikhara architecture',
    //     'Central location',
    //     'Daily rituals'
    //   ],
    //   image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop',
    //   category: 'spiritual'
    // }
  ]
};

export const LEH_LADAKH_DESTINATION: RegionalDestination = {
  id: 'leh-ladakh',
  name: 'Leh-Ladakh',
  tagline: 'Land of High Passes',
  description: 'Leh-Ladakh, the "Land of High Passes," is a realm of stark mountain beauty, ancient Buddhist monasteries, crystal-clear lakes, and rich Tibetan culture. From the dramatic landscapes of Nubra Valley to the serene blue waters of Pangong Lake, Ladakh offers an adventure into one of the world\'s most spectacular high-altitude deserts.',
  hero_image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&h=600&fit=crop',
  disabled: true,
  disabledReason: 'Coming Soon',
  places: [
    {
      name: 'Pangong Tso Lake',
      description: 'Stretching 134km from India to Tibet at 4,350m altitude, Pangong Lake is famous for its ever-changing shades of blue. Featured in the movie "3 Idiots," this brackish water lake offers stunning reflections of surrounding mountains and is a photographer\'s paradise.',
      highlights: [
        'Color-changing waters',
        'Indo-Tibet border lake',
        '134km length',
        'Wildlife habitat',
        'Stunning photography'
      ],
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop',
      category: 'nature'
    },
    {
      name: 'Nubra Valley',
      description: 'Known as the "Valley of Flowers," Nubra lies at the confluence of Shyok and Nubra rivers at 3,000m altitude. Accessible via the world\'s highest motorable road (Khardung La at 5,359m), it features sand dunes, double-humped Bactrian camels, and ancient monasteries.',
      highlights: [
        'Khardung La Pass',
        'Bactrian camel rides',
        'Sand dunes at Hunder',
        'Diskit Monastery',
        'Shyok River'
      ],
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c7?w=800&h=600&fit=crop',
      category: 'nature'
    },
    {
      name: 'Tso Moriri Lake',
      description: 'At 4,522m altitude, Tso Moriri is one of the highest lakes in India and a Ramsar Wetland Reserve. This pristine mountain lake in the Changthang Plateau offers tranquility, wildlife spotting including black-necked cranes, and views of snow-capped peaks.',
      highlights: [
        'Wetland sanctuary',
        'Black-necked cranes',
        'High-altitude lake',
        'Korzok village',
        'Nomadic culture'
      ],
      image: 'https://images.unsplash.com/photo-1611416517780-eff3a13b0359?w=800&h=600&fit=crop',
      category: 'nature'
    },
    {
      name: 'Hemis Monastery',
      description: 'The largest and wealthiest monastery in Ladakh, Hemis was founded in 1630. Located 45km from Leh, it houses ancient thangkas, stupas, and a massive statue of Buddha. The annual Hemis Festival features spectacular masked dances and vibrant celebrations.',
      highlights: [
        'Largest monastery',
        'Hemis Festival',
        'Ancient artifacts',
        'Masked dances',
        'Drukpa lineage'
      ],
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=600&fit=crop',
      category: 'spiritual'
    },
    {
      name: 'Thiksey Monastery',
      description: 'Resembling the Potala Palace of Lhasa, Thiksey Monastery is a 12-storey complex perched on a hilltop 19km from Leh. Home to the stunning 49-feet Maitreya Buddha statue, this Gelugpa monastery offers panoramic views of the Indus Valley.',
      highlights: [
        'Potala Palace architecture',
        'Maitreya Buddha statue',
        'Morning prayers',
        'Valley views',
        'Museum collection'
      ],
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop',
      category: 'spiritual'
    },
    {
      name: 'Leh Palace',
      description: 'Built in the 17th century by King Sengge Namgyal, Leh Palace is a nine-storey royal residence overlooking Leh town. Modeled after Lhasa\'s Potala Palace, this architectural marvel offers insights into Ladakhi royalty and panoramic views of the city and surrounding mountains.',
      highlights: [
        'Nine-storey palace',
        'Royal residence',
        'Museum exhibits',
        'Panoramic views',
        'Architectural heritage'
      ],
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c7?w=800&h=600&fit=crop',
      category: 'heritage'
    },
    {
      name: 'Shanti Stupa',
      description: 'Built in 1991 by Japanese Buddhist monks, Shanti Stupa is a white-domed peace pagoda offering 360-degree views of Leh and surrounding mountains. The stupa houses relics of Buddha and features beautiful murals depicting his life.',
      highlights: [
        'Peace pagoda',
        '360-degree views',
        'Buddha relics',
        'Sunrise/sunset point',
        'Meditative atmosphere'
      ],
      image: 'https://images.unsplash.com/photo-1611416517780-eff3a13b0359?w=800&h=600&fit=crop',
      category: 'spiritual'
    },
    {
      name: 'Magnetic Hill',
      description: 'Located 30km from Leh, Magnetic Hill is a gravity-defying optical illusion where vehicles appear to move uphill on their own when left in neutral. This mysterious phenomenon, along with surrounding views of the Himalayas, makes it a popular stop.',
      highlights: [
        'Optical illusion',
        'Gravity-defying spot',
        'Scenic location',
        'Photography point',
        'Mystery phenomenon'
      ],
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop',
      category: 'nature'
    },
    {
      name: 'Zanskar Valley',
      description: 'One of the most isolated valleys in the Himalayas, Zanskar is accessible via the dramatic Pensi La Pass. Known for the frozen Chadar Trek in winter, ancient monasteries like Karsha and Phugtal, and pristine landscapes, it offers authentic Ladakhi culture.',
      highlights: [
        'Chadar Trek (winter)',
        'Ancient monasteries',
        'Remote location',
        'River rafting',
        'Traditional culture'
      ],
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c7?w=800&h=600&fit=crop',
      category: 'adventure'
    },
    {
      name: 'Alchi Monastery',
      description: 'Dating to the 11th century, Alchi is one of Ladakh\'s oldest monasteries and a UNESCO World Heritage site. Unlike typical cliff-perched monasteries, Alchi sits on flat ground and houses exquisite Indo-Himalayan artwork, ancient murals, and wooden sculptures.',
      highlights: [
        '11th century heritage',
        'UNESCO World Heritage',
        'Unique flat location',
        'Ancient murals',
        'Indo-Himalayan art'
      ],
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=600&fit=crop',
      category: 'heritage'
    },
    {
      name: 'Khardung La Pass',
      description: 'At 5,359m (17,582 ft), Khardung La is one of the world\'s highest motorable passes. The gateway to Nubra Valley, it offers breathtaking panoramic views of snow-covered peaks and valleys. The pass is open from May to November.',
      highlights: [
        'World\'s highest motorable pass',
        'Gateway to Nubra',
        'Panoramic views',
        'Adventure destination',
        'Strategic location'
      ],
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop',
      category: 'adventure'
    },
    {
      name: 'Lamayuru Monastery',
      description: 'Known as the "Moonland of Ladakh," Lamayuru is one of the oldest and largest monasteries dating to the 10th century. Surrounded by lunar-like rock formations, it houses 150 monks and features ancient frescoes, manuscripts, and thangkas.',
      highlights: [
        'Moonland landscape',
        '10th century monastery',
        'Lunar rock formations',
        'Ancient manuscripts',
        'Spectacular views'
      ],
      image: 'https://images.unsplash.com/photo-1611416517780-eff3a13b0359?w=800&h=600&fit=crop',
      category: 'spiritual'
    }
  ]
};

export const ALL_REGIONAL_DESTINATIONS = [
  KASHMIR_DESTINATION,
  JAMMU_DESTINATION,
  LEH_LADAKH_DESTINATION
];
