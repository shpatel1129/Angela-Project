import React from 'react';
import FadeIn from './FadeIn';
import { CheckCircle, DollarSign, Calendar } from 'lucide-react';

const DiningComparisonTable = ({ data }) => {
  if (!data || !data.rows) return null;

  return (
    <section className="py-24 bg-ice-50 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full mix-blend-multiply blur-3xl translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">{data.title}</h2>
            {data.subtitle && (
              <p className="font-sans text-xl text-navy-600 max-w-2xl mx-auto">
                {data.subtitle}
              </p>
            )}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.rows.map((row, idx) => {
            const [venue, cuisine, pricing, reservations] = row;
            const isIncluded = pricing === 'Included';
            
            return (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-ice-100 h-full flex flex-col group relative overflow-hidden">
                  
                  {/* Subtle top border accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 transition-colors duration-300 ${isIncluded ? 'bg-navy-200 group-hover:bg-navy-900' : 'bg-gold-200 group-hover:bg-gold-500'}`}></div>

                  <div className="mb-6 flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-display text-2xl text-navy-900">{venue}</h3>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${
                        isIncluded 
                          ? 'bg-green-50 text-green-700 border border-green-200' 
                          : 'bg-gold-50 text-gold-700 border border-gold-200'
                      }`}>
                        {isIncluded ? 'Included' : 'Supplement'}
                      </span>
                    </div>
                    <p className="text-navy-600 font-sans font-medium uppercase tracking-widest text-sm">
                      {cuisine}
                    </p>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-ice-100">
                    <div className="flex items-center gap-3 text-navy-700">
                      <DollarSign className={`w-5 h-5 ${isIncluded ? 'text-green-600' : 'text-gold-600'}`} />
                      <span className="font-sans text-sm">{pricing}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-navy-700">
                      <Calendar className="w-5 h-5 text-navy-400" />
                      <span className="font-sans text-sm">{reservations}</span>
                    </div>
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

export default DiningComparisonTable;
