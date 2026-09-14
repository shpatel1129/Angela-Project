import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const BalconyValueFormula = ({ data, sectionImage }) => {
  if (!data) return null;

  const scenarioIcons = [TrendingUp, Minus, TrendingDown];
  const scenarioColors = [
    'bg-emerald-50 border-emerald-200/40 text-emerald-900',
    'bg-amber-50 border-amber-200/40 text-amber-900',
    'bg-rose-50 border-rose-200/40 text-rose-900'
  ];

  return (
    <section className="py-28 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left: Image */}
          {sectionImage && (
            <div className="lg:col-span-5 relative order-last lg:order-first">
              <div className="absolute -inset-3 bg-navy-950/5 rounded-[48px] -z-10"></div>
              <div className="rounded-[40px] overflow-hidden aspect-[4/5] shadow-xl border border-slate-200/60">
                <MasterImage src={sectionImage} alt="Luxury cruise veranda" className="w-full h-full object-cover" />
              </div>
            </div>
          )}

          {/* Right: Formula content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-navy-900 uppercase bg-navy-950/5 px-5 py-2 rounded-full">
                Investment Analysis
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-navy-950 leading-tight">
                {data.title}
              </h2>
              <div className="w-12 h-0.5 bg-ts-gold"></div>
              <p className="font-sans text-slate-600 text-base md:text-lg leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Formula Highlight Box */}
            <div className="bg-navy-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-ts-gold/10 rounded-full filter blur-[60px] pointer-events-none"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ts-gold block mb-3 relative z-10">Formula</span>
              <p className="font-display text-lg sm:text-xl text-white relative z-10 leading-relaxed">
                {data.formula}
              </p>
            </div>

            {/* Scenario Cards — Stacked */}
            <div className="space-y-4">
              {data.scenarios.map((s, idx) => {
                const Icon = scenarioIcons[idx];
                return (
                  <div key={idx} className={`flex items-start gap-5 p-6 rounded-2xl border ${scenarioColors[idx]}`}>
                    <div className={`p-2.5 rounded-xl shrink-0 ${
                      idx === 0 ? 'bg-emerald-100 text-emerald-700' :
                      idx === 1 ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold mb-1">{s.condition}</h4>
                      <p className="font-sans text-xs sm:text-sm leading-relaxed opacity-80">{s.recommendation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BalconyValueFormula;
