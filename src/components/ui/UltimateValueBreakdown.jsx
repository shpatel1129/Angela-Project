import React from 'react';
import FadeIn from './FadeIn';

const UltimateValueBreakdown = () => {
  const inclusions = [
    "All meals in all venues, including specialty dining",
    "Non-alcoholic beverages, including specialty coffees, teas, sodas and water",
    "Open deck dining events and beach barbecues",
    "Onboard entertainment and daily presentations",
    "Access to the Watersports Platform and equipment",
    "Fully equipped fitness center and steam room",
    "Port taxes, fees and onboard gratuities (in All-In package)"
  ];

  const exclusions = [
    "Alcoholic beverages (unless upgraded to All-In package)",
    "Shore excursions and private guides",
    "Spa treatments and salon services",
    "Laundry services (unless in package)",
    "Wi-Fi internet access (unless upgraded)",
    "Transfers and pre/post hotel stays"
  ];

  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              Pricing & Inclusions
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
              How Much Does a Windstar Cruise Cost?
            </h2>
            <p className="font-sans text-slate-500 font-light leading-relaxed">
              Evaluating the cost of a Windstar cruise requires looking beyond the cruise fare itself and understanding what is actually included in the price.
            </p>
          </FadeIn>
        </div>

        {/* Inclusions / Exclusions Split */}
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

        {/* Package Offer Callout */}
        <FadeIn delay={0.15}>
          <div className="max-w-4xl mx-auto bg-navy-950 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(201,161,92,0.1),transparent_60%)] z-0"></div>
            <div className="relative z-10">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-bold mb-2 block">
                Booking Tip
              </span>
              <h3 className="font-display text-xl text-white mb-4">
                The Windstar "All-In" Package
              </h3>
              <p className="font-sans text-slate-300 text-sm font-light leading-relaxed max-w-2xl mx-auto mb-6">
                Windstar offers an "All-In" package upgrade (typically around $89 per guest, per day) that includes unlimited Wi-Fi, unlimited wine, beer, and cocktails, and all gratuities. For most travelers, this package provides exceptional value and peace of mind.
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default UltimateValueBreakdown;
