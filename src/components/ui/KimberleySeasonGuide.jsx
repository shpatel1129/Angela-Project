import React from 'react';
import FadeIn from './FadeIn';
import { Sun, CloudRain, Shield } from 'lucide-react';

const KimberleySeasonGuide = ({ image }) => {
  const seasons = [
    {
      title: "The Wet Season (April - May)",
      subtitle: "Waterfalls & Gorges in Peak Flow",
      description: "Witness massive water volumes cascading down the canyons (like King George Falls) under dramatic skies, with lush green landscapes.",
      icon: CloudRain,
      features: ["Spectacular cascading waterfalls", "Lush tropical green landscapes", "Active birdlife and fauna", "Dramatic photography conditions"]
    },
    {
      title: "Peak Dry Season (June - July)",
      subtitle: "Comfortable Temperatures & Calm Sea",
      description: "Enjoy cooler, comfortable days with dry weather, making hiking and land excursions highly pleasant. It is also the start of humpback whale season.",
      icon: Sun,
      features: ["Optimal hiking temperatures", "Calm seas and clear blue skies", "Humpback whale breeding season", "Easier cave art access"]
    },
    {
      title: "Late Dry Season (August - Sept)",
      subtitle: "Active Marine Life & Warm Nights",
      description: "Warm-weather expedition sailing with highly active marine ecosystems. Great for observing reptiles, crocodiles, and marine turtles.",
      icon: Shield,
      features: ["Highly active marine reptiles", "Calving humpback whale pods", "Striking sunset color contrast", "Scenic river navigation"]
    }
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Seasonality
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              When to Cruise the Kimberley
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              The Kimberley has distinct seasonal changes. The ideal month depends on your target experiences—from waterfall flow to marine wildlife encounters.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {seasons.map((season, idx) => {
            const Icon = season.icon;
            return (
              <FadeIn 
                key={idx} 
                delay={idx * 0.15} 
                className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold-400/10 flex items-center justify-center text-gold-500 mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-2xl text-navy-950 mb-2">
                  {season.title}
                </h3>
                <span className="text-xs font-semibold text-gold-500 uppercase tracking-wider block mb-4">
                  {season.subtitle}
                </span>
                <p className="font-sans text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  {season.description}
                </p>
                <ul className="mt-auto space-y-3 pt-6 border-t border-slate-200">
                  {season.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-xs text-slate-600 font-sans font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            );
          })}
        </div>

        {image && (
          <FadeIn delay={0.3} className="mt-16 relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl border border-slate-100 p-2 bg-slate-50 hidden md:block">
            <div className="w-full h-full bg-slate-900 relative rounded-2xl overflow-hidden">
              <img 
                src={image} 
                alt="Kimberley Season Scenic" 
                className="w-full h-full object-cover opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-6 left-8 right-8 z-20 text-white flex justify-between items-end">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold-300 font-bold block mb-1">
                    SEASONAL SHIFTS
                  </span>
                  <p className="font-display text-lg font-light italic leading-relaxed text-slate-200">
                    "Tides and seasons define the wilderness rhythm of the Australian Outback."
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
};

export default KimberleySeasonGuide;
