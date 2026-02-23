export default function CitySection({ city }) {
  return (
    <div className="city-section" id={`city-${city.name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div
        className="city-section-bg"
        style={{ backgroundImage: `url(${city.heroImage})` }}
      />
      <div className="city-section-content">
        <h2 className="city-section-name">{city.name}</h2>
        <p className="city-section-subtitle">{city.subtitle}</p>
        <div className="city-section-line" />
      </div>
    </div>
  );
}
