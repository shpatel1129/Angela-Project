import React from 'react';
import FadeIn from './FadeIn';
import { Calendar, Clock, MapPin, Compass } from 'lucide-react';

const GreeceHeatItineraries = ({ itineraries = [] }) => {
  const themes = [
    {
      badge: "bg-sky-50 text-sky-600 border-sky-100",
      accent: "border-sky-500",
      bulletColor: "bg-sky-500"
    },
    {
      badge: "bg-[#c9a15c]/10 text-[#c9a15c] border-[#c9a15c]/20",
      accent: "border-[#c9a15c]",
      bulletColor: "bg-[#c9a15c]"
    },
    {
      badge: "bg-emerald-50 text-emerald-600 border-emerald-100",
      accent: "border-emerald-500",
      bulletColor: "bg-emerald-500"
    }
  ];

  return (
    <section id="heat-itineraries" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            RECOMMENDED ROUTING
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Summer Itinerary Strategies
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            See how custom routes are pacing the trip to match the daily heat averages. Less packing, more yachting and pool time.
          </p>
        </div>

        {/* Horizontal Scroll / Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {itineraries.map((itinerary, idx) => {
            const theme = themes[idx % themes.length];
            return (
              <FadeIn key={idx}>
                <div className={`h-full bg-white border-t-4 ${theme.accent} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}>
                  
                  {/* Card Content */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider border ${theme.badge}`}>
                          {itinerary.duration}
                        </span>
                        <Calendar size={18} className="text-slate-400" />
                      </div>
                      <h3 className="font-display text-2xl font-light text-navy-950">
                        {itinerary.title}
                      </h3>
                      <p className="font-sans text-xs text-slate-400 font-medium mt-1">
                        {itinerary.subtitle}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="font-sans text-sm text-slate-500 font-light leading-relaxed bg-slate-50 p-4 rounded-2xl">
                      {itinerary.summary}
                    </p>

                    {/* Day-by-Day Path */}
                    <div className="space-y-4 pt-4 relative pl-5 border-l border-slate-100">
                      {itinerary.days.map((day, i) => (
                        <div key={i} className="relative text-sm font-sans text-slate-600 font-light leading-relaxed">
                          {/* Bullet node */}
                          <div className={`absolute -left-[25px] top-1.5 w-2 h-2 rounded-full ${theme.bulletColor}`} />
                          <p>{day}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer icon */}
                  <div className="pt-6 border-t border-slate-100 mt-8 flex justify-between items-center text-slate-400">
                    <span className="text-xs font-sans font-light flex items-center gap-1.5">
                      <Compass size={14} className="text-[#c9a15c]" />
                      Bespoke Itinerary Strategy
                    </span>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GreeceHeatItineraries;
