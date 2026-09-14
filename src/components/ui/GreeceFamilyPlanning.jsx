import React from 'react';
import FadeIn from './FadeIn';
import { Car, Compass, Calendar, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

const GreeceFamilyPlanning = ({ transportation = [], timing = [], mistakes = [] }) => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a15c] uppercase block mb-3">
            LOGISTICS PLAYBOOK
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950">
            Greece Family Planning & Logistics
          </h2>
          <div className="w-16 h-0.5 bg-[#c9a15c] mx-auto mt-6 mb-4"></div>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Avoid common transit pitfalls by setting a strategic timeline and using appropriate local transport.
          </p>
        </div>

        {/* Redesigned Grid (Concise) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Block: Transportation (6/12 width) */}
          <div className="lg:col-span-6 bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-navy-900 text-[#c9a15c] flex items-center justify-center shadow-sm">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-950">
                    Getting There & Getting Around
                  </h3>
                  <span className="text-[10px] font-sans text-slate-400 tracking-wider uppercase block">
                    Transit Guidelines
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {transportation.slice(0, 4).map((p, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle className="w-4 h-4 text-[#c9a15c] mt-0.5 flex-shrink-0" />
                    <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                      {p}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Middle Block: Timing (6/12 width) */}
          <div className="lg:col-span-6 bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-navy-900 text-[#c9a15c] flex items-center justify-center shadow-sm">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-950">
                    Timing Your Family Vacation
                  </h3>
                  <span className="text-[10px] font-sans text-slate-400 tracking-wider uppercase block">
                    Seasonal Recommendations
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {timing.slice(0, 4).map((p, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <Clock className="w-4 h-4 text-[#c9a15c] mt-0.5 flex-shrink-0" />
                    <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                      {p}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Full Width Bottom Block: Pitfalls Warning (12/12 width, Concise) */}
          <div className="lg:col-span-12 bg-[#fff5f5] border border-red-100 rounded-3xl p-8 shadow-sm">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8 pb-3 border-b border-red-200">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-red-950">
                    Common Mistakes Families Make in Greece
                  </h3>
                  <span className="text-[10px] font-sans text-red-600 tracking-wider uppercase block font-semibold">
                    Planning Pitfalls to Avoid
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mistakes.slice(0, 3).map((p, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-red-50/50 shadow-sm flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-[10px] font-sans font-bold text-red-500 uppercase tracking-widest block">
                        Warning 0{idx + 1}
                      </span>
                      <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                        {p}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GreeceFamilyPlanning;
