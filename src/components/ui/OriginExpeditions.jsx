import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { ShieldCheck, Compass, Info, Bird, Waves, Eye } from 'lucide-react';

const OriginExpeditions = ({ title, intro, zodiacIntro, landings, wildlife, expeditionImage }) => {
  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden border-t border-slate-200/50" id="expeditions">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-5">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-ts-gold uppercase bg-navy-950/5 px-5 py-2 rounded-full border border-slate-200">
            Expeditions & Wildlife
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy-950 leading-tight">
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-ts-gold"></div>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            {intro}
          </p>
        </div>

        {/* 50:50 Split: Zodiac Boarding & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
          {/* Left: Expedition Image */}
          {expeditionImage && (
            <div className="lg:col-span-5 relative order-last lg:order-first">
              <div className="absolute -inset-3 bg-slate-200 rounded-[32px] -z-10"></div>
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border border-slate-200/50">
                <MasterImage src={expeditionImage} alt="Zodiac Boarding in Galápagos" className="w-full h-full object-cover" />
              </div>
            </div>
          )}

          {/* Right: Zodiac Operations Text */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-2xl text-navy-950 font-bold flex items-center gap-3">
              <Compass className="w-6 h-6 text-ts-gold" />
              Zodiac Operations & Boarding
            </h3>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              {zodiacIntro || "Zodiacs are the lifeblood of Galápagos exploration. Because there are no traditional docks on most volcanic islands, guests transition from ship to Zodiac, which naturalists steer directly onto the beaches or coves. Boarding is highly structured, and safety is prioritized at every stage."}
            </p>
            <div className="bg-white border border-slate-200/50 rounded-2xl p-6 flex gap-4 items-start">
              <ShieldCheck className="w-5 h-5 text-ts-gold shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h5 className="font-display text-sm font-bold text-navy-950 uppercase tracking-wider">Mobility Priority</h5>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Guests hold handrails and step between stable platforms assisted by crew. If balance is a major concern, discuss options with your travel advisor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wet vs. Dry Landings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {landings && landings.map((land, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 shadow-sm rounded-3xl p-8 space-y-4">
              <span className={`text-[9px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block ${
                idx === 0 ? 'bg-sky-50 text-sky-600 border border-sky-100' : 'bg-amber-50 text-amber-600 border border-amber-100'
              }`}>
                {land.type}
              </span>
              <h4 className="font-display text-xl text-navy-950 font-bold">{land.title}</h4>
              <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                {land.description}
              </p>
            </div>
          ))}
        </div>

        {/* Wildlife Sightings Checklist Card */}
        <div className="bg-navy-950 text-white rounded-[40px] p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-ts-gold/5 rounded-full filter blur-[100px]"></div>

          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <h3 className="font-display text-2xl sm:text-3xl text-white font-bold flex items-center gap-3">
                <Bird className="w-7 h-7 text-ts-gold" />
                Wildlife Sightings Guide
              </h3>
              <p className="font-sans text-slate-400 text-xs sm:text-sm">
                A checklist of extraordinary animals to look out for during your Silver Origin excursions:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
              {wildlife && wildlife.map((animal, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                  <span className="text-[10px] font-bold text-ts-gold uppercase tracking-wider block mb-2">
                    {animal.category || "Species"}
                  </span>
                  <h4 className="font-display text-base font-bold text-white mb-2">{animal.name}</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {animal.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OriginExpeditions;
