import React from 'react';
import FadeIn from './FadeIn';

const RvcVerdict = ({ data, image }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative side accent */}
      <div className="absolute right-0 top-1/4 w-32 h-64 bg-ts-gold/5 rounded-l-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Stylized Verdict Callouts */}
          <div className="lg:col-span-7 space-y-8">
            <FadeIn>
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-2">THE EXECUTIVE SUMMARY</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
                {data.title}
              </h2>
              <div className="w-16 h-1 bg-ts-gold my-6"></div>
              <p className="font-sans text-sm text-slate-650 leading-relaxed font-light mb-8">
                {data.intro}
              </p>
            </FadeIn>

            {/* Split Verdict Blocks */}
            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <div className="border-l-4 border-navy-950 pl-6 py-2 bg-slate-50/60 rounded-r-2xl pr-4">
                  <span className="font-sans text-[9px] font-bold tracking-[0.2em] uppercase text-navy-950 block mb-1">REGENT SEVEN SEAS VERDICT</span>
                  <p className="font-serif text-sm sm:text-base text-slate-700 italic leading-relaxed">
                    "{data.verdictRegent}"
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="border-l-4 border-ts-gold pl-6 py-2 bg-slate-50/60 rounded-r-2xl pr-4">
                  <span className="font-sans text-[9px] font-bold tracking-[0.2em] uppercase text-ts-gold block mb-1">CRYSTAL CRUISES VERDICT</span>
                  <p className="font-serif text-sm sm:text-base text-slate-700 italic leading-relaxed">
                    "{data.verdictCrystal}"
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Column: Visual Frame and Key Features */}
          <div className="lg:col-span-5">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-50">
                {image && (
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={image} 
                      alt="Luxury Yacht Harbor" 
                      className="w-full h-full object-cover" 
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="font-sans text-[9px] font-bold tracking-widest text-ts-gold block uppercase mb-1">COMPETITIVE METRICS</span>
                      <p className="font-sans text-[11px] text-white font-light">Key takeaways at a glance before booking.</p>
                    </div>
                  </div>
                )}
                
                {/* Highlights List */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h4 className="font-display text-sm font-bold text-navy-950 uppercase tracking-wider mb-2">Core Points of Contrast</h4>
                  {data.details?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-navy-950 text-white flex-shrink-0 flex items-center justify-center font-sans text-[10px] font-bold mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="font-sans text-xs text-slate-650 leading-relaxed font-light">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RvcVerdict;
