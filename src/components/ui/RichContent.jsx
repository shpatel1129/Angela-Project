import React from 'react';
import FadeIn from './FadeIn';
import { Check } from 'lucide-react';

const RichContent = ({ sections }) => {
  if (!sections || sections.length === 0) return null;

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[800px] mx-auto px-6">
        {sections.map((section, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} className="mb-16 last:mb-0">
            {section.heading && (
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-8 border-b border-border-light pb-4">
                {section.heading}
              </h2>
            )}
            
            <div className="space-y-5 text-slate-700 font-sans text-lg leading-relaxed">
              {section.paragraphs?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {section.list && (
              <ul className="mt-8 space-y-4">
                {section.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 bg-ice-50 p-4 rounded-xl border border-slate-100">
                    <Check className="w-5 h-5 text-navy-800 flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.conclusion && (
              <p className="mt-8 font-sans text-lg text-navy-900 italic border-l-4 border-navy-800 pl-5 py-2 bg-slate-50 rounded-r-lg">
                {section.conclusion}
              </p>
            )}

            {section.paragraphsAfter && (
              <div className="space-y-5 mt-8 text-slate-700 font-sans text-lg leading-relaxed">
                {section.paragraphsAfter.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default RichContent;
