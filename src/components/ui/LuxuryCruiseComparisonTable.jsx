import React from 'react';
import FadeIn from './FadeIn';

const LuxuryCruiseComparisonTable = ({ title, headers, rows }) => {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-900 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ice-900 rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">{title}</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="overflow-x-auto pb-4">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border border-navy-800 rounded-2xl bg-navy-900/50 backdrop-blur-sm shadow-2xl">
                <table className="min-w-full divide-y divide-navy-800">
                  <thead className="bg-navy-900">
                    <tr>
                      {headers.map((header, i) => (
                        <th 
                          key={i} 
                          scope="col" 
                          className={`py-5 px-4 text-left font-sans text-sm font-semibold tracking-wider uppercase ${i === 0 ? 'text-gold-400 pl-6' : 'text-ice-200'}`}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-800/50">
                    {rows.map((row, rowIndex) => (
                      <tr 
                        key={rowIndex} 
                        className="hover:bg-navy-800/50 transition-colors duration-200"
                      >
                        {row.map((cell, cellIndex) => (
                          <td 
                            key={cellIndex} 
                            className={`py-4 px-4 whitespace-nowrap text-sm ${
                              cellIndex === 0 
                                ? 'font-semibold text-white pl-6' 
                                : 'text-ice-100/80 font-light'
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default LuxuryCruiseComparisonTable;
