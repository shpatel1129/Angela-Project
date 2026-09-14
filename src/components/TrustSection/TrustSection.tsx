import { trustPoints } from '../../data/content';

function TrustSection() {
  return (
    <section className="trust-section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Why Travelers Trust Trips &amp; Ships</span>
          <h2>Four Decades of Luxury Travel Authority</h2>
        </div>
        <div className="trust-grid">
          {trustPoints.map((point) => (
            <div key={point} className="trust-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M12 2l2.9 6.3L21 9l-5 4.6L17.4 21 12 17.6 6.6 21 8 13.6 3 9l6.1-.7L12 2z" />
              </svg>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
