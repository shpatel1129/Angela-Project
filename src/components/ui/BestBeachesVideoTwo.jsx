import React from 'react';
import FadeIn from './FadeIn';

/**
 * BestBeachesVideoTwo
 * Renders the second high-impact YouTube video embed with a different layout.
 */
const BestBeachesVideoTwo = () => {
  return (
    <section id="best-beaches-video-two" className="w-full bg-slate-50 py-24 text-left border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn>
              <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a15c] uppercase block mb-3">
                ISLAND LIFE
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-navy-950 font-light leading-tight">
                Waterfront Villages & Coastal Splurge
              </h3>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                See the contrast of whitewashed Cycladic architecture against golden sandy shorelines, and discover why a private boat day is the single best investment for a premium Mediterranean holiday.
              </p>
            </FadeIn>
          </div>

          {/* Right Video Column */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/ZL60rlLdwJw"
                  title="Greece Island Travel Guide Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BestBeachesVideoTwo;
