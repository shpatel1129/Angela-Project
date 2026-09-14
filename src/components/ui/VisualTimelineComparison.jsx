import React, { useState, useRef, useEffect } from 'react';
import FadeIn from './FadeIn';

const VisualTimelineComparison = ({ 
  title, 
  subtitle, 
  brand1Name = "Avalon", 
  brand2Name = "Scenic", 
  steps = [] 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently closest to the vertical center of the viewport
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(viewportCenter - elementCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-4">{title}</h2>
            <div className="w-12 h-0.5 bg-navy-800 mx-auto mb-6"></div>
            {subtitle && (
              <p className="font-sans text-slate-500 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </FadeIn>
        </div>

        {/* Desktop Brand Headers */}
        <div className="hidden md:flex justify-between max-w-5xl mx-auto px-12 mb-8 sticky top-[100px] bg-white/90 backdrop-blur-sm z-30 py-4 border-b border-ice-100">
          <div className="w-[45%] text-center">
            <h3 className="font-display text-2xl text-navy-900">{brand1Name}</h3>
          </div>
          <div className="w-[10%]"></div>
          <div className="w-[45%] text-center">
            <h3 className="font-display text-2xl text-navy-900">{brand2Name}</h3>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-5xl mx-auto relative">
          
          {/* Continuous background line for the whole section */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-slate-100 md:-translate-x-1/2 z-0" />

          {steps.map((step, index) => (
            <div 
              key={index} 
              ref={el => sectionRefs.current[index] = el}
              className={`relative mb-24 transition-opacity duration-700 ${activeIndex === index ? 'opacity-100' : 'opacity-40'}`}
            >
              <div className="flex flex-col md:flex-row items-center md:items-stretch">
                
                {/* Brand 1 (Avalon) - Left Side */}
                <div className="w-full md:w-[45%] pl-16 md:pl-0 md:pr-12 text-left md:text-right mb-8 md:mb-0">
                  <div className="md:hidden mb-2 text-xs font-sans uppercase tracking-[0.2em] font-bold text-ts-gold">{brand1Name}</div>
                  <h4 className="font-display text-2xl md:text-3xl text-navy-900 mb-4">{step.brand1.title}</h4>
                  <p className="font-sans text-slate-600 leading-relaxed mb-6">{step.brand1.description}</p>
                  {step.brand1.image && (
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                      <img src={step.brand1.image} alt={step.brand1.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                {/* Center Node (Timeline) */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2 z-10 hidden md:block w-32 pointer-events-none">
                  <div className="sticky top-1/2 -translate-y-1/2 flex justify-center">
                    <div className={`px-4 py-2 bg-white border ${activeIndex === index ? 'border-ts-gold' : 'border-slate-200'} rounded-full whitespace-nowrap shadow-sm transition-colors duration-500`}>
                      <span className={`font-sans text-[10px] uppercase tracking-[0.2em] font-bold ${activeIndex === index ? 'text-ts-gold' : 'text-slate-400'}`}>
                        {step.timeNode}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile time node */}
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-12 flex flex-col items-center pointer-events-none">
                   <div className="sticky top-1/2 -translate-y-1/2 flex items-center justify-center h-12">
                     <div className={`w-3 h-3 rounded-full border-2 transition-colors duration-500 bg-white ${activeIndex === index ? 'border-ts-gold' : 'border-slate-300'}`}></div>
                   </div>
                </div>
                <div className="md:hidden w-full pl-16 mb-4">
                  <span className={`font-sans text-[10px] uppercase tracking-[0.2em] font-bold ${activeIndex === index ? 'text-ts-gold' : 'text-slate-400'}`}>
                    {step.timeNode}
                  </span>
                </div>

                {/* Brand 2 (Scenic) - Right Side */}
                <div className="w-full md:w-[45%] pl-16 md:pl-12 text-left md:ml-auto">
                  <div className="md:hidden mb-2 text-xs font-sans uppercase tracking-[0.2em] font-bold text-ts-gold mt-8">{brand2Name}</div>
                  <h4 className="font-display text-2xl md:text-3xl text-navy-900 mb-4">{step.brand2.title}</h4>
                  <p className="font-sans text-slate-600 leading-relaxed mb-6">{step.brand2.description}</p>
                  {step.brand2.image && (
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                      <img src={step.brand2.image} alt={step.brand2.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default VisualTimelineComparison;
