import React from 'react';
import FadeIn from './FadeIn';
import { Flame, ShieldAlert, CheckCircle2, AlertTriangle, HelpCircle, ArrowRight } from 'lucide-react';

const GreeceWildfireQuickAnswer = ({ verdictData }) => {
  const {
    badge = "EXECUTIVE WILDFIRE SUMMARY",
    title = "The Short Answer: Awareness, Not Panic",
    subtitle = "A wildfire in one region does not make the entire Greek archipelago unsafe.",
    openingHook,
    coreQuestion,
    riskCategories = [],
    whenToWorryVsRelax = []
  } = verdictData || {};

  const colorMap = [
    { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800', badge: 'bg-emerald-600' },
    { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', badge: 'bg-blue-600' },
    { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', badge: 'bg-amber-600' },
    { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800', badge: 'bg-orange-600' },
    { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', badge: 'bg-red-600' }
  ];

  return (
    <section id="wildfire-quick-verdict" className="py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            {badge}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {title}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed text-lg">
            {subtitle}
          </p>
        </div>

        {/* Opening Editorial Hook Box */}
        <FadeIn>
          <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-12 shadow-xl mb-16 relative overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 opacity-5 pointer-events-none">
              <Flame size={260} />
            </div>

            <div className="relative z-10 max-w-4xl">
              <p className="font-sans text-base md:text-lg text-slate-200 font-light leading-relaxed mb-8">
                {openingHook}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-xs font-sans uppercase font-bold text-slate-400 block mb-1">Generic Concern</span>
                  <span className="font-display text-base text-slate-400 line-through">“{coreQuestion?.generic}”</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#c9a15c]/15 border border-[#c9a15c]/30">
                  <span className="text-xs font-sans uppercase font-bold text-[#c9a15c] block mb-1">Informed Luxury Perspective</span>
                  <span className="font-display text-base text-white font-normal">“{coreQuestion?.strategic}”</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 5-Tier Civil Protection Risk Scale */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-1 block">
              OFFICIAL SYSTEM
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-light text-navy-950">
              Greece Civil Protection 5-Category Fire Risk Index
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {riskCategories.map((cat, idx) => {
              const theme = colorMap[idx] || colorMap[0];
              return (
                <FadeIn key={idx}>
                  <div className={`p-5 rounded-2xl border ${theme.bg} ${theme.border} h-full flex flex-col justify-between`}>
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-500">
                          {cat.level}
                        </span>
                        <span className={`w-2.5 h-2.5 rounded-full ${theme.badge}`} />
                      </div>
                      <h4 className={`font-display text-base font-semibold mb-2 ${theme.text}`}>
                        {cat.name}
                      </h4>
                      <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* When to Relax vs When to Pay Attention */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whenToWorryVsRelax.map((group, gIdx) => (
            <FadeIn key={gIdx}>
              <div className={`p-8 rounded-3xl border h-full flex flex-col justify-between ${
                gIdx === 0 
                  ? 'bg-white border-slate-200/80 shadow-md' 
                  : 'bg-amber-50/30 border-amber-200/80 shadow-md'
              }`}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    {gIdx === 0 ? (
                      <CheckCircle2 size={24} className="text-emerald-600" />
                    ) : (
                      <AlertTriangle size={24} className="text-amber-600" />
                    )}
                    <h4 className="font-display text-2xl font-normal text-navy-950">
                      {group.type}
                    </h4>
                  </div>

                  <ul className="space-y-3">
                    {group.points?.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs font-sans text-slate-700 font-light leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${
                          gIdx === 0 ? 'bg-emerald-500' : 'bg-amber-500'
                        }`} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GreeceWildfireQuickAnswer;
