import React from 'react';
import FadeIn from './FadeIn';

const CinematicTextMask = ({
  maskText,
  backgroundImage,
  stats = []
}) => {
  if (!maskText || !backgroundImage) return null;

  return (
    <section className="w-full py-32 bg-white relative overflow-hidden flex flex-col items-center justify-center min-h-screen">
      
      {/* Massive Text Mask */}
      <div className="relative w-full max-w-[1600px] mx-auto px-4 text-center z-10 flex flex-col items-center justify-center">
        <FadeIn>
          <div 
            className="font-display text-[15vw] leading-none tracking-tighter uppercase font-black"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent' // Fallback
            }}
          >
            {maskText}
          </div>
        </FadeIn>
      </div>

      {/* Surrounding Elegant Data Points */}
      {stats.length > 0 && (
        <div className="w-full max-w-[1200px] mx-auto mt-20 px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-20">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={0.2 + (index * 0.1)} direction="up" className="text-center md:text-left border-t border-slate-200 pt-8">
              <div className="font-display text-4xl lg:text-5xl text-navy-950 mb-2">
                {stat.value}
              </div>
              <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-ts-gold mb-3">
                {stat.label}
              </h3>
              <p className="font-sans text-sm text-slate-500 font-light leading-relaxed max-w-xs mx-auto md:mx-0">
                {stat.description}
              </p>
            </FadeIn>
          ))}
        </div>
      )}

    </section>
  );
};

export default CinematicTextMask;
