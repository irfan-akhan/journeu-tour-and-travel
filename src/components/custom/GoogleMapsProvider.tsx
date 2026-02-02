"use client";

import { LoadScript } from '@react-google-maps/api';
import { ReactNode } from 'react';
import { MapPin } from 'lucide-react';

interface GoogleMapsProviderProps {
  children: ReactNode;
  apiKey?: string;
}

export default function GoogleMapsProvider({ children, apiKey }: GoogleMapsProviderProps) {
  // Show placeholder when no API key is provided
  if (!apiKey || apiKey === 'YOUR_API_KEY_HERE' || apiKey === '') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-100 via-blue-50 to-gray-100 flex items-center justify-center rounded-2xl">
        <div className="text-center p-8">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-[#1BA5B8]/20 rounded-full blur-2xl animate-pulse" />
            <MapPin className="relative w-16 h-16 text-[#1BA5B8] mx-auto animate-bounce" />
          </div>
          <h3 className="text-2xl font-ubuntu font-bold text-gray-900 mb-3">Map Preview</h3>
          <p className="text-gray-600 mb-2">Interactive map will be displayed here</p>
          <p className="text-sm text-gray-500">Google Maps API key required for live map</p>
        </div>
      </div>
    );
  }

  return (
    <LoadScript 
      googleMapsApiKey={apiKey}
      loadingElement={
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-[#1BA5B8] mx-auto mb-4 animate-bounce" />
            <p className="text-gray-600 font-medium">Loading Google Maps...</p>
          </div>
        </div>
      }
    >
      {children}
    </LoadScript>
  );
}
