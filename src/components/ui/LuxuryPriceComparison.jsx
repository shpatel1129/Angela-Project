import React from 'react';
import FadeIn from './FadeIn';

const LuxuryPriceComparison = ({ data, title: propTitle, lead: propLead, factors: propFactors, brandObservations: propBrandObs, howToCompare: propHowToCompare }) => {
  const content = data || {};
  const eyebrow = content.eyebrow || "Luxury Cruise Pricing";
  const title = propTitle || content.title;
  const lead = propLead || content.lead;
  const pricingFactorsTitle = content.pricingFactorsTitle || "Luxury cruise pricing changes based on:";
  const factors = propFactors || content.factors || [];
  const brandObservations = propBrandObs || content.brandObservations || [];
  const howToCompare = propHowToCompare || content.howToCompare || {};

  if (!title) return null;

  return (
    <section className="w-full py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-3 block">
              {eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
              {title}
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto my-4"></div>
            {lead && (
              <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed">
                {lead}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
            
            {/* Left Column: Dynamic Pricing Factors & Line Observations */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl text-navy-950 font-bold mb-4">
                  {pricingFactorsTitle}
                </h3>
                
                {/* 12 Factors Pill Grid */}
                {factors.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {factors.map((factor, idx) => (
                      <span key={idx} className="text-xs px-3 py-1.5 bg-white border border-slate-200 rounded-full font-medium text-slate-700 shadow-2xs">
                        ✦ {factor}
                      </span>
                    ))}
                  </div>
                )}

                {/* Brand Pricing Observations */}
                {brandObservations.length > 0 && (
                  <div className="space-y-4">
                    {brandObservations.map((obs, idx) => (
                      <div key={idx} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                        <span className="font-bold text-navy-950 text-sm block mb-1">
                          {obs.brand || obs.line}
                        </span>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                          {obs.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Apples-to-Apples Case Study */}
            {howToCompare.title && (
              <div className="lg:col-span-5 bg-navy-950 text-white rounded-3xl p-8 lg:p-10 shadow-xl border border-navy-900 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gold-400/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-bold mb-2 block">
                    Case Study
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl text-white font-bold mb-4">
                    {howToCompare.title}
                  </h3>
                  
                  {howToCompare.scenarioLead && (
                    <p className="text-slate-300 text-xs sm:text-sm mb-4 font-light">
                      {howToCompare.scenarioLead}
                    </p>
                  )}

                  {/* Cruise A, B, C Scenarios */}
                  {howToCompare.scenarios && (
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {howToCompare.scenarios.map((scen, idx) => (
                        <div key={idx} className="p-3 bg-white/10 rounded-xl text-center border border-white/10">
                          <span className="text-xs font-bold text-gold-400 block">{scen}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {howToCompare.notBestValue && (
                    <p className="text-gold-300 text-xs sm:text-sm font-semibold mb-4">
                      {howToCompare.notBestValue}
                    </p>
                  )}

                  {howToCompare.cruiseARequires && (
                    <p className="text-slate-300 text-xs mb-2">
                      {howToCompare.cruiseARequires}
                    </p>
                  )}

                  {howToCompare.additionalPurchases && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {howToCompare.additionalPurchases.map((item, idx) => (
                        <span key={idx} className="text-[11px] px-2.5 py-1 bg-white/10 rounded-md text-slate-200">
                          + {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {howToCompare.cruiseCComparison && (
                    <p className="text-slate-300 text-xs leading-relaxed font-light mb-6">
                      {howToCompare.cruiseCComparison}
                    </p>
                  )}
                </div>

                {/* Conclusion Badge */}
                {howToCompare.conclusion && (
                  <div className="p-4 bg-gold-500/15 border border-gold-500/30 rounded-2xl relative z-10">
                    <p className="font-display text-sm text-gold-300 italic font-semibold text-center">
                      "{howToCompare.conclusion}"
                    </p>
                  </div>
                )}
              </div>
            )}

          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default LuxuryPriceComparison;
