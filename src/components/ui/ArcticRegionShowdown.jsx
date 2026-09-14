import React from 'react';
import FadeIn from './FadeIn';
import { Compass, Check } from 'lucide-react';

const ArcticRegionShowdown = ({ image1, image2 }) => {
  return (
    <section className="w-full bg-ice-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Destination Comparison
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              Arctic Region Showdown: Greenland vs. Svalbard
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              While both destinations sit inside the Arctic Circle, the highlights, landscapes, and wildlife opportunities differ fundamentally.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Card 1: Greenland */}
          <FadeIn className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
            <div className="aspect-[16/10] w-full overflow-hidden relative">
              {image1 && (
                <img 
                  src={image1} 
                  alt="Greenland Icebergs" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
              <div className="absolute bottom-6 left-8">
                <span className="text-xs uppercase tracking-widest text-gold-500 font-bold mb-1 block">
                  CULTURE & GLACIERS
                </span>
                <h3 className="text-2xl font-display font-medium text-navy-950">
                  Greenland (The Far North)
                </h3>
              </div>
            </div>

            <div className="p-8">
              <p className="font-sans text-slate-600 text-sm md:text-base font-light leading-relaxed mb-6">
                Famed for towering icebergs, massive fjord systems like Scoresby Sound, and historic Inuit community encounters. The emphasis is on scale, silence, and cultural history.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="text-gold-500 mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm text-slate-700 font-light font-sans">Spectacular iceberg fields (Disko Bay & Ilulissat Icefjord)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-gold-500 mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm text-slate-700 font-light font-sans">Scoresby Sound - the world's largest fjord system</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-gold-500 mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm text-slate-700 font-light font-sans">Rich cultural interaction with Greenlandic settlements</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-gold-500 mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm text-slate-700 font-light font-sans">Whale species and overland Muskoxen sightings</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Card 2: Svalbard */}
          <FadeIn delay={0.2} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
            <div className="aspect-[16/10] w-full overflow-hidden relative">
              {image2 && (
                <img 
                  src={image2} 
                  alt="Svalbard Wildlife" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
              <div className="absolute bottom-6 left-8">
                <span className="text-xs uppercase tracking-widest text-gold-500 font-bold mb-1 block">
                  WILDLIFE & PACK ICE
                </span>
                <h3 className="text-2xl font-display font-medium text-navy-950">
                  Svalbard Archipelago
                </h3>
              </div>
            </div>

            <div className="p-8">
              <p className="font-sans text-slate-600 text-sm md:text-base font-light leading-relaxed mb-6">
                A polar desert archipelago governed by Norway. Svalbard is the ultimate polar-bear-viewing destination, featuring dramatic bird cliffs and pack ice cruising.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="text-gold-500 mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm text-slate-700 font-light font-sans">Highest density of Polar Bear sightings on sea ice</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-gold-500 mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm text-slate-700 font-light font-sans">Massive seabird nesting colonies (Alkefjellet bird cliffs)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-gold-500 mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm text-slate-700 font-light font-sans">Walrus haul-outs and Arctic reindeer grazing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-gold-500 mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm text-slate-700 font-light font-sans">High Arctic glacier walls and dramatic jagged peaks</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ArcticRegionShowdown;
