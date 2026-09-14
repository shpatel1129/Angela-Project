import React, { useState } from 'react';
import FadeIn from './FadeIn';

const ColonialEleganceSplitView = ({ title, subtitle, leftPane, rightPane }) => {
  const [hoveredPane, setHoveredPane] = useState(null);

  return (
    <section className="w-full bg-stone-50 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-4">{title}</h2>
            <p className="font-sans text-lg md:text-xl text-navy-600 max-w-2xl mx-auto">{subtitle}</p>
          </FadeIn>
        </div>

        <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[700px] overflow-hidden rounded-lg shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
          {/* Left Pane */}
          <div 
            className={`relative h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex-shrink-0 cursor-pointer overflow-hidden ${
              hoveredPane === 'left' ? 'md:w-2/3' : hoveredPane === 'right' ? 'md:w-1/3' : 'md:w-1/2'
            }`}
            onMouseEnter={() => setHoveredPane('left')}
            onMouseLeave={() => setHoveredPane(null)}
          >
            <img 
              src={leftPane.image} 
              alt={leftPane.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-100"
            />
            <div className={`absolute inset-0 transition-colors duration-700 ${hoveredPane === 'left' ? 'bg-navy-900/30' : 'bg-navy-900/60'}`}></div>
            
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <div className={`transform transition-all duration-700 ${hoveredPane === 'left' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-90'}`}>
                <span className="font-sans text-gold-400 uppercase tracking-widest text-sm font-bold mb-2 block">
                  {leftPane.category}
                </span>
                <h3 className="font-display text-3xl md:text-5xl text-white mb-4">
                  {leftPane.title}
                </h3>
                <p className={`font-sans text-white text-lg max-w-md transition-all duration-700 delay-100 ${
                  hoveredPane === 'left' ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden md:opacity-100 md:h-auto'
                }`}>
                  {leftPane.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Pane */}
          <div 
            className={`relative h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex-shrink-0 cursor-pointer overflow-hidden ${
              hoveredPane === 'right' ? 'md:w-2/3' : hoveredPane === 'left' ? 'md:w-1/3' : 'md:w-1/2'
            }`}
            onMouseEnter={() => setHoveredPane('right')}
            onMouseLeave={() => setHoveredPane(null)}
          >
            <img 
              src={rightPane.image} 
              alt={rightPane.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-100"
            />
            <div className={`absolute inset-0 transition-colors duration-700 ${hoveredPane === 'right' ? 'bg-stone-900/20' : 'bg-stone-900/50'}`}></div>
            
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <div className={`transform transition-all duration-700 ${hoveredPane === 'right' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-90'}`}>
                <span className="font-sans text-stone-200 uppercase tracking-widest text-sm font-bold mb-2 block">
                  {rightPane.category}
                </span>
                <h3 className="font-display text-3xl md:text-5xl text-white mb-4 drop-shadow-lg">
                  {rightPane.title}
                </h3>
                <p className={`font-sans text-white text-lg max-w-md drop-shadow-md transition-all duration-700 delay-100 ${
                  hoveredPane === 'right' ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden md:opacity-100 md:h-auto'
                }`}>
                  {rightPane.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColonialEleganceSplitView;
