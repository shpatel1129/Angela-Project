import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { CalendarRange, Pin, BookOpen, AlertTriangle } from 'lucide-react';

const TahitiPlanningGuide = ({ data, planningImage }) => {
  if (!data) return null;
  const stepIcons = [CalendarRange, Pin, BookOpen, AlertTriangle];

  return (
    <section className="py-28 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Side image */}
          {planningImage && (
            <div className="lg:col-span-5 relative order-last lg:order-first">
              <div className="absolute -inset-3 bg-navy-950/5 rounded-[48px] -z-10"></div>
              <div className="rounded-[40px] overflow-hidden aspect-[4/5] shadow-xl border border-slate-200/60">
                <MasterImage src={planningImage} alt="French Polynesia planning" className="w-full h-full object-cover" />
              </div>
            </div>
          )}

          {/* Right Side: Step layout */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-navy-900 uppercase bg-navy-950/5 px-5 py-2 rounded-full">
                Preparation Blueprint
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-navy-950 leading-tight">
                {data.title}
              </h2>
              <div className="w-12 h-0.5 bg-ts-gold"></div>
              <p className="font-sans text-slate-600 text-base md:text-lg leading-relaxed">
                {data.intro}
              </p>
            </div>

            {/* Steps loop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {data.steps.map((step, idx) => {
                const Icon = stepIcons[idx % stepIcons.length];
                return (
                  <div key={idx} className="bg-white border border-slate-200/60 rounded-3xl p-7 space-y-4 shadow-xs hover:shadow-md hover:border-ts-gold/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-slate-500" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display text-base font-bold text-navy-950">
                        {idx + 1}. {step.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TahitiPlanningGuide;
