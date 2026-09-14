import { Link } from 'react-router-dom';
import { continents } from '../../data/content';

function Destinations() {
  return (
    <section id="destinations">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Discover the World</span>
            <h2>Explore by Destination</h2>
          </div>
          <Link to="/destinations" className="view-all">
            All Destinations →
          </Link>
        </div>
        <div className="continent-grid">
          {continents.map((continent) => (
            <div key={continent.name} className={`continent-card ${continent.tone}`}>
              <div className="continent-inner">
                <span className="continent-name">{continent.name}</span>
                <span className="continent-tagline">{continent.tagline}</span>
                <ul className="continent-list">
                  {continent.places.map((place) =>
                    typeof place === 'string' ? (
                      <li key={place}>
                        <a href="#">{place}</a>
                      </li>
                    ) : (
                      <li key={place.name}>
                        <Link to={place.href}>{place.name}</Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;
