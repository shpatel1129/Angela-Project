import React from 'react';
import FadeIn from './FadeIn';

const RciPlanningAdvice = ({ timeline, image }) => {
  if (!timeline) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/3 w-32 h-64 bg-navy-950/5 rounded-r-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8">
            <FadeIn>
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-2">TIMELINE STRATEGY</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
                Your Luxury Cruise Planning Timeline
              </h2>
              <div className="w-16 h-1 bg-ts-gold my-6"></div>
              <p className="font-sans text-sm text-slate-655 leading-relaxed font-light">
                Secure prime suites, reserve excursion schedules, and coordinate international flight routes step-by-step using our expert timeline.
              </p>
            </FadeIn>
          </div>
          {image && (
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-32 hidden lg:block">
              <img src={image} alt="Vessel cruising under sky" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-navy-950/20"></div>
            </div>
          )}
        </div>

        {/* Timeline Ladder Grid */}
        <div className="relative border-l-2 border-navy-950/10 pl-6 md:pl-0 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-0.5 md:before:bg-navy-950/10 space-y-12">
          {timeline.map((step, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div key={idx} className="relative md:grid md:grid-cols-2 md:gap-12 md:items-start">
                
                {/* Visual center node */}
                <span className="hidden md:flex absolute left-1/2 top-4 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-navy-950 z-20"></span>
                
                {/* Timeline Card */}
                <div className={`${isEven ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}`}>
                  <FadeIn direction={isEven ? 'right' : 'left'}>
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative hover:shadow-md transition-shadow duration-300 text-left">
                      
                      {/* Badge tag */}
                      <span className="font-sans text-[8px] font-bold text-ts-gold tracking-widest block uppercase mb-1">
                        STAGE 0{idx + 1} • {step.time}
                      </span>
                      <h3 className="font-display text-lg font-bold text-navy-950 mb-3">
                        {step.title}
                      </h3>
                      <p className="font-sans text-xs text-slate-650 leading-relaxed font-light">
                        {step.desc}
                      </p>

                    </div>
                  </FadeIn>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RciPlanningAdvice;
