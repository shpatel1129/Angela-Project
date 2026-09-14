import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Check, ClipboardList, Star } from 'lucide-react';

const BalconyExpertAdvice = ({ checklist, tips }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const toggleCheck = (idx) => setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }));

  const defaultChecklist = checklist || [];
  const defaultTips = tips || [];

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 right-0 w-80 h-80 border border-ts-gold/5 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-ts-gold uppercase bg-ts-gold/10 px-5 py-2 rounded-full">
            Before You Book
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">
            Balcony Booking Checklist & Expert Tips
          </h2>
          <div className="w-12 h-0.5 bg-ts-gold mx-auto"></div>
        </div>

        {/* Two column layout — fundamentally different from the cabins page */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: Checklist — Split into two sub-columns inside */}
          <div className="bg-white border border-slate-200/60 rounded-[36px] p-8 md:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-8 pb-5 border-b border-slate-100">
              <div className="p-2.5 rounded-xl bg-navy-950 text-ts-gold">
                <ClipboardList className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl text-navy-950 font-bold">Pre-Deposit Verification</h3>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Complete before payment</span>
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

            <div className="mt-8 pt-5 border-t border-slate-100 text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                Trips & Ships Luxury Travel Exclusive
              </span>
            </div>
          </div>

          {/* Column 2: Expert Tips — Numbered cards */}
          <div className="space-y-5">
            {defaultTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/60 rounded-2xl p-7 flex gap-5 shadow-xs hover:shadow-sm hover:border-ts-gold/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 text-ts-gold flex items-center justify-center shrink-0 text-lg font-display font-bold shadow-sm">
                  {idx + 1}
                </div>
                <div className="space-y-2">
                  <h4 className="font-display text-base sm:text-lg text-navy-950 font-bold leading-tight">
                    {tip.title}
                  </h4>
                  <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom Angela Quote */}
            <div className="bg-navy-950 text-white rounded-2xl p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ts-gold/10 rounded-full filter blur-[40px] pointer-events-none"></div>
              <Star className="w-5 h-5 text-ts-gold mb-3 relative z-10" />
              <p className="font-display text-sm sm:text-base text-white italic leading-relaxed relative z-10">
                "Don't confuse a view with outdoor living. If outdoor space is important to you, make sure you're buying outdoor space — not simply a beautiful view through an opening door."
              </p>
              <span className="block mt-3 text-[10px] text-slate-400 uppercase tracking-widest font-bold relative z-10">
                — Angela Hughes, CEO
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BalconyExpertAdvice;
