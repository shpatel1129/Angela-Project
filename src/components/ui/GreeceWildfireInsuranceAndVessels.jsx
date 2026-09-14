import React from 'react';
import FadeIn from './FadeIn';
import { ShieldCheck, FileCheck, Building2, Home, Ship, CheckCircle2 } from 'lucide-react';

const iconMap = {
  0: Building2,
  1: Home,
  2: Ship
};

const GreeceWildfireInsuranceAndVessels = ({ insuranceAndVesselsData }) => {
  const {
    title = "Travel Insurance & Wildfire-Resilient Accommodations",
    subtitle = "Securing financial protection and evaluating luxury resorts vs. private villas vs. small-ship cruises.",
    insuranceGuide,
    accommodationsShowdown = []
  } = insuranceAndVesselsData || {};

  return (
    <section id="insurance-and-vessels" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            FINANCIAL PROTECTION & ACCOMMODATION
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {title}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed text-lg">
            {subtitle}
          </p>
        </div>

        {/* Insurance Tiers Cards */}
        <div className="mb-20">
          <FadeIn>
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm mb-8">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-sans font-bold tracking-wider text-[#c9a15c] uppercase block mb-1">
                  FINANCIAL PEACE OF MIND
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-navy-950 font-normal mb-3">
                  {insuranceGuide?.title || "Understanding Wildfire Travel Insurance Coverage"}
                </h3>
                <p className="font-sans text-xs md:text-sm text-slate-600 font-light leading-relaxed">
                  {insuranceGuide?.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {insuranceGuide?.keyTypes?.map((ins, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <FileCheck size={20} className="text-[#c9a15c]" />
                        <span className="text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          Tier 0{idx + 1}
                        </span>
                      </div>
                      <h4 className="font-display text-lg text-navy-950 font-normal mb-1">
                        {ins.name}
                      </h4>
                      <span className="text-xs font-sans font-semibold text-[#c9a15c] block mb-3">
                        {ins.status}
                      </span>
                      <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                        {ins.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Accommodations Showdown Grid (3 Cards) */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-1 block">
              ACCOMMODATION EVALUATION
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-light text-navy-950">
              Luxury Resorts vs. Private Villas vs. Small-Ship Cruises
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accommodationsShowdown.map((acc, idx) => {
              const AccIcon = iconMap[idx] || Building2;
              return (
                <FadeIn key={idx}>
                  <div className={`rounded-3xl p-8 border flex flex-col justify-between h-full transition-all duration-300 ${
                    idx === 2 
                      ? 'bg-navy-950 text-white border-navy-900 shadow-xl' 
                      : 'bg-white text-navy-950 border-slate-200/80 shadow-md hover:shadow-xl'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className={`p-3 rounded-2xl ${idx === 2 ? 'bg-[#c9a15c]/20 text-[#c9a15c] border border-[#c9a15c]/30' : 'bg-ice-50 text-navy-950 border border-border-light'}`}>
                          <AccIcon size={26} />
                        </span>
                        <span className={`px-3 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-wider ${idx === 2 ? 'bg-white/10 text-[#c9a15c]' : 'bg-slate-100 text-slate-700'}`}>
                          {acc.badge}
                        </span>
                      </div>

                      <h4 className="font-display text-2xl font-normal mb-4">
                        {acc.type}
                      </h4>

                      <div className="space-y-3 mb-6">
                        <span className={`text-[11px] font-sans font-bold uppercase tracking-wider block ${idx === 2 ? 'text-[#c9a15c]' : 'text-slate-400'}`}>
                          Key Infrastructure
                        </span>
                        <p className={`font-sans text-xs font-light leading-relaxed ${idx === 2 ? 'text-slate-200' : 'text-slate-600'}`}>
                          {acc.pros}
                        </p>
                      </div>
                    </div>

                    <div className={`p-4 rounded-2xl border mt-auto ${idx === 2 ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                      <span className={`text-[11px] font-sans font-bold uppercase tracking-wider block mb-1 ${idx === 2 ? 'text-[#c9a15c]' : 'text-navy-950'}`}>
                        Best For
                      </span>
                      <p className={`font-sans text-xs font-light leading-relaxed ${idx === 2 ? 'text-slate-300' : 'text-slate-600'}`}>
                        {acc.idealFor}
                      </p>
                    </div>

                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GreeceWildfireInsuranceAndVessels;
