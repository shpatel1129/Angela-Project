import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Check, ClipboardList, Star } from 'lucide-react';

const TahitiExcursions = ({ checklist, tips, experiences }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const toggleCheck = (idx) => setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }));

  const defaultChecklist = checklist || [];
  const defaultTips = tips || [];
  const defaultExperiences = experiences || [];

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-80 h-80 border border-ts-gold/5 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-ts-gold uppercase bg-ts-gold/10 px-5 py-2 rounded-full">
            Local Experiences
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">
            French Polynesia Excursions & Advisor Checklist
          </h2>
          <div className="w-12 h-0.5 bg-ts-gold mx-auto"></div>
        </div>

        {/* Highlight Experiences Section (3 Cards) */}
        {defaultExperiences.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {defaultExperiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/60 rounded-3xl p-8 space-y-4 hover:shadow-lg transition-all duration-300 border-b-4 hover:border-b-ts-gold"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ts-gold">Excursion {idx + 1}</span>
                  <Star className="w-4 h-4 text-ts-gold fill-ts-gold" />
                </div>
                <h4 className="font-display text-xl text-navy-950 font-bold">{exp.title}</h4>
                <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Checklist & Expert Tips (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Advisor Checklist */}
          <div className="lg:col-span-7 bg-white border border-slate-200/60 rounded-[36px] p-8 md:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-8 pb-5 border-b border-slate-100">
              <div className="p-2.5 rounded-xl bg-navy-950 text-ts-gold">
                <ClipboardList className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl text-navy-950 font-bold">Advisor Booking Checklist</h3>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Complete before finalizing cruise deposit</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {defaultChecklist.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className="flex items-start gap-3 cursor-pointer group select-none p-2 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <span className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                    checkedItems[idx]
                      ? 'bg-ts-gold border-ts-gold text-navy-950'
                      : 'border-slate-300 bg-white group-hover:border-ts-gold/40'
                  }`}>
                    {checkedItems[idx] && <Check className="w-3 h-3" strokeWidth={3} />}
                  </span>
                  <span className={`font-sans text-[11px] sm:text-xs leading-snug transition-all ${
                    checkedItems[idx] ? 'text-slate-400 line-through' : 'text-slate-700 group-hover:text-navy-950'
                  }`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Expert Tips */}
          <div className="lg:col-span-5 space-y-5">
            {defaultTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/60 rounded-2xl p-7 flex gap-5 shadow-xs hover:shadow-sm hover:border-ts-gold/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 text-ts-gold flex items-center justify-center shrink-0 text-lg font-display font-bold shadow-sm">
                  {idx + 1}
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-base font-bold text-navy-950 leading-tight">
                    {tip.title}
                  </h4>
                  <p className="font-sans text-slate-500 text-xs leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TahitiExcursions;
