import React from 'react';

/**
 * GreeceFirstTripUpgrades
 * Renders Part 5 (Genuinely worth paying more for).
 * Layout: 2-column or 4-column card grid with gold borders, custom icons, and detail text.
 */
const GreeceFirstTripUpgrades = ({ upgrades = [] }) => {
  return (
    <section className="py-24 bg-slate-50 border-t border-b border-slate-200/60">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">
            LUXURY EXPERIENCE UPGRADES
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            What is Genuinely Worth Paying More For?
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            True luxury is about reducing friction and buying unmatched access. These four trip upgrades deliver maximum value.
          </p>
        </div>

        {/* 2x2 Grid of upgrades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {upgrades.map((up, idx) => (
            <div
              key={idx}
              className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-sans font-bold text-blue-600 tracking-widest bg-blue-50 px-3 py-1 rounded-md mb-6 inline-block">
                  RECOMMENDED UPGRADE
                </span>
                <h3 className="font-display text-xl font-semibold text-navy-950 mb-4">
                  {up.name}
                </h3>
                <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                  {up.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GreeceFirstTripUpgrades;
