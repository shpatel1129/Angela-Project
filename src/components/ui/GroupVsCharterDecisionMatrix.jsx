import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Users, Building, HelpCircle, Check, ArrowRight } from 'lucide-react';

const GroupVsCharterDecisionMatrix = ({ data }) => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="w-full py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-400 font-semibold px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 mb-4">
              <HelpCircle className="w-4 h-4 text-gold-400" />
              <span>Interactive Decision Framework</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-normal text-navy-950 mb-6">
              {data.title}
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {data.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Size Selector */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-3">
            {data.stages.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`text-left px-6 py-5 rounded-2xl transition-all duration-300 border flex items-center justify-between ${
                  activeStage === idx
                    ? 'bg-navy-950 text-white border-navy-950 shadow-xl scale-105'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-gold-400/50 hover:shadow-md'
                }`}
              >
                <div>
                  <span className={`block text-xs uppercase tracking-wider font-semibold mb-1 ${activeStage === idx ? 'text-gold-400' : 'text-slate-400'}`}>
                    Group Size
                  </span>
                  <span className="text-lg font-display font-medium">{stage.size}</span>
                </div>
                {activeStage === idx ? (
                  <ArrowRight className="w-5 h-5 text-gold-400" />
                ) : (
                  <Users className="w-5 h-5 text-slate-300" />
                )}
              </button>
            ))}
          </div>

          {/* Right: Recommendation Display */}
          <div className="w-full lg:w-2/3">
            <FadeIn key={activeStage}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 h-full flex flex-col justify-center min-h-[350px] relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gold-400/20 p-3 rounded-full">
                      {activeStage < 3 ? <Building className="w-6 h-6 text-gold-400" /> : <Users className="w-6 h-6 text-gold-400" />}
                    </div>
                    <h3 className="text-2xl font-display text-navy-950">
                      Recommendation
                    </h3>
                  </div>
                  
                  <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-light border-l-4 border-gold-400 pl-6">
                    "{data.stages[activeStage].recommendation}"
                  </p>
                  
                  <div className="mt-10 pt-8 border-t border-slate-100">
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3 text-sm text-slate-600">
                        <Check className="w-5 h-5 text-gold-400 shrink-0" />
                        <span>Discuss this scenario with a Trips & Ships Luxury Travel advisor to understand pricing options.</span>
                      </li>
                      <li className="flex items-start space-x-3 text-sm text-slate-600">
                        <Check className="w-5 h-5 text-gold-400 shrink-0" />
                        <span>Ensure early planning to secure the best cabin strategy and availability.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupVsCharterDecisionMatrix;
