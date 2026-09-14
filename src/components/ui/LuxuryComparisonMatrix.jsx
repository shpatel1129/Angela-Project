import React from 'react';
import FadeIn from './FadeIn';
import { Check, X, Star, Minus } from 'lucide-react';

const renderCellContent = (cell) => {
  if (cell === 'Yes') return <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium"><Check size={16} /> Yes</span>;
  if (cell === 'No') return <span className="inline-flex items-center gap-1.5 text-rose-400 font-medium"><X size={16} /> No</span>;
  if (cell.includes('Stars')) {
    const count = parseInt(cell);
    return (
      <div className="flex gap-0.5">
        {[1,2,3,4,5].map(s => (
          <Star key={s} size={14} className={s <= count ? 'fill-gold-400 text-gold-400' : 'fill-transparent text-navy-600'} />
        ))}
      </div>
    );
  }
  return <span>{cell}</span>;
};

const LuxuryComparisonMatrix = ({ title, subtitle, headers, rows, image }) => {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-900 rounded-full blur-[120px] opacity-15 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ice-900 rounded-full blur-[100px] opacity-15 translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4">Side-By-Side Analysis</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">{title}</h2>
            {subtitle && <p className="font-sans text-lg text-ice-200/70 max-w-2xl mx-auto">{subtitle}</p>}
            <div className="w-24 h-1 bg-gold-500 mx-auto mt-6 rounded-full"></div>
          </FadeIn>
        </div>

        {/* Image + Table Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Image */}
          {image && (
            <FadeIn className="lg:col-span-4 hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px] group sticky top-8">
                <img 
                  src={image} 
                  alt="Luxury cruise comparison" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-display text-xl text-white mb-2">How Does Windstar Compare?</p>
                  <p className="font-sans text-sm text-ice-200/70">See how Windstar stacks up against the world's most prestigious luxury cruise lines.</p>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Table */}
          <FadeIn delay={0.2} className={image ? 'lg:col-span-8' : 'lg:col-span-12'}>
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
                            className={`py-5 px-4 text-left font-sans text-xs font-bold tracking-wider uppercase ${
                              i === 0 ? 'text-gold-400 pl-6' : 
                              i === 1 ? 'text-gold-300 bg-gold-500/10' :
                              'text-ice-200'
                            }`}
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
                                  : cellIndex === 1 
                                    ? 'text-gold-200 font-medium bg-gold-500/5'
                                    : 'text-ice-100/80 font-light'
                              }`}
                            >
                              {cellIndex === 0 ? cell : renderCellContent(cell)}
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
      </div>
    </section>
  );
};

export default LuxuryComparisonMatrix;
