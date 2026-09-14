import React, { useState } from 'react';
import FadeIn from './FadeIn';

const RvcExpertAdvice = ({ data, image }) => {
  const [selectedId, setSelectedId] = useState('dining');

  if (!data) return null;

  const currentOption = data.options?.find((opt) => opt.id === selectedId) || data.options?.[0];

  return (
    <section className="w-full py-20 lg:py-28 bg-ice-50 relative overflow-hidden">
      {/* Decorative accent vector */}
      <div className="absolute right-0 bottom-1/4 w-40 h-80 bg-ts-gold/5 rounded-l-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-14 text-center">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">EXPERT PLANNING ADVICE</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-ts-gold mx-auto mt-5"></div>
          <p className="font-sans text-sm text-slate-650 mt-6 max-w-2xl mx-auto leading-relaxed">
            {data.intro}
          </p>
        </FadeIn>

        {/* 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Visual card & Credentials Summary (cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {image && (
              <FadeIn className="rounded-3xl overflow-hidden shadow-md border border-slate-200 h-64 relative">
                <img
                  src={image}
                  alt="Sydney Harbor Cruising"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-sans text-[9px] text-ts-gold font-bold uppercase tracking-widest block mb-2">DECADE PLANNER</span>
                  <p className="font-serif text-sm text-slate-200 leading-normal font-light">
                    "Choose the travel experience first, and the ship second."
                  </p>
                </div>
              </FadeIn>
            )}

            <FadeIn className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex-1">
              <h4 className="font-display text-sm font-bold text-navy-950 uppercase tracking-wider mb-4">Angela's Planning Checklist</h4>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-ts-gold mt-1.5 flex-shrink-0"></span>
                  <p className="font-sans text-xs text-slate-650 leading-relaxed font-light">
                    Select Regent if you want shore excursions pre-arranged and built into the cruise budget.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-ts-gold mt-1.5 flex-shrink-0"></span>
                  <p className="font-sans text-xs text-slate-650 leading-relaxed font-light">
                    Select Crystal if your travel days center around fine dining, premium wines, and live lounge performances.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-ts-gold mt-1.5 flex-shrink-0"></span>
                  <p className="font-sans text-xs text-slate-650 leading-relaxed font-light">
                    Compare total flight, pre-hotel, laundry, and butler coordinates before making a choice based on base fare.
                  </p>
                </li>
              </ul>
            </FadeIn>
          </div>

          {/* Right Column: Interactive Fit Selector Board (cols 6-12) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            <div>
              <h4 className="font-display text-sm font-bold text-navy-950 uppercase tracking-wider mb-6 pb-2 border-b border-slate-100">
                What matters most to you on a cruise?
              </h4>
              
              {/* Option Selector Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {data.options?.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedId(opt.id)}
                    className={`px-4 py-3 rounded-2xl font-sans text-xs font-bold transition-all duration-300 border text-center ${
                      selectedId === opt.id
                        ? 'bg-navy-950 text-white border-navy-950 shadow-md'
                        : 'bg-white hover:bg-slate-50 text-slate-600 hover:text-navy-950 border-slate-200'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Results Display Popup Box */}
            {currentOption && (
              <FadeIn
                key={selectedId}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-1 bg-ts-gold"></div>
                <span className="font-sans text-[8px] font-bold text-slate-400 tracking-widest uppercase block mb-1">
                  OUR ADVISOR RECOMMENDATION
                </span>
                
                <div className="flex items-center justify-between mb-4">
                  <h5 className="font-display text-base font-bold text-navy-950">
                    Match: {currentOption.match}
                  </h5>
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase ${
                    currentOption.match === 'Regent Seven Seas Cruises' ? 'bg-navy-950 text-white' : 'bg-ts-gold text-navy-950'
                  }`}>
                    {currentOption.match === 'Regent Seven Seas Cruises' ? 'Regent' : 'Crystal'}
                  </span>
                </div>

                <p className="font-sans text-xs sm:text-sm text-slate-650 leading-relaxed font-light">
                  {currentOption.desc}
                </p>
              </FadeIn>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default RvcExpertAdvice;
