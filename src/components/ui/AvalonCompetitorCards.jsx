import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const AvalonCompetitorCards = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((competitor, idx) => (
        <FadeIn key={idx} delay={idx * 0.15} className="h-full">
          <div className="bg-navy-900 rounded-3xl overflow-hidden border border-navy-800 shadow-2xl h-full flex flex-col group hover:-translate-y-1 transition-transform duration-500">
            {/* Image Header */}
            <div className="h-64 relative overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 bg-navy-950/30 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              {competitor.image ? (
                <MasterImage 
                  src={competitor.image} 
                  alt={competitor.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
              ) : (
                <div className="w-full h-full bg-navy-800 flex items-center justify-center">
                  <span className="font-display text-navy-600 text-xl">{competitor.name}</span>
                </div>
              )}
              
              {/* VS Badge */}
              <div className="absolute top-6 right-6 z-20">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-sans text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <span className="text-ts-gold">VS</span>
                  <span>Avalon</span>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 lg:p-10 flex flex-col flex-grow relative">
              {/* Decorative Accent */}
              <div className="w-12 h-1 bg-ts-gold mb-6 rounded-full"></div>
              
              <h3 className="font-display text-3xl lg:text-4xl text-white mb-6">
                {competitor.name}
              </h3>
              
              <p className="font-sans text-slate-300 leading-relaxed text-base lg:text-lg flex-grow">
                {competitor.description}
              </p>
              
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export default AvalonCompetitorCards;
