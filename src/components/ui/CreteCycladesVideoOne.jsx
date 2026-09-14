import React from 'react';
import FadeIn from './FadeIn';

/**
 * CreteCycladesVideoOne
 * Renders the first high-impact YouTube video embed.
 */
const CreteCycladesVideoOne = () => {
  return (
    <section id="crete-cyclades-video-one" className="w-full bg-navy-950 py-24 text-center">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <FadeIn className="max-w-3xl mx-auto mb-16 text-center">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a15c] uppercase mb-4 block">
            VISUAL INSPIRATION
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white font-light mb-6">
            Experiencing Greece by Small Ship
          </h2>
          <p className="font-sans text-slate-300 font-light leading-relaxed">
            See the breathtaking colors of the Aegean Sea, the contrast of whitewashed walls against blue horizons, and how intimate small ships access the finest harbor coves.
          </p>
        </FadeIn>

        {/* Video Aspect Ratio Wrapper */}
        <FadeIn delay={0.2} className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/pqsmWU7mVBA"
              title="Greece Yacht Cruise Video"
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

export default CreteCycladesVideoOne;
