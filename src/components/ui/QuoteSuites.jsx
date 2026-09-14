import React from 'react';
import FadeIn from './FadeIn';

const QuoteSuites = ({ image }) => {
  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Cover Image */}
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-navy-950/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img 
                src={image} 
                alt="Silversea luxury suite interior"
                className="relative z-10 w-full h-[460px] object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </FadeIn>

          {/* Right Side: Suite considerations */}
          <FadeIn delay={0.2}>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
                Suite Selection
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-6 leading-tight">
                Choosing the Right Suite Category
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed mb-6">
                Your suite is your private sanctuary. When requesting a quote, we evaluate different suite configurations to find the best layout for your travel style.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-display text-sm text-navy-950 font-semibold mb-2">Space & layout</h4>
                  <p className="font-sans text-slate-600 text-xs font-light leading-relaxed">
                    Categories range from Classic Veranda Suites (ideal for couples) to massive multi-room Grand and Owner's Suites (best for entertaining and extended world cruises).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-display text-sm text-navy-950 font-semibold mb-2">Deck placement & motion</h4>
                  <p className="font-sans text-slate-600 text-xs font-light leading-relaxed">
                    Mid-ship suites on lower decks experience less motion and are highly recommended for open-ocean crossings, while higher decks offer better views.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-display text-sm text-navy-950 font-semibold mb-2">Butler hospitality services</h4>
                  <p className="font-sans text-slate-600 text-xs font-light leading-relaxed">
                    Every suite on Silversea receives dedicated butler hospitality. Higher suite tiers unlock premium beverage options, custom pillow menus, and priority dining reservations.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default QuoteSuites;
