import React from 'react';
import FadeIn from './FadeIn';

const EditorialShipTour = ({ title, subtitle, features, images = [] }) => {
  if (!features || features.length === 0) return null;

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
          {subtitle && (
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent-600 block mb-4">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 leading-tight mb-8">
              {title}
            </h2>
          )}
          <div className="w-px h-16 bg-slate-300 mx-auto"></div>
        </FadeIn>

        {/* Alternating Editorial Blocks */}
        <div className="space-y-32">
          {features.map((feature, idx) => {
            const isEven = idx % 2 === 0;
            const hasImage = !!images[idx];

            return (
              <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                
                {/* Image Block */}
                <div className="w-full lg:w-[55%] relative group">
                  <FadeIn direction={isEven ? "right" : "left"} className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                    {hasImage ? (
                      <img 
                        src={images[idx]} 
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                        <span className="text-slate-400 font-sans text-xs uppercase tracking-widest">Image Placeholder</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-navy-950/10 group-hover:bg-transparent transition-colors duration-700"></div>
                  </FadeIn>

                  {/* Decorative Elements */}
                  <div className={`absolute -z-10 w-full h-full border border-slate-200 top-8 ${isEven ? '-left-8' : '-right-8'}`}></div>
                </div>

                {/* Text Block */}
                <div className="w-full lg:w-[45%]">
                  <FadeIn direction={isEven ? "left" : "right"} delay={0.2} className="max-w-md">
                    <span className="font-display text-6xl text-slate-200 mb-4 block">0{idx + 1}</span>
                    <h3 className="font-display text-3xl md:text-4xl text-navy-950 mb-6">{feature.title}</h3>
                    <p className="font-sans text-lg text-slate-600 leading-relaxed font-light mb-8">
                      {feature.description}
                    </p>
                    {feature.tags && (
                      <div className="flex flex-wrap gap-3">
                        {feature.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="font-sans text-xs uppercase tracking-widest text-navy-800 border-b border-navy-800 pb-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EditorialShipTour;
