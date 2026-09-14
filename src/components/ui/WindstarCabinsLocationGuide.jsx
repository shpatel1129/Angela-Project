import React from 'react';
import FadeIn from './FadeIn';
import { Compass, Shield, EyeOff, VolumeX, Layers, CheckCircle2 } from 'lucide-react';
import MasterImage from './MasterImage';

const WindstarCabinsLocationGuide = ({ sectionImage }) => {
  const guideSections = [
    {
      title: '1. Bow vs. Midship vs. Aft Positioning',
      icon: Compass,
      desc: 'Small yachts ride the sea differently from massive cruise liners. Midship positions on lower decks experience the least vertical movement (pitch) and side-to-side sway (roll). Forward cabins offer dramatic entry views but notice rougher waters earlier.',
      items: [
        'Forward Cabins: Dramatic views, higher movement risk',
        'Midship Cabins: High stability, quick elevator access',
        'Aft Cabins: Iconic wake views, potential mechanical hum'
      ]
    },
    {
      title: '2. Vertical Deck Placement',
      icon: Layers,
      desc: 'Higher decks provide panoramic views and proximity to pools and sun lounger decks. Lower decks reduce motion sensation and are usually quieter, offering closer access to the gangway during port arrivals.',
      items: [
        'Higher Decks: Panoramic vistas, sun deck proximity',
        'Lower Decks: Motion dampening, quick tender embarkation',
        'Overhead noise check: Avoid cabins directly below galley/pool'
      ]
    },
    {
      title: '3. Balcony Configurations',
      icon: CheckCircle2,
      desc: 'Do not assume "balcony" means the same thing across all ships. French balconies feature floor-to-ceiling glass doors that open to let fresh air in, but do not have floor space. Verandas provide true outdoor seating, while Seeker\'s Infinity Windows open halfway down.',
      items: [
        'French Balcony: Opening doors, no outdoor chairs',
        'Veranda Suite: Usable private patio space, outdoor dining',
        'Infinity Window: Retracting window pane, modern aesthetic'
      ]
    },
    {
      title: '4. Privacy & Noise Mitigation',
      icon: EyeOff,
      desc: 'Luxury means peace. Check your proximity to elevator shafts, crew stairways, and exhaust vents. Balconies on lower decks can be overlooked by passengers on upper promenade walkways or the bridge wings.',
      items: [
        'Bridge view overlap: Check forward veranda sightlines',
        'Exhaust vents: Aft deck balconies can catch breeze downdrafts',
        'Promenade overlay: Lower deck balconies might have pedestrian views'
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-ts-gold">
              Navigation Strategy
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-navy-950 font-bold leading-tight">
              Yacht Cabin Location Guide
            </h2>
            <div className="w-12 h-1 bg-ts-gold rounded-full"></div>
            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              Selecting the right ship and cabin category is only the first step. Where your suite sits on the deck plan can determine your overall comfort. Follow these expert guidelines.
            </p>
          </div>

          {/* Visual Balance Side Panel */}
          {sectionImage && (
            <div className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-navy-950/10 rounded-[32px] transform translate-x-3 translate-y-3"></div>
              <div className="rounded-[32px] overflow-hidden aspect-[16/10] shadow-xl border border-white relative">
                <MasterImage src={sectionImage} alt="Windstar Deck Plan Layout" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-950/15"></div>
              </div>
            </div>
          )}
        </div>

        {/* 2x2 Grid of Location Decisions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guideSections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/50 rounded-[32px] p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-ts-gold/15 text-ts-gold flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl text-navy-950 font-bold leading-tight">
                      {sec.title}
                    </h3>
                  </div>

                  <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                    {sec.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 gap-3">
                  {sec.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-ts-gold mt-2 shrink-0"></span>
                      <span className="font-sans text-xs sm:text-sm text-slate-700 font-medium leading-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WindstarCabinsLocationGuide;
