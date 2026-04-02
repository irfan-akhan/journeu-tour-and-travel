// ─── Wizard step definitions ──────────────────────────────────────────────────

export type WizardStep =
  | 'duration'
  | 'pickup'
  | 'places'
  | 'stays'
  | 'inclusions'
  | 'addons'
  | 'review';

export const WIZARD_STEPS: WizardStep[] = [
  'duration',
  'pickup',
  'places',
  'stays',
  'inclusions',
  'addons',
  'review',
];

export const STEP_LABELS: Record<WizardStep, string> = {
  duration: 'Duration',
  pickup: 'Pickup',
  places: 'Places',
  stays: 'Stays',
  inclusions: 'Inclusions',
  addons: 'Add-ons',
  review: 'Review',
};

// ─── Duration ─────────────────────────────────────────────────────────────────

export interface DurationOption {
  label: string;
  days: number;
  nights: number;
}

export const DURATION_OPTIONS: DurationOption[] = [
  { label: '3 Days / 2 Nights', days: 3, nights: 2 },
  { label: '4 Days / 3 Nights', days: 4, nights: 3 },
  { label: '5 Days / 4 Nights', days: 5, nights: 4 },
  { label: '6 Days / 5 Nights', days: 6, nights: 5 },
  { label: '7 Days / 6 Nights', days: 7, nights: 6 },
  { label: '8 Days / 7 Nights', days: 8, nights: 7 },
  { label: '9 Days / 8 Nights', days: 9, nights: 8 },
  { label: '10 Days / 9 Nights', days: 10, nights: 9 },
  { label: '10+ Days / 9+ Nights', days: 11, nights: 10 },
];

// ─── Pickup / Drop ────────────────────────────────────────────────────────────

export const PICKUP_LOCATIONS = [
  'Srinagar Airport',
  'Jammu Railway Station',
  'Srinagar Railway Station',
  'Katra Railway Station',
  'Jammu Airport',
] as const;

// ─── Places to visit ──────────────────────────────────────────────────────────

export interface PlaceGroup {
  region: string;
  places: string[];
}

export const PLACE_GROUPS: PlaceGroup[] = [
  {
    region: 'Kashmir',
    places: [
      'Srinagar',
      'Gulmarg',
      'Pahalgam',
      'Sonamarg',
      'Doodhpathri',
      'Gurez',
      'Keran Valley',
      'Tosa Maidan',
      'Wular Lake',
      'Manasbal Lake',
      'Astan Marg',
    ],
  },
  {
    region: 'Jammu',
    places: [
      'Vaishno Devi',
      'Patnitop',
      'Mansar Lake',
      'Bahu Fort',
      'Raghunath Temple',
      'Daksum',
      'Sinthan Top',
      'Margan Top',
      'Warwan Valley',
    ],
  },
  {
    region: 'Leh-Ladakh',
    places: [
      'Leh City',
      'Pangong Tso Lake',
      'Nubra Valley',
      'Tso Moriri Lake',
      'Hemis Monastery',
      'Thiksey Monastery',
      'Magnetic Hill',
      'Khardung La',
      'Shanti Stupa',
    ],
  },
];

// ─── Night stay locations ─────────────────────────────────────────────────────

export interface StayGroup {
  region: string;
  locations: string[];
}

export const STAY_GROUPS: StayGroup[] = [
  {
    region: 'Kashmir',
    locations: [
      'Srinagar',
      'Gulmarg',
      'Pahalgam',
      'Sonamarg',
      'Gurez',
      'Keran Valley',
      'Doodhpathri',
      'Tosa Maidan',
      'Astan Marg',
    ],
  },
  {
    region: 'Jammu',
    locations: [
      'Jammu City',
      'Katra',
      'Patnitop',
      'Mansar Lake',
      'Daksum',
    ],
  },
  {
    region: 'Leh-Ladakh',
    locations: [
      'Leh City',
      'Nubra Valley',
      'Pangong Tso',
      'Tso Moriri',
    ],
  },
];

// ─── Inclusions ───────────────────────────────────────────────────────────────

export const INCLUSIONS_LIST = [
  'Shikara ride in Srinagar',
  'Gondola tickets in Gulmarg',
  'ATV ride in Gulmarg or Pahalgam',
  'Daily breakfast',
  'Lunch and dinner',
  'Union cab for Gulmarg sightseeing',
  'Union cab for Pahalgam sightseeing',
  'Union cab for Sonamarg sightseeing',
  'Private vehicle for full trip',
] as const;

// ─── Add-ons ──────────────────────────────────────────────────────────────────

export const ADDONS_LIST = [
  'Professional photographer',
  'Cinematic videographer',
  'Experienced tour guide for full trip',
  'Cake decoration for special occasions',
  'Flower bed decoration',
  'Candle light dinner arrangement',
] as const;

// ─── Trip state ───────────────────────────────────────────────────────────────

export interface TripState {
  duration: DurationOption | null;
  pickup: string;
  drop: string;
  places: string[];
  stays: string[];
  inclusions: string[];
  addons: string[];
  travelers: {
    adults: number;
    children: number;
  };
}

export const DEFAULT_TRIP_STATE: TripState = {
  duration: null,
  pickup: '',
  drop: '',
  places: [],
  stays: [],
  inclusions: [],
  addons: [],
  travelers: {
    adults: 2,
    children: 0,
  },
};

// ─── Legacy aliases kept to avoid breaking unchanged files ────────────────────
// (ItineraryBuilderTrigger uses destinations count — handled in context)

export interface SelectedDestination {
  id: string;
  name: string;
  tagline: string;
  heroImage: string;
  daysAllocated: number;
  order: number;
}

