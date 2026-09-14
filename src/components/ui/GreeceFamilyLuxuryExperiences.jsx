import React from 'react';
import FadeIn from './FadeIn';

const GreeceFamilyLuxuryExperiences = ({
  beachInfo = [],
  hotelInfo = [],
  activityInfo = [],
  beachImg,
  hotelImg,
  activityImg
}) => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a15c] uppercase block mb-3">
            LUXURY EXPERIENCES
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950">
            Beaches, Accommodations & Activities
          </h2>
          <div className="w-16 h-0.5 bg-[#c9a15c] mx-auto mt-6 mb-4"></div>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Planning family-friendly luxury experiences requires balancing security with upscale comfort. Here is what you need to know.
          </p>
        </div>

        {/* 3-Column Luxury Cards (Concise) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Beaches Card */}
          <FadeIn delay={0.1}>
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="h-48 relative">
                <img src={beachImg} alt="Family Beaches" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-950/20"></div>
                <div className="absolute top-4 left-4 bg-[#c9a15c] text-white text-[10px] font-sans font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                  Beaches
                </div>
              </div>
              <div className="p-8 flex-grow space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="font-display text-xl font-bold text-navy-950 leading-snug">
                    Family Beaches: Safety & Sand
                  </h4>
                  <div className="space-y-3 font-sans text-xs text-slate-500 font-light leading-relaxed">
                    {beachInfo.slice(0, 2).map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Accommodations Card */}
          <FadeIn delay={0.2}>
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="h-48 relative">
                <img src={hotelImg} alt="Luxury Hotels & Villas" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-950/20"></div>
                <div className="absolute top-4 left-4 bg-navy-900 text-white text-[10px] font-sans font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                  Accommodations
                </div>
              </div>
              <div className="p-8 flex-grow space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="font-display text-xl font-bold text-navy-950 leading-snug">
                    Luxury Accommodations
                  </h4>
                  <div className="space-y-3 font-sans text-xs text-slate-500 font-light leading-relaxed">
                    {hotelInfo.slice(0, 2).map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Private Excursions Card */}
          <FadeIn delay={0.3}>
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="h-48 relative">
                <img src={activityImg} alt="Private Excursions" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-950/20"></div>
                <div className="absolute top-4 left-4 bg-[#c9a15c] text-white text-[10px] font-sans font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                  Activities
                </div>
              </div>
              <div className="p-8 flex-grow space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="font-display text-xl font-bold text-navy-950 leading-snug">
                    Private Excursions
                  </h4>
                  <div className="space-y-3 font-sans text-xs text-slate-500 font-light leading-relaxed">
                    {activityInfo.slice(0, 2).map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
};

export default GreeceFamilyLuxuryExperiences;
