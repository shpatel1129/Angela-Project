import { useState } from 'react';

function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="newsletter">
      <div className="wrap newsletter-inner">
        <span className="eyebrow">Join the Journal</span>
        <h2>The world's finest journeys, in your inbox</h2>
        <p>
          One dispatch a month. New destination guides, advisor insight, and the trips Angela is personally planning next.
        </p>
        <form
          className="newsletter-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <label htmlFor="newsletterEmail" className="visually-hidden" style={{ position: 'absolute', left: '-9999px' }}>
            Email address
          </label>
          <input id="newsletterEmail" type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
        </form>
        {submitted ? <div className="form-success">You're on the list — welcome to the Journal.</div> : null}
        <p className="newsletter-note">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}

export default Newsletter;
