import React, { useState } from 'react';
import { Banknote, BarChart3, Map, Snowflake, Hotel, Users, ArrowRight, CornerDownRight } from 'lucide-react';

const iconMap = {
  banknote: Banknote,
  barChart: BarChart3,
  map: Map,
  snowflake: Snowflake,
  hotel: Hotel,
  users: Users
};

const InclusionsExpertAdvice = ({ data }) => {
  if (!data) return null;

  const { headline, subtitle, intro, tips } = data;
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
              {subtitle}
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 leading-tight">
              {headline}
            </h2>
          </div>
          <div>
            <p className="font-sans text-slate-600 text-base md:text-lg leading-relaxed">
              {intro}
            </p>
          </div>
        </div>

        {/* Dynamic Interactive Cards Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: List of tips titles */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {tips?.map((tip, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                  activeIdx === idx
                    ? 'bg-navy-950 border-navy-950 text-white shadow-lg'
                    : 'bg-slate-50 border-slate-100 text-navy-950 hover:bg-slate-100/70 hover:border-gold-400/30'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-sm font-bold uppercase tracking-widest ${
                    activeIdx === idx ? 'text-gold-400' : 'text-slate-400 group-hover:text-gold-400'
                  }`}>
                    {tip.number}
                  </span>
                  <span className="font-display text-base font-semibold leading-tight">{tip.title}</span>
                </div>
                <span className="shrink-0 ml-2">
                  {activeIdx === idx ? <ArrowRight className="w-5 h-5 text-gold-400" /> : <CornerDownRight className="w-4 h-4 text-slate-450" />}
                </span>
              </button>
            ))}
          </div>

          {/* Right panel: Active tip content with premium styling */}
          <div className="lg:col-span-7 bg-slate-900 text-white rounded-[32px] p-8 md:p-12 border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between">
            {/* Decorative layout circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full filter blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="text-gold-400">
                  {(() => {
                    const IconComponent = iconMap[tips?.[activeIdx]?.icon] || Map;
                    return <IconComponent className="w-8 h-8" />;
                  })()}
                </span>
                <span className="text-xs font-bold tracking-[0.2em] text-gold-400 uppercase">
                  Tip {tips?.[activeIdx]?.number} Details
                </span>
              </div>
              
              <h3 className="font-display text-3xl md:text-4xl text-white leading-tight">
                {tips?.[activeIdx]?.title}
              </h3>
              
              <p className="font-sans text-slate-300 text-base md:text-lg leading-relaxed">
                {tips?.[activeIdx]?.body}
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10 text-slate-400 text-xs flex justify-between items-center relative z-10">
              <span>Trips & Ships Luxury Travel Exclusive Advice</span>
              <span className="text-gold-400 font-bold uppercase tracking-widest">CTC Planning Standard</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InclusionsExpertAdvice;
