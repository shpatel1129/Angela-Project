import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Camera, CheckSquare, Square, Shield } from 'lucide-react';

const ExpeditionPackingList = ({ image }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleItem = (category, idx) => {
    const key = `${category}-${idx}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const categories = [
    {
      name: "Outer Layer",
      items: [
        "Waterproof, windproof jacket (often provided by Silversea)",
        "Waterproof pants (essential for Zodiac landings)",
        "Insulated winter coat / parka",
        "Warm gloves & waterproof over-gloves"
      ]
    },
    {
      name: "Mid & Base Layers",
      items: [
        "Thermal base layers (merino wool or synthetic)",
        "Fleece jacket or wool sweaters",
        "Warm wool socks (bring multiple pairs)",
        "Comfortable layers for onboard ship wear"
      ]
    },
    {
      name: "Footwear & Gear",
      items: [
        "Knee-high waterproof rubber boots (Muck boots)",
        "Sturdy hiking boots for shore walks",
        "Binoculars (essential for wildlife spotting)",
        "Dry bag (to protect camera and gear in Zodiacs)"
      ]
    }
  ];

  return (
    <section className="w-full bg-ice-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Preparation
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              Silversea Polar Expedition Packing Checklist
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Packing correctly for polar environments ensures your comfort during active shore operations. Use our interactive checklist to track your preparations.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Visual card with unused image */}
          <FadeIn className="lg:col-span-5 flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
            <div className="aspect-[4/3] w-full overflow-hidden relative">
              {image && (
                <img 
                  src={image} 
                  alt="Polar Expedition Gear" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-ice-100 flex items-center justify-center text-gold-500">
                  <Shield size={18} />
                </div>
                <h3 className="font-display text-xl text-navy-950 font-medium">
                  Gear Recommendation
                </h3>
              </div>
              <p className="font-sans text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                Silversea typically provides guests with a complimentary, high-quality expedition parka and backpack upon embarkation. Heavy polar muck boots are also available for loan onboard.
              </p>
            </div>
          </FadeIn>

          {/* Interactive Checklist Columns */}
          <FadeIn delay={0.2} className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, catIdx) => (
              <div key={catIdx} className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-md">
                <h3 className="font-display text-lg text-navy-950 mb-6 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                  {cat.name}
                </h3>
                <ul className="space-y-4">
                  {cat.items.map((item, itemIdx) => {
                    const isChecked = !!checkedItems[`${cat.name}-${itemIdx}`];
                    return (
                      <li 
                        key={itemIdx} 
                        onClick={() => toggleItem(cat.name, itemIdx)}
                        className="flex items-start gap-3 cursor-pointer select-none group"
                      >
                        <div className="flex-shrink-0 mt-0.5 text-slate-400 group-hover:text-gold-400 transition-colors duration-200">
                          {isChecked ? (
                            <CheckSquare size={18} className="text-gold-500" />
                          ) : (
                            <Square size={18} />
                          )}
                        </div>
                        <span className={`text-xs md:text-sm font-sans font-light leading-normal transition-all duration-300 ${isChecked ? 'line-through text-slate-400' : 'text-slate-600'}`}>
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ExpeditionPackingList;
