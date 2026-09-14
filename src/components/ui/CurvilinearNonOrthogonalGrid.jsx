import React from 'react';
import FadeIn from './FadeIn';

const CurvilinearNonOrthogonalGrid = ({ title, subtitle, items = [] }) => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden">
      
      {/* Background Non-Orthogonal Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Large skewed background block */}
        <div className="absolute top-0 right-0 w-3/4 h-[80%] bg-ice-50" 
             style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)' }}>
        </div>
        {/* Decorative diagonal line */}
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gold-200/50 transform -rotate-3 origin-left"></div>
        <div className="absolute top-[60%] right-0 w-full h-[1px] bg-gold-200/50 transform rotate-3 origin-right"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mb-20 md:mb-32">
          <FadeIn>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-navy-950 mb-6 leading-[1.1]">
              {title}
            </h2>
            {subtitle && (
              <p className="font-sans text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-24 md:gap-y-32">
          {items.map((item, index) => {
            const isEven = index % 2 !== 0; // 0-indexed, so 1, 3, 5 are right-aligned
            
            // For a varied layout, we'll alternate sizes and positions in the 12-column grid
            const imageSpan = isEven ? 'md:col-span-5 md:col-start-8' : 'md:col-span-5 md:col-start-1';
            const textSpan = isEven ? 'md:col-span-6 md:col-start-2' : 'md:col-span-6 md:col-start-6';
            
            // Alternate between arch (rounded top) and pill-like (rounded full) for curvilinear variety
            const isArch = index % 3 === 0;
            const imageShapeClass = isArch 
              ? 'rounded-t-[1000px] rounded-b-2xl aspect-[3/4]' 
              : 'rounded-[1000px] aspect-[4/5]';

            // Non-orthogonal clipping paths for the text cards
            const textClipPath = isEven 
              ? 'polygon(5% 0, 100% 0, 100% 95%, 0 100%)' // Angled top-left and bottom-right
              : 'polygon(0 0, 95% 5%, 100% 100%, 0 95%)'; // Angled top-right and bottom-left

            return (
              <React.Fragment key={index}>
                {/* Row Wrapper - Using subgrid concept via col-start/span */}
                
                {/* Image Element - Curvilinear */}
                <div className={`${imageSpan} relative flex items-center justify-center group ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <FadeIn delay={0.1} className="w-full">
                    <div className="relative w-full p-4">
                      {/* Curvilinear Border Accent */}
                      <div 
                        className={`absolute inset-0 border border-gold-300 transition-transform duration-700 ease-out group-hover:scale-105 ${imageShapeClass}`}
                      ></div>
                      
                      {/* Image Mask */}
                      <div className={`relative w-full h-full overflow-hidden shadow-2xl ${imageShapeClass}`}>
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-navy-950/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700"></div>
                      </div>
                      
                      {/* Floating Category Badge */}
                      {item.category && (
                        <div className={`absolute ${isEven ? '-left-6' : '-right-6'} top-1/4 z-30 transform ${isEven ? '-rotate-90 origin-bottom-left' : 'rotate-90 origin-bottom-right'}`}>
                          <span className="inline-block px-6 py-2 bg-navy-950 text-white font-sans text-xs tracking-[0.3em] uppercase whitespace-nowrap shadow-xl">
                            {item.category}
                          </span>
                        </div>
                      )}
                    </div>
                  </FadeIn>
                </div>

                {/* Text Element - Non-Orthogonal */}
                <div className={`${textSpan} relative flex items-center ${isEven ? 'md:order-1' : 'md:order-2'} z-20 mt-[-10%] md:mt-0`}>
                  <FadeIn delay={0.3} className="w-full">
                    <div 
                      className={`bg-white/95 backdrop-blur-xl p-10 md:p-14 lg:p-20 shadow-[0_30px_60px_rgba(16,29,44,0.1)] ${isEven ? 'md:mr-[-15%]' : 'md:ml-[-15%]'}`}
                      style={{ clipPath: textClipPath }}
                    >
                      <h3 className="font-display text-4xl lg:text-5xl text-navy-950 mb-6 leading-tight">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <h4 className="font-sans text-sm tracking-[0.2em] uppercase text-gold-600 mb-6">
                          {item.subtitle}
                        </h4>
                      )}
                      <div className="w-12 h-[2px] bg-gold-400 mb-6"></div>
                      <p className="font-sans text-slate-600 text-lg lg:text-xl leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CurvilinearNonOrthogonalGrid;
