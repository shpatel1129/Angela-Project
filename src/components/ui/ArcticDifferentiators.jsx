import React from 'react';
import FadeIn from './FadeIn';

const ArcticDifferentiators = ({ title, subtitle, features, image }) => {
  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Differentiators
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6 leading-tight">
              {title}
            </h2>
            <p className="font-sans text-lg text-slate-600 font-light leading-relaxed">
              {subtitle}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="space-y-8">
            {features?.map((ft, idx) => (
              <div 
                key={idx} 
                className="flex gap-6 items-start p-6 bg-ice-50/50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-navy-950 text-gold-400 font-display text-xl font-bold flex items-center justify-center rounded-xl group-hover:bg-gold-400 group-hover:text-navy-950 transition-colors duration-300">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="font-display text-xl text-navy-950 mb-2 font-medium">
                    {ft.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-slate-600 font-light leading-relaxed">
                    {ft.description}
                  </p>
                </div>
              </div>
            ))}
          </FadeIn>

          <FadeIn delay={0.2} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border border-slate-100 p-4 bg-slate-50">
            {/* We'll use one of the unique WebP images as backdrop */}
            <div className="w-full h-full bg-slate-900 relative rounded-2xl overflow-hidden">
              {image && (
                <img 
                  src={image} 
                  alt="Silversea Arctic Expedition" 
                  className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-103"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                <span className="text-xs uppercase tracking-widest text-gold-300 font-semibold mb-2 block">
                  EXPEDITION BLUEPRINT
                </span>
                <p className="font-display text-xl font-light italic leading-relaxed text-slate-100">
                  "Silversea merges authentic exploration with sophisticated cruise hospitality."
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ArcticDifferentiators;
