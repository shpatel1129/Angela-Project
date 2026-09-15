import React from 'react';
import FadeIn from './FadeIn';
import { Check, X, ShieldAlert, Award } from 'lucide-react';

const InclusionCheckerGrid = ({ 
  eyebrow = "Quick Answer",
  title, 
  subtitle, 
  inclusionsTitle = "Generally Included", 
  exclusionsTitle = "Additional Expenses",
  inclusions = [], 
  exclusions = [] 
}) => {
  if (!inclusions || !exclusions) return null;

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-ice-50 rounded-full blur-[100px] opacity-60 -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gold-50/50 rounded-full blur-[120px] opacity-50 translate-y-1/4 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <FadeIn>
            {eyebrow && (
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600 font-bold px-4 py-1.5 bg-gold-50/80 rounded-full inline-block mb-4 border border-gold-200/50">
                {eyebrow}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-4">{title}</h2>
            {subtitle && <p className="font-sans text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">{subtitle}</p>}
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-6"></div>
          </FadeIn>
        </div>

        {/* Inclusions / Exclusions Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inclusions Board */}
          <div className="lg:col-span-7 bg-ice-50/70 rounded-3xl p-6 sm:p-8 lg:p-10 border border-ice-100 shadow-sm">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-ice-200/60">
                <div className="w-10 h-10 bg-navy-950 rounded-xl flex items-center justify-center text-gold-400 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-navy-950">{inclusionsTitle}</h3>
                  <span className="text-xs font-sans text-slate-500">{inclusions.length} Core Cruise Inclusions</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {inclusions.map((item, idx) => {
                  const isString = typeof item === 'string';
                  const name = isString ? item : item.name || item.title;
                  const desc = !isString ? (item.description || item.text) : null;

                  return (
                    <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-ice-100/90 shadow-sm hover:border-emerald-300/50 transition-all duration-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200/50">
                        <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
                      </div>
                      <div>
                        <h4 className="font-sans font-medium text-navy-900 text-sm leading-snug">{name}</h4>
                        {desc && <p className="font-sans text-xs text-navy-600 mt-0.5 leading-relaxed">{desc}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>

          {/* Exclusions Board */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-100 shadow-xl shadow-navy-900/5">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 border border-amber-100">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-navy-950">{exclusionsTitle}</h3>
                  <span className="text-xs font-sans text-slate-500">{exclusions.length} Optional Add-ons & Services</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {exclusions.map((item, idx) => {
                  const isString = typeof item === 'string';
                  const name = isString ? item : item.name || item.title;
                  const desc = !isString ? (item.description || item.text) : null;

                  return (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 transition-colors border border-slate-100/80">
                      <div className="w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-amber-600" strokeWidth={3} />
                      </div>
                      <div>
                        <h4 className="font-sans font-medium text-slate-800 text-sm leading-snug">{name}</h4>
                        {desc && <p className="font-sans text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InclusionCheckerGrid;
