import React from 'react';

const FinalVerdict = ({ data }) => {
  return (
    <section className="w-full py-16 bg-white border-t border-border-light">
      <div className="max-w-[1000px] mx-auto px-6 text-center">
        <h2 className="font-display text-4xl text-navy-950 mb-6">{data?.title}</h2>
        <p className="font-sans text-xl text-slate-600 mb-16 whitespace-pre-line leading-relaxed">
          {data?.description}
        </p>

        <div className="flex flex-col md:flex-row gap-12 text-left mb-16">
          {/* AmaWaterways Verdict */}
          <div className="flex-1 bg-slate-50 rounded-xl p-8 border border-border-light">
            <h3 className="font-sans font-bold text-lg text-navy-950 mb-6 pb-4 border-b border-border-light">{data?.ama?.title}</h3>
            <ul className="space-y-3">
              {data?.ama?.list?.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-800 flex-shrink-0" />
                  <span className="font-sans text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Avalon Verdict */}
          <div className="flex-1 bg-slate-50 rounded-xl p-8 border border-border-light">
            <h3 className="font-sans font-bold text-lg text-navy-950 mb-6 pb-4 border-b border-border-light">{data?.avalon?.title}</h3>
            <ul className="space-y-3">
              {data?.avalon?.list?.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-800 flex-shrink-0" />
                  <span className="font-sans text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="font-display text-2xl text-navy-900 italic">
          {data?.conclusion}
        </p>
      </div>
    </section>
  );
};

export default FinalVerdict;
