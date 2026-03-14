import {
  Plane, PlaneLanding, Moon, Hotel, Ship, Anchor, Mountain, MapPin, Home,
  Heart, Waves, TreePine, Landmark, Droplets, Store, UtensilsCrossed,
  ShoppingBag, Wine, Crown, ChefHat, Sunset,
} from 'lucide-react';
import DayMapLeaflet from './DayMapLeaflet';

const ICON_MAP = {
  Plane, PlaneLanding, Moon, Hotel, Ship, Anchor, Mountain, MapPin, Home,
  Heart, Waves, TreePine, Landmark, Droplets, Store, UtensilsCrossed,
  ShoppingBag, Wine, Crown, ChefHat, Sunset,
  TreePalm: TreePine,
};

function StopIcon({ name }) {
  const Icon = ICON_MAP[name] || MapPin;
  return <Icon size={16} strokeWidth={1.8} />;
}

export default function DayMap({ stops }) {
  if (!stops || stops.length === 0) return null;

  return (
    <div className="day-map">
      <div className="day-map-header">
        <MapPin size={16} strokeWidth={1.8} />
        <span>Today&apos;s Route</span>
      </div>

      <DayMapLeaflet stops={stops} />

      <div className="day-map-route">
        {stops.map((stop, i) => (
          <div key={i} className="day-map-stop">
            {i > 0 && stop.distance && (
              <div className="day-map-connector">
                <div className="day-map-line" />
                <span className="day-map-distance">{stop.distance}</span>
                <div className="day-map-line" />
              </div>
            )}
            <div className="day-map-pin">
              <span className="day-map-pin-number">{i + 1}</span>
              <span className="day-map-pin-icon">
                <StopIcon name={stop.icon} />
              </span>
              <span className="day-map-pin-name">{stop.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
