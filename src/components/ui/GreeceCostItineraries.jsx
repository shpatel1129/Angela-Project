import React from 'react';
import FadeIn from './FadeIn';
import { Calendar, Compass, Star } from 'lucide-react';

const GreeceCostItineraries = ({ budgetTiersData }) => {
  const { heading, description, tiers = [] } = budgetTiersData || {};

  const themes = [
    {
      badge: "bg-sky-50 text-sky-600 border-sky-100",
      accent: "border-sky-500",
      bulletColor: "bg-sky-500"
    },
    {
      badge: "bg-[#c9a15c]/10 text-[#c9a15c] border-[#c9a15c]/20",
      accent: "border-[#c9a15c]",
      bulletColor: "bg-[#c9a15c]"
    },
    {
      badge: "bg-emerald-50 text-emerald-600 border-emerald-100",
      accent: "border-emerald-500",
      bulletColor: "bg-emerald-500"
    },
    {
      badge: "bg-purple-50 text-purple-600 border-purple-100",
      accent: "border-purple-500",
      bulletColor: "bg-purple-500"
    }
  ];

  return (
    <section id="budget-tiers" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            BUDGET BRACKETS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {heading || "Greece Budget Bracket Framework"}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* Grid Card Layout (2x2 or 4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, idx) => {
            const theme = themes[idx % themes.length];
            return (
              <FadeIn key={idx}>
                <div className={`h-full bg-white border-t-4 ${theme.accent} rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}>
                  
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-1">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider border ${theme.badge}`}>
                        {tier.title}
                      </span>
                      <Star size={16} className="text-slate-300" />
                    </div>
                    <h3 className="font-display text-xl font-light text-navy-950">
                      {tier.subtitle}
                    </h3>

                    <p className="text-xs font-sans font-semibold text-slate-400 uppercase tracking-wider">
                      Focus: <span className="text-navy-950 font-medium">{tier.focus}</span>
                    </p>

                    <p className="font-sans text-sm text-slate-500 font-light leading-relaxed pt-2 border-t border-slate-100">
                      {tier.inclusions}
                    </p>
                  </div>

                  {/* Footer style */}
                  <div className="pt-4 border-t border-slate-100 mt-6 flex justify-between items-center text-slate-400 text-xs font-sans font-light">
                    <span className="flex items-center gap-1">
                      <Compass size={12} className="text-[#c9a15c]" />
                      Itinerary Tier
                    </span>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GreeceCostItineraries;
