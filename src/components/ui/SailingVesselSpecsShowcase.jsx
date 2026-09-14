import React, { useState } from 'react';
import FadeIn from './FadeIn';

const SailingVesselSpecsShowcase = ({ title, subtitle, brands }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-3 block">
              {subtitle || "Vessel Technical Comparison"}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-950 font-bold">
              {title || "Sailing & Technical Specifications"}
            </h2>
            <div className="w-12 h-[2px] bg-gold-400 mx-auto mt-6"></div>
          </FadeIn>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white shadow-xl border border-slate-100 p-1.5 rounded-full">
            {brands.map((b, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-2.5 rounded-full font-sans text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none ${
                  activeTab === idx 
                    ? 'bg-navy-950 text-white shadow-md' 
                    : 'text-slate-400 hover:text-navy-950'
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Specs Dashboard */}
        <FadeIn key={activeTab}>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Panel */}
            <div className="lg:col-span-5 bg-navy-950 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div>
                <span className="font-sans text-xs text-gold-400 uppercase tracking-widest font-bold block mb-4">
                  {brands[activeTab].subtitle}
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
                  {brands[activeTab].name}
                </h3>
                <p className="font-sans text-slate-300 leading-relaxed font-light text-sm md:text-base mb-8">
                  {brands[activeTab].description}
                </p>
              </div>

              <div className="bg-white/5 border border-white/5 p-5 rounded-2xl">
                <span className="font-sans text-xs text-slate-400 uppercase tracking-widest block mb-2">Primary Vibe</span>
                <span className="font-display text-lg text-gold-400 font-bold">{brands[activeTab].vibe}</span>
              </div>
            </div>

            {/* Specs Panel */}
            <div className="lg:col-span-7 p-8 md:p-12">
              <h4 className="font-display text-navy-950 text-lg font-bold mb-8 uppercase tracking-wider">
                Vessel Configuration
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {brands[activeTab].specs.map((spec, sIdx) => (
                  <div key={sIdx} className="border-b border-slate-100 pb-4 flex items-center justify-between">
                    <div>
                      <span className="font-sans text-xs text-slate-400 block uppercase tracking-wider mb-1">
                        {spec.label}
                      </span>
                      <span className="font-sans text-base text-navy-950 font-semibold">
                        {spec.value}
                      </span>
                    </div>
                    
                    {/* Visual Meter for performance/design indices */}
                    {spec.percentage && (
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gold-500 rounded-full" 
                          style={{ width: `${spec.percentage}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Design Takeaway Box */}
              <div className="mt-10 bg-gold-50 border border-gold-200/50 p-6 rounded-2xl flex items-start gap-4">
                <span className="text-gold-600 font-display text-2xl select-none mt-0.5">✦</span>
                <div>
                  <h5 className="font-display text-navy-950 text-sm font-bold uppercase tracking-wider mb-1">
                    Angela's Technical Verdict
                  </h5>
                  <p className="font-sans text-slate-700 text-sm leading-relaxed font-light">
                    {brands[activeTab].verdict}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default SailingVesselSpecsShowcase;
