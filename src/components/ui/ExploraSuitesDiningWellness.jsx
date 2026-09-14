import React from 'react';
import FadeIn from './FadeIn';

const ExploraSuitesDiningWellness = ({ image }) => {
  const sections = [
    {
      category: "Suites",
      icon: (
        <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v16.5M20.25 3v16.5M3.75 5.25h16.5M3.75 12h16.5M4 19.5h16M7.5 8.25h9m-9 3h9" />
        </svg>
      ),
      silversea: {
        title: "All-Suite Luxury",
        points: [
          "Every cabin is a suite with butler service",
          "Personalized suite experience with dedicated butler",
          "Elegant classic interiors with ocean views",
          "Suite becomes a private retreat during exploration",
          "Categories range from Classic Veranda to Grand Suite"
        ]
      },
      explora: {
        title: "Ocean-Front Residences",
        points: [
          "Residential-style suites with contemporary design",
          "Emphasis on space, natural light and ocean views",
          "Private outdoor living areas on most suites",
          "Modern furniture and contemporary finishes",
          "Categories range from Ocean Suite to Owner's Residence"
        ]
      }
    },
    {
      category: "Dining",
      icon: (
        <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V9.75M3.284 14.253A9 9 0 0012 21m0-11.25V3.75m0 5.25h5.25M12 9H6.75" />
        </svg>
      ),
      silversea: {
        title: "Destination-Driven Cuisine",
        points: [
          "S.A.L.T. culinary program — destination-inspired",
          "Multiple restaurants with global cuisine",
          "Emphasis on local ingredients and cultural dining",
          "Fine dining atmosphere with personalized service",
          "All dining included in cruise fare"
        ]
      },
      explora: {
        title: "Contemporary & Varied",
        points: [
          "Six restaurants with diverse global cuisines",
          "12 bars and lounges aboard",
          "Modern Mediterranean and international options",
          "Relaxed, contemporary dining atmosphere",
          "All dining included — no surcharges"
        ]
      }
    }
  ];

  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Content cards */}
          <div>
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
                Deep Comparison
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-10 leading-tight">
                Suites & Dining
              </h2>
            </FadeIn>

            <div className="space-y-6">
              {sections.map((section, idx) => (
                <FadeIn key={idx} delay={0.1 * (idx + 1)}>
                  <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
                    <div className="bg-navy-950 px-6 py-3 flex items-center gap-3">
                      <div className="flex-shrink-0">{section.icon}</div>
                      <h3 className="font-display text-sm uppercase tracking-widest text-gold-400">{section.category}</h3>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-slate-100">
                      {/* Silversea */}
                      <div className="p-5">
                        <h4 className="font-display text-xs uppercase tracking-wider text-navy-950 mb-3">{section.silversea.title}</h4>
                        <ul className="space-y-2">
                          {section.silversea.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1 h-1 bg-gold-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="font-sans text-slate-600 text-xs font-light leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Explora */}
                      <div className="p-5">
                        <h4 className="font-display text-xs uppercase tracking-wider text-navy-950 mb-3">{section.explora.title}</h4>
                        <ul className="space-y-2">
                          {section.explora.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1 h-1 bg-gold-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="font-sans text-slate-600 text-xs font-light leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <FadeIn delay={0.15}>
            <div className="sticky top-24">
              <img 
                src={image}
                alt="Luxury cruise suites and dining comparison"
                className="w-full h-[520px] object-cover rounded-2xl shadow-lg mb-6"
                loading="lazy"
              />
              <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <h4 className="font-display text-sm text-navy-950 uppercase tracking-wider mb-3">Angela Hughes' Advice</h4>
                <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                  "Your suite is one of the most important decisions you will make. But comparing suite sizes alone can be misleading. The more important questions are: How is the space configured? How much time will you spend inside? Do you want butler service?"
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ExploraSuitesDiningWellness;
