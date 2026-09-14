import React, { useState } from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { Check, Star, Anchor } from 'lucide-react';

const CabinComparisonGallery = ({ title, subtitle, items, expertRecommendation }) => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to middle (Panorama Suite) if exists

  if (!items || items.length === 0) return null;

  return (
    <section className="w-full py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center mb-16">
          {subtitle && (
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-4 block">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              {title}
            </h2>
          )}
        </FadeIn>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`px-8 py-4 rounded-full font-sans text-sm font-bold tracking-wider uppercase transition-all duration-300 border ${
                activeIndex === idx 
                  ? 'bg-gold-500 border-gold-500 text-navy-950 shadow-[0_0_20px_rgba(212,175,55,0.3)] scale-105' 
                  : 'bg-navy-900/50 border-navy-700 text-slate-300 hover:border-gold-500/50 hover:text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Active Cabin Details */}
        <div className="relative">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ease-in-out absolute inset-0 ${
                activeIndex === idx ? 'opacity-100 z-10 relative translate-y-0' : 'opacity-0 z-0 pointer-events-none translate-y-8 absolute'
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                  <div className="mb-6 inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2">
                    <span className="font-sans text-xs text-gold-400 uppercase tracking-widest font-bold">
                      Average Pricing
                    </span>
                    <span className="mx-3 text-white/30">|</span>
                    <span className="font-display text-xl text-white">
                      {item.price}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-4xl lg:text-5xl text-white mb-6">
                    {item.name}
                  </h3>
                  
                  <p className="font-sans text-lg text-slate-300 leading-relaxed mb-10 font-light">
                    {item.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-sans text-xs font-bold text-gold-400 uppercase tracking-[0.2em] mb-6">
                      Signature Features
                    </h4>
                    {item.features && item.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors">
                          <Check className="w-4 h-4 text-gold-400 group-hover:text-navy-950 transition-colors" />
                        </div>
                        <span className="font-sans text-sm text-slate-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Placeholder Frame */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group bg-navy-900">
                    <MasterImage 
                      src={item.image || `cabin_placeholder_${idx}`}
                      alt={item.name}
                      asBackground={true}
                      className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <Anchor className="w-5 h-5 text-gold-400" />
                      <span className="font-display text-xl text-white drop-shadow-md">Avalon Suite Ships</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Expert Recommendation Box */}
        {expertRecommendation && (
          <FadeIn delay={0.4} className="mt-24 lg:mt-32 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20 rounded-3xl p-8 lg:p-12 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[50px]"></div>
              
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-start relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gold-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Star className="w-6 h-6 text-navy-950 fill-navy-950" />
                </div>
                <div>
                  <h4 className="font-display text-2xl text-white mb-4">
                    {expertRecommendation.title}
                  </h4>
                  <p className="font-sans text-slate-300 leading-relaxed text-sm lg:text-base italic">
                    "{expertRecommendation.content}"
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold-400">
                      Trips & Ships Luxury Travel
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
};

export default CabinComparisonGallery;
