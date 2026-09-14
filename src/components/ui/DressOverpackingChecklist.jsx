import React from 'react';
import FadeIn from './FadeIn';

const DressOverpackingChecklist = () => {
  const bringItems = [
    { name: "Versatile layering garments (fleeces, light sweaters)" },
    { name: "3 pairs of high-quality, comfortable shoes" },
    { name: "Polished casual shirts and tailored trousers" },
    { name: "Essential medication in your carry-on luggage" },
    { name: "Sun protection, hats, and sunglasses" }
  ];

  const leaveItems = [
    { name: "Excessive evening formalwear (tuxedos are optional)" },
    { name: "Too many pairs of heavy shoes or spike heels" },
    { name: "Bulky, single-purpose sweaters or heavy jackets" },
    { name: "Uncomfortable dress clothes you won't wear" },
    { name: "Valuable jewelry you won't feel secure wearing" }
  ];

  return (
    <section className="w-full bg-slate-900 py-24 text-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Checklist
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-slate-100 mb-6">
              Silversea Packing Checklist: Bring vs. Leave at Home
            </h2>
            <p className="font-sans text-slate-400 font-light leading-relaxed">
              Use this simple benchmark to audit your suitcase before departure. Elegant travel is built on packing smart, not heavy.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Bring Card */}
          <FadeIn delay={0.1} className="bg-slate-800/30 border border-slate-855 p-8 rounded-3xl hover:bg-slate-800/50 transition-colors duration-300">
            <h3 className="font-display text-2xl text-gold-400 mb-6 pb-4 border-b border-slate-800 flex justify-between items-center">
              <span>What to Bring</span>
              <span className="text-xs bg-gold-400/10 text-gold-400 px-3 py-1 rounded-full uppercase tracking-wider font-sans font-bold">
                Recommended
              </span>
            </h3>
            <ul className="space-y-4">
              {bringItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-sm text-slate-300 font-sans font-light leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Leave Card */}
          <FadeIn delay={0.2} className="bg-slate-800/30 border border-slate-855 p-8 rounded-3xl hover:bg-slate-800/50 transition-colors duration-300">
            <h3 className="font-display text-2xl text-slate-400 mb-6 pb-4 border-b border-slate-800 flex justify-between items-center">
              <span>What to Leave Behind</span>
              <span className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full uppercase tracking-wider font-sans font-semibold">
                Skip
              </span>
            </h3>
            <ul className="space-y-4">
              {leaveItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-sm text-slate-400 font-sans font-light leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0 mt-2" />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

        </div>

      </div>
    </section>
  );
};

export default DressOverpackingChecklist;
