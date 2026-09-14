import React from 'react';
import FadeIn from './FadeIn';
import { Calendar, Wind, Thermometer, ShieldCheck, Sparkles } from 'lucide-react';

const GreeceWildfireBestMonths = ({ monthsData }) => {
  const {
    title = "Best Months to Visit Greece If Concerned About Wildfires",
    subtitle = "A month-by-month analysis of temperatures, wind patterns, and wildfire probabilities.",
    months = []
  } = monthsData || {};

  return (
    <section id="best-months-wildfires" className="py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            SEASONAL TIMING & CLIMATE
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {title}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed text-lg">
            {subtitle}
          </p>
        </div>

        {/* 6 Month Comparison Cards Grid (2x3 or 3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {months.map((month, idx) => (
            <FadeIn key={idx}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  
                  {/* Top Bar: Month Name & Badge */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <span className="p-2.5 bg-ice-50 text-navy-950 rounded-xl border border-border-light">
                        <Calendar size={18} />
                      </span>
                      <h3 className="font-display text-2xl text-navy-950 font-normal">
                        {month.name}
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-sans font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                      {month.badge}
                    </span>
                  </div>

                  {/* Key Metrics */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-xs font-sans text-slate-600">
                      <div className="flex items-center gap-2">
                        <Thermometer size={15} className="text-amber-500" />
                        <span>Average Temp</span>
                      </div>
                      <span className="font-medium text-navy-950">{month.temp}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-sans text-slate-600">
                      <div className="flex items-center gap-2">
                        <Wind size={15} className="text-blue-500" />
                        <span>Wind Patterns</span>
                      </div>
                      <span className="font-medium text-navy-950">{month.wind}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-sans">
                      <span className="font-bold text-navy-950 block mb-0.5">Wildfire Risk Index</span>
                      <span className="text-slate-600 font-light">{month.fireRisk}</span>
                    </div>
                  </div>
                </div>

                {/* Verdict Box */}
                <div className="p-4 rounded-2xl bg-[#c9a15c]/10 border border-[#c9a15c]/30 mt-auto">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#c9a15c] block mb-1">
                    Expert Recommendation
                  </span>
                  <p className="text-xs font-sans text-navy-950 font-light leading-relaxed">
                    {month.verdict}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Shoulder Season Advantage Callout */}
        <FadeIn>
          <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-[#c9a15c] text-xs font-sans font-bold uppercase tracking-wider mb-2">
                <Sparkles size={16} />
                <span>The Shoulder Season Secret</span>
              </div>
              <h3 className="font-display text-2xl text-white font-normal mb-2">
                Why May, June & September Offer Peak Luxury
              </h3>
              <p className="font-sans text-xs md:text-sm text-slate-300 font-light leading-relaxed">
                Visiting outside the peak late-July and August window gives you warm swimmable waters, uncrowded archaeological wonders, tranquil boutique hotels, and virtually zero wildfire concerns.
              </p>
            </div>
            <a
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#c9a15c] hover:bg-[#b58e4b] text-navy-950 font-sans text-xs font-bold uppercase tracking-wider transition-colors flex-shrink-0 shadow-lg"
            >
              Plan Shoulder Season Trip
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default GreeceWildfireBestMonths;
