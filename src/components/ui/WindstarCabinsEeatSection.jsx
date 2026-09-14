import React from 'react';
import FadeIn from './FadeIn';
import { ShieldCheck, Scale, Award, Eye } from 'lucide-react';
import MasterImage from './MasterImage';

const WindstarCabinsEeatSection = ({ sectionImage }) => {
  return (
    <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative styling */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ts-gold/5 rounded-full filter blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-ts-gold uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            E-E-A-T Sourcing & Transparency
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white font-bold leading-tight">
            How We Evaluate Windstar Cabin Value
          </h2>
          <div className="w-12 h-0.5 bg-ts-gold"></div>
          <p className="font-sans text-slate-400 text-base md:text-lg leading-relaxed font-light">
            We prioritize traveler comfort and personalization over generic brochures. Learn about our clear distinction between verified specifications and professional advisor insights.
          </p>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Fact vs Opinion */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col justify-between shadow-2xl backdrop-blur-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6 text-ts-gold" />
                <h3 className="font-display text-xl sm:text-2xl text-white font-bold">Fact vs. Expert Opinion Framework</h3>
              </div>
              <p className="font-sans text-slate-300 text-sm leading-relaxed font-light">
                To guarantee maximum transparency, this guide differentiates official dimensions from our advisory insights:
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="inline-block bg-ts-gold text-navy-950 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full mb-1">
                    VERIFIED FACT
                  </span>
                  <p className="font-sans text-xs text-slate-300">
                    Suite square footage, deck locations, bathroom specifications, connecting door positions, and ship deployment dates are pulled directly from Windstar Cruises' official master records.
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="inline-block bg-white/10 text-ts-gold text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full mb-1">
                    EXPERT INSIGHT
                  </span>
                  <p className="font-sans text-xs text-slate-300">
                    Recommendations by Angela Hughes and the Trips & Ships team represent professional interpretations regarding cabin value, motion characteristics, privacy trade-offs, and itinerary matching.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 font-sans mt-8 italic border-t border-white/5 pt-4">
              "Editorial note: Suitability varies by sailing date, weather patterns, and specific physical needs."
            </p>
          </div>

          {/* Right Column: Why Book With Us + Image */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Value Proposition Box */}
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 shadow-2xl backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-ts-gold" />
                <h3 className="font-display text-xl text-white font-bold">Why Book With Trips & Ships?</h3>
              </div>
              <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                We coordinate the entire luxury travel ecosystem. Instead of just purchasing a cabin number, we design a cohesive journey including hotel extensions, private guides, premium air routing, and flexible travel protection.
              </p>
            </div>

            {/* Visual Balance Panel */}
            {sectionImage && (
              <div className="relative rounded-[32px] overflow-hidden aspect-[16/10] border border-white/10 shadow-lg">
                <MasterImage src={sectionImage} alt="Windstar Yacht Sailing" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-950/20"></div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default WindstarCabinsEeatSection;
