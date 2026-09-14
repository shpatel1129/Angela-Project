import React from 'react';

/**
 * GreeceVideoEmbedOne
 * Renders a full-width container showcasing the luxury Greece cruise video.
 */
const GreeceVideoEmbedOne = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-slate-950 pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
        <span className="text-xs font-sans font-bold tracking-[0.25em] text-blue-400 uppercase mb-4 block">
          EXCLUSIVE VIDEO COVERAGE
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-light mb-8">
          The Yachting Perspective of Greece
        </h2>

        {/* Video Aspect Ratio Wrapper */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-blue-900/30">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/wZ2hrU2VSfY"
            title="Greece Luxury Cruise Highlights Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="font-sans text-xs text-slate-400 font-light mt-6 leading-relaxed max-w-2xl mx-auto">
          Take a look at the sailing conditions, open deck design, and close destination access that characterizes luxury small-ship yachting in the Aegean.
        </p>
      </div>
    </section>
  );
};

export default GreeceVideoEmbedOne;
