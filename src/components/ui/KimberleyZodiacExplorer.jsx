import React from 'react';
import FadeIn from './FadeIn';
import { Compass, Ship, Waves, MapPin } from 'lucide-react';

const KimberleyZodiacExplorer = ({ image }) => {
  const steps = [
    {
      num: "01",
      title: "Morning Basecamp Briefing",
      description: "Gather in the ship's lounge for naturalists to outline the day's tide heights and route conditions before departure.",
      icon: Compass
    },
    {
      num: "02",
      title: "Zodiac Embarkation",
      description: "Step easily onto the sturdy, military-grade inflatable crafts directly from the ship's ocean-level boarding platform.",
      icon: Ship
    },
    {
      num: "03",
      title: "Wilderness Excursion",
      description: "Cruise close to towering rust cliffs, follow saltwater crocodile tracks, or witness the cascading falls up close.",
      icon: Waves
    },
    {
      num: "04",
      title: "Butler-Serviced Return",
      description: "Step back on board to hot towels, personalized refreshments, and the quiet comfort of your private suite.",
      icon: MapPin
    }
  ];

  return (
    <section className="w-full bg-slate-900 py-24 text-white border-b border-slate-800">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Zodiac Sequence
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-slate-100 mb-6">
              A Day of Zodiac & Reef Exploration
            </h2>
            <p className="font-sans text-slate-400 font-light leading-relaxed">
              Zodiacs are your primary window into the Kimberley, allowing up-close encounters with fast-moving tidal streams and hidden rock art.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Timeline Process (Left) */}
          <div className="lg:col-span-7 space-y-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <FadeIn 
                  key={idx} 
                  delay={idx * 0.15} 
                  className="flex gap-6 items-start p-6 bg-slate-800/30 border border-slate-850 hover:bg-slate-800/50 transition-colors duration-300 rounded-2xl group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-800 text-gold-400 font-display text-xl font-bold flex items-center justify-center rounded-xl group-hover:bg-gold-400 group-hover:text-navy-950 transition-colors duration-300">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white mb-2 font-medium">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm md:text-base text-slate-400 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Visual element (Right) */}
          <FadeIn delay={0.3} className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 p-4 bg-slate-800/40">
            <div className="w-full h-full bg-slate-950 relative rounded-2xl overflow-hidden">
              {image && (
                <img 
                  src={image} 
                  alt="Zodiac Boarding" 
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-xs uppercase tracking-widest text-gold-300 font-bold mb-1 block">
                  EXPLORATION CRAFT
                </span>
                <p className="font-display text-lg font-light text-slate-200 italic leading-relaxed">
                  "Boarding the Zodiac takes you from shipside comfort directly into ancient mangrove inlets."
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default KimberleyZodiacExplorer;
