import React from 'react';
import FadeIn from './FadeIn';

const InteractivePlanningRoadmap = ({ title, subtitle, steps }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="w-full py-24 bg-navy-950 relative overflow-hidden">
      {/* Background abstract texture */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-6xl text-white mb-6">{title}</h2>
          {subtitle && (
            <p className="font-sans text-xl text-ice-200 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </FadeIn>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-ts-gold/20 via-ts-gold to-ts-gold/20 hidden md:block transform -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-center justify-between md:h-80">
                  
                  {/* Left Side (Content or Image depending on index) */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:order-3'}`}>
                    <FadeIn direction={isEven ? "right" : "left"} delay={idx * 0.1}>
                      {isEven ? (
                        <div className="bg-navy-900/80 backdrop-blur-sm border border-navy-800 p-8 rounded-2xl shadow-xl">
                          <span className="font-sans text-ts-gold text-sm font-bold uppercase tracking-[0.2em]">{step.timeframe}</span>
                          <h3 className="font-display text-2xl text-white mt-2 mb-4">{step.title}</h3>
                          <p className="font-sans text-ice-100 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      ) : (
                        <div className="h-48 md:h-64 rounded-2xl overflow-hidden shadow-2xl border border-navy-800">
                          <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                        </div>
                      )}
                    </FadeIn>
                  </div>

                  {/* Center Node */}
                  <div className="w-12 h-12 md:order-2 hidden md:flex items-center justify-center relative z-10">
                    <div className="w-6 h-6 rounded-full bg-ts-gold shadow-[0_0_15px_rgba(212,175,55,0.5)] border-4 border-navy-950 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  </div>

                  {/* Right Side (Image or Content depending on index) */}
                  <div className={`w-full md:w-5/12 mt-6 md:mt-0 ${isEven ? 'md:order-3' : 'md:text-left'}`}>
                    <FadeIn direction={isEven ? "left" : "right"} delay={idx * 0.1}>
                      {isEven ? (
                        <div className="h-48 md:h-64 rounded-2xl overflow-hidden shadow-2xl border border-navy-800">
                          <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="bg-navy-900/80 backdrop-blur-sm border border-navy-800 p-8 rounded-2xl shadow-xl">
                          <span className="font-sans text-ts-gold text-sm font-bold uppercase tracking-[0.2em]">{step.timeframe}</span>
                          <h3 className="font-display text-2xl text-white mt-2 mb-4">{step.title}</h3>
                          <p className="font-sans text-ice-100 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      )}
                    </FadeIn>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractivePlanningRoadmap;
