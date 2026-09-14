import React from 'react';
import FadeIn from './FadeIn';
import { ArrowRight } from 'lucide-react';

const DestinationMatchmaker = ({ title, subtitle, items }) => {
  return (
    <section className="py-20 bg-ice-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {subtitle && <span className="font-sans text-sm uppercase tracking-[0.2em] text-navy-500 mb-4 block font-bold">{subtitle}</span>}
            <h2 className="font-display text-4xl md:text-5xl text-navy-900">{title}</h2>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            // Apply md:col-span-2 dynamically if it's the last odd item to center it
            const isLastOdd = items.length % 2 !== 0 && index === items.length - 1;
            const isLastOddInThreeCols = items.length % 3 !== 0 && index === items.length - 1;
            
            return (
              <FadeIn key={index} delay={index * 0.1} className={`${isLastOdd ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-[350px] shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={item.image} 
                    alt={item.destination} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Base overlay so text is readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/30 to-transparent" />
                  {/* Hover overlay to darken further */}
                  <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-8">
                      <p className="font-sans text-ice-200 text-sm tracking-widest uppercase mb-3 font-semibold">If you want...</p>
                      <h3 className="font-display text-2xl text-white leading-tight drop-shadow-md">{item.preference}</h3>
                    </div>
                    
                    <div className="absolute bottom-8 left-8 right-8 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      <div className="h-px w-full bg-white/20 mb-4"></div>
                      <div className="flex items-center gap-3 text-white">
                        <span className="font-sans font-bold tracking-[0.1em] uppercase text-sm">Choose {item.destination}</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                      </div>
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

export default DestinationMatchmaker;
