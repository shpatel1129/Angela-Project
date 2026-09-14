import React from 'react';
import FadeIn from './FadeIn';

const UltimateVideoEmbedOne = () => {
  return (
    <section className="w-full bg-navy-950 py-20 border-b border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,161,92,0.05),transparent_60%)] z-0"></div>
      <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-3 block">
            Video Showcase
          </span>
          <h2 className="font-display text-2xl md:text-3xl text-white mb-8">
            Experience Windstar: Small Ship Yacht Cruising
          </h2>
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/sKWVSThQKFY"
              title="Windstar Cruises Experience"
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

export default UltimateVideoEmbedOne;
