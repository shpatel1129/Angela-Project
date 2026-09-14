import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Check } from 'lucide-react';

const TravelerProfileTabs = ({ title, subtitle, profiles }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  if (!profiles || profiles.length === 0) return null;
  const active = profiles[activeIndex];

  return (
    <section className="w-full py-24 bg-navy-950 relative overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950" />
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <FadeIn className="text-center mb-16">
          {subtitle && (
            <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-4">
              {subtitle}
            </p>
          )}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white">{title}</h2>
          <div className="w-16 h-0.5 bg-white/20 mx-auto mt-6" />
        </FadeIn>

        {/* Tabs / Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 pb-4">
          {profiles.map((profile, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`flex-shrink-0 snap-start px-8 py-4 rounded-full border transition-all whitespace-nowrap font-sans font-semibold text-sm ${
                activeIndex === idx
                  ? 'bg-white text-navy-950 border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                  : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {profile.name}
            </button>
          ))}
        </div>

        {/* Active Profile Content */}
        <FadeIn key={activeIndex}>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 lg:p-10 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center lg:items-stretch">
              
              {/* Image Section */}
              {active.image && (
                <div className="w-full lg:w-5/12">
                  <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                    <img 
                      src={active.image} 
                      alt={active.name} 
                      className="absolute inset-0 w-full h-full object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-400 block mb-2">
                        {active.tagline}
                      </span>
                      <h3 className="font-display text-3xl md:text-4xl text-white">{active.name}</h3>
                    </div>
                  </div>
                </div>
              )}

              {/* Content Section */}
              <div className={`w-full flex flex-col justify-center ${active.image ? 'lg:w-7/12' : ''}`}>
                <p className="font-display text-2xl lg:text-3xl text-ice-50 italic mb-10 leading-relaxed font-light">
                  "{active.quote}"
                </p>

                <div className="space-y-8">
                  {/* Recommendation Box */}
                  <div className="bg-white/10 rounded-2xl p-8 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gold-400"></div>
                    <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-3">
                      Our Recommendation
                    </p>
                    <p className="font-display text-2xl md:text-3xl text-white mb-4">{active.recommendation}</p>
                    <p className="font-sans text-base text-white/80 leading-relaxed">
                      {active.reason}
                    </p>
                  </div>

                  {/* Why Fits */}
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5 ml-1">
                      Why This Experience Fits
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {(active.whyFits || []).map((item, i) => (
                        <li key={i} className="flex items-start gap-4 bg-white/[0.03] rounded-xl p-5 border border-white/5 hover:bg-white/[0.06] transition-colors">
                          <Check className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                          <span className="font-sans text-sm text-white/90 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TravelerProfileTabs;
