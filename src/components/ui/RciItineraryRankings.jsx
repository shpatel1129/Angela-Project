import React, { useState } from 'react';
import FadeIn from './FadeIn';

const RciItineraryRankings = ({ rankings, image }) => {
  const [openIdx, setOpenIdx] = useState(0);

  if (!rankings) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-stone-50 relative overflow-hidden">
      {/* Background vector visual */}
      <div className="absolute left-0 top-1/3 w-32 h-64 bg-navy-950/5 rounded-r-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-16 text-center">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">OFFICIAL RANKINGS</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            The 10 Best Regent Cruise Itineraries Ranked
          </h2>
          <div className="w-20 h-1 bg-ts-gold mx-auto mt-5"></div>
        </FadeIn>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: The Accordion Deck (cols 1-8) */}
          <div className="lg:col-span-8 space-y-4">
            {rankings.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <FadeIn
                  key={idx}
                  delay={idx * 0.05}
                  className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300"
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      {/* Rank badge */}
                      <span className={`w-10 h-10 rounded-full flex items-center justify-center font-display text-base font-bold transition-colors duration-300 ${
                        isOpen 
                          ? 'bg-navy-950 text-white' 
                          : 'bg-slate-100 text-navy-950 border border-slate-200'
                      }`}>
                        {item.rank}
                      </span>
                      <div>
                        <span className="font-sans text-[8px] font-bold tracking-widest text-ts-gold block uppercase mb-0.5">
                          {item.tagline}
                        </span>
                        <h4 className="font-display text-base sm:text-lg font-bold text-navy-950">{item.name}</h4>
                      </div>
                    </div>
                    {/* Arrow indicator */}
                    <span className={`text-navy-950 font-bold transition-transform duration-300 text-lg ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}>
                      ↓
                    </span>
                  </button>

                  {/* Expanded Content Drawer */}
                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 border-t border-slate-100 space-y-6 pt-6 bg-slate-50/50">
                      
                      {/* Staggered grid for 50:50 text and visual balance */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        
                        {/* Left Column: Details Copy */}
                        <div className="space-y-6">
                          <p className="font-sans text-xs sm:text-sm text-slate-655 leading-relaxed font-light">
                            {item.desc}
                          </p>

                          {/* Split details columns */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            
                            {/* Highlights list */}
                            <div>
                              <span className="font-sans text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-2">KEY HIGHLIGHTS</span>
                              <div className="flex flex-wrap gap-1.5">
                                {item.highlights?.map((hl, hlIdx) => (
                                  <span key={hlIdx} className="px-2 py-0.5 rounded-lg bg-navy-950/5 text-navy-950 font-sans text-[10px] font-bold border border-navy-950/10">
                                    {hl}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Best For */}
                            <div>
                              <span className="font-sans text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-2">IDEAL TRAVELERS</span>
                              <div className="flex flex-wrap gap-1.5">
                                {item.bestFor?.map((bf, bfIdx) => (
                                  <span key={bfIdx} className="px-2 py-0.5 rounded-lg bg-ts-gold/5 text-ts-gold font-sans text-[10px] font-bold border border-ts-gold/10">
                                    {bf}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Best Season */}
                            <div>
                              <span className="font-sans text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-2">BEST SEASON TO SAIL</span>
                              <p className="font-sans text-xs text-navy-950 font-semibold leading-normal">{item.bestSeason}</p>
                            </div>

                          </div>

                          {/* Expert quote box */}
                          <div className="p-4 bg-white rounded-2xl border-l-4 border-ts-gold shadow-sm">
                            <span className="font-sans text-[8px] font-bold text-ts-gold uppercase tracking-widest block mb-1">ANGELA'S ADVISOR INSIGHT</span>
                            <p className="font-serif text-xs text-slate-700 italic leading-relaxed">
                              "{item.insight}"
                            </p>
                          </div>
                        </div>

                        {/* Right Column: Custom Visual Destination Image (50:50 ratio) */}
                        {item.image && (
                          <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 aspect-[4/3] bg-slate-100">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent"></div>
                          </div>
                        )}

                      </div>

                    </div>
                  )}
                </FadeIn>
              );
            })}
          </div>

          {/* Right Block: Sticky Featured Image Card (cols 9-12) */}
          {image && (
            <div className="lg:col-span-4 flex">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200/80 min-h-[300px] w-full flex-1">
                <img
                  src={image}
                  alt="Scenic Port Landscape"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-sans text-[9px] text-ts-gold font-bold tracking-[0.2em] uppercase block mb-1">TRAVEL MATCH</span>
                  <p className="font-serif text-[11px] text-slate-200 leading-normal font-light">
                    Click each ranking card on the left to read itinerary descriptions, key ports, seasons, and advisor insights.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default RciItineraryRankings;
