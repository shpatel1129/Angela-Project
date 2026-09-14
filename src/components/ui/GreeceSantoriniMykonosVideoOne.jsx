import React from 'react';

/**
 * GreeceSantoriniMykonosVideoOne
 * Renders the first video (Yachting Perspective of Greece).
 */
const GreeceSantoriniMykonosVideoOne = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-slate-950 pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
        <span className="text-xs font-sans font-bold tracking-[0.25em] text-amber-400 uppercase mb-4 block">
          AEGEAN VIDEO INSPIRATION
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-light mb-8">
          The Santorini Sunset & Caldera Experience
        </h2>

        {/* Video Aspect Ratio Wrapper */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-amber-900/20">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/9uk4ofWDzqE"
            title="Santorini Caldera Highlights Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="font-sans text-xs text-slate-400 font-light mt-6 leading-relaxed max-w-2xl mx-auto">
          Explore the sheer clifftop villages of Fira and Oia, look out over the active volcanic caldera, and preview sailing cruises within the blue crescent bay.
        </p>
      </div>
    </section>
  );
};

export default GreeceSantoriniMykonosVideoOne;
