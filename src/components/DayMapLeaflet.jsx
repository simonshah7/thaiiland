import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function DayMapLeaflet({ stops }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || !stops || stops.length === 0) return;

    // Clean up existing map
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const validStops = stops.filter((s) => s.lat && s.lng);
    if (validStops.length === 0) return;

    const map = L.map(mapRef.current, {
      scrollWheelZoom: false,
      attributionControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap',
    }).addTo(map);

    // Add numbered markers
    validStops.forEach((stop, i) => {
      const marker = L.marker([stop.lat, stop.lng], {
        icon: L.divIcon({
          className: 'day-map-marker',
          html: `<div class="day-map-marker-pin"><span>${i + 1}</span></div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        }),
      }).addTo(map);

      marker.bindPopup(
        `<strong>${i + 1}. ${stop.name}</strong>${stop.distance ? `<br/><span style="color:#888;font-size:12px">${stop.distance}</span>` : ''}`
      );
    });

    // Draw route line
    if (validStops.length > 1) {
      const latlngs = validStops.map((s) => [s.lat, s.lng]);
      L.polyline(latlngs, {
        color: '#c9a84c',
        weight: 3,
        opacity: 0.7,
        dashArray: '8, 6',
      }).addTo(map);
    }

    // Fit bounds
    const bounds = L.latLngBounds(validStops.map((s) => [s.lat, s.lng]));
    map.fitBounds(bounds, { padding: [30, 30], maxZoom: 14 });

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [stops]);

  if (!stops || stops.length === 0) return null;

  return (
    <div className="day-map-leaflet-wrapper">
      <div ref={mapRef} className="day-map-leaflet" />
    </div>
  );
}
