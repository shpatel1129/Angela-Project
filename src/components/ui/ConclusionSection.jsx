import React from 'react';
import FadeIn from './FadeIn';

const ConclusionSection = ({ sections }) => {
  if (!sections || sections.length === 0) return null;

  return (
    <section className="w-full py-16 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-navy-900/40 blur-3xl"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[60%] rounded-full bg-navy-900/30 blur-3xl"></div>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 space-y-24">
        {sections.map((section, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="text-center max-w-4xl mx-auto">
              {idx === 0 && (
                <div className="w-16 h-1 bg-accent-500 mx-auto mb-8"></div>
              )}
              
              <h2 className={`font-display ${idx === 0 ? 'text-4xl md:text-5xl text-white' : 'text-3xl text-ice-100'} mb-8`}>
                {section.heading}
              </h2>
              
              <div className="space-y-8 text-left md:text-center">
                {section.paragraphs?.map((p, i) => {
                  // Check if the paragraph contains a colon to format it dynamically as tags
                  if (p.includes(': ')) {
                    const [intro, listStr] = p.split(': ');
                    const listItems = listStr.split(', ').map(item => item.replace('.', ''));
                    
                    return (
                      <div key={i} className="mb-8 bg-navy-900/50 p-8 rounded-2xl border border-navy-800 backdrop-blur-sm">
                        <p className="font-sans text-xl text-ice-50 mb-6 font-medium">{intro}:</p>
                        <div className="flex flex-wrap justify-start md:justify-center gap-3">
                          {listItems.map((item, j) => (
                            <span key={j} className="bg-navy-800 border border-navy-700 text-ice-100 font-sans text-sm font-medium px-4 py-2 rounded-full shadow-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  
                  return (
                    <p key={i} className={`font-sans ${idx === 0 && i === 0 ? 'text-2xl text-ice-50 font-medium' : 'text-lg text-slate-300'} leading-relaxed`}>
                      {p}
                    </p>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ConclusionSection;
