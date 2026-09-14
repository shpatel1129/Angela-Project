import React, { useState } from 'react';
import FadeIn from './FadeIn';

const UltimateFleetShowcase = ({ image }) => {
  const [activeShip, setActiveShip] = useState(0);

  const ships = [
    {
      name: "Wind Star",
      type: "Sailing Yacht",
      bestFor: "Sailing, Romance & Intimacy",
      desc: "Wind Star represents the intimate sailing-yacht experience that many travelers associate with Windstar. Its smaller scale creates a very different atmosphere from conventional cruising — fewer guests, shorter distances between spaces and a stronger sense that the yacht itself is part of the journey.",
      appeal: ["Couples", "Sailing enthusiasts", "Romantic travelers", "Experienced cruisers"],
      tradeoff: "Accommodation space is more compact. Travelers accustomed to large contemporary suites should carefully review cabin categories."
    },
    {
      name: "Wind Spirit",
      type: "Sailing Yacht",
      bestFor: "Tahiti, Romance & Sailing",
      desc: "Wind Spirit is particularly compelling for travelers considering French Polynesia. Combining an intimate sailing yacht with destinations such as Tahiti, Bora Bora and Moorea creates an experience that feels fundamentally different from staying at one island resort.",
      appeal: ["Honeymooners", "Anniversary travelers", "Couples", "Repeat Tahiti visitors"],
      tradeoff: null
    },
    {
      name: "Wind Surf",
      type: "Sailing Yacht",
      bestFor: "Sailing + More Ship Space",
      desc: "Wind Surf provides another way to experience Windstar's sailing concept. Its larger scale can appeal to travelers who love the idea of sailing but want somewhat more room onboard — a useful middle ground for first-time Windstar guests.",
      appeal: ["First-time Windstar guests", "Sailing enthusiasts wanting more space"],
      tradeoff: null
    },
    {
      name: "Star Breeze",
      type: "Motor Yacht",
      bestFor: "Travelers Wanting More Suite Space",
      desc: "Star Breeze can be a strong choice for travelers who love Windstar's small-ship concept but want a more spacious accommodation experience. It is particularly interesting for luxury travelers who want a yacht atmosphere without compact accommodation.",
      appeal: ["Suite lovers", "Space-conscious travelers"],
      tradeoff: null
    },
    {
      name: "Star Legend",
      type: "Motor Yacht",
      bestFor: "Spacious Yacht-Style Cruising",
      desc: "Star Legend provides the Star Class experience with all-suite accommodations and an intimate motor-yacht atmosphere. A good match for travelers who prioritize suite space, comfort and relaxed luxury.",
      appeal: ["Suite space seekers", "Comfort-focused travelers", "Dining enthusiasts"],
      tradeoff: null
    },
    {
      name: "Star Pride",
      type: "Motor Yacht",
      bestFor: "Suite-Oriented Luxury",
      desc: "Star Pride is another all-suite Windstar motor yacht particularly attractive to travelers accustomed to more spacious luxury accommodations. If cabin space is central to your definition of luxury, Star Class deserves serious consideration.",
      appeal: ["Luxury travelers", "Suite-oriented guests"],
      tradeoff: null
    },
    {
      name: "Star Seeker",
      type: "Newer-Generation Yacht",
      bestFor: "Newer-Ship Travelers, Alaska & Japan",
      desc: "Star Seeker represents an important evolution in Windstar's small-ship strategy, giving travelers a newer-generation yacht experience while supporting itineraries in destinations such as Alaska and Japan.",
      appeal: ["Newer-ship travelers", "Alaska and Japan enthusiasts", "Destination explorers"],
      tradeoff: null
    }
  ];

  const comparisonRows = [
    { feature: "Classic sailing experience", sailing: "Excellent", motor: "Limited" },
    { feature: "Yacht atmosphere", sailing: "Excellent", motor: "Excellent" },
    { feature: "Accommodation space", sailing: "More compact", motor: "Generally more spacious" },
    { feature: "Suite emphasis", sailing: "Moderate", motor: "Strong" },
    { feature: "Romance", sailing: "Excellent", motor: "Excellent" },
    { feature: "Best for sailing enthusiasts", sailing: "Excellent", motor: "Limited" },
    { feature: "Best for suite lovers", sailing: "Good", motor: "Excellent" }
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <FadeIn>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
                Fleet Guide
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-6 leading-tight">
                Windstar Ships: Which Yacht Is Right for You?
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed mb-4">
                Windstar's fleet is not a collection of identical ships with different names. The sailing yachts and motor yachts provide meaningfully different experiences.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mt-6">
                <p className="font-sans text-navy-950 text-sm font-medium italic">
                  "The right Windstar ship is not necessarily the newest or most expensive. It is the ship that best matches the way you want to travel."
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img
                src={image}
                alt="Windstar fleet aerial view"
                className="relative z-10 w-full h-[400px] object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

        {/* Ship tabs */}
        <FadeIn delay={0.1}>
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {ships.map((ship, idx) => (
              <button
                key={idx}
                onClick={() => setActiveShip(idx)}
                className={`font-display text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all duration-300 border ${
                  activeShip === idx
                    ? 'bg-navy-950 text-gold-400 border-navy-950 shadow-lg'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-gold-400'
                }`}
              >
                {ship.name}
              </button>
            ))}
          </div>

          {/* Active ship detail */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className="font-display text-2xl text-navy-950">{ships[activeShip].name}</h3>
              <span className="bg-navy-950 text-gold-400 font-display text-xs uppercase tracking-widest px-3 py-1 rounded-lg font-bold">
                {ships[activeShip].type}
              </span>
            </div>
            <p className="text-gold-500 text-xs font-display uppercase tracking-widest mb-4">
              Best for: {ships[activeShip].bestFor}
            </p>
            <p className="font-sans text-slate-600 text-sm font-light leading-relaxed mb-6">
              {ships[activeShip].desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {ships[activeShip].appeal.map((tag, i) => (
                <span key={i} className="bg-white border border-slate-200 text-navy-950 font-display text-xs px-3 py-1.5 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
            {ships[activeShip].tradeoff && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
                <p className="font-sans text-amber-800 text-xs font-light leading-relaxed">
                  <strong className="font-medium">Trade-off:</strong> {ships[activeShip].tradeoff}
                </p>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Comparison table */}
        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="font-display text-xl text-navy-950 text-center mb-8">
              Sailing Yacht vs. Motor Yacht
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-navy-950">
                    <th className="text-left font-display text-xs uppercase tracking-wider text-slate-300 py-3 px-5 rounded-tl-xl">Feature</th>
                    <th className="text-center font-display text-xs uppercase tracking-wider text-gold-400 py-3 px-5">Sailing Yachts</th>
                    <th className="text-center font-display text-xs uppercase tracking-wider text-gold-400 py-3 px-5 rounded-tr-xl">Motor Yachts</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                      <td className="font-sans text-navy-950 text-sm font-medium py-3 px-5">{row.feature}</td>
                      <td className="font-sans text-slate-600 text-sm text-center py-3 px-5">{row.sailing}</td>
                      <td className="font-sans text-slate-600 text-sm text-center py-3 px-5">{row.motor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 bg-navy-950 rounded-xl p-6 text-center">
              <p className="font-sans text-slate-200 text-sm font-light">
                <strong className="text-gold-400 font-medium">Wind Class</strong> = Sailing-first experience &nbsp;•&nbsp;
                <strong className="text-gold-400 font-medium">Star Class</strong> = Suite-first yacht experience
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default UltimateFleetShowcase;
