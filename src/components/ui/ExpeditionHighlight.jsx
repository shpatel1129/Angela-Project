import React from 'react';

const ExpeditionHighlight = ({ title, subtitle, content, features, image }) => {
  return (
    <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-950 opacity-80 mix-blend-multiply"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-ice-300 to-gold-300 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src={image} 
                alt="Expedition Cruising" 
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <p className="text-gold-400 font-sans tracking-widest uppercase text-sm mb-4">Expedition Focus</p>
              <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-6 leading-tight">
                {title}
              </h2>
              <p className="text-xl text-ice-200 font-display italic mb-6">
                {subtitle}
              </p>
              <div className="space-y-4 font-sans font-light text-navy-100 text-lg leading-relaxed">
                {content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {features && features.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-navy-800">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2.5 flex-shrink-0"></div>
                    <p className="font-sans font-light text-ice-100">{feature}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ExpeditionHighlight;
