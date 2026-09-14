import React from 'react';
import FadeIn from './FadeIn';
import { ShieldCheck, Check } from 'lucide-react';

const GreeceSafetyVideoTwo = () => {
  const points = [
    "Build margin into inter-island transfers to absorb potential Meltemi wind delays.",
    "Prioritize private chauffeured vehicles over motorized quad bikes on steep island terrain.",
    "Schedule strenuous archaeological walking tours during cooler morning hours.",
    "Retain dedicated 24/7 travel advisor advocacy for effortless rerouting when conditions change."
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Asymmetric Video Frame */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="relative p-3 bg-white border border-slate-100 rounded-[32px] shadow-2xl">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-inner bg-slate-950">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/u-DPQCjfGiE"
                    title="Greece Travel Safety Planning Video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Luxury Safety Principles Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn>
              <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a15c] uppercase block">
                EXPERT STRATEGY
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-light text-navy-950 leading-tight">
                The Luxury Traveler's Safety Rule
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                «Don't plan your Greek vacation around everything going perfectly. Plan it so that the vacation still works when something doesn't.»
              </p>

              {/* Connected Bullet List */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                {points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#c9a15c]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
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

export default GreeceSafetyVideoTwo;
