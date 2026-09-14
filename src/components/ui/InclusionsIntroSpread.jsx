import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const InclusionsIntroSpread = ({ title, subtitle, description, image1, image2 }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-ice-50 rounded-full blur-[100px] opacity-60"></div>
      
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6">
            <FadeIn>
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold-500 font-bold mb-4 block">
                {subtitle || "Luxury Philosophy"}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-950 leading-tight mb-8">
                {title}
              </h2>
              
              <div className="relative">
                <span className="absolute -top-6 -left-8 text-7xl text-gold-200/40 font-display select-none">“</span>
                <p className="font-sans text-lg text-navy-700 leading-relaxed font-light relative z-10">
                  {description}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Image Composition Column */}
          <div className="lg:col-span-6 relative h-[450px] md:h-[550px] flex items-center justify-center">
            <FadeIn className="relative w-full h-full flex items-center justify-center">
              {/* Back Image (Large) */}
              {image1 && (
                <div className="absolute top-4 left-4 w-9/12 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-ice-100 z-10">
                  <MasterImage src={image1} alt="Luxury Yacht Cruising" className="w-full h-full object-cover" />
                </div>
              )}
              
              {/* Front Image (Offset overlap) */}
              {image2 && (
                <div className="absolute bottom-4 right-4 w-8/12 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-ice-100 z-20">
                  <MasterImage src={image2} alt="Boutique Onboard Experience" className="w-full h-full object-cover" />
                </div>
              )}

              {/* Decorative square frame */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 h-5/6 border border-gold-300/30 rounded-2xl pointer-events-none z-0"></div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InclusionsIntroSpread;
