import React from 'react';
import FadeIn from './FadeIn';
import { Compass, Check } from 'lucide-react';

const SeptOctVideoTwo = () => {
  const points = [
    "September guarantees warmest sea temperatures for all swimming and catamaran days",
    "October provides the most comfortable temperatures for archaeological site visits",
    "Boutique hotels and fine dining establishments offer relaxed, attentive service",
    "Ferry schedules remain fully active across all primary island routes"
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
                    src="https://www.youtube.com/embed/KPjINQ9Y9-U"
                    title="September vs October Greece Video 2"
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
                AUTUMN DECISION GUIDE
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-light text-navy-950 leading-tight">
                September vs. October at a Glance
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Choose September for beach clubs, warm waters, and vibrant island energy; choose October for peaceful historic exploration, wine harvests, and unmatched serenity.
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

export default SeptOctVideoTwo;
