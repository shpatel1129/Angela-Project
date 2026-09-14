import React from 'react';
import FadeIn from './FadeIn';
import { Award, Compass, Star, ShieldCheck, Crown } from 'lucide-react';

const GreeceFamilyQuickAnswer = ({ image, conversionText = [] }) => {
  return (
    <section className="py-24 bg-white border-b border-slate-100 text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Image Card */}
          <div className="lg:col-span-5">
            <FadeIn direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/5] group">
                <img 
                  src={image} 
                  alt="Greek family vacation" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-navy-950/10 mix-blend-multiply"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-slate-100 shadow-lg">
                  <span className="text-[10px] font-sans font-bold text-[#c9a15c] tracking-widest uppercase block mb-1">
                    First-Hand Expertise
                  </span>
                  <h5 className="font-display text-base font-bold text-navy-950">
                    Bespoke Family Itineraries
                  </h5>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Quick Answer Badges */}
          <div className="lg:col-span-7 space-y-8">
            <FadeIn direction="left">
              <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a15c] uppercase block mb-3">
                Deciding At A Glance
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 leading-tight">
                Finding the Ideal Match for Your Family
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed text-lg">
                Before diving into the details, here is the quick recommendation matrix based on what your family values most on a Greek vacation.
              </p>

              {/* Medals List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                
                <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-navy-900 text-[#c9a15c] flex items-center justify-center shadow-sm flex-shrink-0">
                      <Crown className="w-4 h-4" />
                    </div>
                    <h4 className="font-display text-base font-bold text-navy-950">Naxos</h4>
                  </div>
                  <p className="font-sans text-xs text-slate-500 font-light leading-relaxed">
                    <strong>Best Overall.</strong> Combines long sandy shallow beaches, authentic village culture, and compact driving times.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-navy-900 text-[#c9a15c] flex items-center justify-center shadow-sm flex-shrink-0">
                      <Compass className="w-4 h-4" />
                    </div>
                    <h4 className="font-display text-base font-bold text-navy-950">Crete</h4>
                  </div>
                  <p className="font-sans text-xs text-slate-500 font-light leading-relaxed">
                    <strong>Maximum Variety.</strong> Best for active families who want ancient ruins, diverse coastlines, and world-class luxury resorts.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-navy-900 text-[#c9a15c] flex items-center justify-center shadow-sm flex-shrink-0">
                      <Star className="w-4 h-4" />
                    </div>
                    <h4 className="font-display text-base font-bold text-navy-950">Paros</h4>
                  </div>
                  <p className="font-sans text-xs text-slate-500 font-light leading-relaxed">
                    <strong>Style & Chic.</strong> Recommended for families with style-conscious teenagers seeking design hotels, beach clubs, and water sports.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-navy-900 text-[#c9a15c] flex items-center justify-center shadow-sm flex-shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <h4 className="font-display text-base font-bold text-navy-950">Rhodes</h4>
                  </div>
                  <p className="font-sans text-xs text-slate-500 font-light leading-relaxed">
                    <strong>Resort Convenience.</strong> Combines expansive all-inclusive luxury beach resorts with a medieval walled old town.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-md transition-all duration-300 sm:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-navy-900 text-[#c9a15c] flex items-center justify-center shadow-sm flex-shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h4 className="font-display text-base font-bold text-navy-950">Corfu</h4>
                  </div>
                  <p className="font-sans text-xs text-slate-500 font-light leading-relaxed">
                    <strong>Lush Scenery & Heritage.</strong> Best for families preferring green scenery, historical Venetian architecture, and calm beaches.
                  </p>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GreeceFamilyQuickAnswer;
