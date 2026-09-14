import React from 'react';
import FadeIn from './FadeIn';
import { Layout, Moon, Droplets, Archive, Sun, Layers, Anchor } from 'lucide-react';

const ICONS = {
  Layout: Layout,
  Moon: Moon,
  Droplets: Droplets,
  Archive: Archive,
  Sun: Sun,
  Layers: Layers,
  Anchor: Anchor
};

const SignatureFeatures = ({ data, images }) => {
  if (!data || !images) return null;

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <span className="block text-amber-700 font-sans tracking-[0.2em] uppercase text-sm mb-4">
              {data.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-950 tracking-tight leading-tight">
              {data.title}
            </h2>
          </div>
        </FadeIn>

        {/* The Asymmetric Alternating Grid */}
        <div className="flex flex-col gap-24 md:gap-32">
          {data.features.map((feature, idx) => {
            const Icon = ICONS[feature.icon] || Layout;
            const isEven = idx % 2 === 0;

            return (
              <div key={feature.id} className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Image Side (60%) */}
                <FadeIn delay={0.1} direction={isEven ? 'left' : 'right'} className="w-full lg:w-7/12 relative aspect-[4/3] md:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl group z-0">
                  <img 
                    src={images[feature.image]} 
                    alt={feature.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  {/* Subtle dark overlay for contrast */}
                  <div className="absolute inset-0 bg-navy-950/10 pointer-events-none"></div>
                </FadeIn>

                {/* Content Side (Takes up 5/12 but visually overlaps) */}
                <FadeIn delay={0.3} direction="up" className={`w-full lg:w-6/12 relative z-10 ${isEven ? 'lg:-ml-24' : 'lg:-mr-24'}`}>
                  <div className="bg-white p-10 md:p-14 rounded-[2rem] shadow-xl border border-stone-100 backdrop-blur-xl bg-white/95">
                    
                    <div className="w-16 h-16 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-8 shadow-sm">
                      <Icon className="w-8 h-8 text-amber-700" />
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-serif text-navy-950 mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    
                    <p className="text-stone-600 font-sans text-lg mb-8 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-4">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-4 group/bullet">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0 group-hover/bullet:scale-150 transition-transform"></div>
                          <span className="text-navy-900 font-sans leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    
                  </div>
                </FadeIn>

              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default SignatureFeatures;
