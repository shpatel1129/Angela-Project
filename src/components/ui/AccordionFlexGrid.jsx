import React, { useState } from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const AccordionFlexGrid = ({
  title,
  subtitle,
  items = []
}) => {
  // Start with the first item expanded by default
  const [hoveredIndex, setHoveredIndex] = useState(0);

  if (!items || items.length === 0) return null;

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-12">
          <FadeIn>
            {subtitle && (
              <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ts-gold mb-4 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl text-navy-950">
              {title}
            </h2>
          </FadeIn>
        </div>

        {/* Accordion Flex Container */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col lg:flex-row h-[800px] lg:h-[600px] w-full gap-2 lg:gap-4 overflow-hidden rounded-3xl">
            {items.map((item, index) => {
              const isExpanded = hoveredIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-2xl overflow-hidden shadow-lg 
                    ${isExpanded ? 'flex-[4] lg:flex-[5]' : 'flex-[1] lg:flex-[1]'}`}
                >
                  {/* Background Image */}
                  <MasterImage
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
                    style={{ transform: isExpanded ? 'scale(1.05)' : 'scale(1)' }}
                  />
                  
                  {/* Overlays */}
                  <div className={`absolute inset-0 transition-opacity duration-700 ${isExpanded ? 'bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent' : 'bg-navy-950/60'}`}></div>

                  {/* Vertical Text (Visible when collapsed on Desktop) */}
                  <div className={`absolute inset-0 p-6 flex flex-col justify-end lg:justify-start lg:items-center transition-opacity duration-300
                    ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-300'}
                    lg:pt-12`}>
                    <h3 className="font-display text-2xl text-white transform lg:rotate-180 lg:[writing-mode:vertical-rl] whitespace-nowrap">
                      {item.title}
                    </h3>
                  </div>

                  {/* Expanded Content */}
                  <div className={`absolute inset-0 p-8 lg:p-12 flex flex-col justify-end transition-all duration-700 delay-100
                    ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-px bg-ts-gold"></div>
                      <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ts-gold">
                        {item.subtitle}
                      </span>
                    </div>

                    <h3 className="font-display text-4xl lg:text-5xl text-white mb-4 leading-tight">
                      {item.title}
                    </h3>
                    
                    <p className="font-sans text-white/80 leading-relaxed font-light max-w-md line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default AccordionFlexGrid;
