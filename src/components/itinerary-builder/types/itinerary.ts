// Core destination selection
export interface SelectedDestination {
  id: string; // 'kashmir' | 'jammu' | 'leh-ladakh'
  name: string;
  tagline: string;
  heroImage: string;
  daysAllocated: number;
  order: number;
}

// Activity selection
export interface SelectedActivity {
  destinationId: string;
  activityId: string;
  name: string;
  category: 'nature' | 'heritage' | 'adventure' | 'spiritual' | 'cultural';
  image: string;
}

// Accommodation preference
export interface AccommodationPreference {
  tier?: '3-star' | '4-star' | '5-star';
  specialTypes: ('houseboat' | 'resort' | 'camp' | 'boutique')[];
}

// Traveler information
export interface TravelersInfo {
  adults: number;
  children: number;
  childrenAges?: number[];
  specialRequirements: {
    dietary: ('vegetarian' | 'vegan' | 'jain' | 'halal' | 'none')[];
    accessibility: boolean;
    accessibilityNotes?: string;
    photographyFocus: boolean;
  };
  specialOccasion?: {
    type: 'honeymoon' | 'anniversary' | 'birthday' | 'celebration' | 'none';
    notes?: string;
  };
}

// Add-on selection
export interface SelectedAddOn {
  id: string;
  name: string;
  price: number;
  priceType: 'per-trip' | 'per-person' | 'per-day';
  description: string;
}

// Date selection
export interface TripDates {
  type: 'flexible' | 'fixed';
  startDate?: Date;
  endDate?: Date;
  flexibleMonth?: string;
  totalDays: number;
}

// Generated day-by-day itinerary
export interface GeneratedDay {
  day: number;
  date?: Date;
  destination: string;
  location: string;
  title: string;
  activities: string[];
  highlights: string[];
  meals: ('Breakfast' | 'Lunch' | 'Dinner')[];
  accommodation: string;
  accommodationTier?: '3-star' | '4-star' | '5-star';
}

// Price breakdown
export interface PriceEstimate {
  basePrice: number;
  accommodationCost: number;
  activitiesCost: number;
  transportCost: number;
  addOnsCost: number;
  totalPerPerson: number;
  grandTotal: number;
  currency: 'INR' | 'USD';
  note: string;
}

// Complete itinerary state
export interface CustomItinerary {
  id?: string;
  createdAt?: Date;
  destinations: SelectedDestination[];
  dates: TripDates;
  activities: SelectedActivity[];
  accommodation: AccommodationPreference;
  travelers: TravelersInfo;
  addOns: SelectedAddOn[];
  estimatedPrice: PriceEstimate;
  generatedItinerary: GeneratedDay[];
}

// Wizard step types
export type WizardStep =
  | 'destinations'
  | 'dates'
  | 'travelers'
  | 'activities'
  | 'accommodation'
  | 'addons'
  | 'review'
  | 'submit';

export const WIZARD_STEPS: WizardStep[] = [
  'destinations',
  'dates',
  'travelers',
  'activities',
  'accommodation',
  'addons',
  'review',
  'submit',
];

export const STEP_LABELS: Record<WizardStep, string> = {
  destinations: 'Destinations',
  dates: 'Dates',
  travelers: 'Travelers',
  activities: 'Activities',
  accommodation: 'Stay',
  addons: 'Extras',
  review: 'Review',
  submit: 'Submit',
};

// Wizard state
export interface WizardState {
  currentStep: WizardStep;
  completedSteps: WizardStep[];
  itinerary: Partial<CustomItinerary>;
  isValid: boolean;
  validationErrors: Record<string, string>;
}

// API submission payload
export interface ItineraryInquiryPayload {
  contactInfo: {
    name: string;
    email: string;
    phone: string;
    preferredContactMethod: 'email' | 'phone' | 'whatsapp';
  };
  itinerary: CustomItinerary;
  additionalNotes?: string;
  marketingConsent: boolean;
}

// Default values
export const DEFAULT_TRAVELERS: TravelersInfo = {
  adults: 2,
  children: 0,
  specialRequirements: {
    dietary: [],
    accessibility: false,
    photographyFocus: false,
  },
};

export const DEFAULT_ACCOMMODATION: AccommodationPreference = {
  tier: undefined,
  specialTypes: [],
};

export const DEFAULT_DATES: TripDates = {
  type: 'flexible',
  totalDays: 0,
};

export const DEFAULT_PRICE_ESTIMATE: PriceEstimate = {
  basePrice: 0,
  accommodationCost: 0,
  activitiesCost: 0,
  transportCost: 0,
  addOnsCost: 0,
  totalPerPerson: 0,
  grandTotal: 0,
  currency: 'INR',
  note: 'Estimated price - final quote on request',
};
