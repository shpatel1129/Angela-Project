import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { CheckCircle2, XCircle, ShieldCheck, Layers, ArrowRight } from 'lucide-react';

const GreeceSafetyPracticalChecklist = ({ practicalData }) => {
  const {
    title = "What to Do vs. What to Avoid in Greece",
    subtitle = "Clear, actionable rules for luxury travelers to maximize comfort and eliminate hassle.",
    thingsToDo = [],
    thingsToAvoid = [],
    threeLayers = []
  } = practicalData || {};

  const [activeTab, setActiveTab] = useState('do'); // 'do' | 'avoid'

  return (
    <section id="practical-checklist" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            PRACTICAL TRAVEL GUIDANCE
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {title}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed text-lg">
            {subtitle}
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1.5 rounded-full border border-slate-200 inline-flex shadow-inner">
            <button
              onClick={() => setActiveTab('do')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'do'
                  ? 'bg-navy-950 text-white shadow-md'
                  : 'text-slate-600 hover:text-navy-950'
              }`}
            >
              <CheckCircle2 size={16} className={activeTab === 'do' ? 'text-[#c9a15c]' : 'text-slate-400'} />
              <span>15 Smart Things to Do</span>
            </button>
            <button
              onClick={() => setActiveTab('avoid')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'avoid'
                  ? 'bg-red-950 text-white shadow-md'
                  : 'text-slate-600 hover:text-navy-950'
              }`}
            >
              <XCircle size={16} className={activeTab === 'avoid' ? 'text-red-400' : 'text-slate-400'} />
              <span>15 Things to Avoid</span>
            </button>
          </div>
        </div>

        {/* 15 Rules Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {(activeTab === 'do' ? thingsToDo : thingsToAvoid).map((item, idx) => (
            <FadeIn key={item.id || idx}>
              <div className={`p-6 rounded-2xl border transition-all duration-300 h-full flex flex-col justify-between ${
                activeTab === 'do'
                  ? 'bg-white border-slate-200/80 hover:border-[#c9a15c]/40 hover:shadow-md'
                  : 'bg-red-50/20 border-red-100 hover:border-red-300 hover:shadow-md'
              }`}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-7 h-7 rounded-full text-xs font-sans font-bold flex items-center justify-center ${
                      activeTab === 'do' ? 'bg-slate-100 text-navy-950' : 'bg-red-100 text-red-900'
                    }`}>
                      {item.id}
                    </span>
                    {activeTab === 'do' ? (
                      <CheckCircle2 size={18} className="text-[#c9a15c]" />
                    ) : (
                      <XCircle size={18} className="text-red-500" />
                    )}
                  </div>

                  <h3 className="font-display text-lg font-medium text-navy-950 mb-2">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Three-Layer Greece Safety Framework */}
        {threeLayers?.length > 0 && (
          <FadeIn>
            <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="max-w-3xl mb-10">
                <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-2 block">
                  STRATEGIC RESILIENCE
                </span>
                <h3 className="font-display text-3xl font-light text-white mb-4">
                  The Three-Layer Luxury Safety Framework
                </h3>
                <p className="font-sans text-sm text-slate-300 font-light leading-relaxed">
                  How high-end travel design builds multi-tiered security and flexibility into every Greek itinerary.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {threeLayers.map((layer, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-sans font-bold text-[#c9a15c] uppercase tracking-wider block mb-1">
                        {layer.layer}
                      </span>
                      <h4 className="font-display text-xl text-white font-normal mb-4">
                        {layer.subtitle}
                      </h4>
                      <ul className="space-y-2">
                        {layer.points?.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs font-sans text-slate-300 font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a15c] flex-shrink-0 mt-1.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
};

export default GreeceSafetyPracticalChecklist;
