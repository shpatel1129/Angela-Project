import React from 'react';
import FadeIn from './FadeIn';

const OffersVsLoyalty = ({ image }) => {
  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image */}
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-navy-950/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img 
                src={image} 
                alt="Silversea luxury suite service"
                className="relative z-10 w-full h-[480px] object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </FadeIn>

          {/* Right Side: Key differences and terms */}
          <FadeIn delay={0.2}>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
                Combinability Rules
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-6 leading-tight">
                Can You Combine Offers and Venetian Society Savings?
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed mb-6">
                One of the most common questions is whether loyalty benefits stack with public promotions. The short answer is: <strong>not always</strong>. Silversea programs have specific combinability rules.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="bg-gold-500/10 text-gold-600 p-2 rounded-lg text-sm mt-1">✓</span>
                  <div>
                    <h4 className="font-display text-sm text-navy-950 mb-1">Standard Loyalty Discounts</h4>
                    <p className="font-sans text-slate-600 text-xs font-light leading-relaxed">
                      The typical 5% Venetian Society discount is generally combinable with public promotional fares, though capacity controls apply.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="bg-gold-500/10 text-gold-600 p-2 rounded-lg text-sm mt-1">✗</span>
                  <div>
                    <h4 className="font-display text-sm text-navy-950 mb-1">Special Flash Sales</h4>
                    <p className="font-sans text-slate-600 text-xs font-light leading-relaxed">
                      Deeply discounted last-minute sales, net agency rates, or special charters may exclude all loyalty benefits and milestone credits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="bg-gold-500/10 text-gold-600 p-2 rounded-lg text-sm mt-1">⚠</span>
                  <div>
                    <h4 className="font-display text-sm text-navy-950 mb-1">Milestone Free Cruises</h4>
                    <p className="font-sans text-slate-600 text-xs font-light leading-relaxed">
                      Complimentary milestone cruises are subject to specific room category limits and cannot be stacked with active booking discounts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-slate-50 border border-slate-200 rounded-xl">
                <p className="font-sans text-slate-600 text-xs font-light italic leading-relaxed">
                  "Before booking, verify the exact terms of the promotion to avoid surprises. The smartest approach is comparing the total net booking price across different offer combinations."
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default OffersVsLoyalty;
