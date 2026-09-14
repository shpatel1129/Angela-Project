import React from 'react';
import FadeIn from './FadeIn';

const UltimateWindstarOverview = ({ image }) => {
  const luxuryValues = [
    "Intimacy",
    "Small-ship cruising",
    "Yacht atmosphere",
    "Destination access",
    "Personalized service",
    "Relaxation",
    "Authentic experiences",
    "Casual sophistication"
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Top: Split layout — heading + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <FadeIn>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
                Understanding Windstar
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-6 leading-tight">
                What Is Windstar Cruises?
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed mb-4">
                <strong className="text-navy-950 font-medium">Windstar Cruises is a luxury small-ship cruise line known for intimate yacht-style cruising, destination-focused itineraries, personalized service and its distinctive sailing yachts.</strong>
              </p>
              <p className="font-sans text-slate-600 text-sm font-light leading-relaxed mb-4">
                Unlike a traditional mega-ship cruise, Windstar places considerably more emphasis on the destination and the feeling of traveling aboard a private yacht. Its fleet includes classic sailing yachts as well as all-suite motor yachts, giving travelers different ways to experience the brand.
              </p>
              <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                It is not designed to compete directly with mega-ships offering waterparks, enormous entertainment complexes and dozens of restaurants. Instead, Windstar's appeal comes from doing less — and doing it in a more intimate way.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold-500/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img
                src={image}
                alt="Windstar sailing yacht in destination port"
                className="relative z-10 w-full h-[440px] object-cover rounded-3xl shadow-xl border border-slate-100"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

        {/* Highlight statement */}
        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto mb-20">
            <div className="relative bg-navy-950 rounded-2xl p-8 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,161,92,0.08),transparent_60%)] rounded-2xl z-0"></div>
              <div className="relative z-10">
                <h3 className="font-display text-2xl md:text-3xl text-white mb-3 leading-tight">
                  Why Is Windstar So Different?
                </h3>
                <p className="font-sans text-gold-400 text-lg font-medium tracking-wide">
                  Yacht experience first. Cruise itinerary second.
                </p>
                <p className="font-sans text-slate-300 text-sm font-light leading-relaxed mt-4 max-w-xl mx-auto">
                  On a large cruise ship, the vessel itself can be the destination. Windstar takes a different approach — the ship is designed to help you experience the destination.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Luxury values */}
        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-3 block">
                Windstar's Luxury Proposition
              </span>
              <h3 className="font-display text-2xl text-navy-950">
                What Does "Luxury" Mean on Windstar?
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {luxuryValues.map((value, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-center hover:border-gold-400 transition-colors duration-300"
                >
                  <div className="w-8 h-8 mx-auto mb-3 rounded-full bg-navy-950 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="font-display text-xs uppercase tracking-wider text-navy-950 font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default UltimateWindstarOverview;
