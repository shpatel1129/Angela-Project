function Hero() {
  return (
    <section className="hero" style={{ padding: 0 }}>
      <div className="hero-media" aria-hidden="true" />
      <div className="hero-inner">
        <span className="eyebrow">The Luxury Travel Magazine</span>
        <div className="route-rule" aria-hidden="true">
          <span className="waypoint" />
        </div>
        <h1>Journeys worth the time it takes to plan them</h1>
        <p className="sub">
          Editorial guidance, destination intelligence, and advisor-led insight for travelers who see a trip as something to be designed, not booked.
        </p>
        <div className="hero-ctas">
          <a href="#featured" className="btn btn-primary">
            Start Reading
          </a>
          <a href="/contact" className="btn btn-outline-light">
            Plan My Luxury Vacation
          </a>
        </div>
      </div>
      <div className="scroll-cue" aria-hidden="true" />
    </section>
  );
}

export default Hero;
