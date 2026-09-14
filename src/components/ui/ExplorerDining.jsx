import React from 'react';
import FadeIn from './FadeIn';

const ExplorerDining = ({ data, image }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header Block with Asymmetric Text/Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <FadeIn>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
                {data.title || "Culinary & Dining Experiences"}
              </h2>
              <div className="w-16 h-1 bg-ts-gold mt-4 mb-6"></div>
              <p className="font-serif text-base md:text-lg text-slate-600 leading-relaxed font-light">
                {data.description}
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-5">
            <FadeIn direction="left" className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              {image && (
                <img
                  src={image}
                  alt="Fine Dining Culinary Plate on Regent"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              )}
            </FadeIn>
          </div>
        </div>

        {/* Venues Grid with Orphan Control (5 items -> 2 cols, 5th spans 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.venues?.map((venue, idx) => {
            const isLast = idx === data.venues.length - 1;
            const cardClass = isLast 
              ? "md:col-span-2 max-w-4xl mx-auto w-full" 
              : "";
            
            return (
              <FadeIn key={idx} delay={idx * 0.05} className={`${cardClass}`}>
                <div className="bg-white border border-slate-200/60 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-4 border-b border-slate-100 pb-4">
                      <div>
                        <h3 className="font-display text-xl font-bold text-navy-950 font-serif">
                          {venue.name}
                        </h3>
                        <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-wider block mt-1">
                          {venue.type}
                        </span>
                      </div>
                      <span className="px-3 py-1 bg-navy-950 text-white rounded-full font-sans text-[9px] font-bold tracking-widest uppercase flex-shrink-0">
                        NO COVER CHARGE
                      </span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                      {venue.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ExplorerDining;
