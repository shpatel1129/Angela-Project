import React from 'react';
import FadeIn from './FadeIn';
import { Flame, Sun, Ship, Activity, CheckCircle, Clock, ShieldAlert } from 'lucide-react';

const GreeceSafetyEnvironmentalRisks = ({ environmentalData }) => {
  const {
    title = "Environmental & Logistical Realities",
    subtitle = "Navigating wildfires, Mediterranean heatwaves, seismic geography, and sea conditions.",
    wildfires,
    heatwaves,
    ferriesAndBuffers,
    earthquakes
  } = environmentalData || {};

  return (
    <section id="environmental-risks" className="py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            CLIMATE & LOGISTICS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {title}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed text-lg">
            {subtitle}
          </p>
        </div>

        {/* 2x2 Grid of Environmental Realities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* 1. Wildfires Card */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-3 bg-amber-50 text-amber-600 rounded-2xl border border-amber-200">
                    <Flame size={26} />
                  </span>
                  <div>
                    <span className="text-xs font-sans font-bold tracking-wider text-amber-600 uppercase">Seasonal Factor</span>
                    <h3 className="font-display text-2xl text-navy-950 font-normal">{wildfires?.title || "Wildfire Season"}</h3>
                  </div>
                </div>

                <p className="font-sans text-sm text-slate-600 font-light leading-relaxed mb-6">
                  {wildfires?.description}
                </p>

                <div className="space-y-3">
                  <span className="text-xs font-sans font-bold uppercase tracking-wider text-slate-400 block">
                    Essential Preparation Rules
                  </span>
                  {wildfires?.preparation?.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs font-sans text-slate-700 font-light">
                      <CheckCircle size={15} className="text-[#c9a15c] flex-shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-sans text-slate-400">
                <ShieldAlert size={14} className="text-amber-500" />
                <span>Civil Protection Daily Risk Ratings run May 1 – October 31</span>
              </div>
            </div>
          </FadeIn>

          {/* 2. Ferry & Transit Buffers Card */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-200">
                    <Ship size={26} />
                  </span>
                  <div>
                    <span className="text-xs font-sans font-bold tracking-wider text-blue-600 uppercase">Maritime Logistics</span>
                    <h3 className="font-display text-2xl text-navy-950 font-normal">{ferriesAndBuffers?.title || "Ferry Reliability & Buffers"}</h3>
                  </div>
                </div>

                <p className="font-sans text-sm text-slate-600 font-light leading-relaxed mb-6">
                  {ferriesAndBuffers?.description}
                </p>

                <div className="space-y-4">
                  {ferriesAndBuffers?.bufferRules?.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-sans font-bold text-navy-950 uppercase tracking-wider block mb-1">
                        {item.rule}
                      </span>
                      <p className="text-xs font-sans text-slate-600 font-light leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-sans text-slate-400">
                <ShieldAlert size={14} className="text-blue-500" />
                <span>Meltemi winds peak during July & August across the Cyclades</span>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Summer Heat Schedule & Seismic Awareness Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Heatwave Strategy (7 Cols) */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="h-full bg-navy-950 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 bg-[#c9a15c]/20 text-[#c9a15c] rounded-2xl border border-[#c9a15c]/30">
                      <Sun size={26} />
                    </span>
                    <div>
                      <span className="text-xs font-sans font-semibold tracking-wider text-[#c9a15c] uppercase">Climate Strategy</span>
                      <h3 className="font-display text-2xl text-white font-normal">{heatwaves?.title || "Mediterranean Summer Heat Schedule"}</h3>
                    </div>
                  </div>

                  <p className="text-sm font-sans text-slate-300 font-light leading-relaxed mb-6">
                    {heatwaves?.description}
                  </p>

                  <div className="space-y-3">
                    {heatwaves?.idealRhythm?.map((slot, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2 text-xs font-sans font-semibold text-[#c9a15c] flex-shrink-0">
                          <Clock size={14} />
                          <span>{slot.time}</span>
                        </div>
                        <span className="text-xs font-sans text-slate-300 font-light">
                          {slot.activity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 text-xs font-sans text-slate-400">
                  Pacing and timing outdoor visits prevents heat exhaustion and ensures maximum enjoyment.
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Seismic Awareness (5 Cols) */}
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="h-full bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 bg-purple-50 text-purple-600 rounded-2xl border border-purple-200">
                      <Activity size={26} />
                    </span>
                    <div>
                      <span className="text-xs font-sans font-bold tracking-wider text-purple-600 uppercase">Geological Fact</span>
                      <h3 className="font-display text-2xl text-navy-950 font-normal">{earthquakes?.title || "Seismic & Volcanic Geography"}</h3>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-slate-600 font-light leading-relaxed mb-6">
                    {earthquakes?.description}
                  </p>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
                    <span className="text-xs font-sans font-bold text-navy-950 uppercase tracking-wider block mb-2">
                      Standard Safety Protocol
                    </span>
                    <p className="text-xs font-sans text-slate-600 font-light leading-relaxed">
                      {earthquakes?.protocol}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 text-xs font-sans text-slate-400">
                  Santorini and Crete feature modern seismic engineering and well-established civil emergency frameworks.
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GreeceSafetyEnvironmentalRisks;
