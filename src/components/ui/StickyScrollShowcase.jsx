import React, { useState, useEffect, useRef } from 'react';
import FadeIn from './FadeIn';

const StickyScrollShowcase = ({ title, subtitle, items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Trigger when item hits the middle of the viewport
        threshold: 0
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1280px] mx-auto px-6 mb-16 text-center">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">{title}</h2>
          {subtitle && (
            <p className="font-sans text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </FadeIn>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative" ref={containerRef}>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 relative items-start">
          
          {/* Left Side: Sticky Image Container */}
          <div className="w-full md:w-1/2 sticky top-32 h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl hidden md:block">
            {items.map((item, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-navy-900 flex items-center justify-center">
                    <span className="text-white opacity-50">No Image</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
              </div>
            ))}
          </div>

          {/* Right Side: Scrolling Content */}
          <div className="w-full md:w-1/2 py-[10vh] md:py-[30vh]">
            {items.map((item, idx) => (
              <div 
                key={idx} 
                ref={el => itemRefs.current[idx] = el}
                data-index={idx}
                className="mb-[30vh] md:mb-[50vh] last:mb-0"
              >
                {/* Mobile Image (hidden on desktop) */}
                <div className="md:hidden w-full h-64 rounded-xl overflow-hidden shadow-lg mb-8">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-navy-900"></div>
                  )}
                </div>

                {/* Structured Content Box */}
                <div className={`transition-all duration-700 ease-out ${activeIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-4'}`}>
                  
                  {/* Title */}
                  <h3 className="font-display text-3xl md:text-4xl text-navy-900 leading-tight mb-6">
                    {item.title}
                  </h3>

                  {/* Intro Description */}
                  <p className="font-sans text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                    {item.description}
                  </p>

                  {/* Structured List */}
                  {item.features && item.features.length > 0 && (
                    <ul className="space-y-4">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></div>
                          <span className="font-sans text-slate-700 leading-relaxed text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Visual indicator line for active state */}
                  <div className="mt-12 h-1 w-full bg-ice-100 rounded-full overflow-hidden">
                     <div className={`h-full bg-navy-600 transition-all duration-1000 ease-out ${activeIndex === idx ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StickyScrollShowcase;
