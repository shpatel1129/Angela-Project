import React from 'react';
import FadeIn from './FadeIn';
import { User, Map, Utensils, Ship, DollarSign, CheckCircle } from 'lucide-react';

const iconMap = {
  user: User,
  map: Map,
  utensils: Utensils,
  ship: Ship,
  dollar: DollarSign,
  check: CheckCircle
};

const LuxuryGrid = ({ title, subtitle, items }) => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            {subtitle && (
              <span className="font-sans text-ts-gold uppercase tracking-widest text-sm font-bold mb-4 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              {title}
            </h2>
            <div className="w-24 h-1 bg-ts-gold mx-auto"></div>
          </div>
        </FadeIn>

        {/* Irregular Space Grid (Masonry Style) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {items.map((item, idx) => {
            const Icon = iconMap[item.icon] || CheckCircle;
            
            return (
              <FadeIn key={idx} delay={idx * 0.1} className="break-inside-avoid">
                <div className="bg-ice-50 border border-navy-100 p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-navy-950 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-ts-gold" />
                  </div>
                  <h3 className="font-display text-2xl text-navy-950 mb-4">
                    {item.title}
                  </h3>
                  <p className="font-sans text-navy-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LuxuryGrid;
