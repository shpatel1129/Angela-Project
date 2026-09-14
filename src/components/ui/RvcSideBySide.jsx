import React, { useState } from 'react';
import FadeIn from './FadeIn';

const RvcSideBySide = ({ data, image }) => {
  const [activeCategory, setActiveCategory] = useState('space');

  if (!data) return null;

  const rows = data.table?.rows || [];

  // Group comparison rows into 4 distinct luxury categories
  const categories = {
    space: {
      label: "Accommodations & Fleet",
      badge: "LIVING SPACES",
      rows: rows.filter(r => ["Luxury Style", "Fleet Size", "Standard Suites", "Balconies"].includes(r[0]))
    },
    dining: {
      label: "Gastronomy & Beverage",
      badge: "CULINARY STARS",
      rows: rows.filter(r => ["Specialty Dining", "Dining Quality", "Premium Drinks"].includes(r[0]))
    },
    value: {
      label: "Inclusions & Pricing",
      badge: "TRUE LUXURY VALUE",
      rows: rows.filter(r => ["Gratuities", "Shore Excursions", "Valet Laundry", "Wi-Fi"].includes(r[0]))
    },
    service: {
      label: "Service & Vibe",
      badge: "ONBOARD HOSPITALITY",
      rows: rows.filter(r => ["Butler Service", "Entertainment", "Service Style", "Vibe Onboard"].includes(r[0]))
    }
  };

  const currentCategory = categories[activeCategory] || categories.space;

  return (
    <section id="comparison-matrix" className="w-full py-20 lg:py-28 bg-ice-50 relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute right-0 top-1/4 w-32 h-64 bg-ts-gold/5 rounded-l-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-14 text-center">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">AT A GLANCE COMPARISON</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-ts-gold mx-auto mt-5"></div>
          <p className="font-sans text-sm text-slate-655 mt-6 max-w-2xl mx-auto leading-relaxed">
            {data.intro}
          </p>
        </FadeIn>

        {/* Category Card Selector Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {Object.keys(categories).map((key) => {
            const cat = categories[key];
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`text-left p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between items-start min-h-[140px] ${
                  isActive
                    ? 'bg-navy-950 border-navy-950 text-white shadow-lg'
                    : 'bg-white border-slate-200 text-navy-950 hover:border-slate-350 shadow-sm'
                }`}
              >
                <span className={`font-sans text-[8px] font-bold tracking-widest uppercase mb-2 ${
                  isActive ? 'text-ts-gold' : 'text-slate-400'
                }`}>
                  {cat.badge}
                </span>
                <h4 className="font-display text-sm font-bold leading-snug">{cat.label}</h4>
                <span className={`mt-4 font-sans text-[9px] font-semibold uppercase tracking-wider ${
                  isActive ? 'text-white' : 'text-slate-505'
                }`}>
                  {isActive ? 'Active Review •' : 'Explore Category →'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Comparison Output Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Side-by-Side Detailed Comparison Cards (cols 1-8) */}
          <div className="lg:col-span-8 space-y-4">
            {currentCategory.rows.map((row, idx) => (
              <FadeIn
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
              >
                {/* Feature Metric Name */}
                <div className="sm:w-1/4">
                  <span className="font-sans text-[8px] font-bold tracking-widest text-slate-450 block uppercase mb-1">METRIC TYPE</span>
                  <h5 className="font-display text-sm font-bold text-navy-950">{row[0]}</h5>
                </div>

                {/* Regent Detail Block */}
                <div className="flex-1 p-3 bg-slate-50 rounded-xl border-l-2 border-navy-950">
                  <span className="font-sans text-[8px] font-bold text-navy-950 uppercase tracking-widest block mb-0.5">REGENT SEVEN SEAS</span>
                  <p className="font-sans text-xs text-slate-650 leading-relaxed font-light">{row[1]}</p>
                </div>

                {/* Crystal Detail Block */}
                <div className="flex-1 p-3 bg-slate-50 rounded-xl border-l-2 border-ts-gold">
                  <span className="font-sans text-[8px] font-bold text-ts-gold uppercase tracking-widest block mb-0.5">CRYSTAL CRUISES</span>
                  <p className="font-sans text-xs text-slate-650 leading-relaxed font-light">{row[2]}</p>
                </div>

                {/* Winner Indicator Badge */}
                <div className="sm:w-24 text-right flex sm:flex-col items-center justify-between sm:justify-center gap-1">
                  <span className="font-sans text-[8px] text-slate-450 uppercase tracking-wider">WINNER</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase ${
                    row[3] === 'Regent' ? 'bg-navy-950 text-white' :
                    row[3] === 'Crystal' ? 'bg-ts-gold text-navy-950 font-semibold' :
                    'bg-slate-100 text-slate-550'
                  }`}>
                    {row[3]}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Right Column: Visual Ship Asset Display Card (cols 9-12) */}
          {image && (
            <div className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-md border border-slate-200/80 min-h-[300px]">
              <img
                src={image}
                alt="Luxury Cruise Vessel View"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-sans text-[9px] text-ts-gold font-bold tracking-[0.2em] uppercase block mb-1">FLEET DUALS</span>
                <p className="font-serif text-[11px] text-slate-200 leading-normal font-light">
                  Alternate between accommodation details, culinary standards, and inclusiveness ratings above to discover your best cruise match.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default RvcSideBySide;
