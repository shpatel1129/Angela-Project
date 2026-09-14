import React from 'react';
import { Quote } from 'lucide-react';
import FadeIn from './FadeIn';

const ExpertInterlude = ({ text }) => {
  if (!text) return null;

  return (
    <div className="bg-navy-900 py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
      {/* Subtle Background Pattern/Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-ts-gold/5 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <Quote className="w-8 h-8 md:w-10 md:h-10 text-ts-gold/40 mx-auto mb-6" />
          <p className="font-display text-xl md:text-3xl text-ice-50 leading-relaxed italic drop-shadow-sm">
            "{text}"
          </p>
          <div className="flex items-center justify-center mt-8 gap-4">
            <div className="h-[1px] w-12 bg-ts-gold/30"></div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-ts-gold">Our Expert Take</span>
            <div className="h-[1px] w-12 bg-ts-gold/30"></div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default ExpertInterlude;
