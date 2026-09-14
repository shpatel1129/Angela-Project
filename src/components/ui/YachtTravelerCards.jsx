import React from 'react';
import FadeIn from './FadeIn';
import { Heart, Compass, Utensils, Landmark } from 'lucide-react';

const iconMap = {
  Heart: Heart,
  Compass: Compass,
  Utensils: Utensils,
  Landmark: Landmark
};

const YachtTravelerCards = ({ title, subtitle, items, images }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-ice-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">{title}</h2>
            {subtitle && <p className="font-sans text-lg text-navy-600">{subtitle}</p>}
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || Compass;
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="group h-full rounded-3xl overflow-hidden relative shadow-lg shadow-navy-900/5 hover:shadow-2xl hover:shadow-navy-900/10 transition-all duration-500 border border-ice-100 bg-white flex flex-col">
                  
                  <div className="h-48 relative overflow-hidden">
                    {images && images[index] && (
                      <img 
                        src={images[index]} 
                        alt={item.type} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <h3 className="font-display text-xl text-white">{item.type}</h3>
                      <div className="w-10 h-10 rounded-full bg-gold-500/90 flex items-center justify-center text-white backdrop-blur-sm">
                        <Icon size={20} />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex items-start">
                    <p className="font-sans text-navy-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default YachtTravelerCards;
