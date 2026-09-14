import React from 'react';
import FadeIn from './FadeIn';
import { CheckCircle2, XCircle } from 'lucide-react';

const CostValueAnalysisCards = ({ title, subtitle, includedTitle, extrasTitle, included, extras }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-ice-50 rounded-full blur-[100px] opacity-60 -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-4">{title}</h2>
            {subtitle && <p className="font-sans text-lg text-navy-600">{subtitle}</p>}
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Included Column */}
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-navy-900/5 border border-ice-100 h-full">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-ice-100">
                <div className="w-12 h-12 bg-ice-50 rounded-full flex items-center justify-center text-navy-800">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-display text-2xl text-navy-900">{includedTitle}</h3>
              </div>
              
              <ul className="space-y-6">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1">
                      <CheckCircle2 size={20} className="text-gold-500" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-navy-900 mb-1">{item.title}</h4>
                      <p className="font-sans text-sm text-navy-600 leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Extras Column */}
          <FadeIn delay={0.3}>
            <div className="bg-navy-50 rounded-3xl p-8 shadow-inner border border-navy-100 h-full">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-navy-200">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-navy-400">
                  <XCircle size={24} />
                </div>
                <h3 className="font-display text-2xl text-navy-900">{extrasTitle}</h3>
              </div>
              
              <ul className="space-y-6">
                {extras.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1">
                      <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center"></div>
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-navy-900 mb-1">{item.title}</h4>
                      <p className="font-sans text-sm text-navy-600 leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default CostValueAnalysisCards;
