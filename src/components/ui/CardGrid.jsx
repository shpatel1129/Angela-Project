import React from 'react';
import FadeIn from './FadeIn';
import * as Icons from 'lucide-react';

const CardGrid = ({ title, subtitle, cards, columns = 4, stagger = true }) => {
  return (
    <section className="w-full py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-ice-50/50 -skew-x-12 transform origin-top-right mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-ts-gold/5 rounded-tr-[100px]"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl text-navy-950 mb-6">{title}</h2>
            {subtitle && (
              <p className="font-sans text-xl text-slate-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </FadeIn>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6`}>
          {cards.map((card, idx) => {
            const IconComponent = Icons[card.icon] || Icons.Star;
            // Create a staggered masonry-like feel by pushing down even columns slightly on desktop
            const marginTop = (stagger && idx % 2 !== 0) ? 'lg:mt-8' : '';

            return (
              <FadeIn key={idx} delay={idx * 0.1} className={`h-full ${marginTop}`}>
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group relative overflow-hidden">
                  {/* Subtle Hover Accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-ts-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  
                  {/* Icon Area */}
                  <div className="w-14 h-14 bg-ice-50 text-navy-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>

                  {/* Content Area */}
                  <h3 className="font-display text-2xl text-navy-950 mb-4">{card.title}</h3>
                  <p className="font-sans text-slate-600 mb-6 flex-grow leading-relaxed">
                    {card.description}
                  </p>

                  {/* Bullets */}
                  {card.bullets && card.bullets.length > 0 && (
                    <ul className="space-y-3 mt-auto pt-6 border-t border-slate-100">
                      {card.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <Icons.CheckCircle2 size={16} className="text-ts-gold shrink-0 mt-0.5" />
                          <span className="font-sans text-sm text-slate-700 leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
