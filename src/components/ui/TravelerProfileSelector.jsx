import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Check, Minus } from 'lucide-react';

const TravelerProfileSelector = ({ title, subtitle, profiles }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  if (!profiles || profiles.length === 0) return null;
  const active = profiles[activeIndex];

  return (
    <section className="w-full py-20 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 to-navy-950" />
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-14">
          {subtitle && (
            <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-4">
              {subtitle}
            </p>
          )}
          <h2 className="font-display text-4xl md:text-5xl text-white">{title}</h2>
          <div className="w-12 h-0.5 bg-white/30 mx-auto mt-6" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Profile selector buttons */}
          <div className="lg:col-span-4 h-full">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col gap-3 h-full">
              {profiles.map((profile, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left px-5 py-4 rounded-xl border transition-all ${
                    activeIndex === idx
                      ? 'bg-white text-navy-950 border-white shadow-lg'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="font-sans font-semibold text-sm tracking-wide block">
                    {profile.name}
                  </span>
                  <span className={`font-sans text-xs mt-1 block ${activeIndex === idx ? 'text-navy-700' : 'text-white/50'}`}>
                    {profile.tagline}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Active profile content */}
          <div className="lg:col-span-8">
            <FadeIn key={activeIndex}>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 lg:p-10">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-3">
                  Traveler Profile
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-2">{active.name}</h3>
                <p className="font-display text-lg text-ice-100 italic mb-8">"{active.quote}"</p>

                {active.image && (
                  <div className="w-full aspect-video md:aspect-[16/7] mb-8 rounded-xl overflow-hidden border border-white/10 shadow-inner relative group">
                    <img 
                      src={active.image} 
                      alt={active.name} 
                      className="w-full h-full object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Recommendation */}
                  <div className="bg-white/8 border border-white/10 rounded-xl p-6">
                    <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-3">
                      Our Recommendation
                    </p>
                    <p className="font-display text-xl text-white">{active.recommendation}</p>
                    <p className="font-sans text-sm text-white/70 mt-3 leading-relaxed">{active.reason}</p>
                  </div>

                  {/* Why list */}
                  <div className="bg-white/8 border border-white/10 rounded-xl p-6">
                    <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-4">
                      Why It Fits
                    </p>
                    <ul className="space-y-3">
                      {(active.whyFits || []).map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                          <span className="font-sans text-sm text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelerProfileSelector;
