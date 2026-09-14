import { useState } from 'react';
import FadeIn from './FadeIn';

export default function InteractiveGridViewer({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  if (!items || items.length === 0) return null;
  
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="flex flex-col lg:flex-row h-[75vh] min-h-[600px] max-h-[850px] gap-3 md:gap-4 overflow-hidden">
            {items.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-700 ease-in-out ${
                    isActive ? 'flex-[4] lg:flex-[5] shadow-2xl' : 'flex-[0.5] lg:flex-1 shadow-md'
                  }`}
                >
                  {/* Background Image */}
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-navy-800 flex items-center justify-center"></div>
                  )}

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-700 ${
                    isActive ? 'bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent' : 'bg-navy-950/40 hover:bg-navy-950/20'
                  }`}></div>

                  {/* Content Container */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-full">
                    
                    {/* Collapsed Vertical Text (Hidden when active on desktop) */}
                    <div className={`hidden lg:flex items-end h-full absolute inset-0 p-6 transition-opacity duration-500 delay-100 ${
                      isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}>
                      <h3 className="font-display text-white text-xl -rotate-90 origin-bottom-left whitespace-nowrap transform translate-y-8 translate-x-4">
                        {item.title}
                      </h3>
                    </div>

                    {/* Collapsed Horizontal Text (Mobile) */}
                    <div className={`lg:hidden flex items-end absolute inset-0 p-4 transition-opacity duration-500 ${
                      isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}>
                      <h3 className="font-display text-white text-lg leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Expanded Content */}
                    <div className={`transition-all duration-700 ease-in-out transform relative z-10 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none absolute bottom-0'
                    }`}>
                      <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold tracking-wider uppercase mb-4 border border-white/30">
                        {item.category || 'Highlight'}
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight drop-shadow-md">
                        {item.title}
                      </h3>
                      <div className={`overflow-hidden transition-all duration-700 delay-200 ${
                        isActive ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="font-sans text-ice-50 md:text-lg max-w-2xl leading-relaxed drop-shadow-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
