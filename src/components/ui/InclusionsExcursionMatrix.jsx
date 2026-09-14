import React from 'react';
import { Anchor, Compass, Map, Check } from 'lucide-react';
import MasterImage from './MasterImage';

const InclusionsExcursionMatrix = ({ data, shipImg, expeditionImg }) => {
  if (!data) return null;

  const { headline, intro, categories, allInclusivePlus, expeditionLandings } = data;

  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-gold-400 uppercase bg-gold-400/10 px-3 py-1 rounded-full">
            Destination Excursions
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950">
            {headline}
          </h2>
          <p className="font-sans text-slate-600 text-lg leading-relaxed">
            {intro}
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories?.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-gold-400/30 hover:bg-gold-400/5 transition-all duration-300 shadow-sm"
            >
              <span className="inline-block text-gold-400 mb-4">
                {idx === 0 ? <Anchor className="w-8 h-8" /> : idx === 1 ? <Compass className="w-8 h-8" /> : <Map className="w-8 h-8" />}
              </span>
              <h3 className="font-display text-xl text-navy-950 mb-3">{cat.name}</h3>
              <p className="font-sans text-slate-600 text-xs md:text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Offset split: All-Inclusive vs Plus AND Expedition Landings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: Fare comparison */}
          <div className="lg:col-span-5 bg-navy-950 text-white rounded-[32px] p-8 md:p-10 flex flex-col justify-between border border-navy-900 shadow-xl relative overflow-hidden">
            {/* Background image overlay */}
            {shipImg && (
              <div className="absolute inset-0 opacity-10">
                <MasterImage src={shipImg} alt="Silversea luxury ship" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="space-y-6 relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">
                Fare Tiers Compared
              </span>
              <h3 className="font-display text-3xl text-white">
                {allInclusivePlus.title}
              </h3>
              <p className="font-sans text-slate-300 text-sm leading-relaxed">
                {allInclusivePlus.desc}
              </p>
              <ul className="space-y-3 pt-4">
                {allInclusivePlus.items?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span className="font-sans text-slate-200 text-xs md:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right panel: Expedition Inclusions */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-[32px] p-8 md:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">
                Remote Explorations
              </span>
              <h3 className="font-display text-3xl text-navy-950">
                {expeditionLandings.title}
              </h3>
              <p className="font-sans text-slate-600 text-sm leading-relaxed">
                {expeditionLandings.desc}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {expeditionLandings.bullets?.map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-150 p-5 rounded-2xl shadow-sm">
                    <h4 className="font-display text-base text-navy-900 font-bold mb-1">{item.title}</h4>
                    <p className="font-sans text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual bottom banner */}
            {expeditionImg && (
              <div className="mt-8 relative h-32 rounded-2xl overflow-hidden shadow-inner">
                <MasterImage src={expeditionImg} alt="Zodiac operations" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-950/20"></div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default InclusionsExcursionMatrix;
