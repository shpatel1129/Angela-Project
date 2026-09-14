import React from 'react';
import FadeIn from './FadeIn';
import { Eye, ShieldAlert, Award } from 'lucide-react';

const AlaskaWildlifeShowcase = ({ image1, image2 }) => {
  const wildlife = [
    {
      name: "Humpback Whales & Orcas",
      description: "Alaska's inside passage is a prime feeding ground for humpback whales. Spot them bubble-net feeding in groups. Sleek killer whales (orcas) can also be seen traversing coastal waters.",
      season: "May - September",
      tip: "Reserve veranda cabins to watch marine life directly from your suite without missing a sighting.",
      image: image1
    },
    {
      name: "Bears & Bald Eagles",
      description: "Watch bald eagles nesting in high spruce branches along the shoreline. For brown and black bears, excursions to local salmon streams (like Neets Bay) offer incredible photography opportunities.",
      season: "July - September (salmon runs)",
      tip: "Sightings depend heavily on local salmon run timings. Consult your advisor for seasonal peak dates.",
      image: image2
    }
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Wildlife Watching
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              Alaska's Majestic Wildlife
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Encountering polar animals in their natural habitats is one of Alaska's primary highlights. Planning around migration seasons and local behaviors improves your sightings.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {wildlife.map((animal, idx) => (
            <FadeIn key={idx} delay={idx * 0.2} className="flex flex-col bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-lg group">
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                {animal.image && (
                  <img 
                    src={animal.image} 
                    alt={animal.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/20 to-transparent"></div>
                <div className="absolute bottom-6 left-8">
                  <span className="text-xs uppercase tracking-widest bg-gold-400 text-navy-950 font-bold py-1 px-3 rounded-full mb-2 block w-max">
                    {animal.season}
                  </span>
                  <h3 className="text-2xl font-display font-medium text-navy-950">
                    {animal.name}
                  </h3>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col justify-between">
                <p className="font-sans text-slate-600 text-sm md:text-base font-light leading-relaxed mb-6">
                  {animal.description}
                </p>

                <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                  <Eye className="text-gold-500 flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-navy-950 font-bold block mb-1">
                      Viewing Recommendation:
                    </span>
                    <p className="text-xs font-sans text-slate-500 font-light leading-relaxed">
                      {animal.tip}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlaskaWildlifeShowcase;
