import React from 'react';
import FadeIn from './FadeIn';

const WindstarVsLargeDining = ({ data, image1, image2 }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-slate-500 block">PART 03</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mt-2">
              {data.title || "Onboard Life: Cabins & Fine Dining"}
            </h2>
            <div className="w-12 h-1 bg-ts-gold mx-auto mt-4"></div>
          </FadeIn>
        </div>

        {/* Fleet & Cabins (2 big cards, 2,4,6 rule) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Card 1 */}
          <FadeIn direction="right" className="space-y-6">
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl overflow-hidden flex flex-col justify-between h-full hover:shadow-md transition-all">
              {image1 && (
                <div className="w-full h-64 overflow-hidden relative">
                  <img src={image1} alt="Windstar Boutique Yacht Scale" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent"></div>
                </div>
              )}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">
                    FLEET COMPARISON
                  </span>
                  <h3 className="font-display text-2xl text-navy-950 font-bold mb-4">
                    The Scale of the Ships
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {data.fleetSize}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-200/40">
                  <span className="font-sans text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Yachts vs Floating Cities
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn direction="left" className="space-y-6">
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl overflow-hidden flex flex-col justify-between h-full hover:shadow-md transition-all">
              {image2 && (
                <div className="w-full h-64 overflow-hidden relative">
                  <img src={image2} alt="Large Cruise Ship Megascale" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent"></div>
                </div>
              )}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">
                    SUITE DESIGNS
                  </span>
                  <h3 className="font-display text-2xl text-navy-950 font-bold mb-4">
                    Cabin Layout & Comfort
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {data.suitesDescription}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-200/40">
                  <span className="font-sans text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Standard 277 sq. ft. Oceanviews
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Dining Concept Spotlight (2 big cards, 2,4,6 rule) */}
        {data.dining && (
          <div className="bg-ice-50 border border-slate-200 rounded-3xl p-8 md:p-12">
            <h3 className="font-display text-2xl text-navy-950 font-bold mb-8 text-center font-serif">
              {data.dining.title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Windstar Dining */}
              <FadeIn>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
                  <div>
                    <span className="font-sans text-[10px] text-ts-gold uppercase font-bold tracking-widest block mb-2">
                      James Beard Foundation Partnerships
                    </span>
                    <h4 className="font-display text-lg sm:text-xl text-navy-950 font-bold mb-3">
                      Windstar Dining Experience
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {data.dining.windstar}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-slate-100">
                    <span className="font-sans text-[9px] text-slate-400 uppercase tracking-widest block mb-1">
                      No Dining Cover Charges
                    </span>
                    <span className="font-sans text-xs text-slate-700 font-medium">
                      Cuadro 44, Star Grill, Open Seating
                    </span>
                  </div>
                </div>
              </FadeIn>

              {/* Large Ship Dining */}
              <FadeIn delay={0.1}>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
                  <div>
                    <span className="font-sans text-[10px] text-ts-gold uppercase font-bold tracking-widest block mb-2">
                      Resort Specialty Venues
                    </span>
                    <h4 className="font-display text-lg sm:text-xl text-navy-950 font-bold mb-3">
                      Megaship Dining Experience
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {data.dining.large}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-slate-100">
                    <span className="font-sans text-[9px] text-slate-400 uppercase tracking-widest block mb-1">
                      Specialty Cover Fees Apply
                    </span>
                    <span className="font-sans text-xs text-slate-700 font-medium">
                      Reservations required months in advance
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default WindstarVsLargeDining;
