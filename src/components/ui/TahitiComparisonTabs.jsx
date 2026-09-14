import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { Ship, Sailboat, Users, Calendar, Award, Check } from 'lucide-react';

// Images
import breezeImg from '../../assets/Windstar Cruises/S_Spirit_Breeze_Tahiti_03-Edited-2.webp';
import windstarImg from '../../assets/Windstar Cruises/2025_WindStar_Mykonos_02_V0.webp';

const TahitiComparisonTabs = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden" id="comparison">
      {/* Glow backgrounds */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-ts-gold/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-5">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-ts-gold uppercase bg-navy-950/5 px-5 py-2 rounded-full border border-slate-200">
            Yacht Comparison
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 leading-[1.1]">
            {data.title}
          </h2>
          <div className="w-12 h-0.5 bg-ts-gold"></div>
          <p className="font-sans text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
            {data.intro}
          </p>
        </div>

        {/* Side-by-Side Image + Text Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Column: Star Breeze */}
          <div className="bg-white rounded-[40px] border border-slate-200/60 shadow-lg hover:shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300">
            {/* Image section */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <MasterImage src={breezeImg} alt="Windstar Star Breeze Tahiti" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-6 left-6 bg-navy-950/80 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-xl text-white flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <Ship className="w-4 h-4 text-ts-gold" />
                <span>{data.breeze.name}</span>
              </div>
            </div>

            {/* Content text section */}
            <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl text-navy-950 font-bold mb-2">
                    {data.breeze.style}
                  </h3>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed">
                    {data.breeze.summary}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-5 border-t border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-ts-gold shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Capacity</span>
                      <span className="font-display text-sm font-bold text-navy-950">{data.breeze.capacity}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-ts-gold shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Best For</span>
                      <span className="font-display text-sm font-bold text-navy-950">Suite Space</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ts-gold block mb-2">Highlights</span>
                  {data.breeze.features.slice(0, 3).map((f, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-ts-gold/10 text-ts-gold flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className="font-sans text-xs sm:text-sm text-slate-700 font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Wind Star */}
          <div className="bg-white rounded-[40px] border border-slate-200/60 shadow-lg hover:shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300">
            {/* Image section */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <MasterImage src={windstarImg} alt="Windstar Wind Star Tahiti" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-6 left-6 bg-navy-950/80 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-xl text-white flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <Sailboat className="w-4 h-4 text-ts-gold" />
                <span>{data.windstar.name}</span>
              </div>
            </div>

            {/* Content text section */}
            <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl text-navy-950 font-bold mb-2">
                    {data.windstar.style}
                  </h3>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed">
                    {data.windstar.summary}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-5 border-t border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-ts-gold shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Capacity</span>
                      <span className="font-display text-sm font-bold text-navy-950">{data.windstar.capacity}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-ts-gold shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Best For</span>
                      <span className="font-display text-sm font-bold text-navy-950">Sailing Romance</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ts-gold block mb-2">Highlights</span>
                  {data.windstar.features.slice(0, 3).map((f, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-ts-gold/10 text-ts-gold flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className="font-sans text-xs sm:text-sm text-slate-700 font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TahitiComparisonTabs;
