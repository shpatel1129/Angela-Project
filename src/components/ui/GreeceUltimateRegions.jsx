import React, { useState } from 'react';

/**
 * GreeceUltimateRegions
 * Showcase of the 6 core geographical regions of Greece: Mainland, Cyclades, Ionian, Crete, Dodecanese, Saronic/Sporades.
 */
const GreeceUltimateRegions = ({ regions = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-blue-600 uppercase mb-3 block">
            GEOGRAPHIC BLUEPRINTS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-navy-950 tracking-tight mb-6">
            Where to Go: <span className="font-serif italic text-blue-900">Greece's 6 Key Regions</span>
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Greece is not homogenous. Each island group and mainland province possesses distinct architecture, maritime conditions, culinary roots, and cultural heritage.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {regions.map((reg, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-navy-950 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-700 hover:bg-blue-50 border border-slate-200 hover:border-blue-200'
              }`}
            >
              {reg.region}
            </button>
          ))}
        </div>

        {/* Active Region Display Card */}
        {regions[activeTab] && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-sans font-bold text-blue-600 uppercase tracking-widest block mb-2">
                    {regions[activeTab].tagline}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-navy-950">
                    {regions[activeTab].region}
                  </h3>
                </div>

                <p className="font-sans text-slate-700 text-base sm:text-lg leading-relaxed font-light">
                  {regions[activeTab].description}
                </p>

                <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100">
                  <h4 className="text-xs font-sans font-bold text-navy-950 uppercase tracking-wider mb-2">
                    Ideal Traveler Match:
                  </h4>
                  <p className="font-sans text-sm text-slate-700 font-light">
                    {regions[activeTab].bestFor}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-5">
                <h4 className="font-display text-lg font-light text-blue-300 tracking-wide border-b border-slate-800 pb-3">
                  Signature Highlights & Anchorages
                </h4>
                <ul className="space-y-3 font-sans text-sm">
                  {regions[activeTab].highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-3 text-slate-200">
                      <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GreeceUltimateRegions;
