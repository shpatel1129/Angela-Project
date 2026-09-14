import React from 'react';
import FadeIn from './FadeIn';
import { ShieldCheck, AlertTriangle, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

const GreeceSafetyQuickAnswer = ({ verdictData }) => {
  const { 
    badge = "EXECUTIVE SAFETY SUMMARY",
    title = "Is Greece Safe to Visit Right Now?",
    subtitle = "The short answer is yes — Greece is generally safe for normal tourism.",
    status,
    keyDistinction,
    practicalConcerns = [],
    luxuryAdvantage
  } = verdictData || {};

  return (
    <section id="safety-verdict" className="py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
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

        {/* Top Feature Split: Official Status vs The Luxury Distinction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Official Status Card */}
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="h-full bg-navy-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 opacity-5">
                  <ShieldCheck size={220} />
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 bg-[#c9a15c]/20 text-[#c9a15c] rounded-2xl border border-[#c9a15c]/30">
                      <ShieldCheck size={28} />
                    </span>
                    <div>
                      <span className="text-xs font-sans font-semibold tracking-wider text-[#c9a15c] uppercase">Official Advisory</span>
                      <h3 className="font-display text-2xl font-normal text-white">{status?.rating || "Level 1: Exercise Normal Precautions"}</h3>
                    </div>
                  </div>

                  <p className="text-sm font-sans text-slate-300 font-light leading-relaxed mb-6">
                    {status?.summary || "Greece holds the lowest travel advisory classification issued by the U.S. Department of State and Australia's Smartraveller."}
                  </p>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-sans text-slate-400">
                    <span className="font-semibold text-white block mb-1">Key Agencies:</span>
                    {status?.agency || "U.S. Department of State, UK FCDO & Australian Smartraveller"}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-sans text-[#c9a15c] font-medium">
                  <CheckCircle2 size={16} />
                  <span>Standard travel precautions apply nationwide</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Key Distinction Card */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="h-full bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xl flex flex-col justify-between relative">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 bg-ice-50 text-navy-950 rounded-2xl border border-border-light">
                      <Compass size={28} />
                    </span>
                    <div>
                      <span className="text-xs font-sans font-bold tracking-wider text-slate-400 uppercase">The Luxury Perspective</span>
                      <h3 className="font-display text-2xl font-normal text-navy-950">{keyDistinction?.question || "A Better Question to Ask"}</h3>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-sans uppercase font-bold text-slate-400 block mb-1">Generic Question</span>
                        <span className="font-display text-lg text-slate-500 line-through">“{keyDistinction?.from || "Is Greece safe?"}”</span>
                      </div>
                      <ArrowRight className="text-slate-300 mx-2 flex-shrink-0" size={20} />
                    </div>

                    <div className="p-5 rounded-2xl bg-[#c9a15c]/10 border border-[#c9a15c]/30">
                      <span className="text-xs font-sans uppercase font-bold text-[#c9a15c] block mb-1">Expert Luxury Strategy</span>
                      <span className="font-display text-lg md:text-xl text-navy-950 font-normal">
                        “{keyDistinction?.to || "How can I plan a Greek vacation that is safe, comfortable, flexible and professionally managed?"}”
                      </span>
                    </div>
                  </div>
                </div>

                <p className="font-sans text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-6">
                  {luxuryAdvantage}
                </p>
              </div>
            </FadeIn>
          </div>

        </div>

        {/* Practical Concerns Grid */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-2 block">
              REALISTIC RISK ASSESSMENT
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-light text-navy-950">
              The 7 Practical Considerations for Travelers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalConcerns.map((item, idx) => (
              <FadeIn key={item.id || idx}>
                <div className={`p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between ${idx === practicalConcerns.length - 1 && practicalConcerns.length % 3 !== 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-full bg-slate-100 text-navy-950 font-sans text-xs font-bold flex items-center justify-center">
                        0{item.id}
                      </span>
                      <span className="text-[11px] font-sans font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        {item.severity}
                      </span>
                    </div>

                    <h4 className="font-display text-lg font-medium text-navy-950 mb-2">
                      {item.title}
                    </h4>

                    <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GreeceSafetyQuickAnswer;
