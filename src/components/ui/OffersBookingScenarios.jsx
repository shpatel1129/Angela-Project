import React from 'react';
import FadeIn from './FadeIn';

const OffersBookingScenarios = () => {
  const scenarios = [
    {
      title: "First-Time Silversea Guest",
      icon: (
        <svg className="w-6 h-6 text-navy-950" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V9.75M3.284 14.253A9 9 0 0012 21m0-11.25V3.75m0 5.25h5.25M12 9H6.75" />
        </svg>
      ),
      strategy: "Focus on the Public Promotions",
      details: [
        "You do not have VS Days yet, so standard Venetian Society savings will not apply.",
        "Focus on finding strong public promotions (like airfare inclusions or suite upgrades).",
        "Sign up for the Venetian Society on your first voyage to earn days for subsequent trips."
      ]
    },
    {
      title: "Loyal Returning Member",
      icon: (
        <svg className="w-6 h-6 text-navy-950" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      strategy: "Leverage Your Milestone Savings",
      details: [
        "Check which upcoming sailings are designated as Venetian Society Sailings (usually offering 5% savings).",
        "Stack loyalty savings with public cruise promotions where permitted.",
        "Ensure your travel advisor inputs your Venetian Society number at the quote stage."
      ]
    },
    {
      title: "Solo Luxury Traveler",
      icon: (
        <svg className="w-6 h-6 text-navy-950" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      strategy: "Look for Solo Fare Reductions",
      details: [
        "Silversea regularly features solo supplements as low as 10% to 25% on selected itineraries.",
        "Solo travelers under the updated program can earn double VS Days on qualifying solo bookings.",
        "Compare the total value of solo promotions against standard double-occupancy pricing."
      ]
    },
    {
      title: "Expedition Cruiser",
      icon: (
        <svg className="w-6 h-6 text-navy-950" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V9.75M3.284 14.253A9 9 0 0012 21m0-11.25V3.75m0 5.25h5.25M12 9H6.75" />
        </svg>
      ),
      strategy: "Combine Destination Packages",
      details: [
        "Expedition fares for Antarctica, Galapagos, or the Arctic often include air and hotel transfers.",
        "Loyalty benefits apply to expedition voyages, but promotional terms are highly destinations-specific.",
        "Book far in advance, as popular expedition itineraries sell out early, limiting late-stage deals."
      ]
    }
  ];

  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              Booking Scenarios
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
              Strategic Booking Advice for Different Travelers
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              How you should navigate Silversea offers depends heavily on your luxury travel style, past history with the brand, and itinerary goals.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scenarios.map((sc, idx) => (
            <FadeIn key={idx} delay={0.1 * (idx + 1)}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center">{sc.icon}</div>
                    <div>
                      <h3 className="font-display text-lg text-navy-950 font-semibold">{sc.title}</h3>
                      <p className="text-gold-500 text-xs font-display uppercase tracking-widest">{sc.strategy}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 mt-6">
                    {sc.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-gold-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="font-sans text-slate-600 text-sm font-light leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OffersBookingScenarios;
