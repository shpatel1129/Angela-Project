import React from 'react';
import FadeIn from './FadeIn';

const QuoteValueLayers = ({ image }) => {
  const elements = [
    { title: "Destination seasonality", desc: "Sailing during peak seasons vs shoulder periods can dramatically alter the fare rules and promotions available." },
    { title: "Silversea vessel category", desc: "Fares differ between classic luxury ocean liners (like Silver Ray) and rugged expedition vessels (like Silver Endeavour)." },
    { title: "Suite placement & deck location", desc: "Mid-ship suites with larger verandas carry premium rates, while forward/aft suites offer introductory price points." },
    { title: "Airfare options & credits", desc: "Choosing Silversea's air program vs taking an air credit can save thousands, depending on your home city and flight schedules." },
    { title: "Loyalty savings & promotions", desc: "Combining Venetian Society member savings with public cruise promotions where permitted to minimize net cost." }
  ];

  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image */}
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img 
                src={image} 
                alt="Silversea luxury cruise deck"
                className="relative z-10 w-full h-[480px] object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </FadeIn>

          {/* Right Side: Content */}
          <FadeIn delay={0.2}>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
                Cost & Inclusions
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-6 leading-tight">
                What Affects Your Silversea Cruise Cost?
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed mb-8">
                Your Silversea cruise quote is built from multiple variables. Understanding how these layers influence your final proposal allows us to optimize the total price.
              </p>

              <div className="space-y-4">
                {elements.map((el, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 text-gold-500 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-display text-xs uppercase tracking-wider text-navy-950 mb-1">{el.title}</h4>
                      <p className="font-sans text-slate-600 text-xs font-light leading-relaxed">{el.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default QuoteValueLayers;
