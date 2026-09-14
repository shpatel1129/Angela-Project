import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const LuxuryCruiseMatchmaker = ({ 
  title = "Find Your Perfect Match",
  subtitle = "Select what matters most to you, and we'll reveal the river cruise line that delivers it best.",
  personas 
}) => {
  const [activePersona, setActivePersona] = useState(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ice-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-ts-gold" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-ts-gold">
                Interactive Guide
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">{title}</h2>
            <p className="font-sans text-lg text-navy-600 max-w-2xl mx-auto">{subtitle}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {personas.map((persona, index) => (
              <button
                key={index}
                onClick={() => setActivePersona(index)}
                className={`text-left p-6 rounded-xl transition-all duration-300 border-2 ${
                  activePersona === index 
                    ? 'border-ts-gold bg-ice-50 shadow-md translate-x-2' 
                    : 'border-transparent bg-white hover:bg-ice-50/50 hover:translate-x-1 border-ice-100'
                }`}
              >
                <h3 className={`font-sans font-bold text-lg mb-1 ${activePersona === index ? 'text-navy-950' : 'text-navy-700'}`}>
                  {persona.title}
                </h3>
                <p className={`font-sans text-sm ${activePersona === index ? 'text-navy-800' : 'text-navy-500'}`}>
                  {persona.shortDesc}
                </p>
              </button>
            ))}
          </div>

          {/* Right Column: Result Reveal */}
          <div className="lg:col-span-8 relative">
            <div className="bg-navy-950 rounded-2xl overflow-hidden shadow-2xl h-full min-h-[500px] flex flex-col relative group">
              {personas.map((persona, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activePersona === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={persona.image} 
                      alt={persona.winner} 
                      className="w-full h-full object-cover transition-transform duration-[15s] ease-linear group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/20"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                    <div className="mb-6 inline-flex bg-ts-gold text-navy-950 px-4 py-1.5 rounded-full font-sans text-xs font-bold uppercase tracking-widest self-start">
                      Best Match
                    </div>
                    
                    <h3 className="font-display text-5xl md:text-6xl text-white mb-4 drop-shadow-md">
                      {persona.winner}
                    </h3>
                    
                    <p className="font-sans text-lg text-white/90 mb-8 max-w-xl leading-relaxed drop-shadow">
                      {persona.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {persona.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-ts-gold flex-shrink-0 mt-0.5" />
                          <span className="font-sans text-sm text-white/80">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <a href={persona.link} className="inline-flex items-center gap-3 text-ts-gold font-sans font-medium uppercase tracking-widest text-sm hover:text-white transition-colors self-start">
                      Explore {persona.winner}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryCruiseMatchmaker;
