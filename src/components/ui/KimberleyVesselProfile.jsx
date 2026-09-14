import React from 'react';
import FadeIn from './FadeIn';
import { ShieldCheck, Ship, Users, Anchor } from 'lucide-react';

const KimberleyVesselProfile = ({ image }) => {
  const specs = [
    {
      label: "Guest Capacity",
      value: "254 Guests",
      description: "Carrying up to 254 guests for a highly intimate, small-group feel.",
      icon: Users
    },
    {
      label: "Crew-to-Guest",
      value: "1 : 1.2",
      description: "Offering personalized butler service and attentive care at sea.",
      icon: Ship
    },
    {
      label: "Expedition Fleet",
      value: "20 Zodiacs",
      description: "Enabling rapid deployment and simultaneous excursions for all guests.",
      icon: Anchor
    },
    {
      label: "Adventure Crafts",
      value: "10 Kayaks",
      description: "Allowing independent, quiet paddle tours of peaceful mangrove bays.",
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
                  alt="Silver Cloud Expedition Vessel" 
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                <span className="text-xs uppercase tracking-widest text-gold-300 font-semibold mb-2 block">
                  EXPEDITION BASECAMP
                </span>
                <p className="font-display text-xl font-light italic leading-relaxed text-slate-100">
                  "Silver Cloud combines robust ice-strengthened hull capabilities with premium all-suite refinement."
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Stats Grid (Right) */}
          <div className="space-y-12">
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
                The Yacht Advantage
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
                Silver Cloud Vessel Profile
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                As a purpose-built luxury expedition ship, Silver Cloud offers the perfect platform for navigating the Kimberley's complex coast while maintaining premium hospitality standards.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specs.map((spec, idx) => {
                const Icon = spec.icon;
                return (
                  <FadeIn key={idx} delay={idx * 0.1} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-500 mb-4">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">
                      {spec.label}
                    </span>
                    <h3 className="font-display text-2xl text-navy-950 mb-2">
                      {spec.value}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans font-light">
                      {spec.description}
                    </p>
                  </FadeIn>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KimberleyVesselProfile;
