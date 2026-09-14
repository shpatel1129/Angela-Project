import React, { useState } from 'react';
import { Lightbulb } from 'lucide-react';
import angelaFallback from '../../assets/avalon-inclusions/Angela.webp';

const OriginExpertTips = ({ tips, image }) => {
  const [imageError, setImageError] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  const handleImageError = () => {
    if (!useFallback && image !== angelaFallback) {
      setUseFallback(true);
    } else {
      setImageError(true);
    }
  };

  const currentImage = useFallback ? angelaFallback : image;
  const showImage = currentImage && !imageError;

  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden border-t border-slate-200/50" id="expert-tips">
      <div className="absolute top-0 right-0 w-96 h-96 bg-ts-gold/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-5">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-ts-gold uppercase bg-navy-950/5 px-5 py-2 rounded-full border border-slate-200">
            Expert Travel Tips
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy-950 leading-tight">
            Trips & Ships Exclusive Advice
          </h2>
          <div className="w-12 h-0.5 bg-ts-gold"></div>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Key strategies from Angela Hughes to ensure you get the absolute most out of your luxury Galápagos expedition:
          </p>
        </div>

        {/* Asymmetric layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Asymmetric tips list */}
          <div className={`${showImage ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-6`}>
            {tips && tips.map((tip, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/60 shadow-sm rounded-3xl p-6 sm:p-8 hover:shadow-md transition-all flex gap-5 items-start"
              >
                <div className="w-10 h-10 rounded-2xl bg-ts-gold/15 text-ts-gold flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display text-lg text-navy-950 font-bold">{tip.title}</h4>
                  <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Image (50:50 ratio balance) */}
          {showImage && (
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-3 bg-slate-200 rounded-[32px] -z-10"></div>
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-slate-200/50">
                <img 
                  src={currentImage} 
                  alt="Angela Hughes Galápagos Travel Advice" 
                  className="w-full h-full object-cover" 
                  onError={handleImageError}
                />
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default OriginExpertTips;
