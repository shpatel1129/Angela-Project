import React from 'react';
import FadeIn from './FadeIn';

const ArcticSeasonTimeline = () => {
  const timelineData = [
    {
      month: "June",
      title: "Polar Bears & Pack Ice",
      focus: "High Arctic & Svalbard Focus",
      description: "Best for watching polar bears hunting on sea ice. High snowmelt creates spectacular waterfalls, and the midnight sun is at its peak."
    },
    {
      month: "July",
      title: "Midnight Sun & Fjord Exploration",
      focus: "West Greenland & Svalbard Focus",
      description: "Tundra wildflowers bloom, ice breaks up to allow deep fjord navigation, and seabird colonies are highly active."
    },
    {
      month: "August",
      title: "Scoresby Sound & Autumn Colors",
      focus: "East Greenland & Svalbard Focus",
      description: "Minimal sea ice allows entry into East Greenland's giant Scoresby Sound. Tundra vegetation changes to rich gold and crimson."
    },
    {
      month: "September",
      title: "Northern Lights & Freeze-up",
      focus: "East & South Greenland Focus",
      description: "Daylight hours decrease, offering the first opportunities to view the Aurora Borealis over the icebergs of Disko Bay."
    }
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Expedition Timing
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              Arctic Summer Expedition Timeline
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Greenland's cruise season is compressed into a short summer window. Each month offers distinct advantages for wildlife, ice conditions, and route access.
            </p>
          </FadeIn>
        </div>

        <div className="relative border-l border-slate-200 ml-4 md:ml-32 space-y-12">
          {timelineData.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.15} className="relative pl-8 md:pl-12 group">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gold-400 border-4 border-white group-hover:bg-navy-950 transition-colors duration-300"></div>
              
              {/* Month label for desktop */}
              <div className="hidden md:block absolute -left-32 top-0 text-right w-24">
                <span className="font-display text-2xl font-semibold text-navy-950 group-hover:text-gold-500 transition-colors duration-300">
                  {item.month}
                </span>
              </div>

              {/* Mobile month label */}
              <div className="md:hidden mb-2">
                <span className="font-display text-xl font-semibold text-navy-950">
                  {item.month}
                </span>
              </div>

              <div className="bg-ice-50/50 hover:bg-white border border-slate-100 hover:shadow-lg rounded-2xl p-6 md:p-8 transition-all duration-300">
                <span className="text-[10px] uppercase tracking-widest text-gold-500 font-bold block mb-1">
                  {item.focus}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-navy-950 mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-slate-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArcticSeasonTimeline;
