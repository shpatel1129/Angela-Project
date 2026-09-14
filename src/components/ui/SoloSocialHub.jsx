import React from 'react';
import FadeIn from './FadeIn';
import { Coffee, ShieldCheck, Heart, Users } from 'lucide-react';

const SoloSocialHub = ({ image }) => {
  const socialSteps = [
    {
      num: "01",
      title: "Butler Table-Sharing Setup",
      description: "Ask your butler or the restaurant Maitre D' to coordinate dining with other guests. It is a highly polished way to meet interesting travelers over dinner.",
      icon: Coffee
    },
    {
      num: "02",
      title: "Subtle Solo Gatherings",
      description: "Participate in low-pressure cocktail events organized by the cruise director, allowing guests to chat and connect without mandatory social expectations.",
      icon: Users
    },
    {
      num: "03",
      title: "Expedition Group Landings",
      description: "Board Zodiacs and go on excursions together. Shared adventures like hiking or bird-watching are natural, effortless conversation starters.",
      icon: ShieldCheck
    },
    {
      num: "04",
      title: "Private Retreat Option",
      description: "Enjoy dining alone in your suite or at a private table in the main dining rooms whenever you prefer quiet solitude. The choice is always entirely yours.",
      icon: Heart
    }
  ];

  return (
    <section className="w-full bg-slate-900 py-24 text-white border-b border-slate-800">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Social Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-slate-100 mb-6">
              Dining & Socializing on Board
            </h2>
            <p className="font-sans text-slate-400 font-light leading-relaxed">
              On Silversea, socializing is never forced. You can enjoy complete solitude or meet interesting travelers over dinner, depending entirely on your daily preference.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Timeline process (Left) */}
          <div className="lg:col-span-7 space-y-8">
            {socialSteps.map((step, idx) => {
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
                  alt="Fine Dining Socializing" 
                  className="w-full h-full object-cover opacity-85"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-xs uppercase tracking-widest text-gold-300 font-bold mb-1 block">
                  SOCIAL HARMONY
                </span>
                <p className="font-display text-lg font-light text-slate-200 italic leading-relaxed">
                  "Silversea's small ship size fosters natural, low-pressure conversations among luxury travelers."
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default SoloSocialHub;
