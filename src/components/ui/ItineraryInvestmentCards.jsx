import React from 'react';
import { Calendar, Compass } from 'lucide-react';

const ItineraryInvestmentCards = ({ title, subtitle, itineraries }) => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display text-navy-950 mb-4">
              {title}
            </h2>
            <p className="text-slate-600">{subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {itineraries.map((itin, index) => (
            <div key={index} className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={itin.image} 
                  alt={itin.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-navy-950 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {itin.duration}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-display mb-1">{itin.title}</h3>
                  <p className="text-gold-400 font-semibold">{itin.price}</p>
                </div>
              </div>
              <div className="bg-white p-6 border-x border-b border-slate-100 rounded-b-3xl">
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-2">Ideal For</span>
                  <p className="text-sm text-navy-900">{itin.idealFor}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {itin.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <Compass className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItineraryInvestmentCards;
