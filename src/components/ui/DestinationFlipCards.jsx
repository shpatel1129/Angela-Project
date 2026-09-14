import React from 'react';
import FadeIn from './FadeIn';

const DestinationFlipCards = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Iconic Stops
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-navy-950 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="font-sans text-lg text-slate-500">
              {subtitle}
            </p>
          )}
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {items.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="h-[400px]">
              <div className="group w-full h-full [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-xl hover:shadow-2xl">
                  
                  {/* Front of Card */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-center">
                      <h3 className="font-display text-3xl text-white tracking-wide drop-shadow-md">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-navy-900 text-white px-8 py-10 [transform:rotateY(180deg)] backface-hidden flex flex-col justify-center text-center border border-navy-800">
                    <h3 className="font-display text-2xl text-gold-400 mb-6 border-b border-white/10 pb-4 inline-block mx-auto">
                      {item.title}
                    </h3>
                    <p className="font-sans text-slate-300 leading-relaxed text-sm">
                      {item.description}
                    </p>
                    
                    {item.features && (
                      <ul className="mt-6 space-y-2 text-left w-full">
                        {item.features.map((feature, i) => (
                          <li key={i} className="font-sans text-xs text-slate-400 flex items-center">
                            <span className="w-1 h-1 rounded-full bg-gold-500 mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}} />
    </section>
  );
};

export default DestinationFlipCards;
