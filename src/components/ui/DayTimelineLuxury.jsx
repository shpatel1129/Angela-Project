import React, { useState } from 'react';
import { Clock, Sun, Sunset, Moon, Sunrise } from 'lucide-react';

const DayTimelineLuxury = ({ data }) => {
  if (!data || !data.events) return null;

  const [activeIndex, setActiveIndex] = useState(0);

  const getIcon = (timeText) => {
    const lower = timeText.toLowerCase();
    if (lower.includes('morning')) return <Sunrise className="w-6 h-6" />;
    if (lower.includes('midday') || lower.includes('afternoon')) return <Sun className="w-6 h-6" />;
    if (lower.includes('evening') || lower.includes('sunset')) return <Sunset className="w-6 h-6" />;
    return <Moon className="w-6 h-6" />;
  };

  return (
    <section className="py-32 bg-navy-950 text-white overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[100rem] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-400 font-semibold px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 mb-6">
            <Clock className="w-3.5 h-3.5" />
            <span>The Windstar Rhythm</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl text-white mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Interactive Flex Gallery (Desktop) / Stack (Mobile) */}
        <div className="flex flex-col lg:flex-row h-[800px] lg:h-[700px] gap-4 w-full">
          {data.events.map((event, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] flex-1
                  ${isActive ? 'lg:flex-[3.5] flex-[2]' : 'lg:flex-1 flex-[0.5] opacity-80 hover:opacity-100'}
                `}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={event.image} 
                    alt={event.time} 
                    className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${isActive ? 'scale-105' : 'scale-100'}`}
                  />
                  {/* Heavy dark gradient to ensure text readability */}
                  <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent' : 'bg-navy-950/60'}`}></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10">
                  <div className={`flex flex-col ${isActive ? 'items-start' : 'items-center lg:items-start'} gap-4`}>
                    
                    {/* Icon & Time (Always visible, rotates on desktop when inactive) */}
                    <div className={`flex items-center gap-3 transition-all duration-700 ${!isActive && 'lg:-rotate-90 lg:origin-left lg:translate-x-6 lg:mb-12'}`}>
                      <div className={`p-3 rounded-full backdrop-blur-md border transition-colors duration-500 ${isActive ? 'bg-gold-400/20 border-gold-400/50 text-gold-300' : 'bg-navy-900/50 border-white/10 text-white/70'}`}>
                        {getIcon(event.time)}
                      </div>
                      <h3 className={`font-display whitespace-nowrap transition-all duration-700 ${isActive ? 'text-3xl lg:text-4xl text-white' : 'text-xl text-white/80 tracking-wider'}`}>
                        {event.time.split(':')[0]}
                      </h3>
                    </div>

                    {/* Expanding Description (Fades in when active) */}
                    <div 
                      className={`grid transition-all duration-700 ease-in-out w-full ${isActive ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <div className="w-12 h-px bg-gold-400 mb-4"></div>
                        <p className="text-slate-200 text-sm lg:text-base leading-relaxed lg:max-w-md backdrop-blur-sm bg-navy-950/20 p-4 rounded-xl border border-white/5">
                          {event.description}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DayTimelineLuxury;
