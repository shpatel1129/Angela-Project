import React from 'react';
import FadeIn from './FadeIn';

const RvoVideo1 = ({ youtubeId, title, description }) => {
  if (!youtubeId) return null;

  return (
    <section className="w-full py-20 bg-white text-navy-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ice-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Youtube Player */}
        <div className="lg:col-span-7">
          <FadeIn direction="right">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                title={title || "Regent Seven Seas Walkthrough"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              ></iframe>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Editorial Description */}
        <div className="lg:col-span-5 space-y-6">
          <FadeIn direction="left">
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-ts-gold uppercase block">REGENT VIDEO INSIGHT</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight mt-2 text-navy-950">
              {title || "Regent Seven Seas: Ship Walkthrough"}
            </h3>
            <div className="w-12 h-1 bg-ts-gold my-4"></div>
            <p className="font-serif text-sm sm:text-base text-slate-650 leading-relaxed font-light">
              {description || "Explore Regent's signature spacious suites, gourmet dining rooms, and high crew-to-guest ratios. Experience a taste of ultra-luxury living at sea."}
            </p>
            <div className="pt-4 border-t border-slate-100">
              <span className="font-sans text-[9px] text-slate-450 font-bold uppercase tracking-wider block mb-1">KEY DETAILS TO WATCH</span>
              <p className="font-sans text-xs text-slate-500 font-light italic">Notice the suite layouts, specialty dining spaces, and generous onboard public areas.</p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default RvoVideo1;
