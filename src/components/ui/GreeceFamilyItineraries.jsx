import React from 'react';
import FadeIn from './FadeIn';
import { Lightbulb, Compass, Navigation, Calendar, Flag, Sparkles } from 'lucide-react';

const GreeceFamilyItineraries = ({
  itn1 = [],
  itn2 = [],
  itn3 = [],
  expertTips = [],
  decisionGuide = []
}) => {
  // Helper to format line items beautifully
  const formatParagraph = (text) => {
    if (text.startsWith('-') || text.startsWith('•')) {
      return (
        <li className="list-none pl-5 relative text-xs text-slate-500 font-light leading-relaxed my-1.5">
          <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#c9a15c]"></span>
          {text.replace(/^[-•]\s*/, '')}
        </li>
      );
    }
    if (text.toLowerCase().startsWith('day ') || text.toLowerCase().startsWith('nights ')) {
      return (
        <h5 className="font-display text-xs font-bold text-navy-950 mt-4 mb-1 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-navy-900"></span>
          {text}
        </h5>
      );
    }
    return <p className="text-xs text-slate-600 font-light leading-relaxed mb-2">{text}</p>;
  };

  return (
    <section className="py-24 bg-white border-b border-slate-100 text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a15c] uppercase block mb-3">
            EXPLORATION PATTERNS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950">
            Expert Family Recommendations
          </h2>
          <div className="w-16 h-0.5 bg-[#c9a15c] mx-auto mt-6 mb-4"></div>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Below, we present three recommended family routes alongside customized advice from Angela Hughes.
          </p>
        </div>

        {/* Itinerary Grid (Redesigned without scrollbars) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          
          <FadeIn delay={0.1}>
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl h-full flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-navy-950 text-[#c9a15c] flex items-center justify-center shadow-sm">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-sans font-bold tracking-widest text-[#c9a15c] uppercase block">
                      Option A • 7 Nights
                    </span>
                    <h4 className="font-display text-sm font-bold text-navy-950">
                      Luxury Naxos Family Itinerary
                    </h4>
                  </div>
                </div>
                <div className="border-t border-slate-200/50 pt-4 space-y-1">
                  {itn1.slice(0, 8).map((p, idx) => (
                    <div key={idx}>{formatParagraph(p)}</div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl h-full flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-navy-950 text-[#c9a15c] flex items-center justify-center shadow-sm">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-sans font-bold tracking-widest text-[#c9a15c] uppercase block">
                      Option B • 10 Nights
                    </span>
                    <h4 className="font-display text-sm font-bold text-navy-950">
                      Premium Teenager Itinerary
                    </h4>
                  </div>
                </div>
                <div className="border-t border-slate-200/50 pt-4 space-y-1">
                  {itn2.slice(0, 8).map((p, idx) => (
                    <div key={idx}>{formatParagraph(p)}</div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl h-full flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-navy-950 text-[#c9a15c] flex items-center justify-center shadow-sm">
                    <Flag className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-sans font-bold tracking-widest text-[#c9a15c] uppercase block">
                      Option C • 14 Nights
                    </span>
                    <h4 className="font-display text-sm font-bold text-navy-950">
                      Multigenerational Itinerary
                    </h4>
                  </div>
                </div>
                <div className="border-t border-slate-200/50 pt-4 space-y-1">
                  {itn3.slice(0, 8).map((p, idx) => (
                    <div key={idx}>{formatParagraph(p)}</div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Advice and Decision Guide Grid (Redesigned without scrollbars) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-slate-100 pt-16">
          
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-[#fbf9f6] text-[#c9a15c] flex items-center justify-center shadow-sm">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy-950">
                  Expert Tips from Angela Hughes
                </h3>
              </div>
              <div className="space-y-4 font-sans text-xs text-slate-600 font-light leading-relaxed">
                {expertTips.slice(0, 8).map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-[#fbf9f6] text-[#c9a15c] flex items-center justify-center shadow-sm">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy-950">
                  High-Intent Decision Guide
                </h3>
              </div>
              <div className="space-y-4 font-sans text-xs text-slate-600 font-light leading-relaxed">
                {decisionGuide.slice(0, 8).map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GreeceFamilyItineraries;
