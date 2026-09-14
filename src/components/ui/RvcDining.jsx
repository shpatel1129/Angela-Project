import React from 'react';
import FadeIn from './FadeIn';

const RvcDining = ({ data, image }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-ice-50 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-white/40 rounded-bl-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-16 text-center">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">GASTRONOMY REVIEW</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-ts-gold mx-auto mt-5"></div>
          <p className="font-sans text-sm text-slate-650 mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            {data.intro}
          </p>
        </FadeIn>

        {/* 3-Column Split Layout (4-4-4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Regent Dining Board (col-span-4) */}
          <div className="lg:col-span-4 flex">
            <FadeIn className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <span className="font-sans text-[9px] text-navy-950 font-bold tracking-widest block uppercase mb-1">{data.regent?.tagline}</span>
                <h4 className="font-display text-lg font-bold text-navy-950 mb-6">{data.regent?.title}</h4>
                <div className="space-y-5">
                  {data.regent?.restaurants?.map((rest, idx) => (
                    <div key={idx} className="pb-4 border-b border-slate-100 last:border-b-0 last:pb-0">
                      <h5 className="font-sans text-xs font-bold text-navy-950 mb-1">{rest.name}</h5>
                      <p className="font-sans text-[11px] text-slate-600 font-light leading-relaxed">{rest.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Column 2: Crystal Dining Board (col-span-4) */}
          <div className="lg:col-span-4 flex">
            <FadeIn className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <span className="font-sans text-[9px] text-ts-gold font-bold tracking-widest block uppercase mb-1">{data.crystal?.tagline}</span>
                <h4 className="font-display text-lg font-bold text-navy-950 mb-6">{data.crystal?.title}</h4>
                <div className="space-y-5">
                  {data.crystal?.restaurants?.map((rest, idx) => (
                    <div key={idx} className="pb-4 border-b border-slate-100 last:border-b-0 last:pb-0">
                      <h5 className="font-sans text-xs font-bold text-ts-gold mb-1">{rest.name}</h5>
                      <p className="font-sans text-[11px] text-slate-605 font-light leading-relaxed">{rest.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Column 3: Custom Dining Visual Image (col-span-4) */}
          {image && (
            <div className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 min-h-[350px]">
              <img
                src={image}
                alt="Fine Culinary Arts Kitchen Dining"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="font-sans text-[9px] text-ts-gold font-bold uppercase tracking-widest block mb-2">EPICUREAN EXPERTISE</span>
                <p className="font-serif text-xs text-slate-200 leading-normal font-light">
                  Decide between Regent's inclusive specialty steak and Asian venues, or Crystal's legendary Nobu Matsuhisa dishes at sea.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default RvcDining;
