import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Ship, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

const LuxuryComparisonBoard = ({ title, subtitle, brands }) => {
  const [selectedBrand, setSelectedBrand] = useState(0);

  if (!brands || brands.length === 0) return null;

  return (
    <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-900/10 rounded-full blur-[120px] opacity-30 translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-ice-900/10 rounded-full blur-[100px] opacity-30 -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Competitive Analysis
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">{title}</h2>
            {subtitle && <p className="font-sans text-lg text-ice-200/70 max-w-2xl mx-auto">{subtitle}</p>}
            <div className="w-24 h-1 bg-gold-500 mx-auto mt-6 rounded-full"></div>
          </FadeIn>
        </div>

        {/* Brand Selector & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Brand Buttons List */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
            {brands.map((brand, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedBrand(idx)}
                className={`flex items-center gap-4 px-6 py-5 rounded-2xl border text-left transition-all duration-300 w-full min-w-[200px] shrink-0 cursor-pointer ${
                  selectedBrand === idx
                    ? 'bg-white text-navy-950 border-white shadow-xl shadow-white/5'
                    : 'bg-navy-900/40 text-ice-200/80 border-navy-800/80 hover:bg-navy-900/60 hover:text-white'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  selectedBrand === idx ? 'bg-navy-950 text-gold-400' : 'bg-navy-850 text-ice-300'
                }`}>
                  <Ship className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-base lg:text-lg leading-tight">{brand.name}</h4>
                  <p className="font-sans text-xs opacity-75 mt-1">{brand.tagline}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-8">
            <FadeIn key={selectedBrand} className="h-full">
              <div className="bg-navy-900/50 backdrop-blur-md border border-navy-800 rounded-3xl p-8 lg:p-10 flex flex-col justify-between h-full">
                
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-navy-800">
                    <h3 className="font-display text-3xl text-white">{brands[selectedBrand].name} Inclusions</h3>
                    <span className="font-sans text-xs uppercase tracking-widest text-gold-400 font-bold bg-navy-800 px-4 py-1.5 rounded-full border border-navy-700">
                      {brands[selectedBrand].model}
                    </span>
                  </div>

                  {/* Inclusion Toggles */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {/* What's Included */}
                    <div>
                      <h4 className="font-sans text-xs uppercase tracking-widest text-ice-200/80 font-bold mb-4">
                        What's Included
                      </h4>
                      <ul className="space-y-4">
                        {brands[selectedBrand].inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-ice-300 mt-0.5 flex-shrink-0" />
                            <span className="font-sans text-sm text-ice-100">{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What Costs Extra */}
                    <div>
                      <h4 className="font-sans text-xs uppercase tracking-widest text-gold-400/80 font-bold mb-4">
                        What Costs Extra / Optional
                      </h4>
                      <ul className="space-y-4">
                        {brands[selectedBrand].exclusions.map((exc, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                            <span className="font-sans text-sm text-ice-200/80">{exc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Expert Verdict */}
                <div className="border-t border-navy-800 pt-8 mt-8 bg-navy-950/40 p-6 rounded-2xl border border-navy-850">
                  <p className="font-sans text-xs uppercase tracking-widest text-gold-400 font-bold mb-2">
                    Expert Recommendation
                  </p>
                  <p className="font-display text-base text-ice-100 italic leading-relaxed">
                    "{brands[selectedBrand].verdict}"
                  </p>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LuxuryComparisonBoard;
