import React from 'react';
import FadeIn from './FadeIn';

const CulinaryExcellence = ({ title, subtitle, venues, images }) => {
  if (!venues || venues.length === 0) return null;

  return (
    <section className="bg-white py-24 border-y border-slate-200/80">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-400 text-xs font-sans font-bold uppercase tracking-[0.2em]">CULINARY EXCELLENCE</span>
          <h2 className="font-display text-4xl md:text-5xl text-navy-950 mt-4 mb-6">{title}</h2>
          <div className="w-12 h-0.5 bg-navy-800 mx-auto mb-6"></div>
          <p className="font-sans text-slate-600 text-lg">{subtitle}</p>
        </FadeIn>

        {/* Alternating Venues */}
        <div className="flex flex-col gap-16 md:gap-24 mb-20">
          {venues.map((venue, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-center group`}>
                
                {/* Image */}
                <FadeIn direction={isEven ? "right" : "left"} className="w-full md:w-1/2">
                  <div className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                    <img
                      src={images[idx % images.length]}
                      alt={venue.name}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </FadeIn>

                {/* Text Content */}
                <FadeIn direction={isEven ? "left" : "right"} className="w-full md:w-1/2 flex flex-col justify-center py-6">
                  {venue.cuisine && (
                    <span className="text-gold-500 font-sans text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                      {venue.cuisine}
                    </span>
                  )}
                  
                  <h3 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">{venue.name}</h3>
                  <div className="w-12 h-0.5 bg-gold-400 mb-8"></div>
                  
                  <p className="font-sans text-slate-600 text-lg leading-relaxed mb-10">{venue.description}</p>
                  
                  {/* Structured Details Grid */}
                  {(venue.signatureDish || venue.atmosphere) && (
                    <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-100">
                      {venue.signatureDish && (
                        <div className="flex flex-col">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Signature Dish</span>
                          <span className="font-display text-navy-900 text-xl">{venue.signatureDish}</span>
                        </div>
                      )}
                      {venue.atmosphere && (
                        <div className="flex flex-col">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Atmosphere</span>
                          <span className="font-display text-navy-900 text-xl">{venue.atmosphere}</span>
                        </div>
                      )}
                    </div>
                  )}
                </FadeIn>

              </div>
            );
          })}
        </div>

        {/* Inclusion Banner */}
        <FadeIn direction="up">
          <div className="bg-ice-50 rounded-2xl p-8 md:p-10 border border-slate-200 text-center max-w-4xl mx-auto flex flex-col items-center">
             <span className="font-sans text-xs uppercase tracking-widest text-navy-400 font-bold mb-4 block">The Regent Difference</span>
             <p className="font-display text-2xl text-navy-950 leading-snug">
               Unlike other luxury lines, dining at all specialty venues requires no cover charge. Fine wines and premium spirits are always poured freely.
             </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default CulinaryExcellence;
