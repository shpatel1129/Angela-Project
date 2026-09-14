import React from 'react';
import FadeIn from './FadeIn';

const StepByStepGuide = ({ title, subtitle, steps }) => {
  return (
    <section className="w-full bg-ice-50 py-16 md:py-24 border-b border-navy-100">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            {subtitle && (
              <span className="font-sans text-ts-gold uppercase tracking-widest text-sm font-bold mb-4 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              {title}
            </h2>
            <div className="w-24 h-1 bg-ts-gold mx-auto"></div>
          </div>
        </FadeIn>

        {/* Steps */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 md:before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-navy-200 before:to-transparent">
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon / Number */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-ice-50 bg-navy-950 text-ts-gold font-display text-xl z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg shadow-navy-900/20 shrink-0">
                  {idx + 1}
                </div>

                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-8 rounded-2xl shadow-xl shadow-navy-900/5 border border-navy-100 transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="font-display text-2xl text-navy-950 mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-navy-700 leading-relaxed">
                    {step.description}
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

export default StepByStepGuide;
