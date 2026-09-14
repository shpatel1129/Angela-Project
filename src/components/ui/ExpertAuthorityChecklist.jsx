import React from 'react';
import FadeIn from './FadeIn';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const ExpertAuthorityChecklist = ({ title, subtitle, points }) => {
  return (
    <section className="w-full py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-400 font-semibold px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 mb-4">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>Expert Insight</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-normal text-navy-950 mb-6">
              {title}
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed italic">
              "{subtitle}"
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, idx) => (
            <FadeIn key={idx} delay={idx * 50}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full flex items-start space-x-4 hover:shadow-md transition-shadow duration-300">
                <div className="bg-gold-400/10 p-2 rounded-full shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 leading-snug">
                    {point}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertAuthorityChecklist;
