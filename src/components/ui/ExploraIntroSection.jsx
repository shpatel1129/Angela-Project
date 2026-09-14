import React from 'react';
import FadeIn from './FadeIn';

const ExploraIntroSection = ({ image }) => {
  return (
    <section className="w-full bg-white py-20 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content with no title heading */}
          <FadeIn>
            <div className="space-y-6">
              <h2 className="font-display text-2xl md:text-3.5xl text-navy-950 leading-tight font-medium">
                Silversea vs Explora Journeys: Which Luxury Cruise Is Right for You?
              </h2>
              
              <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                Two names increasingly appear when sophisticated travelers begin comparing luxury cruises: Silversea and Explora Journeys. Both offer suites, exceptional dining, premium service, beautiful ships and carefully curated itineraries.
              </p>
              
              <p className="font-sans text-slate-600 text-sm font-light leading-relaxed font-semibold text-navy-900">
                But they are NOT the same kind of luxury experience.
              </p>

              <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                The honest answer is: it depends on what luxury means to you. A traveler dreaming about Antarctica may have a very different answer from a couple planning a Mediterranean anniversary. That is why this guide goes beyond a simple star rating.
              </p>
            </div>
          </FadeIn>

          {/* Right Side: Visual block */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold-500/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img 
                src={image} 
                alt="Silversea vs Explora comparison"
                className="relative z-10 w-full h-[400px] object-cover rounded-3xl shadow-xl border border-slate-100"
                loading="lazy"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ExploraIntroSection;
