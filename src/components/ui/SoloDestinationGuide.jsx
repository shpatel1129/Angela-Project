import React from 'react';
import FadeIn from './FadeIn';
import { Anchor, Compass, Globe, Map } from 'lucide-react';

const SoloDestinationGuide = ({ image }) => {
  const destinations = [
    {
      title: "Mediterranean Cruises",
      subtitle: "Best for Culture & Cuisine",
      description: "Easy, accessible, and rich with walking excursions, museum visits, and culinary classes. Highly comfortable for first-time solo luxury travelers.",
      icon: Map,
      features: ["Easy self-guided port days", "Enriching S.A.L.T. shore excursions", "Highly walkable coastal towns", "Very active onboard social scene"]
    },
    {
      title: "Alaska Cruises",
      subtitle: "Best for Solitude & Wildlife",
      description: "Perfect for travelers who value quiet balcony observation, scenic glacier cruising, and active wilderness hikes. Extremely peaceful.",
      icon: Anchor,
      features: ["Exceptional glacier viewing", "Guided wildlife hikes", "Low-pressure outdoor recreation", "Comfortable, majestic solitude"]
    },
    {
      title: "Expedition Voyages",
      subtitle: "Best for Active Group Connections",
      description: "Galápagos, Antarctica, or Kimberley. Daily Zodiac landings, active exploration, and shared adventure foster very tight bonds among guests.",
      icon: Compass,
      features: ["Highly social Zodiac groups", "Shared physical accomplishments", "Expert naturalist discussions", "High crew-to-guest guidance"]
    }
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Destinations
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              Best Silversea Destinations for Solo Travelers
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Different destinations foster different social dynamics. Select the region that matches your ideal balance of exploration and relaxation.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {destinations.map((dest, idx) => {
            const Icon = dest.icon;
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
                  {dest.title}
                </h3>
                <span className="text-xs font-semibold text-gold-500 uppercase tracking-wider block mb-4">
                  {dest.subtitle}
                </span>
                <p className="font-sans text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  {dest.description}
                </p>
                <ul className="mt-auto space-y-3 pt-6 border-t border-slate-200">
                  {dest.features.map((feat, fIdx) => (
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
                alt="Solo Traveler Destination" 
                className="w-full h-full object-cover opacity-85"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-6 left-8 right-8 z-20 text-white">
                <span className="text-xs uppercase tracking-widest text-gold-300 font-bold block mb-1">
                  GLOBAL HORIZONS
                </span>
                <p className="font-display text-lg font-light italic leading-relaxed text-slate-200">
                  "Silversea's small draft yachts cruise directly into the heart of historic ports and remote wildlife inlets."
                </p>
              </div>
            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
};

export default SoloDestinationGuide;
