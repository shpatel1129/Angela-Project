import React from 'react';
import FadeIn from './FadeIn';
import { Camera, Landmark, Wine, Gem, Bike, Heart, Compass, Star } from 'lucide-react';

const iconMap = {
  Camera: Camera,
  Landmark: Landmark,
  Wine: Wine,
  Gem: Gem,
  Bike: Bike,
  Heart: Heart,
  Compass: Compass,
  Star: Star
};

const SimplePersonaCards = ({ title, subtitle, personas }) => {
  if (!personas || personas.length === 0) return null;

  return (
    <section className="w-full py-24 bg-ice-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
          {subtitle && (
            <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-ts-gold bg-white border border-slate-200 px-5 py-2 rounded-full mb-6 inline-block shadow-sm">
              {subtitle}
            </span>
          )}
          <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">{title}</h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto"></div>
        </FadeIn>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
          personas.length === 2 || personas.length === 4 ? 'max-w-4xl mx-auto lg:grid-cols-2' : 'lg:grid-cols-3'
        }`}>
          {personas.map((persona, idx) => {
            const IconComp = iconMap[persona.icon] || Star;
            return (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-10 h-full flex flex-col shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group hover:-translate-y-1">
                  
                  {/* Decorative background accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold-50/50 rounded-bl-full group-hover:scale-110 transition-transform duration-500 z-0"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-navy-950 text-gold-400 rounded-full flex items-center justify-center mb-8 shadow-md group-hover:bg-gold-400 group-hover:text-navy-950 transition-colors duration-300">
                      <IconComp size={28} strokeWidth={1.5} />
                    </div>

                    <h3 className="font-display text-2xl text-navy-950 mb-4">{persona.title}</h3>
                    
                    <p className="font-sans text-slate-600 leading-relaxed font-light">
                      {persona.description}
                    </p>
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

export default SimplePersonaCards;
