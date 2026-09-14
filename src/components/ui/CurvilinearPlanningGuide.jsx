import React from 'react';
import FadeIn from './FadeIn';
import { CheckCircle2 } from 'lucide-react';

const CurvilinearPlanningGuide = ({ title, steps }) => {
  if (!steps || steps.length !== 4) return null;

  // The distinctive curvilinear border radius classes for each of the 4 quadrants.
  // We use extreme rounding on alternating corners to create a jigsaw-like curvilinear flow
  // without needing a complex SVG background that mismatches responsive breakpoints.
  const curvilinearStyles = [
    // Top-Left: Extreme curve on bottom-right
    "rounded-tl-2xl rounded-tr-2xl rounded-br-[8rem] md:rounded-br-[12rem] rounded-bl-2xl",
    // Top-Right: Extreme curve on bottom-left
    "rounded-tr-2xl rounded-tl-2xl rounded-bl-[8rem] md:rounded-bl-[12rem] rounded-br-2xl",
    // Bottom-Left: Extreme curve on top-right
    "rounded-bl-2xl rounded-br-2xl rounded-tr-[8rem] md:rounded-tr-[12rem] rounded-tl-2xl",
    // Bottom-Right: Extreme curve on top-left
    "rounded-br-2xl rounded-bl-2xl rounded-tl-[8rem] md:rounded-tl-[12rem] rounded-tr-2xl",
  ];

  // Helper to parse **bold text**
  const renderFormattedText = (text) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return <strong key={i} className="text-navy-950 font-bold">{part}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <section className="w-full py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <FadeIn className="text-center mb-16">
          <span className="font-sans text-ts-gold uppercase tracking-widest text-sm font-bold mb-4 block">
            Expert Planning Guide
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
            {title}
          </h2>
          <div className="w-24 h-1 bg-ts-gold mx-auto"></div>
        </FadeIn>

        {/* 2x2 Curvilinear Grid (Pure CSS shape boundaries) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="h-full flex">
              <div 
                className={`w-full bg-ice-50/60 p-10 md:p-14 lg:p-16 transition-all duration-500 hover:bg-ice-50 border border-slate-100 flex flex-col relative group ${curvilinearStyles[idx]}`}
              >
                {/* Large Step Number Background */}
                <div className="absolute top-6 right-10 font-display text-[6rem] leading-none text-navy-900/5 -z-0 transition-transform duration-500 group-hover:scale-110 group-hover:text-ts-gold/10 pointer-events-none">
                  0{idx + 1}
                </div>

                <div className="relative z-10 flex-grow flex flex-col">
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-6 pr-8">
                    {step.title}
                  </h3>
                  
                  {/* Render Formatted Highlights */}
                  {step.highlights && (
                    <ul className="space-y-4 mt-auto">
                      {step.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-ts-gold mr-3 flex-shrink-0 mt-0.5" />
                          <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed">
                            {renderFormattedText(highlight)}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Fallback for unformatted description if highlights don't exist */}
                  {!step.highlights && step.description && (
                    <p className="font-sans text-slate-600 leading-relaxed mt-auto">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CurvilinearPlanningGuide;
