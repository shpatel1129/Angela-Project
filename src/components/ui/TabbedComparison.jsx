import React, { useState } from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { Check, Circle } from 'lucide-react';

const TabbedComparison = ({ title, mainBrand, competitors, hideVs = false, leftLabel = "Strengths", rightLabel = "Strengths" }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!competitors || competitors.length === 0) return null;

  const activeCompetitor = competitors[activeTab];

  return (
    <section className="w-full py-16 bg-ice-50">
      <div className="max-w-[1024px] mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-4">{title}</h2>
          <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-4 mb-10"></div>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {competitors.map((comp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-2.5 rounded-full font-sans text-sm font-semibold transition-all border ${
                  activeTab === idx
                    ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-navy-300 hover:text-navy-800'
                }`}
              >
                {comp.name}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn key={activeTab}>
          <div className="rounded-2xl border border-slate-100 shadow-lg overflow-hidden bg-white">
            {/* Image Header */}
            <div className="h-56 md:h-72 bg-slate-200 relative overflow-hidden">
              {activeCompetitor.image ? (
                <MasterImage src={activeCompetitor.image} alt={`${activeCompetitor.name} Ship`} className="w-full h-full object-cover absolute inset-0 z-0" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-sans tracking-widest text-sm uppercase z-0">
                  {activeCompetitor.name} Ship Image
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent" />
              <div className="absolute bottom-6 left-8">
                <h3 className="font-display text-3xl text-white italic">{hideVs ? '' : 'vs '}{activeCompetitor.name}</h3>
              </div>
            </div>

            {/* Comparison Content */}
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {/* Main Brand Strengths */}
                <div>
                  <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
                    <span className="bg-navy-900 text-white font-sans text-xs font-bold px-4 py-1.5 rounded">{mainBrand?.name || mainBrand}</span>
                    <span className="font-sans text-xs font-bold text-slate-400 uppercase tracking-[0.15em]">{leftLabel}</span>
                  </div>
                  <ul className="space-y-4">
                    {(activeCompetitor?.mainBrandStrengths || []).map((strength, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-ice-50 p-4 rounded-xl border border-slate-100">
                        <Check className="w-5 h-5 text-navy-700 flex-shrink-0 mt-0.5" />
                        <span className="font-sans text-slate-700 text-sm">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Competitor Strengths */}
                <div>
                  <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
                    <span className="bg-slate-100 text-slate-700 font-sans text-xs font-bold px-4 py-1.5 rounded">{activeCompetitor.name}</span>
                    <span className="font-sans text-xs font-bold text-slate-400 uppercase tracking-[0.15em]">{rightLabel}</span>
                  </div>
                  <ul className="space-y-4">
                    {(activeCompetitor?.competitorStrengths || []).map((strength, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <Circle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span className="font-sans text-slate-600 text-sm">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Best For Section (Optional) */}
              {(activeCompetitor.bestForMainBrand || activeCompetitor.bestForCompetitor) && (
                <div className="mt-12 pt-10 border-t border-slate-100">
                  <h3 className="font-display text-2xl text-navy-950 mb-8 text-center">Who Is Each Brand Best For?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {activeCompetitor.bestForMainBrand && (
                      <div className="bg-ice-50/50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-sans font-bold text-navy-900 uppercase tracking-wider text-sm mb-4">Best For {mainBrand.name}</h4>
                        <ul className="space-y-3">
                          {activeCompetitor.bestForMainBrand.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-navy-400 mt-0.5">•</span>
                              <span className="font-sans text-slate-700 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {activeCompetitor.bestForCompetitor && (
                      <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-sans font-bold text-slate-700 uppercase tracking-wider text-sm mb-4">Best For {activeCompetitor.name}</h4>
                        <ul className="space-y-3">
                          {activeCompetitor.bestForCompetitor.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-slate-400 mt-0.5">•</span>
                              <span className="font-sans text-slate-600 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TabbedComparison;
