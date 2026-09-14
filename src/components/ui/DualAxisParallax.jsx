import React, { useEffect, useState, useRef } from 'react';
import MasterImage from './MasterImage';

const DualAxisParallax = ({
  items = []
}) => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [containerTop, setContainerTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (containerRef.current) {
        setContainerTop(containerRef.current.offsetTop);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!items || items.length === 0) return null;

  // Calculate parallax offset based on scroll position relative to the component
  const relativeScroll = Math.max(0, scrollY - containerTop + window.innerHeight);
  const speed = 0.15;
  
  // Left column goes UP (negative transform), Right column goes DOWN (positive transform)
  const leftTransform = `translateY(-${relativeScroll * speed}px)`;
  const rightTransform = `translateY(${relativeScroll * (speed * 0.5)}px)`;

  return (
    <section 
      ref={containerRef}
      className="w-full bg-navy-950 text-white relative overflow-hidden py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-12 lg:gap-24">
        
        {/* Left Column (Images moving UP) */}
        <div className="w-full md:w-1/2 flex flex-col gap-16 lg:gap-32 transition-transform duration-75 ease-out" style={{ transform: leftTransform, marginTop: '200px' }}>
          {items.map((item, index) => (
            <div key={`img-${index}`} className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl">
              <MasterImage src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-navy-950/20 mix-blend-multiply"></div>
            </div>
          ))}
        </div>

        {/* Right Column (Data moving DOWN) */}
        <div className="w-full md:w-1/2 flex flex-col gap-16 lg:gap-32 transition-transform duration-75 ease-out" style={{ transform: rightTransform, marginTop: '-100px' }}>
          {items.map((item, index) => (
            <div key={`data-${index}`} className="flex flex-col justify-center min-h-[50vh] lg:min-h-[75vh] px-4">
              <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ts-gold mb-6 block">
                0{index + 1} // {item.subtitle}
              </span>
              <h3 className="font-display text-4xl lg:text-6xl text-white leading-tight mb-8">
                {item.title}
              </h3>
              <p className="font-sans text-lg text-white/70 font-light leading-relaxed mb-10 max-w-lg">
                {item.description}
              </p>
              
              {item.stats && (
                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                  {item.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="font-display text-3xl text-white mb-2">{stat.value}</div>
                      <div className="font-sans text-[10px] font-bold uppercase tracking-widest text-ts-gold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DualAxisParallax;
