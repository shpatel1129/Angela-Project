import React from 'react';

/**
 * GreeceUltimateCulinary
 * Gastronomic and wine heritage guide for Crete, Santorini, Sifnos, Athens and indigenous Greek varietals.
 */
const GreeceUltimateCulinary = ({ culinary = [] }) => {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-blue-600 uppercase mb-3 block">
            GASTRONOMIC HERITAGE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-navy-950 tracking-tight mb-6">
            Greek Food & Wine: <span className="font-serif italic text-blue-900">A World of Flavors</span>
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Greek cuisine is rooted in simplicity, pristine Mediterranean ingredients, cold-pressed olive oils, and ancient grape varietals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {culinary.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block">
                {item.island}
              </span>
              <h3 className="font-display text-lg font-medium text-navy-950">
                {item.specialty}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed pt-2 border-t border-slate-200">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Wine Varieties Callout */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-navy-900 to-slate-900 p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                INDIGENOUS VARIETALS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-light">
                Beyond Conventional Wine
              </h3>
              <p className="font-sans text-sm text-slate-300 font-light leading-relaxed">
                Greece is home to some of the world's most distinctive ancient vines that flourish in volcanic and limestone soils.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-sm font-semibold text-blue-300 block mb-1">Assyrtiko</span>
                <span className="text-xs text-slate-300 font-light">Santorini's bone-dry, crisp, mineral-driven volcanic white wine.</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-sm font-semibold text-blue-300 block mb-1">Agiorgitiko</span>
                <span className="text-xs text-slate-300 font-light">Nemea's velvety, red-fruit forward "Blood of Hercules" red.</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-sm font-semibold text-blue-300 block mb-1">Xinomavro</span>
                <span className="text-xs text-slate-300 font-light">Northern Greece's complex, structured "Greek Nebbiolo" red.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreeceUltimateCulinary;
