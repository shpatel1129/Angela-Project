import React from 'react';
import FadeIn from './FadeIn';

const RvoDestinations = ({ data, image }) => {
  if (!data) return null;

  return (
    <section id="destinations-travelers" className="w-full py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative accent shadows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ts-gold/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/40 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-14">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">DESTINATIONS & INTENT</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-ts-gold mt-5"></div>
        </FadeIn>

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <FadeIn delay={0.1}>
              <p className="font-serif text-lg md:text-xl text-slate-200 leading-relaxed font-light mb-6">
                {data.intro}
              </p>
              <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-light max-w-2xl">
                Oceania excels at custom-tailored port discovery, especially for independent explorers who want to build their day. Regent is perfect for high-touch guided excursions with maximum convenience.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-4 relative min-h-[250px] lg:min-h-auto">
            <FadeIn direction="left" className="h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 absolute inset-0">
              {image && (
                <img
                  src={image}
                  alt="Regent Ship in Geirangerfjord Norway"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </FadeIn>
          </div>
        </div>

        {/* Traveler Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
          {data.profiles?.map((profile, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="bg-navy-900 border border-white/5 rounded-2xl p-6 hover:border-ts-gold/30 transition-all duration-300">
              <span className="font-sans text-[9px] text-ts-gold font-bold tracking-widest block uppercase mb-1">
                TRAVELER PROFILE
              </span>
              <h4 className="font-display text-lg font-bold text-white mb-2">{profile.name}</h4>
              <p className="font-sans text-xs text-ts-gold font-semibold mb-4">Recommended Match: {profile.match}</p>
              <p className="font-sans text-xs sm:text-sm text-slate-350 font-light leading-relaxed">
                {profile.desc}
              </p>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RvoDestinations;
