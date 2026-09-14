import React from 'react';
import FadeIn from './FadeIn';

/**
 * BestBeachesVideoOne
 * Renders the first high-impact YouTube video embed.
 */
const BestBeachesVideoOne = () => {
  return (
    <section id="best-beaches-video-one" className="w-full bg-navy-950 py-24 text-center">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <FadeIn className="max-w-3xl mx-auto mb-16 text-center">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a15c] uppercase mb-4 block">
            VISUAL TRAVEL
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white font-light mb-6">
            Exploring Greece's Coastlines
          </h2>
          <p className="font-sans text-slate-300 font-light leading-relaxed">
            Witness the crystal-clear turquoise horizons of the Greek islands and see why a coastal escape is the pinnacle of Mediterranean luxury travel.
          </p>
        </FadeIn>

        {/* Video Aspect Ratio Wrapper */}
        <FadeIn delay={0.2} className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/iG9YKvYcvJg"
              title="Greece Island Beaches Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default BestBeachesVideoOne;
