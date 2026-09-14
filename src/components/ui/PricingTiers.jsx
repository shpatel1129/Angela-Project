import React from 'react';
import FadeIn from './FadeIn';

const PricingTiers = ({ title, description, expenses, totalLabel, totalAmount, note }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">{title}</h2>
            {description && (
              <p className="font-sans text-lg text-navy-600 leading-relaxed max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-ice-50 rounded-3xl p-8 md:p-12 shadow-lg border border-ice-200">
            <div className="space-y-6">
              {expenses.map((expense, idx) => (
                <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-navy-100 pb-4 last:border-0 last:pb-0">
                  <div className="mb-2 md:mb-0">
                    <h4 className="font-display text-xl text-navy-900">{expense.name}</h4>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="font-sans font-medium text-lg text-navy-700 bg-white px-4 py-1 rounded-full border border-ice-200 inline-block">
                      {expense.cost}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t-2 border-navy-900 flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="font-display text-2xl text-navy-900 uppercase tracking-widest">{totalLabel}</h3>
                {note && <p className="text-sm text-navy-500 mt-1">{note}</p>}
              </div>
              <div className="mt-4 md:mt-0">
                <span className="font-display text-3xl md:text-4xl text-gold-500">{totalAmount}</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default PricingTiers;
