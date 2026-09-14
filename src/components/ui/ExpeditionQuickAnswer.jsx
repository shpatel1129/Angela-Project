import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { HelpCircle, Anchor, Star, Compass } from 'lucide-react';

const ExpeditionQuickAnswer = ({ data, image }) => {
  if (!data) return null;

  return (
    <section id="content" className="w-full py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative vector shape background */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-ice-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="uppercase tracking-[0.25em] text-[11px] font-bold text-slate-400">
              {data?.eyebrow || "WHAT ARE EXPEDITION CRUISES?"}
            </span>
            <div className="h-px w-20 bg-gold-400" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 leading-[1.1] max-w-4xl tracking-tight">
            {data?.heading}
          </h2>
        </FadeIn>

        {/* 4 Cards Grid - Expedition Vessels Quick Intro */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { name: 'Silver Origin', destination: 'Galápagos Specialist', desc: '100 guests' },
            { name: 'Silver Endeavour', destination: 'Polar Specialist (PC6)', desc: '220 guests' },
            { name: 'Silver Cloud', destination: 'Versatile Polar & Regional', desc: '254 guests' },
            { name: 'Silver Wind', destination: 'Intimate Polar & Regional', desc: '274 guests' }
          ].map((ship, idx) => (
            <FadeIn key={idx} delay={0.05 * idx}>
              <div className="p-5 rounded-2xl bg-ice-50/50 border border-slate-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <Compass className="w-6 h-6 text-gold-500 mb-4" />
                <h4 className="font-display text-base text-navy-950 mb-1">{ship.name}</h4>
                <p className="font-sans text-xs text-navy-800/80 mb-2">{ship.destination}</p>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white border border-slate-200 text-slate-500">
                  {ship.desc}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Interactive visual image card */}
          <div className="lg:col-span-5 w-full">
            <FadeIn>
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 aspect-[3/4]">
                {image && (
                  <MasterImage
                    src={image}
                    alt={data?.image?.alt || "Silversea luxury expedition cruises"}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                )}
                {/* Visual Glass Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-navy-950/80 border border-white/10 rounded-2xl p-5 shadow-lg">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold-400/20 flex items-center justify-center flex-shrink-0">
                      <Anchor className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="font-sans text-xs text-gold-400 font-bold uppercase tracking-wider mb-0.5">Base Camp Luxury</p>
                      <p className="font-sans text-xs text-white/70 leading-snug">Explore wilderness with 1:1 service ratios & all-suite accommodations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Glassmorphism layout details card */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <FadeIn delay={0.15}>
              <div className="rounded-3xl bg-gradient-to-br from-navy-950 to-navy-900 text-white p-8 lg:p-10 shadow-2xl relative overflow-hidden">
                {/* Decorative absolute element */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gold-400/5 rounded-full blur-xl translate-x-12 -translate-y-12" />
                
                <p className="font-sans text-lg lg:text-xl text-white/90 leading-relaxed font-light mb-6">
                  {data?.leadParagraph}
                </p>

                <div className="space-y-4 mb-8">
                  {data?.bodyParagraphs?.map((para, i) => (
                    <p key={i} className="font-sans text-sm text-white/70 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Bullets grid */}
                {data?.bullets && (
                  <div className="border-t border-white/10 pt-8">
                    <h4 className="font-display text-sm text-gold-400 uppercase tracking-widest mb-4">
                      {data?.bulletTitle || "The Expedition Difference"}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {data.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Star className="w-3.5 h-3.5 text-gold-400 mt-1 flex-shrink-0" />
                          <span className="font-sans text-xs text-white/80 leading-normal">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>

            {/* Bottom Callout */}
            {data?.callout && (
              <FadeIn delay={0.2}>
                <div className="border-l-4 border-gold-400 bg-ice-50/70 p-5 rounded-r-2xl border-y border-r border-slate-200/50">
                  <p className="font-sans text-sm text-navy-800 leading-relaxed font-medium italic">
                    "{data.callout}"
                  </p>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpeditionQuickAnswer;
