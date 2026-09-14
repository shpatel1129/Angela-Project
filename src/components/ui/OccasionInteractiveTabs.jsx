import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { 
  Users, UsersRound, Gift, Heart, 
  Briefcase, Network, GraduationCap,
  ChevronRight
} from 'lucide-react';

const iconMap = {
  "Users": Users,
  "UsersRound": UsersRound,
  "Gift": Gift,
  "Heart": Heart,
  "Briefcase": Briefcase,
  "Network": Network,
  "GraduationCap": GraduationCap
};

const OccasionInteractiveTabs = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeEvent = data.events[activeIndex];
  const ActiveIcon = activeEvent ? (iconMap[activeEvent.icon] || Users) : Users;

  return (
    <section className="w-full py-20 bg-ice-50 border-b border-slate-200 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl pointer-events-none -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-3 block">
              Tailored Experiences
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-normal text-navy-950 mb-6">
              {data.title}
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed italic">
              "{data.subtitle}"
            </p>
          </div>
        </FadeIn>

        {/* Interactive Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Tabs Navigation */}
          <div className="w-full lg:w-5/12 flex flex-col gap-3">
            {data.events.map((event, idx) => {
              const isActive = activeIndex === idx;
              const Icon = iconMap[event.icon] || Users;

              return (
                <button
                  key={event.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative flex items-center justify-between w-full p-5 text-left rounded-2xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-white shadow-lg border border-gold-400/30 ring-1 ring-gold-400/20 translate-x-2' 
                      : 'bg-transparent border border-transparent hover:bg-white/60 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-300 ${
                      isActive ? 'bg-navy-950 text-gold-400' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`font-display text-lg transition-colors duration-300 ${
                      isActive ? 'text-navy-950 font-medium' : 'text-slate-600 group-hover:text-navy-900'
                    }`}>
                      {event.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                    isActive ? 'text-gold-400 opacity-100' : 'text-slate-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Content Display */}
          <div className="w-full lg:w-7/12 sticky top-32">
            <FadeIn key={activeIndex}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
                
                {/* Giant Faded Background Icon */}
                <ActiveIcon className="absolute -bottom-10 -right-10 w-64 h-64 text-slate-50 opacity-50 pointer-events-none transform -rotate-12" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-400/10 text-gold-500 mb-8 border border-gold-400/20 shadow-sm">
                    <ActiveIcon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-display text-navy-950 mb-6 leading-tight">
                    {activeEvent?.title}
                  </h3>
                  
                  <div className="w-12 h-1 bg-gold-400 mb-6"></div>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {activeEvent?.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OccasionInteractiveTabs;
