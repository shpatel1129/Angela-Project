import React from 'react';
import FadeIn from './FadeIn';

const IconWrapper = ({ name }) => {
  const getIcon = () => {
    switch (name) {
      case 'window':
        return (
          <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h18v18H3V3z M3 12h18 M12 3v18" />
          </svg>
        );
      case 'ship':
        return (
          <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12zm0 0l-1.5 1.5M20 15l1.5 1.5M9 21v-4m6 4v-4" />
          </svg>
        );
      case 'compass':
        return (
          <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'star':
        return (
          <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return <div className="p-3 bg-gold-50 rounded-lg shrink-0">{getIcon()}</div>;
};

const BrandPillarsShowcase = ({ data }) => {
  if (!data || !data.pillars) return null;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">{data.title}</h2>
            {data.subtitle && (
              <p className="font-sans text-lg text-navy-700 leading-relaxed">
                {data.subtitle}
              </p>
            )}
          </FadeIn>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {data.pillars.map((pillar, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="w-full md:w-[calc(50%-1rem)] flex">
              <div className="group w-full p-8 rounded-2xl border border-ice-100 bg-white shadow-lg shadow-navy-900/5 hover:shadow-xl hover:shadow-navy-900/10 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <IconWrapper name={pillar.icon} />
                  <div>
                    <h3 className="font-display text-2xl text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-navy-700 leading-relaxed text-sm md:text-base">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPillarsShowcase;
