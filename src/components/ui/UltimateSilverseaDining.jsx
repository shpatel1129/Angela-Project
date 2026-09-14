import React from 'react';
import FadeIn from './FadeIn';

const UltimateSilverseaDining = ({ image }) => {
  const saltFeatures = [
    { title: "S.A.L.T. Kitchen", desc: "The main culinary hub featuring daily-changing menus that mirror the exact destination or port the ship is visiting." },
    { title: "S.A.L.T. Lab", desc: "An interactive, hands-on cooking kitchen where guests learn to cook traditional recipes guided by chefs." },
    { title: "S.A.L.T. Bar", desc: "A cozy cocktail lounge specializing in locally inspired spirits, wine lists and destination infusions." }
  ];

  const standardVenues = [
    { name: "La Terrazza", desc: "Traditional Italian restaurant highlighting fresh ingredients, handmade pastas and slow-food preparation." },
    { name: "Silver Note", desc: "A sophisticated jazz lounge serving tapas-style dishes alongside smooth live music performance." },
    { name: "The Grill / Hot Rocks", desc: "Outdoor volcanic stone cooking where guests sear their own cuts of meat or fish under the stars." }
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              Culinary Excellence
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
              Silversea Dining &amp; S.A.L.T. Program
            </h2>
            <p className="font-sans text-slate-500 font-light leading-relaxed">
              Dining on Silversea isn't just about fine restaurants — it is about the Sea and Land Taste (S.A.L.T.) program, connecting you deeply with destination cuisine.
            </p>
          </FadeIn>
        </div>

        {/* Split Gallery & SALT Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="Silversea S.A.L.T. culinary demonstration"
                className="w-full h-[440px] object-cover"
                loading="lazy"
              />
            </div>
          </FadeIn>

          <div className="space-y-6">
            <h3 className="font-display text-xl text-navy-950 mb-4 border-b border-slate-100 pb-3 font-semibold">The S.A.L.T. Experience</h3>
            {saltFeatures.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="w-6 h-6 rounded-full bg-navy-950 text-gold-400 text-xs flex items-center justify-center font-bold mt-1 flex-shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="font-display text-sm text-navy-950 font-semibold mb-1">{item.title}</h4>
                  <p className="font-sans text-slate-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Venues */}
        <FadeIn delay={0.15}>
          <div className="max-w-5xl mx-auto border-t border-slate-100 pt-16">
            <h3 className="font-display text-xl text-navy-950 text-center mb-10">Alternative Fine Dining Venues</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {standardVenues.map((venue, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h4 className="font-display text-sm text-navy-950 font-semibold mb-2">{venue.name}</h4>
                  <p className="font-sans text-slate-500 text-xs font-light leading-relaxed">{venue.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default UltimateSilverseaDining;
