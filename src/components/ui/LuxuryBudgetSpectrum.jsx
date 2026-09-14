import React, { useState } from 'react';
import { ArrowRight, Sparkles, Diamond, ShieldCheck } from 'lucide-react';

const LuxuryBudgetSpectrum = ({ title, subtitle, items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full bg-navy-950 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 opacity-90"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-400 font-semibold px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 mb-4">
            <Diamond className="w-3.5 h-3.5" />
            <span>Investment Guide</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-normal text-white mb-6">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border backdrop-blur-md ${
                  activeIndex === index
                    ? 'bg-gold-400/20 border-gold-400/50 shadow-lg shadow-gold-400/10 scale-[1.02]'
                    : 'bg-navy-900/40 border-slate-700/50 hover:bg-navy-800/60 hover:border-gold-400/30'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className={`text-xl font-display ${activeIndex === index ? 'text-gold-400' : 'text-white'}`}>
                    {item.level}
                  </h3>
                  {activeIndex === index && <ArrowRight className="text-gold-400 w-5 h-5" />}
                </div>
                <div className="text-sm font-semibold tracking-wider text-slate-300 mb-2">
                  {item.priceRange}
                </div>
              </button>
            ))}
          </div>
          
          <div className="lg:col-span-7">
            {items.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  activeIndex === index ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none hidden'
                }`}
              >
                <div className="bg-navy-900/80 border border-gold-400/30 rounded-3xl p-8 md:p-10 shadow-2xl h-full flex flex-col justify-center min-h-[450px]">
                  <h4 className="text-2xl font-display text-white mb-4 flex items-center gap-3">
                    <Sparkles className="text-gold-400 w-6 h-6" />
                    What This Budget Delivers
                  </h4>
                  <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                    {item.description}
                  </p>
                  
                  <div className="bg-navy-950/50 rounded-xl p-6 border border-slate-700/50">
                    <h5 className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      Typical Inclusions
                    </h5>
                    <ul className="space-y-3">
                      {item.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 shrink-0"></div>
                          <span className="text-slate-200 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryBudgetSpectrum;
