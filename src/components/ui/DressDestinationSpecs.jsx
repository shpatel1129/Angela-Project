import React from 'react';
import FadeIn from './FadeIn';
import { Sun, CloudRain, Shield } from 'lucide-react';

const DressDestinationSpecs = ({ image }) => {
  const regions = [
    {
      title: "The Mediterranean",
      subtitle: "Linen & Smart Resort Wear",
      description: "Emphasize breathable fabrics (linen, cotton, silk) to handle hot summer days. Smart casual clothing is perfect for European seaside towns.",
      icon: Sun,
      features: ["Linen shirts and lightweight dresses", "Sun hats and UV-blocking sunglasses", "Elegant evening resort outfits", "Comfortable walking shoes for ruins"]
    },
    {
      title: "Alaska & Gorges",
      subtitle: "Layer Systems & Warm Fleeces",
      description: "Weather changes rapidly. Implement a base layer + insulating mid-layer + waterproof outer shell. Focus on thermal warmth and moisture control.",
      icon: CloudRain,
      features: ["Breathable thermal base layers", "Insulating fleece or wool sweaters", "Waterproof and windproof jackets", "Sturdy non-slip hiking boots"]
    },
    {
      title: "Expedition Destinations",
      subtitle: "Antarctica & Arctic Technical Gear",
      description: "Polar environments require specialized expedition gear. Silversea often provides parkas, but base layers and boots are guest-provided.",
      icon: Shield,
      features: ["Heavyweight thermal base layers", "Warm wool socks and glove liners", "Waterproof snow pants or shell pants", "Polarized goggles for glacier glare"]
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
              Packing Guides by Destination Region
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Silversea cruises sail to all seven continents. Adjust your packing list dynamically to fit destination temperatures and expedition active levels.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {regions.map((region, idx) => {
            const Icon = region.icon;
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
                  {region.title}
                </h3>
                <span className="text-xs font-semibold text-gold-500 uppercase tracking-wider block mb-4">
                  {region.subtitle}
                </span>
                <p className="font-sans text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  {region.description}
                </p>
                <ul className="mt-auto space-y-3 pt-6 border-t border-slate-200">
                  {region.features.map((feat, fIdx) => (
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
                alt="Destination Packing View" 
                className="w-full h-full object-cover opacity-85"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-6 left-8 right-8 z-20 text-white">
                <span className="text-xs uppercase tracking-widest text-gold-300 font-bold block mb-1">
                  GLOBAL CLIMATES
                </span>
                <p className="font-display text-lg font-light italic leading-relaxed text-slate-200">
                  "Adjust your wardrobe system dynamically to match polar glaciers or warm Mediterranean harbours."
                </p>
              </div>
            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
};

export default DressDestinationSpecs;
