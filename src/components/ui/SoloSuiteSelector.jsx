import React from 'react';
import FadeIn from './FadeIn';
import { ShieldCheck, Maximize, UserCheck, Star } from 'lucide-react';

const SoloSuiteSelector = ({ image }) => {
  const points = [
    {
      title: "Full-Size Accommodations",
      description: "Unlike cruise lines that build tiny, compact solo cabins, Silversea places solo guests in standard luxury suites (starting around 287 sq. ft. on average).",
      icon: Maximize
    },
    {
      title: "Personal Butler Service",
      description: "Every suite onboard receives dedicated butler service. Your butler is your personal concierge, managing dining reservations, shore excursions, and cabin setups.",
      icon: UserCheck
    },
    {
      title: "Veranda Suite Value",
      description: "For many solo guests, a Veranda suite offers the best balance of personal sanctuary, fresh ocean air, and comfortable living space.",
      icon: Star
    },
    {
      title: "All-Suite Experience",
      description: "Regardless of suite category, you receive premium amenities: marble bathrooms, writing desks, customized walk-in closets, and premium bed linens.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual element (Left) */}
          <FadeIn delay={0.2} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 p-4 bg-slate-50">
            <div className="w-full h-full bg-slate-900 relative rounded-2xl overflow-hidden">
              {image && (
                <img 
                  src={image} 
                  alt="Luxury Suite Balcony View" 
                  className="w-full h-full object-cover opacity-85"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                <span className="text-xs uppercase tracking-widest text-gold-300 font-semibold mb-2 block">
                  PERSONAL SANCTUARY
                </span>
                <p className="font-display text-xl font-light italic leading-relaxed text-slate-100">
                  "For the solo traveler, private suite space is not an indulgence—it is the foundation of the luxury experience."
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Points list (Right) */}
          <div className="space-y-12">
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
                Accommodations
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
                The Space Advantage of Standard Suites
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Silversea does not place solo travelers in cramped, single-occupancy closets. Solo guests occupy full-sized suites, enjoying unmatched personal space.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-500 mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-lg text-navy-950 mb-2 font-medium">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans font-light">
                      {pt.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SoloSuiteSelector;
