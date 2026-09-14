import React from 'react';

const ComparisonTable = ({ data }) => {
  if (!data || !data.headers || data.headers.length === 0) return null;

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="font-display text-4xl text-navy-950 mb-12 text-center">
          {data?.title}
        </h2>
        
        <div className="overflow-x-auto rounded-lg shadow-sm border border-border-light">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-navy-950 text-white">
                {data?.headers?.map((header, idx) => (
                  <th key={idx} className="px-6 py-5 font-sans font-medium tracking-wide uppercase text-sm">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {data?.rows?.map((row, rowIndex) => (
                <tr key={rowIndex} className={`border-b border-border-light last:border-b-0 hover:bg-ice-50 transition-colors ${rowIndex % 2 === 1 ? 'bg-slate-50' : ''}`}>
                  {row.map((cell, cellIndex) => (
                    <td 
                      key={cellIndex} 
                      className={`px-6 py-5 font-sans text-sm ${cellIndex === 0 ? 'font-medium text-navy-900' : 'text-slate-600'}`}
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
    </section>
  );
};

export default ComparisonTable;
