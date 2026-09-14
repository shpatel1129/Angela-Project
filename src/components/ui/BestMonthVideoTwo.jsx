import React from 'react';
import FadeIn from './FadeIn';
import { Compass, Check } from 'lucide-react';

const BestMonthVideoTwo = () => {
  const points = [
    "May offers crisp visibility, wildflower landscapes, and relaxed sightseeing",
    "June delivers long daylight hours, vibrant beach culture, and active yachting",
    "September balances the warmest Aegean waters with quieter boutique hotels",
    "October provides sublime cultural immersion and serene vineyard harvests"
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Asymmetric Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Asymmetric Video Frame */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="relative p-3 bg-white border border-slate-100 rounded-[32px] shadow-2xl">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-inner bg-slate-950">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/O_RzdX0dkow"
                    title="What is the Best Month to Visit Greece Video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Editorial Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn>
              <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a15c] uppercase block">
                TIMING STRATEGY
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-light text-navy-950 leading-tight">
                Mastering Greek Island Timing
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Whether you dream of sailing secluded Cycladic coves or dining on cliffside terraces in Oia, choosing the right seasonal window ensures effortless luxury.
              </p>

              {/* Highlights Bullet List */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                {points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#c9a15c]/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <Check size={12} className="text-[#c9a15c]" />
                    </div>
                    <span className="font-sans text-sm text-navy-950 font-light">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BestMonthVideoTwo;
