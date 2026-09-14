import React from 'react';
import FadeIn from './FadeIn';
import { Camera, Compass, Eye, ShieldAlert } from 'lucide-react';

const ArcticWildlifeGrid = ({ image1, image2, image3 }) => {
  const wildlifeList = [
    {
      name: "Arctic Whales",
      description: "Greenland's nutrient-rich summer waters support humpback, minke, fin, and pilot whales, alongside elusive narwhals in the high north.",
      spottingTip: "Watch for blows and tail flukes from the ship's outdoor observation decks or during slow Zodiac cruises.",
      icon: Compass,
      img: image1
    },
    {
      name: "Muskoxen",
      description: "Prehistoric-looking herds roaming the rugged Arctic tundra. These massive, long-haired mammals are unique wildlife encounters.",
      spottingTip: "Commonly sighted along the coastal shorelines of East Greenland, especially near fjord valleys.",
      icon: Camera,
      img: image2
    },
    {
      name: "Polar Bears",
      description: "The apex predator of the Arctic. While sightings are highly geography- and ice-dependent, the expedition team actively scans ice floes.",
      spottingTip: "Always follow strict safety regulations. Never expect a guarantee; the surprise of a sighting is unmatched.",
      icon: ShieldAlert,
      img: image3
    }
  ];

  return (
    <section className="w-full bg-ice-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Expedition Highlights
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              Greenland's Extraordinary Wildlife
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Unlike a pre-planned zoo or safari, encountering wild animals in the high Arctic is a genuine adventure. Follow the expedition team's guidance and experience these rare encounters responsibly.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {wildlifeList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.15} className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  {item.img && (
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest bg-gold-400 text-navy-950 font-bold py-1 px-3 rounded-full">
                      Polar Species
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-ice-100 flex items-center justify-center text-gold-500">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-display text-2xl text-navy-950 font-medium">
                        {item.name}
                      </h3>
                    </div>
                    <p className="font-sans text-slate-600 font-light leading-relaxed text-sm md:text-base mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100/50">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-1 block flex items-center gap-1.5">
                      <Eye size={12} className="text-gold-400" />
                      Spotting Advice
                    </span>
                    <p className="text-xs font-sans text-slate-500 leading-normal font-light">
                      {item.spottingTip}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArcticWildlifeGrid;
