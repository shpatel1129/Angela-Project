import React from 'react';
import FadeIn from './FadeIn';
import { Compass, Sparkles, UtensilsCrossed, Landmark } from 'lucide-react';

const GrandBentoFeatures = ({ title, subtitle, features, images = [] }) => {
  if (!features || features.length < 4) return null;

  return (
    <section className="w-full py-24 bg-slate-50 relative overflow-hidden">
      
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        {/* Section Header */}
        {(title || subtitle) && (
          <FadeIn className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              {title && (
                <div className="max-w-2xl">
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-6 leading-tight">
                    {title}
                  </h2>
                  <div className="w-16 h-1 bg-navy-800"></div>
                </div>
              )}
              {subtitle && (
                <p className="font-sans text-lg md:text-xl text-slate-600 max-w-lg mb-2">
                  {subtitle}
                </p>
              )}
            </div>
          </FadeIn>
        )}

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[340px] gap-6">
          
          {/* Feature 0: Effortless Travel (2x2 - The Hero Card) */}
          <FadeIn delay={0.1} className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group shadow-xl">
            {images && images[0] ? (
              <img
                src={images[0]}
                alt={features[0]?.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-950 flex items-center justify-center">
                <span className="text-white/30 text-xs font-bold tracking-[0.2em] uppercase">IMAGE PLACEHOLDER</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80"></div>
            <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end">
              <Compass className="w-14 h-14 text-white/90 mb-6" strokeWidth={1} />
              <h3 className="text-4xl md:text-5xl font-display text-white mb-4 leading-tight">{features[0].title}</h3>
              <p className="text-lg md:text-xl text-white/80 max-w-md font-light leading-relaxed">{features[0].description}</p>
            </div>
          </FadeIn>

          {/* Feature 2: Culinary Excellence (2x1 - The Wide Card) */}
          <FadeIn delay={0.2} className="md:col-span-2 md:row-span-1 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative group">
            {images[2] ? (
              <>
                <img src={images[2]} alt={features[2].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-navy-950/60 transition-colors duration-700"></div>
                <div className="absolute inset-0 p-10 md:p-12 flex flex-col justify-center">
                  <UtensilsCrossed className="w-10 h-10 text-white/90 mb-4" strokeWidth={1.5} />
                  <h3 className="text-3xl font-display text-white mb-3">{features[2].title}</h3>
                  <p className="text-white/80 text-lg mb-6 max-w-lg">{features[2].description}</p>
                </div>
              </>
            ) : (
              <div className="p-10 md:p-12 flex flex-col justify-center h-full">
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-ice-50 rounded-full opacity-50 blur-3xl group-hover:bg-ice-100 transition-colors duration-700"></div>
                <div className="relative z-10">
                  <UtensilsCrossed className="w-10 h-10 text-navy-800 mb-6" strokeWidth={1.5} />
                  <h3 className="text-3xl font-display text-navy-950 mb-3">{features[2].title}</h3>
                  <p className="text-slate-600 text-lg mb-8 max-w-lg">{features[2].description}</p>
                  {features[2].tags && (
                    <div className="flex flex-wrap gap-2">
                      {features[2].tags.map((tag, idx) => (
                        <span key={idx} className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium rounded-full uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </FadeIn>

          {/* Feature 1: Exceptional Service (1x1 - The Dark Card) */}
          <FadeIn delay={0.3} className="md:col-span-1 md:row-span-1 bg-navy-900 rounded-3xl overflow-hidden shadow-xl relative group">
            {images[1] ? (
              <>
                <img src={images[1]} alt={features[1].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-navy-950/70 group-hover:bg-navy-950/50 transition-colors duration-700 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center">
                  <Sparkles className="w-10 h-10 text-white mb-4" strokeWidth={1.5} />
                  <h3 className="text-2xl font-display text-white mb-4">{features[1].title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{features[1].description}</p>
                </div>
              </>
            ) : (
              <div className="p-8 md:p-10 flex flex-col justify-center h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <Sparkles className="w-10 h-10 text-white/80 mb-6 relative z-10" strokeWidth={1.5} />
                <h3 className="text-2xl font-display text-white mb-4 relative z-10">{features[1].title}</h3>
                <p className="text-white/70 text-base leading-relaxed relative z-10">{features[1].description}</p>
              </div>
            )}
          </FadeIn>

          {/* Feature 3: Cultural Immersion (1x1 - The Image Card) */}
          <FadeIn delay={0.4} className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden shadow-xl group">
            <img 
              src={images[3] || images[1] || images[0]} 
              alt={features[3].title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-navy-950/70 group-hover:bg-navy-950/50 transition-colors duration-700 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center">
              <Landmark className="w-12 h-12 text-white mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-display text-white mb-6">{features[3].title}</h3>
              
              {features[3].tags && (
                <div className="flex flex-wrap justify-center gap-2">
                  {features[3].tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white/10 border border-white/20 text-white text-[10px] uppercase tracking-wider rounded-full backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default GrandBentoFeatures;
