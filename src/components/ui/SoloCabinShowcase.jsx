import React from 'react';
import FadeIn from './FadeIn';
import { Star, CheckCircle2 } from 'lucide-react';

const SoloCabinShowcase = ({ data, images }) => {
  if (!data || !data.cabins) return null;

  return (
    <section className="w-full py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-[0.2em] text-ts-gold font-bold mb-4 block">
              {data.subtitle || "Suite Categories"}
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-navy-950 mb-6">
              {data.title}
            </h2>
            <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-sans">
              {data.description}
            </p>
          </div>
        </FadeIn>

        <div className="space-y-16 md:space-y-24">
          {data.cabins.map((suite, idx) => {
            const isEven = idx % 2 === 0;
            // Use the images passed via props based on index, or fallback
            const suiteImage = images && images[idx] ? images[idx] : (images && images[0]);

            return (
              <FadeIn key={suite.id || idx} delay={0.1} direction={isEven ? 'right' : 'left'}>
                <div className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-0`}>
                  
                  {/* Image Container with Custom Rounding and Offset Background */}
                  <div className="w-full lg:w-3/5 relative group">
                    {/* Background Offset block */}
                    <div className={`absolute top-4 bottom-4 ${isEven ? '-left-4 right-4' : 'left-4 -right-4'} bg-ice-50 rounded-[40px] -z-10 transition-transform duration-500 group-hover:scale-[1.02]`}></div>
                    
                    <div className={`relative overflow-hidden shadow-xl ${
                      isEven ? 'rounded-tl-[40px] rounded-br-[40px] rounded-tr-xl rounded-bl-xl' : 'rounded-tr-[40px] rounded-bl-[40px] rounded-tl-xl rounded-br-xl'
                    } aspect-[4/3] md:aspect-[16/10] w-full bg-slate-100`}>
                      {suiteImage && (
                        <img
                          src={suiteImage}
                          alt={suite.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                        />
                      )}
                      
                      {/* Glassmorphism Badge */}
                      <div className={`absolute top-6 ${isEven ? 'left-6' : 'right-6'} bg-navy-950/70 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/20 shadow-lg`}>
                        {suite.deck} • {suite.size}
                      </div>
                    </div>
                  </div>

                  {/* Text Container with overlap effect */}
                  <div className={`w-full lg:w-1/2 relative z-10 ${isEven ? 'lg:-ml-16' : 'lg:-mr-16'}`}>
                    <div className="bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center space-x-2 text-ts-gold mb-3">
                          <Star className="w-4 h-4 fill-ts-gold" />
                          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Luxury Suite Category</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-display text-navy-950 mb-6">
                          {suite.title}
                        </h3>

                        <ul className="space-y-4 mb-8">
                          {suite.features.map((ft, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3 text-sm md:text-base text-slate-700 font-sans">
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{ft}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Best For Box */}
                      <div className="mt-4 border-l-4 border-ts-gold bg-gradient-to-r from-yellow-50 to-transparent p-5 rounded-r-2xl">
                        <span className="text-[10px] font-bold text-navy-900 uppercase tracking-widest block mb-2">Best For</span>
                        <p className="text-sm md:text-base text-navy-800 font-medium italic leading-relaxed">{suite.bestFor}</p>
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

export default SoloCabinShowcase;
