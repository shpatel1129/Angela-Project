import React from 'react';
import FadeIn from './FadeIn';

const RciItineraryComparison = ({ matrix, image }) => {
  if (!matrix) return null;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    return (
      <div className="flex items-center gap-0.5 text-ts-gold text-[11px] sm:text-xs">
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={`f-${i}`}>★</span>
        ))}
        {hasHalf && <span key="h">½</span>}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={`e-${i}`} className="text-slate-200">★</span>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-24 h-48 bg-ts-gold/5 rounded-l-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <FadeIn>
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-2">METRICS RADAR</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
                {matrix.title || "Regent Itinerary Comparison Matrix"}
              </h2>
              <div className="w-16 h-1 bg-ts-gold my-6"></div>
              <p className="font-sans text-sm text-slate-655 leading-relaxed font-light">
                How do our top itineraries evaluate across different traveler priorities? Review the visual star ratings below to match your style.
              </p>
            </FadeIn>
          </div>
          {image && (
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-32 hidden lg:block">
              <img src={image} alt="Luxury cruise ship harbor view" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-navy-950/20"></div>
            </div>
          )}
        </div>

        {/* 3-Column Grid for 6 Itineraries (2 rows of 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matrix.rows?.map((row, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 0.06}
              className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-250/60 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-sans text-[8px] font-bold tracking-widest text-slate-400 block uppercase mb-1">COMPARATIVE POSITION</span>
                <h4 className="font-display text-base font-bold text-navy-950 mb-6">{row[0]}</h4>
                
                <div className="space-y-3 pt-4 border-t border-slate-250/60 text-left">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[9px] text-slate-500 font-bold uppercase tracking-wider">First-Time Friendly</span>
                    {renderStars(row[1])}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[9px] text-slate-500 font-bold uppercase tracking-wider">Scenic Beauty</span>
                    {renderStars(row[2])}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[9px] text-slate-500 font-bold uppercase tracking-wider">Culture</span>
                    {renderStars(row[3])}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[9px] text-slate-500 font-bold uppercase tracking-wider">Wildlife</span>
                    {renderStars(row[4])}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[9px] text-slate-500 font-bold uppercase tracking-wider">Beaches</span>
                    {renderStars(row[5])}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[9px] text-slate-500 font-bold uppercase tracking-wider">Food & Wine</span>
                    {renderStars(row[6])}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[9px] text-slate-500 font-bold uppercase tracking-wider">Relaxation</span>
                    {renderStars(row[7])}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                <span className="font-sans text-[9px] text-slate-400 font-bold uppercase tracking-wider">Vessel Route</span>
                <span className="font-sans text-[9px] text-ts-gold font-bold uppercase tracking-wider">Highly Rated</span>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RciItineraryComparison;
