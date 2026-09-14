import React from 'react';

/**
 * GreeceUltimateVideoOne
 * Video showcase focusing on luxury Greek island hopping & small-ship sailing.
 */
const GreeceUltimateVideoOne = () => {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-slate-950 pointer-events-none" />

      <div className="max-w-[1040px] mx-auto px-6 relative z-10 text-center">
        <span className="text-xs font-sans font-bold tracking-[0.25em] text-blue-400 uppercase mb-4 block">
          CURATED VIDEO PERSPECTIVE
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-light mb-8">
          The Aegean Yachting & Island Experience
        </h2>

        {/* 16:9 Video Frame */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-blue-900/40 bg-slate-900">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dV2yrkh1ABI"
            title="Greece Luxury Island Travel & Yachting Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="font-sans text-xs sm:text-sm text-slate-400 font-light mt-6 leading-relaxed max-w-2xl mx-auto">
          Explore how accessing hidden coves, volcanic caldera harbors, and secluded Aegean ports transforms a standard trip into an unforgettable voyage.
        </p>
      </div>
    </section>
  );
};

export default GreeceUltimateVideoOne;
