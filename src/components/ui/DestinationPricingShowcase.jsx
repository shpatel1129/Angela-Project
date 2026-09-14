import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { MapPin, Info } from 'lucide-react';

const DestinationPricingShowcase = ({ title, subtitle, description, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="w-full py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        {/* Header section */}
        <FadeIn className="text-center max-w-4xl mx-auto mb-20">
          {subtitle && (
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-6 block">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-8 leading-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="font-sans text-lg text-slate-600 leading-relaxed mx-auto">
              {description}
            </p>
          )}
          <div className="w-24 h-0.5 bg-gold-200 mx-auto mt-10"></div>
        </FadeIn>

        {/* Alternating River Rows */}
        <div className="flex flex-col gap-16 lg:gap-32">
          {items.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <FadeIn 
                key={idx} 
                direction={isEven ? "right" : "left"}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
              >
                {/* Image Column */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border border-slate-200/50">
                    <MasterImage 
                      src={item.image || `river_placeholder_${idx}`}
                      alt={item.name}
                      asBackground={true}
                      className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Floating Info Badge on Image */}
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gold-600" />
                        <span className="font-sans text-xs font-bold text-navy-900 tracking-wider uppercase">
                          {item.nights}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="font-display text-4xl lg:text-5xl text-navy-950 mb-6">
                      {item.name}
                    </h3>
                    <p className="font-sans text-lg text-slate-600 leading-relaxed mb-8">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mb-8">
                      <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                        Key Highlights
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, hIdx) => (
                          <span key={hIdx} className="bg-ice-50 border border-slate-200 text-navy-800 text-xs px-3 py-1.5 rounded-full font-medium">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pricing Breakdown Box */}
                  <div className="bg-navy-950 rounded-2xl p-6 lg:p-8 relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-bl-full -z-0"></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4 pb-4 border-b border-white/10">
                        <div>
                          <span className="font-sans text-gold-400 text-xs font-bold uppercase tracking-widest block mb-1">
                            Average Cost
                          </span>
                          <span className="font-display text-3xl text-white">
                            {item.price}
                          </span>
                        </div>
                        <Info className="w-6 h-6 text-white/30" />
                      </div>
                      <p className="font-sans text-sm text-slate-300 leading-relaxed font-light">
                        {item.pricingDetails}
                      </p>
                    </div>
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

export default DestinationPricingShowcase;
