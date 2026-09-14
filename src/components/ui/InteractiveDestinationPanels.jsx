import React from 'react';
import FadeIn from './FadeIn';

const InteractiveDestinationPanels = ({ title, description, items }) => {
  return (
    <section className="bg-navy-950 py-24 overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">{title}</h2>
            {description && (
              <p className="font-sans text-ice-100 max-w-2xl mx-auto text-lg leading-relaxed">{description}</p>
            )}
            <div className="w-16 h-1 mt-8 mx-auto bg-white/20"></div>
          </div>
        </FadeIn>

        <div className={`grid grid-cols-1 gap-8 w-full ${items.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
          {items.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div 
                className="relative group h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
              >
                {/* Background Image */}
                <img 
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-black/30 transition-colors duration-700 group-hover:bg-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end h-full">
                  <h3 className="font-display text-3xl md:text-4xl text-white mb-4 drop-shadow-md transition-transform duration-500 group-hover:-translate-y-2">
                    {item.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-ts-gold mb-6 transition-all duration-500 group-hover:w-20"></div>
                  <div className="overflow-hidden">
                    <p className="font-sans text-ice-50 text-base md:text-lg leading-relaxed drop-shadow-md opacity-90 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveDestinationPanels;
