import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { ChevronRight, Anchor, Navigation, Users, Utensils, Waves, MapPin, Wine, Calendar, Clock, Ship, Sun, Moon, Sparkles, Heart, Compass } from 'lucide-react';

const icons = [Anchor, Navigation, Users, Utensils, Waves, MapPin, Wine, Calendar, Clock, Ship, Sun, Moon, Sparkles, Heart, Compass];

const FifteenPointComparisonMatrix = ({ title, subtitle, points }) => {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section className="w-full py-24 bg-ice-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-navy-600 font-semibold px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>Detailed Comparison</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-navy-950 mb-6">
              {title}
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, idx) => {
            const Icon = icons[idx % icons.length];
            const isActive = activeIdx === idx;
            
            return (
              <FadeIn key={idx} delay={idx * 50}>
                <div 
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full ${
                    isActive 
                      ? 'border-gold-400 shadow-lg shadow-gold-400/10 scale-[1.02]' 
                      : 'border-slate-200 hover:border-gold-400/50 hover:shadow-md'
                  }`}
                  onClick={() => setActiveIdx(isActive ? null : idx)}
                >
                  <div className="p-6 md:p-8 flex-grow flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                        isActive ? 'bg-navy-950 text-gold-400' : 'bg-slate-50 text-navy-900'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-display text-slate-100 font-bold select-none">
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-display text-navy-950 mb-3">
                      {point.title}
                    </h3>
                    
                    <div className={`text-sm text-slate-600 leading-relaxed transition-all duration-300 overflow-hidden ${
                      isActive ? 'max-h-[500px] opacity-100' : 'max-h-12 opacity-80'
                    }`}>
                      <p className={isActive ? '' : 'line-clamp-2'}>
                        {point.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-xs font-semibold uppercase text-gold-600 tracking-wider">
                      {isActive ? 'Close Details' : 'Read More'}
                    </span>
                    <ChevronRight className={`w-4 h-4 text-gold-600 transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
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

export default FifteenPointComparisonMatrix;
