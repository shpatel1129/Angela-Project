import React from 'react';
import FadeIn from './FadeIn';

const ExplorerHero = ({ title, subtitle, description, backgroundImage }) => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-navy-950 text-white pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt="Seven Seas Explorer"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.7] contrast-[1.05]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/20 z-10" />
      </div>

      <div className="relative z-20 max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Elegant Asymmetric Card */}
        <div className="lg:col-span-8 xl:col-span-7 bg-navy-950/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <FadeIn direction="right">
            <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-ts-gold block mb-4">
              EXCLUSIVELY BY TRIPS & SHIPS
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              {title}
            </h1>
            <p className="font-serif text-lg md:text-xl text-slate-200 leading-relaxed font-light mb-4">
              {subtitle}
            </p>
            <p className="font-sans text-sm md:text-base text-slate-300 leading-relaxed font-light mb-8">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#quick-verdict" className="px-8 py-3 bg-ts-gold text-white hover:bg-white hover:text-navy-950 font-sans text-xs font-bold tracking-widest uppercase transition-all rounded-lg shadow-lg hover:shadow-ts-gold/20">
                Explore The Review
              </a>
              <a href="#planning-advice" className="px-8 py-3 border border-white/20 text-white hover:bg-white/10 font-sans text-xs font-bold tracking-widest uppercase transition-all rounded-lg">
                Expert Advice
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ExplorerHero;
