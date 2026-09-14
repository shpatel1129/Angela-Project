import React, { useState } from 'react';
import { Check } from 'lucide-react';

const InclusionsAdviceChecklist = ({ data }) => {
  if (!data) return null;

  const { headline, beforeBooking, beforePayment, beforeDeparture } = data;

  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (section, idx) => {
    const key = `${section}-${idx}`;
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const checklistGroups = [
    { title: 'Before Booking', items: beforeBooking, key: 'booking' },
    { title: 'Before Final Payment', items: beforePayment, key: 'payment' },
    { title: 'Before Departure', items: beforeDeparture, key: 'departure' }
  ];

  return (
    <section className="bg-slate-50 py-24 px-6 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-gold-400 uppercase bg-gold-400/10 px-3 py-1 rounded-full">
            Luxury Travel Preparation
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950">
            {headline}
          </h2>
          <p className="font-sans text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Use this interactive checklist designed by Trips & Ships Luxury Travel to ensure your Silversea cruise is perfectly planned from booking to boarding.
          </p>
        </div>

        {/* 3 Columns Checklist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {checklistGroups.map((group, gIdx) => (
            <div key={gIdx} className="bg-white border border-slate-200/80 rounded-[32px] p-8 shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="font-display text-2xl text-navy-950 pb-4 border-b border-slate-100 flex justify-between items-center">
                  <span>{group.title}</span>
                  <span className="text-gold-400 text-sm">Step 0{gIdx + 1}</span>
                </h3>
                
                <ul className="space-y-4">
                  {group.items?.map((item, idx) => {
                    const isChecked = !!checkedItems[`${group.key}-${idx}`];
                    return (
                      <li
                        key={idx}
                        onClick={() => toggleCheck(group.key, idx)}
                        className="flex items-start gap-3 cursor-pointer group select-none"
                      >
                        <span className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                          isChecked
                            ? 'bg-gold-400 border-gold-400 text-navy-950'
                            : 'border-slate-300 group-hover:border-gold-400/30 bg-slate-50'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 animate-scaleIn" strokeWidth={3} />}
                        </span>
                        <span className={`font-sans text-sm transition-all ${
                          isChecked ? 'text-slate-400 line-through' : 'text-slate-700 group-hover:text-navy-950'
                        }`}>
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Progress note */}
              <div className="pt-6 border-t border-slate-100 mt-8 text-center text-xs text-slate-400">
                Trips & Ships Luxury Travel Checklist
              </div>
            </div>
          ))}
        </div>

        {/* Value Test section box */}
        <div className="mt-16 bg-navy-950 text-white rounded-[32px] p-8 md:p-12 border border-navy-900 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full filter blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              The Complete Value Test
            </span>
            <h3 className="font-display text-3xl md:text-4xl text-white">
              Is Silversea the Right Choice For You?
            </h3>
            <p className="font-sans text-slate-300 text-sm md:text-base leading-relaxed">
              Before booking, ask yourself if you value all-suite accommodations, signature butler service, gourmet dining, and premium beverage inclusions. If your answers are mostly yes, Silversea represents exceptional value for your travel style.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-medium text-gold-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Butler Service
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-medium text-gold-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Fine Dining
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-medium text-gold-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Destination Immersion
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InclusionsAdviceChecklist;
