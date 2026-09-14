import React from 'react';
import FadeIn from './FadeIn';
import { Camera, Landmark, Wine, Gem, Bike, Heart, ArrowRight } from 'lucide-react';

const iconMap = {
  Camera: Camera,
  Landmark: Landmark,
  Wine: Wine,
  Gem: Gem,
  Bike: Bike,
  Heart: Heart
};

const TravelerPersonaCards = ({ title, subtitle, personas }) => {
  if (!personas || personas.length === 0) return null;

  return (
    <section className="w-full py-20 bg-ice-100">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
          {subtitle && (
            <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-ts-gold bg-white border border-slate-200 px-5 py-2 rounded-full mb-6 inline-block shadow-sm">
              {subtitle}
            </span>
          )}
          <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">{title}</h2>
          <div className="w-16 h-[2px] bg-ts-gold mx-auto"></div>
        </FadeIn>

        <div className={`flex flex-wrap justify-center gap-6 ${
          personas.length === 2 || personas.length === 4 ? 'max-w-5xl mx-auto' : ''
        }`}>
          {personas.map((persona, idx) => {
            const IconComp = iconMap[persona.icon] || Camera;
            const flexBasis = personas.length === 2 || personas.length === 4 
              ? "w-full md:w-[calc(50%-0.75rem)]" 
              : "w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]";

            return (
              <FadeIn key={idx} delay={idx * 0.1} className={`${flexBasis} flex`}>
                <div className="bg-white rounded-3xl p-8 w-full flex flex-col shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                  
                  {/* Decorative background circle */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-ice-50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-in-out z-0"></div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-navy-50 text-navy-700 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
                      <IconComp size={28} strokeWidth={1.5} />
                    </div>

                    <h3 className="font-display text-2xl text-navy-950 mb-4">{persona.title}</h3>
                    
                    {persona.description ? (
                      <p className="font-sans text-sm text-navy-600 leading-relaxed mb-6">{persona.description}</p>
                    ) : null}
                    
                    {persona.traits && persona.traits.length > 0 && (
                      <div className="mb-8">
                        <p className="font-sans text-xs uppercase tracking-[0.1em] text-slate-400 font-bold mb-3">You Enjoy:</p>
                        <ul className="space-y-2">
                          {persona.traits.map((trait, tIdx) => (
                            <li key={tIdx} className="font-sans text-sm text-slate-700 flex items-start gap-2">
                              <span className="text-ts-gold mt-0.5">•</span>
                              {trait}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {persona.recommendations && persona.recommendations.length > 0 && (
                      <div className="mt-auto pt-6 border-t border-slate-100">
                        <p className="font-sans text-xs uppercase tracking-[0.1em] text-slate-400 font-bold mb-3">Recommended For You:</p>
                        <div className="flex flex-wrap gap-2">
                          {persona.recommendations.map((rec, rIdx) => (
                            <span key={rIdx} className="bg-ice-50 border border-ice-200 text-navy-800 text-xs font-semibold px-3 py-1 rounded-full">
                              {rec}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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

export default TravelerPersonaCards;
