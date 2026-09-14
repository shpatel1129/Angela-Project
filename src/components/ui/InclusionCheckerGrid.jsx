import React from 'react';
import FadeIn from './FadeIn';
import { Check, X, ShieldAlert, Award } from 'lucide-react';

const InclusionCheckerGrid = ({ title, subtitle, inclusions, exclusions }) => {
  if (!inclusions || !exclusions) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-ice-50 rounded-full blur-[100px] opacity-60 -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gold-50/50 rounded-full blur-[120px] opacity-50 translate-y-1/4 translate-x-1/4"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-navy-500 font-bold px-4 py-1 bg-ice-50 rounded-full inline-block mb-4">
              Detailed Breakdown
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-4">{title}</h2>
            {subtitle && <p className="font-sans text-lg text-navy-600 max-w-2xl mx-auto">{subtitle}</p>}
            <div className="w-16 h-0.5 bg-navy-800 mx-auto mt-6"></div>
          </FadeIn>
        </div>

        {/* Inclusions / Exclusions Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inclusions Board */}
          <div className="lg:col-span-7 bg-ice-50/60 rounded-3xl p-8 lg:p-10 border border-ice-100/80">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-navy-950 rounded-xl flex items-center justify-center text-gold-400">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl text-navy-950">Included with Your Windstar Fare</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inclusions.map((item, idx) => (
                  <div key={idx} className="flex gap-3 bg-white p-4 rounded-xl border border-ice-100 shadow-sm hover:border-gold-300/30 transition-all duration-300">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-sans font-bold text-navy-900 text-sm">{item.name}</h4>
                      <p className="font-sans text-xs text-navy-600 mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Exclusions Board */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 lg:p-10 border border-ice-100/80 shadow-xl shadow-navy-900/5">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl text-navy-950">What Costs Extra?</h3>
              </div>

              <div className="space-y-4">
                {exclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-ice-50/50 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-navy-900 text-sm">{item.name}</h4>
                      <p className="font-sans text-xs text-navy-600 mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InclusionCheckerGrid;
