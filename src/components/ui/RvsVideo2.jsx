import React from 'react';
import FadeIn from './FadeIn';

const RvsVideo2 = ({ youtubeId, title, description }) => {
  if (!youtubeId) return null;

  return (
    <section className="w-full py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-ts-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Editorial Context */}
        <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
          <FadeIn direction="right">
            <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-ts-gold uppercase block">DEEPER DIVE</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight mt-2 text-navy-950">
              {title || "Luxury Cruise Comparison: Visual Guide"}
            </h3>
            <div className="w-12 h-1 bg-ts-gold my-4"></div>
            <p className="font-serif text-sm text-slate-600 leading-relaxed font-light">
              {description || "An in-depth visual comparison exploring the unique strengths of both Regent and Silversea across their fleets, suites, and destination experiences."}
            </p>
            <div className="pt-6 space-y-4">
              <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                <span className="font-sans text-[9px] text-ts-gold font-bold uppercase tracking-widest block mb-1">REGENT HIGHLIGHT</span>
                <p className="font-sans text-xs text-slate-600">Comprehensive all-inclusive model with unlimited shore excursions and spacious suites</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                <span className="font-sans text-[9px] text-slate-400 font-bold uppercase tracking-widest block mb-1">SILVERSEA HIGHLIGHT</span>
                <p className="font-sans text-xs text-slate-600">Expedition fleet with Antarctica access, butler service, and destination-focused cuisine</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Video Player */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <FadeIn direction="left">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                title={title || "YouTube video player"}
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

export default RvsVideo2;
