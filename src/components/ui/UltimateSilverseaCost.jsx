import React from 'react';
import FadeIn from './FadeIn';

const UltimateSilverseaCost = () => {
  const inclusions = [
    "Private executive transfers from home to airport (Door-to-Door)",
    "Roundtrip international flights and airport transfers",
    "Pre-cruise hotel night (where required by flight schedules)",
    "Butler service in every single suite category",
    "Multiple fine dining restaurants and in-suite 24h dining service",
    "Premium wines, spirits, specialty coffees, juices and soft drinks",
    "Included shore excursions (one per port, per day)",
    "Complimentary standard Wi-Fi across the entire ship",
    "Onboard gratuities included - no tipping expected"
  ];

  const exclusions = [
    "Ultra-premium select vintage wines and spirits",
    "Bespoke private shore excursions or custom land tours",
    "Spa treatments, massages and salon services",
    "Specialty restaurant cover charges (e.g. La Dame, Kaiseki dinner)",
    "Premium high-speed Wi-Fi (streaming capable, unless in top suites)",
    "Personal purchases in the onboard boutiques"
  ];

  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              Pricing &amp; Inclusions
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
              What Is Included in a Silversea Cruise?
            </h2>
            <p className="font-sans text-slate-500 font-light leading-relaxed">
              Silversea is famous for its comprehensive luxury inclusions. Understanding what you get helps define the true value of your investment.
            </p>
          </FadeIn>
        </div>

        {/* Splits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          <FadeIn>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm h-full">
              <h3 className="font-display text-lg text-navy-950 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                What Is Included
              </h3>
              <ul className="space-y-4">
                {inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="font-sans text-slate-600 text-sm font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm h-full">
              <h3 className="font-display text-lg text-navy-950 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                What Is Extra
              </h3>
              <ul className="space-y-4">
                {exclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="font-sans text-slate-600 text-sm font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Fare Callout */}
        <FadeIn delay={0.15}>
          <div className="max-w-4xl mx-auto bg-navy-950 rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(201,161,92,0.1),transparent_60%)] z-0"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-bold mb-2 block">Fare Differences</span>
                <h3 className="font-display text-xl text-white mb-4">Door-to-Door vs. Port-to-Port</h3>
                <p className="font-sans text-slate-300 text-xs font-light leading-relaxed">
                  Silversea offers two primary fare categories: <strong className="text-white">Door-to-Door</strong> fares include private airport transfers, flights, pre-cruise hotels and excursions. <strong className="text-white">Port-to-Port</strong> fares exclude flights and transfers, providing a lower-cost option for flexible luxury travelers.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <p className="font-display text-xs text-gold-400 uppercase tracking-widest mb-2">Angela's Tip</p>
                <p className="font-sans text-slate-300 text-xs font-light leading-relaxed">
                  "Most clients benefit more from the Door-to-Door fare. It offers peace of mind by wrapping all travel logistics, hotels, flights and transfers into one luxury package."
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default UltimateSilverseaCost;
