import React from 'react';
import FadeIn from './FadeIn';

const WindstarVsRiverDestinations = ({ chooseData, winsData, dayData, image1, image2 }) => {
  if (!chooseData || !winsData || !dayData) return null;

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* PART 05 HEADER */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-slate-500 block">PART 05</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mt-2">
              Travel Styles, Destinations & Daily Life
            </h2>
            <div className="w-12 h-1 bg-ts-gold mx-auto mt-4"></div>
          </FadeIn>
        </div>

        {/* 2 Big Cards: Profiles (satisfying 2,4,6 rule) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Windstar Profile */}
          <FadeIn direction="right">
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl overflow-hidden flex flex-col justify-between h-full hover:shadow-md transition-all">
              {image1 && (
                <div className="w-full h-64 overflow-hidden relative">
                  <img src={image1} alt="Windstar Vibe" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent"></div>
                </div>
              )}
              <div className="p-8 flex-grow">
                <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">
                  TRAVELER VIBE CHECK
                </span>
                <h3 className="font-display text-2xl text-navy-950 font-bold mb-6">
                  {chooseData.windstarProfile?.title}
                </h3>
                <ul className="space-y-3">
                  {chooseData.windstarProfile?.points?.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-ts-gold/10 text-ts-gold flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[10px]">✓</span>
                      <span className="font-sans text-xs sm:text-sm text-slate-600">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* River Profile */}
          <FadeIn direction="left">
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl overflow-hidden flex flex-col justify-between h-full hover:shadow-md transition-all">
              {image2 && (
                <div className="w-full h-64 overflow-hidden relative">
                  <img src={image2} alt="River Cruise Vibe" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent"></div>
                </div>
              )}
              <div className="p-8 flex-grow">
                <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">
                  TRAVELER VIBE CHECK
                </span>
                <h3 className="font-display text-2xl text-navy-950 font-bold mb-6">
                  {chooseData.riverProfile?.title}
                </h3>
                <ul className="space-y-3">
                  {chooseData.riverProfile?.points?.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-ts-gold/10 text-ts-gold flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[10px]">✓</span>
                      <span className="font-sans text-xs sm:text-sm text-slate-600">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 2 Big Cards: Destination Showdown */}
        <div className="bg-ice-50 border border-slate-200 rounded-3xl p-8 md:p-12 mb-20">
          <h3 className="font-display text-2xl text-navy-950 font-bold mb-8 text-center">
            {winsData.title}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Windstar regions */}
            <FadeIn>
              <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 space-y-4">
                <span className="font-sans text-[10px] text-ts-gold uppercase font-bold tracking-widest block">
                  Best For Sea Coastal Itineraries
                </span>
                {winsData.windstarWins?.map((w, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <h4 className="font-sans text-xs sm:text-sm font-bold text-navy-950">{w.region}</h4>
                    <p className="font-sans text-xs text-slate-500 mt-1 leading-relaxed">{w.reason}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* River regions */}
            <FadeIn delay={0.1}>
              <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 space-y-4">
                <span className="font-sans text-[10px] text-ts-gold uppercase font-bold tracking-widest block">
                  Best For Inland River Itineraries
                </span>
                {winsData.riverWins?.map((w, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <h4 className="font-sans text-xs sm:text-sm font-bold text-navy-950">{w.region}</h4>
                    <p className="font-sans text-xs text-slate-500 mt-1 leading-relaxed">{w.reason}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* 2 Big Cards: A Day Onboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Windstar Day */}
          <FadeIn>
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 flex flex-col justify-between h-full hover:shadow-md transition-all">
              <div>
                <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">
                  DAILY DIARY
                </span>
                <h3 className="font-display text-2xl text-navy-950 font-bold mb-4">
                  {dayData.windstarDay?.title}
                </h3>
                {dayData.windstarDay?.paragraphs?.map((p, i) => (
                  <p key={i} className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed mb-3">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* River Cruise Day */}
          <FadeIn delay={0.1}>
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 flex flex-col justify-between h-full hover:shadow-md transition-all">
              <div>
                <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">
                  DAILY DIARY
                </span>
                <h3 className="font-display text-2xl text-navy-950 font-bold mb-4">
                  {dayData.riverDay?.title}
                </h3>
                {dayData.riverDay?.paragraphs?.map((p, i) => (
                  <p key={i} className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed mb-3">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default WindstarVsRiverDestinations;
