import React from 'react';
import FadeIn from './FadeIn';

/**
 * CreteCycladesOverview
 * 50:50 split text + image layout for comparing Crete vs the Cyclades.
 */
const CreteCycladesOverview = ({ image, quickAnswer = {} }) => {
  return (
    <section id="crete-cyclades-overview" className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <FadeIn>
            <div className="text-left space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c9a15c] font-bold block">
                THE MAIN CONTRAST
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 leading-tight">
                Crete is a Destination. The Cyclades Are a Collection of Experiences.
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                This fundamental distinction is easy to overlook. Crete is a massive, self-contained island with extreme geographical diversity, historic cities, and ancient Minoan ruins. The Cyclades are a collection of over two dozen islands, each offering its own distinctive style—from the clifftop glamour of Santorini to the quiet beaches of Sifnos and Folegandros.
              </p>
              
              <div className="bg-[#c9a15c]/5 border-l-4 border-[#c9a15c] p-6 rounded-r-xl space-y-4">
                <span className="text-xs font-sans font-bold tracking-wider text-[#c9a15c] uppercase block">
                  Quick Decision Helper
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-600 font-light">
                  <div>
                    <h5 className="font-sans font-bold text-navy-950 mb-2 uppercase tracking-wide">Choose Crete for:</h5>
                    <ul className="list-disc list-inside space-y-1">
                      {quickAnswer.crete?.slice(0, 4).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-navy-950 mb-2 uppercase tracking-wide">Choose Cyclades for:</h5>
                    <ul className="list-disc list-inside space-y-1">
                      {quickAnswer.cyclades?.slice(0, 4).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Immersive Image */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#c9a15c]/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img
                src={image}
                alt="Scenic Greek coast showing ocean and luxury villas"
                className="relative z-10 w-full h-[450px] object-cover rounded-3xl shadow-2xl border border-slate-100"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default CreteCycladesOverview;
