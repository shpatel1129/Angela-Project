import React from 'react';
import FadeIn from './FadeIn';
import { User, Map, Utensils, Ship, DollarSign, CheckCircle, Eye, Heart, Compass, Maximize, Image, Activity } from 'lucide-react';

const iconMap = {
  user: User,
  map: Map,
  utensils: Utensils,
  ship: Ship,
  dollar: DollarSign,
  check: CheckCircle,
  Eye: Eye,
  Heart: Heart,
  Compass: Compass,
  Coffee: Utensils,
  Maximize: Maximize,
  Image: Image,
  Activity: Activity,
  Map: Map
};

const CurvilinearGrid = ({ title, subtitle, items, paragraphs }) => {
  return (
    <section className="w-full bg-ice-50 py-32 relative overflow-hidden">
      {/* Soft curvilinear background accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-white blur-[100px] opacity-70"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-white blur-[120px] opacity-60"></div>
        <svg className="absolute w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,0 50,50 T100,50 L100,100 L0,100 Z" fill="#D4AF37" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-24 md:mb-32">
            {subtitle && (
              <span className="font-sans text-ts-gold uppercase tracking-widest text-sm font-bold mb-4 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-6">
              {title}
            </h2>
            <div className="w-24 h-1 bg-ts-gold mx-auto rounded-full mb-8"></div>
            {paragraphs && paragraphs.length > 0 && (
              <div className="max-w-4xl mx-auto space-y-4">
                {paragraphs.map((p, i) => (
                  <p key={i} className="font-sans text-lg text-slate-600 leading-relaxed font-light">{p}</p>
                ))}
              </div>
            )}
          </div>
        </FadeIn>

        {/* Curvilinear Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {items.map((item, idx) => {
            const Icon = iconMap[item.icon] || CheckCircle;
            
            // Stagger the middle column downwards to break the orthogonal lines
            const isMiddleColumn = idx % 3 === 1;
            const columnOffset = isMiddleColumn ? 'lg:translate-y-24' : '';
            
            // Alternate initial and hover shapes for fluid motion
            const shapeA = 'rounded-[60px_10px_60px_10px]';
            const shapeB = 'rounded-[10px_60px_10px_60px]';
            
            const defaultShape = idx % 2 === 0 ? shapeA : shapeB;
            const hoverShape = idx % 2 === 0 ? shapeB : shapeA;

            return (
              <FadeIn key={idx} delay={idx * 0.1} className={`w-full ${columnOffset}`}>
                <div 
                  className={`
                    w-full h-full bg-white border border-navy-100/50 p-10 
                    transition-all duration-700 ease-in-out
                    shadow-[0_10px_40px_rgba(0,0,0,0.03)]
                    hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)]
                    hover:-translate-y-2
                    ${defaultShape}
                    hover:${hoverShape}
                    group relative overflow-hidden
                  `}
                >
                  {/* Soft animated background blob inside the card */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-ts-gold/5 rounded-full blur-2xl group-hover:bg-ts-gold/10 group-hover:scale-150 transition-all duration-700"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header Row */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-14 h-14 rounded-full bg-ice-50 border border-navy-100/50 flex items-center justify-center group-hover:bg-navy-950 transition-all duration-500 shadow-sm shrink-0">
                        <Icon className="w-6 h-6 text-ts-gold" />
                      </div>
                      <span className="font-display text-5xl text-navy-900/5 font-bold group-hover:text-ts-gold/20 transition-all duration-500 leading-none tracking-tighter">
                        0{idx + 1}
                      </span>
                    </div>
                    
                    {/* Content Area */}
                    <div className="mt-auto">
                      <h3 className="font-display text-2xl text-navy-950 mb-4 group-hover:text-ts-gold transition-colors duration-500 leading-tight">
                        {item.title}
                      </h3>
                      {/* Decorative separator */}
                      <div className="w-10 h-0.5 bg-ts-gold/40 mb-5 group-hover:bg-ts-gold group-hover:w-16 transition-all duration-500"></div>
                      <div className="font-sans text-navy-700/90 text-[15px] leading-relaxed">
                        <div className="mb-4">{item.description}</div>
                        {item.features && item.features.length > 0 && (
                          <ul className="space-y-2">
                            {item.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-ts-gold mt-2 shrink-0"></div>
                                <span className="text-sm font-medium">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        )}
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

export default CurvilinearGrid;
