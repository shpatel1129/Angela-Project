import React from 'react';
import FadeIn from './FadeIn';

const ShipVibeOverview = ({ title, subtitle, items = [], mainImage, sideImages = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="w-full py-24 bg-navy-950 text-white relative overflow-hidden">
      
      {/* Absolute Background Accent Image */}
      {mainImage && (
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-20 mask-image-gradient">
          <img 
            src={mainImage} 
            alt="Ship Vibe Background" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
      )}

      <div className="max-w-[1300px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Title & Items */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <FadeIn>
            {subtitle && (
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ts-gold block mb-4">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-12">
              {title}
            </h2>
          </FadeIn>

          <div className="space-y-10">
            {items.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.15} className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-ts-gold"></div>
                  <div className="w-px h-full bg-white/20 mx-auto mt-2"></div>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-3">{item.title}</h3>
                  <p className="font-sans text-lg text-white/70 font-light leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Right Column: Polaroid Image Stack */}
        <div className="lg:w-1/2 relative min-h-[500px] md:min-h-[600px] flex items-center justify-center">
          {sideImages[0] && (
            <FadeIn direction="left" delay={0.2} className="absolute z-20 w-[60%] md:w-[70%] left-0 top-[10%] rotate-[-4deg] rounded-sm overflow-hidden shadow-2xl border-[12px] border-white bg-white">
              <div className="aspect-[4/5] relative bg-slate-200">
                <img src={sideImages[0]} alt="Vibe Accent 1" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
          )}

          {sideImages[1] && (
            <FadeIn direction="up" delay={0.4} className="absolute z-30 w-[55%] md:w-[65%] right-0 bottom-[10%] rotate-[3deg] rounded-sm overflow-hidden shadow-2xl border-[12px] border-white bg-white">
              <div className="aspect-[4/5] relative bg-slate-200">
                <img src={sideImages[1]} alt="Vibe Accent 2" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
          )}

          {/* If no images are provided, show elegant placeholders */}
          {!sideImages[0] && !sideImages[1] && (
            <div className="w-full h-full border border-white/20 rounded-3xl flex items-center justify-center p-8 text-center backdrop-blur-sm bg-white/5">
              <p className="font-sans text-white/50 uppercase tracking-widest text-sm">Image Accents Required</p>
            </div>
          )}
        </div>

      </div>

      <style>{`
        .mask-image-gradient {
          mask-image: linear-gradient(to right, transparent, black);
          -webkit-mask-image: linear-gradient(to right, transparent, black);
        }
      `}</style>
    </section>
  );
};

export default ShipVibeOverview;
