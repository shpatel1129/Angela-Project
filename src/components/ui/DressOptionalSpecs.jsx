import React from 'react';
import FadeIn from './FadeIn';
import { Star, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';

const DressOptionalSpecs = () => {
  const cards = [
    {
      title: "Men's Attire",
      description: "A dark suit, tuxedo, or dinner jacket with a tie. Alternatively, men following Elegant Casual (slacks, collared shirt, sport coat) are fully welcomed in most venues.",
      icon: Star
    },
    {
      title: "Women's Attire",
      description: "An evening gown, elegant cocktail dress, smart pantsuit, or dressy skirt and blouse combination. Allows for creative and sophisticated styling.",
      icon: Sparkles
    },
    {
      title: "Venue Differences",
      description: "While Formal Optional is celebrated in primary restaurants like The Restaurant, outdoor casual dining venues remain open to Elegant Casual dressers.",
      icon: ShieldCheck
    },
    {
      title: "Frequency",
      description: "Sailing length determines frequency: zero formal optional nights on cruises under 7 nights; usually 1-2 nights on sailings of 8-14 nights.",
      icon: CheckCircle
    }
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Formal Optional
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
              Understanding Formal Optional Evenings
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Formal Optional evenings give guests who enjoy dressing up an opportunity to do so, while allowing other guests to remain comfortable in Elegant Casual wear.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 rounded-2xl bg-gold-400/10 flex items-center justify-center text-gold-500 mb-6">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-xl text-navy-950 mb-3 font-medium">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans font-light">
                  {card.description}
                </p>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DressOptionalSpecs;
