import { experiences } from '../../data/content';

function Experiences() {
  return (
    <section style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Beyond the Itinerary</span>
            <h2>Luxury Experiences</h2>
          </div>
        </div>
        <div className="exp-grid">
          {experiences.map((experience) => (
            <div key={experience.title} className="exp-card">
              <svg className="exp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
              <h3>{experience.title}</h3>
              <p>{experience.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
