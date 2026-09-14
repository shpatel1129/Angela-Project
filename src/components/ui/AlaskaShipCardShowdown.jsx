import React from 'react';
import FadeIn from './FadeIn';
import { Users, Ship, ShieldAlert, BadgeCheck } from 'lucide-react';

const AlaskaShipCardShowdown = ({ image1, image2, image3 }) => {
  const ships = [
    {
      name: "Silver Whisper",
      style: "Classic Luxury",
      size: "Smaller (28,258 GRT)",
      capacity: "388 Guests",
      crewRatio: "1:1.3 Crew Ratio",
      bestFor: "Travelers seeking intimacy, classic luxury, and a quieter traditional cruise experience.",
      details: "Silver Whisper represents the traditional side of Silversea's luxury experience. Its smaller scale creates a sense of calm and familiarity that works beautifully in Alaska, allowing the destination to remain the focus.",
      image: image1
    },
    {
      name: "Silver Moon",
      style: "Modern Luxury",
      size: "Mid-Sized (40,700 GRT)",
      capacity: "596 Guests",
      crewRatio: "1:1.4 Crew Ratio",
      bestFor: "Culinary travelers who want to explore Alaska's indigenous food traditions through S.A.L.T.",
      details: "Silver Moon combines all-suite luxury with the signature S.A.L.T. (Sea and Land Taste) culinary program. Guests enjoy destination-focused culinary workshops, tasting menus, and regional ingredients.",
      image: image2
    },
    {
      name: "Silver Nova",
      style: "Contemporary Luxury",
      size: "Larger (54,700 GRT)",
      capacity: "728 Guests",
      crewRatio: "1:1.3 Crew Ratio",
      bestFor: "Travelers wanting a modern aesthetic, expansive spaces, and a wider range of dining venues.",
      details: "Silver Nova represents a new generation of ship design, featuring an asymmetrical layout that opens up panoramic views of Alaska's landscape. It offers spacious public decks and extensive options.",
      image: image3
    }
  ];

  return (
    <section className="w-full bg-slate-900 py-24 text-white border-b border-slate-800">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Fleet Showdown
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-slate-100 mb-6">
              Silversea Alaska Fleet Compared
            </h2>
            <p className="font-sans text-slate-400 font-light leading-relaxed">
              Choosing the right ship is critical for Alaska. The newest ship isn't always the best fit — it depends entirely on how you want to experience the wilderness.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {ships.map((ship, idx) => (
            <FadeIn key={idx} delay={idx * 0.15} className="flex flex-col bg-slate-800/40 border border-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                {ship.image && (
                  <img 
                    src={ship.image} 
                    alt={ship.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="text-xs uppercase tracking-widest text-gold-300 font-bold mb-1 block">
                    {ship.style}
                  </span>
                  <h3 className="text-2xl font-display font-medium text-white">
                    {ship.name}
                  </h3>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-6 mb-8">
                  <p className="font-sans text-sm text-slate-300 font-light leading-relaxed">
                    {ship.details}
                  </p>

                  <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-800 py-4">
                    <div className="flex items-center gap-2">
                      <Users className="text-gold-400 flex-shrink-0" size={16} />
                      <span className="text-xs text-slate-400">{ship.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ship className="text-gold-400 flex-shrink-0" size={16} />
                      <span className="text-xs text-slate-400">{ship.crewRatio}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-850 border border-slate-850 p-5 rounded-2xl">
                  <h4 className="text-[10px] uppercase tracking-widest text-gold-400 font-bold mb-2 flex items-center gap-1.5">
                    <BadgeCheck size={12} />
                    Best For:
                  </h4>
                  <p className="text-xs font-sans text-slate-400 font-light leading-relaxed">
                    {ship.bestFor}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlaskaShipCardShowdown;
