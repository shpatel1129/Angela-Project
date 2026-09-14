import React from 'react';
import FadeIn from './FadeIn';

const WindstarVsRiverOnboard = ({ data, image1, image2 }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-slate-500 block">PART 03</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mt-2">
              {data.title}
            </h2>
            <div className="w-12 h-1 bg-ts-gold mx-auto mt-4"></div>
          </FadeIn>
        </div>

        {/* Fleet & Accommodation Overviews (2 large columns / big cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Col 1 */}
          <FadeIn direction="right" className="space-y-6">
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl overflow-hidden flex flex-col justify-between h-full hover:shadow-md transition-all">
              {image1 && (
                <div className="w-full h-64 overflow-hidden relative">
                  <img src={image1} alt="Boutique Yacht Fleet" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent"></div>
                </div>
              )}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">
                    FLEET & SHIP ARCHITECTURE
                  </span>
                  <h3 className="font-display text-2xl text-navy-950 font-bold mb-4">
                    The Ship Environments
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {data.fleetSize}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-200/40">
                  <span className="font-sans text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    148 to 342 Guest Yachts
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Col 2 */}
          <FadeIn direction="left" className="space-y-6">
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl overflow-hidden flex flex-col justify-between h-full hover:shadow-md transition-all">
              {image2 && (
                <div className="w-full h-64 overflow-hidden relative">
                  <img src={image2} alt="Luxury River Suite" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent"></div>
                </div>
              )}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">
                    ACCOMMODATIONS & LAYOUT
                  </span>
                  <h3 className="font-display text-2xl text-navy-950 font-bold mb-4">
                    Suite Concept Comparison
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {data.suitesDescription}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-200/40">
                  <span className="font-sans text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Ocean Views vs French Balconies
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Dining Concept Spotlight (2 big cards, satisfying 2,4,6 rule) */}
        <div className="bg-ice-50 border border-slate-200 rounded-3xl p-8 md:p-12">
          <h3 className="font-display text-2xl text-navy-950 font-bold mb-8 text-center">
            {data.dining?.title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Windstar Dining */}
            <FadeIn>
              <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
                <div>
                  <span className="font-sans text-[10px] text-ts-gold uppercase font-bold tracking-widest block mb-2">
                    Official James Beard Partner
                  </span>
                  <h4 className="font-display text-lg sm:text-xl text-navy-950 font-bold mb-3">
                    Windstar Yacht Dining
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {data.dining?.windstar}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100">
                  <span className="font-sans text-[9px] text-slate-400 uppercase tracking-widest block mb-1">
                    Signature Venues
                  </span>
                  <span className="font-sans text-xs text-slate-700 font-medium">
                    Cuadro 44, Star Grill, Amphora
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* River Cruise Dining */}
            <FadeIn delay={0.1}>
              <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
                <div>
                  <span className="font-sans text-[10px] text-ts-gold uppercase font-bold tracking-widest block mb-2">
                    Regionally Sourced Pairings
                  </span>
                  <h4 className="font-display text-lg sm:text-xl text-navy-950 font-bold mb-3">
                    River Cruise Dining
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {data.dining?.river}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100">
                  <span className="font-sans text-[9px] text-slate-400 uppercase tracking-widest block mb-1">
                    Signature Style
                  </span>
                  <span className="font-sans text-xs text-slate-700 font-medium">
                    Locally paired menu rotations & local wines
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WindstarVsRiverOnboard;
