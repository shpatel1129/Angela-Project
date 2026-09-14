import React from 'react';

const TravelerMatchmaker = ({ personas, images = [] }) => {
  if (!personas || personas.length === 0) return null;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-12 gap-8 border-b border-navy-900/10 pb-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display text-navy-950 mb-4">Traveler Matchmaker</h2>
            <p className="text-slate-500 font-sans text-lg">Curated cabin recommendations based on your unique travel style and priorities.</p>
          </div>
          <div className="hidden lg:block text-amber-700 font-display italic text-2xl">
            Find Your Fit
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
          {personas.map((persona, idx) => (
            <div key={idx} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100">
              
              {/* Visual Image Section */}
              <div className="w-full h-56 relative overflow-hidden">
                <img 
                  src={images[idx] || images[0]} 
                  alt={persona.type} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 pr-6">
                  <h3 className="text-2xl md:text-3xl font-display text-white leading-tight drop-shadow-md">
                    {persona.type}
                  </h3>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
                <p className="text-slate-600 font-sans leading-relaxed text-base flex-grow mb-6">
                  {persona.reason}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-600 font-bold mb-2">Our Recommendation</p>
                  <p className="font-display text-navy-950 text-xl">{persona.recommendation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelerMatchmaker;
