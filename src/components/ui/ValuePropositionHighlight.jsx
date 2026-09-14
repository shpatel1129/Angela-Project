import React from 'react';
import FadeIn from './FadeIn';
import * as Icons from 'lucide-react'; 

const ValuePropositionHighlight = ({ title, subtitle, items, image, imageOverlayText = "The Most Inclusive Luxury Experience" }) => {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Dark background with subtle gold glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold-900/20 rounded-full blur-[120px] opacity-60 -translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-600/10 rounded-full blur-[100px] opacity-50 translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">{title}</h2>
            {subtitle && <p className="font-sans text-lg text-ice-200/80 max-w-2xl mx-auto">{subtitle}</p>}
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Image Panel */}
          {image && (
            <FadeIn className="lg:col-span-5 h-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px] lg:min-h-[600px] group border border-gold-900/30">
                <img 
                  src={image} 
                  alt="Luxury Value" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="w-12 h-1 bg-gold-400 mb-6"></div>
                  <p className="font-display text-3xl md:text-4xl text-white leading-tight">{imageOverlayText}</p>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Right: Value Pillars Grid */}
          <div className={`${image ? 'lg:col-span-7' : 'lg:col-span-12'} grid grid-cols-1 sm:grid-cols-2 gap-6`}>
            {items && items.map((item, index) => {
              const Icon = Icons[item.icon || 'CheckCircle'] || Icons.CheckCircle;
              
              return (
                <FadeIn key={index} delay={index * 0.1} className="h-full">
                  <div className={`bg-navy-900/50 backdrop-blur-sm rounded-2xl p-8 border border-navy-800 hover:border-gold-500/50 transition-all duration-300 h-full flex flex-col group ${index % 2 === 1 ? 'lg:translate-y-8' : ''}`}>
                    <div className="w-12 h-12 bg-navy-950 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors border border-navy-800 group-hover:border-gold-500/30">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    
                    <h3 className="font-display text-xl text-white mb-3">{item.title}</h3>
                    <p className="font-sans text-sm text-ice-200/70 leading-relaxed mb-6 flex-grow">{item.description}</p>
                    
                    {item.impact && (
                      <div className="mt-auto pt-4 border-t border-navy-800">
                        <span className="font-sans text-xs uppercase tracking-[0.15em] text-gold-400 font-semibold block mb-1">True Value</span>
                        <span className="font-display text-lg text-white">{item.impact}</span>
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionHighlight;
