import React from 'react';
import FadeIn from './FadeIn';

const ExploraBrandProfiles = ({ silverseaImage, exploraImage }) => {
  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              Brand Overview
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4 leading-tight">
              Two Distinct Luxury Philosophies
            </h2>
            <p className="font-sans text-slate-600 font-light max-w-2xl mx-auto">
              Understanding what each brand stands for is the first step toward choosing the right luxury cruise experience.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Silversea Profile */}
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-full flex flex-col">
              <div className="relative h-72">
                <img 
                  src={silverseaImage} 
                  alt="Silversea luxury cruise experience"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-gold-400 text-navy-950 font-display text-xs uppercase tracking-widest px-4 py-2 rounded-full font-bold">
                    Established Ultra-Luxury
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-display text-2xl text-navy-950 mb-4">What Is Silversea?</h3>
                <p className="font-sans text-slate-600 font-light leading-relaxed mb-6">
                  Silversea is an established luxury cruise brand known for its intimate ships, suite accommodations, personalized service and destination-focused travel. The brand has an especially strong position in expedition cruising.
                </p>
                <div className="mt-auto">
                  <h4 className="font-display text-sm text-navy-950 uppercase tracking-wider mb-3">Best For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Antarctica", "Arctic", "Greenland", "Alaska", "Galápagos", "Kimberley", "Expedition", "Destination Immersion"].map((tag, i) => (
                      <span key={i} className="bg-navy-950/5 text-navy-800 text-xs px-3 py-1.5 rounded-full font-sans font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Explora Journeys Profile */}
          <FadeIn delay={0.25}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-full flex flex-col">
              <div className="relative h-72">
                <img 
                  src={exploraImage} 
                  alt="Explora Journeys contemporary luxury"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-gold-400 text-navy-950 font-display text-xs uppercase tracking-widest px-4 py-2 rounded-full font-bold">
                    Contemporary Ultra-Luxury
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-display text-2xl text-navy-950 mb-4">What Is Explora Journeys?</h3>
                <p className="font-sans text-slate-600 font-light leading-relaxed mb-6">
                  Explora Journeys is a newer luxury ocean travel brand developed around a contemporary interpretation of luxury hospitality. Its ships emphasize ocean-front suites, modern design, outdoor spaces, wellness and relaxed sophistication.
                </p>
                <div className="mt-auto">
                  <h4 className="font-display text-sm text-navy-950 uppercase tracking-wider mb-3">Best For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Contemporary Design", "Wellness", "Ocean-Front Suites", "Pools", "Restaurants", "Lounges", "Resort-Style", "Sea Days"].map((tag, i) => (
                      <span key={i} className="bg-navy-950/5 text-navy-800 text-xs px-3 py-1.5 rounded-full font-sans font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ExploraBrandProfiles;
