'use client';

import React, { createContext, useContext, useReducer, useCallback, useEffect } from 'react';
import {
  CustomItinerary,
  WizardStep,
  WIZARD_STEPS,
  SelectedDestination,
  TripDates,
  SelectedActivity,
  AccommodationPreference,
  TravelersInfo,
  SelectedAddOn,
  PriceEstimate,
  GeneratedDay,
  DEFAULT_TRAVELERS,
  DEFAULT_ACCOMMODATION,
  DEFAULT_DATES,
  DEFAULT_PRICE_ESTIMATE,
} from '../types/itinerary';

// Storage key for localStorage persistence
const STORAGE_KEY = 'journeu_itinerary_draft';
const STORAGE_EXPIRY_DAYS = 7;

// State interface
interface ItineraryBuilderState {
  isDrawerOpen: boolean;
  currentStep: WizardStep;
  completedSteps: WizardStep[];
  itinerary: Partial<CustomItinerary>;
  isSubmitting: boolean;
  isSuccess: boolean;
  referenceId: string | null;
}

// Action types
type Action =
  | { type: 'OPEN_DRAWER' }
  | { type: 'CLOSE_DRAWER' }
  | { type: 'SET_STEP'; step: WizardStep }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'COMPLETE_STEP'; step: WizardStep }
  | { type: 'UPDATE_DESTINATIONS'; destinations: SelectedDestination[] }
  | { type: 'UPDATE_DATES'; dates: TripDates }
  | { type: 'UPDATE_ACTIVITIES'; activities: SelectedActivity[] }
  | { type: 'UPDATE_ACCOMMODATION'; accommodation: AccommodationPreference }
  | { type: 'UPDATE_TRAVELERS'; travelers: TravelersInfo }
  | { type: 'UPDATE_ADDONS'; addOns: SelectedAddOn[] }
  | { type: 'UPDATE_PRICE'; price: PriceEstimate }
  | { type: 'UPDATE_GENERATED_ITINERARY'; itinerary: GeneratedDay[] }
  | { type: 'SET_SUBMITTING'; isSubmitting: boolean }
  | { type: 'SET_SUCCESS'; referenceId: string }
  | { type: 'RESET' }
  | { type: 'LOAD_SAVED'; state: Partial<ItineraryBuilderState> };

// Initial state
const initialState: ItineraryBuilderState = {
  isDrawerOpen: false,
  currentStep: 'destinations',
  completedSteps: [],
  itinerary: {
    destinations: [],
    dates: DEFAULT_DATES,
    activities: [],
    accommodation: DEFAULT_ACCOMMODATION,
    travelers: DEFAULT_TRAVELERS,
    addOns: [],
    estimatedPrice: DEFAULT_PRICE_ESTIMATE,
    generatedItinerary: [],
  },
  isSubmitting: false,
  isSuccess: false,
  referenceId: null,
};

// Reducer
function reducer(state: ItineraryBuilderState, action: Action): ItineraryBuilderState {
  switch (action.type) {
    case 'OPEN_DRAWER':
      return { ...state, isDrawerOpen: true };

    case 'CLOSE_DRAWER':
      return { ...state, isDrawerOpen: false };

    case 'SET_STEP':
      return { ...state, currentStep: action.step };

    case 'NEXT_STEP': {
      console.log('[Reducer] NEXT_STEP action received');
      console.log('[Reducer] Current step:', state.currentStep);
      const currentIndex = WIZARD_STEPS.indexOf(state.currentStep);
      console.log('[Reducer] Current index:', currentIndex, 'WIZARD_STEPS.length:', WIZARD_STEPS.length);
      if (currentIndex < WIZARD_STEPS.length - 1) {
        const nextStep = WIZARD_STEPS[currentIndex + 1];
        console.log('[Reducer] Moving to next step:', nextStep);
        const completedSteps = state.completedSteps.includes(state.currentStep)
          ? state.completedSteps
          : [...state.completedSteps, state.currentStep];
        return { ...state, currentStep: nextStep, completedSteps };
      }
      console.log('[Reducer] Cannot go to next step, already at last step');
      return state;
    }

    case 'PREV_STEP': {
      const currentIndex = WIZARD_STEPS.indexOf(state.currentStep);
      if (currentIndex > 0) {
        return { ...state, currentStep: WIZARD_STEPS[currentIndex - 1] };
      }
      return state;
    }

    case 'COMPLETE_STEP':
      if (!state.completedSteps.includes(action.step)) {
        return { ...state, completedSteps: [...state.completedSteps, action.step] };
      }
      return state;

    case 'UPDATE_DESTINATIONS':
      return {
        ...state,
        itinerary: { ...state.itinerary, destinations: action.destinations },
      };

    case 'UPDATE_DATES':
      return {
        ...state,
        itinerary: { ...state.itinerary, dates: action.dates },
      };

    case 'UPDATE_ACTIVITIES':
      return {
        ...state,
        itinerary: { ...state.itinerary, activities: action.activities },
      };

    case 'UPDATE_ACCOMMODATION':
      return {
        ...state,
        itinerary: { ...state.itinerary, accommodation: action.accommodation },
      };

    case 'UPDATE_TRAVELERS':
      return {
        ...state,
        itinerary: { ...state.itinerary, travelers: action.travelers },
      };

    case 'UPDATE_ADDONS':
      return {
        ...state,
        itinerary: { ...state.itinerary, addOns: action.addOns },
      };

    case 'UPDATE_PRICE':
      return {
        ...state,
        itinerary: { ...state.itinerary, estimatedPrice: action.price },
      };

    case 'UPDATE_GENERATED_ITINERARY':
      return {
        ...state,
        itinerary: { ...state.itinerary, generatedItinerary: action.itinerary },
      };

    case 'SET_SUBMITTING':
      return { ...state, isSubmitting: action.isSubmitting };

    case 'SET_SUCCESS':
      return { ...state, isSuccess: true, referenceId: action.referenceId };

    case 'RESET':
      return { ...initialState, isDrawerOpen: state.isDrawerOpen };

    case 'LOAD_SAVED':
      return { ...state, ...action.state };

    default:
      return state;
  }
}

// Context type
interface ItineraryBuilderContextType {
  // State
  state: ItineraryBuilderState;

  // Drawer controls
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;

  // Navigation
  goToStep: (step: WizardStep) => void;
  nextStep: () => void;
  prevStep: () => void;
  canGoNext: () => boolean;
  canGoPrev: () => boolean;

  // Data updates
  updateDestinations: (destinations: SelectedDestination[]) => void;
  updateDates: (dates: TripDates) => void;
  updateActivities: (activities: SelectedActivity[]) => void;
  updateAccommodation: (accommodation: AccommodationPreference) => void;
  updateTravelers: (travelers: TravelersInfo) => void;
  updateAddOns: (addOns: SelectedAddOn[]) => void;

  // Computed values
  getTotalDays: () => number;

  // Actions
  resetBuilder: () => void;
  submitInquiry: (contactInfo: {
    name: string;
    email: string;
    phone: string;
    preferredContactMethod: 'email' | 'phone' | 'whatsapp';
  }, additionalNotes?: string) => Promise<void>;
}

// Create context
const ItineraryBuilderContext = createContext<ItineraryBuilderContextType | null>(null);

// Provider component
export function ItineraryBuilderProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load saved state from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const savedAt = new Date(parsed.savedAt);
        const now = new Date();
        const daysDiff = (now.getTime() - savedAt.getTime()) / (1000 * 60 * 60 * 24);

        if (daysDiff <= STORAGE_EXPIRY_DAYS) {
          dispatch({
            type: 'LOAD_SAVED',
            state: {
              currentStep: parsed.currentStep || 'destinations',
              completedSteps: parsed.completedSteps || [],
              itinerary: parsed.itinerary || initialState.itinerary,
            },
          });
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch {
      // Ignore parsing errors
    }
  }, []);

  // Save to localStorage whenever itinerary changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (state.isSuccess) return; // Don't save after successful submission

    const toSave = {
      currentStep: state.currentStep,
      completedSteps: state.completedSteps,
      itinerary: state.itinerary,
      savedAt: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }, [state.currentStep, state.completedSteps, state.itinerary, state.isSuccess]);

  // Drawer controls
  const openDrawer = useCallback(() => dispatch({ type: 'OPEN_DRAWER' }), []);
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), []);
  const toggleDrawer = useCallback(() => {
    if (state.isDrawerOpen) {
      dispatch({ type: 'CLOSE_DRAWER' });
    } else {
      dispatch({ type: 'OPEN_DRAWER' });
    }
  }, [state.isDrawerOpen]);

  // Navigation
  const goToStep = useCallback((step: WizardStep) => {
    dispatch({ type: 'SET_STEP', step });
  }, []);

  const nextStep = useCallback(() => {
    console.log('[Context] nextStep called, current step:', state.currentStep);
    console.log('[Context] WIZARD_STEPS:', WIZARD_STEPS);
    const currentIndex = WIZARD_STEPS.indexOf(state.currentStep);
    console.log('[Context] Current index:', currentIndex, 'Next would be:', WIZARD_STEPS[currentIndex + 1]);
    dispatch({ type: 'NEXT_STEP' });
  }, [state.currentStep]);

  const prevStep = useCallback(() => {
    dispatch({ type: 'PREV_STEP' });
  }, []);

  const canGoNext = useCallback(() => {
    const currentIndex = WIZARD_STEPS.indexOf(state.currentStep);
    return currentIndex < WIZARD_STEPS.length - 1;
  }, [state.currentStep]);

  const canGoPrev = useCallback(() => {
    const currentIndex = WIZARD_STEPS.indexOf(state.currentStep);
    return currentIndex > 0;
  }, [state.currentStep]);

  // Data updates
  const updateDestinations = useCallback((destinations: SelectedDestination[]) => {
    dispatch({ type: 'UPDATE_DESTINATIONS', destinations });
  }, []);

  const updateDates = useCallback((dates: TripDates) => {
    dispatch({ type: 'UPDATE_DATES', dates });
  }, []);

  const updateActivities = useCallback((activities: SelectedActivity[]) => {
    dispatch({ type: 'UPDATE_ACTIVITIES', activities });
  }, []);

  const updateAccommodation = useCallback((accommodation: AccommodationPreference) => {
    dispatch({ type: 'UPDATE_ACCOMMODATION', accommodation });
  }, []);

  const updateTravelers = useCallback((travelers: TravelersInfo) => {
    dispatch({ type: 'UPDATE_TRAVELERS', travelers });
  }, []);

  const updateAddOns = useCallback((addOns: SelectedAddOn[]) => {
    dispatch({ type: 'UPDATE_ADDONS', addOns });
  }, []);

  // Computed values
  const getTotalDays = useCallback(() => {
    return state.itinerary.destinations?.reduce(
      (total, dest) => total + dest.daysAllocated,
      0
    ) || 0;
  }, [state.itinerary.destinations]);

  // Actions
  const resetBuilder = useCallback(() => {
    dispatch({ type: 'RESET' });
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const submitInquiry = useCallback(async (
    contactInfo: {
      name: string;
      email: string;
      phone: string;
      preferredContactMethod: 'email' | 'phone' | 'whatsapp';
    },
    additionalNotes?: string
  ) => {
    dispatch({ type: 'SET_SUBMITTING', isSubmitting: true });

    // Compute totalDays from destinations
    const totalDays = state.itinerary.destinations?.reduce(
      (total, dest) => total + dest.daysAllocated,
      0
    ) || 0;

    // Prepare itinerary with computed values
    const preparedItinerary = {
      ...state.itinerary,
      dates: {
        ...state.itinerary.dates,
        totalDays,
      },
    };

    try {
      const response = await fetch('/api/itinerary-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contactInfo,
          itinerary: preparedItinerary,
          additionalNotes,
          marketingConsent: true,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit inquiry');
      }

      dispatch({ type: 'SET_SUCCESS', referenceId: result.referenceId });
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      dispatch({ type: 'SET_SUBMITTING', isSubmitting: false });
      throw error;
    }
  }, [state.itinerary]);

  const value: ItineraryBuilderContextType = {
    state,
    openDrawer,
    closeDrawer,
    toggleDrawer,
    goToStep,
    nextStep,
    prevStep,
    canGoNext,
    canGoPrev,
    updateDestinations,
    updateDates,
    updateActivities,
    updateAccommodation,
    updateTravelers,
    updateAddOns,
    getTotalDays,
    resetBuilder,
    submitInquiry,
  };

  return (
    <ItineraryBuilderContext.Provider value={value}>
      {children}
    </ItineraryBuilderContext.Provider>
  );
}

// Hook to use the context
export function useItineraryBuilder() {
  const context = useContext(ItineraryBuilderContext);
  if (!context) {
    throw new Error('useItineraryBuilder must be used within ItineraryBuilderProvider');
  }
  return context;
}
