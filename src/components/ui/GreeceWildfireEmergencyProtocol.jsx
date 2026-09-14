import React from 'react';
import FadeIn from './FadeIn';
import { BellRing, ShieldAlert, CheckCircle, AlertOctagon, HelpCircle, PhoneCall } from 'lucide-react';

const GreeceWildfireEmergencyProtocol = ({ protocolData }) => {
  const {
    title = "What to Do If a Wildfire Occurs Near Your Hotel",
    subtitle = "Actionable protocols, official 112 alert systems, and luxury evacuation readiness.",
    alertsSystem,
    evacuationSteps = [],
    hotelSafetyQuestions = []
  } = protocolData || {};

  return (
    <section id="emergency-protocol" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            EMERGENCY READINESS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {title}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed text-lg">
            {subtitle}
          </p>
        </div>

        {/* 112 Broadcast Explanation Box */}
        <FadeIn>
          <div className="bg-gradient-to-r from-navy-950 to-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-xl mb-16 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#c9a15c]/20 text-[#c9a15c] flex items-center justify-center flex-shrink-0 border border-[#c9a15c]/30 shadow-md">
                <BellRing size={32} />
              </div>
              <div className="flex-1">
                <span className="text-xs font-sans font-bold tracking-wider text-[#c9a15c] uppercase block mb-1">
                  OFFICIAL EARLY WARNING SYSTEM
                </span>
                <h3 className="font-display text-2xl text-white font-normal mb-2">
                  {alertsSystem?.title || "Greece 112 Cell-Broadcast System"}
                </h3>
                <p className="font-sans text-xs md:text-sm text-slate-300 font-light leading-relaxed">
                  {alertsSystem?.description}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 6-Step Evacuation Checklist Grid (2x3 or 3x2) */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-1 block">
              STEP-BY-STEP ACTION
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-light text-navy-950">
              The 6-Stage Wildfire Evacuation Protocol
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evacuationSteps.map((step, idx) => (
              <FadeIn key={idx}>
                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-8 h-8 rounded-full bg-navy-950 text-[#c9a15c] text-xs font-sans font-bold flex items-center justify-center shadow-sm">
                        0{step.step}
                      </span>
                      <AlertOctagon size={18} className="text-amber-500" />
                    </div>

                    <h4 className="font-display text-lg font-medium text-navy-950 mb-2">
                      {step.title}
                    </h4>

                    <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* 4 Hotel Safety Vetting Questions */}
        <FadeIn>
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-3 bg-ice-50 text-navy-950 rounded-2xl border border-border-light">
                <HelpCircle size={24} className="text-[#c9a15c]" />
              </span>
              <div>
                <span className="text-xs font-sans font-bold tracking-wider text-slate-400 uppercase">Proactive Hotel Vetting</span>
                <h3 className="font-display text-2xl font-normal text-navy-950">
                  4 Safety Questions to Verify Before Booking Isolated Villas or Resorts
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hotelSafetyQuestions.map((q, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#c9a15c] flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-xs text-slate-700 font-light leading-relaxed">
                    {q}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default GreeceWildfireEmergencyProtocol;
