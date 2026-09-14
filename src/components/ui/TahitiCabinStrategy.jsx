import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { Eye, Shield, HardHat, Compass } from 'lucide-react';

const TahitiCabinStrategy = ({ data, cabinImage }) => {
  if (!data) return null;
  const icons = [Compass, Shield, Eye];

  return (
    <section className="py-28 px-6 bg-navy-950 text-white relative overflow-hidden">
      {/* Absolute glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ts-gold/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-500/5 rounded-full filter blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Cabin details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-ts-gold uppercase bg-white/5 border border-white/10 px-5 py-2 rounded-full">
                Suite Strategy
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
                {data.title}
              </h2>
              <div className="w-12 h-0.5 bg-ts-gold"></div>
              <p className="font-sans text-slate-300 text-base md:text-lg leading-relaxed">
                {data.intro}
              </p>
            </div>

            {/* List of Tips */}
            <div className="space-y-6">
              {data.tips.map((tip, idx) => {
                const Icon = icons[idx % icons.length];
                return (
                  <div key={idx} className="flex gap-5 items-start p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/8 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-ts-gold/15 text-ts-gold flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display text-lg text-white font-bold leading-tight">
                        {tip.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Visual block */}
          {cabinImage && (
            <div className="lg:col-span-5 relative">
              <div className="rounded-[40px] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
                <MasterImage src={cabinImage} alt="Windstar cabins Bora Bora" className="w-full h-full object-cover" />
              </div>
              {/* Floating label */}
              <div className="absolute -bottom-6 -left-6 bg-navy-900 border border-white/10 rounded-2xl p-5 shadow-2xl max-w-xs">
                <span className="text-ts-gold font-display text-base font-bold block mb-1">Advisor Verdict</span>
                <p className="font-sans text-slate-400 text-xs leading-relaxed">
                  "Star Breeze's all-suite space is exceptionally spacious, offering 277+ square feet. Ideal for time-zone adjustments."
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default TahitiCabinStrategy;
