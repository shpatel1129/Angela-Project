function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">Trips &amp; Ships</div>
            <p>
              The Luxury Travel Magazine — editorial guidance and advisor-led insight from Trips &amp; Ships Luxury Travel.
            </p>
            <div className="footer-social" aria-label="Social media links">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M15 4h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 17c1-3 1.5-5 1.5-6.5a2 2 0 1 1 4 0c0 1.5-1 3.5-1 5 0 1 .5 1.5 1.5 1.5 2 0 3.3-2.3 3.3-5A5 5 0 0 0 12 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="#river-cruises">River Cruises</a></li>
              <li><a href="#safaris">African Safaris</a></li>
              <li><a href="#hotels">Hotels &amp; Resorts</a></li>
              <li><a href="#life-moments">Life Moments</a></li>
              <li><a href="#travel-planning">Travel Planning</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Magazine</h4>
            <ul>
              <li><a href="#">Angela's Recommendations</a></li>
              <li><a href="#">Trending Now</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#">Travel Intelligence</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Trips &amp; Ships</h4>
            <ul>
              <li><a href="/our-story">About Us</a></li>
              <li><a href="#">Luxury Travel University</a></li>
              <li><a href="#">Luxury Host Agency</a></li>
              <li><a href="#">Become an Advisor</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Start Planning</h4>
            <ul>
              <li><a href="#">Plan My Luxury Vacation</a></li>
              <li><a href="#">Speak With an Advisor</a></li>
              <li><a href="#">Subscribe to the Journal</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Trips &amp; Ships Luxury Travel. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
