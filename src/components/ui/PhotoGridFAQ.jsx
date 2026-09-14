import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import avalonPlaceholder from '../../assets/brands/avalon/avalon_placeholder.svg';

const PhotoGridFAQ = ({ faqs }) => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-ts-gold uppercase tracking-[0.2em] text-sm font-bold block mb-4">Got Questions?</span>
            <h2 className="font-display text-4xl md:text-6xl text-navy-950 mb-6">Expert Answers</h2>
            <p className="font-sans text-slate-500 max-w-2xl mx-auto text-lg">
              Hover over a card to reveal the answer.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden group cursor-pointer shadow-lg border border-slate-100">
                {/* Background Image */}
                <MasterImage
                  src={avalonPlaceholder}
                  alt={faq.question}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                
                {/* Default State (Question) */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent flex flex-col justify-end p-8 transition-opacity duration-500 group-hover:opacity-0">
                  <h3 className="font-display text-2xl text-white drop-shadow-md leading-snug">
                    {faq.question}
                  </h3>
                </div>

                {/* Hover State (Answer) */}
                <div className="absolute inset-0 bg-navy-950/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-8 translate-y-4 group-hover:translate-y-0">
                  <div className="w-8 h-1 bg-ts-gold mb-6"></div>
                  <p className="font-sans text-white/90 text-lg leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGridFAQ;
