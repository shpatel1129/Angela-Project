import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import FadeIn from './FadeIn';

const FAQAccordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const rawList = data?.questions || data?.items || data?.faqs;
  const faqList = Array.isArray(rawList)
    ? rawList
    : Array.isArray(rawList?.items)
      ? rawList.items
      : Array.isArray(rawList?.questions)
        ? rawList.questions
        : Array.isArray(data)
          ? data
          : null;

  if (!data || !faqList || !Array.isArray(faqList)) return null;

  return (
    <section className="w-full py-16 bg-transparent">
      <div className="max-w-[800px] mx-auto px-6">
        {data.title && (
          <FadeIn className="text-center mb-8">
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-4">{data.title}</h2>
            <div className="w-12 h-0.5 bg-navy-800 mx-auto mb-6"></div>
            {data.subtitle && (
              <p className="font-sans text-slate-500 max-w-2xl mx-auto">{data.subtitle}</p>
            )}
          </FadeIn>
        )}

        <div className="border-t border-slate-200">
          {faqList.map((q, idx) => {
            const questionText = typeof q === 'string' ? q : q.question;
            const answerText = typeof q === 'string' ? (data.answers ? data.answers[idx] : '') : q.answer;

            return (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="border-b border-slate-200 overflow-hidden">
                  <button
                    className="w-full py-6 text-left flex items-center justify-between focus:outline-none transition-colors group"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <span className={`font-sans font-medium text-lg pr-8 transition-colors ${openIndex === idx ? 'text-navy-900' : 'text-navy-800 group-hover:text-navy-950'}`}>
                      {questionText}
                    </span>
                    <div className="flex-shrink-0 text-navy-600 transition-transform duration-300">
                      {openIndex === idx ? (
                        <Minus size={20} className="text-navy-800" />
                      ) : (
                        <Plus size={20} />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="font-sans text-slate-600 leading-relaxed pr-8">
                      {answerText}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
