import React from 'react';
import FadeIn from './FadeIn';
import { ShieldCheck, Compass, HelpCircle, AlertCircle } from 'lucide-react';

const KimberleyDifferentiators = ({ image1, image2 }) => {
  const items = [
    {
      title: "Ancient Rock Art Galleries",
      description: "Explore Indigenous Wandjina and Gwion Gwion (Bradshaw) rock art sites dating back tens of thousands of years. Naturalist-led walks take you deep into sacred caves and sandstone galleries.",
      icon: Compass
    },
    {
      title: "12-Meter Tidal Shifts",
      description: "Experience some of the largest tides on Earth. The massive water movements create incredible phenomena like the Horizontal Falls and reveal the spectacular corals of Montgomery Reef.",
      icon: ShieldCheck
    },
    {
      title: "Vertical Sandstone Gorges",
      description: "Zodiac through narrow waterways flanked by sheer 80-meter red cliffs. The visual contrast of ancient rust-colored stone against emerald-green water defines the region.",
      icon: HelpCircle
    },
    {
      title: "Saltwater Crocodile Habitats",
      description: "Observe apex predators in their natural mangrove-lined river ecosystems. Safety is paramount; expert naturalists ensure safe viewing from the Zodiacs.",
      icon: AlertCircle
    }
  ];

  return (
    <section className="w-full bg-slate-900 py-24 text-white border-b border-slate-800">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Differentiators
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-slate-100 mb-6 leading-tight">
              Why the Kimberley Is Different
            </h2>
            <p className="font-sans text-slate-400 font-light leading-relaxed">
              The Kimberley is not a port-of-call destination. It is a vast, untamed wilderness accessed primarily by expedition crafts.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Features list (Left) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.1} className="bg-slate-800/30 border border-slate-850 p-6 rounded-2xl hover:bg-slate-800/50 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400 mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-xl text-white mb-2 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </FadeIn>
              );
            })}
          </div>

          {/* Visual element (Right) */}
          <FadeIn delay={0.3} className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 p-4 bg-slate-800/40">
            <div className="w-full h-full bg-slate-950 relative rounded-2xl overflow-hidden">
              {image1 && (
                <img 
                  src={image1} 
                  alt="Kimberley Cliffs" 
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-xs uppercase tracking-widest text-gold-300 font-bold mb-1 block">
                  EXPEDITION BLUEPRINT
                </span>
                <p className="font-display text-lg font-light text-slate-200 italic leading-relaxed">
                  "The massive red sandstone cliffs of the King George River rise 80 meters above the tidal waters."
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default KimberleyDifferentiators;
