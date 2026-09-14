import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { 
  Map, Calendar, Heart, GlassWater, Users, 
  Utensils, Landmark, Anchor, Shield, Ship, 
  Sailboat, Lightbulb, AlertTriangle
} from 'lucide-react';

/**
 * GreeceLuxuryGlance
 * Renders Glance cards and the Mistakes warnings in a premium Bento grid style.
 */
const GreeceLuxuryGlance = ({ glanceItems = [], mistakes = [] }) => {
  const [activeMistake, setActiveMistake] = useState(0);
  
  // Refined Luxury Palette: Navy, White, Slate, and Gold (#c9a15c)
  const bentoStyles = [
    // Row 1
    { colSpan: "col-span-1 md:col-span-2 lg:col-span-2", bg: "bg-navy-950 text-white shadow-xl", icon: Map, iconColor: "text-[#c9a15c]", iconBg: "bg-white/10" },
    { colSpan: "col-span-1", bg: "bg-white border border-slate-200 shadow-sm", icon: Calendar, iconColor: "text-[#c9a15c]", iconBg: "bg-slate-50 border border-slate-100" },
    { colSpan: "col-span-1", bg: "bg-white border border-slate-200 shadow-sm", icon: Heart, iconColor: "text-[#c9a15c]", iconBg: "bg-slate-50 border border-slate-100" },
    
    // Row 2
    { colSpan: "col-span-1", bg: "bg-white border border-slate-200 shadow-sm", icon: GlassWater, iconColor: "text-[#c9a15c]", iconBg: "bg-slate-50 border border-slate-100" },
    { colSpan: "col-span-1", bg: "bg-white border border-slate-200 shadow-sm", icon: Users, iconColor: "text-[#c9a15c]", iconBg: "bg-slate-50 border border-slate-100" },
    { colSpan: "col-span-1", bg: "bg-white border border-slate-200 shadow-sm", icon: Utensils, iconColor: "text-[#c9a15c]", iconBg: "bg-slate-50 border border-slate-100" },
    { colSpan: "col-span-1", bg: "bg-white border border-slate-200 shadow-sm", icon: Landmark, iconColor: "text-[#c9a15c]", iconBg: "bg-slate-50 border border-slate-100" },
    
    // Row 3
    { colSpan: "col-span-1 md:col-span-2 lg:col-span-2", bg: "bg-slate-50 border border-slate-200 shadow-sm", icon: Anchor, iconColor: "text-navy-950", iconBg: "bg-white border border-slate-200" },
    { colSpan: "col-span-1", bg: "bg-white border border-slate-200 shadow-sm", icon: Shield, iconColor: "text-[#c9a15c]", iconBg: "bg-slate-50 border border-slate-100" },
    { colSpan: "col-span-1", bg: "bg-navy-950 text-white shadow-xl", icon: Ship, iconColor: "text-[#c9a15c]", iconBg: "bg-white/10" },
    
    // Row 4
    { colSpan: "col-span-1 lg:col-span-1", bg: "bg-white border border-slate-200 shadow-sm", icon: Sailboat, iconColor: "text-[#c9a15c]", iconBg: "bg-slate-50 border border-slate-100" },
    { colSpan: "col-span-1 md:col-span-3 lg:col-span-3", bg: "bg-slate-50 border border-[#c9a15c]/30 shadow-md", icon: Lightbulb, iconColor: "text-[#c9a15c]", iconBg: "bg-white border border-[#c9a15c]/20" },
  ];

  return (
    <section id="greece-glance" className="py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#c9a15c]/5 blur-[60px] rounded-full pointer-events-none"></div>
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            DESTINATION SNAPSHOT
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Greece at a Glance
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Essential facts and expert planning strategies to help you align your travel goals before exploring itineraries.
          </p>
        </div>

        {/* Top: Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mb-24">
          {glanceItems.map((item, idx) => {
            const style = bentoStyles[idx] || bentoStyles[1]; // Fallback
            const IconComponent = style.icon;
            
            // Determine text colors based on background class
            const isDarkBg = style.bg.includes('text-white');
            const labelColor = isDarkBg ? 'text-white/50' : 'text-slate-400';
            const valueColor = isDarkBg ? 'text-white' : 'text-navy-950';

            return (
              <FadeIn 
                key={idx} 
                delay={idx * 0.05}
                className={`${style.colSpan} ${style.bg} p-6 md:p-8 rounded-2xl flex flex-col justify-between group hover:-translate-y-1 hover:shadow-lg transition-all duration-500`}
              >
                <div className="flex items-start justify-between mb-10">
                  <span className={`text-[10px] md:text-xs font-sans font-bold tracking-[0.1em] uppercase pr-4 ${labelColor}`}>
                    {item.question}
                  </span>
                  <div className={`p-2.5 rounded-full ${style.iconBg} ${style.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent size={20} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <span className={`font-display text-lg md:text-xl font-medium leading-tight block mb-2 ${valueColor}`}>
                    {item.answer}
                  </span>
                  {item.description && (
                    <p className={`font-sans text-sm font-light leading-relaxed ${isDarkBg ? 'text-white/70' : 'text-slate-500'}`}>
                      {item.description}
                    </p>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom: Expert Advisory Warning Box */}
        <FadeIn delay={0.2} className="max-w-5xl mx-auto text-left relative z-10">
          <div className="relative bg-slate-50 p-8 md:p-12 lg:p-16 rounded-[2rem] border border-slate-200 overflow-hidden group">
            
            {/* Subtle gradient background element */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#c9a15c]/10 blur-[80px] transition-transform duration-1000 group-hover:scale-110 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-12">
              {/* Left Column: Heading */}
              <div className="lg:w-1/3">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#c9a15c]/10 border border-[#c9a15c]/20 flex items-center justify-center text-[#c9a15c]">
                    <AlertTriangle size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a15c] uppercase">
                    Expert Advisory
                  </span>
                </div>
                <h4 className="font-display text-3xl md:text-4xl font-light text-navy-950 mb-6 leading-tight">
                  The Biggest Mistakes in Greece Planning
                </h4>
                <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed">
                  Avoid these common pitfalls that can quickly turn a luxurious vacation into a stressful logistical challenge.
                </p>
              </div>

              {/* Right Column: Interactive Accordion List */}
              <div className="lg:w-2/3 flex flex-col justify-center lg:pl-10 lg:border-l border-slate-200">
                {mistakes.map((mistake, idx) => {
                  const isActive = activeMistake === idx;
                  return (
                    <div 
                      key={idx} 
                      onClick={() => setActiveMistake(idx)}
                      className="relative cursor-pointer group py-6 border-b border-slate-200 last:border-0 transition-all duration-500"
                    >
                      {/* Vertical line indicator */}
                      <div className={`absolute left-0 top-6 bottom-6 w-0.5 rounded-full transition-all duration-500 origin-top ${isActive ? 'bg-[#c9a15c] scale-y-100' : 'bg-transparent scale-y-0 group-hover:bg-[#c9a15c]/30 group-hover:scale-y-100'}`}></div>
                      
                      <div className="pl-6 md:pl-8">
                        <div className="flex items-center justify-between">
                          <span className={`font-display text-lg md:text-xl font-medium transition-colors duration-300 ${isActive ? 'text-[#c9a15c]' : 'text-navy-950 group-hover:text-[#c9a15c]/70'}`}>
                            {String(idx + 1).padStart(2, '0')}. {mistake.title}
                          </span>
                          <span className={`text-2xl font-light transition-transform duration-500 ${isActive ? 'rotate-45 text-[#c9a15c]' : 'text-slate-300 group-hover:text-[#c9a15c]/50'}`}>
                            +
                          </span>
                        </div>
                        
                        <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                          <div className="overflow-hidden">
                            <p className="font-sans text-sm md:text-base text-slate-600 font-light leading-relaxed pr-8 md:pr-12">
                              {mistake.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default GreeceLuxuryGlance;
