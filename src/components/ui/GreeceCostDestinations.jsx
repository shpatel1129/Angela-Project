import React from 'react';
import FadeIn from './FadeIn';
import { Landmark, TrendingUp, HelpCircle } from 'lucide-react';

const GreeceCostDestinations = ({ destinationData, images = [] }) => {
  const { heading, description, destinations = [] } = destinationData || {};

  return (
    <section id="destination-cost-index" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            ISLAND INDEX
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {heading || "Greece Destination Cost Comparison"}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* 2x3 Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((d, idx) => {
            const img = images[idx] || null;

            return (
              <FadeIn key={idx}>
                <div className="group h-[480px] relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-navy-950 flex flex-col justify-end p-8 text-white">
                  
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    {img ? (
                      <img 
                        src={img} 
                        alt={d.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-900" />
                    )}
                    {/* Editorial Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 space-y-4">
                    
                    {/* Header */}
                    <div>
                      <span className="text-xs font-sans font-bold tracking-widest text-[#c9a15c] uppercase mb-1 block">
                        {d.tag}
                      </span>
                      <h3 className="font-display text-3xl font-light">
                        {d.name}
                      </h3>
                    </div>

                    {/* Relative pricing badges */}
                    <div className="flex flex-wrap gap-2.5 pt-2">
                      <span className="bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-xs font-sans font-light flex items-center gap-1.5">
                        <TrendingUp size={12} className="text-[#c9a15c]" />
                        Cost Tier: <strong className="font-semibold">{d.costLevel}</strong>
                      </span>
                      <span className="bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-xs font-sans font-light flex items-center gap-1.5">
                        <Landmark size={12} className="text-[#c9a15c]" />
                        Driver: {d.factor}
                      </span>
                    </div>

                    {/* Hover Tip Panel */}
                    <div className="pt-4 border-t border-white/10 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#c9a15c] flex items-center gap-1.5 mb-1.5">
                        <HelpCircle size={12} />
                        Planning Strategy Tip
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-light font-sans">
                        {d.tip}
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

export default GreeceCostDestinations;
