import React from 'react';
import FadeIn from './FadeIn';

const QuoteBookingTips = () => {
  const tips = [
    {
      title: "Book Early for Suite Selection",
      icon: (
        <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
      desc: "Silversea's highly desirable suites and limited expedition cabins sell out early. Booking 10–18 months in advance secures the best layout and position."
    },
    {
      title: "Be Flexible With Travel Dates",
      icon: (
        <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
      desc: "Comparing departures adjacent to your preferred dates can unlock reduced solo supplements, capacity-controlled offers, or better suite inventory."
    },
    {
      title: "Avoid Direct Booking Pitfalls",
      icon: (
        <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      ),
      desc: "Booking directly with a cruise line means sacrificing the independent value comparison, hotel amenities, and customized flight planning an advisor provides."
    }
  ];

  return (
    <section className="w-full bg-navy-950 py-24 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(201,161,92,0.06),transparent_50%)] z-0"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Booking Tips
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-6 leading-tight">
              Strategic Booking Advice for Value Optimization
            </h2>
            <p className="font-sans text-slate-300 font-light leading-relaxed">
              Navigating luxury cruise pricing is about understanding how to optimize each component of the booking. Here are three core strategies.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, idx) => (
            <FadeIn key={idx} delay={0.15 * (idx + 1)}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-gold-400 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 mb-6 inline-block flex items-center justify-center w-14 h-14">{tip.icon}</div>
                  <h3 className="font-display text-lg text-slate-100 font-semibold mb-3">{tip.title}</h3>
                  <p className="font-sans text-slate-300 text-xs font-light leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-6 text-center max-w-2xl mx-auto">
          <FadeIn delay={0.6}>
            <p className="font-sans text-slate-300 text-xs font-light italic leading-relaxed">
              "A personalized Silversea proposal evaluates all active promotions, air programs, transfers, and loyalty milestones to identify the single best option for your priorities."
            </p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default QuoteBookingTips;
