import React, { useState } from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { Ship, Star, Heart, UtensilsCrossed, Compass, Clock, Sparkles } from 'lucide-react';

const iconMap = {
  Ship, Star, Heart, UtensilsCrossed, Compass, Clock, Sparkles
};

const HighlightsSplit = ({ title, items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items || items.length === 0) return null;

  // Protect against out-of-bounds index during HMR or prop changes
  const safeActiveIndex = activeIndex >= items.length ? 0 : activeIndex;
  const activeItem = items[safeActiveIndex];
  
  const isCompact = items.length <= 2;
  const brandName = activeItem?.title 
    ? (activeItem.title.includes(':') ? activeItem.title.split(':')[0] : activeItem.title).toUpperCase()
    : '';

  return (
    <section className="w-full py-16 bg-ice-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">{title}</h2>
          <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-6"></div>
        </FadeIn>

        {isCompact ? (
          /* ── Compact layout for <=2 items: horizontal tabs + content below ── */
          <div className="flex flex-col gap-8">
            {/* Horizontal Tabs */}
            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto">
                {items.map((item, idx) => {
                  const IconComponent = item.icon && iconMap[item.icon] ? iconMap[item.icon] : Star;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`flex-1 text-left px-6 py-5 rounded-xl border transition-all flex items-center gap-4 group ${
                        activeIndex === idx
                          ? 'bg-white border-navy-200 shadow-md'
                          : 'bg-white/60 border-slate-100 hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        activeIndex === idx ? 'bg-navy-800 text-white' : 'bg-ice-50 text-navy-600 group-hover:bg-ice-100'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className={`font-sans text-base ${activeIndex === idx ? 'text-navy-900 font-semibold' : 'text-slate-600'}`}>
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </FadeIn>

            {/* Content Below */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <FadeIn>
                <div className="bg-navy-800 text-white rounded-2xl p-10 lg:p-12 shadow-lg relative overflow-hidden h-full flex items-center">
                  <div className="absolute top-6 left-8 opacity-30">
                    <Star className="w-10 h-10" />
                  </div>
                  <div className="relative z-10 pt-4">
                    <p className="font-display text-xl lg:text-2xl leading-relaxed italic text-ice-50">
                      {activeItem.description}
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="rounded-2xl overflow-hidden h-64 lg:h-full min-h-[260px] relative bg-slate-200">
                  {activeItem.image ? (
                    <MasterImage src={activeItem.image} alt={activeItem.title} className="w-full h-full object-cover absolute inset-0 z-0" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 font-sans tracking-widest text-xs uppercase z-0 text-center px-4 border-2 border-dashed border-slate-300">
                      <span className="font-bold text-slate-400 tracking-[0.2em] mb-1">IMAGE PLACEHOLDER</span>
                      <span className="font-display text-base text-slate-600">{activeItem.title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent z-10"></div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-navy-950/80 backdrop-blur text-white text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded">
                      {brandName}
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        ) : (
          /* ── Standard balanced layout for 3+ items (Equal Heights) ── */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Interactive List that expands to full height */}
            <FadeIn direction="right" className="lg:col-span-5 flex flex-col justify-between">
              <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col flex-1 justify-between">
                {items.map((item, idx) => {
                  const IconComponent = item.icon && iconMap[item.icon] ? iconMap[item.icon] : Star;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-full flex-1 text-left px-6 sm:px-8 py-5 sm:py-6 border-b border-slate-100 last:border-b-0 transition-all flex items-center gap-5 group ${
                        activeIndex === idx ? 'bg-ice-50/90' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        activeIndex === idx ? 'bg-navy-950 text-gold-400 shadow-sm' : 'bg-ice-50 text-navy-600 group-hover:bg-ice-100'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className={`font-sans text-base sm:text-lg transition-colors ${activeIndex === idx ? 'text-navy-950 font-bold' : 'text-slate-600 font-medium'}`}>
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </FadeIn>

            {/* Right Column: Unified Luxury Card with Background Overlay */}
            <FadeIn direction="left" className="lg:col-span-7 flex flex-col justify-between">
              <div className="bg-navy-950 text-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[460px] h-full border border-white/10">
                {/* Background Image Blended inside right card */}
                {activeItem.image ? (
                  <MasterImage src={activeItem.image} alt={activeItem.title || 'Highlight Image'} className="w-full h-full object-cover absolute inset-0 z-0 opacity-60 transition-all duration-700 scale-105" />
                ) : (
                  <div className="absolute inset-0 bg-navy-900 z-0 flex items-center justify-end p-8 flex-col opacity-50 border border-dashed border-white/20">
                    <span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase">IMAGE PLACEHOLDER</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-navy-950/30 z-10" />

                {/* Top Badge & Season Title */}
                <div className="relative z-20 mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-gold-400/20 text-gold-400 border border-gold-400/40 text-[10px] font-sans font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded inline-block">
                      {brandName} FEATURED SEASON
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-white font-normal">
                    {activeItem.title}
                  </h3>
                </div>

                {/* Center Description & Bullet Points */}
                <div className="relative z-20 my-auto py-4">
                  <p className="font-display text-xl sm:text-2xl lg:text-3xl leading-relaxed italic text-ice-100 mb-6">
                    "{activeItem.description}"
                  </p>
                  {activeItem.bulletPoints && activeItem.bulletPoints.length > 0 && (
                    <ul className="space-y-2 font-sans text-sm sm:text-base text-white/90 bg-black/30 backdrop-blur-md p-4 rounded-xl border border-white/10">
                      {activeItem.bulletPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Bottom Signature Bar */}
                <div className="pt-6 mt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 relative z-20 text-xs font-sans">
                  <span className="text-gold-400 uppercase tracking-widest font-bold">Signature Season Experience</span>
                  <span className="text-ice-300 font-medium">Boutique Luxury River Cruising</span>
                </div>
              </div>
            </FadeIn>
          </div>
        )}
      </div>
    </section>
  );
};

export default HighlightsSplit;
