import React from 'react';
import FadeIn from './FadeIn';
import { AlertTriangle, PiggyBank, ArrowRight, ShieldAlert, BadgeCent } from 'lucide-react';

const MoneySavingTips = ({ title, subtitle, hiddenCosts, savingTips }) => {
  if (!hiddenCosts || !savingTips) return null;

  return (
    <section className="w-full py-24 bg-ice-50 border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        
        <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
          {subtitle && (
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent-600 mb-4 block">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              {title}
            </h2>
          )}
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Hidden Costs */}
          <FadeIn direction="right" className="w-full lg:w-1/2">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-200 h-full">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-navy-950">Hidden Costs to Budget For</h3>
                  <p className="font-sans text-sm text-slate-500">Don't let these expenses surprise you.</p>
                </div>
              </div>

              <div className="space-y-6">
                {hiddenCosts.map((cost, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="mt-1">
                      <AlertTriangle className="w-5 h-5 text-orange-300 group-hover:text-orange-500 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-bold text-navy-900 mb-1">{cost.title}</h4>
                      <p className="font-sans text-sm text-slate-600 leading-relaxed">{cost.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Saving Tips */}
          <FadeIn direction="left" className="w-full lg:w-1/2">
            <div className="bg-navy-950 rounded-3xl p-8 lg:p-10 shadow-2xl border border-navy-800 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-bl-[100px] pointer-events-none"></div>
              
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <PiggyBank className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white">How to Save Money</h3>
                  <p className="font-sans text-sm text-gold-500/80">Expert strategies for maximum value.</p>
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                {savingTips.map((tip, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="mt-1">
                      <BadgeCent className="w-5 h-5 text-gold-500/50 group-hover:text-gold-400 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-bold text-white mb-1">{tip.title}</h4>
                      <p className="font-sans text-sm text-slate-300 leading-relaxed font-light">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default MoneySavingTips;
