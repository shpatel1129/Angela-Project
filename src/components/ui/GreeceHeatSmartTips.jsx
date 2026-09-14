import React from 'react';
import FadeIn from './FadeIn';
import { 
  Clock, 
  Sun, 
  Waves, 
  Home, 
  Utensils, 
  Plane, 
  Car, 
  Sparkles, 
  Wind, 
  Compass,
  ArrowRight
} from 'lucide-react';

const GreeceHeatSmartTips = ({ tipsData }) => {
  const { heading, tips = [], schedule = { title: "", items: [] } } = tipsData || {};

  // 10 Icons corresponding to the 10 rules
  const tipIcons = [
    Compass,
    Sun,
    Waves,
    Home,
    Utensils,
    Plane,
    Car,
    Sparkles,
    Wind,
    Clock
  ];

  return (
    <section id="heat-smart-tips" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            STRATEGY & TIPS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {heading || "Heat-Smart Luxury Rules"}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Avoid summer fatigue with our carefully tested strategies designed specifically for luxury travel in July and August.
          </p>
        </div>

        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Numbered Timeline */}
          <div className="lg:col-span-7 relative pl-8 border-l border-slate-100 space-y-12">
            {tips.map((tip, idx) => {
              const IconComponent = tipIcons[idx % tipIcons.length];
              return (
                <FadeIn key={idx}>
                  <div className="relative group">
                    {/* Timeline Node Icon */}
                    <div className="absolute -left-[57px] top-0 w-12 h-12 rounded-full bg-white border border-slate-150 shadow-md flex items-center justify-center text-navy-950 group-hover:border-[#c9a15c] group-hover:text-[#c9a15c] transition-all duration-300">
                      <IconComponent size={18} />
                    </div>

                    {/* Number Badge */}
                    <span className="text-[10px] font-sans font-bold tracking-wider text-[#c9a15c] bg-[#c9a15c]/5 px-2.5 py-1 rounded-md border border-[#c9a15c]/10 uppercase mb-2 inline-block">
                      Rule {idx + 1}
                    </span>

                    {/* Title & Description */}
                    <h3 className="font-display text-2xl font-light text-navy-950 mb-2">
                      {tip.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-500 font-light leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Right Column: Daily Rhythm Schedule Widget */}
          <div className="lg:col-span-5 sticky top-8">
            <FadeIn>
              <div className="bg-navy-950 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 opacity-5">
                  <Clock size={200} />
                </div>

                <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-2 block">
                  DAILY SCHEDULE
                </span>
                <h3 className="font-display text-3xl font-light text-white mb-6 border-b border-white/10 pb-4">
                  {schedule.title || "The Ideal Rhythm"}
                </h3>

                <div className="space-y-4">
                  {schedule.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                    >
                      <span className="font-sans text-xs font-bold text-[#c9a15c] bg-[#c9a15c]/10 px-2.5 py-1 rounded-lg shrink-0">
                        {item.time}
                      </span>
                      <div className="space-y-1">
                        <p className="font-sans text-xs font-light text-slate-200">
                          {item.activity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Closing visual tag */}
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <span className="font-sans text-xs text-slate-400 font-light flex items-center justify-center gap-1">
                    Adapts dynamically to microclimates <ArrowRight size={12} className="text-[#c9a15c]" />
                  </span>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GreeceHeatSmartTips;
