import React from 'react';
import FadeIn from './FadeIn';
import { PhoneCall, ShieldAlert, FileText, ExternalLink, HelpCircle, AlertOctagon } from 'lucide-react';

const GreeceSafetyEmergencyGuide = ({ emergencyData }) => {
  const {
    title = "Emergency Contacts & Immediate Protocols",
    subtitle = "Direct telephone numbers, official resources, and step-by-step contingency actions.",
    hotlines = [],
    protocols = [],
    officialResources = []
  } = emergencyData || {};

  return (
    <section id="emergency-guide" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            SAFETY DIRECTORY
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {title}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed text-lg">
            {subtitle}
          </p>
        </div>

        {/* Emergency Numbers Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-1 block">
                SPEED DIAL NUMBERS
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-light text-navy-950">
                Key Greece Emergency Numbers
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-sans text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200">
              <PhoneCall size={14} className="text-[#c9a15c]" />
              <span>All numbers toll-free within Greece</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotlines.map((item, idx) => (
              <FadeIn key={idx}>
                <div className={`p-6 rounded-2xl border transition-all duration-300 h-full flex flex-col justify-between ${
                  item.number === '112' 
                    ? 'bg-navy-950 text-white border-navy-900 shadow-lg' 
                    : 'bg-white text-navy-950 border-slate-200/80 shadow-sm hover:shadow-md'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-2xl font-display font-semibold ${item.number === '112' ? 'text-[#c9a15c]' : 'text-navy-950'}`}>
                        {item.number}
                      </span>
                      <span className={`p-2 rounded-xl ${item.number === '112' ? 'bg-white/10 text-[#c9a15c]' : 'bg-slate-100 text-slate-600'}`}>
                        <PhoneCall size={16} />
                      </span>
                    </div>

                    <h4 className={`font-sans text-sm font-semibold mb-1 ${item.number === '112' ? 'text-white' : 'text-navy-950'}`}>
                      {item.label}
                    </h4>

                    <p className={`font-sans text-xs font-light leading-relaxed ${item.number === '112' ? 'text-slate-300' : 'text-slate-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Step-by-Step Incident Protocols */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-1 block">
              ACTION STEPS
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-light text-navy-950">
              What to Do If Something Unexpected Happens
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {protocols.map((proto, idx) => (
              <FadeIn key={idx}>
                <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="p-3 bg-slate-100 text-navy-950 rounded-2xl border border-slate-200">
                        <AlertOctagon size={22} className="text-[#c9a15c]" />
                      </span>
                      <h4 className="font-display text-xl text-navy-950 font-normal">
                        {proto.situation}
                      </h4>
                    </div>

                    <div className="space-y-3">
                      {proto.steps?.map((step, sIdx) => (
                        <div key={sIdx} className="text-xs font-sans text-slate-600 font-light leading-relaxed border-l-2 border-slate-200 pl-3 py-0.5">
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Official Resources Bar */}
        <FadeIn>
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
            <h3 className="font-display text-xl text-navy-950 font-normal mb-6 flex items-center gap-2">
              <FileText size={20} className="text-[#c9a15c]" />
              <span>Official Government & Meteorological Resources</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {officialResources.map((res, idx) => (
                <a
                  key={idx}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-[#c9a15c]/10 border border-slate-200/80 hover:border-[#c9a15c]/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-sans text-xs font-semibold text-navy-950 group-hover:text-[#c9a15c] transition-colors">
                        {res.name}
                      </span>
                      <ExternalLink size={14} className="text-slate-400 group-hover:text-[#c9a15c] transition-colors" />
                    </div>
                    <span className="text-[11px] font-sans text-slate-500 font-light block">
                      {res.status}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default GreeceSafetyEmergencyGuide;
