import React from 'react';
import FadeIn from './FadeIn';
import { Calendar, Sun, AlertCircle } from 'lucide-react';

const GreeceCostSeasonality = ({ seasonalityData }) => {
  const { heading, description, seasons = [], months = [] } = seasonalityData || {};

  return (
    <section id="seasonal-pricing" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            SEASONAL PRICING
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {heading || "Greece Travel Costs by Season"}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* Seasons Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {seasons.map((season, idx) => (
            <FadeIn key={idx}>
              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <span className="text-[#c9a15c] font-sans text-xs uppercase tracking-widest font-semibold mb-2 block">
                    {season.name}
                  </span>
                  <h3 className="font-display text-2xl font-light text-navy-950 mb-4">
                    Pricing Tier: <span className="text-[#c9a15c]">{season.cost}</span>
                  </h3>
                  <div className="space-y-3 font-sans text-sm text-slate-600 font-light mb-6">
                    <p><strong>Availability:</strong> {season.availability}</p>
                    <p><strong>Crowds:</strong> {season.crowds}</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-xs text-slate-500 font-light leading-relaxed font-sans">
                    {season.verdict}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Month Value Index timeline */}
        <FadeIn>
          <div className="max-w-4xl mx-auto bg-navy-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 opacity-5">
              <Calendar size={150} />
            </div>

            <h3 className="font-display text-2xl font-light mb-8 text-center flex items-center justify-center gap-3">
              <Sun className="text-[#c9a15c]" />
              Summer Month Value Index
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
              {months.map((m, idx) => (
                <div key={idx} className={`border rounded-2xl p-4 bg-white/5 ${m.color} flex flex-col justify-between h-28`}>
                  <span className="font-display text-lg font-medium block">{m.name}</span>
                  <span className="text-[10px] font-sans uppercase tracking-wider block mt-2 font-semibold opacity-90">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default GreeceCostSeasonality;
