import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { Sparkles, Ship, ArrowRight, User } from 'lucide-react';

const OriginSuitesGuide = ({ title, intro, categories, travelerMatrix, sectionImage }) => {
  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden border-t border-slate-200/50" id="suites">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-ts-gold/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 space-y-5">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-ts-gold uppercase bg-navy-950/5 px-5 py-2 rounded-full border border-slate-200">
            Accommodation Guide
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy-950 leading-tight">
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-ts-gold"></div>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Horizon Balcony Educational Card (Split layout 50:50) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-slate-200/60 shadow-xl rounded-[40px] overflow-hidden mb-16">
          <div className="lg:col-span-5 relative aspect-square lg:aspect-auto lg:self-stretch min-h-[300px]">
            {sectionImage && (
              <MasterImage 
                src={sectionImage} 
                alt="Silver Origin Veranda Outdoor Experience" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            )}
          </div>
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ts-gold bg-ts-gold/10 px-4 py-1.5 rounded-full inline-block">
              Key Innovation
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-navy-950 font-bold">
              What Is a Horizon Balcony?
            </h3>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              The Horizon Balcony is a signature concept on Silver Origin. Rather than a conventional walk-out terrace, the design creates a stronger connection between the suite interior and the ocean through an opening floor-to-ceiling glass window system. Early mornings are transformed when you lower the glass with the touch of a button.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm font-sans font-semibold text-navy-950">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-ts-gold"></div>
                <span>Indoor/outdoor versatility</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-ts-gold"></div>
                <span>Floor-to-ceiling panoramic views</span>
              </div>
            </div>
          </div>
        </div>

        {/* Suite Category Grid */}
        <div className="space-y-6 mb-20">
          <h3 className="font-display text-2xl text-navy-950 font-bold">Silver Origin Suite Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories && categories.map((cat, idx) => (
              <div key={idx} className="bg-white border border-slate-200/50 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-2xl">
                      <Ship className="w-5 h-5 text-ts-gold" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">
                      Deck {cat.deck || "3 - 6"}
                    </span>
                  </div>
                  <h4 className="font-display text-xl text-navy-950 font-bold">{cat.name}</h4>
                  <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
                  <span className="text-[10px] font-bold text-ts-gold uppercase tracking-wider block">Best For:</span>
                  <p className="font-sans text-xs text-navy-950 font-bold italic">{cat.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traveler Suitability Matrix */}
        <div className="bg-navy-950 text-white rounded-[40px] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-ts-gold/5 rounded-full filter blur-[80px]"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <h3 className="font-display text-2xl sm:text-3xl text-white font-bold">Traveler Type vs. Suite Strategy</h3>
              <p className="font-sans text-slate-400 text-xs sm:text-sm">
                Personalized advice for matching your specific travel style to the right cabin category:
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden font-sans">
              <div className="grid grid-cols-12 bg-white/5 border-b border-white/10 p-4 text-xs font-bold uppercase tracking-wider text-ts-gold">
                <div className="col-span-5">Traveler Type</div>
                <div className="col-span-7">Recommended Strategy</div>
              </div>
              <div className="divide-y divide-white/5">
                {travelerMatrix && travelerMatrix.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-12 p-4 text-sm items-center">
                    <div className="col-span-5 font-bold flex items-center gap-2 text-white">
                      <User className="w-4 h-4 text-slate-500 shrink-0" />
                      <span>{item.type}</span>
                    </div>
                    <div className="col-span-7 text-slate-300 font-medium text-xs sm:text-sm">{item.strategy}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OriginSuitesGuide;
