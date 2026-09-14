import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { Calendar, Compass, ShieldAlert, Award } from 'lucide-react';

const TahitiItineraryTimeline = ({ data, timelineImage }) => {
  if (!data || !data.routes) return null;

  return (
    <section className="py-28 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Side Image block with statistics/summary details */}
          {timelineImage && (
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
              <div className="relative">
                <div className="absolute -inset-3 bg-slate-100 rounded-[48px] -z-10"></div>
                <div className="rounded-[40px] overflow-hidden aspect-[3/4] shadow-2xl border border-slate-200/50">
                  <MasterImage src={timelineImage} alt="Windstar French Polynesia Cruising" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 flex items-start gap-4 shadow-sm">
                <Compass className="w-6 h-6 text-ts-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-sm font-bold text-navy-950">Topical Authority Note</h4>
                  <p className="font-sans text-xs text-slate-500 mt-1 leading-relaxed">
                    French Polynesia routes cover Society Islands, Tuamotus and Marquesas. Choose a longer cruise if you prefer exploring remote, less crowded coral reefs.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Right Side: Timeline Routes List */}
          <div className={`${timelineImage ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-12`}>
            
            {/* Header */}
            <div className="space-y-5">
              <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-ts-gold uppercase">
                Itinerary Guide
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-navy-950 leading-tight">
                {data.title}
              </h2>
              <div className="w-12 h-0.5 bg-ts-gold"></div>
              <p className="font-sans text-slate-600 text-base md:text-lg leading-relaxed">
                {data.intro}
              </p>
            </div>

            {/* Timeline cards */}
            <div className="space-y-6 relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-10 bottom-10 w-px bg-slate-200 hidden md:block"></div>

              {data.routes.map((route, idx) => (
                <div key={idx} className="flex gap-6 items-start relative group">
                  {/* Timeline icon */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 group-hover:border-ts-gold/50 group-hover:bg-slate-50 transition-all flex items-center justify-center shrink-0 shadow-sm relative z-10">
                    <Calendar className="w-6 h-6 text-slate-400 group-hover:text-ts-gold transition-colors" />
                  </div>

                  {/* Itinerary info card */}
                  <div className="flex-1 bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:border-ts-gold/30 hover:shadow-lg transition-all duration-400">
                    <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
                      <h3 className="font-display text-xl sm:text-2xl text-navy-950 font-bold leading-tight">
                        {route.name}
                      </h3>
                      <span className="bg-navy-950 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-navy-950">
                        {route.duration}
                      </span>
                    </div>
                    <p className="font-sans text-slate-600 text-sm leading-relaxed">
                      {route.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TahitiItineraryTimeline;
