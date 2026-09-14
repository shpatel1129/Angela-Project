import React from 'react';
import FadeIn from './FadeIn';
import { Check, Plus } from 'lucide-react';

const PricingTiersBreakdown = ({ title, subtitle, tiers }) => {
  if (!tiers || tiers.length === 0) return null;

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">{title}</h2>
          {subtitle && (
            <p className="font-sans text-lg text-navy-600 max-w-3xl mx-auto">{subtitle}</p>
          )}
          <div className="w-16 h-[2px] bg-ts-gold mx-auto mt-8"></div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div 
                className={`h-full rounded-3xl overflow-hidden border ${
                  tier.isFeatured 
                    ? 'border-navy-900 shadow-xl relative transform lg:-translate-y-4' 
                    : 'border-slate-100 shadow-md bg-white'
                }`}
              >
                {/* Header Image Area */}
                <div className="h-48 w-full relative">
                  <img 
                    src={tier.image} 
                    alt={tier.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent flex flex-col justify-end p-6">
                    {tier.isFeatured && (
                      <span className="absolute top-4 right-4 bg-ts-gold text-navy-950 text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                        Most Popular
                      </span>
                    )}
                    <h3 className="font-display text-2xl text-white">{tier.title}</h3>
                    <p className="font-sans text-ice-100 text-sm mt-1">{tier.subtitle}</p>
                  </div>
                </div>

                {/* Content Area */}
                <div className={`p-8 ${tier.isFeatured ? 'bg-navy-900 text-white' : 'bg-white text-navy-900'}`}>
                  <div className="mb-8">
                    <span className={`text-4xl font-display ${tier.isFeatured ? 'text-white' : 'text-navy-900'}`}>
                      {tier.priceLabel}
                    </span>
                    <span className={`text-sm font-sans block mt-2 ${tier.isFeatured ? 'text-ice-200' : 'text-slate-500'}`}>
                      {tier.priceSubtext}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        {tier.isFeatured ? (
                          <Plus className="w-5 h-5 text-ts-gold flex-shrink-0 mt-0.5" />
                        ) : (
                          <Check className="w-5 h-5 text-navy-700 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`font-sans text-sm ${tier.isFeatured ? 'text-ice-100' : 'text-slate-700'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {tier.ctaText && (
                    <button className={`mt-10 w-full py-4 px-6 rounded-full font-sans text-sm font-bold uppercase tracking-widest transition-colors ${
                      tier.isFeatured 
                        ? 'bg-ts-gold text-navy-950 hover:bg-white' 
                        : 'bg-navy-50 text-navy-900 hover:bg-navy-100'
                    }`}>
                      {tier.ctaText}
                    </button>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTiersBreakdown;
