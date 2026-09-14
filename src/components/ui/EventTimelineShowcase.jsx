import React from 'react';
import FadeIn from './FadeIn';
import { 
  Users, UsersRound, Gift, Heart, 
  Briefcase, Network, GraduationCap,
  Sparkles
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

const EventTimelineShowcase = ({ data }) => {
  return (
    <section className="w-full py-20 bg-white border-b border-slate-200 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-normal text-navy-950 mb-6">
              {data.title}
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed italic">
              "{data.subtitle}"
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {data.events.map((event, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = iconMap[event.icon] || Users;

              return (
                <div key={event.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot & Icon */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white bg-navy-950 text-gold-400 flex items-center justify-center z-10 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                    <FadeIn delay={idx * 100} direction={isEven ? "left" : "right"}>
                      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border-t-4 border-t-gold-400 border-l border-r border-b border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
                        
                        <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rotate-45 bg-white border-slate-100 hidden md:block ${
                          isEven ? 'border-t border-r right-[-8px]' : 'border-b border-l left-[-8px]'
                        }`}></div>

                        <h3 className="text-2xl font-display text-navy-950 mb-4 group-hover:text-gold-500 transition-colors">
                          {event.occasion || event.title}
                        </h3>
                        <p className="text-base text-slate-600 leading-relaxed mb-6">
                          {event.description}
                        </p>
                        
                        {event.highlights && event.highlights.length > 0 && (
                          <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                            <ul className="space-y-3">
                              {event.highlights.map((highlight, hIdx) => (
                                <li key={hIdx} className="flex items-start text-sm text-slate-700">
                                  <Sparkles className="w-4 h-4 text-gold-400 mr-3 mt-0.5 shrink-0" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </FadeIn>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTimelineShowcase;
