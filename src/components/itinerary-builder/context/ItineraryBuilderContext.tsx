'use client';

import React, { createContext, useContext, useReducer, useCallback, useEffect } from 'react';
import {
  WizardStep,
  WIZARD_STEPS,
  TripState,
  DEFAULT_TRIP_STATE,
  DurationOption,
} from '../types/itinerary';

const STORAGE_KEY = 'journeu_itinerary_draft_v2';
const STORAGE_EXPIRY_DAYS = 7;

// ─── State ────────────────────────────────────────────────────────────────────

interface ItineraryBuilderState {
  isDrawerOpen: boolean;
  currentStep: WizardStep;
  completedSteps: WizardStep[];
  itinerary: TripState;
  isSubmitting: boolean;
  isSuccess: boolean;
  referenceId: string | null;
}

// ─── Actions ──────────────────────────────────────────────────────────────────

type Action =
  | { type: 'OPEN_DRAWER' }
  | { type: 'CLOSE_DRAWER' }
  | { type: 'SET_STEP'; step: WizardStep }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'UPDATE_DURATION'; duration: DurationOption }
  | { type: 'UPDATE_PICKUP'; pickup: string }
  | { type: 'UPDATE_DROP'; drop: string }
  | { type: 'UPDATE_PLACES'; places: string[] }
  | { type: 'UPDATE_STAYS'; stays: string[] }
  | { type: 'UPDATE_INCLUSIONS'; inclusions: string[] }
  | { type: 'UPDATE_ADDONS'; addons: string[] }
  | { type: 'UPDATE_TRAVELERS'; travelers: TripState['travelers'] }
  | { type: 'SET_SUBMITTING'; isSubmitting: boolean }
  | { type: 'SET_SUCCESS'; referenceId: string }
  | { type: 'RESET' }
  | { type: 'LOAD_SAVED'; state: Partial<ItineraryBuilderState> };

// ─── Initial state ────────────────────────────────────────────────────────────

const initialState: ItineraryBuilderState = {
  isDrawerOpen: false,
  currentStep: 'duration',
  completedSteps: [],
  itinerary: DEFAULT_TRIP_STATE,
  isSubmitting: false,
  isSuccess: false,
  referenceId: null,
};

// ─── Reducer ──────────────────────────────────────────────────────────────────

function reducer(state: ItineraryBuilderState, action: Action): ItineraryBuilderState {
  switch (action.type) {
    case 'OPEN_DRAWER':
      return { ...state, isDrawerOpen: true };

    case 'CLOSE_DRAWER':
      return { ...state, isDrawerOpen: false };

    case 'SET_STEP':
      return { ...state, currentStep: action.step };

    case 'NEXT_STEP': {
      const currentIndex = WIZARD_STEPS.indexOf(state.currentStep);
      if (currentIndex < WIZARD_STEPS.length - 1) {
        const nextStep = WIZARD_STEPS[currentIndex + 1];
        const completedSteps = state.completedSteps.includes(state.currentStep)
          ? state.completedSteps
          : [...state.completedSteps, state.currentStep];
        return { ...state, currentStep: nextStep, completedSteps };
      }
      return state;
    }

    case 'PREV_STEP': {
      const currentIndex = WIZARD_STEPS.indexOf(state.currentStep);
      if (currentIndex > 0) {
        return { ...state, currentStep: WIZARD_STEPS[currentIndex - 1] };
      }
      return state;
    }

    case 'UPDATE_DURATION':
      return { ...state, itinerary: { ...state.itinerary, duration: action.duration } };

    case 'UPDATE_PICKUP':
      return { ...state, itinerary: { ...state.itinerary, pickup: action.pickup } };

    case 'UPDATE_DROP':
      return { ...state, itinerary: { ...state.itinerary, drop: action.drop } };

    case 'UPDATE_PLACES':
      return { ...state, itinerary: { ...state.itinerary, places: action.places } };

    case 'UPDATE_STAYS':
      return { ...state, itinerary: { ...state.itinerary, stays: action.stays } };

    case 'UPDATE_INCLUSIONS':
      return { ...state, itinerary: { ...state.itinerary, inclusions: action.inclusions } };

    case 'UPDATE_ADDONS':
      return { ...state, itinerary: { ...state.itinerary, addons: action.addons } };

    case 'UPDATE_TRAVELERS':
      return { ...state, itinerary: { ...state.itinerary, travelers: action.travelers } };

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

// ─── Context type ─────────────────────────────────────────────────────────────

interface ItineraryBuilderContextType {
  state: ItineraryBuilderState;

  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;

  goToStep: (step: WizardStep) => void;
  nextStep: () => void;
  prevStep: () => void;
  canGoNext: () => boolean;
  canGoPrev: () => boolean;

  updateDuration: (duration: DurationOption) => void;
  updatePickup: (pickup: string) => void;
  updateDrop: (drop: string) => void;
  updatePlaces: (places: string[]) => void;
  updateStays: (stays: string[]) => void;
  updateInclusions: (inclusions: string[]) => void;
  updateAddons: (addons: string[]) => void;
  updateTravelers: (travelers: TripState['travelers']) => void;

  resetBuilder: () => void;
  submitInquiry: (contactInfo: {
    name: string;
    email: string;
    phone: string;
    preferredContactMethod: 'email' | 'phone' | 'whatsapp';
  }, additionalNotes?: string) => Promise<void>;
}

const ItineraryBuilderContext = createContext<ItineraryBuilderContextType | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function ItineraryBuilderProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load saved draft on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const daysDiff = (Date.now() - new Date(parsed.savedAt).getTime()) / 86_400_000;
        if (daysDiff <= STORAGE_EXPIRY_DAYS) {
          dispatch({
            type: 'LOAD_SAVED',
            state: {
              currentStep: parsed.currentStep || 'duration',
              completedSteps: parsed.completedSteps || [],
              itinerary: { ...DEFAULT_TRIP_STATE, ...parsed.itinerary },
            },
          });
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  // Persist draft
  useEffect(() => {
    if (typeof window === 'undefined' || state.isSuccess) return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        currentStep: state.currentStep,
        completedSteps: state.completedSteps,
        itinerary: state.itinerary,
        savedAt: new Date().toISOString(),
      })
    );
  }, [state.currentStep, state.completedSteps, state.itinerary, state.isSuccess]);

  const openDrawer = useCallback(() => dispatch({ type: 'OPEN_DRAWER' }), []);
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), []);
  const toggleDrawer = useCallback(() => {
    dispatch({ type: state.isDrawerOpen ? 'CLOSE_DRAWER' : 'OPEN_DRAWER' });
  }, [state.isDrawerOpen]);

  const goToStep = useCallback((step: WizardStep) => dispatch({ type: 'SET_STEP', step }), []);
  const nextStep = useCallback(() => dispatch({ type: 'NEXT_STEP' }), []);
  const prevStep = useCallback(() => dispatch({ type: 'PREV_STEP' }), []);

  const canGoNext = useCallback(() => {
    return WIZARD_STEPS.indexOf(state.currentStep) < WIZARD_STEPS.length - 1;
  }, [state.currentStep]);

  const canGoPrev = useCallback(() => {
    return WIZARD_STEPS.indexOf(state.currentStep) > 0;
  }, [state.currentStep]);

  const updateDuration = useCallback((duration: DurationOption) => {
    dispatch({ type: 'UPDATE_DURATION', duration });
  }, []);
  const updatePickup = useCallback((pickup: string) => {
    dispatch({ type: 'UPDATE_PICKUP', pickup });
  }, []);
  const updateDrop = useCallback((drop: string) => {
    dispatch({ type: 'UPDATE_DROP', drop });
  }, []);
  const updatePlaces = useCallback((places: string[]) => {
    dispatch({ type: 'UPDATE_PLACES', places });
  }, []);
  const updateStays = useCallback((stays: string[]) => {
    dispatch({ type: 'UPDATE_STAYS', stays });
  }, []);
  const updateInclusions = useCallback((inclusions: string[]) => {
    dispatch({ type: 'UPDATE_INCLUSIONS', inclusions });
  }, []);
  const updateAddons = useCallback((addons: string[]) => {
    dispatch({ type: 'UPDATE_ADDONS', addons });
  }, []);
  const updateTravelers = useCallback((travelers: TripState['travelers']) => {
    dispatch({ type: 'UPDATE_TRAVELERS', travelers });
  }, []);

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

    try {
      const response = await fetch('/api/itinerary-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contactInfo,
          itinerary: state.itinerary,
          additionalNotes,
          marketingConsent: true,
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Failed to submit inquiry');

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
    updateDuration,
    updatePickup,
    updateDrop,
    updatePlaces,
    updateStays,
    updateInclusions,
    updateAddons,
    updateTravelers,
    resetBuilder,
    submitInquiry,
  };

  return (
    <ItineraryBuilderContext.Provider value={value}>
      {children}
    </ItineraryBuilderContext.Provider>
  );
}

export function useItineraryBuilder() {
  const context = useContext(ItineraryBuilderContext);
  if (!context) throw new Error('useItineraryBuilder must be used within ItineraryBuilderProvider');
  return context;
}
