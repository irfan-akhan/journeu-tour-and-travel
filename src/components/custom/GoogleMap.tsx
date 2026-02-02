"use client";

import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Navigation } from 'lucide-react';

interface MapLocation {
  lat: number;
  lng: number;
  title: string;
  address?: string;
  phone?: string;
  email?: string;
}

interface GoogleMapComponentProps {
  locations: MapLocation[];
  center?: { lat: number; lng: number };
  zoom?: number;
  height?: string;
  showControls?: boolean;
  className?: string;
  isPlaceholder?: boolean;
}

const containerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = {
  lat: 34.0837,
  lng: 74.7973,
};

export default function GoogleMapComponent({
  locations,
  center = defaultCenter,
  zoom = 12,
  height = "500px",
  showControls = true,
  className = "",
  isPlaceholder = false,
}: GoogleMapComponentProps) {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);

  // Show placeholder UI
  if (isPlaceholder) {
    return (
      <div className={`relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#1BA5B8]/5 via-blue-50 to-[#0A4D5C]/5 ${className}`} style={{ height }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-[#1BA5B8]/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative flex items-center justify-center gap-3">
                <MapPin className="w-12 h-12 text-[#1BA5B8] animate-bounce" />
                <Navigation className="w-10 h-10 text-[#0A4D5C] animate-pulse" />
              </div>
            </div>
            <h3 className="text-2xl font-ubuntu font-bold text-gray-900 mb-3">Interactive Map</h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Explore our office locations across Kashmir
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {locations.map((location, index) => (
                <div key={index} className="px-4 py-2 bg-white rounded-full shadow-md border border-[#1BA5B8]/20">
                  <p className="text-sm font-semibold text-gray-700">{location.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-xl ${className}`} style={{ height }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        options={{
          zoomControl: showControls,
          streetViewControl: showControls,
          mapTypeControl: showControls,
          fullscreenControl: showControls,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#1BA5B8" }, { lightness: 20 }],
            },
          ],
        }}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={() => setSelectedLocation(location)}
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 12,
              fillColor: "#1BA5B8",
              fillOpacity: 1,
              strokeColor: "#FFD84D",
              strokeWeight: 3,
            }}
          />
        ))}

        {selectedLocation && (
          <InfoWindow
            position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <Card className="p-4 border-0 shadow-lg max-w-xs">
              <h3 className="font-ubuntu font-bold text-lg mb-2 text-gray-900">
                {selectedLocation.title}
              </h3>
              {selectedLocation.address && (
                <p className="text-sm text-gray-600 mb-2">{selectedLocation.address}</p>
              )}
              {selectedLocation.phone && (
                <p className="text-sm text-[#1BA5B8] font-medium mb-1">
                  📞 {selectedLocation.phone}
                </p>
              )}
              {selectedLocation.email && (
                <p className="text-sm text-[#1BA5B8] font-medium">
                  ✉️ {selectedLocation.email}
                </p>
              )}
            </Card>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}
