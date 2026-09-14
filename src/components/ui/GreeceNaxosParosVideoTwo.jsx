import React from 'react';

/**
 * GreeceNaxosParosVideoTwo
 * Renders the second video embed section.
 */
const GreeceNaxosParosVideoTwo = () => {
  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
        <span className="text-xs font-sans font-bold tracking-[0.25em] text-blue-400 uppercase mb-4 block">
          AEGEAN ISLAND INSPIRATION
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-light mb-8">
          The Naoussa Harbor & Antiparos Yachting Vibe
        </h2>

        {/* Video Aspect Ratio Wrapper */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-blue-900/30">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/mZoarvXo1Bs"
            title="Paros Antiparos Sailing Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="font-sans text-xs text-slate-400 font-light mt-6 leading-relaxed max-w-2xl mx-auto">
          Explore the narrow whitewashed harbor fronts, boutique shops, and scenic beaches that are best experienced on a sailing catamaran.
        </p>
      </div>
    </section>
  );
};

export default GreeceNaxosParosVideoTwo;
