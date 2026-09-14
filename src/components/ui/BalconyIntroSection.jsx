import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { Compass, Info } from 'lucide-react';

const BalconyIntroSection = ({ title, subtitle, description, quote, introImage }) => {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden" id="content">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Content Text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] text-ts-gold uppercase bg-slate-50 px-5 py-2 rounded-full border border-slate-100">
                <Compass className="w-3.5 h-3.5" />
                Fleet Overview
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-navy-950 leading-tight">
                {title}
              </h2>
              <p className="font-sans text-slate-500 text-sm sm:text-base font-semibold italic">
                {subtitle}
              </p>
              <div className="w-12 h-0.5 bg-ts-gold"></div>
            </div>

            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              {description}
            </p>

            {/* Warning callout box */}
            {quote && (
              <div className="bg-amber-50 border-l-4 border-ts-gold p-6 rounded-r-2xl flex gap-4 items-start">
                <Info className="w-5 h-5 text-ts-gold shrink-0 mt-0.5" />
                <p className="font-display text-sm sm:text-base text-navy-950 font-bold italic leading-relaxed">
                  "{quote}"
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Image (50:50 ratio visual element) */}
          {introImage && (
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-slate-100 rounded-[48px] -z-10"></div>
              <div className="rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl border border-slate-200/50">
                <MasterImage src={introImage} alt="Windstar Cruise Balcony View" className="w-full h-full object-cover" />
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default BalconyIntroSection;
