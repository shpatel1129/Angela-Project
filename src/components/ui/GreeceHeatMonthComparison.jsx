import React from 'react';
import FadeIn from './FadeIn';
import { Check, Flame, Users, Calendar } from 'lucide-react';

const GreeceHeatMonthComparison = ({ comparisonData }) => {
  const { heading, description, months = [] } = comparisonData || {};

  // Gradient schemes for July, August, September comparison
  const cardStyles = [
    {
      gradient: "from-orange-500/20 to-red-500/10 border-orange-500/20",
      accent: "text-orange-600 bg-orange-50",
      badge: "border-orange-200",
      iconColor: "text-orange-500"
    },
    {
      gradient: "from-red-600/20 to-rose-600/10 border-red-500/20",
      accent: "text-red-600 bg-red-50",
      badge: "border-red-200",
      iconColor: "text-red-500"
    },
    {
      gradient: "from-amber-500/20 to-yellow-500/10 border-amber-500/20",
      accent: "text-[#c9a15c] bg-[#c9a15c]/10",
      badge: "border-[#c9a15c]/20",
      iconColor: "text-[#c9a15c]"
    }
  ];

  return (
    <section id="month-comparison" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            MONTH COMPARISON
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {heading || "July vs. August vs. September in Greece"}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {months.map((m, idx) => {
            const style = cardStyles[idx % cardStyles.length];
            return (
              <FadeIn key={idx}>
                <div className={`h-full bg-white border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between`}>
                  
                  {/* Subtle top background gradient */}
                  <div className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${style.gradient} pointer-events-none opacity-30`} />

                  <div className="relative z-10 flex-grow">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${style.badge} border ${style.accent} uppercase tracking-wider mb-2`}>
                          {m.name}
                        </span>
                        <h3 className="font-display text-2xl font-light text-navy-950 mt-1">
                          {m.theme}
                        </h3>
                      </div>
                      <Flame className={style.iconColor} size={28} />
                    </div>

                    {/* Ideal For */}
                    <div className="space-y-4 mb-8">
                      <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-navy-950 mb-2 flex items-center gap-2">
                        <Users size={14} className="text-slate-400" />
                        Ideal For
                      </h4>
                      <ul className="space-y-3 font-sans text-sm text-slate-600 font-light">
                        {m.idealFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Check size={16} className={`${style.iconColor} shrink-0 mt-0.5`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Challenges Section */}
                  <div className="relative z-10 pt-6 border-t border-slate-100 mt-6 bg-slate-50/50 -mx-8 -mb-8 p-8 rounded-b-3xl">
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-navy-950 mb-2 flex items-center gap-2">
                      <Calendar size={14} className="text-slate-400" />
                      Key Planning Challenges
                    </h4>
                    <p className="font-sans text-xs text-slate-500 font-light leading-relaxed">
                      {m.challenges}
                    </p>
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

export default GreeceHeatMonthComparison;
