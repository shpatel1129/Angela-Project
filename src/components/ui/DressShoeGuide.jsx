import React from 'react';
import FadeIn from './FadeIn';
import { HelpCircle, Shield, Check } from 'lucide-react';

const DressShoeGuide = ({ image }) => {
  const categories = [
    {
      num: "01",
      title: "Comfortable Excursion Footwear",
      description: "Pack supportive walking shoes or trainers for historical city sightseeing, cobblestone paths, and zodiac shore landings.",
      icon: HelpCircle
    },
    {
      num: "02",
      title: "Daytime Deck Shoes",
      description: "Bring stylish loafers, boat shoes, or premium sandals for relaxing around the pool and moving between indoor lounges during the day.",
      icon: Shield
    },
    {
      num: "03",
      title: "Evening Dress Footwear",
      description: "Pack elegant flats, dressy loafers, or low heels for dinner. Avoid spike heels, which can be unstable on moving decks.",
      icon: Check
    }
  ];

  return (
    <section className="w-full bg-slate-900 py-24 text-white border-b border-slate-800">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Footwear Strategy
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-slate-100 mb-6">
              The Three Shoe Rule for Smart Packing
            </h2>
            <p className="font-sans text-slate-400 font-light leading-relaxed">
              Shoes are heavy and occupy substantial space. Limiting your footwear to three versatile categories satisfies all cruise activities.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Shoe Timeline (Left) */}
          <div className="lg:col-span-7 space-y-8">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <FadeIn 
                  key={idx} 
                  delay={idx * 0.15} 
                  className="flex gap-6 items-start p-6 bg-slate-800/30 border border-slate-855 hover:bg-slate-800/50 transition-colors duration-300 rounded-2xl group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-800 text-gold-400 font-display text-xl font-bold flex items-center justify-center rounded-xl group-hover:bg-gold-400 group-hover:text-navy-950 transition-colors duration-300">
                    {cat.num}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white mb-2 font-medium">
                      {cat.title}
                    </h3>
                    <p className="font-sans text-sm md:text-base text-slate-400 font-light leading-relaxed">
                      {cat.description}
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
                  alt="Elegant Dress Shoes" 
                  className="w-full h-full object-cover opacity-85"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-xs uppercase tracking-widest text-gold-300 font-bold mb-1 block">
                  FOOTWEAR RHYTHM
                </span>
                <p className="font-display text-lg font-light text-slate-200 italic leading-relaxed">
                  "Limiting footwear to three core pairs prevents heavy luggage while covering all bases."
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default DressShoeGuide;
