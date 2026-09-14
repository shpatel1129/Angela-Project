import React from 'react';

const FooterCTA = ({ data }) => {
  if (!data) return null;

  return (
    <section className="w-full py-16 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0 bg-slate-900 opacity-60" />
      
      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-slate-400 mb-4">{data?.title}</h4>
        <h2 className="font-display text-4xl md:text-5xl mb-6">{data?.subtitle}</h2>
        <p className="font-sans text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {data?.description}
        </p>
        
        <button className="bg-white text-navy-950 font-sans font-medium uppercase tracking-wider text-sm px-8 py-4 rounded hover:bg-ice-50 transition-colors mb-16">
          {data?.buttonText}
        </button>

        <div className="border-t border-slate-700 pt-12">
          <h5 className="font-sans text-sm font-bold text-white mb-6 uppercase tracking-wider">{data?.specialtiesTitle}</h5>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {data?.specialties?.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-400" />
                <span className="font-sans text-sm text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
