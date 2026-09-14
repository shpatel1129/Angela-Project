import React from 'react';
import FadeIn from './FadeIn';

const OffersFiveLayers = ({ image }) => {
  const layers = [
    { num: "01", title: "Cruise Fare", desc: "The base cruise price. Evaluate whether standard port-to-port or all-inclusive door-to-door pricing fits your flight and transfer plans." },
    { num: "02", title: "Promotions & Credits", desc: "Active public incentives like shipboard credit, free excursions, or airfare savings that offset total out-of-pocket costs." },
    { num: "03", title: "Venetian Society Benefits", desc: "Loyalty discounts and milestone benefits like shipboard credit, free laundry, or priority booking that enhance onboard value." },
    { num: "04", title: "Suite Selection", desc: "Choosing a suite category that offers the best layout and location relative to price, rather than simply selecting the cheapest option." },
    { num: "05", title: "Professional Advisor Value", desc: "Using a luxury travel advisor's relationships to secure additional amenities, shipboard credit, or VIP treatment." }
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Five Layers checklist */}
          <div>
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
                Value Optimization
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-10 leading-tight">
                The Five Layers of Silversea Value
              </h2>
            </FadeIn>

            <div className="space-y-6">
              {layers.map((layer, idx) => (
                <FadeIn key={idx} delay={0.1 * (idx + 1)}>
                  <div className="flex gap-6 items-start">
                    <span className="font-display text-2xl text-gold-500 font-bold bg-slate-50 border border-slate-200 px-4 py-2 rounded-2xl">
                      {layer.num}
                    </span>
                    <div>
                      <h3 className="font-display text-base text-navy-950 font-semibold mb-1">{layer.title}</h3>
                      <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">{layer.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: Sticky Image */}
          <FadeIn delay={0.15}>
            <div className="sticky top-24">
              <img 
                src={image}
                alt="Silversea luxury suite interior"
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg mb-6"
                loading="lazy"
              />
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h4 className="font-display text-sm text-navy-950 uppercase tracking-wider mb-2">Angela Hughes' Takeaway</h4>
                <p className="font-sans text-slate-600 text-xs font-light leading-relaxed">
                  "A good deal simply saves money. A great booking does something much more important: it gives you the right voyage, the right suite, the right loyalty benefits, and the right overall value."
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default OffersFiveLayers;
