import React from 'react';
import FadeIn from './FadeIn';

const GreeceCostVideoOne = () => {
  return (
    <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-navy-950 via-slate-900 to-navy-950 opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c9a15c]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a15c] uppercase mb-4 block">
            CINEMATIC INSIGHT
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
            Bespoke Vacation Planning Strategy
          </h2>
          <p className="font-sans text-slate-300 font-light leading-relaxed">
            See how allocating resources to custom services, yachts, and boutique cliffside hotels transforms your journey.
          </p>
        </div>

        {/* Video Wrapper with Premium Frame */}
        <FadeIn>
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-slate-950">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/G9av_ZdEA8g"
                title="Greece Travel Cost Guide Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Editorial Quote Box below Video */}
            <div className="mt-12 text-center max-w-2xl mx-auto border-t border-white/10 pt-8">
              <p className="font-display text-lg italic text-[#c9a15c] mb-3">
                "Allocate your budget to the experiences you'll actually remember. A cheap flight isn't a saving if it ruins your first day in Greece."
              </p>
              <span className="font-sans text-xs uppercase tracking-wider text-slate-400">
                — Angela Hughes, CEO
              </span>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default GreeceCostVideoOne;
