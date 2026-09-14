import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import * as Icons from 'lucide-react';

const ModernCompetitorShowdown = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {items.map((competitor, idx) => (
        <FadeIn key={idx} delay={idx * 0.15} className="h-full">
          <div className="relative h-[450px] lg:h-[500px] rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500">
            
            {/* Background Image */}
            <div className="absolute inset-0">
              {competitor.image ? (
                <MasterImage 
                  src={competitor.image} 
                  alt={competitor.name}
                  priority={true}
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-1000 ease-out"
                />
              ) : (
                <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                  <Icons.Ship className="w-16 h-16 text-slate-700" />
                </div>
              )}
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors duration-500"></div>

            {/* VS Badge */}
            <div className="absolute top-6 right-6 z-20">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-sans text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg flex items-center gap-2 group-hover:bg-ts-gold group-hover:border-ts-gold group-hover:text-navy-950 transition-all duration-300">
                <span className="opacity-70 group-hover:opacity-100">VS</span>
                <span>Avalon</span>
              </div>
            </div>

            {/* Content Area */}
            <div className="absolute bottom-0 left-0 w-full p-8 lg:p-10 z-20 flex flex-col justify-end">
              {/* Decorative Accent */}
              <div className="w-0 h-1 bg-ts-gold mb-6 rounded-full group-hover:w-16 transition-all duration-500 ease-out"></div>
              
              <h3 className="font-display text-3xl lg:text-4xl text-white mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                {competitor.name}
              </h3>
              
              <p className="font-sans text-slate-300 leading-relaxed text-sm lg:text-base opacity-80 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                {competitor.description}
              </p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export default ModernCompetitorShowdown;
