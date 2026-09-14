import React, { useState } from 'react';
import FadeIn from './FadeIn';

const RciExpertAdvice = ({ mistakes, options, image }) => {
  const [selectedId, setSelectedId] = useState('med');

  if (!options) return null;

  const currentOption = options.find((opt) => opt.id === selectedId) || options[0];

  return (
    <section className="w-full py-20 lg:py-28 bg-stone-50 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute right-0 top-1/4 w-32 h-64 bg-ts-gold/5 rounded-l-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-16 text-center">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">EXPERT PLANNING DESK</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            Insider Travel Advisor Strategy
          </h2>
          <div className="w-20 h-1 bg-ts-gold mx-auto mt-5"></div>
        </FadeIn>

        {/* 2-Column Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: 5 Booking Mistakes (cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {image && (
              <FadeIn className="rounded-3xl overflow-hidden shadow-md border border-slate-200 h-48 relative">
                <img src={image} alt="Luxury cruise veranda overlook" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-navy-950/30"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <p className="font-serif text-sm text-white italic">
                    "Decades of luxury cruising expertise."
                  </p>
                </div>
              </FadeIn>
            )}

            <FadeIn className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex-1">
              <h4 className="font-display text-sm font-bold text-navy-950 uppercase tracking-wider mb-6 pb-2 border-b border-slate-100">
                5 Booking Mistakes to Avoid
              </h4>
              <ul className="space-y-4">
                {mistakes?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-navy-950 text-white flex-shrink-0 flex items-center justify-center font-sans text-[10px] font-bold mt-0.5">
                      !
                    </span>
                    <div>
                      <h5 className="font-sans text-xs font-bold text-navy-950">{item.title}</h5>
                      <p className="font-sans text-[11px] text-slate-655 leading-relaxed font-light mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Right Column: Interactive Fit Selector Matchmaker (cols 6-12) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div>
              <h4 className="font-display text-sm font-bold text-navy-950 uppercase tracking-wider mb-6 pb-2 border-b border-slate-100">
                Select Your Sailing Focus
              </h4>
              
              {/* Option Selector Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedId(opt.id)}
                    className={`px-4 py-3.5 rounded-2xl font-sans text-xs font-bold transition-all duration-300 border text-center ${
                      selectedId === opt.id
                        ? 'bg-navy-950 text-white border-navy-950 shadow-md'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-650 hover:text-navy-950 border-slate-200/60'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Recommendation card */}
            {currentOption && (
              <FadeIn
                key={selectedId}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden flex-1 flex flex-col justify-between"
              >
                <div>
                  <span className="font-sans text-[8px] font-bold text-slate-400 tracking-widest uppercase block mb-1">
                    OUR SPECIALIST RECOMMENDATION
                  </span>
                  <h5 className="font-display text-base font-bold text-navy-950 mb-3 pb-2 border-b border-slate-200/60">
                    {currentOption.title}
                  </h5>
                  <p className="font-sans text-xs sm:text-sm text-slate-650 leading-relaxed font-light mb-6">
                    {currentOption.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div>
                    <span className="font-sans text-[9px] font-bold text-navy-950 block">Angela Hughes</span>
                    <span className="font-sans text-[8px] text-slate-400 uppercase tracking-wider block">CEO, Trips & Ships</span>
                  </div>
                  <span className="font-serif text-[11px] text-ts-gold italic">Expert Matchmaker Advice</span>
                </div>
              </FadeIn>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default RciExpertAdvice;
