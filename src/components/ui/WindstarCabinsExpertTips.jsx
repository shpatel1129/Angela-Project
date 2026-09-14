import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Check, HelpCircle, Star, MessageSquare } from 'lucide-react';

const WindstarCabinsExpertTips = ({ checklistData, tipsData }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (idx) => {
    setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const defaultChecklist = [
    "Verify whether the cabin layout has a bathtub or walk-in shower",
    "Double check proximity to exhaust vents and engine areas on aft decks",
    "Confirm if the itinerary has scenic cruising requiring a veranda",
    "Prioritize midship lower deck placements if prone to seasickness",
    "Review elevator distance and overhead noise potentials on the deck plan",
    "Coordinate specific minibar stocking requirements with your travel advisor"
  ];

  const defaultTips = [
    {
      title: "Don't Book Fares for Unwanted Inclusions",
      desc: "If you don't care about alcoholic drinks or laundry services, look at standard fares versus all-inclusive fare structures."
    },
    {
      title: "Itinerary Governs Cabin Value",
      desc: "On heavily port-intensive cruises, you might spend very little time in your suite. Put the budget into private touring instead."
    },
    {
      title: "Upgrade Calculators",
      desc: "Calculate the exact upgrade price per day. A $1000 upgrade on a short 5-night sailing represents $200 per day—evaluate accordingly."
    }
  ];

  const list = checklistData || defaultChecklist;
  const tips = tipsData || defaultTips;

  return (
    <section className="py-24 px-6 bg-slate-50 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-ts-gold uppercase bg-ts-gold/10 px-4 py-1.5 rounded-full">
            Expert Execution
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">
            Angela Hughes' Final Cabin Advice
          </h2>
          <div className="w-12 h-1 bg-ts-gold mx-auto"></div>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Interactive Checklist */}
          <div className="lg:col-span-5 bg-white border border-slate-200/50 rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-display text-2xl text-navy-950 pb-4 border-b border-slate-100 flex justify-between items-center">
                <span>Cabin Booking Checklist</span>
                <span className="text-ts-gold text-xs font-bold uppercase tracking-wider">Before Deposit</span>
              </h3>
              
              <ul className="space-y-4">
                {list.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => toggleCheck(idx)}
                    className="flex items-start gap-3 cursor-pointer group select-none"
                  >
                    <span className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                      checkedItems[idx]
                        ? 'bg-ts-gold border-ts-gold text-navy-950'
                        : 'border-slate-300 group-hover:border-ts-gold/40 bg-slate-50'
                    }`}>
                      {checkedItems[idx] && <Check className="w-3 h-3" strokeWidth={3} />}
                    </span>
                    <span className={`font-sans text-xs sm:text-sm transition-all ${
                      checkedItems[idx] ? 'text-slate-400 line-through' : 'text-slate-700 group-hover:text-navy-950'
                    }`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-8 text-center text-xs text-slate-400">
              Trips & Ships Luxury Travel Exclusive Checklist
            </div>
          </div>

          {/* Right Column: Expert Advice Callouts */}
          <div className="lg:col-span-7 space-y-6">
            {tips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/50 rounded-2xl p-6 flex gap-5 shadow-xs hover:border-ts-gold/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-navy-950 text-ts-gold flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-display text-base sm:text-lg text-navy-950 font-bold leading-tight">
                    {tip.title}
                  </h4>
                  <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
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

export default WindstarCabinsExpertTips;
