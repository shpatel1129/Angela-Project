import React from 'react';
import FadeIn from './FadeIn';
import { Anchor, Globe, Quote } from 'lucide-react';

const RvsWhoBestFor = ({ data, regentImage, silverseaImage }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* REGENT BEST FOR — Full Width Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          {/* Image */}
          <div className="lg:col-span-4">
            <FadeIn direction="right" className="h-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 min-h-[400px] relative">
              {regentImage && (
                <img src={regentImage} alt="Regent Seven Seas luxury suite" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <Anchor className="w-5 h-5 text-ts-gold mb-2" />
                <span className="font-sans text-[9px] text-ts-gold font-bold uppercase tracking-widest block">ALL-INCLUSIVE LUXURY</span>
              </div>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <FadeIn direction="left">
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm h-full flex flex-col">
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-ts-gold block mb-3">REGENT SEVEN SEAS</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-950 mb-4">{data.regent?.title}</h3>

                {/* Quote Block */}
                <div className="bg-navy-950 text-white rounded-2xl p-5 mb-6 relative overflow-hidden">
                  <Quote className="w-6 h-6 text-ts-gold/20 absolute top-3 right-3" />
                  <p className="font-display text-lg italic text-white relative z-10">"{data.regent?.quote}"</p>
                </div>

                {/* Traits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 flex-grow">
                  {data.regent?.traits?.map((trait, idx) => (
                    <div key={idx} className="bg-ice-50 rounded-xl px-4 py-3 border border-slate-100 hover:border-ts-gold/30 transition-colors duration-300">
                      <span className="font-sans text-xs text-slate-600 leading-snug">{trait}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-100 pt-5">
                  <p className="font-sans text-xs text-slate-500 leading-relaxed font-light italic">{data.regent?.summary}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* SILVERSEA BEST FOR — Reversed Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Content */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <FadeIn direction="right">
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm h-full flex flex-col">
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 block mb-3">SILVERSEA CRUISES</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-950 mb-4">{data.silversea?.title}</h3>

                {/* Quote Block */}
                <div className="bg-slate-100 rounded-2xl p-5 mb-6 relative overflow-hidden border border-slate-200/50">
                  <Quote className="w-6 h-6 text-slate-300/40 absolute top-3 right-3" />
                  <p className="font-display text-lg italic text-navy-950 relative z-10">"{data.silversea?.quote}"</p>
                </div>

                {/* Traits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 flex-grow">
                  {data.silversea?.traits?.map((trait, idx) => (
                    <div key={idx} className="bg-sky-50/50 rounded-xl px-4 py-3 border border-sky-100/50 hover:border-sky-200 transition-colors duration-300">
                      <span className="font-sans text-xs text-slate-600 leading-snug">{trait}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-100 pt-5">
                  <p className="font-sans text-xs text-slate-500 leading-relaxed font-light italic">{data.silversea?.summary}</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <div className="lg:col-span-4 order-1 lg:order-2">
            <FadeIn direction="left" className="h-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 min-h-[400px] relative">
              {silverseaImage && (
                <img src={silverseaImage} alt="Silversea Cruises expedition" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <Globe className="w-5 h-5 text-sky-300 mb-2" />
                <span className="font-sans text-[9px] text-sky-300 font-bold uppercase tracking-widest block">EXPEDITION & EXPLORATION</span>
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RvsWhoBestFor;
