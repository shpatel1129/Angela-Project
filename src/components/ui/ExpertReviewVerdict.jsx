import React from 'react';
import FadeIn from './FadeIn';
import { Quote, CheckCircle2, XCircle } from 'lucide-react';

const ExpertReviewVerdict = ({ title, prosTitle, pros, consTitle, cons, bottomNote }) => {
  return (
    <section className="w-full py-24 bg-ice-50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <FadeIn className="text-center mb-16">
          <Quote className="w-12 h-12 text-ts-gold mx-auto mb-6 opacity-80" strokeWidth={1} />
          <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">{title || "The Expert Verdict"}</h2>
          <div className="w-16 h-0.5 bg-navy-800 mx-auto"></div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* PROS (Who Will Love It) */}
          <FadeIn direction="right" delay={0.1} className="bg-white rounded-3xl p-10 md:p-12 shadow-xl border border-slate-100">
            <h3 className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-navy-900 mb-8 border-b border-slate-200 pb-4">
              {prosTitle || "Who Will Love This Ship"}
            </h3>
            <ul className="space-y-6">
              {pros.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-lg text-slate-700 leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* CONS (Who Might Prefer Something Else) */}
          <FadeIn direction="left" delay={0.2} className="bg-navy-950 rounded-3xl p-10 md:p-12 shadow-xl border border-navy-900">
            <h3 className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-ts-gold mb-8 border-b border-navy-800 pb-4">
              {consTitle || "Who Might Prefer Another Line"}
            </h3>
            <ul className="space-y-6">
              {cons.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-400/80 flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-lg text-white/80 leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

        </div>

        {bottomNote && (
          <FadeIn direction="up" delay={0.4} className="mt-12 text-center max-w-2xl mx-auto">
            <p className="font-sans text-sm md:text-base text-slate-500 italic">
              {bottomNote}
            </p>
          </FadeIn>
        )}

      </div>
    </section>
  );
};

export default ExpertReviewVerdict;
