import React from 'react';
import FadeIn from './FadeIn';

const RvoVideo2 = ({ youtubeId, title, description }) => {
  if (!youtubeId) return null;

  return (
    <section className="w-full py-20 bg-white text-navy-950 relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-ice-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Editorial Description */}
        <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
          <FadeIn direction="right">
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-ts-gold uppercase block">OCEANIA VIDEO INSIGHT</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight mt-2 text-navy-950">
              {title || "Oceania Vista: Ship Walkthrough"}
            </h3>
            <div className="w-12 h-1 bg-ts-gold my-4"></div>
            <p className="font-serif text-sm sm:text-base text-slate-650 leading-relaxed font-light">
              {description || "Explore Oceania Cruises' modern fleet, focusing on their new Vista-class vessel. Catch a glimpse of the specialty dining spots, stylish lounges, and relaxed country-club ambiance."}
            </p>
            <div className="pt-4 border-t border-slate-100">
              <span className="font-sans text-[9px] text-slate-450 font-bold uppercase tracking-wider block mb-1">KEY DETAILS TO WATCH</span>
              <p className="font-sans text-xs text-slate-500 font-light italic">Take note of the culinary kitchen design, specialty restaurants Ember and Red Ginger, and spacious staterooms.</p>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Youtube Player */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <FadeIn direction="left">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                title={title || "Oceania Vista Walkthrough"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              ></iframe>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default RvoVideo2;
