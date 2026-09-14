import React from 'react';
import FadeIn from './FadeIn';

const GlassQuickFacts = ({ title, items, backgroundImage }) => {
  if (!items || items.length === 0) return null;

  const getGridSpanClass = (idx, total) => {
    if (idx !== total - 1) return "";
    let classes = "";
    if (total % 2 === 1) classes += " md:col-span-2";
    if (total % 3 === 1) classes += " lg:col-span-3";
    else if (total % 3 === 2) classes += " lg:col-span-2";
    return classes;
  };

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="Background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay to ensure the glassmorphism pops */}
          <div className="absolute inset-0 bg-navy-950/40"></div>
        </div>
      )}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <FadeIn direction="up">
          <div className="backdrop-blur-xl bg-navy-900/60 border border-white/20 rounded-2xl shadow-2xl overflow-hidden p-8 md:p-12 lg:p-16">
            
            {title && (
              <div className="flex flex-col items-center mb-12">
                <h2 className="font-sans text-sm md:text-base uppercase tracking-[0.2em] text-gold-500 font-semibold text-center">
                  {title}
                </h2>
                <div className="w-12 h-px bg-gold-500/50 mt-4"></div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
              {items.map((item, idx) => (
                <div key={idx} className={`flex flex-col border-b border-white/10 pb-4 hover:border-gold-500/50 transition-colors duration-300 ${getGridSpanClass(idx, items.length)}`}>
                  <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-ice-100/70 mb-2 font-semibold">
                    {item.title || item.label}
                  </span>
                  <span className="font-display text-xl md:text-2xl text-white leading-tight">
                    {item.description || item.value}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default GlassQuickFacts;
