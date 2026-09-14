import React from 'react';
import FadeIn from './FadeIn';
import { DollarSign, ShieldAlert, Sparkles, TrendingUp } from 'lucide-react';

const SoloPricingExplorer = () => {
  const cards = [
    {
      title: "Standard Solo Fare",
      subtitle: "The Baseline Option",
      description: "By default, luxury cruise pricing is based on double occupancy. Solo guests booking a standard suite pay a single supplement on top of the base fare.",
      icon: DollarSign,
      supplement: "50% - 100% Supplement",
      takeaway: "Best for peak season departures where inventory is limited."
    },
    {
      title: "Promotional Solo Rates",
      subtitle: "Special Offers",
      description: "Silversea frequently offers targeted single supplement promotions on selected global itineraries, making solo travel significantly more affordable.",
      icon: Sparkles,
      supplement: "10% - 25% Supplement",
      takeaway: "Best value. Focus your itinerary research on promotional sailings."
    }
  ];

  return (
    <section className="w-full bg-slate-900 py-24 text-white border-b border-slate-800">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Pricing Strategy
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-slate-100 mb-6 leading-tight">
              Silversea Single Supplements Explained
            </h2>
            <p className="font-sans text-slate-400 font-light leading-relaxed">
              Understanding the math behind solo cruise pricing is essential. Silversea does not charge a uniform supplement across all voyages; rates vary by sailing and promotion.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <FadeIn 
                key={idx} 
                delay={idx * 0.15} 
                className="bg-slate-800/30 border border-slate-850 p-8 rounded-3xl hover:bg-slate-800/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gold-400/10 flex items-center justify-center text-gold-400 mb-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-2xl text-slate-100 mb-1">
                    {card.title}
                  </h3>
                  <span className="text-xs text-gold-400 uppercase tracking-widest block mb-4">
                    {card.subtitle}
                  </span>
                  <p className="font-sans text-sm text-slate-400 leading-relaxed font-light mb-6">
                    {card.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-800">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">
                    Typical supplement rate
                  </span>
                  <span className="font-display text-2xl text-white block mb-3">
                    {card.supplement}
                  </span>
                  <p className="text-xs text-slate-400 italic">
                    {card.takeaway}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SoloPricingExplorer;
