function FeaturedArticle() {
  return (
    <section className="featured" id="featured">
      <div className="wrap featured-grid">
        <div className="featured-media">
          <img
            src="https://assets.cdn.filesafe.space/255UFzMdP7hJgjlRB0sZ/media/6a67c66fcf7bd6509b1a32a0.jpeg"
            alt="Angela Hughes standing in a cobblestone village square near a stone war memorial and medieval church in France, with French flags and flower boxes in the background."
            loading="lazy"
          />
        </div>
        <div className="featured-content">
          <span className="eyebrow">This Month's Feature · River Cruises</span>
          <h2>10 Things Two Weeks on the Rhône River Reminded Me About River Cruising</h2>
          <p className="excerpt">
            These are my honest observations about the river cruise experience and who I believe is the perfect candidate for one.
          </p>
          <div className="byline">
            <span>
              <strong>Angela Hughes</strong>
            </span>
            <span className="dot" />
            <span>6 min read</span>
          </div>
          <a href="/rhone-river-cruise-guide" className="btn btn-outline-dark">
            Read the Story
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedArticle;
