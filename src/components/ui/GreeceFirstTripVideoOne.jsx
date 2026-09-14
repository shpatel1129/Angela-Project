import React from 'react';

/**
 * GreeceFirstTripVideoOne
 * Renders a full-width container showcasing the first YouTube video for the first-trip planner.
 */
const GreeceFirstTripVideoOne = () => {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background abstract layout */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
        <span className="text-xs font-sans font-bold tracking-[0.25em] text-blue-400 uppercase mb-4 block">
          AEGEAN INSPIRATION
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-light mb-8">
          The Essential First-Time Journey
        </h2>

        {/* Video Frame */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/n2dzmhwPlA0"
            title="Greece First Time Travel Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="font-sans text-xs text-slate-400 font-light mt-6 leading-relaxed max-w-2xl mx-auto">
          Watch a walkthrough of the key paths, ferry links, and port entries that first-time travelers navigate when stepping onto the Greek islands.
        </p>
      </div>
    </section>
  );
};

export default GreeceFirstTripVideoOne;
