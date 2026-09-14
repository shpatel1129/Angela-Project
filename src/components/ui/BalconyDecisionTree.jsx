import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { ArrowDown, HelpCircle, Navigation, Anchor, Compass, Sun } from 'lucide-react';

const BalconyDecisionTree = ({ data, sideImage }) => {
  if (!data) return null;
  const decisionIcons = [HelpCircle, Navigation, Anchor, Compass, Sun, Compass];

  return (
    <section className="py-28 px-6 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-ts-gold/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-sky-500/5 rounded-full filter blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Decision Flowchart */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 mb-12">
              <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-ts-gold uppercase bg-white/5 px-5 py-2 rounded-full border border-white/10">
                Smart Decision Framework
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
                {data.title}
              </h2>
              <div className="w-12 h-0.5 bg-ts-gold"></div>
            </div>

            {/* Flowchart Steps */}
            <div className="space-y-4 relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[23px] top-10 bottom-10 w-px bg-gradient-to-b from-ts-gold/50 via-ts-gold/20 to-transparent hidden md:block"></div>

              {data.steps.map((step, idx) => {
                const Icon = decisionIcons[idx % decisionIcons.length];
                return (
                  <div key={idx} className="flex gap-5 items-start relative">
                    {/* Numbered circle */}
                    <div className="w-12 h-12 rounded-full bg-ts-gold/15 border border-ts-gold/30 text-ts-gold flex items-center justify-center shrink-0 relative z-10 text-sm font-bold">
                      {idx + 1}
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/8 transition-all duration-300">
                      <p className="font-display text-base sm:text-lg text-white mb-2 font-bold">
                        {step.question}
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <ArrowDown className="w-3.5 h-3.5 text-ts-gold" />
                        <span className="font-sans text-xs sm:text-sm text-ts-gold font-semibold italic">
                          → {step.answer}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Visual Balance Panel */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            {sideImage && (
              <div className="relative">
                <div className="rounded-[40px] overflow-hidden aspect-[3/4] border border-white/10 shadow-2xl">
                  <MasterImage src={sideImage} alt="Windstar balcony decision" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"></div>
                </div>
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-navy-950/80 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
                  <span className="text-ts-gold font-display text-lg font-bold block">Expert Tip</span>
                  <p className="font-sans text-slate-300 text-xs mt-1">
                    "Don't pay for a balcony you won't use — but don't settle for a French balcony if sitting outside is important to you."
                  </p>
                  <span className="text-[10px] text-slate-500 mt-2 block">— Angela Hughes, CTC</span>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BalconyDecisionTree;
