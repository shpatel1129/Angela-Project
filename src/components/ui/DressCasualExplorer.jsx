import React from 'react';
import FadeIn from './FadeIn';

const DressCasualExplorer = ({ image }) => {
  return (
    <section className="w-full bg-slate-50 py-24 text-slate-900 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content (Left) */}
          <div className="space-y-8">
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
                DAILY WARDROBE
              </span>
              <p className="font-sans text-lg text-slate-700 font-light leading-relaxed mb-6">
                Silversea maintains a dual standard to capture both casual daytime exploration and elegant evening fine dining, ensuring a refined cruise ambiance.
              </p>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <h3 className="font-display text-2xl text-navy-950 mb-2 font-medium">
                  Daytime: Resort Luxury
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans font-light">
                  During the day, the atmosphere mirrors a luxury land resort. Focus on breathable, stylish pieces: linen shirts, cotton trousers, sundresses, swimwear with coverups, and walking shoes.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="font-display text-2xl text-navy-950 mb-2 font-medium">
                  Evening: Elegant Casual
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans font-light">
                  After 6:00 p.m., attire transitions to a polished casual standard. Men wear collared shirts and tailored trousers (sport jackets recommended). Women wear elegant dresses, skirts, or pantsuits.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Visual Element (Right) */}
          <FadeIn delay={0.3} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-100 p-4 bg-white">
            <div className="w-full h-full bg-slate-900 relative rounded-2xl overflow-hidden">
              {image && (
                <img 
                  src={image} 
                  alt="Elegant Onboard Dress" 
                  className="w-full h-full object-cover opacity-85"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-xs uppercase tracking-widest text-gold-300 font-bold mb-1 block">
                  WARDROBE TRANSITION
                </span>
                <p className="font-display text-lg font-light text-slate-200 italic leading-relaxed">
                  "Evening standards transition to Elegant Casual at 6:00 p.m., creating a sophisticated dinner ambiance."
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default DressCasualExplorer;
