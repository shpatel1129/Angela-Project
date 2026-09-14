import React from 'react';
import FadeIn from './FadeIn';
import { Check } from 'lucide-react';

const ImageOverlayCard = ({ 
  title, 
  subtitle, 
  image, 
  imageAlt, 
  cardTitle, 
  features, 
  bottomNote,
  winner,
  imagePosition = 'left' // 'left' or 'right'
}) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <section className="py-24 bg-ice-50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Title */}
        <FadeIn>
          <div className="text-center mb-20">
            {subtitle && (
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-navy-600 mb-3 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl text-navy-950">
              {title}
            </h2>
            <div className="w-16 h-1 mt-6 mx-auto bg-navy-950/20"></div>
          </div>
        </FadeIn>

        {/* Overlay Layout */}
        <div className={`relative flex flex-col md:flex-row items-center ${isImageLeft ? '' : 'md:flex-row-reverse'}`}>
          
          {/* Image */}
          <FadeIn direction={isImageLeft ? 'right' : 'left'} delay={0.1} className="w-full md:w-3/5 z-10">
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={image} 
                alt={imageAlt || title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          {/* Card */}
          <FadeIn direction={isImageLeft ? 'left' : 'right'} delay={0.3} className={`w-full md:w-[45%] z-20 mt-[-10%] md:mt-0 ${isImageLeft ? 'md:-ml-[10%]' : 'md:-mr-[10%]'}`}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-white/50 backdrop-blur-sm">
              {cardTitle && (
                <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-6">{cardTitle}</h3>
              )}
              
              {features && features.length > 0 && (
                <div className="space-y-4 mb-8">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-navy-900/5 flex items-center justify-center mr-4 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-navy-600" />
                      </div>
                      <span className="font-sans text-navy-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {bottomNote && (
                <p className="font-sans text-navy-600/80 italic mb-6 leading-relaxed">
                  {bottomNote}
                </p>
              )}

              {winner && (
                <div className="mt-4 pt-6 border-t border-navy-900/10">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-navy-900 mb-2 block">
                    Winner
                  </span>
                  <p className="font-sans text-ts-gold font-semibold">
                    {winner}
                  </p>
                </div>
              )}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ImageOverlayCard;
