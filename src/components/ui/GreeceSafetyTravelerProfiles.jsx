import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Heart, Users, User, Compass, Ship, CheckCircle2, AlertCircle } from 'lucide-react';

const iconMap = {
  honeymoon: Heart,
  families: Users,
  solo: User,
  seniors: Compass,
  cruise: Ship
};

const GreeceSafetyTravelerProfiles = ({ profilesData }) => {
  const {
    title = "Is Greece Safe for You? Personalized Guidance",
    subtitle = "How safety considerations and itinerary design adjust for different luxury travel styles.",
    profiles = []
  } = profilesData || {};

  const [activeProfile, setActiveProfile] = useState(profiles[0]?.id || 'honeymoon');
  const current = profiles.find(p => p.id === activeProfile) || profiles[0];
  const IconComponent = iconMap[current?.id] || Compass;

  return (
    <section id="traveler-profiles" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            TRAVELER-BY-TRAVELER MATCHMAKER
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {title}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed text-lg">
            {subtitle}
          </p>
        </div>

        {/* Profile Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {profiles.map((prof) => {
            const ProfIcon = iconMap[prof.id] || Compass;
            const isActive = prof.id === activeProfile;
            return (
              <button
                key={prof.id}
                onClick={() => setActiveProfile(prof.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-sans font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-navy-950 text-white shadow-lg scale-105 border border-navy-900'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <ProfIcon size={16} className={isActive ? 'text-[#c9a15c]' : 'text-slate-400'} />
                <span>{prof.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Profile Detail Showcase */}
        {current && (
          <FadeIn key={current.id}>
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-xl max-w-4xl mx-auto">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-navy-950 text-[#c9a15c] flex items-center justify-center flex-shrink-0 shadow-md">
                    <IconComponent size={28} />
                  </div>
                  <div>
                    <span className="text-xs font-sans font-semibold text-[#c9a15c] uppercase tracking-wider">
                      {current.badge}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-navy-950 font-normal">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-sans font-semibold">
                  <CheckCircle2 size={15} />
                  <span>{current.verdict}</span>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                
                {/* Key Considerations */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-2 text-navy-950 font-sans text-xs font-bold uppercase tracking-wider mb-3">
                    <AlertCircle size={16} className="text-amber-500" />
                    <span>Key Practical Considerations</span>
                  </div>
                  <p className="font-sans text-sm text-slate-600 font-light leading-relaxed">
                    {current.keyConsiderations}
                  </p>
                </div>

                {/* Luxury Strategy */}
                <div className="p-6 rounded-2xl bg-[#c9a15c]/10 border border-[#c9a15c]/30 shadow-sm">
                  <div className="flex items-center gap-2 text-navy-950 font-sans text-xs font-bold uppercase tracking-wider mb-3">
                    <Compass size={16} className="text-[#c9a15c]" />
                    <span>Bespoke Itinerary Strategy</span>
                  </div>
                  <p className="font-sans text-sm text-navy-950 font-light leading-relaxed">
                    {current.recommendation}
                  </p>
                </div>

              </div>

            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
};

export default GreeceSafetyTravelerProfiles;
