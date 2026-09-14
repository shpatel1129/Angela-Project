import React from 'react';
import FadeIn from './FadeIn';

const TimelineItinerary = ({ title, subtitle, items }) => {
  return (
    <section className="w-full py-16 bg-white relative">
      <div className="max-w-[1024px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">{title}</h2>
          <div className="w-12 h-0.5 bg-ts-gold mx-auto mt-6 mb-6"></div>
          {subtitle && (
            <p className="font-sans text-lg text-slate-500 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </FadeIn>
        
        <div className="relative border-l-4 border-ice-200 ml-4 md:ml-12 pl-8 md:pl-12 space-y-12">
          {items.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="relative">
                {/* Dot */}
                <div className="absolute -left-[45px] md:-left-[61px] top-1 w-6 h-6 rounded-full bg-ts-gold border-4 border-white shadow"></div>
                <h3 className="font-display text-2xl text-navy-900 mb-2">{item.title}</h3>
                {item.subtitle && <p className="font-sans font-bold text-ts-gold mb-2 tracking-wide uppercase text-sm">{item.subtitle}</p>}
                <p className="font-sans text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineItinerary;
