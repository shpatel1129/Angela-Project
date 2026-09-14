import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const ScenicGallery = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="w-full py-16 bg-ice-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">{title}</h2>
          <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-6 mb-6"></div>
          {subtitle && (
            <p className="font-sans text-lg text-slate-500">{subtitle}</p>
          )}
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, idx) => {
            const isLastOddItem = items.length % 2 !== 0 && idx === items.length - 1;
            return (
            <FadeIn key={idx} delay={idx * 0.1} className={isLastOddItem ? 'md:col-span-2' : ''}>
              <div className="relative group rounded-2xl overflow-hidden shadow-md cursor-default aspect-[4/3] lg:aspect-video flex items-end">
                {/* Background Image */}
                {item.image ? (
                  <MasterImage 
                    src={item.image} 
                    alt={item.title} 
                    asBackground={true}
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-110" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-950 border border-dashed border-white/20 flex items-center justify-center">
                    <span className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase">IMAGE PLACEHOLDER</span>
                  </div>
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent transition-opacity duration-500 group-hover:from-navy-950"></div>

                {/* Content */}
                <div className="relative z-10 p-8 lg:p-10 w-full transform transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-3 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="h-px w-8 bg-accent-500"></div>
                    <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-accent-500">
                      Highlight
                    </span>
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="font-sans text-white/80 text-sm lg:text-base leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {item.description}
                  </p>
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

export default ScenicGallery;
