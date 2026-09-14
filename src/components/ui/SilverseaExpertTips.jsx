import React from 'react';
import { Globe, Bed, Plane, FileText, Map, Users } from 'lucide-react';
import MasterImage from './MasterImage';

const iconMap = {
  globe: Globe,
  bed: Bed,
  plane: Plane,
  fileText: FileText,
  map: Map,
  users: Users
};

const SilverseaExpertTips = ({ data, bgImage }) => {
  if (!data) return null;

  return (
    <section className="bg-ice-50 py-24 overflow-hidden relative">
      {/* Subtle diagonal background stripe */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-40 top-0 bottom-0 w-[45%] bg-navy-950/4 transform skew-x-[-6deg]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 font-bold tracking-[0.3em] uppercase text-xs block mb-3">Expert Advice</span>
          <h2 className="font-display text-4xl md:text-6xl text-navy-950 mb-4">{data.headline}</h2>
          <p className="text-slate-500 font-sans text-sm uppercase tracking-widest">{data.subtitle}</p>
          <p className="text-slate-600 max-w-xl mx-auto mt-4">{data.intro}</p>
        </div>

        {/* Tips — alternating numbered cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.tips?.map((tip, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                i % 3 === 0
                  ? 'bg-navy-950 border-navy-900 text-white'
                  : i % 3 === 1
                    ? 'bg-white border-slate-200 text-navy-950'
                    : 'bg-gold-400 border-gold-500/20 text-navy-950'
              }`}
            >
              {/* Number */}
              <div className={`text-[80px] font-display font-bold leading-none mb-4 ${
                i % 3 === 0 ? 'text-white/10' : i % 3 === 1 ? 'text-slate-100' : 'text-gold-400/30'
              }`}>
                {tip.number}
              </div>

              {/* Icon */}
              <div className={`mb-4 ${i % 3 === 0 ? 'text-gold-400' : 'text-navy-950'}`}>
                {(() => {
                  const IconComponent = iconMap[tip.icon] || Globe;
                  return <IconComponent className="w-8 h-8" />;
                })()}
              </div>

              {/* Content */}
              <h3 className={`font-display text-xl mb-3 ${
                i % 3 === 0 ? 'text-white' : 'text-navy-950'
              }`}>
                {tip.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                i % 3 === 0 ? 'text-slate-300' : i % 3 === 2 ? 'text-navy-900' : 'text-slate-600'
              }`}>
                {tip.body}
              </p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-8 right-8 h-0.5 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                i % 3 === 0 ? 'bg-gold-400' : i % 3 === 1 ? 'bg-navy-950' : 'bg-white'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Angela CTA */}
        <div className="mt-16 bg-navy-950 rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            {bgImage && (
              <MasterImage src={bgImage} alt="Antarctica expedition" className="w-full h-full object-cover" />
            )}
          </div>
          <div className="relative z-10">
            <p className="text-gold-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Ready to Start Planning?</p>
            <h3 className="font-display text-3xl md:text-4xl text-white mb-4">Design Your Silversea Journey</h3>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">Talk with Angela Hughes and the Trips & Ships Luxury Travel team to evaluate ships, suites, itineraries and the complete luxury experience.</p>
            <a
              href="#contact"
              className="inline-block bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold uppercase tracking-widest text-xs px-10 py-4 rounded-full transition-colors"
            >
              Request a Silversea Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SilverseaExpertTips;
