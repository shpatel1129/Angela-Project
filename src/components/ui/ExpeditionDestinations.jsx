import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { Compass, Ship, Wind, Sun } from 'lucide-react';

const icons = [Wind, Sun, Compass, Ship];

const ExpeditionDestinations = ({ data, image }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-ice-50/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <FadeIn className="text-center mb-16 lg:mb-20">
          <span className="uppercase tracking-[0.25em] text-[11px] font-bold text-slate-400 mb-4 block">
            {data?.eyebrow || "EXPEDITION DESTINATIONS"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 leading-tight mb-6">
            {data?.heading}
          </h2>
          <div className="w-14 h-[2px] bg-gold-400 mx-auto mb-6" />
          <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {data?.description}
          </p>
        </FadeIn>

        {/* Asymmetrical Bento Grid of destinations */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
          
          {/* Card 1: Antarctica (Polar) - Double Width & Height */}
          {data?.regions?.[0] && (
            <FadeIn className="md:col-span-8 md:row-span-2" delay={0.05}>
              <div className="rounded-3xl border border-sky-200/60 bg-gradient-to-br from-sky-50 to-white p-8 lg:p-10 h-full flex flex-col justify-between hover:shadow-xl transition-all duration-400 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/10 rounded-full blur-3xl -translate-y-12 translate-x-12" />
                
                <div>
                  {/* Top Badge + Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-sky-100 text-sky-700">
                      Polar Continent
                    </span>
                    <Wind className="w-6 h-6 text-sky-500" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-3xl lg:text-4xl text-navy-950 mb-4 group-hover:text-sky-600 transition-colors">
                    {data.regions[0].name}
                  </h3>
                  <p className="font-sans text-sm text-slate-400 italic mb-5">
                    Best for: {data.regions[0].bestFor}
                  </p>
                  <p className="font-sans text-base text-slate-600 leading-relaxed mb-6">
                    {data.regions[0].description}
                  </p>

                  {/* Visual Landscape Image - Full Width */}
                  {image && (
                    <div className="rounded-2xl overflow-hidden shadow-md aspect-[16/9] lg:aspect-[21/9] mb-8">
                      <MasterImage
                        src={image}
                        alt="Silversea Antarctica Expedition Cruises"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      />
                    </div>
                  )}
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-display text-xs text-navy-950 uppercase tracking-widest mb-3">Key Shore Experiences:</h4>
                  <div className="flex flex-wrap gap-2">
                    {data.regions[0].highlights?.map((highlight, i) => (
                      <span key={i} className="inline-block px-3.5 py-1.5 text-xs font-sans font-medium text-navy-800 bg-white border border-slate-200 rounded-full shadow-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Card 2: Galápagos - Medium Width */}
          {data?.regions?.[1] && (
            <FadeIn className="md:col-span-4" delay={0.1}>
              <div className="rounded-3xl border border-amber-200/50 bg-gradient-to-br from-amber-50/40 to-white p-7 h-full flex flex-col justify-between hover:shadow-xl transition-all duration-400 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-100/10 rounded-full blur-2xl -translate-y-8 translate-x-8" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-amber-100 text-amber-700">
                      Warm Ecosystem
                    </span>
                    <Sun className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="font-display text-2xl text-navy-950 mb-3 group-hover:text-amber-600 transition-colors">
                    {data.regions[1].name}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 italic mb-4">
                    Best for: {data.regions[1].bestFor}
                  </p>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6">
                    {data.regions[1].description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    {data.regions[1].highlights?.slice(0, 3).map((highlight, i) => (
                      <span key={i} className="inline-block px-2.5 py-1 text-xs font-sans text-navy-800 bg-white border border-slate-200 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Card 3: Arctic - Medium Width */}
          {data?.regions?.[2] && (
            <FadeIn className="md:col-span-4" delay={0.15}>
              <div className="rounded-3xl border border-slate-200/80 bg-white p-7 h-full flex flex-col justify-between hover:shadow-xl transition-all duration-400 group relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-slate-100 text-slate-600">
                      Arctic Polar
                    </span>
                    <Compass className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="font-display text-2xl text-navy-950 mb-3 group-hover:text-slate-500 transition-colors">
                    {data.regions[2].name}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 italic mb-4">
                    Best for: {data.regions[2].bestFor}
                  </p>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6">
                    {data.regions[2].description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    {data.regions[2].highlights?.slice(0, 3).map((highlight, i) => (
                      <span key={i} className="inline-block px-2.5 py-1 text-xs font-sans text-navy-800 bg-white border border-slate-200 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Card 4: Kimberley - Full Width Banner */}
          {data?.regions?.[3] && (
            <FadeIn className="md:col-span-12" delay={0.2}>
              <div className="rounded-3xl border border-gold-400/30 bg-gradient-to-br from-gold-50/10 to-white p-8 hover:shadow-xl transition-all duration-400 group relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-gold-400/20 text-amber-800 mb-4">
                      Tropical Wilderness
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">
                      {data.regions[3].name}
                    </h3>
                    <p className="font-sans text-xs text-slate-400 italic mb-3">
                      Best for: {data.regions[3].bestFor}
                    </p>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed max-w-3xl">
                      {data.regions[3].description}
                    </p>
                  </div>
                  <div className="lg:col-span-5 flex flex-wrap gap-2 justify-start lg:justify-end">
                    {data.regions[3].highlights?.map((highlight, i) => (
                      <span key={i} className="inline-block px-3 py-1.5 text-xs font-sans font-medium text-navy-800 bg-white border border-slate-200 rounded-full shadow-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          )}
        </div>

        {/* Antarctica Fly Cruise vs Drake Passage split column blocks */}
        {data?.flyCruiseVsDrake && (
          <FadeIn delay={0.25}>
            <div className="rounded-3xl border border-slate-200/60 bg-white p-8 lg:p-10 shadow-sm relative overflow-hidden">
              <h3 className="font-display text-2xl lg:text-3xl text-navy-950 mb-4 text-center">
                {data.flyCruiseVsDrake.title}
              </h3>
              <p className="font-sans text-base text-slate-600 leading-relaxed max-w-2xl mx-auto text-center mb-10">
                {data.flyCruiseVsDrake.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                {/* Left: Traditional Drake Passage */}
                <div className="pb-6 md:pb-0">
                  <h4 className="font-display text-xl text-navy-950 mb-5 flex items-center gap-3">
                    <Ship className="w-5 h-5 text-gold-500" />
                    {data.flyCruiseVsDrake.traditional.title}
                  </h4>
                  <ul className="space-y-3.5">
                    {data.flyCruiseVsDrake.traditional.considers.map((item, idx) => (
                      <li key={idx} className="font-sans text-sm text-slate-600 leading-relaxed flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Fly Cruise */}
                <div className="pt-6 md:pt-0 md:pl-8">
                  <h4 className="font-display text-xl text-navy-950 mb-5 flex items-center gap-3">
                    <Wind className="w-5 h-5 text-sky-500" />
                    {data.flyCruiseVsDrake.flyCruise.title}
                  </h4>
                  <ul className="space-y-3.5">
                    {data.flyCruiseVsDrake.flyCruise.considers.map((item, idx) => (
                      <li key={idx} className="font-sans text-sm text-slate-600 leading-relaxed flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
};

export default ExpeditionDestinations;
