import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { ChefHat, Sun, Clock, Coffee, Sparkles } from 'lucide-react';

const OriginDiningExperience = ({ title, intro, venues, timeline, diningImage }) => {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden" id="dining">
      <div className="absolute top-10 right-0 w-96 h-96 bg-sky-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-5">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-ts-gold uppercase bg-navy-950/5 px-5 py-2 rounded-full border border-slate-200">
            Dining & Onboard Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy-950 leading-tight">
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-ts-gold"></div>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Dining Venues Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left: Asymmetric Card List of Dining Options */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-display text-2xl text-navy-950 font-bold flex items-center gap-3">
              <ChefHat className="w-6 h-6 text-ts-gold" />
              Culinary Spaces
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {venues && venues.map((venue, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:shadow-sm transition-all space-y-4">
                  <span className="text-[9px] font-bold tracking-widest text-ts-gold uppercase bg-white px-3 py-1 rounded-full border border-slate-100 inline-block">
                    {venue.type || "Dining"}
                  </span>
                  <h4 className="font-display text-lg text-navy-950 font-bold">{venue.name}</h4>
                  <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {venue.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dining Image (50:50 balance) */}
          {diningImage && (
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-3 bg-slate-100 rounded-[32px] -z-10"></div>
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border border-slate-200/50">
                <MasterImage src={diningImage} alt="Silversea Dining Experience" className="w-full h-full object-cover" />
              </div>
            </div>
          )}
        </div>

        {/* Typical Expedition Day Timeline */}
        <div className="bg-slate-900 text-white rounded-[40px] p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-navy-950 z-0"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-ts-gold/10 rounded-full filter blur-[60px]"></div>

          <div className="relative z-10 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-ts-gold bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                Day in the Life
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white font-bold">
                A Typical Silver Origin Day
              </h3>
              <p className="font-sans text-slate-400 text-xs sm:text-sm">
                Follow the premium, active rhythm of exploring French Polynesia or the Galápagos Islands:
              </p>
            </div>

            {/* Horizontal / Vertical Timeline list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
              {timeline && timeline.map((step, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-ts-gold uppercase tracking-wider">{step.time}</span>
                      <span className="text-white/20 text-3xl font-display font-bold">0{idx + 1}</span>
                    </div>
                    <h4 className="font-display text-base font-bold text-white">{step.title}</h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OriginDiningExperience;
