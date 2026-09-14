import React from 'react';
import FadeIn from './FadeIn';

const ExplorerDestinations = ({ data, image }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950">
              {data.title || "Itineraries & Best Destinations"}
            </h2>
            <div className="w-12 h-1 bg-ts-gold mx-auto mt-4 mb-6"></div>
            <p className="font-sans text-sm text-slate-500 leading-relaxed font-light">
              {data.description}
            </p>
          </FadeIn>
        </div>

        {/* Layout: Split Regions & Highlighting Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Regions List Left (2,4,6 columns / grid layout) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.regions?.map((reg, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                <span className="w-8 h-8 rounded-full bg-ts-gold/10 text-ts-gold flex items-center justify-center font-bold text-xs mb-4">
                  {idx + 1}
                </span>
                <h3 className="font-display text-base font-bold text-navy-950 mb-2 font-serif">
                  {reg.name}
                </h3>
                <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
                  {reg.description}
                </p>
              </FadeIn>
            ))}
          </div>

          {/* Large Image Frame Right */}
          <div className="lg:col-span-5 relative">
            <FadeIn direction="left" className="h-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 min-h-[350px] relative">
              {image && (
                <img
                  src={image}
                  alt="Seven Seas Explorer docked in Portofino"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">PORT ACCESSIBILITY</span>
                <p className="font-serif text-xs text-slate-300 leading-relaxed font-light">
                  Gliding straight into the town center of Nafplio, Portofino, or Amalfi Coast, avoiding industrial container terminals.
                </p>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExplorerDestinations;
