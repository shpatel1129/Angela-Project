import React from 'react';
import FadeIn from './FadeIn';

const TriangularMosaicGrid = ({ title, subtitle, items = [] }) => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden">
      
      {/* Very subtle background texture */}
      <div className="absolute inset-0 bg-ice-50/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-8 tracking-wide">
              {title}
            </h2>
            <div className="w-24 h-[1px] bg-gold-400 mx-auto mb-8"></div>
            {subtitle && (
              <p className="font-sans text-lg md:text-xl text-slate-600 leading-relaxed">
                {subtitle}
              </p>
            )}
          </FadeIn>
        </div>

        {/* The List of Items */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;

            // Define rotations to create the "Curvilinear Triangle" (Teardrop) effect
            // We use a square with one sharp corner, rotated so the corner points up or down
            const containerRotation = isEven ? '-rotate-[135deg]' : 'rotate-[45deg]';
            const imageCounterRotation = isEven ? 'rotate-[135deg]' : '-rotate-[45deg]';
            
            // Offset for the 2nd curvilinear triangle (the accent border)
            const accentOffset = isEven ? 'translate-x-6 translate-y-6' : '-translate-x-6 -translate-y-6';

            return (
              <FadeIn key={index} delay={0.1}>
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}>
                  
                  {/* LEFT SIDE: The Creative Visual (2 Curvilinear Triangles) */}
                  <div className="w-full lg:w-1/2 flex justify-center py-12">
                    <div className="relative w-3/4 max-w-[400px] aspect-square group">
                      
                      {/* Triangle 1 (Background Accent): Curvilinear Triangle Outline */}
                      <div 
                        className={`absolute inset-0 border-2 border-gold-400 rounded-[50%_50%_50%_0] transition-transform duration-700 ease-in-out ${containerRotation} ${accentOffset} group-hover:scale-105 group-hover:border-navy-400`}
                      ></div>
                      
                      {/* Triangle 2 (Foreground Image): Curvilinear Triangle Mask */}
                      <div 
                        className={`absolute inset-0 rounded-[50%_50%_50%_0] shadow-[0_20px_40px_rgba(16,29,44,0.15)] overflow-hidden transition-transform duration-1000 ease-out z-10 ${containerRotation} group-hover:-translate-y-2 group-hover:shadow-[0_30px_50px_rgba(16,29,44,0.2)]`}
                      >
                        {/* The image must be counter-rotated and scaled up to fill the rotated box */}
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className={`absolute top-1/2 left-1/2 w-[150%] h-[150%] max-w-none object-cover origin-center -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-[1.6] ${imageCounterRotation}`}
                        />
                        <div className="absolute inset-0 bg-navy-950/10 mix-blend-multiply transition-colors duration-700 group-hover:bg-transparent"></div>
                      </div>

                    </div>
                  </div>

                  {/* RIGHT SIDE: Properly Structured Text Content */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="max-w-xl">
                      {/* Structured Category */}
                      {item.category && (
                        <div className="flex items-center gap-4 mb-6">
                          <span className="w-12 h-[1px] bg-gold-400"></span>
                          <span className="font-sans text-sm tracking-[0.2em] uppercase text-gold-600 font-bold">
                            {item.category}
                          </span>
                        </div>
                      )}
                      
                      {/* Structured Title */}
                      <h3 className="font-display text-4xl lg:text-5xl text-navy-950 mb-6 leading-tight">
                        {item.title}
                      </h3>
                      
                      {/* Structured Subtitle (if any) */}
                      {item.subtitle && (
                        <h4 className="font-sans text-base tracking-wider text-slate-500 mb-6 uppercase">
                          {item.subtitle}
                        </h4>
                      )}
                      
                      {/* Structured Description */}
                      <div className="prose prose-lg text-slate-600 font-sans leading-relaxed">
                        <p>{item.description}</p>
                      </div>

                    </div>
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

export default TriangularMosaicGrid;
