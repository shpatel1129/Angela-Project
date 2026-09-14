import React from 'react';
import { Calendar, Droplets, Sun, Leaf, Snowflake } from 'lucide-react';

const SeasonalTimeline = ({ data }) => {
  if (!data || !data.months) return null;

  const getIcon = (month) => {
    switch(month.toLowerCase()) {
      case 'april': return <Droplets className="w-6 h-6 text-blue-500" />;
      case 'may': return <Sun className="w-6 h-6 text-yellow-500" />;
      case 'september': return <Calendar className="w-6 h-6 text-orange-500" />;
      case 'october': return <Leaf className="w-6 h-6 text-red-500" />;
      case 'december': return <Snowflake className="w-6 h-6 text-sky-500" />;
      default: return <Calendar className="w-6 h-6 text-stone-500" />;
    }
  };

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-stone-900 mb-4">{data.title}</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {data.months.map((item, index) => (
            <div key={index} className="relative flex items-start group">
              {/* Timeline Line */}
              {index !== data.months.length - 1 && (
                <div className="absolute left-8 top-16 bottom-[-3rem] w-px bg-stone-200 group-hover:bg-amber-200 transition-colors duration-300"></div>
              )}
              
              {/* Icon */}
              <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-white rounded-full border border-stone-200 flex items-center justify-center shadow-sm group-hover:border-amber-400 group-hover:shadow-md transition-all duration-300">
                {getIcon(item.month)}
              </div>
              
              {/* Content */}
              <div className="ml-8 bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex-1 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4">
                  <h3 className="text-2xl font-serif text-stone-900">{item.month}</h3>
                  <span className="text-amber-700 font-medium tracking-wide uppercase text-sm mt-1 sm:mt-0">{item.subtitle}</span>
                </div>
                <p className="text-stone-600 leading-relaxed mb-6">{item.description}</p>
                
                <div className="bg-stone-50 p-4 rounded-xl">
                  <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Best Rivers for {item.month}</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.bestRivers.map((river, idx) => (
                      <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-stone-700 border border-stone-200 shadow-sm">
                        {river}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalTimeline;
